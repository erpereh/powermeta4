# Valida direcciones

Identificador: `mss_g1/mss_g1_p1_val.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_p1_val.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p1_val.jsp) | `9f2205b1364208250b2ebc0e0c1a44edbd4203affe3f71a2ed92df21b3282195` |    273 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/mss_g1_p1_val.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_p1_val.jsp)   | `9f2205b1364208250b2ebc0e0c1a44edbd4203affe3f71a2ed92df21b3282195` |    273 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_p1_val.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_p1_val.jsp) | `9f2205b1364208250b2ebc0e0c1a44edbd4203affe3f71a2ed92df21b3282195` |    273 |
| BASE / español    | [mss_g1/espanol/mss_g1_p1_val.jsp](../../../../clon_portal/portal/mss_g1/espanol/mss_g1_p1_val.jsp)                             | `9f2205b1364208250b2ebc0e0c1a44edbd4203affe3f71a2ed92df21b3282195` |    273 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_p1_val.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p1_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7   | Valida direcciones                                                                                                                               |
| 158 | Valida direcciones                                                                                                                               |
| 161 | Valida los cambios de dirección fiscal de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 175 | Peticiones                                                                                                                                       |
| 192 | Via pública                                                                                                                                      |
| 198 | Bloque                                                                                                                                           |
| 199 | Piso                                                                                                                                             |
| 202 | Escalera                                                                                                                                         |
| 203 | Puerta                                                                                                                                           |
| 206 | Cód. postal                                                                                                                                      |
| 207 | Población                                                                                                                                        |
| 210 | Provincia                                                                                                                                        |
| 211 | Comunidad                                                                                                                                        |
| 212 | País                                                                                                                                             |
| 215 | *REC= { *NOD=SSE_ADDRESS{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                                        |
| 234 | Cancelar                                                                                                                                         |
| 244 | Motivo de cancelación                                                                                                                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 160 | img     | alt=Valida direcciones; title=Valida direcciones; src=/iconos/noname_valida_domicilio_122_100.gif; width=122; height=100                                                              |
| 165 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11; method=post; name=oculto; id=oculto                                                                             |
| 166 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                       |
| 167 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                      |
| 168 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                       |
| 216 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 217 | input   | id=ocultos&lt;%=zposicion%&gt;; name=ocultos&lt;%=zposicion%&gt;; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                              |
| 218 | input   | id=ocul&lt;%=zposicion%&gt;; name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                           |
| 225 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 229 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)  |
| 235 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 245 | form    | name=c&lt;%=zposicion%&gt;; id=c&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 247 | input   | size=48; title=Escribe el motivo de cancelación; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                      |
| 255 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                             |
| 256 | input   | type=hidden; id=param; name=param; value=                                                                                                                                             |
| 257 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 24  | znivel          | getParameter(request,"znivel") |

| L   | Variable             | Expresión fuente                                                               | Resolución estática parcial                                                                                                      |
| --- | -------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 14  | estado               | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                 |
| 15  | zfiltro              | zobjtabla.m4paramvalor("zfiltro")                                              | zobjtabla.m4paramvalor("zfiltro")                                                                                                |
| 16  | zinicios             | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                               |
| 22  | znivel               | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                 |
| 72  | zsubsesion           | "SSE_ADDRESS"                                                                  | SSE_ADDRESS                                                                                                                      |
| 73  | zmeta4object         | "SSE_ADDRESS"                                                                  | SSE_ADDRESS                                                                                                                      |
| 74  | znodo                | "SSE_ADDRESS"                                                                  | SSE_ADDRESS                                                                                                                      |
| 75  | ztipocarga           | "SSE"                                                                          | SSE                                                                                                                              |
| 76  | zventanas            | "4"                                                                            | 4                                                                                                                                |
| 77  | zvuelta              | 2                                                                              | 2                                                                                                                                |
| 78  | zdireccion           | "/mss_g1/mss_g1_p1_val.jsp"                                                    | /mss_g1/mss_g1_p1_val.jsp                                                                                                        |
| 79  | zestado              | "11"                                                                           | 11                                                                                                                               |
| 80  | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                             |
| 82  | zventana             | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                            |
| 83  | zregistrofinal       | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                               |
| 85  | zoutputdef           | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_ADDRESS{"!"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 86  | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_ADDRESS{":"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 87  | zraiz                | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"."}                                                                                 |
| 88  | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 91  | znodolista           | znodo + "_VAL"                                                                 | SSE_ADDRESS{"_VAL"}                                                                                                              |
| 92  | zoutputdeflista      | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_ADDRESS{"!"}SSE_ADDRESS{"_VAL"}{"[*]"}                                                                                       |
| 93  | zmovelista           | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_ADDRESS{"_VAL"}{":"}SSE_ADDRESS{"_VAL"}{"[FIRST]"}                                                                           |
| 94  | zcomunlista          | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_ADDRESS{"_VAL"}{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                             |
| 96  | znodocom             | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                 |
| 97  | zoutputdefcom        | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_ADDRESS{"!"}SSE_COMUNICACION{"[*]"}                                                                                          |
| 100 | znodoprincipal       | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                    |
| 101 | zmetodocarga         | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSE_ADDRESS{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                  |
| 104 | zNOMBREPERSON        | zraiz + "NOMBRE_PERSON"                                                        | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"."}{"NOMBRE_PERSON"}                                                                |
| 106 | zNOMBREEMPLEADO      | zcomun + "NOMBRE_EMPLEADO"                                                     | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                          |
| 107 | zNACCION             | zcomun + "N_ACCION"                                                            | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                                 |
| 108 | zORDINAL             | zcomun+ "ORDINAL"                                                              | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                  |
| 110 | zSSPNSIGLADOMIC      | zcomun+ "SSP_N_SIGLA_DOMIC"                                                    | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}                                        |
| 111 | zSTDADDRESSLINE1     | zcomun+ "STD_ADDRESS_LINE_1"                                                   | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_1"}                                       |
| 112 | zSSPNUMVIA           | zcomun + "SSP_NUM_VIA"                                                         | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_NUM_VIA"}                                              |
| 114 | zSSPBLOQUE           | zcomun + "SSP_BLOQUE"                                                          | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}                                               |
| 115 | zSSPPISO             | zcomun + "SSP_PISO"                                                            | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}                                                 |
| 116 | zSSPESCALERA         | zcomun + "SSP_ESCALERA"                                                        | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}                                             |
| 117 | zSSPPUERTA           | zcomun + "SSP_PUERTA"                                                          | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}                                               |
| 119 | zSTDNCOUNTRY         | zcomun+ "STD_N_COUNTRY"                                                        | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                            |
| 120 | zSTDNGEODIV          | zcomun + "STD_N_GEO_DIV"                                                       | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}                                            |
| 121 | zSTDNSUBGEODIV       | zcomun+ "STD_N_SUB_GEO_DIV"                                                    | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                        |
| 122 | zSTDNGEOPLACE        | zcomun+ "STD_N_GEO_PLACE"                                                      | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                          |
| 123 | zSSPDISTRITPOSTAL    | zcomun + "SSP_DISTRIT_POSTAL"                                                  | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}                                       |
| 125 | zNOMBREEMPLEADOlista | zcomunlista+ "NOMBRE_EMPLEADO"                                                 | SSE_ADDRESS{"_VAL"}{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                          |
| 126 | zSTDIDPERSON         | zcomunlista+"STD_ID_PERSON"                                                    | SSE_ADDRESS{"_VAL"}{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}STD_ID_PERSON                                |
| 145 | zcounti              | 0                                                                              | 0                                                                                                                                |
| 146 | zcountilista         | 0                                                                              | 0                                                                                                                                |
| 147 | zcount               | 0                                                                              | 0                                                                                                                                |
| 154 | zcountv              | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                          |
| 155 | zcountvlista         | String.valueOf(zcountilista)                                                   | String.valueOf(zcountilista)                                                                                                     |
| 171 | zregistroinicials    | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                 |
| 172 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                  |
| 177 | zposicion            | 0                                                                              | 0                                                                                                                                |
| 178 | zposicions           | "0"                                                                            | 0                                                                                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                   |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 129 | m4:startpage | m4task=SSE_ADDRESS                                                                                                                                   |
| 129 | m4:beginjob  |                                                                                                                                                      |
| 130 | m4:datadef   | m4o=SSE_ADDRESS; m4name=SSE_ADDRESS                                                                                                                  |
| 137 | m4:exec      | m4method=CARGA:{}SSE_ADDRESS{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                             |
| 137 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                           |
| 138 | m4:outputdef | m4alias=SSE_ADDRESS{"_VAL"}                                                                                                                          |
| 138 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}SSE_ADDRESS{"_VAL"}{"[*]"}                                                                                       |
| 139 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                             |
| 139 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}SSE_COMUNICACION{"[*]"}                                                                                          |
| 140 | m4:outputdef | m4alias=SSE_ADDRESS                                                                                                                                  |
| 140 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 141 | m4:endjob    |                                                                                                                                                      |
| 142 | m4:move      |                                                                                                                                                      |
| 142 | m4:param     | name=SSE_ADDRESS; value=SSE_ADDRESS{":"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                    |
| 143 | m4:move      |                                                                                                                                                      |
| 143 | m4:param     | name=SSE_ADDRESS; value=SSE_ADDRESS{"_VAL"}{":"}SSE_ADDRESS{"_VAL"}{"[FIRST]"}                                                                       |
| 180 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                            |
| 189 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; htmlsafe=true                                        |
| 189 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                               |
| 193 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true                                      |
| 194 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_1"}; htmlsafe=true                                     |
| 195 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_NUM_VIA"}; htmlsafe=true                                            |
| 198 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}; htmlsafe=true                                             |
| 199 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}; htmlsafe=true                                               |
| 202 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}; htmlsafe=true                                           |
| 203 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}; htmlsafe=true                                             |
| 206 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}; htmlsafe=true                                     |
| 207 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true                                        |
| 210 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true                                      |
| 211 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true                                          |
| 212 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                          |
| 217 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                                |
| 217 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                                |
| 217 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                                |
| 267 | m4:endpage   |                                                                                                                                                      |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 133 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel |
| 134 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro     |
| 150 | getCountInClient | znodo,zsubsesion,znodo                      |
| 151 | getCountInClient | znodolista,zsubsesion,znodolista            |
| 152 | getCount         | znodo,zsubsesion,znodo                      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función  | Argumentos |
| --- | -------- | ---------- |
| 33  | filtrar  |            |
| 40  | m4enviar |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 18  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                                                                  |
| 23  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 25  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){znivel = "1";}                                                                                                                   |
| 30  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 43  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 48  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 53  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 170 | &lt;% if (zcount &gt; 0) {                                                                                                                                                          |
| 263 | &lt;%}else{%&gt;                                                                                                                                                                    |
| 44  | expresión de cálculo/transformación: var numregistros = parseInt(document.forms['a0'].elements[1].name);                                                                            |
| 45  | expresión de cálculo/transformación: cadena = cadena + URL;                                                                                                                         |
| 47  | expresión de cálculo/transformación: var formulario = "b" + i;                                                                                                                      |
| 49  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 50  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";                                                   |
| 51  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 54  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 55  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";                                                  |
| 56  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 57  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 58  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 81  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 83  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 85  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 86  | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                              |
| 87  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 88  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 91  | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 92  | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                |
| 93  | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 94  | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 97  | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 101 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                 |
| 104 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 106 | expresión de cálculo/transformación: String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";                                                                                           |
| 107 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                                                                         |
| 112 | expresión de cálculo/transformación: String zSSPNUMVIA = zcomun + "SSP_NUM_VIA";                                                                                                    |
| 114 | expresión de cálculo/transformación: String zSSPBLOQUE = zcomun + "SSP_BLOQUE";                                                                                                     |
| 115 | expresión de cálculo/transformación: String zSSPPISO = zcomun + "SSP_PISO";                                                                                                         |
| 116 | expresión de cálculo/transformación: String zSSPESCALERA = zcomun + "SSP_ESCALERA";                                                                                                 |
| 117 | expresión de cálculo/transformación: String zSSPPUERTA = zcomun + "SSP_PUERTA";                                                                                                     |
| 120 | expresión de cálculo/transformación: String zSTDNGEODIV = zcomun + "STD_N_GEO_DIV";                                                                                                 |
| 123 | expresión de cálculo/transformación: String zSSPDISTRITPOSTAL = zcomun + "SSP_DISTRIT_POSTAL";                                                                                      |
| 172 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                       |
| 183 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 70  | ../../sse_generico/espanol/generico_links.jsp         |
| 164 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 262 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 268 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                             |
| 9   | /libreria/funciones_sse_val1.js                                                 |
| 10  | /libreria/funciones_sse.js                                                      |
| 160 | /iconos/noname_valida_domicilio_122_100.gif                                     |
| 165 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11                   |
| 216 |                                                                                 |
| 225 |                                                                                 |
| 245 |                                                                                 |
| 255 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 70  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 78  | /mss_g1/mss_g1_p1_val.jsp                                                       |
| 164 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 262 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 268 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 70  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 164 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 262 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 268 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| COLL   | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| COLL   | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 165 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11                   | ausente    | P06                                                                                                                                                                                                |
| COLL   | 255 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 70  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 78  | /mss_g1/mss_g1_p1_val.jsp                                                       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 164 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 262 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 268 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 70  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 164 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| CYC    | 262 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 268 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| CYC    | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 165 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11                   | ausente    | P06                                                                                                                                                                                                |
| CYC    | 255 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 70  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 78  | /mss_g1/mss_g1_p1_val.jsp                                                       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 164 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| CYC    | 262 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 268 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 70  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 164 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 262 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 268 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| IBER   | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 165 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11                   | ausente    | P06                                                                                                                                                                                                |
| IBER   | 255 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 70  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 78  | /mss_g1/mss_g1_p1_val.jsp                                                       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 164 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 262 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 268 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 70  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 164 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| BASE   | 262 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 268 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| BASE   | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 165 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11                   | ausente    | P06                                                                                                                                                                                                |
| BASE   | 255 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 70  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 78  | /mss_g1/mss_g1_p1_val.jsp                                                       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 164 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| BASE   | 262 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 268 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_p1_val.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
