# Valida experiencia profesional

Identificador: `mss_g1/mss_g1_p3_val3_new_old.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave             | Texto    | Ámbito | Diccionario                                                                                  |
| ----------------- | -------- | ------ | -------------------------------------------------------------------------------------------- |
| Labelmss.Solicita | solicita | COLL   | [translations/ess_mss_gen_es.properties:L186](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Solicita | solicita | CYC    | [translations/ess_mss_gen_es.properties:L186](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Solicita | solicita | IBER   | [translations/ess_mss_gen_es.properties:L186](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Solicita | solicita | BASE   | [translations/ess_mss_gen_es.properties:L185](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_p3_val3_new_old.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p3_val3_new_old.jsp) | `c8f6aa886b6438b3715d33992b1fbbe2468d356006212919221a9e37b4596085` |    292 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_p3_val3_new_old.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_p3_val3_new_old.jsp) | `c8f6aa886b6438b3715d33992b1fbbe2468d356006212919221a9e37b4596085` |    292 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_p3_val3_new_old.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p3_val3_new_old.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5   | Valida experiencia profesional                                                                                                                          |
| 186 | Valida experiencia profesional                                                                                                                          |
| 189 | Valida los cambios de experiencia profesional de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 201 | Peticiones                                                                                                                                              |
| 220 | Inicio                                                                                                                                                  |
| 222 | Fin                                                                                                                                                     |
| 224 | Empresa                                                                                                                                                 |
| 228 | Sector                                                                                                                                                  |
| 232 | Funciones                                                                                                                                               |
| 251 | *REC= { *NOD=SSE_EMP_PREV_JOBS{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                                         |
| 264 | Cancelar                                                                                                                                                |
| 270 | Motivo de cancelación                                                                                                                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78  | img     | onclick=m4ShowFunctions(this); src=/iconos/lu_nor_info_24.png; style=width:12px;height:12px;cursor:pointer                                                                            |
| 188 | img     | alt=Valida experiencia profesional; src=/iconos/noname_valida_experiencia_101_100.gif; width=101; height=100                                                                          |
| 194 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11; method=post; name=oculto; id=oculto                                                                            |
| 195 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                       |
| 196 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                      |
| 197 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                       |
| 252 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;                                                                                                                                  |
| 253 | input   | id=ocultos; name=ocultos; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                                                                      |
| 254 | input   | name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                        |
| 261 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;                                                                                                                                  |
| 263 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)  |
| 264 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 271 | form    | name=c&lt;%=zposicion%&gt;; id=c&lt;%=zposicion%&gt;                                                                                                                                  |
| 272 | input   | size=48; title=Escribe el motivo de cancelación; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                      |
| 278 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                             |
| 279 | input   | type=hidden; id=param; name=param; value=                                                                                                                                             |
| 280 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 21  | znivel          | getParameter(request,"znivel") |

| L   | Variable                | Expresión fuente                                                               | Resolución estática parcial                                                                                                                  |
| --- | ----------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 12  | estado                  | (String) zobjtabla.m4paramvalor("estado")                                      | (String) zobjtabla.m4paramvalor("estado")                                                                                                    |
| 13  | zfiltro                 | (String) zobjtabla.m4paramvalor("zfiltro")                                     | (String) zobjtabla.m4paramvalor("zfiltro")                                                                                                   |
| 14  | zinicios                | (String) zobjtabla.m4paramvalor("zinicios")                                    | (String) zobjtabla.m4paramvalor("zinicios")                                                                                                  |
| 19  | znivel                  | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                             |
| 97  | zsubsesion              | "SSE_EMP_PREV_JOBS"                                                            | SSE_EMP_PREV_JOBS                                                                                                                            |
| 98  | zmeta4object            | "SSE_EMP_PREV_JOBS"                                                            | SSE_EMP_PREV_JOBS                                                                                                                            |
| 99  | znodo                   | "SSE_EMP_PREV_JOBS"                                                            | SSE_EMP_PREV_JOBS                                                                                                                            |
| 100 | ztipocarga              | "SSE"                                                                          | SSE                                                                                                                                          |
| 101 | zventanas               | "10"                                                                           | 10                                                                                                                                           |
| 102 | zvuelta                 | 4                                                                              | 4                                                                                                                                            |
| 103 | zdireccion              | "/mss_g1/mss_g1_p3_val3.jsp"                                                   | /mss_g1/mss_g1_p3_val3.jsp                                                                                                                   |
| 104 | zestado                 | "11"                                                                           | 11                                                                                                                                           |
| 105 | zregistroinicial        | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 107 | zventana                | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 108 | zregistrofinal          | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 112 | zoutputdef              | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 113 | zmove                   | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 114 | zcomun                  | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 115 | zraiz                   | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"."}                                                                           |
| 117 | znodolista              | znodo + "_VAL"                                                                 | SSE_EMP_PREV_JOBS{"_VAL"}                                                                                                                    |
| 118 | zoutputdeflista         | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"_VAL"}{"[*]"}                                                                                       |
| 119 | zmovelista              | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_EMP_PREV_JOBS{"_VAL"}{":"}SSE_EMP_PREV_JOBS{"_VAL"}{"[FIRST]"}                                                                           |
| 120 | zraizlista              | znodolista + ":" + zsubsesion + "!" + znodolista + "."                         | SSE_EMP_PREV_JOBS{"_VAL"}{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"_VAL"}{"."}                                                           |
| 121 | ziteratorlista          | znodolista + ":" + zsubsesion + "!" + znodolista                               | SSE_EMP_PREV_JOBS{"_VAL"}{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"_VAL"}                                                                |
| 122 | zcomunlista             | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_EMP_PREV_JOBS{"_VAL"}{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                       |
| 124 | znodocom                | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                             |
| 125 | zoutputdefcom           | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_EMP_PREV_JOBS{"!"}SSE_COMUNICACION{"[*]"}                                                                                                |
| 129 | znodoprincipal          | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                                |
| 130 | zmetodocarga            | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA_CV"                     | CARGA:{}SSE_EMP_PREV_JOBS{"!"}SSE_PRINCIPAL{".CARGA_CV"}                                                                                     |
| 134 | zORDINAL                | zcomun + "ORDINAL"                                                             | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                            |
| 135 | zACCIONACEPTADO         | zcomun + "ACCION_ACEPTADO"                                                     | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"ACCION_ACEPTADO"}                                    |
| 136 | zNOMBREEMPLEADO         | zcomun + "NOMBRE_EMPLEADO"                                                     | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                    |
| 137 | zNOMBREPERSON           | zraiz + "NOMBRE_PERSON"                                                        | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"."}{"NOMBRE_PERSON"}                                                          |
| 138 | zNACCION                | zcomun + "N_ACCION"                                                            | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                           |
| 139 | zSTDDTSTART             | zcomun +"STD_DT_START"                                                         | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}STD_DT_START                                           |
| 140 | zSTDDTEND               | zcomun + "STD_DT_END"                                                          | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END"}                                         |
| 141 | zSTDEMPLOYER            | zcomun + "STD_EMPLOYER"                                                        | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_EMPLOYER"}                                       |
| 142 | zSTDNSECTOR             | zcomun + "STD_N_SECTOR"                                                        | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SECTOR"}                                       |
| 143 | zSTDDEVELOPEDACTIVITIES | zcomun + "STD_DEVELOPED_ACTIVITIES"                                            | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DEVELOPED_ACTIVITIES"}                           |
| 144 | zSCONAREA               | zcomun + "SCO_N_AREA"                                                          | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_AREA"}                                         |
| 145 | zSTDCURRSALARY          | zcomun + "STD_CURR_SALARY"                                                     | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_CURR_SALARY"}                                    |
| 146 | zSTDNCOUNTRY            | zcomun + "STD_N_COUNTRY"                                                       | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                      |
| 147 | zSTDINITIALJOB          | zcomun + "STD_INITIAL_JOB"                                                     | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_INITIAL_JOB"}                                    |
| 148 | zSTDFINALJOB            | zcomun + "STD_FINAL_JOB"                                                       | SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_FINAL_JOB"}                                      |
| 150 | zNOMBREEMPLEADOlista    | zcomunlista + "NOMBRE_EMPLEADO"                                                | SSE_EMP_PREV_JOBS{"_VAL"}{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                    |
| 151 | zSTDIDPERSON            | zcomunlista + "STD_ID_PERSON"                                                  | SSE_EMP_PREV_JOBS{"_VAL"}{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                      |
| 171 | zcounti                 | 0                                                                              | 0                                                                                                                                            |
| 172 | zcount                  | 0                                                                              | 0                                                                                                                                            |
| 173 | zcountilista            | 0                                                                              | 0                                                                                                                                            |
| 174 | zcountlista             | 0                                                                              | 0                                                                                                                                            |
| 182 | zcountv                 | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                      |
| 183 | zcountvlista            | String.valueOf(zcountilista)                                                   | String.valueOf(zcountilista)                                                                                                                 |
| 203 | zregistroinicials       | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                             |
| 204 | zregistrofinals         | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                              |
| 205 | zposicions              | "0"                                                                            | 0                                                                                                                                            |
| 206 | zcontrol                | 0                                                                              | 0                                                                                                                                            |
| 207 | zposicion               | 0                                                                              | 0                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 153 | m4:startpage | m4task=SSE_EMP_PREV_JOBS                                                                                                                                         |
| 153 | m4:beginjob  |                                                                                                                                                                  |
| 154 | m4:datadef   | m4o=SSE_EMP_PREV_JOBS; m4name=SSE_EMP_PREV_JOBS                                                                                                                  |
| 163 | m4:exec      | m4method=CARGA:{}SSE_EMP_PREV_JOBS{"!"}SSE_PRINCIPAL{".CARGA_CV"}                                                                                                |
| 163 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                       |
| 164 | m4:outputdef | m4alias=SSE_EMP_PREV_JOBS{"_VAL"}                                                                                                                                |
| 164 | m4:param     | name=m4name0; value=SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"_VAL"}{"[*]"}                                                                                       |
| 165 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                         |
| 165 | m4:param     | name=m4name0; value=SSE_EMP_PREV_JOBS{"!"}SSE_COMUNICACION{"[*]"}                                                                                                |
| 166 | m4:outputdef | m4alias=SSE_EMP_PREV_JOBS                                                                                                                                        |
| 166 | m4:param     | name=m4name0; value=SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 167 | m4:endjob    |                                                                                                                                                                  |
| 168 | m4:move      |                                                                                                                                                                  |
| 168 | m4:param     | name=SSE_EMP_PREV_JOBS; value=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                              |
| 169 | m4:move      |                                                                                                                                                                  |
| 169 | m4:param     | name=SSE_EMP_PREV_JOBS; value=SSE_EMP_PREV_JOBS{"_VAL"}{":"}SSE_EMP_PREV_JOBS{"_VAL"}{"[FIRST]"}                                                                 |
| 209 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                        |
| 218 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; htmlsafe=true                                  |
| 218 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                         |
| 221 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}STD_DT_START; htmlsafe=true                                         |
| 223 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END"}; htmlsafe=true                                       |
| 225 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_EMPLOYER"}; htmlsafe=true                                     |
| 229 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SECTOR"}; htmlsafe=true                                     |
| 233 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DEVELOPED_ACTIVITIES"}; htmlsafe=true                         |
| 236 | m4:label     | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_AREA"}                                                      |
| 237 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_AREA"}; htmlsafe=true                                       |
| 238 | m4:label     | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_CURR_SALARY"}                                                 |
| 239 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_CURR_SALARY"}; htmlsafe=true                                  |
| 240 | m4:label     | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                                   |
| 241 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                    |
| 244 | m4:label     | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_INITIAL_JOB"}                                                 |
| 245 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_INITIAL_JOB"}; htmlsafe=true                                  |
| 246 | m4:label     | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_FINAL_JOB"}                                                   |
| 247 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_FINAL_JOB"}; htmlsafe=true                                    |
| 253 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                          |
| 253 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                          |
| 253 | m4:item      | m4name=SSE_EMP_PREV_JOBS{":"}SSE_EMP_PREV_JOBS{"!"}SSE_EMP_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                          |
| 287 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 158 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel |
| 159 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro     |
| 177 | getCountInClient | znodo,zsubsesion,znodo                      |
| 178 | getCount         | znodo,zsubsesion,znodo                      |
| 179 | getCountInClient | znodolista,zsubsesion,znodolista            |
| 180 | getCountInClient | znodolista,zsubsesion,znodolista            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos |
| --- | --------------- | ---------- |
| 28  | filtrar         |            |
| 37  | m4enviar        |            |
| 70  | m4Cut           |            |
| 84  | m4ShowFunctions | me         |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 16  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                                                                  |
| 17  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 20  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 22  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                                                    |
| 38  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 50  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 55  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 76  | if (objTd.innerHTML.length &gt; 75) {                                                                                                                                               |
| 85  | if (me.parentNode.m4Functions) {                                                                                                                                                    |
| 199 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                                                                   |
| 284 | &lt;%}else{%&gt;                                                                                                                                                                    |
| 44  | expresión de cálculo/transformación: var numregistros = parseInt(document.forms['a0'].elements[1].name);                                                                            |
| 46  | expresión de cálculo/transformación: cadena = cadena + URL;                                                                                                                         |
| 49  | expresión de cálculo/transformación: var formulario = "b" + i;                                                                                                                      |
| 51  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 52  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";                                                   |
| 53  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 56  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 57  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";                                                  |
| 58  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 59  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 60  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 74  | expresión de cálculo/transformación: objTd = document.getElementById(sName + i);                                                                                                    |
| 81  | expresión de cálculo/transformación: objTd = document.getElementById(sName + i);                                                                                                    |
| 87  | expresión de cálculo/transformación: sPath = '/sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=' + sFunctions;                                                                        |
| 106 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 108 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 112 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 113 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                             |
| 114 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 115 | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 117 | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 118 | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                |
| 119 | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 120 | expresión de cálculo/transformación: String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";                                                                    |
| 121 | expresión de cálculo/transformación: String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;                                                                      |
| 122 | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 125 | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 130 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA_CV";                                                              |
| 134 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                          |
| 135 | expresión de cálculo/transformación: String zACCIONACEPTADO = zcomun + "ACCION_ACEPTADO";                                                                                           |
| 136 | expresión de cálculo/transformación: String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";                                                                                           |
| 137 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 138 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                                                                         |
| 140 | expresión de cálculo/transformación: String zSTDDTEND = zcomun + "STD_DT_END";                                                                                                      |
| 141 | expresión de cálculo/transformación: String zSTDEMPLOYER = zcomun + "STD_EMPLOYER";                                                                                                 |
| 142 | expresión de cálculo/transformación: String zSTDNSECTOR = zcomun + "STD_N_SECTOR";                                                                                                  |
| 143 | expresión de cálculo/transformación: String zSTDDEVELOPEDACTIVITIES = zcomun + "STD_DEVELOPED_ACTIVITIES";                                                                          |
| 144 | expresión de cálculo/transformación: String zSCONAREA = zcomun + "SCO_N_AREA";                                                                                                      |
| 145 | expresión de cálculo/transformación: String zSTDCURRSALARY = zcomun + "STD_CURR_SALARY";                                                                                            |
| 146 | expresión de cálculo/transformación: String zSTDNCOUNTRY = zcomun + "STD_N_COUNTRY";                                                                                                |
| 147 | expresión de cálculo/transformación: String zSTDINITIALJOB = zcomun + "STD_INITIAL_JOB";                                                                                            |
| 148 | expresión de cálculo/transformación: String zSTDFINALJOB = zcomun + "STD_FINAL_JOB";                                                                                                |
| 150 | expresión de cálculo/transformación: String zNOMBREEMPLEADOlista = zcomunlista + "NOMBRE_EMPLEADO";                                                                                 |
| 151 | expresión de cálculo/transformación: String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";                                                                                           |
| 204 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                       |
| 213 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 9   | ../../mss_generico/espanol/menu_mss.jsp               |
| 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 95  | ../../sse_generico/espanol/generico_links.jsp         |
| 192 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 283 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 289 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 6   | /css/estilo_mss.css                                                             |
| 7   | /libreria/funciones_sse_val1.js                                                 |
| 8   | /libreria/funciones_sse.js                                                      |
| 39  | #                                                                               |
| 78  | /iconos/lu_nor_info_24.png                                                      |
| 188 | /iconos/noname_valida_experiencia_101_100.gif                                   |
| 194 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11                  |
| 278 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 9   | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 87  | /sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=                                 |
| 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 95  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 103 | /mss_g1/mss_g1_p3_val3.jsp                                                      |
| 192 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 283 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 289 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 9   | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 95  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 192 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 283 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 289 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| COLL   | 7   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| COLL   | 8   | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 194 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| COLL   | 278 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 9   | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 87  | /sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=                                 | contextual | [sse_g1/ssco_g1_p3_comment.jsp](../../empleado/datos/sse_g1--ssco_g1_p3_comment.md); [sse_g1/ssco_g1_p3_comment.jsp](../../empleado/datos/sse_g1--ssco_g1_p3_comment.md)                           |
| COLL   | 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 95  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 103 | /mss_g1/mss_g1_p3_val3.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 192 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 283 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 289 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 9   | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 95  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 192 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 283 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 289 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 7   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| IBER   | 8   | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 194 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| IBER   | 278 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 9   | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 87  | /sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=                                 | contextual | [sse_g1/ssco_g1_p3_comment.jsp](../../empleado/datos/sse_g1--ssco_g1_p3_comment.md); [sse_g1/ssco_g1_p3_comment.jsp](../../empleado/datos/sse_g1--ssco_g1_p3_comment.md)                           |
| IBER   | 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 95  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 103 | /mss_g1/mss_g1_p3_val3.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 192 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 283 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 289 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_p3_val3_new_old.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
