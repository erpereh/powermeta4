# Valida otras direcciones

Identificador: `mss_g1/mss_g1_p1_val4.jsp`. Perfil: **responsable**. Dominio: **equipo**.

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

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_p1_val4.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p1_val4.jsp) | `1e6182d5f0e042119c8b86d73152beedc31db3820bfff044885bc084bf00db18` |    270 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/mss_g1_p1_val4.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_p1_val4.jsp)   | `1e6182d5f0e042119c8b86d73152beedc31db3820bfff044885bc084bf00db18` |    270 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_p1_val4.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_p1_val4.jsp) | `1e6182d5f0e042119c8b86d73152beedc31db3820bfff044885bc084bf00db18` |    270 |
| BASE / español    | [mss_g1/espanol/mss_g1_p1_val4.jsp](../../../../clon_portal/portal/mss_g1/espanol/mss_g1_p1_val4.jsp)                             | `1e6182d5f0e042119c8b86d73152beedc31db3820bfff044885bc084bf00db18` |    270 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_p1_val4.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p1_val4.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | Valida otras direcciones                                                                                                                          |
| 151 | Valida otras direcciones                                                                                                                          |
| 154 | Valida los cambios de otras direcciones de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 172 | Peticiones                                                                                                                                        |
| 187 | Tipo                                                                                                                                              |
| 189 | Via pública                                                                                                                                       |
| 193 | Bloque                                                                                                                                            |
| 194 | Piso                                                                                                                                              |
| 197 | Escalera                                                                                                                                          |
| 198 | Puerta                                                                                                                                            |
| 201 | Cód. postal                                                                                                                                       |
| 202 | Población                                                                                                                                         |
| 205 | Provincia                                                                                                                                         |
| 206 | Comunidad                                                                                                                                         |
| 207 | País                                                                                                                                              |
| 210 | *REC= { *NOD=SSE_ADDRESS_OTROS{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                                   |
| 229 | Cancelar                                                                                                                                          |
| 239 | Motivo de cancelación                                                                                                                             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 153 | img     | alt=Valida otras direcciones; title=Valida otras direcciones; src=/iconos/noname_valida_otros_domicilios_100_100.gif; width=100; height=100                                           |
| 162 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11; method=post; name=oculto; id=oculto                                                                            |
| 163 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                       |
| 164 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                      |
| 165 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                       |
| 211 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 212 | input   | id=ocultos&lt;%=zposicion%&gt;; name=ocultos&lt;%=zposicion%&gt;; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                              |
| 213 | input   | id=ocul&lt;%=zposicion%&gt;; name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                           |
| 220 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 224 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)  |
| 230 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 240 | form    | name=c&lt;%=zposicion%&gt;; id=c&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 242 | input   | title=Escribe el motivo de cancelación; size=48; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                      |
| 252 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                             |
| 253 | input   | type=hidden; id=param; name=param; value=                                                                                                                                             |
| 254 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 25  | znivel          | getParameter(request,"znivel") |

| L   | Variable             | Expresión fuente                                                               | Resolución estática parcial                                                                                                                  |
| --- | -------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | estado               | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                             |
| 17  | zfiltro              | zobjtabla.m4paramvalor("zfiltro")                                              | zobjtabla.m4paramvalor("zfiltro")                                                                                                            |
| 18  | zinicios             | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                           |
| 23  | znivel               | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                             |
| 71  | zsubsesion           | "SSE_ADDRESS_OTROS"                                                            | SSE_ADDRESS_OTROS                                                                                                                            |
| 72  | zmeta4object         | "SSE_ADDRESS_OTROS"                                                            | SSE_ADDRESS_OTROS                                                                                                                            |
| 73  | znodo                | "SSE_ADDRESS_OTROS"                                                            | SSE_ADDRESS_OTROS                                                                                                                            |
| 74  | ztipocarga           | "SSE"                                                                          | SSE                                                                                                                                          |
| 75  | zventanas            | "4"                                                                            | 4                                                                                                                                            |
| 76  | zvuelta              | 2                                                                              | 2                                                                                                                                            |
| 77  | zdireccion           | "/mss_g1/mss_g1_p1_val4.jsp"                                                   | /mss_g1/mss_g1_p1_val4.jsp                                                                                                                   |
| 78  | zestado              | "11"                                                                           | 11                                                                                                                                           |
| 79  | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 81  | zventana             | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 82  | zregistrofinal       | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 83  | zoutputdef           | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 84  | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 85  | zraiz                | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}                                                                           |
| 86  | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 88  | znodolista           | znodo + "_VAL"                                                                 | SSE_ADDRESS_OTROS{"_VAL"}                                                                                                                    |
| 89  | zoutputdeflista      | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"_VAL"}{"[*]"}                                                                                       |
| 90  | zmovelista           | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_ADDRESS_OTROS{"_VAL"}{":"}SSE_ADDRESS_OTROS{"_VAL"}{"[FIRST]"}                                                                           |
| 91  | zcomunlista          | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_ADDRESS_OTROS{"_VAL"}{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                       |
| 94  | znodocom             | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                             |
| 95  | zoutputdefcom        | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_ADDRESS_OTROS{"!"}SSE_COMUNICACION{"[*]"}                                                                                                |
| 96  | znodoprincipal       | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                                |
| 97  | zmetodocarga         | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSE_ADDRESS_OTROS{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                        |
| 99  | zNOMBREPERSON        | zraiz + "NOMBRE_PERSON"                                                        | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"NOMBRE_PERSON"}                                                          |
| 101 | zORDINAL             | zcomun + "ORDINAL"                                                             | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                            |
| 102 | zNACCION             | zcomun+ "N_ACCION"                                                             | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                           |
| 103 | zNOMBREEMPLEADO      | zcomun + "NOMBRE_EMPLEADO"                                                     | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                    |
| 104 | zSSPNSIGLADOMIC      | zcomun+ "SSP_N_SIGLA_DOMIC"                                                    | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}                                  |
| 105 | zSTDADDRESSLINE1     | zcomun + "STD_ADDRESS_LINE_1"                                                  | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_1"}                                 |
| 106 | zSSPNUMVIA           | zcomun + "SSP_NUM_VIA"                                                         | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_NUM_VIA"}                                        |
| 107 | zSSPBLOQUE           | zcomun + "SSP_BLOQUE"                                                          | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}                                         |
| 108 | zSSPPISO             | zcomun + "SSP_PISO"                                                            | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}                                           |
| 109 | zSSPESCALERA         | zcomun + "SSP_ESCALERA"                                                        | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}                                       |
| 110 | zSSPPUERTA           | zcomun + "SSP_PUERTA"                                                          | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}                                         |
| 111 | zSTDNCOUNTRY         | zcomun + "STD_N_COUNTRY"                                                       | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                      |
| 112 | zSTDNGEODIV          | zcomun + "STD_N_GEO_DIV"                                                       | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}                                      |
| 113 | zSTDNSUBGEODIV       | zcomun + "STD_N_SUB_GEO_DIV"                                                   | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                  |
| 114 | zSTDNGEOPLACE        | zcomun + "STD_N_GEO_PLACE"                                                     | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                    |
| 115 | zSSPDISTRITPOSTAL    | zcomun + "SSP_DISTRIT_POSTAL"                                                  | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}                                 |
| 116 | zSTDNLOCATIONTYPE    | zcomun+ "STD_N_LOCATION_TYPE"                                                  | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                                |
| 118 | zNOMBREEMPLEADOlista | zcomunlista+ "NOMBRE_EMPLEADO"                                                 | SSE_ADDRESS_OTROS{"_VAL"}{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                    |
| 119 | zSTDIDPERSON         | zcomunlista+"STD_ID_PERSON"                                                    | SSE_ADDRESS_OTROS{"_VAL"}{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}STD_ID_PERSON                          |
| 138 | zcounti              | 0                                                                              | 0                                                                                                                                            |
| 139 | zcountilista         | 0                                                                              | 0                                                                                                                                            |
| 140 | zcount               | 0                                                                              | 0                                                                                                                                            |
| 147 | zcountv              | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                      |
| 148 | zcountvlista         | String.valueOf(zcountilista)                                                   | String.valueOf(zcountilista)                                                                                                                 |
| 168 | zregistroinicials    | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                             |
| 169 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                              |
| 174 | zposicion            | 0                                                                              | 0                                                                                                                                            |
| 175 | zposicions           | "0"                                                                            | 0                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 121 | m4:startpage | m4task=SSE_ADDRESS_OTROS                                                                                                                                         |
| 122 | m4:beginjob  |                                                                                                                                                                  |
| 123 | m4:datadef   | m4o=SSE_ADDRESS_OTROS; m4name=SSE_ADDRESS_OTROS                                                                                                                  |
| 130 | m4:exec      | m4method=CARGA:{}SSE_ADDRESS_OTROS{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                                   |
| 130 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                       |
| 131 | m4:outputdef | m4alias=SSE_ADDRESS_OTROS{"_VAL"}                                                                                                                                |
| 131 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"_VAL"}{"[*]"}                                                                                       |
| 132 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                         |
| 132 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}SSE_COMUNICACION{"[*]"}                                                                                                |
| 133 | m4:outputdef | m4alias=SSE_ADDRESS_OTROS                                                                                                                                        |
| 133 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 134 | m4:endjob    |                                                                                                                                                                  |
| 135 | m4:move      |                                                                                                                                                                  |
| 135 | m4:param     | name=SSE_ADDRESS_OTROS; value=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                              |
| 136 | m4:move      |                                                                                                                                                                  |
| 136 | m4:param     | name=SSE_ADDRESS_OTROS; value=SSE_ADDRESS_OTROS{"_VAL"}{":"}SSE_ADDRESS_OTROS{"_VAL"}{"[FIRST]"}                                                                 |
| 177 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                        |
| 185 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; htmlsafe=true                                  |
| 185 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                         |
| 187 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                              |
| 189 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true                                |
| 190 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_1"}; htmlsafe=true                               |
| 190 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_NUM_VIA"}; htmlsafe=true                                      |
| 193 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}; htmlsafe=true                                       |
| 194 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}; htmlsafe=true                                         |
| 197 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}; htmlsafe=true                                     |
| 198 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}; htmlsafe=true                                       |
| 201 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}; htmlsafe=true                               |
| 202 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true                                  |
| 205 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true                                |
| 206 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true                                    |
| 207 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                    |
| 212 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                          |
| 212 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                          |
| 212 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                          |
| 264 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 126 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel |
| 127 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro     |
| 143 | getCountInClient | znodo,zsubsesion,znodo                      |
| 144 | getCountInClient | znodolista,zsubsesion,znodolista            |
| 145 | getCount         | znodo,zsubsesion,znodo                      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función  | Argumentos |
| --- | -------- | ---------- |
| 32  | filtrar  |            |
| 39  | m4enviar |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 20  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                                                                  |
| 21  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 24  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 26  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                                                    |
| 42  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 47  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 52  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 167 | &lt;% if (zcounti &gt; 0) {                                                                                                                                                         |
| 260 | &lt;%}else{%&gt;                                                                                                                                                                    |
| 43  | expresión de cálculo/transformación: var numregistros = parseInt(document.forms['a0'].elements[1].name);                                                                            |
| 44  | expresión de cálculo/transformación: cadena = cadena + URL;                                                                                                                         |
| 46  | expresión de cálculo/transformación: var formulario = "b" + i;                                                                                                                      |
| 48  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 49  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";                                                   |
| 50  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 53  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 54  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";                                                  |
| 55  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 56  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 57  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 80  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 82  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 83  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 84  | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                              |
| 85  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 86  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 88  | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 89  | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                |
| 90  | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 91  | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 95  | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 97  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                 |
| 99  | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 101 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                          |
| 103 | expresión de cálculo/transformación: String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";                                                                                           |
| 105 | expresión de cálculo/transformación: String zSTDADDRESSLINE1 = zcomun + "STD_ADDRESS_LINE_1";                                                                                       |
| 106 | expresión de cálculo/transformación: String zSSPNUMVIA = zcomun + "SSP_NUM_VIA";                                                                                                    |
| 107 | expresión de cálculo/transformación: String zSSPBLOQUE = zcomun + "SSP_BLOQUE";                                                                                                     |
| 108 | expresión de cálculo/transformación: String zSSPPISO = zcomun + "SSP_PISO";                                                                                                         |
| 109 | expresión de cálculo/transformación: String zSSPESCALERA = zcomun + "SSP_ESCALERA";                                                                                                 |
| 110 | expresión de cálculo/transformación: String zSSPPUERTA = zcomun + "SSP_PUERTA";                                                                                                     |
| 111 | expresión de cálculo/transformación: String zSTDNCOUNTRY =zcomun + "STD_N_COUNTRY";                                                                                                 |
| 112 | expresión de cálculo/transformación: String zSTDNGEODIV = zcomun + "STD_N_GEO_DIV";                                                                                                 |
| 113 | expresión de cálculo/transformación: String zSTDNSUBGEODIV = zcomun + "STD_N_SUB_GEO_DIV";                                                                                          |
| 114 | expresión de cálculo/transformación: String zSTDNGEOPLACE = zcomun + "STD_N_GEO_PLACE";                                                                                             |
| 115 | expresión de cálculo/transformación: String zSSPDISTRITPOSTAL = zcomun + "SSP_DISTRIT_POSTAL";                                                                                      |
| 169 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                       |
| 180 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 12  | ../../mss_generico/espanol/menu_mss.jsp               |
| 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 69  | ../../sse_generico/espanol/generico_links.jsp         |
| 159 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 259 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                                             |
| 10  | /libreria/funciones_sse_val1.js                                                 |
| 11  | /libreria/funciones_sse.js                                                      |
| 153 | /iconos/noname_valida_otros_domicilios_100_100.gif                              |
| 162 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11                  |
| 211 |                                                                                 |
| 220 |                                                                                 |
| 240 |                                                                                 |
| 252 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 12  | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 69  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 77  | /mss_g1/mss_g1_p1_val4.jsp                                                      |
| 159 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 259 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 159 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 259 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| COLL   | 10  | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| COLL   | 11  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 162 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| COLL   | 252 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 77  | /mss_g1/mss_g1_p1_val4.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 159 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 259 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 159 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| CYC    | 259 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 10  | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| CYC    | 11  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 162 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| CYC    | 252 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 77  | /mss_g1/mss_g1_p1_val4.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| CYC    | 159 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| CYC    | 259 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 159 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 259 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 10  | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| IBER   | 11  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 162 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| IBER   | 252 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 77  | /mss_g1/mss_g1_p1_val4.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 159 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 259 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 159 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| BASE   | 259 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 10  | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| BASE   | 11  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 162 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| BASE   | 252 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 77  | /mss_g1/mss_g1_p1_val4.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| BASE   | 159 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| BASE   | 259 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 266 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_p1_val4.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
