# smco_g3_p32_val

Identificador: `mss_g3/smco_g3_p32_val.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                      | Texto                                                                                                                                                      | Ámbito | Diccionario                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.LblCancelPet         | Cancela la petición                                                                                                                                        | BASE   | [translations/mss_g3_es.properties:L83](../../referencias/literales/mss_g3_es.md)            |
| Label.LblNoData            | Actualmente no tienes ningún dato que validar en este nivel.                                                                                               | BASE   | [translations/mss_g3_es.properties:L85](../../referencias/literales/mss_g3_es.md)            |
| Label.LblOKPet             | Acepta la petición                                                                                                                                         | BASE   | [translations/mss_g3_es.properties:L81](../../referencias/literales/mss_g3_es.md)            |
| Label.LblReasonCancel      | Motivo de cancelación                                                                                                                                      | BASE   | [translations/mss_g3_es.properties:L80](../../referencias/literales/mss_g3_es.md)            |
| Label.LblSolcita           | solicita                                                                                                                                                   | BASE   | [translations/mss_g3_es.properties:L86](../../referencias/literales/mss_g3_es.md)            |
| Label.TableVal             | Peticiones                                                                                                                                                 | COLL   | [translations/ess_mss_gen_es.properties:L126](../../referencias/literales/ess_mss_gen_es.md) |
| Label.TableVal             | Peticiones                                                                                                                                                 | CYC    | [translations/ess_mss_gen_es.properties:L126](../../referencias/literales/ess_mss_gen_es.md) |
| Label.TableVal             | Peticiones                                                                                                                                                 | IBER   | [translations/ess_mss_gen_es.properties:L126](../../referencias/literales/ess_mss_gen_es.md) |
| Label.TableVal             | Peticiones                                                                                                                                                 | BASE   | [translations/ess_mss_gen_es.properties:L125](../../referencias/literales/ess_mss_gen_es.md) |
| Label.smco_g3_p32_valDesc  | Valida los cambios de preferencias profesionales de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. | BASE   | [translations/mss_g3_es.properties:L75](../../referencias/literales/mss_g3_es.md)            |
| Label.smco_g3_p32_valTitle | Valida preferencias profesionales                                                                                                                          | BASE   | [translations/mss_g3_es.properties:L74](../../referencias/literales/mss_g3_es.md)            |
| Labelmss.Aceptar           | Aceptar                                                                                                                                                    | COLL   | [translations/ess_mss_gen_es.properties:L187](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Aceptar           | Aceptar                                                                                                                                                    | CYC    | [translations/ess_mss_gen_es.properties:L187](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Aceptar           | Aceptar                                                                                                                                                    | IBER   | [translations/ess_mss_gen_es.properties:L187](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Aceptar           | Aceptar                                                                                                                                                    | BASE   | [translations/ess_mss_gen_es.properties:L186](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Cancelar          | Cancelar                                                                                                                                                   | COLL   | [translations/ess_mss_gen_es.properties:L188](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Cancelar          | Cancelar                                                                                                                                                   | CYC    | [translations/ess_mss_gen_es.properties:L188](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Cancelar          | Cancelar                                                                                                                                                   | IBER   | [translations/ess_mss_gen_es.properties:L188](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Cancelar          | Cancelar                                                                                                                                                   | BASE   | [translations/ess_mss_gen_es.properties:L187](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_g3_p32_val.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p32_val.jsp) | `5a8e803397820f910009e03b999efb0151a2ec2b2c3a175c769a4b2270995d99` |    295 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_g3_p32_val.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p32_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                       |
| --- | ------------------------------------------------------------------------------ |
| 243 | *REC= { *NOD=SSE_CR_PREFERENC{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                       |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 167 | img     | alt=JSP_EXPR_mss_g3.getProperty(; src=/iconos/noname_objetivos_ess_103_100.gif; width=103; height=100                                                                                           |
| 176 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32_val.jsp?estado=31; method=post; name=oculto; id=oculto                                                                                     |
| 177 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                                 |
| 178 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                                |
| 179 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                 |
| 244 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;                                                                                                                                            |
| 245 | input   | id=ocultos; name=ocultos; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                                                                                |
| 246 | input   | name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                  |
| 253 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;                                                                                                                                            |
| 256 | input   | title=JSP_EXPR_mss_g3.getProperty(; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;) |
| 259 | input   | title=JSP_EXPR_mss_g3.getProperty(; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 265 | form    | name=c&lt;%=zposicion%&gt;; id=c&lt;%=zposicion%&gt;                                                                                                                                            |
| 268 | input   | size=48; title=JSP_EXPR_mss_g3.getProperty(; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                                    |
| 277 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                                       |
| 278 | input   | type=hidden; id=param; name=param; value=                                                                                                                                                       |
| 279 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 24  | znivel          | getParameter(request,"znivel") |

| L   | Variable             | Expresión fuente                                                               | Resolución estática parcial                                                                                                                |
| --- | -------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 15  | estado               | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                           |
| 16  | zfiltro              | zobjtabla.m4paramvalor("zfiltro")                                              | zobjtabla.m4paramvalor("zfiltro")                                                                                                          |
| 17  | zinicios             | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                         |
| 22  | znivel               | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                           |
| 68  | zsubsesion           | "SSE_CR_PREFERENC"                                                             | SSE_CR_PREFERENC                                                                                                                           |
| 69  | zmeta4object         | "SSE_CR_PREFERENC"                                                             | SSE_CR_PREFERENC                                                                                                                           |
| 70  | znodo                | "SSE_CR_PREFERENC"                                                             | SSE_CR_PREFERENC                                                                                                                           |
| 71  | ztipocarga           | "SSE"                                                                          | SSE                                                                                                                                        |
| 72  | zventanas            | "4"                                                                            | 4                                                                                                                                          |
| 73  | zvuelta              | 2                                                                              | 2                                                                                                                                          |
| 74  | zdireccion           | "/mss_g3/smco_g3_p32_val.jsp"                                                  | /mss_g3/smco_g3_p32_val.jsp                                                                                                                |
| 75  | zestado              | "11"                                                                           | 11                                                                                                                                         |
| 76  | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                       |
| 78  | zventana             | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                      |
| 79  | zregistrofinal       | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                         |
| 81  | zoutputdef           | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 82  | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 83  | zraiz                | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"."}                                                                            |
| 84  | zlectura             | zsubsesion + "!" + znodo                                                       | SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC                                                                                                      |
| 85  | ziterator            | znodo + ":" + zsubsesion + "!" + znodo                                         | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC                                                                                 |
| 86  | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 88  | znodolista           | znodo + "_VAL"                                                                 | SSE_CR_PREFERENC{"_VAL"}                                                                                                                   |
| 89  | zoutputdeflista      | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"_VAL"}{"[*]"}                                                                                       |
| 90  | zmovelista           | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_CR_PREFERENC{"_VAL"}{":"}SSE_CR_PREFERENC{"_VAL"}{"[FIRST]"}                                                                           |
| 91  | zraizlista           | znodolista + ":" + zsubsesion + "!" + znodolista + "."                         | SSE_CR_PREFERENC{"_VAL"}{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"_VAL"}{"."}                                                            |
| 92  | ziteratorlista       | znodolista + ":" + zsubsesion + "!" + znodolista                               | SSE_CR_PREFERENC{"_VAL"}{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"_VAL"}                                                                 |
| 93  | zcomunlista          | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_CR_PREFERENC{"_VAL"}{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                        |
| 95  | znodocom             | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                           |
| 96  | zoutputdefcom        | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_CR_PREFERENC{"!"}SSE_COMUNICACION{"[*]"}                                                                                               |
| 98  | znodoprincipal       | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                              |
| 99  | zmetodocarga         | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSE_CR_PREFERENC{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                       |
| 101 | zNOMBREPERSON        | zraiz + "NOMBRE_PERSON"                                                        | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"."}{"NOMBRE_PERSON"}                                                           |
| 103 | zORDINAL             | zcomun + "ORDINAL"                                                             | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                             |
| 104 | zNACCION             | zcomun + "ACCION_ACEPTADO"                                                     | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"ACCION_ACEPTADO"}                                     |
| 105 | zNOMBREEMPLEADO      | zcomun + "NOMBRE_EMPLEADO"                                                     | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                     |
| 106 | zN_ACCION            | zcomun + "N_ACCION"                                                            | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                            |
| 108 | zDT_START            | zcomun + "DT_START"                                                            | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                            |
| 109 | zSCO_PREF_PRIORITY   | zcomun + "SCO_PREF_PRIORITY"                                                   | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREF_PRIORITY"}                                   |
| 110 | zSTD_ID_SUB_GEO_DIV  | zcomun + "STD_ID_SUB_GEO_DIV"                                                  | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_SUB_GEO_DIV"}                                  |
| 111 | zSTD_N_SUB_GEO_DIV   | zcomun + "STD_N_SUB_GEO_DIV"                                                   | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                   |
| 112 | zSTD_ID_GEO_DIV      | zcomun + "STD_ID_GEO_DIV"                                                      | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_GEO_DIV"}                                      |
| 113 | zSTD_N_GEO_DIV       | zcomun + "STD_N_GEO_DIV"                                                       | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}                                       |
| 114 | zSTD_ID_COUNTRY      | zcomun + "STD_ID_COUNTRY"                                                      | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                      |
| 115 | zSTD_N_COUNTRY       | zcomun + "STD_N_COUNTRY"                                                       | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                       |
| 116 | zSTD_ID_WORK_UNIT    | zcomun + "STD_ID_WORK_UNIT"                                                    | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"}                                    |
| 117 | zSTD_N_WORK_UNIT     | zcomun + "STD_N_WORK_UNIT"                                                     | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}                                     |
| 118 | zSTD_ID_JOB_CODE     | zcomun + "STD_ID_JOB_CODE"                                                     | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_JOB_CODE"}                                     |
| 119 | zSTD_N_JOB_CODE      | zcomun + "STD_N_JOB_CODE"                                                      | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                      |
| 120 | zSCO_PREFERENCES     | zcomun + "SCO_PREFERENCES"                                                     | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREFERENCES"}                                     |
| 121 | zSCO_COMMENT         | zcomun + "SCO_COMMENT"                                                         | SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}                                         |
| 123 | zNOMBREEMPLEADOlista | zcomunlista + "NOMBRE_EMPLEADO"                                                | SSE_CR_PREFERENC{"_VAL"}{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                     |
| 124 | zSTDIDPERSON         | zcomunlista + "STD_ID_PERSON"                                                  | SSE_CR_PREFERENC{"_VAL"}{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                       |
| 145 | zcounti              | 0                                                                              | 0                                                                                                                                          |
| 146 | zcount               | 0                                                                              | 0                                                                                                                                          |
| 152 | zcountv              | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                    |
| 154 | zcountlista          | 0                                                                              | 0                                                                                                                                          |
| 159 | zcountvlista         | String.valueOf(zcountlista)                                                    | String.valueOf(zcountlista)                                                                                                                |
| 187 | zregistroinicials    | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                           |
| 188 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                            |
| 189 | zposicions           | "0"                                                                            | 0                                                                                                                                          |
| 190 | zcontrol             | 0                                                                              | 0                                                                                                                                          |
| 191 | zposicion            | 0                                                                              | 0                                                                                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 127 | m4:startpage | m4task=SSE_CR_PREFERENC                                                                                                                                        |
| 127 | m4:beginjob  |                                                                                                                                                                |
| 128 | m4:datadef   | m4o=SSE_CR_PREFERENC; m4name=SSE_CR_PREFERENC                                                                                                                  |
| 137 | m4:exec      | m4method=CARGA:{}SSE_CR_PREFERENC{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                                  |
| 137 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                     |
| 138 | m4:outputdef | m4alias=SSE_CR_PREFERENC{"_VAL"}                                                                                                                               |
| 138 | m4:param     | name=m4name0; value=SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"_VAL"}{"[*]"}                                                                                       |
| 139 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                       |
| 139 | m4:param     | name=m4name0; value=SSE_CR_PREFERENC{"!"}SSE_COMUNICACION{"[*]"}                                                                                               |
| 140 | m4:outputdef | m4alias=SSE_CR_PREFERENC                                                                                                                                       |
| 140 | m4:param     | name=m4name0; value=SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 141 | m4:endjob    |                                                                                                                                                                |
| 142 | m4:move      |                                                                                                                                                                |
| 142 | m4:param     | name=SSE_CR_PREFERENC; value=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"["}Integer.valueOf(zinicios).intValue(){"]"}                                               |
| 143 | m4:move      |                                                                                                                                                                |
| 143 | m4:param     | name=SSE_CR_PREFERENC; value=SSE_CR_PREFERENC{"_VAL"}{":"}SSE_CR_PREFERENC{"_VAL"}{"[FIRST]"}                                                                  |
| 193 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                      |
| 204 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; htmlsafe=true                                   |
| 204 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                          |
| 207 | m4:label     | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true                                          |
| 208 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true                                          |
| 209 | m4:label     | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREF_PRIORITY"}; htmlsafe=true                                 |
| 210 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREF_PRIORITY"}; htmlsafe=true                                 |
| 214 | m4:label     | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                                   |
| 215 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                                   |
| 216 | m4:label     | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                    |
| 217 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                    |
| 222 | m4:label     | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true                                 |
| 223 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true                                 |
| 224 | m4:label     | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true                                     |
| 225 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true                                     |
| 226 | m4:label     | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                     |
| 227 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                     |
| 232 | m4:label     | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREFERENCES"}; htmlsafe=true                                   |
| 233 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREFERENCES"}; htmlsafe=true                                   |
| 238 | m4:label     | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}; htmlsafe=true                                       |
| 239 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}; htmlsafe=true                                       |
| 245 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                           |
| 245 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                           |
| 245 | m4:item      | m4name=SSE_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}SSE_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                           |
| 291 | m4:endpage   |                                                                                                                                                                |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 132 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel |
| 133 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro     |
| 149 | getCountInClient | znodo,zsubsesion,znodo                      |
| 150 | getCount         | znodo,zsubsesion,znodo                      |
| 157 | getCountInClient | znodolista,zsubsesion,znodolista            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función  | Argumentos |
| --- | -------- | ---------- |
| 30  | filtrar  |            |
| 36  | m4enviar |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 19  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                                                                  |
| 20  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 23  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 25  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                                                    |
| 39  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 44  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 49  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 181 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                                                                   |
| 285 | }else{%&gt;                                                                                                                                                                         |
| 40  | expresión de cálculo/transformación: var numregistros = parseInt(document.forms['a0'].elements[1].name);                                                                            |
| 41  | expresión de cálculo/transformación: cadena = cadena + URL;                                                                                                                         |
| 43  | expresión de cálculo/transformación: var formulario = "b" + i;                                                                                                                      |
| 45  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 46  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";                                                   |
| 47  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 50  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 51  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";                                                  |
| 52  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 53  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 54  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 77  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 79  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 81  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 82  | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                              |
| 83  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 84  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                                                                    |
| 85  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                                                                     |
| 86  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 88  | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 89  | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                |
| 90  | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 91  | expresión de cálculo/transformación: String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";                                                                    |
| 92  | expresión de cálculo/transformación: String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;                                                                      |
| 93  | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 96  | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 99  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                 |
| 101 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 103 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                          |
| 104 | expresión de cálculo/transformación: String zNACCION = zcomun + "ACCION_ACEPTADO";                                                                                                  |
| 105 | expresión de cálculo/transformación: String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";                                                                                           |
| 106 | expresión de cálculo/transformación: String zN_ACCION = zcomun + "N_ACCION";                                                                                                        |
| 108 | expresión de cálculo/transformación: String zDT_START = zcomun + "DT_START";                                                                                                        |
| 109 | expresión de cálculo/transformación: String zSCO_PREF_PRIORITY = zcomun + "SCO_PREF_PRIORITY";                                                                                      |
| 110 | expresión de cálculo/transformación: String zSTD_ID_SUB_GEO_DIV = zcomun + "STD_ID_SUB_GEO_DIV";                                                                                    |
| 111 | expresión de cálculo/transformación: String zSTD_N_SUB_GEO_DIV = zcomun + "STD_N_SUB_GEO_DIV";                                                                                      |
| 112 | expresión de cálculo/transformación: String zSTD_ID_GEO_DIV = zcomun + "STD_ID_GEO_DIV";                                                                                            |
| 113 | expresión de cálculo/transformación: String zSTD_N_GEO_DIV = zcomun + "STD_N_GEO_DIV";                                                                                              |
| 114 | expresión de cálculo/transformación: String zSTD_ID_COUNTRY = zcomun + "STD_ID_COUNTRY";                                                                                            |
| 115 | expresión de cálculo/transformación: String zSTD_N_COUNTRY = zcomun + "STD_N_COUNTRY";                                                                                              |
| 116 | expresión de cálculo/transformación: String zSTD_ID_WORK_UNIT = zcomun + "STD_ID_WORK_UNIT";                                                                                        |
| 117 | expresión de cálculo/transformación: String zSTD_N_WORK_UNIT = zcomun + "STD_N_WORK_UNIT";                                                                                          |
| 118 | expresión de cálculo/transformación: String zSTD_ID_JOB_CODE = zcomun + "STD_ID_JOB_CODE";                                                                                          |
| 119 | expresión de cálculo/transformación: String zSTD_N_JOB_CODE = zcomun + "STD_N_JOB_CODE";                                                                                            |
| 120 | expresión de cálculo/transformación: String zSCO_PREFERENCES = zcomun + "SCO_PREFERENCES";                                                                                          |
| 121 | expresión de cálculo/transformación: String zSCO_COMMENT = zcomun + "SCO_COMMENT";                                                                                                  |
| 123 | expresión de cálculo/transformación: String zNOMBREEMPLEADOlista = zcomunlista + "NOMBRE_EMPLEADO";                                                                                 |
| 124 | expresión de cálculo/transformación: String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";                                                                                           |
| 188 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                       |
| 197 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 7   | ../../mss_generico/espanol/menu_mss.jsp               |
| 8   | /mss_g3/mss_g3_trans.jsp                              |
| 65  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 66  | ../../sse_generico/espanol/generico_links.jsp         |
| 174 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 282 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 292 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 10  | /css/estilo_mss.css                                                             |
| 11  | /libreria/funciones_sse_val1.js                                                 |
| 12  | /libreria/funciones_sse.js                                                      |
| 167 | /iconos/noname_objetivos_ess_103_100.gif                                        |
| 176 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32_val.jsp?estado=31                 |
| 277 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 7   | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 8   | /mss_g3/mss_g3_trans.jsp                                                        |
| 65  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 66  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 74  | /mss_g3/smco_g3_p32_val.jsp                                                     |
| 174 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 282 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 292 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 7   | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 8   | /mss_g3/mss_g3_trans.jsp                                                        | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                              |
| BASE   | 65  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 66  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 174 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                    |
| BASE   | 282 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 292 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 11  | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                |
| BASE   | 12  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 176 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32_val.jsp?estado=31                 | ausente    | P06                                                                                                             |
| BASE   | 277 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                             |
| BASE   | 7   | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 8   | /mss_g3/mss_g3_trans.jsp                                                        | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                              |
| BASE   | 65  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 66  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 74  | /mss_g3/smco_g3_p32_val.jsp                                                     | ausente    | P06                                                                                                             |
| BASE   | 174 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                    |
| BASE   | 282 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 292 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_g3_p32_val.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
