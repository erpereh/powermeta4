# mss_g3_p6_desc2

Identificador: `mss_g3/mss_g3_p6_desc2.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave         | Texto                                              | Ámbito | Diccionario                                                                                  |
| ------------- | -------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | COLL   | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | CYC    | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | IBER   | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | BASE   | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p6_desc2.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6_desc2.jsp) | `536b821e5eb74cd473750c7792d52c62cc8a98158d92e6e2ff2fd6f6eaf17c78` |    260 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p6_desc2.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6_desc2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta               |
| --- | -------------------------------------- |
| 176 | [valor dinámico] [valor dinámico]      |
| 204 | ',' ');" title="Detalle del curso"&gt; |
| 212 | ',' ');" title="Detalle del curso"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 175 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=Cursos por competencias                                                                                           |
| 176 | a       | class=enlacefuncional; title=&lt;%=label_13%&gt;; tabindex=1; href=mss_g3_p6.jsp?estado=31                                                                                         |
| 204 | a       | href=javascript:solicitar_curso('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                    |
| 212 | a       | href=javascript:solicitar_curso('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                    |
| 220 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31; method=post; name=oculto; id=oculto                                                                         |
| 221 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                                                                                              |
| 222 | input   | type=hidden; id=zid; name=zid                                                                                                                                                      |
| 225 | input   | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                 |
| 226 | input   | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                    |
| 227 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                            |
| 228 | input   | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                             |
| 239 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp; method=post; name=volver; id=volver                                                                               |
| 240 | input   | type=hidden; id=person; name=person; value=&lt;%=empleado%&gt;                                                                                                                     |
| 241 | input   | type=hidden; id=person_ord; name=person_ord; value=&lt;%=periodo%&gt;                                                                                                              |
| 242 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                            |
| 243 | a       | title=&lt;%=label_11%&gt;; href=javascript:volver_prof();; tabindex=6                                                                                                              |
| 243 | img     | alt=&lt;%=label_11%&gt;; src=/iconos/icono_entrar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 247 | img     | src=/iconos/cargando.gif; alt=&lt;%=Tran.getProperty("Button.Volver")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                          |
| --- | --------------- | --------------------------------------- |
| 32  | empleado        | getParameter(request,"empleado")        |
| 33  | periodo         | getParameter(request,"periodo")         |
| 34  | nombre_empleado | getParameter(request,"nombre_empleado") |
| 35  | zVis            | getParameter(request,"zVis")            |
| 64  | estado          | getParameter(request,"estado")          |
| 65  | zinicios        | getParameter(request,"zinicios")        |
| 66  | zextd           | getParameter(request,"zextd")           |
| 67  | zlevel          | getParameter(request,"zlevel")          |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                             |
| --- | ----------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| 10  | label_01          | "Formació                                                                      | {"Formació}                                                                                                                             |
| 11  | label_02          | "Descripció                                                                    | {"Descripció}                                                                                                                           |
| 12  | label_03          | "Tipo"                                                                         | Tipo                                                                                                                                    |
| 13  | label_04          | "Nombre"                                                                       | Nombre                                                                                                                                  |
| 14  | label_05          | "Dí                                                                            | {"Dí}                                                                                                                                   |
| 15  | label_06          | "Proveedor"                                                                    | Proveedor                                                                                                                               |
| 16  | label_07          | "Cursos multimedias"                                                           | Cursos multimedias                                                                                                                      |
| 17  | label_08          | "Detalle del curso"                                                            | Detalle del curso                                                                                                                       |
| 18  | label_09          | "Esta competencia no dispone de ningú                                          | {"Esta competencia no dispone de ningú}                                                                                                 |
| 19  | label_10          | "Autor"                                                                        | Autor                                                                                                                                   |
| 20  | label_13          | "Solicita necesidades de formació                                              | {"Solicita necesidades de formació}                                                                                                     |
| 21  | label_11          | "Volver a Datos Profesionales del Empleado"                                    | Volver a Datos Profesionales del Empleado                                                                                               |
| 32  | empleado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                                                    |
| 33  | periodo           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")                                                                     |
| 34  | nombre_empleado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")                                                             |
| 35  | zVis              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                                                                        |
| 64  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                      |
| 65  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                    |
| 66  | zextd             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zextd")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zextd")                                                                       |
| 67  | zlevel            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zlevel")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zlevel")                                                                      |
| 87  | zsubsesion        | "SSM_EXT_KN_TRAINING"                                                          | SSM_EXT_KN_TRAINING                                                                                                                     |
| 88  | zMeta4Object      | "SSM_EXT_KN_TRAINING"                                                          | SSM_EXT_KN_TRAINING                                                                                                                     |
| 89  | znodo             | "M4T_CURSOS"                                                                   | M4T_CURSOS                                                                                                                              |
| 92  | ztipocarga        | "CME"                                                                          | CME                                                                                                                                     |
| 96  | zventanas         | ""                                                                             |                                                                                                                                         |
| 106 | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                    |
| 108 | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                   |
| 109 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                      |
| 111 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 112 | zmove             | znodo + "[" + zregistroinicial + "]"                                           | M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                |
| 113 | zlectura          | zsubsesion + "!" + znodo                                                       | SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS                                                                                                      |
| 114 | zraiz             | zsubsesion + "!" + znodo + "."                                                 | SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"."}                                                                                                 |
| 115 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}                                                              |
| 119 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                 | CARGA:{}SSM_EXT_KN_TRAINING{"!SSM_PRINCIPAL.CARGA"}                                                                                     |
| 123 | znmcursos         | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                     |
| 124 | znmtipo           | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                 | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                                       |
| 125 | zidcurso          | zcomun + "SCO_ID_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                                     |
| 126 | zidtrtb1          | zcomun + "SCO_ID_TRTBREQ"                                                      | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                            |
| 127 | zdias             | zcomun + "SCO_DAYS"                                                            | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                                                  |
| 128 | zproveedor        | zcomun + "SCO_NM_TRAINING_PROV"                                                | M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}                                      |
| 152 | zcount            | 0                                                                              | 0                                                                                                                                       |
| 153 | zcounti           | 0                                                                              | 0                                                                                                                                       |
| 162 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                 |
| 197 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                        |
| 198 | zregistrofinals   | String.valueOf(zregistrofinal)                                                 | String.valueOf(zregistrofinal)                                                                                                          |
| 199 | zposicions        | "0"                                                                            | 0                                                                                                                                       |
| 199 | zcontrol          | 0                                                                              | 0                                                                                                                                       |
| 199 | zposicion         | 0                                                                              | 0                                                                                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                          |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 136 | m4:startpage | m4task=SSM_EXT_KN_TRAINING                                                                                                                                  |
| 136 | m4:beginjob  |                                                                                                                                                             |
| 137 | m4:datadef   | m4o=SSM_EXT_KN_TRAINING; m4name=SSM_EXT_KN_TRAINING                                                                                                         |
| 145 | m4:exec      | m4method=CARGA:{}SSM_EXT_KN_TRAINING{"!SSM_PRINCIPAL.CARGA"}                                                                                                |
| 145 | m4:param     | name=TIPO_CARGA; value=CME                                                                                                                                  |
| 146 | m4:outputdef | m4alias=M4T_CURSOS                                                                                                                                          |
| 146 | m4:param     | name=m4name0; value=SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 148 | m4:endjob    |                                                                                                                                                             |
| 149 | m4:move      |                                                                                                                                                             |
| 149 | m4:param     | name=SSM_EXT_KN_TRAINING; value=M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 200 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                                        |
| 204 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; jsafe=true; htmlsafe=true                       |
| 204 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                   |
| 205 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                     |
| 206 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; htmlsafe=true                                                |
| 207 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}; htmlsafe=true                                    |
| 212 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; jsafe=true; htmlsafe=true                       |
| 212 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                   |
| 213 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                     |
| 214 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; htmlsafe=true                                                |
| 215 | m4:item      | m4name=M4T_CURSOS{":"}SSM_EXT_KN_TRAINING{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}; htmlsafe=true                                    |
| 257 | m4:endpage   |                                                                                                                                                             |

| L   | Operación        | Argumentos literales                  |
| --- | ---------------- | ------------------------------------- |
| 140 | setItem          | zsubsesion,znodo,"","EXTD_KN",zextd   |
| 141 | setItem          | zsubsesion,znodo,"","ID_LEVEL",zlevel |
| 157 | getCount         | znodo,zsubsesion,znodo                |
| 158 | getCountInClient | znodo,zsubsesion,znodo                |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos |
| --- | --------------- | ---------- |
| 48  | volver_prof     |            |
| 53  | solicitar_curso | idtrtb,id  |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 37  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                          |
| 69  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 71  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 77  | &lt;% if (zVis.equals("1")){ %&gt;                                                                                                       |
| 97  | if (zVis.equals("1")){                                                                                                                   |
| 99  | }else{                                                                                                                                   |
| 172 | &lt;% if (zVis.equals("1")){ %&gt;                                                                                                       |
| 181 | if (zcounti == 0 ) {                                                                                                                     |
| 186 | if (zcounti != 0) {                                                                                                                      |
| 202 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 210 | &lt;%}else{%&gt;                                                                                                                         |
| 224 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                        |
| 238 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                        |
| 252 | &lt;% if (zVis.equals("1")){ %&gt;                                                                                                       |
| 107 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 109 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 111 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 112 | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                |
| 113 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 114 | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                      |
| 115 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 119 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                               |
| 123 | expresión de cálculo/transformación: String znmcursos = zcomun + "SCO_NM_DEV_SUBPRODUCT";                                                |
| 124 | expresión de cálculo/transformación: String znmtipo = zcomun + "SCO_NM_DEV_PRO_TYPE";                                                    |
| 125 | expresión de cálculo/transformación: String zidcurso = zcomun + "SCO_ID_DEV_SUBPRODUCT";                                                 |
| 126 | expresión de cálculo/transformación: String zidtrtb1 = zcomun + "SCO_ID_TRTBREQ";                                                        |
| 127 | expresión de cálculo/transformación: String zdias = zcomun + "SCO_DAYS";                                                                 |
| 128 | expresión de cálculo/transformación: String zproveedor = zcomun + "SCO_NM_TRAINING_PROV";                                                |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 28  | ../../mss_generico/espanol/menu_mss.jsp               |
| 78  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 79  | ../../sse_generico/espanol/generico_links.jsp         |
| 253 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                              |
| --- | -------------------------------------------------------------- |
| 25  | /css/estilo_mss.css                                            |
| 27  | /libreria/funciones_sse.js                                     |
| 175 | /iconos/noname_puesto_144_100.gif                              |
| 176 | mss_g3_p6.jsp?estado=31                                        |
| 204 | javascript:solicitar_curso(                                    |
| 212 | javascript:solicitar_curso(                                    |
| 220 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31 |
| 239 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp       |
| 243 | javascript:volver_prof();                                      |
| 243 | /iconos/icono_entrar_ess_36_36.gif                             |
| 247 | /iconos/cargando.gif                                           |
| 28  | ../../mss_generico/espanol/menu_mss.jsp                        |
| 78  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             |
| 79  | ../../sse_generico/espanol/generico_links.jsp                  |
| 253 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                     | Resolución | Ficha / candidato                                                                               |
| ------ | --- | -------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 28  | ../../mss_generico/espanol/menu_mss.jsp                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 78  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 79  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 253 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |
| BASE   | 27  | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)          |
| BASE   | 176 | mss_g3_p6.jsp?estado=31                                        | física     | [mss_g3/mss_g3_p6.jsp](mss_g3--mss_g3_p6.md)                                                    |
| BASE   | 204 | javascript:solicitar_curso(                                    | dinámica   | P06                                                                                             |
| BASE   | 212 | javascript:solicitar_curso(                                    | dinámica   | P06                                                                                             |
| BASE   | 220 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31 | ausente    | P06                                                                                             |
| BASE   | 239 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp       | ausente    | P06                                                                                             |
| BASE   | 243 | javascript:volver_prof();                                      | dinámica   | P06                                                                                             |
| BASE   | 28  | ../../mss_generico/espanol/menu_mss.jsp                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 78  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 79  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 253 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p6_desc2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
