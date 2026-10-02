# Valida titulaciones

Identificador: `mss_g1/mss_g1_p3_val.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                  | Solo en BASE                                                   |
| ------ | --------- | ------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------- |
| COLL   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_EMP_BACKGROUND{"!"}SSE_PRINCIPAL{".CARGA_CV"} | m4:exec:CARGA:{}SSE_EMP_BACKGROUND{"!"}SSE_PRINCIPAL{".CARGA"} |
| CYC    | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_EMP_BACKGROUND{"!"}SSE_PRINCIPAL{".CARGA_CV"} | m4:exec:CARGA:{}SSE_EMP_BACKGROUND{"!"}SSE_PRINCIPAL{".CARGA"} |
| IBER   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_EMP_BACKGROUND{"!"}SSE_PRINCIPAL{".CARGA_CV"} | m4:exec:CARGA:{}SSE_EMP_BACKGROUND{"!"}SSE_PRINCIPAL{".CARGA"} |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave             | Texto    | Ámbito | Diccionario                                                                                  |
| ----------------- | -------- | ------ | -------------------------------------------------------------------------------------------- |
| Labelmss.Solicita | solicita | COLL   | [translations/ess_mss_gen_es.properties:L186](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Solicita | solicita | CYC    | [translations/ess_mss_gen_es.properties:L186](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Solicita | solicita | IBER   | [translations/ess_mss_gen_es.properties:L186](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.Solicita | solicita | BASE   | [translations/ess_mss_gen_es.properties:L185](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_p3_val.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p3_val.jsp) | `4fa4082fefd7a31173d912ddba9ae39b793c77276970ff7925b894626cf9411b` |    299 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/mss_g1_p3_val.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_p3_val.jsp)   | `4fa4082fefd7a31173d912ddba9ae39b793c77276970ff7925b894626cf9411b` |    299 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_p3_val.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_p3_val.jsp) | `4fa4082fefd7a31173d912ddba9ae39b793c77276970ff7925b894626cf9411b` |    299 |
| BASE / español    | [mss_g1/espanol/mss_g1_p3_val.jsp](../../../../clon_portal/portal/mss_g1/espanol/mss_g1_p3_val.jsp)                             | `94f017ff207140048d9c7a571f7df555118dff8185043a8d88d785557acc1562` |    296 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_p3_val.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p3_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 5   | Valida titulaciones                                                                                                                        |
| 187 | Valida titulaciones                                                                                                                        |
| 191 | Valida los cambios de titulación de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 204 | Peticiones                                                                                                                                 |
| 225 | Titulación:                                                                                                                                |
| 227 | Especialidad:                                                                                                                              |
| 231 | Tipo:                                                                                                                                      |
| 233 | Centro:                                                                                                                                    |
| 241 | Comentario:                                                                                                                                |
| 245 | *REC= { *NOD=SSE_EMP_BACKGROUND{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                           |
| 261 | Cancelar                                                                                                                                   |
| 268 | Comentario RRHH                                                                                                                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 75  | img     | onclick=m4ShowComent(this); src=/iconos/lu_nor_info_24.png; style=width:12px;height:12px;cursor:pointer                                                                               |
| 190 | img     | alt=Valida titulaciones; src=/iconos/noname_valida_titulaciones_74_100.gif; width=100; height=100                                                                                     |
| 196 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11; method=post; name=oculto; id=oculto                                                                             |
| 197 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                       |
| 198 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                      |
| 199 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                       |
| 246 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;                                                                                                                                  |
| 247 | input   | id=ocultos; name=ocultos; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                                                                      |
| 248 | input   | size=1; name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                |
| 255 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;                                                                                                                                  |
| 258 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)  |
| 261 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 271 | form    | name=c&lt;%=zposicion%&gt;; title=Escribe el motivo de cancelación; id=c&lt;%=zposicion%&gt;                                                                                          |
| 271 | input   | size=48; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                                                              |
| 280 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                             |
| 281 | input   | type=hidden; id=param; name=param; value=                                                                                                                                             |
| 282 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 21  | znivel          | getParameter(request,"znivel") |

| L   | Variable             | Expresión fuente                                                               | Resolución estática parcial                                                                                                                    |
| --- | -------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 12  | estado               | (String) zobjtabla.m4paramvalor("estado")                                      | (String) zobjtabla.m4paramvalor("estado")                                                                                                      |
| 13  | zfiltro              | (String) zobjtabla.m4paramvalor("zfiltro")                                     | (String) zobjtabla.m4paramvalor("zfiltro")                                                                                                     |
| 14  | zinicios             | (String) zobjtabla.m4paramvalor("zinicios")                                    | (String) zobjtabla.m4paramvalor("zinicios")                                                                                                    |
| 19  | znivel               | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                               |
| 94  | zsubsesion           | "SSE_EMP_BACKGROUND"                                                           | SSE_EMP_BACKGROUND                                                                                                                             |
| 95  | zmeta4object         | "SSE_EMP_BACKGROUND"                                                           | SSE_EMP_BACKGROUND                                                                                                                             |
| 96  | znodo                | "SSE_EMP_BACKGROUND"                                                           | SSE_EMP_BACKGROUND                                                                                                                             |
| 97  | znodolista           | znodo + "_VAL"                                                                 | SSE_EMP_BACKGROUND{"_VAL"}                                                                                                                     |
| 99  | zventanas            | "4"                                                                            | 4                                                                                                                                              |
| 100 | zvuelta              | 2                                                                              | 2                                                                                                                                              |
| 101 | zdireccion           | "/mss_g1/mss_g1_p3_val2.jsp"                                                   | /mss_g1/mss_g1_p3_val2.jsp                                                                                                                     |
| 102 | zestado              | "11"                                                                           | 11                                                                                                                                             |
| 103 | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                           |
| 105 | zventana             | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                          |
| 106 | zregistrofinal       | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                             |
| 110 | zoutputdef           | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 111 | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 112 | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}                                                      |
| 113 | zraiz                | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"."}                                                                          |
| 115 | zoutputdeflista      | znodolista + ":" + zsubsesion + "!" + znodolista + "[*]"                       | SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"_VAL"}{"[*]"}                                                        |
| 116 | zmovelista           | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"_VAL"}{"[FIRST]"}                                                                           |
| 117 | zcomunlista          | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                      |
| 120 | znodocom             | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                               |
| 121 | zoutputdefcom        | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_EMP_BACKGROUND{"!"}SSE_COMUNICACION{"[*]"}                                                                                                 |
| 125 | znodoprincipal       | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                                  |
| 126 | zmetodocarga         | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA_CV"                     | CARGA:{}SSE_EMP_BACKGROUND{"!"}SSE_PRINCIPAL{".CARGA_CV"}                                                                                      |
| 127 | ztipocarga           | "SSE"                                                                          | SSE                                                                                                                                            |
| 132 | zORDINAL             | zcomun + "ORDINAL"                                                             | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                           |
| 133 | zACCIONACEPTADO      | zcomun + "ACCION_ACEPTADO"                                                     | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ACCION_ACEPTADO"}                                   |
| 134 | zNOMBREEMPLEADO      | zcomun + "NOMBRE_EMPLEADO"                                                     | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                   |
| 135 | zNOMBREPERSON        | zraiz + "NOMBRE_PERSON"                                                        | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"."}{"NOMBRE_PERSON"}                                                         |
| 138 | zSTDNDIPLOMA         | zcomun +"STD_N_DIPLOMA"                                                        | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}STD_N_DIPLOMA                                         |
| 139 | zSTDNEDUSP           | zcomun + "STD_N_EDU_SP"                                                        | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}                                      |
| 140 | zSTDNEDUTYPE         | zcomun + "STD_N_EDU_TYPE"                                                      | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}                                    |
| 141 | zSTDNEXTORG          | zcomun + "STD_N_EXT_ORG"                                                       | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EXT_ORG"}                                     |
| 142 | zNACCION             | zcomun + "N_ACCION"                                                            | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                          |
| 143 | zSTDDESCEDUCENTER    | zcomun + "STD_DESC_EDU_CENTER"                                                 | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DESC_EDU_CENTER"}                               |
| 144 | zSTDCOMMENT          | zcomun + "STD_COMMENT"                                                         | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_COMMENT"}                                       |
| 145 | sideducenter         | ""                                                                             |                                                                                                                                                |
| 147 | zNOMBREEMPLEADOlista | zcomunlista + "NOMBRE_EMPLEADO"                                                | SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                   |
| 148 | zSTDIDPERSON         | zcomunlista + "STD_ID_PERSON"                                                  | SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                     |
| 169 | zcounti              | 0                                                                              | 0                                                                                                                                              |
| 170 | zcount               | 0                                                                              | 0                                                                                                                                              |
| 176 | zcountv              | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                        |
| 178 | zcountlista          | 0                                                                              | 0                                                                                                                                              |
| 183 | zcountvlista         | String.valueOf(zcountlista)                                                    | String.valueOf(zcountlista)                                                                                                                    |
| 207 | zregistroinicials    | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                               |
| 208 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                |
| 209 | zposicions           | "0"                                                                            | 0                                                                                                                                              |
| 210 | zcontrol             | 0                                                                              | 0                                                                                                                                              |
| 211 | zposicion            | 0                                                                              | 0                                                                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                 |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 151 | m4:startpage | m4task=SSE_EMP_BACKGROUND                                                                                                                                          |
| 151 | m4:beginjob  |                                                                                                                                                                    |
| 152 | m4:datadef   | m4o=SSE_EMP_BACKGROUND; m4name=SSE_EMP_BACKGROUND                                                                                                                  |
| 161 | m4:exec      | m4method=CARGA:{}SSE_EMP_BACKGROUND{"!"}SSE_PRINCIPAL{".CARGA_CV"}                                                                                                 |
| 161 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                         |
| 162 | m4:outputdef | m4alias=SSE_EMP_BACKGROUND{"_VAL"}                                                                                                                                 |
| 162 | m4:param     | name=m4name0; value=SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"_VAL"}{"[*]"}                                                        |
| 163 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                           |
| 163 | m4:param     | name=m4name0; value=SSE_EMP_BACKGROUND{"!"}SSE_COMUNICACION{"[*]"}                                                                                                 |
| 164 | m4:outputdef | m4alias=SSE_EMP_BACKGROUND                                                                                                                                         |
| 164 | m4:param     | name=m4name0; value=SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 165 | m4:endjob    |                                                                                                                                                                    |
| 166 | m4:move      |                                                                                                                                                                    |
| 166 | m4:param     | name=SSE_EMP_BACKGROUND; value=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"]"}                                             |
| 167 | m4:move      |                                                                                                                                                                    |
| 167 | m4:param     | name=SSE_EMP_BACKGROUND; value=SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"_VAL"}{"[FIRST]"}                                                                |
| 213 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                          |
| 214 | m4:item      | var=; item=STD_ID_EDU_CENTER; htmlsafe=true; outputdef=SSE_EMP_BACKGROUND                                                                                          |
| 223 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; htmlsafe=true                                 |
| 223 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                        |
| 226 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}STD_N_DIPLOMA; htmlsafe=true                                       |
| 228 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}; htmlsafe=true                                    |
| 232 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}; htmlsafe=true                                  |
| 235 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DESC_EDU_CENTER"}; htmlsafe=true                             |
| 237 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EXT_ORG"}; htmlsafe=true                                   |
| 242 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_COMMENT"}; htmlsafe=true                                     |
| 247 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                         |
| 247 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                         |
| 247 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                         |
| 294 | m4:endpage   |                                                                                                                                                                    |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 156 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel |
| 157 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro     |
| 173 | getCountInClient | znodo,zsubsesion,znodo                      |
| 174 | getCount         | znodo,zsubsesion,znodo                      |
| 181 | getCountInClient | znodolista,zsubsesion,znodolista            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos |
| --- | ------------ | ---------- |
| 28  | filtrar      |            |
| 37  | m4enviar     |            |
| 67  | m4Cut        |            |
| 81  | m4ShowComent | me         |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 16  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                                                                  |
| 17  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 20  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 22  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                                                    |
| 38  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 46  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 54  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 73  | if (objTd.innerHTML.length &gt; 75) {                                                                                                                                               |
| 82  | if (me.parentNode.m4Comment) {                                                                                                                                                      |
| 201 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                                                                   |
| 234 | &lt;% if (sideducenter.equals("000")) {%&gt;                                                                                                                                        |
| 236 | &lt;%}else{%&gt;                                                                                                                                                                    |
| 289 | }else{%&gt;                                                                                                                                                                         |
| 42  | expresión de cálculo/transformación: var numregistros = parseInt(document.forms['a0'].elements[1].name);                                                                            |
| 43  | expresión de cálculo/transformación: cadena = cadena + URL;                                                                                                                         |
| 45  | expresión de cálculo/transformación: var formulario = "b" + i;                                                                                                                      |
| 47  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 48  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";                                                   |
| 49  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 51  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 52  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 55  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 56  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";                                                  |
| 57  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 58  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 59  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 71  | expresión de cálculo/transformación: objTd = document.getElementById(sName + i);                                                                                                    |
| 78  | expresión de cálculo/transformación: objTd = document.getElementById(sName + i);                                                                                                    |
| 84  | expresión de cálculo/transformación: sPath = '/sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=' + sComment;                                                                          |
| 97  | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 104 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 106 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 110 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 111 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                             |
| 112 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 113 | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 115 | expresión de cálculo/transformación: String zoutputdeflista = znodolista + ":" + zsubsesion + "!" + znodolista + "[*]";                                                             |
| 116 | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 117 | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 121 | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 126 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA_CV";                                                              |
| 132 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                          |
| 133 | expresión de cálculo/transformación: String zACCIONACEPTADO = zcomun + "ACCION_ACEPTADO";                                                                                           |
| 134 | expresión de cálculo/transformación: String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";                                                                                           |
| 135 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 139 | expresión de cálculo/transformación: String zSTDNEDUSP = zcomun + "STD_N_EDU_SP";                                                                                                   |
| 140 | expresión de cálculo/transformación: String zSTDNEDUTYPE = zcomun + "STD_N_EDU_TYPE";                                                                                               |
| 141 | expresión de cálculo/transformación: String zSTDNEXTORG = zcomun + "STD_N_EXT_ORG";                                                                                                 |
| 142 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                                                                         |
| 143 | expresión de cálculo/transformación: String zSTDDESCEDUCENTER = zcomun + "STD_DESC_EDU_CENTER";                                                                                     |
| 144 | expresión de cálculo/transformación: String zSTDCOMMENT = zcomun + "STD_COMMENT";                                                                                                   |
| 147 | expresión de cálculo/transformación: String zNOMBREEMPLEADOlista = zcomunlista + "NOMBRE_EMPLEADO";                                                                                 |
| 148 | expresión de cálculo/transformación: String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";                                                                                           |
| 208 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                       |
| 218 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 9   | ../../mss_generico/espanol/menu_mss.jsp               |
| 91  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 92  | ../../sse_generico/espanol/generico_links.jsp         |
| 194 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 286 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 296 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 6   | /css/estilo_mss.css                                                             |
| 7   | /libreria/funciones_sse_val1.js                                                 |
| 8   | /libreria/funciones_sse.js                                                      |
| 39  | #                                                                               |
| 75  | /iconos/lu_nor_info_24.png                                                      |
| 190 | /iconos/noname_valida_titulaciones_74_100.gif                                   |
| 196 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11                   |
| 280 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 9   | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 84  | /sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=                                 |
| 91  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 92  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 101 | /mss_g1/mss_g1_p3_val2.jsp                                                      |
| 194 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 286 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 296 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [mss_g1/espanol/mss_g1_p3_val.jsp](../../../../clon_portal/portal/mss_g1/espanol/mss_g1_p3_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 7   | Valida titulaciones                                                                                                                        |
| 185 | Valida titulaciones                                                                                                                        |
| 189 | Valida los cambios de titulación de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 202 | Peticiones                                                                                                                                 |
| 223 | Titulación:                                                                                                                                |
| 225 | Especialidad:                                                                                                                              |
| 229 | Tipo:                                                                                                                                      |
| 231 | Centro:                                                                                                                                    |
| 239 | Comentario:                                                                                                                                |
| 243 | *REC= { *NOD=SSE_EMP_BACKGROUND{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                           |
| 259 | Cancelar                                                                                                                                   |
| 266 | Motivo de cancelación                                                                                                                      |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73  | img     | onclick=m4ShowComent(this); src=/iconos/lu_nor_info_24.png; style=width:12px;height:12px;cursor:pointer                                                                               |
| 188 | img     | alt=Valida titulaciones; src=/iconos/noname_valida_titulaciones_74_100.gif; width=100; height=100                                                                                     |
| 194 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11; method=post; name=oculto; id=oculto                                                                             |
| 195 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                       |
| 196 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                      |
| 197 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                       |
| 244 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;                                                                                                                                  |
| 245 | input   | id=ocultos; name=ocultos; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                                                                      |
| 246 | input   | size=1; name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                |
| 253 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;                                                                                                                                  |
| 256 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)  |
| 259 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 268 | form    | name=c&lt;%=zposicion%&gt;; title=Escribe el motivo de cancelación; id=c&lt;%=zposicion%&gt;                                                                                          |
| 268 | input   | size=48; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                                                              |
| 277 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                             |
| 278 | input   | type=hidden; id=param; name=param; value=                                                                                                                                             |
| 279 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 23  | znivel          | getParameter(request,"znivel") |

| L   | Variable             | Expresión fuente                                                               | Resolución estática parcial                                                                                                                    |
| --- | -------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | estado               | (String) zobjtabla.m4paramvalor("estado")                                      | (String) zobjtabla.m4paramvalor("estado")                                                                                                      |
| 15  | zfiltro              | (String) zobjtabla.m4paramvalor("zfiltro")                                     | (String) zobjtabla.m4paramvalor("zfiltro")                                                                                                     |
| 16  | zinicios             | (String) zobjtabla.m4paramvalor("zinicios")                                    | (String) zobjtabla.m4paramvalor("zinicios")                                                                                                    |
| 21  | znivel               | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                               |
| 92  | zsubsesion           | "SSE_EMP_BACKGROUND"                                                           | SSE_EMP_BACKGROUND                                                                                                                             |
| 93  | zmeta4object         | "SSE_EMP_BACKGROUND"                                                           | SSE_EMP_BACKGROUND                                                                                                                             |
| 94  | znodo                | "SSE_EMP_BACKGROUND"                                                           | SSE_EMP_BACKGROUND                                                                                                                             |
| 95  | znodolista           | znodo + "_VAL"                                                                 | SSE_EMP_BACKGROUND{"_VAL"}                                                                                                                     |
| 97  | zventanas            | "4"                                                                            | 4                                                                                                                                              |
| 98  | zvuelta              | 2                                                                              | 2                                                                                                                                              |
| 99  | zdireccion           | "/mss_g1/mss_g1_p3_val2.jsp"                                                   | /mss_g1/mss_g1_p3_val2.jsp                                                                                                                     |
| 100 | zestado              | "11"                                                                           | 11                                                                                                                                             |
| 101 | zregistroinicial     | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                           |
| 103 | zventana             | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                          |
| 104 | zregistrofinal       | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                             |
| 108 | zoutputdef           | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 109 | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 110 | zcomun               | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}                                                      |
| 111 | zraiz                | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"."}                                                                          |
| 113 | zoutputdeflista      | znodolista + ":" + zsubsesion + "!" + znodolista + "[*]"                       | SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"_VAL"}{"[*]"}                                                        |
| 114 | zmovelista           | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"_VAL"}{"[FIRST]"}                                                                           |
| 115 | zcomunlista          | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                      |
| 118 | znodocom             | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                               |
| 119 | zoutputdefcom        | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_EMP_BACKGROUND{"!"}SSE_COMUNICACION{"[*]"}                                                                                                 |
| 123 | znodoprincipal       | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                                  |
| 124 | zmetodocarga         | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSE_EMP_BACKGROUND{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                         |
| 125 | ztipocarga           | "SSE"                                                                          | SSE                                                                                                                                            |
| 130 | zORDINAL             | zcomun + "ORDINAL"                                                             | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                           |
| 131 | zACCIONACEPTADO      | zcomun + "ACCION_ACEPTADO"                                                     | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ACCION_ACEPTADO"}                                   |
| 132 | zNOMBREEMPLEADO      | zcomun + "NOMBRE_EMPLEADO"                                                     | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                   |
| 133 | zNOMBREPERSON        | zraiz + "NOMBRE_PERSON"                                                        | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"."}{"NOMBRE_PERSON"}                                                         |
| 136 | zSTDNDIPLOMA         | zcomun +"STD_N_DIPLOMA"                                                        | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}STD_N_DIPLOMA                                         |
| 137 | zSTDNEDUSP           | zcomun + "STD_N_EDU_SP"                                                        | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}                                      |
| 138 | zSTDNEDUTYPE         | zcomun + "STD_N_EDU_TYPE"                                                      | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}                                    |
| 139 | zSTDNEXTORG          | zcomun + "STD_N_EXT_ORG"                                                       | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EXT_ORG"}                                     |
| 140 | zNACCION             | zcomun + "N_ACCION"                                                            | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                          |
| 141 | zSTDDESCEDUCENTER    | zcomun + "STD_DESC_EDU_CENTER"                                                 | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DESC_EDU_CENTER"}                               |
| 142 | zSTDCOMMENT          | zcomun + "STD_COMMENT"                                                         | SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_COMMENT"}                                       |
| 143 | sideducenter         | ""                                                                             |                                                                                                                                                |
| 145 | zNOMBREEMPLEADOlista | zcomunlista + "NOMBRE_EMPLEADO"                                                | SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                   |
| 146 | zSTDIDPERSON         | zcomunlista + "STD_ID_PERSON"                                                  | SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                     |
| 167 | zcounti              | 0                                                                              | 0                                                                                                                                              |
| 168 | zcount               | 0                                                                              | 0                                                                                                                                              |
| 174 | zcountv              | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                        |
| 176 | zcountlista          | 0                                                                              | 0                                                                                                                                              |
| 181 | zcountvlista         | String.valueOf(zcountlista)                                                    | String.valueOf(zcountlista)                                                                                                                    |
| 205 | zregistroinicials    | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                               |
| 206 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                |
| 207 | zposicions           | "0"                                                                            | 0                                                                                                                                              |
| 208 | zcontrol             | 0                                                                              | 0                                                                                                                                              |
| 209 | zposicion            | 0                                                                              | 0                                                                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                 |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 149 | m4:startpage | m4task=SSE_EMP_BACKGROUND                                                                                                                                          |
| 149 | m4:beginjob  |                                                                                                                                                                    |
| 150 | m4:datadef   | m4o=SSE_EMP_BACKGROUND; m4name=SSE_EMP_BACKGROUND                                                                                                                  |
| 159 | m4:exec      | m4method=CARGA:{}SSE_EMP_BACKGROUND{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                                    |
| 159 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                         |
| 160 | m4:outputdef | m4alias=SSE_EMP_BACKGROUND{"_VAL"}                                                                                                                                 |
| 160 | m4:param     | name=m4name0; value=SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"_VAL"}{"[*]"}                                                        |
| 161 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                           |
| 161 | m4:param     | name=m4name0; value=SSE_EMP_BACKGROUND{"!"}SSE_COMUNICACION{"[*]"}                                                                                                 |
| 162 | m4:outputdef | m4alias=SSE_EMP_BACKGROUND                                                                                                                                         |
| 162 | m4:param     | name=m4name0; value=SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 163 | m4:endjob    |                                                                                                                                                                    |
| 164 | m4:move      |                                                                                                                                                                    |
| 164 | m4:param     | name=SSE_EMP_BACKGROUND; value=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"]"}                                             |
| 165 | m4:move      |                                                                                                                                                                    |
| 165 | m4:param     | name=SSE_EMP_BACKGROUND; value=SSE_EMP_BACKGROUND{"_VAL"}{":"}SSE_EMP_BACKGROUND{"_VAL"}{"[FIRST]"}                                                                |
| 211 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                          |
| 212 | m4:item      | var=; item=STD_ID_EDU_CENTER; htmlsafe=true; outputdef=SSE_EMP_BACKGROUND                                                                                          |
| 221 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; htmlsafe=true                                 |
| 221 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                        |
| 224 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}STD_N_DIPLOMA; htmlsafe=true                                       |
| 226 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}; htmlsafe=true                                    |
| 230 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}; htmlsafe=true                                  |
| 233 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DESC_EDU_CENTER"}; htmlsafe=true                             |
| 235 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EXT_ORG"}; htmlsafe=true                                   |
| 240 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_COMMENT"}; htmlsafe=true                                     |
| 245 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                         |
| 245 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                         |
| 245 | m4:item      | m4name=SSE_EMP_BACKGROUND{":"}SSE_EMP_BACKGROUND{"!"}SSE_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                         |
| 291 | m4:endpage   |                                                                                                                                                                    |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 154 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel |
| 155 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro     |
| 171 | getCountInClient | znodo,zsubsesion,znodo                      |
| 172 | getCount         | znodo,zsubsesion,znodo                      |
| 179 | getCountInClient | znodolista,zsubsesion,znodolista            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos |
| --- | ------------ | ---------- |
| 30  | filtrar      |            |
| 39  | m4enviar     |            |
| 65  | m4Cut        |            |
| 79  | m4ShowComent | me         |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 18  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                                                                  |
| 19  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 22  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 24  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                                                    |
| 40  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 47  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 52  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 71  | if (objTd.innerHTML.length &gt; 75) {                                                                                                                                               |
| 80  | if (me.parentNode.m4Comment) {                                                                                                                                                      |
| 199 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                                                                   |
| 232 | &lt;% if (sideducenter.equals("000")) {%&gt;                                                                                                                                        |
| 234 | &lt;%}else{%&gt;                                                                                                                                                                    |
| 286 | }else{%&gt;                                                                                                                                                                         |
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
| 69  | expresión de cálculo/transformación: objTd = document.getElementById(sName + i);                                                                                                    |
| 76  | expresión de cálculo/transformación: objTd = document.getElementById(sName + i);                                                                                                    |
| 82  | expresión de cálculo/transformación: sPath = '/sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=' + sComment;                                                                          |
| 95  | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 102 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 104 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 108 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 109 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                             |
| 110 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 111 | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 113 | expresión de cálculo/transformación: String zoutputdeflista = znodolista + ":" + zsubsesion + "!" + znodolista + "[*]";                                                             |
| 114 | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 115 | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 119 | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 124 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                 |
| 130 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                          |
| 131 | expresión de cálculo/transformación: String zACCIONACEPTADO = zcomun + "ACCION_ACEPTADO";                                                                                           |
| 132 | expresión de cálculo/transformación: String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";                                                                                           |
| 133 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 137 | expresión de cálculo/transformación: String zSTDNEDUSP = zcomun + "STD_N_EDU_SP";                                                                                                   |
| 138 | expresión de cálculo/transformación: String zSTDNEDUTYPE = zcomun + "STD_N_EDU_TYPE";                                                                                               |
| 139 | expresión de cálculo/transformación: String zSTDNEXTORG = zcomun + "STD_N_EXT_ORG";                                                                                                 |
| 140 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                                                                         |
| 141 | expresión de cálculo/transformación: String zSTDDESCEDUCENTER = zcomun + "STD_DESC_EDU_CENTER";                                                                                     |
| 142 | expresión de cálculo/transformación: String zSTDCOMMENT = zcomun + "STD_COMMENT";                                                                                                   |
| 145 | expresión de cálculo/transformación: String zNOMBREEMPLEADOlista = zcomunlista + "NOMBRE_EMPLEADO";                                                                                 |
| 146 | expresión de cálculo/transformación: String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";                                                                                           |
| 206 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                       |
| 216 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 89  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 90  | ../../sse_generico/espanol/generico_links.jsp         |
| 192 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 283 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 293 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                               |
| --- | ------------------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                             |
| 9   | /libreria/funciones_sse_val1.js                                                 |
| 10  | /libreria/funciones_sse.js                                                      |
| 73  | /iconos/lu_nor_info_24.png                                                      |
| 188 | /iconos/noname_valida_titulaciones_74_100.gif                                   |
| 194 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11                   |
| 277 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                                         |
| 82  | /sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=                                 |
| 89  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              |
| 90  | ../../sse_generico/espanol/generico_links.jsp                                   |
| 99  | /mss_g1/mss_g1_p3_val2.jsp                                                      |
| 192 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           |
| 283 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           |
| 293 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 9   | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 91  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 92  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 194 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 286 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 296 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| COLL   | 7   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| COLL   | 8   | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 196 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11                   | ausente    | P06                                                                                                                                                                                                |
| COLL   | 280 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 9   | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 84  | /sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=                                 | contextual | [sse_g1/ssco_g1_p3_comment.jsp](../../empleado/datos/sse_g1--ssco_g1_p3_comment.md); [sse_g1/ssco_g1_p3_comment.jsp](../../empleado/datos/sse_g1--ssco_g1_p3_comment.md)                           |
| COLL   | 91  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 92  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 101 | /mss_g1/mss_g1_p3_val2.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 194 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 286 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 296 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 9   | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 91  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 92  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 194 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| CYC    | 286 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 296 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 7   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| CYC    | 8   | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 196 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11                   | ausente    | P06                                                                                                                                                                                                |
| CYC    | 280 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 9   | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 84  | /sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=                                 | contextual | [sse_g1/ssco_g1_p3_comment.jsp](../../empleado/datos/sse_g1--ssco_g1_p3_comment.md); [sse_g1/ssco_g1_p3_comment.jsp](../../empleado/datos/sse_g1--ssco_g1_p3_comment.md)                           |
| CYC    | 91  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 92  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 101 | /mss_g1/mss_g1_p3_val2.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| CYC    | 194 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| CYC    | 286 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 296 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 9   | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 91  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 92  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 194 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 286 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 296 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 7   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| IBER   | 8   | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 196 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11                   | ausente    | P06                                                                                                                                                                                                |
| IBER   | 280 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 9   | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 84  | /sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=                                 | contextual | [sse_g1/ssco_g1_p3_comment.jsp](../../empleado/datos/sse_g1--ssco_g1_p3_comment.md); [sse_g1/ssco_g1_p3_comment.jsp](../../empleado/datos/sse_g1--ssco_g1_p3_comment.md)                           |
| IBER   | 91  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 92  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 101 | /mss_g1/mss_g1_p3_val2.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 194 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 286 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 296 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 89  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 90  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 192 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| BASE   | 283 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 293 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 9   | /libreria/funciones_sse_val1.js                                                 | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| BASE   | 10  | /libreria/funciones_sse.js                                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 194 | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11                   | ausente    | P06                                                                                                                                                                                                |
| BASE   | 277 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 82  | /sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=                                 | contextual | [sse_g1/ssco_g1_p3_comment.jsp](../../empleado/datos/sse_g1--ssco_g1_p3_comment.md)                                                                                                                |
| BASE   | 89  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 90  | ../../sse_generico/espanol/generico_links.jsp                                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 99  | /mss_g1/mss_g1_p3_val2.jsp                                                      | ausente    | P06                                                                                                                                                                                                |
| BASE   | 192 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                           | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| BASE   | 283 | ../../sse_generico/espanol/generico_ventanas_post.jsp                           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 293 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_p3_val.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
