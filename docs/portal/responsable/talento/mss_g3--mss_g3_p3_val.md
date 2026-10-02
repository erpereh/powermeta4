# Valida solicitudes de formación

Identificador: `mss_g3/mss_g3_p3_val.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                      | Solo en BASE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------ | --------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!"}SSE_PRINCIPAL{".CARGA_CV"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"CLF_1"} | m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!"}SSE_PRINCIPAL{".CARGA"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_PERSON"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"} |
| CYC    | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!"}SSE_PRINCIPAL{".CARGA_CV"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"CLF_1"} | m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!"}SSE_PRINCIPAL{".CARGA"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_PERSON"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"} |
| IBER   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!"}SSE_PRINCIPAL{".CARGA_CV"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"CLF_1"} | m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!"}SSE_PRINCIPAL{".CARGA"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_PERSON"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"} |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                     | Texto                       | Ámbito | Diccionario                                                                       |
| ------------------------- | --------------------------- | ------ | --------------------------------------------------------------------------------- |
| Label.mss_g3_p3_val_Cost  | Coste estimado por empleado | BASE   | [translations/mss_g3_es.properties:L90](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p6_mod1_Desc | Descripción                 | BASE   | [translations/mss_g3_es.properties:L89](../../referencias/literales/mss_g3_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g3/espanol/mss_g3_p3_val.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p3_val.jsp) | `2777eb6b4d53bab16fa19a15164ecc5d5a96691fb9ab10bd54fe844abb3ac185` |    343 |
| CYC / español     | [m4custom/CYC/mss_g3/espanol/mss_g3_p3_val.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p3_val.jsp)   | `2777eb6b4d53bab16fa19a15164ecc5d5a96691fb9ab10bd54fe844abb3ac185` |    343 |
| IBER / español    | [m4custom/IBER/mss_g3/espanol/mss_g3_p3_val.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g3/espanol/mss_g3_p3_val.jsp) | `2777eb6b4d53bab16fa19a15164ecc5d5a96691fb9ab10bd54fe844abb3ac185` |    343 |
| BASE / español    | [mss_g3/espanol/mss_g3_p3_val.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p3_val.jsp)                             | `8292817da8b86c55155e121a799219dfb505a5ca63be125c274d6b96baa02a2c` |    304 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g3/espanol/mss_g3_p3_val.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p3_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                      |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 5   | Valida solicitudes de formación                                                                                                               |
| 192 | Valida las solicitudes de formación                                                                                                           |
| 198 | Valida las solicitudes de formación de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 213 | Peticiones                                                                                                                                    |
| 234 | Tipo :                                                                                                                                        |
| 237 | Nombre :                                                                                                                                      |
| 242 | Programado :                                                                                                                                  |
| 245 | No                                                                                                                                            |
| 247 | Si ( )                                                                                                                                        |
| 258 | [valor dinámico]:                                                                                                                             |
| 264 | *REC= { *NOD=SSE_TRAINING_REQUEST{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                            |
| 280 | Cancelar                                                                                                                                      |
| 296 | Comentario                                                                                                                                    |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 196 | img     | alt=Valida las solicitudes de formación; src=/iconos/noname_valida_formacion_62_100.gif; width=100; height=100                                                                        |
| 205 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31; method=post; name=oculto; id=oculto                                                                             |
| 206 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                       |
| 207 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                      |
| 208 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                       |
| 265 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;                                                                                                                                  |
| 266 | input   | id=ocultos; name=ocultos; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                                                                      |
| 267 | input   | name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                        |
| 274 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;                                                                                                                                  |
| 277 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)  |
| 280 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;) |
| 298 | form    | name=c&lt;%=zposicion%&gt;; id=c&lt;%=zposicion%&gt;                                                                                                                                  |
| 300 | input   | size=125; title=Escribe un comentario; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=2000                                                              |
| 320 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                             |
| 321 | input   | type=hidden; id=param; name=param; value=                                                                                                                                             |
| 322 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                 |
| 337 | img     | id=imgWorking; alt=Working; src=/iconos/spinner.gif; width=36; height=36                                                                                                              |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 21  | znivel          | getParameter(request,"znivel") |

| L   | Variable               | Expresión fuente                                                               | Resolución estática parcial                                                                                                                        |
| --- | ---------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12  | estado                 | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                                   |
| 13  | zfiltro                | zobjtabla.m4paramvalor("zfiltro")                                              | zobjtabla.m4paramvalor("zfiltro")                                                                                                                  |
| 14  | zinicios               | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                                 |
| 19  | znivel                 | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                                   |
| 96  | zsubsesion             | "SSE_TRAINING_REQUEST"                                                         | SSE_TRAINING_REQUEST                                                                                                                               |
| 97  | zmeta4object           | "SSE_TRAINING_REQUEST"                                                         | SSE_TRAINING_REQUEST                                                                                                                               |
| 98  | znodo                  | "SSE_TRAINING_REQUEST"                                                         | SSE_TRAINING_REQUEST                                                                                                                               |
| 99  | ztipocarga             | "SSE"                                                                          | SSE                                                                                                                                                |
| 100 | zventanas              | "4"                                                                            | 4                                                                                                                                                  |
| 101 | zvuelta                | 2                                                                              | 2                                                                                                                                                  |
| 102 | zdireccion             | "/mss_g1/mss_g3_p3_val.jsp"                                                    | /mss_g1/mss_g3_p3_val.jsp                                                                                                                          |
| 103 | zestado                | "11"                                                                           | 11                                                                                                                                                 |
| 104 | zregistroinicial       | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                               |
| 106 | zventana               | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                              |
| 107 | zregistrofinal         | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                 |
| 109 | zoutputdef             | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 110 | zmove                  | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 111 | zraiz                  | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"."}                                                                        |
| 112 | zlectura               | zsubsesion + "!" + znodo                                                       | SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST                                                                                                      |
| 113 | ziterator              | znodo + ":" + zsubsesion + "!" + znodo                                         | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST                                                                             |
| 114 | zcomun                 | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}                                                    |
| 116 | znodolista             | znodo + "_VAL"                                                                 | SSE_TRAINING_REQUEST{"_VAL"}                                                                                                                       |
| 117 | zoutputdeflista        | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"[*]"}                                                                                       |
| 118 | zmovelista             | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"_VAL"}{"[FIRST]"}                                                                           |
| 119 | zraizlista             | znodolista + ":" + zsubsesion + "!" + znodolista + "."                         | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"."}                                                        |
| 120 | ziteratorlista         | znodolista + ":" + zsubsesion + "!" + znodolista                               | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}                                                             |
| 121 | zcomunlista            | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                    |
| 123 | znodocom               | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                                   |
| 124 | zoutputdefcom          | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_TRAINING_REQUEST{"!"}SSE_COMUNICACION{"[*]"}                                                                                                   |
| 126 | znodoprincipal         | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                                      |
| 127 | zmetodocarga           | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA_CV"                     | CARGA:{}SSE_TRAINING_REQUEST{"!"}SSE_PRINCIPAL{".CARGA_CV"}                                                                                        |
| 129 | zNOMBREPERSON          | zraiz + "NOMBRE_PERSON"                                                        | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"."}{"NOMBRE_PERSON"}                                                       |
| 131 | zORDINAL               | zcomun + "ORDINAL"                                                             | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                         |
| 132 | zNACCION               | zcomun + "N_ACCION"                                                            | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                        |
| 134 | zNOMBREEMPLEADO        | zcomun + "NOMBRE_EMPLEADO"                                                     | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                 |
| 135 | zNOMBREEMPLEADO        | zcomun + "CLF_1"                                                               | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"CLF_1"}                                           |
| 136 | zSCONMTRAINING         | zcomun + "SCO_NM_TRAINING"                                                     | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"}                                 |
| 137 | zSCO_ID_TYPE           | zcomun + "SCO_ID_TYPE"                                                         | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                     |
| 139 | zSCO_NM_DEV_PRO_TYPE   | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                 | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                             |
| 140 | zSCO_NM_DEV_SUBPRODUCT | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                               | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                           |
| 143 | zNOMBREEMPLEADOlista   | zcomunlista + "NOMBRE_EMPLEADO"                                                | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                 |
| 144 | zNOMBREEMPLEADOlista   | zcomunlista + "CLF_1"                                                          | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"CLF_1"}                           |
| 146 | zSTDIDPERSON           | zcomunlista + "STD_ID_PERSON"                                                  | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                   |
| 147 | zSCO_ID_DEV_SUBPRODUCT | zcomun + "SCO_ID_DEV_SUBPRODUCT"                                               | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                           |
| 148 | zSCO_ID_HR             | zcomun + "STD_ID_PERSON"                                                       | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                                   |
| 149 | zSCO_OR_PERSON         | zcomun + "SCO_OR_PERSON"                                                       | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_PERSON"}                                   |
| 150 | zSCO_HOURS             | zcomun + "SCO_HOURS"                                                           | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}                                       |
| 151 | zSCO_HOURS_OTW         | zcomun + "SCO_HOURS_OTW"                                                       | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}                                   |
| 152 | zSCO_DESCRIPTION       | zcomun + "SCO_DESCRIPTION"                                                     | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DESCRIPTION"}                                 |
| 153 | zSCO_ID_TRTBREQ        | zcomun + "SCO_ID_TRTBREQ"                                                      | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                  |
| 174 | zcounti                | 0                                                                              | 0                                                                                                                                                  |
| 175 | zcount                 | 0                                                                              | 0                                                                                                                                                  |
| 181 | zcountv                | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                            |
| 183 | zcountlista            | 0                                                                              | 0                                                                                                                                                  |
| 188 | zcountvlista           | String.valueOf(zcountlista)                                                    | String.valueOf(zcountlista)                                                                                                                        |
| 216 | zregistroinicials      | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                                   |
| 217 | zregistrofinals        | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                    |
| 218 | zposicions             | "0"                                                                            | 0                                                                                                                                                  |
| 219 | zcontrol               | 0                                                                              | 0                                                                                                                                                  |
| 220 | zposicion              | 0                                                                              | 0                                                                                                                                                  |
| 250 | zid                    | ""                                                                             |                                                                                                                                                    |
| 305 | DescrCost              | ""                                                                             |                                                                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                     |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 156 | m4:startpage | m4task=SSE_TRAINING_REQUEST                                                                                                                                            |
| 156 | m4:beginjob  |                                                                                                                                                                        |
| 157 | m4:datadef   | m4o=SSE_TRAINING_REQUEST; m4name=SSE_TRAINING_REQUEST                                                                                                                  |
| 166 | m4:exec      | m4method=CARGA:{}SSE_TRAINING_REQUEST{"!"}SSE_PRINCIPAL{".CARGA_CV"}                                                                                                   |
| 166 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                             |
| 167 | m4:outputdef | m4alias=SSE_TRAINING_REQUEST{"_VAL"}                                                                                                                                   |
| 167 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"[*]"}                                                                                       |
| 168 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                               |
| 168 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}SSE_COMUNICACION{"[*]"}                                                                                                   |
| 169 | m4:outputdef | m4alias=SSE_TRAINING_REQUEST                                                                                                                                           |
| 169 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 170 | m4:endjob    |                                                                                                                                                                        |
| 171 | m4:move      |                                                                                                                                                                        |
| 171 | m4:param     | name=SSE_TRAINING_REQUEST; value=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                           |
| 172 | m4:move      |                                                                                                                                                                        |
| 172 | m4:param     | name=SSE_TRAINING_REQUEST; value=SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"_VAL"}{"[FIRST]"}                                                              |
| 222 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                              |
| 232 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"CLF_1"}; htmlsafe=true                                         |
| 232 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                      |
| 235 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                           |
| 238 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                         |
| 243 | m4:item      | m4varname=zType; m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                 |
| 247 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"}; htmlsafe=true                               |
| 259 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DESCRIPTION"}; htmlsafe=true                               |
| 266 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                       |
| 266 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                       |
| 266 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                       |
| 333 | m4:endpage   |                                                                                                                                                                        |

| L   | Operación        | Argumentos literales                           |
| --- | ---------------- | ---------------------------------------------- |
| 161 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel    |
| 162 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro        |
| 178 | getCountInClient | znodo,zsubsesion,znodo                         |
| 179 | getCount         | znodo,zsubsesion,znodo                         |
| 186 | getCountInClient | znodolista,zsubsesion,znodolista               |
| 253 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_DEV_PRODUCT" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos                                          |
| --- | ---------- | --------------------------------------------------- |
| 31  | calc_costs | zID_DEV_SUB,zID_PERSON,zOR_PERSON,zHOURS,zHOURS_OTW |
| 37  | filtrar    |                                                     |
| 43  | m4enviar   |                                                     |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 16  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                                                                  |
| 17  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 20  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 22  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                                                    |
| 49  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 54  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 63  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 210 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                                                                   |
| 244 | &lt;%if (zType.equals("11")){%&gt;                                                                                                                                                  |
| 246 | &lt;%}else{%&gt;                                                                                                                                                                    |
| 256 | if (zid.equals("99")){                                                                                                                                                              |
| 328 | }else{%&gt;                                                                                                                                                                         |
| 50  | expresión de cálculo/transformación: var numregistros = parseInt(document.forms['a0'].elements[1].name);                                                                            |
| 51  | expresión de cálculo/transformación: cadena = cadena + URL;                                                                                                                         |
| 53  | expresión de cálculo/transformación: var formulario = "b" + i;                                                                                                                      |
| 55  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 56  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";                                                   |
| 57  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 59  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 60  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 64  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 65  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";                                                  |
| 66  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 67  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 68  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 105 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 107 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 109 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 110 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                              |
| 111 | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 112 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                                                                    |
| 113 | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                                                                     |
| 114 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 116 | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 117 | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                |
| 118 | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 119 | expresión de cálculo/transformación: String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";                                                                    |
| 120 | expresión de cálculo/transformación: String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;                                                                      |
| 121 | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 124 | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 127 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA_CV";                                                              |
| 129 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 131 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                          |
| 132 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                                                                         |
| 134 | expresión de cálculo/transformación: String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";                                                                                           |
| 136 | expresión de cálculo/transformación: String zSCONMTRAINING = zcomun + "SCO_NM_TRAINING";                                                                                            |
| 137 | expresión de cálculo/transformación: String zSCO_ID_TYPE = zcomun + "SCO_ID_TYPE";                                                                                                  |
| 139 | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zcomun + "SCO_NM_DEV_PRO_TYPE";                                                                                  |
| 140 | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zcomun + "SCO_NM_DEV_SUBPRODUCT";                                                                              |
| 143 | expresión de cálculo/transformación: String zNOMBREEMPLEADOlista = zcomunlista + "NOMBRE_EMPLEADO";                                                                                 |
| 146 | expresión de cálculo/transformación: String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";                                                                                           |
| 147 | expresión de cálculo/transformación: String zSCO_ID_DEV_SUBPRODUCT = zcomun + "SCO_ID_DEV_SUBPRODUCT";                                                                              |
| 148 | expresión de cálculo/transformación: String zSCO_ID_HR = zcomun + "STD_ID_PERSON";                                                                                                  |
| 149 | expresión de cálculo/transformación: String zSCO_OR_PERSON = zcomun + "SCO_OR_PERSON";                                                                                              |
| 150 | expresión de cálculo/transformación: String zSCO_HOURS = zcomun + "SCO_HOURS";                                                                                                      |
| 151 | expresión de cálculo/transformación: String zSCO_HOURS_OTW = zcomun + "SCO_HOURS_OTW";                                                                                              |
| 152 | expresión de cálculo/transformación: String zSCO_DESCRIPTION = zcomun + "SCO_DESCRIPTION";                                                                                          |
| 153 | expresión de cálculo/transformación: String zSCO_ID_TRTBREQ = zcomun + "SCO_ID_TRTBREQ";                                                                                            |
| 217 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                       |
| 226 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 9   | ../../mss_generico/espanol/menu_mss.jsp               |
| 27  | /mss_g3/mss_g3_trans.jsp                              |
| 93  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 94  | ../../sse_generico/espanol/generico_links.jsp         |
| 203 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 325 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 340 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                             |
| --- | --------------------------------------------------------------------------------------------- |
| 6   | /css/estilo_mss.css                                                                           |
| 7   | /libreria/funciones_sse_val1.js                                                               |
| 8   | /libreria/funciones_sse.js                                                                    |
| 196 | /iconos/noname_valida_formacion_62_100.gif                                                    |
| 205 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31                                 |
| 320 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp               |
| 337 | /iconos/spinner.gif                                                                           |
| 9   | ../../mss_generico/espanol/menu_mss.jsp                                                       |
| 27  | /mss_g3/mss_g3_trans.jsp                                                                      |
| 32  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost_empl.jsp?estado=31&amp;zID_DEV_SUB= |
| 93  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                            |
| 94  | ../../sse_generico/espanol/generico_links.jsp                                                 |
| 102 | /mss_g1/mss_g3_p3_val.jsp                                                                     |
| 203 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                                         |
| 325 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                         |
| 340 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                         |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p3_val.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p3_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                      |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | Valida solicitudes de formación                                                                                                               |
| 170 | Valida las solicitudes de formación                                                                                                           |
| 176 | Valida las solicitudes de formación de tus empleados. Recuerda enviar la aceptación o cancelación de solicitudes por cada una de las páginas. |
| 191 | Peticiones                                                                                                                                    |
| 212 | Tipo :                                                                                                                                        |
| 215 | Nombre :                                                                                                                                      |
| 220 | Programado :                                                                                                                                  |
| 223 | No                                                                                                                                            |
| 225 | Si ( )                                                                                                                                        |
| 236 | [valor dinámico]:                                                                                                                             |
| 242 | *REC= { *NOD=SSE_TRAINING_REQUEST{ *NIVEL_ACEPTADO=[valor dinámico]" /&gt; " /&gt;                                                            |
| 258 | Cancelar                                                                                                                                      |
| 265 | Motivo de cancelación                                                                                                                         |
| 274 | ' ,' ' ,' ' ,' ' ,' ' )" title="[valor dinámico]"&gt; [valor dinámico]                                                                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                          |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 174 | img     | alt=Valida las solicitudes de formación; src=/iconos/noname_valida_formacion_62_100.gif; width=100; height=100                                                                                     |
| 183 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31; method=post; name=oculto; id=oculto                                                                                          |
| 184 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltro%&gt;                                                                                                                                    |
| 185 | input   | type=hidden; id=zfiltroemp; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                                   |
| 186 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                    |
| 243 | form    | name=a&lt;%=zposicion%&gt;; id=a&lt;%=zposicion%&gt;                                                                                                                                               |
| 244 | input   | id=ocultos; name=ocultos; type=hidden; value={&lt;m4:item m4name=; htmlsafe=true                                                                                                                   |
| 245 | input   | name=&lt;%=zcountv%&gt;; type=hidden; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                     |
| 252 | form    | name=b&lt;%=zposicion%&gt;; id=b&lt;%=zposicion%&gt;                                                                                                                                               |
| 255 | input   | title=Acepta la peticón; id=ac&lt;%=zposicion%&gt;; name=ac&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ca&lt;%=zposicion%&gt;)               |
| 258 | input   | title=Cancela la peticón; id=ca&lt;%=zposicion%&gt;; name=ca&lt;%=zposicion%&gt;; type=checkbox; value=T; onclick=validar(this,document.b&lt;%=zposicion%&gt;.ac&lt;%=zposicion%&gt;)              |
| 267 | form    | name=c&lt;%=zposicion%&gt;; id=c&lt;%=zposicion%&gt;                                                                                                                                               |
| 268 | input   | size=48; title=Escribe el motivo de cancelación; id=mo&lt;%=zposicion%&gt;; name=mo&lt;%=zposicion%&gt;; type=text; maxlength=60                                                                   |
| 274 | a       | href="javascript:calc_costs('&lt;m4:item; m4name=&lt;%=zSCO_ID_DEV_SUBPRODUCT%&gt;; htmlsafe=true                                                                                                  |
| 279 | img     | alt=&lt;%=DescrCost%&gt;; title=&lt;%=DescrCost%&gt;; src=/iconos/icono_revision_colectiva_32_16.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 286 | form    | id=envio; name=envio; action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp; method=post                                                                          |
| 287 | input   | type=hidden; id=param; name=param; value=                                                                                                                                                          |
| 288 | input   | type=hidden; id=TAG; name=TAG; value=                                                                                                                                                              |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 23  | znivel          | getParameter(request,"znivel") |

| L   | Variable               | Expresión fuente                                                               | Resolución estática parcial                                                                                                                        |
| --- | ---------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | estado                 | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                                   |
| 15  | zfiltro                | zobjtabla.m4paramvalor("zfiltro")                                              | zobjtabla.m4paramvalor("zfiltro")                                                                                                                  |
| 16  | zinicios               | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                                 |
| 21  | znivel                 | zobjtabla.m4paramvalor("znivel")                                               | zobjtabla.m4paramvalor("znivel")                                                                                                                   |
| 77  | zsubsesion             | "SSE_TRAINING_REQUEST"                                                         | SSE_TRAINING_REQUEST                                                                                                                               |
| 78  | zmeta4object           | "SSE_TRAINING_REQUEST"                                                         | SSE_TRAINING_REQUEST                                                                                                                               |
| 79  | znodo                  | "SSE_TRAINING_REQUEST"                                                         | SSE_TRAINING_REQUEST                                                                                                                               |
| 80  | ztipocarga             | "SSE"                                                                          | SSE                                                                                                                                                |
| 81  | zventanas              | "4"                                                                            | 4                                                                                                                                                  |
| 82  | zvuelta                | 2                                                                              | 2                                                                                                                                                  |
| 83  | zdireccion             | "/mss_g1/mss_g3_p3_val.jsp"                                                    | /mss_g1/mss_g3_p3_val.jsp                                                                                                                          |
| 84  | zestado                | "11"                                                                           | 11                                                                                                                                                 |
| 85  | zregistroinicial       | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                               |
| 87  | zventana               | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                              |
| 88  | zregistrofinal         | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                 |
| 90  | zoutputdef             | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 91  | zmove                  | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 92  | zraiz                  | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"."}                                                                        |
| 93  | zlectura               | zsubsesion + "!" + znodo                                                       | SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST                                                                                                      |
| 94  | ziterator              | znodo + ":" + zsubsesion + "!" + znodo                                         | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST                                                                             |
| 95  | zcomun                 | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}                                                    |
| 97  | znodolista             | znodo + "_VAL"                                                                 | SSE_TRAINING_REQUEST{"_VAL"}                                                                                                                       |
| 98  | zoutputdeflista        | zsubsesion + "!" + znodolista + "[*]"                                          | SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"[*]"}                                                                                       |
| 99  | zmovelista             | znodolista + ":" + znodolista + "[FIRST]"                                      | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"_VAL"}{"[FIRST]"}                                                                           |
| 100 | zraizlista             | znodolista + ":" + zsubsesion + "!" + znodolista + "."                         | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"."}                                                        |
| 101 | ziteratorlista         | znodolista + ":" + zsubsesion + "!" + znodolista                               | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}                                                             |
| 102 | zcomunlista            | znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + "."    | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}                                    |
| 104 | znodocom               | "SSE_COMUNICACION"                                                             | SSE_COMUNICACION                                                                                                                                   |
| 105 | zoutputdefcom          | zsubsesion + "!" + znodocom + "[*]"                                            | SSE_TRAINING_REQUEST{"!"}SSE_COMUNICACION{"[*]"}                                                                                                   |
| 107 | znodoprincipal         | "SSE_PRINCIPAL"                                                                | SSE_PRINCIPAL                                                                                                                                      |
| 108 | zmetodocarga           | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                        | CARGA:{}SSE_TRAINING_REQUEST{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                           |
| 110 | zNOMBREPERSON          | zraiz + "NOMBRE_PERSON"                                                        | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"."}{"NOMBRE_PERSON"}                                                       |
| 112 | zORDINAL               | zcomun + "ORDINAL"                                                             | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                         |
| 113 | zNACCION               | zcomun + "N_ACCION"                                                            | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                        |
| 115 | zNOMBREEMPLEADO        | zcomun + "NOMBRE_EMPLEADO"                                                     | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                                 |
| 116 | zSCONMTRAINING         | zcomun + "SCO_NM_TRAINING"                                                     | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"}                                 |
| 117 | zSCO_ID_TYPE           | zcomun + "SCO_ID_TYPE"                                                         | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                     |
| 119 | zSCO_NM_DEV_PRO_TYPE   | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                 | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                             |
| 120 | zSCO_NM_DEV_SUBPRODUCT | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                               | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                           |
| 123 | zNOMBREEMPLEADOlista   | zcomunlista + "NOMBRE_EMPLEADO"                                                | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}                 |
| 124 | zSTDIDPERSON           | zcomunlista + "STD_ID_PERSON"                                                  | SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                   |
| 125 | zSCO_ID_DEV_SUBPRODUCT | zcomun + "SCO_ID_DEV_SUBPRODUCT"                                               | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                           |
| 126 | zSCO_ID_HR             | zcomun + "STD_ID_PERSON"                                                       | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                                   |
| 127 | zSCO_OR_PERSON         | zcomun + "SCO_OR_PERSON"                                                       | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_PERSON"}                                   |
| 128 | zSCO_HOURS             | zcomun + "SCO_HOURS"                                                           | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}                                       |
| 129 | zSCO_HOURS_OTW         | zcomun + "SCO_HOURS_OTW"                                                       | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}                                   |
| 130 | zSCO_DESCRIPTION       | zcomun + "SCO_DESCRIPTION"                                                     | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DESCRIPTION"}                                 |
| 131 | zSCO_ID_TRTBREQ        | zcomun + "SCO_ID_TRTBREQ"                                                      | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                  |
| 152 | zcounti                | 0                                                                              | 0                                                                                                                                                  |
| 153 | zcount                 | 0                                                                              | 0                                                                                                                                                  |
| 159 | zcountv                | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                            |
| 161 | zcountlista            | 0                                                                              | 0                                                                                                                                                  |
| 166 | zcountvlista           | String.valueOf(zcountlista)                                                    | String.valueOf(zcountlista)                                                                                                                        |
| 194 | zregistroinicials      | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                                   |
| 195 | zregistrofinals        | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                    |
| 196 | zposicions             | "0"                                                                            | 0                                                                                                                                                  |
| 197 | zcontrol               | 0                                                                              | 0                                                                                                                                                  |
| 198 | zposicion              | 0                                                                              | 0                                                                                                                                                  |
| 228 | zid                    | ""                                                                             |                                                                                                                                                    |
| 271 | DescrCost              | ""                                                                             |                                                                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                     |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 134 | m4:startpage | m4task=SSE_TRAINING_REQUEST                                                                                                                                            |
| 134 | m4:beginjob  |                                                                                                                                                                        |
| 135 | m4:datadef   | m4o=SSE_TRAINING_REQUEST; m4name=SSE_TRAINING_REQUEST                                                                                                                  |
| 144 | m4:exec      | m4method=CARGA:{}SSE_TRAINING_REQUEST{"!"}SSE_PRINCIPAL{".CARGA"}                                                                                                      |
| 144 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                             |
| 145 | m4:outputdef | m4alias=SSE_TRAINING_REQUEST{"_VAL"}                                                                                                                                   |
| 145 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"_VAL"}{"[*]"}                                                                                       |
| 146 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                               |
| 146 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}SSE_COMUNICACION{"[*]"}                                                                                                   |
| 147 | m4:outputdef | m4alias=SSE_TRAINING_REQUEST                                                                                                                                           |
| 147 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 148 | m4:endjob    |                                                                                                                                                                        |
| 149 | m4:move      |                                                                                                                                                                        |
| 149 | m4:param     | name=SSE_TRAINING_REQUEST; value=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                           |
| 150 | m4:move      |                                                                                                                                                                        |
| 150 | m4:param     | name=SSE_TRAINING_REQUEST; value=SSE_TRAINING_REQUEST{"_VAL"}{":"}SSE_TRAINING_REQUEST{"_VAL"}{"[FIRST]"}                                                              |
| 200 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                              |
| 210 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMPLEADO"}; htmlsafe=true                               |
| 210 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                      |
| 213 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                           |
| 216 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                         |
| 221 | m4:item      | m4varname=zType; m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                 |
| 225 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"}; htmlsafe=true                               |
| 237 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DESCRIPTION"}; htmlsafe=true                               |
| 244 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                       |
| 244 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                       |
| 244 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}; htmlsafe=true                                       |
| 275 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}; htmlsafe=true                                 |
| 276 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_PERSON"}; htmlsafe=true                                 |
| 277 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS"}; htmlsafe=true                                     |
| 278 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOURS_OTW"}; htmlsafe=true                                 |
| 299 | m4:endpage   |                                                                                                                                                                        |

| L   | Operación        | Argumentos literales                           |
| --- | ---------------- | ---------------------------------------------- |
| 139 | setItem          | zsubsesion,znodoprincipal,"","NIVEL",znivel    |
| 140 | setItem          | zsubsesion,znodo,"","ID_PERSON",zfiltro        |
| 156 | getCountInClient | znodo,zsubsesion,znodo                         |
| 157 | getCount         | znodo,zsubsesion,znodo                         |
| 164 | getCountInClient | znodolista,zsubsesion,znodolista               |
| 231 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_DEV_PRODUCT" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos                                          |
| --- | ---------- | --------------------------------------------------- |
| 33  | calc_costs | zID_DEV_SUB,zID_PERSON,zOR_PERSON,zHOURS,zHOURS_OTW |
| 39  | filtrar    |                                                     |
| 45  | m4enviar   |                                                     |

| L   | Condición / acción / mensaje literal                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                     |
| 18  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                                                                  |
| 19  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                             |
| 22  | if ((znivel==null)&#124;&#124;(znivel.equals(""))){                                                                                                                                 |
| 24  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                                                    |
| 48  | if (typeof(document.forms['a0']) != "undefined"){                                                                                                                                   |
| 53  | if (document.forms[formulario].elements[0].checked == true){                                                                                                                        |
| 58  | if (document.forms[formulario].elements[1].checked == true){                                                                                                                        |
| 188 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                                                                   |
| 222 | &lt;%if (zType.equals("11")){%&gt;                                                                                                                                                  |
| 224 | &lt;%}else{%&gt;                                                                                                                                                                    |
| 234 | if (zid.equals("99")){                                                                                                                                                              |
| 294 | }else{%&gt;                                                                                                                                                                         |
| 49  | expresión de cálculo/transformación: var numregistros = parseInt(document.forms['a0'].elements[1].name);                                                                            |
| 50  | expresión de cálculo/transformación: cadena = cadena + URL;                                                                                                                         |
| 52  | expresión de cálculo/transformación: var formulario = "b" + i;                                                                                                                      |
| 54  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 55  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";                                                   |
| 56  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 59  | expresión de cálculo/transformación: var formulario1 = "a" + i;                                                                                                                     |
| 60  | expresión de cálculo/transformación: cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";                                                  |
| 61  | expresión de cálculo/transformación: cadena = cadena + document.forms[formulario1].elements[0].value;                                                                               |
| 62  | expresión de cálculo/transformación: var formulario2 = "c" + i;                                                                                                                     |
| 63  | expresión de cálculo/transformación: cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value; |
| 86  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                       |
| 88  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                          |
| 90  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                            |
| 91  | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                              |
| 92  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                   |
| 93  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                                                                    |
| 94  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                                                                     |
| 95  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                             |
| 97  | expresión de cálculo/transformación: String znodolista = znodo + "_VAL";                                                                                                            |
| 98  | expresión de cálculo/transformación: String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";                                                                                |
| 99  | expresión de cálculo/transformación: String zmovelista = znodolista + ":" + znodolista + "[FIRST]";                                                                                 |
| 100 | expresión de cálculo/transformación: String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";                                                                    |
| 101 | expresión de cálculo/transformación: String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;                                                                      |
| 102 | expresión de cálculo/transformación: String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&amp;VAR.m4lix]" + ".";                                              |
| 105 | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                    |
| 108 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                                                                 |
| 110 | expresión de cálculo/transformación: String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";                                                                                                |
| 112 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                          |
| 113 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                                                                         |
| 115 | expresión de cálculo/transformación: String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";                                                                                           |
| 116 | expresión de cálculo/transformación: String zSCONMTRAINING = zcomun + "SCO_NM_TRAINING";                                                                                            |
| 117 | expresión de cálculo/transformación: String zSCO_ID_TYPE = zcomun + "SCO_ID_TYPE";                                                                                                  |
| 119 | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zcomun + "SCO_NM_DEV_PRO_TYPE";                                                                                  |
| 120 | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zcomun + "SCO_NM_DEV_SUBPRODUCT";                                                                              |
| 123 | expresión de cálculo/transformación: String zNOMBREEMPLEADOlista = zcomunlista + "NOMBRE_EMPLEADO";                                                                                 |
| 124 | expresión de cálculo/transformación: String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";                                                                                           |
| 125 | expresión de cálculo/transformación: String zSCO_ID_DEV_SUBPRODUCT = zcomun + "SCO_ID_DEV_SUBPRODUCT";                                                                              |
| 126 | expresión de cálculo/transformación: String zSCO_ID_HR = zcomun + "STD_ID_PERSON";                                                                                                  |
| 127 | expresión de cálculo/transformación: String zSCO_OR_PERSON = zcomun + "SCO_OR_PERSON";                                                                                              |
| 128 | expresión de cálculo/transformación: String zSCO_HOURS = zcomun + "SCO_HOURS";                                                                                                      |
| 129 | expresión de cálculo/transformación: String zSCO_HOURS_OTW = zcomun + "SCO_HOURS_OTW";                                                                                              |
| 130 | expresión de cálculo/transformación: String zSCO_DESCRIPTION = zcomun + "SCO_DESCRIPTION";                                                                                          |
| 131 | expresión de cálculo/transformación: String zSCO_ID_TRTBREQ = zcomun + "SCO_ID_TRTBREQ";                                                                                            |
| 195 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                       |
| 204 | expresión de cálculo/transformación: zposicion = zposicion - zregistroinicial;                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 29  | /mss_g3/mss_g3_trans.jsp                              |
| 74  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 75  | ../../sse_generico/espanol/generico_links.jsp         |
| 181 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp |
| 291 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 301 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                             |
| --- | --------------------------------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                                           |
| 9   | /libreria/funciones_sse_val1.js                                                               |
| 10  | /libreria/funciones_sse.js                                                                    |
| 174 | /iconos/noname_valida_formacion_62_100.gif                                                    |
| 183 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31                                 |
| 274 | javascript:calc_costs(                                                                        |
| 279 | /iconos/icono_revision_colectiva_32_16.gif                                                    |
| 286 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp               |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                                                       |
| 29  | /mss_g3/mss_g3_trans.jsp                                                                      |
| 34  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost_empl.jsp?estado=31&amp;zID_DEV_SUB= |
| 74  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                            |
| 75  | ../../sse_generico/espanol/generico_links.jsp                                                 |
| 83  | /mss_g1/mss_g3_p3_val.jsp                                                                     |
| 181 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                                         |
| 291 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                         |
| 301 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                    | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 9   | ../../mss_generico/espanol/menu_mss.jsp                                                       | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 27  | /mss_g3/mss_g3_trans.jsp                                                                      | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| COLL   | 93  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                            | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 94  | ../../sse_generico/espanol/generico_links.jsp                                                 | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 203 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                                         | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 325 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                         | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 340 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                         | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| COLL   | 7   | /libreria/funciones_sse_val1.js                                                               | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| COLL   | 8   | /libreria/funciones_sse.js                                                                    | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 205 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31                                 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 320 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp               | ausente    | P06                                                                                                                                                                                                |
| COLL   | 9   | ../../mss_generico/espanol/menu_mss.jsp                                                       | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| COLL   | 27  | /mss_g3/mss_g3_trans.jsp                                                                      | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| COLL   | 32  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost_empl.jsp?estado=31&amp;zID_DEV_SUB= | ausente    | P06                                                                                                                                                                                                |
| COLL   | 93  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                            | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| COLL   | 94  | ../../sse_generico/espanol/generico_links.jsp                                                 | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 102 | /mss_g1/mss_g3_p3_val.jsp                                                                     | ausente    | P06                                                                                                                                                                                                |
| COLL   | 203 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                                         | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| COLL   | 325 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                         | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 340 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                         | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 9   | ../../mss_generico/espanol/menu_mss.jsp                                                       | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 27  | /mss_g3/mss_g3_trans.jsp                                                                      | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| CYC    | 93  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                            | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 94  | ../../sse_generico/espanol/generico_links.jsp                                                 | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 203 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                                         | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| CYC    | 325 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                         | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 340 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                         | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| CYC    | 7   | /libreria/funciones_sse_val1.js                                                               | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| CYC    | 8   | /libreria/funciones_sse.js                                                                    | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 205 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31                                 | ausente    | P06                                                                                                                                                                                                |
| CYC    | 320 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp               | ausente    | P06                                                                                                                                                                                                |
| CYC    | 9   | ../../mss_generico/espanol/menu_mss.jsp                                                       | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| CYC    | 27  | /mss_g3/mss_g3_trans.jsp                                                                      | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| CYC    | 32  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost_empl.jsp?estado=31&amp;zID_DEV_SUB= | ausente    | P06                                                                                                                                                                                                |
| CYC    | 93  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                            | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| CYC    | 94  | ../../sse_generico/espanol/generico_links.jsp                                                 | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 102 | /mss_g1/mss_g3_p3_val.jsp                                                                     | ausente    | P06                                                                                                                                                                                                |
| CYC    | 203 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                                         | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| CYC    | 325 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                         | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 340 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                         | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 9   | ../../mss_generico/espanol/menu_mss.jsp                                                       | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 27  | /mss_g3/mss_g3_trans.jsp                                                                      | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| IBER   | 93  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                            | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 94  | ../../sse_generico/espanol/generico_links.jsp                                                 | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 203 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                                         | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 325 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                         | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 340 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                         | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| IBER   | 7   | /libreria/funciones_sse_val1.js                                                               | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| IBER   | 8   | /libreria/funciones_sse.js                                                                    | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 205 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31                                 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 320 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp               | ausente    | P06                                                                                                                                                                                                |
| IBER   | 9   | ../../mss_generico/espanol/menu_mss.jsp                                                       | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| IBER   | 27  | /mss_g3/mss_g3_trans.jsp                                                                      | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| IBER   | 32  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost_empl.jsp?estado=31&amp;zID_DEV_SUB= | ausente    | P06                                                                                                                                                                                                |
| IBER   | 93  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                            | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| IBER   | 94  | ../../sse_generico/espanol/generico_links.jsp                                                 | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 102 | /mss_g1/mss_g3_p3_val.jsp                                                                     | ausente    | P06                                                                                                                                                                                                |
| IBER   | 203 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                                         | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| IBER   | 325 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                         | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 340 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                         | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                                       | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 29  | /mss_g3/mss_g3_trans.jsp                                                                      | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| BASE   | 74  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                            | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 75  | ../../sse_generico/espanol/generico_links.jsp                                                 | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 181 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                                         | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| BASE   | 291 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                         | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 301 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                         | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |
| BASE   | 9   | /libreria/funciones_sse_val1.js                                                               | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                   |
| BASE   | 10  | /libreria/funciones_sse.js                                                                    | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 183 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31                                 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 274 | javascript:calc_costs(                                                                        | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 286 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp               | ausente    | P06                                                                                                                                                                                                |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                                       | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                   |
| BASE   | 29  | /mss_g3/mss_g3_trans.jsp                                                                      | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                                                                                                                 |
| BASE   | 34  | /servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost_empl.jsp?estado=31&amp;zID_DEV_SUB= | ausente    | P06                                                                                                                                                                                                |
| BASE   | 74  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                            | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                             |
| BASE   | 75  | ../../sse_generico/espanol/generico_links.jsp                                                 | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 83  | /mss_g1/mss_g3_p3_val.jsp                                                                     | ausente    | P06                                                                                                                                                                                                |
| BASE   | 181 | ../../mss_generico/espanol/mssgenerico_filtro_val.jsp                                         | física     | [mss_generico/mssgenerico_filtro_val.jsp](../tareas/mss_generico--mssgenerico_filtro_val.md)                                                                                                       |
| BASE   | 291 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                         | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 301 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                         | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p3_val.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
