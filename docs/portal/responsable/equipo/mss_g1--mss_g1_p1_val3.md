# Valida teléfonos

Identificador: `mss_g1/mss_g1_p1_val3.jsp`. Perfil: **responsable**. Dominio: **equipo**.

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
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_p1_val3.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p1_val3.jsp) | `e7179752590b36e3408c7dfa279572190bf9237b2739ccf9fab67f2a645268d2` |    252 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/mss_g1_p1_val3.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_p1_val3.jsp)   | `e7179752590b36e3408c7dfa279572190bf9237b2739ccf9fab67f2a645268d2` |    252 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_p1_val3.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_p1_val3.jsp) | `e7179752590b36e3408c7dfa279572190bf9237b2739ccf9fab67f2a645268d2` |    252 |
| BASE / español    | [mss_g1/espanol/mss_g1_p1_val3.jsp](../../../../clon_portal/portal/mss_g1/espanol/mss_g1_p1_val3.jsp)                             | `e7179752590b36e3408c7dfa279572190bf9237b2739ccf9fab67f2a645268d2` |    252 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_p1_val3.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p1_val3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | Valida teléfonos                                                                                                                         |
| 147 | Valida teléfonos                                                                                                                         |
| 150 | Valida los cambios de teléfono de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 164 | Peticiones                                                                                                                               |
| 180 | :                                                                                                                                        |
| 182 | :                                                                                                                                        |
| 184 | :                                                                                                                                        |
| 189 | Teléfono                                                                                                                                 |
| 191 | Tipo                                                                                                                                     |
| 193 | Lugar                                                                                                                                    |
| 199 | *REC= { *NOD=SSE_PHONE_FAX{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                              |
| 218 | Cancelar                                                                                                                                 |
| 228 | Motivo de cancelación                                                                                                                    |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 149 | img     | alt=Valida teléfonos; title=Valida teléfonos; src=/iconos/noname_valida_telefono_103_100.gif; width=103; height=100                                                                   |
| 155 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11; method=post; name=oculto; id=oculto                                                                            |
| 156 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                       |
| 157 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                      |
| 158 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                       |
| 200 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 201 | input   | id=ocultos&lt;%=zposicion%&gt;; name=ocultos&lt;%=zposicion%&gt;; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                              |
| 202 | input   | id=ocul&lt;%=zposicion%&gt;; name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                           |
| 209 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 213 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)  |
| 219 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 229 | form    | name=c&lt;%=zposicion%&gt;; id=c&lt;%=zposicion%&gt;; action=                                                                                                                         |
| 231 | input   | size=48; title=Escribe el motivo de cancelación; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                      |
| 241 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                             |
| 242 | input   | type=hidden; id=param; name=param; value=                                                                                                                                             |
| 243 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 25  | znivel          | getParameter(request,"znivel") |

| L   | Variable             | Expresión fuente                                                               | Resolución estática parcial                                                                                                          |
| --- | -------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 16  | estado               | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                     |
| 17  | zfiltro              | zobjtabla.m4paramvalor("zfiltro")                                              | zobjtabla.m4paramvalor("zfiltro")                                                                                                    |
| 18  | zinicios             | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                   |
| 23  | znivel               | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                     |
| 71  | zsubsesion           | "SSE_PHONE_FAX"                                                                | SSE_PHONE_FAX                                                                                                                        |
| 72  | zmeta4object         | "SSE_PHONE_FAX"                                                                | SSE_PHONE_FAX                                                                                                                        |
| 73  | znodo                | "SSE_PHONE_FAX"                                                                | SSE_PHONE_FAX                                                                                                                        |
| 74  | ztipocarga           | "SSE"                                                                          | SSE                                                                                                                                  |
| 76  | zventanas            | "4"                                                                            | 4                                                                                                                                    |
| 77  | zvuelta              | 2                                                                              | 2                                                                                                                                    |
| 78  | zdireccion           | "/mss_g1/mss_g1_p1_val.jsp"                                                    | /mss_g1/mss_g1_p1_val.jsp                                                                                                            |
| 79  | zestado              | "11"                                                                           | 11                                                                                                                                   |
| 80  | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                 |
| 82  | zventana             | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                |
| 83  | zregistrofinal       | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                   |
| 85  | zoutputdef           | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 86  | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 87  | zraiz                | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"."}                                                                               |
| 88  | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 91  | znodolista           | znodo + "_VAL"                                                                 | SSE_PHONE_FAX{"_VAL"}                                                                                                                |
| 92  | zoutputdeflista      | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"_VAL"}{"[*]"}                                                                                       |
| 93  | zmovelista           | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_PHONE_FAX{"_VAL"}{":"}SSE_PHONE_FAX{"_VAL"}{"[FIRST]"}                                                                           |
| 94  | zcomunlista          | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_PHONE_FAX{"_VAL"}{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                           |
| 95  | znodocom             | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                     |
| 96  | zoutputdefcom        | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_PHONE_FAX{"!"}SSE_COMUNICACION{"[*]"}                                                                                            |
| 98  | znodoprincipal       | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                        |
| 99  | zmetodocarga         | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSE_PHONE_FAX{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                    |
| 101 | zNOMBREPERSON        | zraiz + "NOMBRE_PERSON"                                                        | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"."}{"NOMBRE_PERSON"}                                                              |
| 102 | zORDINAL             | zcomun+ "ORDINAL"                                                              | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                |
| 103 | zNACCION             | zcomun+ "N_ACCION"                                                             | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                               |
| 104 | zNOMBREEMPLEADO      | zcomun+"NOMBRE_EMPLEADO"                                                       | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}NOMBRE_EMPLEADO                                            |
| 105 | zSTDPHONE            | zcomun+ "STD_PHONE"                                                            | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}                                              |
| 106 | zSTDNLOCATIONTYPE    | zcomun+"STD_N_LOCATION_TYPE"                                                   | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE                                        |
| 107 | zSTDNLINETYPE        | zcomun +"STD_N_LINE_TYPE"                                                      | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}STD_N_LINE_TYPE                                            |
| 108 | zSTDINTCOUNTRYCODE   | zcomun + "STD_INT_COUNTRY_CODE"                                                | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}                                   |
| 109 | zSTDINTREGIONCODE    | zcomun + "STD_INT_REGION_CODE"                                                 | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}                                    |
| 110 | zSTDNATREGIONCODE    | zcomun + "STD_NAT_REGION_CODE"                                                 | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}                                    |
| 114 | zNOMBREEMPLEADOlista | zcomunlista+ "NOMBRE_EMPLEADO"                                                 | SSE_PHONE_FAX{"_VAL"}{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                        |
| 115 | zSTDIDPERSON         | zcomunlista+"STD_ID_PERSON"                                                    | SSE_PHONE_FAX{"_VAL"}{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}STD_ID_PERSON                              |
| 134 | zcounti              | 0                                                                              | 0                                                                                                                                    |
| 135 | zcountilista         | 0                                                                              | 0                                                                                                                                    |
| 136 | zcount               | 0                                                                              | 0                                                                                                                                    |
| 143 | zcountv              | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                              |
| 144 | zcountvlista         | String.valueOf(zcountilista)                                                   | String.valueOf(zcountilista)                                                                                                         |
| 161 | zregistroinicials    | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                     |
| 162 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                      |
| 166 | zposicion            | 0                                                                              | 0                                                                                                                                    |
| 167 | zposicions           | "0"                                                                            | 0                                                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                       |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 117 | m4:startpage | m4task=SSE_PHONE_FAX                                                                                                                                     |
| 118 | m4:beginjob  |                                                                                                                                                          |
| 119 | m4:datadef   | m4o=SSE_PHONE_FAX; m4name=SSE_PHONE_FAX                                                                                                                  |
| 126 | m4:exec      | m4method=CARGA:{}SSE_PHONE_FAX{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                               |
| 126 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                               |
| 127 | m4:outputdef | m4alias=SSE_PHONE_FAX{"_VAL"}                                                                                                                            |
| 127 | m4:param     | name=m4name0; value=SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"_VAL"}{"[*]"}                                                                                       |
| 128 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                 |
| 128 | m4:param     | name=m4name0; value=SSE_PHONE_FAX{"!"}SSE_COMUNICACION{"[*]"}                                                                                            |
| 129 | m4:outputdef | m4alias=SSE_PHONE_FAX                                                                                                                                    |
| 129 | m4:param     | name=m4name0; value=SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 130 | m4:endjob    |                                                                                                                                                          |
| 131 | m4:move      |                                                                                                                                                          |
| 131 | m4:param     | name=SSE_PHONE_FAX; value=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                  |
| 132 | m4:move      |                                                                                                                                                          |
| 132 | m4:param     | name=SSE_PHONE_FAX; value=SSE_PHONE_FAX{"_VAL"}{":"}SSE_PHONE_FAX{"_VAL"}{"[FIRST]"}                                                                     |
| 169 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                |
| 177 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}NOMBRE_EMPLEADO; htmlsafe=true                                          |
| 177 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                             |
| 180 | m4:label     | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}                                                |
| 181 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; htmlsafe=true                                 |
| 182 | m4:label     | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}                                                 |
| 183 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; htmlsafe=true                                  |
| 184 | m4:label     | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}                                                 |
| 185 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}; htmlsafe=true                                  |
| 190 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; htmlsafe=true                                            |
| 192 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}STD_N_LINE_TYPE; htmlsafe=true                                          |
| 194 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}STD_N_LOCATION_TYPE; htmlsafe=true                                      |
| 201 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                              |
| 201 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                              |
| 201 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                              |
| 246 | m4:endpage   |                                                                                                                                                          |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 122 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel |
| 123 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro     |
| 139 | getCountInClient | znodo,zsubsesion,znodo                      |
| 140 | getCountInClient | znodolista,zsubsesion,znodolista            |
| 141 | getCount         | znodo,zsubsesion,znodo                      |

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
| 160 | &lt;% if (zcounti &gt; 0) {                                                                                                                                                         |
| 245 | &lt;%}else{%&gt;&lt;div class="fuentenodatos"&gt;Actualmente no tienes ningún dato que validar en este nivel.&lt;/div&gt;&lt;%}%&gt;                                                |
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
| 96  | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 99  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                 |
| 101 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 108 | expresión de cálculo/transformación: String zSTDINTCOUNTRYCODE = zcomun + "STD_INT_COUNTRY_CODE";                                                                                   |
| 109 | expresión de cálculo/transformación: String zSTDINTREGIONCODE = zcomun + "STD_INT_REGION_CODE";                                                                                     |
| 110 | expresión de cálculo/transformación: String zSTDNATREGIONCODE = zcomun + "STD_NAT_REGION_CODE";                                                                                     |
| 162 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1); %&gt;                                                                 |
| 172 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 12  | ../../mss_generico/espanol/menu_mss.jsp               |
| 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 69  | ../../sse_generico/espanol/generico_links.jsp         |
| 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 240 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                                             |
| 10  | /libreria/funciones_sse_val1.js                                                 |
| 11  | /libreria/funciones_sse.js                                                      |
| 149 | /iconos/noname_valida_telefono_103_100.gif                                      |
| 155 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11                  |
| 200 |                                                                                 |
| 209 |                                                                                 |
| 229 |                                                                                 |
| 241 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 12  | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 69  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 78  | /mss_g1/mss_g1_p1_val.jsp                                                       |
| 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 240 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 240 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| COLL   | 10  | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| COLL   | 11  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 155 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| COLL   | 241 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 78  | /mss_g1/mss_g1_p1_val.jsp                                                       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 240 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| CYC    | 240 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 10  | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| CYC    | 11  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 155 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| CYC    | 241 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 78  | /mss_g1/mss_g1_p1_val.jsp                                                       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| CYC    | 240 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 240 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 10  | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| IBER   | 11  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 155 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| IBER   | 241 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 78  | /mss_g1/mss_g1_p1_val.jsp                                                       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 240 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| BASE   | 240 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 10  | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| BASE   | 11  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 155 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11                  | ausente    | P06                                                                                                                                                                                                |
| BASE   | 241 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 69  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 78  | /mss_g1/mss_g1_p1_val.jsp                                                       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 153 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| BASE   | 240 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 248 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_p1_val3.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
