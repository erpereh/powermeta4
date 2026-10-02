# mss_g3_p9

Identificador: `mss_g3/mss_g3_p9.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave              | Texto                                                                                                                                                                                      | Ámbito | Diccionario                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | -------------------------------------------------------------------------------------------- |
| Label.All          | Todos                                                                                                                                                                                      | COLL   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All          | Todos                                                                                                                                                                                      | CYC    | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All          | Todos                                                                                                                                                                                      | IBER   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All          | Todos                                                                                                                                                                                      | BASE   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.mss_g3_p9Des | En esta página puedes comparar los niveles de conocimientos que tienen tus empleados comparados con los niveles que les requiere su puesto actual y su próximo puesto del plan de carrera. | BASE   | [translations/mss_g3_es.properties:L28](../../referencias/literales/mss_g3_es.md)            |
| Title.mss_g3_p9    | Detalle del GAP de puestos del empleado                                                                                                                                                    | BASE   | [translations/mss_g3_es.properties:L27](../../referencias/literales/mss_g3_es.md)            |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p9.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p9.jsp) | `7e02ee2336b74c8d37ac2b854e12985e8233f6a03fccbee77eb3ffc18069dcd6` |    429 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p9.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p9.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta             |
| --- | ------------------------------------ |
| 245 | [valor dinámico] Puestos de trabajo  |
| 257 | Filtro                               |
| 259 | Empleado: [valor dinámico]           |
| 277 | Grupo: [valor dinámico] "&gt;        |
| 291 | Competencias: [valor dinámico] "&gt; |
| 330 | Empleado                             |
| 332 | Conocimiento                         |
| 333 | Actual                               |
| 334 | Puesto                               |
| 335 | Próx. puesto                         |
| 402 | Actualmente no tienes ningún dato    |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                     |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 244 | img     | alt=JSP_EXPR_mss_g3.getProperty(; title=JSP_EXPR_mss_g3.getProperty(; src=/iconos/noname_competencias_puesto_82_100.gif; width=82; height=100 |
| 248 | a       | class=enlacefuncional; tabindex=1; title=Ir a puestos de trabajo; href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3        |
| 255 | form    | name=prueba; id=prueba; action=                                                                                                               |
| 261 | select  | id=filtroemp; class=fuenteapartados; onchange=filtrar(1); title=Escoge un empleado                                                            |
| 262 | option  | value=ALL                                                                                                                                     |
| 266 | option  | value=&lt;%=sIdEmp%&gt;                                                                                                                       |
| 278 | select  | id=filtro; class=fuenteapartados; onchange=filtrar(2); title=Escoge un grupo de competencias                                                  |
| 280 | option  | value=ALL                                                                                                                                     |
| 282 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                      |
| 292 | select  | id=filtrocono; class=fuenteapartados; onchange=filtrar(3); title=Escoge la competencia                                                        |
| 294 | option  | value=ALL                                                                                                                                     |
| 296 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                      |
| 309 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31; method=post; name=oculto; id=oculto                                         |
| 310 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                               |
| 311 | input   | type=hidden; id=znombre; name=znombre; value=&lt;%=znombre%&gt;                                                                               |
| 312 | input   | type=hidden; id=zfiltroemp; name=zfiltroemp; value=&lt;%=zfiltroemp%&gt;                                                                      |
| 313 | input   | type=hidden; id=znombreemp; name=znombreemp; value=&lt;%=znombreemp%&gt;                                                                      |
| 314 | input   | type=hidden; id=zfiltrocono; name=zfiltrocono; value=&lt;%=zfiltrocono%&gt;                                                                   |
| 315 | input   | type=hidden; id=znombrecono; name=znombrecono; value=&lt;%=znombrecono%&gt;                                                                   |
| 316 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                               |
| 390 | a       | href=javascript:formacion('&lt;%=zextd%&gt;','&lt;%=zleveljob%&gt;');; title=Formación disponible                                             |
| 390 | img     | alt=Formación disponible; title=Formación disponible; src=/iconos/ic_next_edit_16_16_0.gif                                                    |
| 393 | a       | href=javascript:formacion('&lt;%=zextd%&gt;','&lt;%=zleveljobnext%&gt;');; title=Formación disponible                                         |
| 393 | img     | alt=Formación disponible; title=Formación disponible; src=/iconos/ic_next_edit_16_16_0.gif                                                    |
| 408 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc2.jsp?estado=31; method=post; name=oculto2; id=oculto2                                 |
| 409 | input   | type=hidden; id=zextd; name=zextd; value=                                                                                                     |
| 410 | input   | type=hidden; id=zlevel; name=zlevel; value=                                                                                                   |
| 413 | input   | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                            |
| 414 | input   | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                               |
| 415 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                       |
| 416 | input   | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                        |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable            | Expresión fuente                                                                    | Resolución estática parcial                                                                                                             |
| --- | ------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | empleado            | (String)request.getAttribute("empleado")                                            | (String)request.getAttribute("empleado")                                                                                                |
| 17  | periodo             | (String)request.getAttribute("periodo")                                             | (String)request.getAttribute("periodo")                                                                                                 |
| 18  | role                | (String)request.getAttribute("role")                                                | (String)request.getAttribute("role")                                                                                                    |
| 19  | zVis                | (String)request.getAttribute("zVis")                                                | (String)request.getAttribute("zVis")                                                                                                    |
| 20  | nombre_empleado     | (String)request.getAttribute("nombre_empleado")                                     | (String)request.getAttribute("nombre_empleado")                                                                                         |
| 22  | zSMCO_ID_HR         | ""                                                                                  |                                                                                                                                         |
| 33  | estado              | zobjtabla.m4paramvalor("estado")                                                    | zobjtabla.m4paramvalor("estado")                                                                                                        |
| 34  | zinicios            | zobjtabla.m4paramvalor("zinicios")                                                  | zobjtabla.m4paramvalor("zinicios")                                                                                                      |
| 35  | zfiltro             | zobjtabla.m4paramvalor("zfiltro")                                                   | zobjtabla.m4paramvalor("zfiltro")                                                                                                       |
| 36  | znombre             | zobjtabla.m4paramvalor("znombre")                                                   | zobjtabla.m4paramvalor("znombre")                                                                                                       |
| 37  | zfiltroemp          | zobjtabla.m4paramvalor("zfiltroemp")                                                | zobjtabla.m4paramvalor("zfiltroemp")                                                                                                    |
| 38  | znombreemp          | zobjtabla.m4paramvalor("znombreemp")                                                | zobjtabla.m4paramvalor("znombreemp")                                                                                                    |
| 39  | zfiltrocono         | zobjtabla.m4paramvalor("zfiltrocono")                                               | zobjtabla.m4paramvalor("zfiltrocono")                                                                                                   |
| 40  | znombrecono         | zobjtabla.m4paramvalor("znombrecono")                                               | zobjtabla.m4paramvalor("znombrecono")                                                                                                   |
| 94  | zsubsesion          | "SSM_R_JOB_COMP"                                                                    | SSM_R_JOB_COMP                                                                                                                          |
| 95  | zmeta4object        | "SSM_R_JOB_COMP"                                                                    | SSM_R_JOB_COMP                                                                                                                          |
| 96  | znodo               | "SMCO_DATA_FINAL"                                                                   | SMCO_DATA_FINAL                                                                                                                         |
| 97  | znodolista          | "SSM_X_GROUP"                                                                       | SSM_X_GROUP                                                                                                                             |
| 98  | znodoempleados      | "SSM_EMPLEADOS"                                                                     | SSM_EMPLEADOS                                                                                                                           |
| 99  | znodo2              | "SSM_KNOW_MAP"                                                                      | SSM_KNOW_MAP                                                                                                                            |
| 101 | ztipocarga          | " "                                                                                 |                                                                                                                                         |
| 102 | zventanas           | ""                                                                                  |                                                                                                                                         |
| 108 | zvuelta             | 5                                                                                   | 5                                                                                                                                       |
| 109 | zdireccion          | "/mss_g3/mss_g3_p9.jsp"                                                             | /mss_g3/mss_g3_p9.jsp                                                                                                                   |
| 110 | zestado             | "31"                                                                                | 31                                                                                                                                      |
| 111 | zregistroinicial    | Integer.valueOf(zinicios).intValue()                                                | Integer.valueOf(zinicios).intValue()                                                                                                    |
| 113 | zventana            | Integer.valueOf(zventanas).intValue()                                               | Integer.valueOf(zventanas).intValue()                                                                                                   |
| 114 | zregistrofinal      | zregistroinicial + zventana - 1                                                     | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                      |
| 116 | zoutputdef          | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"      | SSM_R_JOB_COMP{"!"}SMCO_DATA_FINAL{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 117 | zmove               | znodo + ":" + znodo + "[" + zregistroinicial + "]"                                  | SMCO_DATA_FINAL{":"}SMCO_DATA_FINAL{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                       |
| 118 | zraiz               | znodo + ":" + zsubsesion + "!" + znodo + "."                                        | SMCO_DATA_FINAL{":"}SSM_R_JOB_COMP{"!"}SMCO_DATA_FINAL{"."}                                                                             |
| 119 | ziterator           | znodo + ":" + zsubsesion + "!" + znodo                                              | SMCO_DATA_FINAL{":"}SSM_R_JOB_COMP{"!"}SMCO_DATA_FINAL                                                                                  |
| 121 | zoutputdef2         | zsubsesion + "!" + znodo2 + "[*]"                                                   | SSM_R_JOB_COMP{"!"}SSM_KNOW_MAP{"[*]"}                                                                                                  |
| 122 | zmove2              | znodo2 + ":" + znodo2 + "[FIRST]"                                                   | SSM_KNOW_MAP{":"}SSM_KNOW_MAP{"[FIRST]"}                                                                                                |
| 123 | zcomun2             | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."                 | SSM_KNOW_MAP{":"}SSM_R_JOB_COMP{"!"}SSM_KNOW_MAP{"[&amp;VAR.m4lix]"}{"."}                                                               |
| 124 | zSCOIDEXTDKN2       | zcomun2+ "SCO_ID_EXTD_KN"                                                           | SSM_KNOW_MAP{":"}SSM_R_JOB_COMP{"!"}SSM_KNOW_MAP{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_EXTD_KN"}                                             |
| 125 | zSCONMEXTDKN2       | zcomun2+ "SCO_NM_EXTD_KN"                                                           | SSM_KNOW_MAP{":"}SSM_R_JOB_COMP{"!"}SSM_KNOW_MAP{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}                                             |
| 127 | zoutputdefempleados | zsubsesion + "!" + znodoempleados + "[*]"                                           | SSM_R_JOB_COMP{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                 |
| 128 | zmoveempleados      | znodoempleados + ":" + znodoempleados + "[FIRST]"                                   | SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"[FIRST]"}                                                                                              |
| 129 | zcomunemp           | znodoempleados + ":" + zsubsesion + "!" + znodoempleados + "[&amp;VAR.m4lix]" + "." | SSM_EMPLEADOS{":"}SSM_R_JOB_COMP{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 130 | zSTDIDPERSONemp     | zcomunemp + "STD_ID_PERSON"                                                         | SSM_EMPLEADOS{":"}SSM_R_JOB_COMP{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                                            |
| 131 | zSTDNFAMILYNAME1emp | zcomunemp + "STD_N_FAMILY_NAME_1"                                                   | SSM_EMPLEADOS{":"}SSM_R_JOB_COMP{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}                                      |
| 132 | zSTDNFIRSTNAMEemp   | zcomunemp + "STD_N_FIRST_NAME"                                                      | SSM_EMPLEADOS{":"}SSM_R_JOB_COMP{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}                                         |
| 133 | zSCOGBNAMEemp       | zcomunemp + "SCO_GB_NAME"                                                           | SSM_EMPLEADOS{":"}SSM_R_JOB_COMP{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                              |
| 134 | zoutputdeflista     | zsubsesion + "!" + znodolista + "[*]"                                               | SSM_R_JOB_COMP{"!"}SSM_X_GROUP{"[*]"}                                                                                                   |
| 135 | zmovelista          | znodolista + ":" + znodolista + "[FIRST]"                                           | SSM_X_GROUP{":"}SSM_X_GROUP{"[FIRST]"}                                                                                                  |
| 136 | zcomunlista         | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."         | SSM_X_GROUP{":"}SSM_R_JOB_COMP{"!"}SSM_X_GROUP{"[&amp;VAR.m4lix]"}{"."}                                                                 |
| 137 | zSCOIDGROUP         | zcomunlista + "SCO_ID_GROUP"                                                        | SSM_X_GROUP{":"}SSM_R_JOB_COMP{"!"}SSM_X_GROUP{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_GROUP"}                                                 |
| 138 | zSCOGROUPNAME       | zcomunlista + "SCO_GROUP_NAME"                                                      | SSM_X_GROUP{":"}SSM_R_JOB_COMP{"!"}SSM_X_GROUP{"[&amp;VAR.m4lix]"}{"."}{"SCO_GROUP_NAME"}                                               |
| 140 | znodoprincipal      | "SSM_PRINCIPAL"                                                                     | SSM_PRINCIPAL                                                                                                                           |
| 141 | zmetodocarga        | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                             | CARGA:{}SSM_R_JOB_COMP{"!"}SSM_PRINCIPAL{".CARGA"}                                                                                      |
| 142 | zmetodocargaDossier | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".SMCO_LOAD_FROM_EMP_DOSSIER"        | CARGA:{}SSM_R_JOB_COMP{"!"}SSM_PRINCIPAL{".SMCO_LOAD_FROM_EMP_DOSSIER"}                                                                 |
| 143 | zoutputdefg         | zsubsesion + "!" + znodo + "[*]"                                                    | SSM_R_JOB_COMP{"!"}SMCO_DATA_FINAL{"[*]"}                                                                                               |
| 169 | zFilterperson       | ""                                                                                  |                                                                                                                                         |
| 170 | zAddPerson          | ""                                                                                  |                                                                                                                                         |
| 206 | zcounti             | 0                                                                                   | 0                                                                                                                                       |
| 207 | zcount              | 0                                                                                   | 0                                                                                                                                       |
| 208 | zcountiemp          | 0                                                                                   | 0                                                                                                                                       |
| 209 | zcountemp           | 0                                                                                   | 0                                                                                                                                       |
| 210 | zcountilista        | 0                                                                                   | 0                                                                                                                                       |
| 211 | zcountlista         | 0                                                                                   | 0                                                                                                                                       |
| 212 | zcounti2            | 0                                                                                   | 0                                                                                                                                       |
| 213 | zcount2             | 0                                                                                   | 0                                                                                                                                       |
| 231 | zcountv             | String.valueOf(zcounti)                                                             | String.valueOf(zcounti)                                                                                                                 |
| 232 | zcountvemp          | String.valueOf(zcountiemp)                                                          | String.valueOf(zcountiemp)                                                                                                              |
| 233 | zcountvlista        | String.valueOf(zcountilista)                                                        | String.valueOf(zcountilista)                                                                                                            |
| 234 | zcountv2            | String.valueOf(zcounti2)                                                            | String.valueOf(zcounti2)                                                                                                                |
| 237 | sFiltroNameL        | Tran.getProperty("Label.All")                                                       | Tran.getProperty("Label.All")                                                                                                           |
| 340 | i                   | 0                                                                                   | 0                                                                                                                                       |
| 341 | zSTDNFAMILYNAME1    | ""                                                                                  |                                                                                                                                         |
| 342 | zSCONMEXTDKN        | ""                                                                                  |                                                                                                                                         |
| 343 | zSCONMLEVEL         | ""                                                                                  |                                                                                                                                         |
| 344 | zSCONMLEVELJOB      | ""                                                                                  |                                                                                                                                         |
| 345 | zSTDNFIRSTNAME      | ""                                                                                  |                                                                                                                                         |
| 346 | zSCOGBNAME          | ""                                                                                  |                                                                                                                                         |
| 347 | zSCONMLEVELJOBNEXT  | ""                                                                                  |                                                                                                                                         |
| 348 | znombreant          | ""                                                                                  |                                                                                                                                         |
| 349 | znombrenuevo        | ""                                                                                  |                                                                                                                                         |
| 350 | zextd               | ""                                                                                  |                                                                                                                                         |
| 351 | zleveljob           | ""                                                                                  |                                                                                                                                         |
| 352 | zleveljobnext       | ""                                                                                  |                                                                                                                                         |
| 354 | id                  | String.valueOf(i)                                                                   | String.valueOf(i)                                                                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag             | Contrato declarado                                                                                                                                          |
| --- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 145 | m4:startpage    | m4task=SSM_R_JOB_COMP                                                                                                                                       |
| 146 | m4:beginjob     |                                                                                                                                                             |
| 147 | m4:datadef      | m4o=SSM_R_JOB_COMP; m4name=SSM_R_JOB_COMP                                                                                                                   |
| 158 | m4:exec         | m4method=CARGA:{}SSM_R_JOB_COMP{"!"}SSM_PRINCIPAL{".SMCO_LOAD_FROM_EMP_DOSSIER"}                                                                            |
| 158 | m4:param        | name=ARG_EMP_TO_LOAD; value=                                                                                                                                |
| 160 | m4:exec         | m4method=CARGA:{}SSM_R_JOB_COMP{"!"}SSM_PRINCIPAL{".CARGA"}                                                                                                 |
| 160 | m4:param        | name=TIPO_CARGA; value=                                                                                                                                     |
| 163 | m4:outputdef    | m4alias=prueba                                                                                                                                              |
| 163 | m4:param        | name=m4name0; value=SSM_R_JOB_COMP{"!"}SMCO_DATA_FINAL{"[*]"}                                                                                               |
| 164 | m4:outputdef    | m4alias=SSM_KNOW_MAP                                                                                                                                        |
| 164 | m4:param        | name=m4name0; value=SSM_R_JOB_COMP{"!"}SSM_KNOW_MAP{"[*]"}                                                                                                  |
| 165 | m4:outputdef    | m4alias=SSM_X_GROUP                                                                                                                                         |
| 165 | m4:param        | name=m4name0; value=SSM_R_JOB_COMP{"!"}SSM_X_GROUP{"[*]"}                                                                                                   |
| 166 | m4:outputdef    | m4alias=SSM_EMPLEADOS                                                                                                                                       |
| 166 | m4:param        | name=m4name0; value=SSM_R_JOB_COMP{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                 |
| 167 | m4:removefilter | m4name=SSM_R_JOB_COMP!SMCO_DATA_FINAL.Filter1                                                                                                               |
| 197 | m4:filter       | m4name=SSM_R_JOB_COMP!SMCO_DATA_FINAL.Filter1; m4filter=                                                                                                    |
| 199 | m4:outputdef    | m4alias=SMCO_DATA_FINAL                                                                                                                                     |
| 199 | m4:param        | name=m4name0; value=SSM_R_JOB_COMP{"!"}SMCO_DATA_FINAL{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 200 | m4:endjob       |                                                                                                                                                             |
| 201 | m4:move         |                                                                                                                                                             |
| 201 | m4:param        | name=SSM_R_JOB_COMP; value=SMCO_DATA_FINAL{":"}SMCO_DATA_FINAL{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                |
| 202 | m4:move         |                                                                                                                                                             |
| 202 | m4:param        | name=SSM_R_JOB_COMP; value=SSM_KNOW_MAP{":"}SSM_KNOW_MAP{"[FIRST]"}                                                                                         |
| 203 | m4:move         |                                                                                                                                                             |
| 203 | m4:param        | name=SSM_R_JOB_COMP; value=SSM_X_GROUP{":"}SSM_X_GROUP{"[FIRST]"}                                                                                           |
| 204 | m4:move         |                                                                                                                                                             |
| 204 | m4:param        | name=SSM_R_JOB_COMP; value=SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"[FIRST]"}                                                                                       |
| 263 | m4:loop         | from=0; to=new_Integer(new_Integer(zcountvemp).intValue()-1).toString()                                                                                     |
| 264 | m4:item         | m4name=SSM_EMPLEADOS{":"}SSM_R_JOB_COMP{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}; htmlsafe=true; m4varname=sIdEmp                        |
| 266 | m4:item         | m4name=SSM_EMPLEADOS{":"}SSM_R_JOB_COMP{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                            |
| 281 | m4:loop         | from=0; to=new_Integer(new_Integer(zcountvlista).intValue()-1).toString()                                                                                   |
| 282 | m4:item         | m4name=SSM_X_GROUP{":"}SSM_R_JOB_COMP{"!"}SSM_X_GROUP{"[&amp;VAR.m4lix]"}{"."}{"SCO_GROUP_NAME"}; htmlsafe=true                                             |
| 295 | m4:loop         | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                       |
| 296 | m4:item         | m4name=SSM_KNOW_MAP{":"}SSM_R_JOB_COMP{"!"}SSM_KNOW_MAP{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true                                           |
| 425 | m4:endpage      |                                                                                                                                                             |

| L   | Operación        | Argumentos literales                                |
| --- | ---------------- | --------------------------------------------------- |
| 150 | setItem          | zsubsesion,znodoempleados,"","FILTRO_GRUPO",zfiltro |
| 218 | getCount         | znodo,zsubsesion,znodo                              |
| 220 | getCountInClient | znodo,zsubsesion,znodo                              |
| 222 | getCountInClient | znodo,zsubsesion,znodo                              |
| 223 | getCount         | znodoempleados,zsubsesion,znodoempleados            |
| 224 | getCountInClient | znodoempleados,zsubsesion,znodoempleados            |
| 225 | getCount         | znodolista,zsubsesion,znodolista                    |
| 226 | getCountInClient | znodolista,zsubsesion,znodolista                    |
| 227 | getCount         | znodo2,zsubsesion,znodo2                            |
| 228 | getCountInClient | znodo2,zsubsesion,znodo2                            |
| 356 | getItem          | znodo,zmeta4object,znodo,"","STD_N_FAMILY_NAME_1"   |
| 357 | getItem          | znodo,zmeta4object,znodo,"","STD_N_FIRST_NAME"      |
| 358 | getItem          | znodo,zmeta4object,znodo,"","SCO_GB_NAME"           |
| 359 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_EXTD_KN"        |
| 360 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_LEVEL"          |
| 361 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_LEVEL_JOB"      |
| 362 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_LEVEL_JOB_NEXT" |
| 363 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_EXTD_KN"        |
| 364 | getItem          | znodo,zmeta4object,znodo,"","LEVEL_JOB"             |
| 365 | getItem          | znodo,zmeta4object,znodo,"","LEVEL_JOB_NEXT"        |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos |
| --- | --------- | ---------- |
| 62  | filtrar   | num        |
| 81  | formacion | extd,lev   |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                      |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                                                                                                                                                                                                                           |
| 26  | else{                                                                                                                                                                                                                                                                                                                                     |
| 41  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                                                                                                                                           |
| 42  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                                                                                                                                   |
| 43  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "ALL";}                                                                                                                                                                                                                                                                          |
| 44  | if ((znombre==null)&#124;&#124; (""==znombre)){znombre = "Todos";}                                                                                                                                                                                                                                                                        |
| 46  | if (zVis.equals("1")){                                                                                                                                                                                                                                                                                                                    |
| 47  | if ((zfiltroemp==null)&#124;&#124; (""==zfiltroemp)){                                                                                                                                                                                                                                                                                     |
| 49  | } else {                                                                                                                                                                                                                                                                                                                                  |
| 52  | }else{                                                                                                                                                                                                                                                                                                                                    |
| 56  | if ((znombreemp==null)&#124;&#124; (""==znombreemp)){znombreemp = "Todos";}                                                                                                                                                                                                                                                               |
| 57  | if ((zfiltrocono==null)&#124;&#124; (""==zfiltrocono)){zfiltrocono = "ALL";}                                                                                                                                                                                                                                                              |
| 58  | if ((znombrecono==null)&#124;&#124; (""==znombrecono)){znombrecono = "Todos";}                                                                                                                                                                                                                                                            |
| 73  | if (num=="2"){                                                                                                                                                                                                                                                                                                                            |
| 89  | &lt;% if (zVis.equals("1")){ %&gt;                                                                                                                                                                                                                                                                                                        |
| 103 | if (zVis.equals("1")){                                                                                                                                                                                                                                                                                                                    |
| 105 | }else{                                                                                                                                                                                                                                                                                                                                    |
| 156 | if (zVis.equals("0")){                                                                                                                                                                                                                                                                                                                    |
| 159 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                          |
| 171 | if (zfiltroemp.equals("ALL")){zAddPerson="";}else{zAddPerson="STD_ID_HR=\""+zfiltroemp+"\"";}                                                                                                                                                                                                                                             |
| 172 | if (zfiltro.equals("ALL")){                                                                                                                                                                                                                                                                                                               |
| 173 | }else{                                                                                                                                                                                                                                                                                                                                    |
| 174 | if (zAddPerson.equals("")){                                                                                                                                                                                                                                                                                                               |
| 176 | }else{                                                                                                                                                                                                                                                                                                                                    |
| 180 | if (zfiltrocono.equals("ALL")){                                                                                                                                                                                                                                                                                                           |
| 182 | }else{                                                                                                                                                                                                                                                                                                                                    |
| 183 | if (zAddPerson.equals("")){                                                                                                                                                                                                                                                                                                               |
| 185 | }else{                                                                                                                                                                                                                                                                                                                                    |
| 189 | if (zAddPerson.equals("")){                                                                                                                                                                                                                                                                                                               |
| 194 | }else{                                                                                                                                                                                                                                                                                                                                    |
| 217 | if (zAddPerson.equals("")){                                                                                                                                                                                                                                                                                                               |
| 219 | }else{                                                                                                                                                                                                                                                                                                                                    |
| 240 | &lt;% if (zVis.equals("1")){ %&gt;                                                                                                                                                                                                                                                                                                        |
| 254 | &lt;% if (zVis.equals("1")){ %&gt;                                                                                                                                                                                                                                                                                                        |
| 271 | if ('&lt;%=zfiltroemp%&gt;'!= "ALL"){                                                                                                                                                                                                                                                                                                     |
| 287 | if ('&lt;%=zfiltroemp%&gt;'!= "ALL"){                                                                                                                                                                                                                                                                                                     |
| 301 | if ('&lt;%=zfiltrocono%&gt;'!= "ALL"){                                                                                                                                                                                                                                                                                                    |
| 320 | &lt;% if (zVis.equals("1")){ %&gt;                                                                                                                                                                                                                                                                                                        |
| 322 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                          |
| 326 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                                                                                                                                                                                                                         |
| 329 | &lt;% if (zVis.equals("1")){ %&gt;                                                                                                                                                                                                                                                                                                        |
| 367 | if ((znombrenuevo==znombreant)&#124;&#124; znombrenuevo.equals(znombreant)){                                                                                                                                                                                                                                                              |
| 369 | }else{                                                                                                                                                                                                                                                                                                                                    |
| 373 | if ((zSCONMLEVELJOBNEXT==null)&#124;&#124; zSCONMLEVELJOBNEXT.equals("")){                                                                                                                                                                                                                                                                |
| 376 | if ((zSCONMLEVELJOB==null)&#124;&#124; zSCONMLEVELJOB.equals("")){                                                                                                                                                                                                                                                                        |
| 379 | if ((zSCONMLEVEL==null)&#124;&#124; zSCONMLEVEL.equals("")){                                                                                                                                                                                                                                                                              |
| 384 | &lt;% if (zVis.equals("1")){ %&gt;                                                                                                                                                                                                                                                                                                        |
| 389 | &lt;%if(zSCONMLEVELJOB=="No valorado"){%&gt;&lt;td class="fuentevalor"&gt; &lt;%=zSCONMLEVELJOB%&gt;&lt;/td&gt;                                                                                                                                                                                                                           |
| 390 | &lt;%}else{%&gt;&lt;td class="fuentevalor"&gt;&lt;a href="javascript:formacion('&lt;%=zextd%&gt;','&lt;%=zleveljob%&gt;');" title="Formación disponible"&gt;&lt;img alt="Formación disponible" title="Formación disponible"src="/iconos/ic_next_edit_16_16_0.gif" /&gt;&lt;/a&gt; &lt;%=zSCONMLEVELJOB%&gt;&lt;/td&gt;&lt;%}%&gt;         |
| 392 | &lt;%if(zSCONMLEVELJOBNEXT=="No valorado"){%&gt;&lt;td class="fuentevalor"&gt; &lt;%=zSCONMLEVELJOBNEXT%&gt;&lt;/td&gt;                                                                                                                                                                                                                   |
| 393 | &lt;%}else{%&gt;&lt;td class="fuentevalor"&gt;&lt;a href="javascript:formacion('&lt;%=zextd%&gt;','&lt;%=zleveljobnext%&gt;');" title="Formación disponible"&gt;&lt;img alt="Formación disponible" title="Formación disponible"src="/iconos/ic_next_edit_16_16_0.gif" /&gt;&lt;/a&gt; &lt;%=zSCONMLEVELJOBNEXT%&gt;&lt;/td&gt;&lt;%}%&gt; |
| 401 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                          |
| 412 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                                                                                                                                                                                                                         |
| 421 | &lt;% if (zVis.equals("1")){ %&gt;                                                                                                                                                                                                                                                                                                        |
| 112 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                                                                                                                                                                             |
| 114 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                                                                                                                                                                |
| 116 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                                                                                                                                                                                  |
| 117 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                                                                                                                                                                                    |
| 118 | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                                                                                                                                                                         |
| 119 | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                                                                                                                                                                                                                           |
| 121 | expresión de cálculo/transformación: String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";                                                                                                                                                                                                                                               |
| 122 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                                                                                                                                                                                                                   |
| 123 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                                                                                                                                                                                                |
| 127 | expresión de cálculo/transformación: String zoutputdefempleados = zsubsesion + "!" + znodoempleados + "[*]";                                                                                                                                                                                                                              |
| 128 | expresión de cálculo/transformación: String zmoveempleados = znodoempleados + ":" + znodoempleados + "[FIRST]";                                                                                                                                                                                                                           |
| 129 | expresión de cálculo/transformación: String zcomunemp = znodoempleados + ":" + zsubsesion + "!" + znodoempleados + "[&amp;VAR.m4lix]" + ".";                                                                                                                                                                                              |
| 130 | expresión de cálculo/transformación: String zSTDIDPERSONemp = zcomunemp + "STD_ID_PERSON";                                                                                                                                                                                                                                                |
| 131 | expresión de cálculo/transformación: String zSTDNFAMILYNAME1emp = zcomunemp + "STD_N_FAMILY_NAME_1";                                                                                                                                                                                                                                      |
| 132 | expresión de cálculo/transformación: String zSTDNFIRSTNAMEemp = zcomunemp + "STD_N_FIRST_NAME";                                                                                                                                                                                                                                           |
| 133 | expresión de cálculo/transformación: String zSCOGBNAMEemp = zcomunemp + "SCO_GB_NAME";                                                                                                                                                                                                                                                    |
| 134 | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                                                                                                                                                                      |
| 135 | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                                                                                                                                                                       |
| 136 | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                                                                                                                                                                                    |
| 137 | expresión de cálculo/transformación: String zSCOIDGROUP = zcomunlista + "SCO_ID_GROUP";                                                                                                                                                                                                                                                   |
| 138 | expresión de cálculo/transformación: String zSCOGROUPNAME = zcomunlista + "SCO_GROUP_NAME";                                                                                                                                                                                                                                               |
| 141 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                                                                                                                                                                       |
| 142 | expresión de cálculo/transformación: String zmetodocargaDossier = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".SMCO_LOAD_FROM_EMP_DOSSIER";                                                                                                                                                                                           |
| 143 | expresión de cálculo/transformación: String zoutputdefg= zsubsesion + "!" + znodo + "[*]";                                                                                                                                                                                                                                                |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 12  | /mss_g3/mss_g3_trans.jsp                              |
| 90  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 91  | ../../sse_generico/espanol/generico_links.jsp         |
| 422 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 423 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                             |
| 9   | /libreria/funciones_sse_val1.js                                 |
| 10  | /libreria/funciones_sse.js                                      |
| 244 | /iconos/noname_competencias_puesto_82_100.gif                   |
| 248 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3 |
| 255 |                                                                 |
| 309 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31       |
| 390 | javascript:formacion(                                           |
| 390 | /iconos/ic_next_edit_16_16_0.gif                                |
| 393 | javascript:formacion(                                           |
| 393 | /iconos/ic_next_edit_16_16_0.gif                                |
| 408 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc2.jsp?estado=31 |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                         |
| 12  | /mss_g3/mss_g3_trans.jsp                                        |
| 90  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              |
| 91  | ../../sse_generico/espanol/generico_links.jsp                   |
| 109 | /mss_g3/mss_g3_p9.jsp                                           |
| 422 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 423 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 12  | /mss_g3/mss_g3_trans.jsp                                        | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                              |
| BASE   | 90  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 91  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 422 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 423 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 9   | /libreria/funciones_sse_val1.js                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                |
| BASE   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 248 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3 | ausente    | P06                                                                                                             |
| BASE   | 309 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31       | ausente    | P06                                                                                                             |
| BASE   | 390 | javascript:formacion(                                           | dinámica   | P06                                                                                                             |
| BASE   | 393 | javascript:formacion(                                           | dinámica   | P06                                                                                                             |
| BASE   | 408 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc2.jsp?estado=31 | ausente    | P06                                                                                                             |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 12  | /mss_g3/mss_g3_trans.jsp                                        | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                              |
| BASE   | 90  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 91  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 109 | /mss_g3/mss_g3_p9.jsp                                           | ausente    | P06                                                                                                             |
| BASE   | 422 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 423 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p9.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
