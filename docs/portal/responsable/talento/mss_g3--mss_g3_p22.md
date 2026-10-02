# mss_g3_p22

Identificador: `mss_g3/mss_g3_p22.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave              | Texto                                                                                                                                                                                                                                       | Ámbito | Diccionario                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.NoDataFound8 | Actualmente no hay datos.                                                                                                                                                                                                                   | COLL   | [translations/ess_mss_gen_es.properties:L121](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound8 | Actualmente no hay datos.                                                                                                                                                                                                                   | CYC    | [translations/ess_mss_gen_es.properties:L121](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound8 | Actualmente no hay datos.                                                                                                                                                                                                                   | IBER   | [translations/ess_mss_gen_es.properties:L121](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound8 | Actualmente no hay datos.                                                                                                                                                                                                                   | BASE   | [translations/ess_mss_gen_es.properties:L121](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.ProfsData | Datos Profesionales del Empleado                                                                                                                                                                                                            | COLL   | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.ProfsData | Datos Profesionales del Empleado                                                                                                                                                                                                            | CYC    | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.ProfsData | Datos Profesionales del Empleado                                                                                                                                                                                                            | IBER   | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.ProfsData | Datos Profesionales del Empleado                                                                                                                                                                                                            | BASE   | [translations/ess_mss_gen_es.properties:L192](../../referencias/literales/ess_mss_gen_es.md) |
| ev_mss.DescrSolEv  | Consulta los resultados de la evaluación de tus empleados. Además, en caso de ser necesario, puedes solicitar formación para los Conocimientos que no han alcanzado el nivel requerido, desde el enlace que hay sobre cada nivel requerido. | BASE   | [translations/mss_ev_es.properties:L142](../../referencias/literales/mss_ev_es.md)           |
| ev_mss.LblForm     | Formación disponible                                                                                                                                                                                                                        | BASE   | [translations/mss_ev_es.properties:L75](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.LblPlan     | Ir a plan de acción                                                                                                                                                                                                                         | BASE   | [translations/mss_ev_es.properties:L74](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.Plan        | Plan de desarrollo                                                                                                                                                                                                                          | BASE   | [translations/mss_ev_es.properties:L18](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.SolEv       | Solicitud consecuencia de evaluación                                                                                                                                                                                                        | BASE   | [translations/mss_ev_es.properties:L31](../../referencias/literales/mss_ev_es.md)            |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p22.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p22.jsp) | `4e33b88bcef9b1d9e4ee2d599afcc2d6c3e7e22bd158a0e48c6cacfbb898dac1` |    243 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p22.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p22.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta            |
| --- | ----------------------------------- |
| 129 | [valor dinámico] [valor dinámico]   |
| 159 | [valor dinámico] - [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                           |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 128 | img     | alt=Competencias del puesto; title=Competencias del puesto; src=/iconos/noname_competencias_puesto_82_100.gif; width=82; height=100 |
| 132 | a       | class=enlacefuncional; tabindex=1; title=JSP_EXPR_TranMss.getProperty(; href=javascript:plan_accion();                              |
| 138 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17_mod.jsp?estado=31; method=post; name=plan_accion; id=plan_accion                |
| 139 | input   | type=hidden; id=IDRH; name=IDRH; value=&lt;%=IDRH%&gt;                                                                              |
| 140 | input   | type=hidden; id=RHRole; name=RHRole; value=&lt;%=RHRole%&gt;                                                                        |
| 141 | input   | type=hidden; id=PERIODO; name=PERIODO; value=&lt;%=PERIODO%&gt;                                                                     |
| 142 | input   | type=hidden; id=DTStartEval; name=DTStartEval; value=&lt;%=DTStartEval%&gt;                                                         |
| 143 | input   | type=hidden; id=DTEndEv; name=DTEndEv; value=&lt;%=DTEndEv%&gt;                                                                     |
| 144 | input   | type=hidden; id=zORDINAL; name=zORDINAL; value=&lt;%=zORDINAL%&gt;                                                                  |
| 145 | input   | type=hidden; id=znombreemp; name=znombreemp; value=&lt;%=znombreemp%&gt;                                                            |
| 146 | input   | type=hidden; id=NombreProceso; name=NombreProceso; value=&lt;%=NombreProceso%&gt;                                                   |
| 147 | input   | type=hidden; id=mss; name=mss; value=1                                                                                              |
| 161 | a       | class=fuenteleyenda_big; title=&lt;%=profData%&gt;; href=javascript:load('&lt;%=sIDPerson%&gt;')                                    |
| 214 | a       | href=javascript:formacion('&lt;%=zSCOIDCAPABILITY%&gt;','&lt;%=zSCOIDCAPREQLVL%&gt;');; title=JSP_EXPR_TranMss.getProperty(         |
| 224 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc2.jsp?estado=31; method=post; name=oculto2; id=oculto2                       |
| 225 | input   | type=hidden; id=zextd; name=zextd; value=                                                                                           |
| 226 | input   | type=hidden; id=zlevel; name=zlevel; value=                                                                                         |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 23  | IDRH            | getParameter(request,"IDRH")          |
| 24  | RHRole          | getParameter(request,"RHRole")        |
| 25  | PERIODO         | getParameter(request,"PERIODO")       |
| 26  | DTStartEval     | getParameter(request,"DTStartEval")   |
| 27  | DTEndEv         | getParameter(request,"DTEndEv")       |
| 28  | zORDINAL        | getParameter(request,"zORDINAL")      |
| 29  | znombreemp      | getParameter(request,"znombreemp")    |
| 30  | NombreProceso   | getParameter(request,"NombreProceso") |

| L   | Variable           | Expresión fuente                                                                               | Resolución estática parcial                                                                                                            |
| --- | ------------------ | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 21  | estado             | zobjtabla.m4paramvalor("estado")                                                               | zobjtabla.m4paramvalor("estado")                                                                                                       |
| 22  | zinicios           | zobjtabla.m4paramvalor("zinicios")                                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                     |
| 23  | IDRH               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")                               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")                                                                       |
| 24  | RHRole             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole")                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole")                                                                     |
| 25  | PERIODO            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PERIODO")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PERIODO")                                                                    |
| 26  | DTStartEval        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval")                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval")                                                                |
| 27  | DTEndEv            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTEndEv")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTEndEv")                                                                    |
| 28  | zORDINAL           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zORDINAL")                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zORDINAL")                                                                   |
| 29  | znombreemp         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombreemp")                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombreemp")                                                                 |
| 30  | NombreProceso      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso")                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso")                                                              |
| 31  | profData           | Tran.getProperty("Labelmss.ProfsData")                                                         | Tran.getProperty("Labelmss.ProfsData")                                                                                                 |
| 65  | zsubsesion         | "SSM_EVAL_CAPAB"                                                                               | SSM_EVAL_CAPAB                                                                                                                         |
| 66  | zmeta4object       | "SSM_EVAL_CAPAB"                                                                               | SSM_EVAL_CAPAB                                                                                                                         |
| 67  | znodo              | "SSM_EVAL_CAPAB"                                                                               | SSM_EVAL_CAPAB                                                                                                                         |
| 69  | ztipocarga         | " "                                                                                            |                                                                                                                                        |
| 70  | zventanas          | "30"                                                                                           | 30                                                                                                                                     |
| 71  | zvuelta            | 5                                                                                              | 5                                                                                                                                      |
| 72  | zdireccion         | "/mss_g3/mss_g3_p9.jsp"                                                                        | /mss_g3/mss_g3_p9.jsp                                                                                                                  |
| 73  | zestado            | "31"                                                                                           | 31                                                                                                                                     |
| 74  | zregistroinicial   | Integer.valueOf(zinicios).intValue()                                                           | Integer.valueOf(zinicios).intValue()                                                                                                   |
| 76  | zventana           | Integer.valueOf(zventanas).intValue()                                                          | Integer.valueOf(zventanas).intValue()                                                                                                  |
| 77  | zregistrofinal     | zregistroinicial + zventana - 1                                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                     |
| 79  | zoutputdef         | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"                 | SSM_EVAL_CAPAB{"!"}SSM_EVAL_CAPAB{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 80  | zmove              | znodo + ":" + znodo + "[" + zregistroinicial + "]"                                             | SSM_EVAL_CAPAB{":"}SSM_EVAL_CAPAB{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 81  | zraiz              | znodo + ":" + zsubsesion + "!" + znodo + "."                                                   | SSM_EVAL_CAPAB{":"}SSM_EVAL_CAPAB{"!"}SSM_EVAL_CAPAB{"."}                                                                              |
| 82  | ziterator          | znodo + ":" + zsubsesion + "!" + znodo                                                         | SSM_EVAL_CAPAB{":"}SSM_EVAL_CAPAB{"!"}SSM_EVAL_CAPAB                                                                                   |
| 86  | zSCO_ID_CAPABILITY | zraiz + "SCO_ID_CAPABILITY"                                                                    | SSM_EVAL_CAPAB{":"}SSM_EVAL_CAPAB{"!"}SSM_EVAL_CAPAB{"."}{"SCO_ID_CAPABILITY"}                                                         |
| 87  | zSCO_NM_LEVEL      | zraiz + "SCO_MEANING"                                                                          | SSM_EVAL_CAPAB{":"}SSM_EVAL_CAPAB{"!"}SSM_EVAL_CAPAB{"."}{"SCO_MEANING"}                                                               |
| 88  | zSCO_NM_LEVEL_1    | zraiz + "SCO_MEANING_1"                                                                        | SSM_EVAL_CAPAB{":"}SSM_EVAL_CAPAB{"!"}SSM_EVAL_CAPAB{"."}{"SCO_MEANING_1"}                                                             |
| 91  | znodoprincipal     | "SSM_PRINCIPAL"                                                                                | SSM_PRINCIPAL                                                                                                                          |
| 92  | zmetodocarga       | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                                        | CARGA:{}SSM_EVAL_CAPAB{"!"}SSM_PRINCIPAL{".CARGA"}                                                                                     |
| 111 | zcounti            | 0                                                                                              | 0                                                                                                                                      |
| 112 | zcount             | 0                                                                                              | 0                                                                                                                                      |
| 122 | zcountv            | String.valueOf(zcounti)                                                                        | String.valueOf(zcounti)                                                                                                                |
| 151 | zregistroinicials  | String.valueOf(zregistroinicial)                                                               | String.valueOf(zregistroinicial)                                                                                                       |
| 152 | zregistrofinals    | String.valueOf(zregistroinicial + zcounti - 1)                                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                        |
| 153 | zposicions         | "0"                                                                                            | 0                                                                                                                                      |
| 154 | zcontrol           | 0                                                                                              | 0                                                                                                                                      |
| 155 | clase              | ""                                                                                             |                                                                                                                                        |
| 157 | zposicion          | 0                                                                                              | 0                                                                                                                                      |
| 160 | sIDPerson          | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", IDRH) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", IDRH)                                         |
| 172 | i                  | 0                                                                                              | 0                                                                                                                                      |
| 173 | zSCO_GB_NAME       | ""                                                                                             |                                                                                                                                        |
| 174 | zSCONMEXTDKN       | ""                                                                                             |                                                                                                                                        |
| 175 | zSCOIDCAPABILITY   | ""                                                                                             |                                                                                                                                        |
| 176 | zSCONMLEVEL_RAT    | ""                                                                                             |                                                                                                                                        |
| 177 | zSCONMLEVEL_REQ    | ""                                                                                             |                                                                                                                                        |
| 178 | zSCOIDCAPREQLVL    | ""                                                                                             |                                                                                                                                        |
| 179 | zSCOIDCAPRATLVL    | ""                                                                                             |                                                                                                                                        |
| 180 | zSCOPERCENT        | ""                                                                                             |                                                                                                                                        |
| 181 | zFormacion         | "NO"                                                                                           | NO                                                                                                                                     |
| 184 | id                 | String.valueOf(i)                                                                              | String.valueOf(i)                                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                         |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 94  | m4:startpage | m4task=SSM_EVAL_CAPAB                                                                                                                                      |
| 95  | m4:beginjob  |                                                                                                                                                            |
| 96  | m4:datadef   | m4o=SSM_EVAL_CAPAB; m4name=SSM_EVAL_CAPAB                                                                                                                  |
| 104 | m4:exec      | m4method=CARGA:{}SSM_EVAL_CAPAB{"!"}SSM_PRINCIPAL{".CARGA"}                                                                                                |
| 104 | m4:param     | name=TIPO_CARGA; value=                                                                                                                                    |
| 105 | m4:outputdef | m4alias=SSM_EVAL_CAPAB                                                                                                                                     |
| 105 | m4:param     | name=m4name0; value=SSM_EVAL_CAPAB{"!"}SSM_EVAL_CAPAB{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 106 | m4:endjob    |                                                                                                                                                            |
| 107 | m4:move      |                                                                                                                                                            |
| 107 | m4:param     | name=SSM_EVAL_CAPAB; value=SSM_EVAL_CAPAB{":"}SSM_EVAL_CAPAB{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                 |
| 165 | m4:label     | m4name=SSM_EVAL_CAPAB{":"}SSM_EVAL_CAPAB{"!"}SSM_EVAL_CAPAB{"."}{"SCO_ID_CAPABILITY"}; htmlsafe=true                                                       |
| 166 | m4:label     | m4name=SSM_EVAL_CAPAB{":"}SSM_EVAL_CAPAB{"!"}SSM_EVAL_CAPAB{"."}{"SCO_MEANING_1"}; htmlsafe=true                                                           |
| 167 | m4:label     | m4name=SSM_EVAL_CAPAB{":"}SSM_EVAL_CAPAB{"!"}SSM_EVAL_CAPAB{"."}{"SCO_MEANING"}; htmlsafe=true                                                             |
| 239 | m4:endpage   |                                                                                                                                                            |

| L   | Operación        | Argumentos literales                                  |
| --- | ---------------- | ----------------------------------------------------- |
| 99  | setItem          | zsubsesion,znodo,"","SCO_P_OR_HR_ROLE",RHRole         |
| 100 | setItem          | zsubsesion,znodo,"","SCO_P_DT_START_EVAL",DTStartEval |
| 101 | setItem          | zsubsesion,znodoprincipal,"","SSM_ID_PERSON",IDRH     |
| 117 | getCount         | znodo,zsubsesion,znodo                                |
| 118 | getCountInClient | znodo,zsubsesion,znodo                                |
| 186 | getItem          | znodo,zmeta4object,znodo,"","SCO_GB_NAME"             |
| 187 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_CAPABILITY"       |
| 189 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_EXTD_KN"          |
| 190 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_CAP_REQ_LVL"      |
| 191 | getItem          | znodo,zmeta4object,znodo,"","SCO_MEANING"             |
| 192 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_CAP_RAT_LVL"      |
| 193 | getItem          | znodo,zmeta4object,znodo,"","SCO_MEANING_1"           |
| 194 | getItem          | znodo,zmeta4object,znodo,"","SCO_P_PERCENT"           |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos |
| --- | ----------- | ---------- |
| 41  | formacion   | extd,lev   |
| 46  | plan_accion |            |
| 52  | load        | empleado   |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                           |
| 34  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                   |
| 150 | &lt;% if (zcounti &gt; 0) {                                                                                                                                                                                               |
| 201 | if (zcontrol==0){                                                                                                                                                                                                         |
| 203 | }else{                                                                                                                                                                                                                    |
| 210 | &lt;%if(zSCOPERCENT.equals("NO")==true)                                                                                                                                                                                   |
| 212 | else                                                                                                                                                                                                                      |
| 231 | &lt;%}else{%&gt;                                                                                                                                                                                                          |
| 54  | expresión de cálculo/transformación: var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=" + empleado;                                                                     |
| 75  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                                                             |
| 77  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                                                |
| 79  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                                                                  |
| 80  | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                                                                    |
| 81  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                                                         |
| 82  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                                                                                                           |
| 86  | expresión de cálculo/transformación: String zSCO_ID_CAPABILITY = zraiz + "SCO_ID_CAPABILITY";                                                                                                                             |
| 87  | expresión de cálculo/transformación: String zSCO_NM_LEVEL = zraiz + "SCO_MEANING";                                                                                                                                        |
| 88  | expresión de cálculo/transformación: String zSCO_NM_LEVEL_1 = zraiz + "SCO_MEANING_1";                                                                                                                                    |
| 92  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                                                       |
| 152 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                                                             |
| 161 | expresión de cálculo/transformación: &lt;a class="fuenteleyenda_big" title="&lt;%=profData%&gt;" href="javascript:load('&lt;%=sIDPerson%&gt;')"&gt;&lt;%=znombreemp%&gt; - &lt;%=NombreProceso%&gt; &lt;/a&gt;&lt;/td&gt; |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 16  | ../../mss_generico/espanol/menu_mss.jsp               |
| 17  | /mss_g3/mss_ev_trans.jsp                              |
| 62  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 63  | ../../sse_generico/espanol/generico_links.jsp         |
| 230 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 236 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                          |
| --- | ------------------------------------------------------------------------------------------ |
| 12  | /css/estilo_mss.css                                                                        |
| 13  | /libreria/funciones_sse_val.js                                                             |
| 14  | /libreria/funciones_sse.js                                                                 |
| 128 | /iconos/noname_competencias_puesto_82_100.gif                                              |
| 132 | javascript:plan_accion();                                                                  |
| 138 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17_mod.jsp?estado=31                             |
| 161 | javascript:load(                                                                           |
| 214 | javascript:formacion(                                                                      |
| 224 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc2.jsp?estado=31                            |
| 16  | ../../mss_generico/espanol/menu_mss.jsp                                                    |
| 17  | /mss_g3/mss_ev_trans.jsp                                                                   |
| 54  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person= |
| 62  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                         |
| 63  | ../../sse_generico/espanol/generico_links.jsp                                              |
| 72  | /mss_g3/mss_g3_p9.jsp                                                                      |
| 230 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                      |
| 236 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                 | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ------------------------------------------------------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 16  | ../../mss_generico/espanol/menu_mss.jsp                                                    | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 17  | /mss_g3/mss_ev_trans.jsp                                                                   | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                              |
| BASE   | 62  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                         | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 63  | ../../sse_generico/espanol/generico_links.jsp                                              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 230 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                      | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 236 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                      | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 13  | /libreria/funciones_sse_val.js                                                             | contextual | [libreria/funciones_sse_val.js](../../transversal/dependencias/libreria--funciones_sse_val.md)                  |
| BASE   | 14  | /libreria/funciones_sse.js                                                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 132 | javascript:plan_accion();                                                                  | dinámica   | P06                                                                                                             |
| BASE   | 138 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17_mod.jsp?estado=31                             | ausente    | P06                                                                                                             |
| BASE   | 161 | javascript:load(                                                                           | dinámica   | P06                                                                                                             |
| BASE   | 214 | javascript:formacion(                                                                      | dinámica   | P06                                                                                                             |
| BASE   | 224 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc2.jsp?estado=31                            | ausente    | P06                                                                                                             |
| BASE   | 16  | ../../mss_generico/espanol/menu_mss.jsp                                                    | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 17  | /mss_g3/mss_ev_trans.jsp                                                                   | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                              |
| BASE   | 54  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person= | ausente    | P06                                                                                                             |
| BASE   | 62  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                         | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 63  | ../../sse_generico/espanol/generico_links.jsp                                              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 72  | /mss_g3/mss_g3_p9.jsp                                                                      | ausente    | P06                                                                                                             |
| BASE   | 230 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                      | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 236 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                      | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p22.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
