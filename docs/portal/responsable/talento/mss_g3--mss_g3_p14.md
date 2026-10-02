# Eventos actuales convocados

Identificador: `mss_g3/mss_g3_p14.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave     | Texto | Ámbito | Diccionario                                                                                  |
| --------- | ----- | ------ | -------------------------------------------------------------------------------------------- |
| Label.All | Todos | COLL   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All | Todos | CYC    | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All | Todos | IBER   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All | Todos | BASE   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g3/espanol/mss_g3_p14.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p14.jsp) | `6b27893a02a7b7c3e92744dc2700054442e5214ab1639c24920350fff02a927e` |    259 |
| CYC / español     | [m4custom/CYC/mss_g3/espanol/mss_g3_p14.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p14.jsp)   | `05846eeaa43caef9c0707f0d4bb1227e1580576ba78a528586ddd28fc472c35d` |    297 |
| IBER / español    | [m4custom/IBER/mss_g3/espanol/mss_g3_p14.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g3/espanol/mss_g3_p14.jsp) | `6b27893a02a7b7c3e92744dc2700054442e5214ab1639c24920350fff02a927e` |    259 |
| BASE / español    | [mss_g3/espanol/mss_g3_p14.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p14.jsp)                             | `8afe9f6a11217fa13b03cce5f75d579650d68c579ac04d804860dce8e790cd90` |    253 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g3/espanol/mss_g3_p14.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p14.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                               |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35  | Eventos actuales convocados                                                                                                                                            |
| 37  | Formaciones realizadas                                                                                                                                                 |
| 161 | Eventos actuales convocados                                                                                                                                            |
| 164 | Consulta la lista de eventos con empleados convocados. A través del filtro puedes ver las inscripciones de un empleado. Formaciones realizadas                         |
| 169 | Formaciones realizadas                                                                                                                                                 |
| 172 | Consulta la lista de eventos a los que han asistido tus empleados. A través del filtro puedes ver las asistencias a cursos de un empleado. Eventos actuales convocados |
| 185 | Filtro                                                                                                                                                                 |
| 187 | Empleado [valor dinámico]                                                                                                                                              |
| 206 | Empleado                                                                                                                                                               |
| 207 | Formación                                                                                                                                                              |
| 208 | Sesión                                                                                                                                                                 |
| 209 | Inicio                                                                                                                                                                 |
| 210 | Fin                                                                                                                                                                    |
| 224 | ');" title="Detalle de la formación" style="FONT-SIZE: 10px"&gt;                                                                                                       |
| 226 | ');" title="Detalle de la sesión" style="FONT-SIZE: 10px"&gt;                                                                                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| 163 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=Eventos actuales convocados                         |
| 165 | a       | class=enlacefuncional; title=Formaciones realizadas; href=mss_g3_p14.jsp?estado=31&amp;zTLoad=FR                     |
| 171 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=Eventos actuales convocados                         |
| 174 | a       | class=enlacefuncional; title=Eventos actuales convocados; href=mss_g3_p14.jsp?estado=31&amp;zTLoad=EC                |
| 183 | form    | name=formfiltro; id=formfiltro; action=                                                                              |
| 188 | select  | id=filtroformacion; name=filtroformacion; class=fuenteapartados; onchange=javascript:filtrar()                       |
| 190 | option  | value=&lt;%=sIdHREncr%&gt;                                                                                           |
| 194 | option  | value=&lt;%=sIdHREncr%&gt;                                                                                           |
| 224 | a       | href=javascript:verdescdevtraining('0','&lt;m4:item m4name=; jsafe=true; htmlsafe=true                               |
| 226 | a       | href=javascript:verdescdevtraining('1','&lt;m4:item m4name=; jsafe=true; htmlsafe=true                               |
| 243 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=EC; method=post; name=oculto; id=oculto |
| 245 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=FR; method=post; name=oculto; id=oculto |
| 247 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltroEncr%&gt;                                                  |
| 248 | input   | type=hidden; id=zNomfiltro; name=zNomfiltro; value=&lt;%=zNomfiltro%&gt;                                             |
| 249 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                      |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 11  | estado          | getParameter(request,"estado")     |
| 12  | zinicios        | getParameter(request,"zinicios")   |
| 14  | zfiltro         | getParameter(request, "zfiltro")   |
| 23  | zNomfiltro      | getParameter(request,"zNomfiltro") |
| 24  | zTLoad          | getParameter(request,"zTLoad")     |

| L   | Variable          | Expresión fuente                                                                                | Resolución estática parcial                                                                                                                               |
| --- | ----------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                        |
| 12  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                      |
| 13  | zfiltro           | ""                                                                                              |                                                                                                                                                           |
| 14  | zfiltroEncr       | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro")                                                                                      |
| 18  | sIdHREncr         | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL") | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL")                                                           |
| 23  | zNomfiltro        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro")                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro")                                                                                    |
| 24  | zTLoad            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                                        |
| 72  | zsubsesion        | "SSM_TRAINING_ENROLLMENT"                                                                       | SSM_TRAINING_ENROLLMENT                                                                                                                                   |
| 73  | zmeta4object      | "SSM_TRAINING_ENROLLMENT"                                                                       | SSM_TRAINING_ENROLLMENT                                                                                                                                   |
| 74  | znodo             | "SSM_ENROLLMENT_SUBACTION"                                                                      | SSM_ENROLLMENT_SUBACTION                                                                                                                                  |
| 75  | znodo1            | "SSM_EMPLEADOS"                                                                                 | SSM_EMPLEADOS                                                                                                                                             |
| 76  | znodomain         | "SSM_PRINCIPAL"                                                                                 | SSM_PRINCIPAL                                                                                                                                             |
| 79  | ztipocarga        | zTLoad                                                                                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                                        |
| 80  | zventanas         | "20"                                                                                            | 20                                                                                                                                                        |
| 81  | zvuelta           | 5                                                                                               | 5                                                                                                                                                         |
| 82  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                                            | Integer.valueOf(zinicios).intValue()                                                                                                                      |
| 84  | zventana          | Integer.valueOf(zventanas).intValue()                                                           | Integer.valueOf(zventanas).intValue()                                                                                                                     |
| 85  | zregistrofinal    | zregistroinicial + zventana - 1                                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                        |
| 87  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"                  | SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 88  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                                              | SSM_ENROLLMENT_SUBACTION{":"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                       |
| 89  | zlectura          | zsubsesion + "!" + znodo                                                                        | SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION                                                                                                      |
| 90  | zraiz             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                               | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}                                                |
| 91  | ziterator         | znodo + ":" + zsubsesion + "!" + znodo                                                          | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION                                                                         |
| 93  | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                                               | SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                          |
| 94  | zlectura1         | zsubsesion + "!" + znodo1                                                                       | SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS                                                                                                                 |
| 95  | zraiz1            | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."                             | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}                                                                      |
| 96  | zmove1            | znodo1 + ":" + znodo1 + "[FIRST]"                                                               | SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"[FIRST]"}                                                                                                                |
| 97  | ziterator1        | znodo1 + ":" + zsubsesion + "!" + znodo1                                                        | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS                                                                                               |
| 99  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                                  | CARGA:{}SSM_TRAINING_ENROLLMENT{"!SSM_PRINCIPAL.CARGA"}                                                                                                   |
| 103 | zSCO_GB_NAMEEMP   | zraiz + "SCO_GB_NAME"                                                                           | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                 |
| 104 | zNOMBREEMP        | zraiz + "NOMBRE_EMP"                                                                            | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMP"}                                  |
| 105 | zidSubProduct     | zraiz + "SCO_ID_DEV_SUBPRODUCT"                                                                 | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                       |
| 106 | zNOMBREFORM       | zraiz + "SCO_NM_DEV_SUBPRODUCT"                                                                 | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                       |
| 107 | zidSubAction      | zraiz + "SCO_ID_DEV_SUBACTION"                                                                  | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}                        |
| 108 | zNOMBRESESION     | zraiz + "SCO_NM_DEV_SUBACTION"                                                                  | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                        |
| 109 | zDTSTART          | zraiz + "DT_START"                                                                              | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                    |
| 110 | zFECHAFIN         | zraiz + "DT_END"                                                                                | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}                                      |
| 112 | zSTDNFAMILYNAME1  | zraiz1 + "STD_N_FAMILY_NAME_1"                                                                  | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}                                               |
| 113 | zSTDNFIRSTNAME    | zraiz1 + "STD_N_FIRST_NAME"                                                                     | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}                                                  |
| 114 | zSTDIDPERSON      | zraiz1 + "STD_ID_PERSON"                                                                        | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                                                     |
| 115 | zSCO_GB_NAME      | zraiz1 + "SCO_GB_NAME"                                                                          | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                                       |
| 117 | sSortNode         | zmeta4object + "!" + znodo + ".Sort"                                                            | SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{".Sort"}                                                                                             |
| 138 | zcounti           | 0                                                                                               | 0                                                                                                                                                         |
| 139 | zcount            | 0                                                                                               | 0                                                                                                                                                         |
| 140 | zcount1           | 0                                                                                               | 0                                                                                                                                                         |
| 141 | zcount1i          | 0                                                                                               | 0                                                                                                                                                         |
| 149 | zcountv           | String.valueOf(zcounti)                                                                         | String.valueOf(zcounti)                                                                                                                                   |
| 150 | zcount1v          | String.valueOf(zcount1)                                                                         | String.valueOf(zcount1)                                                                                                                                   |
| 154 | sFiltroNameL      | Tran.getProperty("Label.All")                                                                   | Tran.getProperty("Label.All")                                                                                                                             |
| 189 | sIdHREncr         | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL") | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL")                                                           |
| 213 | zposicions2       | "0"                                                                                             | 0                                                                                                                                                         |
| 214 | zcontrol2         | 0                                                                                               | 0                                                                                                                                                         |
| 215 | zposicion2        | 0                                                                                               | 0                                                                                                                                                         |
| 216 | zregistroinicials | String.valueOf(zregistroinicial)                                                                | String.valueOf(zregistroinicial)                                                                                                                          |
| 217 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                                  | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                            |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 120 | m4:startpage | m4task=SSM_TRAINING_ENROLLMENT                                                                                                                                                |
| 120 | m4:beginjob  |                                                                                                                                                                               |
| 121 | m4:datadef   | m4o=SSM_TRAINING_ENROLLMENT; m4name=SSM_TRAINING_ENROLLMENT                                                                                                                   |
| 127 | m4:exec      | m4method=CARGA:{}SSM_TRAINING_ENROLLMENT{"!SSM_PRINCIPAL.CARGA"}                                                                                                              |
| 127 | m4:param     | name=TIPO_CARGA; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                                     |
| 129 | m4:sortitems | m4name=SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{".Sort"}                                                                                                          |
| 130 | m4:param     | name=DT_START; value=DESC                                                                                                                                                     |
| 133 | m4:outputdef | m4alias=SSM_ENROLLMENT_SUBACTION                                                                                                                                              |
| 133 | m4:param     | name=m4name0; value=SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 134 | m4:outputdef | m4alias=SSM_EMPLEADOS                                                                                                                                                         |
| 134 | m4:param     | name=m4name0; value=SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                          |
| 135 | m4:endjob    |                                                                                                                                                                               |
| 157 | m4:move      |                                                                                                                                                                               |
| 157 | m4:param     | name=SSM_TRAINING_ENROLLMENT; value=SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"[FIRST]"}                                                                                                |
| 158 | m4:move      |                                                                                                                                                                               |
| 158 | m4:param     | name=SSM_TRAINING_ENROLLMENT; value=SSM_ENROLLMENT_SUBACTION{":"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"]"}                                       |
| 191 | m4:dataloop  | outputdef=SSM_ENROLLMENT_SUBACTION                                                                                                                                            |
| 192 | m4:item      | var=com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL"); item=STD_ID_PERSON; htmlsafe=true; outputdef=SSM_ENROLLMENT_SUBACTION    |
| 194 | m4:item      | item=SCO_GB_NAME; htmlsafe=true; outputdef=SSM_ENROLLMENT_SUBACTION                                                                                                           |
| 220 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                     |
| 222 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                               |
| 224 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                     |
| 226 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                      |
| 228 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true                                  |
| 229 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; htmlsafe=true                                    |
| 256 | m4:endpage   |                                                                                                                                                                               |

| L   | Operación        | Argumentos literales                            |
| --- | ---------------- | ----------------------------------------------- |
| 124 | setItem          | zsubsesion,znodomain,"","SSM_ID_PERSON",zfiltro |
| 144 | getCountInClient | znodo,zsubsesion,znodo                          |
| 145 | getCount         | znodo,zsubsesion,znodo                          |
| 146 | getCount         | znodo1,zsubsesion,znodo1                        |
| 147 | getCountInClient | znodo1,zsubsesion,znodo1                        |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función            | Argumentos |
| --- | ------------------ | ---------- |
| 44  | filtrar            |            |
| 51  | verdescdevtraining | typeDev,id |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if (zfiltroEncr == null &#124;&#124; zfiltroEncr.equals("")) {                                                                           |
| 22  | else {zfiltro = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", zfiltroEncr);}                  |
| 27  | if ((zTLoad==null)&#124;&#124; (""==zTLoad)){zTLoad = "EC";}                                                                             |
| 28  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "ALL";}                                                                         |
| 29  | if ((zNomfiltro==null)&#124;&#124; (""==zNomfiltro)){zNomfiltro = "Todos";}                                                              |
| 30  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 31  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 34  | &lt;% if (zTLoad=="EC" &#124;&#124; zTLoad.equals("EC")) { %&gt;                                                                         |
| 36  | &lt;% } else { %&gt;                                                                                                                     |
| 54  | if (typeDev == 0){                                                                                                                       |
| 58  | else {                                                                                                                                   |
| 160 | &lt;% if (ztipocarga=="EC" &#124;&#124; ztipocarga.equals("EC")) { %&gt;                                                                 |
| 168 | &lt;% } else { %&gt;                                                                                                                     |
| 199 | if ('&lt;%=zfiltro%&gt;'!= "ALL"){                                                                                                       |
| 204 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                        |
| 232 | &lt;%} else {%&gt;                                                                                                                       |
| 235 | &lt;% if (ztipocarga=="EC" &#124;&#124; ztipocarga.equals("EC")) { %&gt;                                                                 |
| 237 | &lt;% } else { %&gt;                                                                                                                     |
| 242 | &lt;% if (ztipocarga=="EC" &#124;&#124; ztipocarga.equals("EC")) { %&gt;                                                                 |
| 244 | &lt;% } else { %&gt;                                                                                                                     |
| 56  | expresión de cálculo/transformación: dir = dir + "&amp;zidSubProduct=" + id;                                                             |
| 60  | expresión de cálculo/transformación: dir = dir + "&amp;zidSubAction=" + id;                                                              |
| 62  | expresión de cálculo/transformación: dir = dir + "&amp;zidCost=" + "0";                                                                  |
| 83  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 85  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 87  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 88  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 89  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 90  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                   |
| 91  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 93  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 94  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                       |
| 95  | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                |
| 96  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                                  |
| 97  | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                       |
| 99  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                               |
| 103 | expresión de cálculo/transformación: String zSCO_GB_NAMEEMP = zraiz + "SCO_GB_NAME";                                                     |
| 104 | expresión de cálculo/transformación: String zNOMBREEMP = zraiz + "NOMBRE_EMP";                                                           |
| 105 | expresión de cálculo/transformación: String zidSubProduct = zraiz + "SCO_ID_DEV_SUBPRODUCT";                                             |
| 106 | expresión de cálculo/transformación: String zNOMBREFORM = zraiz + "SCO_NM_DEV_SUBPRODUCT";                                               |
| 107 | expresión de cálculo/transformación: String zidSubAction = zraiz + "SCO_ID_DEV_SUBACTION";                                               |
| 108 | expresión de cálculo/transformación: String zNOMBRESESION = zraiz + "SCO_NM_DEV_SUBACTION";                                              |
| 109 | expresión de cálculo/transformación: String zDTSTART = zraiz + "DT_START";                                                               |
| 110 | expresión de cálculo/transformación: String zFECHAFIN = zraiz + "DT_END";                                                                |
| 112 | expresión de cálculo/transformación: String zSTDNFAMILYNAME1 = zraiz1 + "STD_N_FAMILY_NAME_1";                                           |
| 113 | expresión de cálculo/transformación: String zSTDNFIRSTNAME = zraiz1 + "STD_N_FIRST_NAME";                                                |
| 114 | expresión de cálculo/transformación: String zSTDIDPERSON = zraiz1 + "STD_ID_PERSON";                                                     |
| 115 | expresión de cálculo/transformación: String zSCO_GB_NAME = zraiz1 + "SCO_GB_NAME";                                                       |
| 117 | expresión de cálculo/transformación: String sSortNode = zmeta4object + "!" + znodo + ".Sort";                                            |
| 217 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 41  | ../../mss_generico/espanol/menu_mss.jsp               |
| 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 70  | ../../sse_generico/espanol/generico_links.jsp         |
| 252 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 253 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso          |
| --- | -------------------------- |
| 39  | /css/estilo_mss.css        |
| 40  | /libreria/funciones_sse.js |
| 60  | + id;                      |

```
}
dir = dir + |
```

| 163 | /iconos/noname_puesto_144_100.gif |
| 165 | mss_g3_p14.jsp?estado=31&amp;zTLoad=FR |
| 171 | /iconos/noname_puesto_144_100.gif |
| 174 | mss_g3_p14.jsp?estado=31&amp;zTLoad=EC |
| 224 | javascript:verdescdevtraining( |
| 226 | javascript:verdescdevtraining( |
| 243 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=EC |
| 245 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=FR |
| 41 | ../../mss_generico/espanol/menu_mss.jsp |
| 55 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11 |
| 59 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11 |
| 69 | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 70 | ../../sse_generico/espanol/generico_links.jsp |
| 252 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 253 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_g3/espanol/mss_g3_p14.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p14.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 103 | Formaciones realizadas                                                                                                                                   |
| 105 | Eventos actuales convocados                                                                                                                              |
| 184 | Formaciones realizadas                                                                                                                                   |
| 189 | Consulta la Formación realizada de tus empleados Consulta la Eventos actuales convocados de tus empleados Cursos actuales convocados Formación realizada |
| 217 | Empleado                                                                                                                                                 |
| 218 | Formación                                                                                                                                                |
| 219 | Sesión                                                                                                                                                   |
| 220 | Inicio                                                                                                                                                   |
| 221 | Fin                                                                                                                                                      |
| 225 | Empleado                                                                                                                                                 |
| 226 | Formación                                                                                                                                                |
| 227 | Sesión                                                                                                                                                   |
| 228 | Inicio                                                                                                                                                   |
| 229 | Fin                                                                                                                                                      |
| 240 | ');" title="Detalle de la formación"&gt;                                                                                                                 |
| 241 | ');" title="Detalle de la sesión"&gt;                                                                                                                    |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                           |
| --- | ------- | --------------------------------------------------------------------------------------------------- |
| 187 | img     | src=/iconos/noname_evalua_cursos_74_100.gif; width=100; height=100; alt=Eventos actuales convocados |
| 200 | a       | class=enlacefuncional; title=Eventos actuales convocados; href=mss_g3_p14.jsp?zTLoad=EC             |
| 202 | a       | class=enlacefuncional; title=Formación realizada; href=mss_g3_p14.jsp?zTLoad=FR                     |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 16  | estado          | getParameter(request,"estado")     |
| 17  | zinicios        | getParameter(request,"zinicios")   |
| 19  | zfiltro         | getParameter(request, "zfiltro")   |
| 26  | zNomfiltro      | getParameter(request,"zNomfiltro") |
| 27  | zTLoad          | getParameter(request,"zTLoad")     |

| L   | Variable          | Expresión fuente                                                                                | Resolución estática parcial                                                                                                                               |
| --- | ----------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                        |
| 17  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                      |
| 18  | zfiltro           | ""                                                                                              |                                                                                                                                                           |
| 19  | zfiltroEncr       | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro")                                                                                      |
| 21  | sIdHREncr         | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL") | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL")                                                           |
| 26  | zNomfiltro        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro")                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro")                                                                                    |
| 27  | zTLoad            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                                        |
| 36  | zsubsesion        | "SSM_TRAINING_ENROLLMENT"                                                                       | SSM_TRAINING_ENROLLMENT                                                                                                                                   |
| 37  | zmeta4object      | "SSM_TRAINING_ENROLLMENT"                                                                       | SSM_TRAINING_ENROLLMENT                                                                                                                                   |
| 38  | znodo             | "SSM_ENROLLMENT_SUBACTION"                                                                      | SSM_ENROLLMENT_SUBACTION                                                                                                                                  |
| 39  | znodo1            | "SSM_EMPLEADOS"                                                                                 | SSM_EMPLEADOS                                                                                                                                             |
| 40  | znodomain         | "SSM_PRINCIPAL"                                                                                 | SSM_PRINCIPAL                                                                                                                                             |
| 43  | ztipocarga        | zTLoad                                                                                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                                        |
| 44  | zventanas         | "20"                                                                                            | 20                                                                                                                                                        |
| 45  | zvuelta           | 5                                                                                               | 5                                                                                                                                                         |
| 46  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                                            | Integer.valueOf(zinicios).intValue()                                                                                                                      |
| 48  | zventana          | Integer.valueOf(zventanas).intValue()                                                           | Integer.valueOf(zventanas).intValue()                                                                                                                     |
| 49  | zregistrofinal    | zregistroinicial + zventana - 1                                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                        |
| 51  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"                  | SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 53  | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                                                | SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[*]"}                                                                                               |
| 54  | zmove             | znodo + ":" + znodo                                                                             | SSM_ENROLLMENT_SUBACTION{":"}SSM_ENROLLMENT_SUBACTION                                                                                                     |
| 56  | zlectura          | zsubsesion + "!" + znodo                                                                        | SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION                                                                                                      |
| 57  | zraiz             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                               | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}                                                |
| 58  | ziterator         | znodo + ":" + zsubsesion + "!" + znodo                                                          | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION                                                                         |
| 60  | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                                               | SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                          |
| 61  | zlectura1         | zsubsesion + "!" + znodo1                                                                       | SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS                                                                                                                 |
| 62  | zraiz1            | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."                             | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}                                                                      |
| 63  | zmove1            | znodo1 + ":" + znodo1 + "[FIRST]"                                                               | SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"[FIRST]"}                                                                                                                |
| 64  | ziterator1        | znodo1 + ":" + zsubsesion + "!" + znodo1                                                        | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS                                                                                               |
| 66  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                                  | CARGA:{}SSM_TRAINING_ENROLLMENT{"!SSM_PRINCIPAL.CARGA"}                                                                                                   |
| 69  | zSCO_GB_NAMEEMP   | zraiz + "SCO_GB_NAME"                                                                           | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                 |
| 70  | zNOMBREEMP        | zraiz + "NOMBRE_EMP"                                                                            | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMP"}                                  |
| 71  | zidSubProduct     | zraiz + "SCO_ID_DEV_SUBPRODUCT"                                                                 | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                       |
| 72  | zNOMBREFORM       | zraiz + "SCO_NM_DEV_SUBPRODUCT"                                                                 | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                       |
| 73  | zidSubAction      | zraiz + "SCO_ID_DEV_SUBACTION"                                                                  | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}                        |
| 74  | zNOMBRESESION     | zraiz + "SCO_NM_DEV_SUBACTION"                                                                  | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                        |
| 75  | zDTSTART          | zraiz + "DT_START"                                                                              | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                    |
| 76  | zFECHAFIN         | zraiz + "DT_END"                                                                                | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}                                      |
| 78  | zSTDNFAMILYNAME1  | zraiz1 + "STD_N_FAMILY_NAME_1"                                                                  | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}                                               |
| 79  | zSTDNFIRSTNAME    | zraiz1 + "STD_N_FIRST_NAME"                                                                     | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}                                                  |
| 80  | zSTDIDPERSON      | zraiz1 + "STD_ID_PERSON"                                                                        | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                                                     |
| 81  | zSCO_GB_NAME      | zraiz1 + "SCO_GB_NAME"                                                                          | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                                       |
| 83  | sSortNode         | zmeta4object + "!" + znodo + ".Sort"                                                            | SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{".Sort"}                                                                                             |
| 176 | zcounti           | new Integer(new M4Operations(request).getCountInClient(znodo,zsubsesion,znodo)-1)               | new Integer(new M4Operations(request).getCountInClient(znodo,zsubsesion,znodo)-1)                                                                         |
| 177 | zregistroinicials | String.valueOf(zregistroinicial)                                                                | String.valueOf(zregistroinicial)                                                                                                                          |
| 178 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti)                                                      | {String.valueOf(zregistroinicial}{zcounti)}                                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                        |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 146 | m4:startpage | m4task=SSM_TRAINING_ENROLLMENT                                                                                                                            |
| 149 | m4:beginjob  |                                                                                                                                                           |
| 151 | m4:datadef   | m4o=SSM_TRAINING_ENROLLMENT; m4name=SSM_TRAINING_ENROLLMENT                                                                                               |
| 159 | m4:exec      | m4method=CARGA:{}SSM_TRAINING_ENROLLMENT{"!SSM_PRINCIPAL.CARGA"}                                                                                          |
| 160 | m4:param     | name=TIPO_CARGA; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                 |
| 163 | m4:sortitems | m4name=SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{".Sort"}                                                                                      |
| 164 | m4:param     | name=DT_START; value=DESC                                                                                                                                 |
| 167 | m4:outputdef | m4alias=SSM_ENROLLMENT_SUBACTION                                                                                                                          |
| 167 | m4:param     | name=m4name0; value=SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[*]"}                                                                           |
| 168 | m4:outputdef | m4alias=SSM_EMPLEADOS                                                                                                                                     |
| 168 | m4:param     | name=m4name0; value=SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[*]"}                                                                                      |
| 169 | m4:endjob    |                                                                                                                                                           |
| 171 | m4:move      |                                                                                                                                                           |
| 171 | m4:param     | name=SSM_TRAINING_ENROLLMENT; value=SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"[FIRST]"}                                                                            |
| 172 | m4:move      |                                                                                                                                                           |
| 172 | m4:param     | name=SSM_TRAINING_ENROLLMENT; value=SSM_ENROLLMENT_SUBACTION{":"}SSM_ENROLLMENT_SUBACTION                                                                 |
| 236 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti)}                                                                     |
| 239 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true           |
| 240 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true |
| 241 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true  |
| 242 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true              |
| 243 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; htmlsafe=true                |
| 253 | m4:endpage   |                                                                                                                                                           |

| L   | Operación        | Argumentos literales                            |
| --- | ---------------- | ----------------------------------------------- |
| 155 | setItem          | zsubsesion,znodomain,"","SSM_ID_PERSON",zfiltro |
| 176 | getCountInClient | znodo,zsubsesion,znodo)-1                       |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función            | Argumentos |
| --- | ------------------ | ---------- |
| 259 | verdescdevtraining | typeDev,id |

| L   | Condición / acción / mensaje literal                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 20  | if (zfiltroEncr == null &#124;&#124; zfiltroEncr.equals("")) {                                                             |
| 25  | else {zfiltro = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", zfiltroEncr);}    |
| 30  | if ((zTLoad==null)&#124;&#124; (""==zTLoad)){zTLoad = "EC";} // FR (Fornacion realizada), EC (Eventos actuales convocados) |
| 31  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "ALL";}                                                           |
| 32  | if ((zNomfiltro==null)&#124;&#124; (""==zNomfiltro)){zNomfiltro = "Todos";}                                                |
| 33  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                            |
| 34  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                    |
| 102 | &lt;% if(zTLoad.equals("FR")){ %&gt;                                                                                       |
| 104 | &lt;% }else{ %&gt;                                                                                                         |
| 191 | &lt;% if(zTLoad.equals("FR")){ %&gt;                                                                                       |
| 193 | &lt;% }else{ %&gt;                                                                                                         |
| 199 | &lt;% if(zTLoad.equals("FR")){ %&gt;                                                                                       |
| 201 | &lt;% }else{ %&gt;                                                                                                         |
| 47  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                              |
| 49  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                 |
| 53  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                 |
| 54  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo;                                                   |
| 56  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                           |
| 57  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";     |
| 58  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                            |
| 60  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                               |
| 61  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                         |
| 62  | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";  |
| 63  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                    |
| 64  | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                         |
| 66  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                 |
| 69  | expresión de cálculo/transformación: String zSCO_GB_NAMEEMP = zraiz + "SCO_GB_NAME";                                       |
| 70  | expresión de cálculo/transformación: String zNOMBREEMP = zraiz + "NOMBRE_EMP";                                             |
| 71  | expresión de cálculo/transformación: String zidSubProduct = zraiz + "SCO_ID_DEV_SUBPRODUCT";                               |
| 72  | expresión de cálculo/transformación: String zNOMBREFORM = zraiz + "SCO_NM_DEV_SUBPRODUCT";                                 |
| 73  | expresión de cálculo/transformación: String zidSubAction = zraiz + "SCO_ID_DEV_SUBACTION";                                 |
| 74  | expresión de cálculo/transformación: String zNOMBRESESION = zraiz + "SCO_NM_DEV_SUBACTION";                                |
| 75  | expresión de cálculo/transformación: String zDTSTART = zraiz + "DT_START";                                                 |
| 76  | expresión de cálculo/transformación: String zFECHAFIN = zraiz + "DT_END";                                                  |
| 78  | expresión de cálculo/transformación: String zSTDNFAMILYNAME1 = zraiz1 + "STD_N_FAMILY_NAME_1";                             |
| 79  | expresión de cálculo/transformación: String zSTDNFIRSTNAME = zraiz1 + "STD_N_FIRST_NAME";                                  |
| 80  | expresión de cálculo/transformación: String zSTDIDPERSON = zraiz1 + "STD_ID_PERSON";                                       |
| 81  | expresión de cálculo/transformación: String zSCO_GB_NAME = zraiz1 + "SCO_GB_NAME";                                         |
| 83  | expresión de cálculo/transformación: String sSortNode = zmeta4object + "!" + znodo + ".Sort";                              |
| 178 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti);                  |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 9   | ../../sse_generico/sse_generico_taglib.jsp   |
| 10  | ../../sse_generico/sse_generico_taglib_2.jsp |
| 11  | ../../sse_generico/espanol/menu_ess.jsp      |
| 12  | /sse_g3/sse_train_trans.jsp                  |

| L   | Destino / recurso                                                 |
| --- | ----------------------------------------------------------------- |
| 87  | /css/estilo_sse.css                                               |
| 89  | /LibQ/DataTables_CSS_CYC/datatables_css_portal_CYC.css            |
| 91  | /LibQ/jQuery-3.3.1/jquery-3.3.1.min.js                            |
| 92  | /LibQ/DataTables_min/datatables.min.js                            |
| 93  | /LibQ/DataTable_trad/mi_datatable_es.js                           |
| 94  | /LibQ/DataTable_trad/mi_datatable_pt_ordenado.js                  |
| 95  | /LibQ/DataTable_trad/mi_datatable_es_ordenado_fechas_dd-mm-yyy.js |
| 96  | /LibQ/DataTables_Q_js/datatable_general.js                        |
| 99  | /libreria/funciones_sse.js                                        |
| 187 | /iconos/noname_evalua_cursos_74_100.gif                           |
| 200 | mss_g3_p14.jsp?zTLoad=EC                                          |
| 202 | mss_g3_p14.jsp?zTLoad=FR                                          |
| 261 | ;                                                                 |

```
	dir += id + |
```

| 9 | ../../sse_generico/sse_generico_taglib.jsp |
| 10 | ../../sse_generico/sse_generico_taglib_2.jsp |
| 11 | ../../sse_generico/espanol/menu_ess.jsp |
| 12 | /sse_g3/sse_train_trans.jsp |
| 261 | /sgco_desc_dev_subproduct.jsp?estado=11&amp;zidSubProduct= |
| 261 | /sgco_desc_dev_subaction.jsp?estado=11&amp;zidSubAction= |

## Versión 3: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p14.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p14.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                  |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 29  | Eventos actuales convocados                                                                                                                                                               |
| 31  | Formaciones realizadas                                                                                                                                                                    |
| 155 | Eventos actuales convocados                                                                                                                                                               |
| 158 | Consulta la lista de eventos con empleados convocados. A través del filtro puedes ver las inscripciones de un empleado. Formaciones realizadas                                            |
| 163 | Formaciones realizadas                                                                                                                                                                    |
| 166 | Consulta la lista de eventos a los que han asistido tus empleados. A través del filtro puedes ver las asistencias a cursos de un empleado. Eventos actuales convocados Plan de desarrollo |
| 179 | Filtro                                                                                                                                                                                    |
| 181 | Empleado [valor dinámico]                                                                                                                                                                 |
| 200 | Empleado                                                                                                                                                                                  |
| 201 | Formación                                                                                                                                                                                 |
| 202 | Sesión                                                                                                                                                                                    |
| 203 | Inicio                                                                                                                                                                                    |
| 204 | Fin                                                                                                                                                                                       |
| 218 | ');" title="Detalle de la formación"&gt;                                                                                                                                                  |
| 220 | ');" title="Detalle de la sesión"&gt;                                                                                                                                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| 157 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=Eventos actuales convocados                         |
| 159 | a       | class=enlacefuncional; title=Formaciones realizadas; href=mss_g3_p14.jsp?estado=31&amp;zTLoad=FR                     |
| 165 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=Eventos actuales convocados                         |
| 168 | a       | class=enlacefuncional; title=Eventos actuales convocados; href=mss_g3_p14.jsp?estado=31&amp;zTLoad=EC                |
| 169 | a       | class=enlacefuncional; title=Plan de desarrollo; href=smco_g3_dev_plan_filter.jsp                                    |
| 177 | form    | name=formfiltro; id=formfiltro; action=                                                                              |
| 182 | select  | id=filtroformacion; name=filtroformacion; class=fuenteapartados; onchange=javascript:filtrar()                       |
| 184 | option  | value=&lt;%=sIdHREncr%&gt;                                                                                           |
| 188 | option  | value=&lt;%=sIdHREncr%&gt;                                                                                           |
| 218 | a       | href=javascript:verdescdevtraining('0','&lt;m4:item m4name=; jsafe=true; htmlsafe=true                               |
| 220 | a       | href=javascript:verdescdevtraining('1','&lt;m4:item m4name=; jsafe=true; htmlsafe=true                               |
| 237 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=EC; method=post; name=oculto; id=oculto |
| 239 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=FR; method=post; name=oculto; id=oculto |
| 241 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltroEncr%&gt;                                                  |
| 242 | input   | type=hidden; id=zNomfiltro; name=zNomfiltro; value=&lt;%=zNomfiltro%&gt;                                             |
| 243 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                      |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 11  | estado          | getParameter(request,"estado")     |
| 12  | zinicios        | getParameter(request,"zinicios")   |
| 14  | zfiltro         | getParameter(request, "zfiltro")   |
| 17  | zNomfiltro      | getParameter(request,"zNomfiltro") |
| 18  | zTLoad          | getParameter(request,"zTLoad")     |

| L   | Variable          | Expresión fuente                                                                                | Resolución estática parcial                                                                                                                               |
| --- | ----------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                        |
| 12  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                      |
| 13  | zfiltro           | ""                                                                                              |                                                                                                                                                           |
| 14  | zfiltroEncr       | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro")                                                                                      |
| 17  | zNomfiltro        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro")                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro")                                                                                    |
| 18  | zTLoad            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                                        |
| 66  | zsubsesion        | "SSM_TRAINING_ENROLLMENT"                                                                       | SSM_TRAINING_ENROLLMENT                                                                                                                                   |
| 67  | zmeta4object      | "SSM_TRAINING_ENROLLMENT"                                                                       | SSM_TRAINING_ENROLLMENT                                                                                                                                   |
| 68  | znodo             | "SSM_ENROLLMENT_SUBACTION"                                                                      | SSM_ENROLLMENT_SUBACTION                                                                                                                                  |
| 69  | znodo1            | "SSM_EMPLEADOS"                                                                                 | SSM_EMPLEADOS                                                                                                                                             |
| 70  | znodomain         | "SSM_PRINCIPAL"                                                                                 | SSM_PRINCIPAL                                                                                                                                             |
| 73  | ztipocarga        | zTLoad                                                                                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                                        |
| 74  | zventanas         | "20"                                                                                            | 20                                                                                                                                                        |
| 75  | zvuelta           | 5                                                                                               | 5                                                                                                                                                         |
| 76  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                                            | Integer.valueOf(zinicios).intValue()                                                                                                                      |
| 78  | zventana          | Integer.valueOf(zventanas).intValue()                                                           | Integer.valueOf(zventanas).intValue()                                                                                                                     |
| 79  | zregistrofinal    | zregistroinicial + zventana - 1                                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                        |
| 81  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"                  | SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 82  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                                              | SSM_ENROLLMENT_SUBACTION{":"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                       |
| 83  | zlectura          | zsubsesion + "!" + znodo                                                                        | SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION                                                                                                      |
| 84  | zraiz             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                               | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}                                                |
| 85  | ziterator         | znodo + ":" + zsubsesion + "!" + znodo                                                          | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION                                                                         |
| 87  | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                                               | SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                          |
| 88  | zlectura1         | zsubsesion + "!" + znodo1                                                                       | SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS                                                                                                                 |
| 89  | zraiz1            | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."                             | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}                                                                      |
| 90  | zmove1            | znodo1 + ":" + znodo1 + "[FIRST]"                                                               | SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"[FIRST]"}                                                                                                                |
| 91  | ziterator1        | znodo1 + ":" + zsubsesion + "!" + znodo1                                                        | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS                                                                                               |
| 93  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                                  | CARGA:{}SSM_TRAINING_ENROLLMENT{"!SSM_PRINCIPAL.CARGA"}                                                                                                   |
| 97  | zSCO_GB_NAMEEMP   | zraiz + "SCO_GB_NAME"                                                                           | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                 |
| 98  | zNOMBREEMP        | zraiz + "NOMBRE_EMP"                                                                            | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMP"}                                  |
| 99  | zidSubProduct     | zraiz + "SCO_ID_DEV_SUBPRODUCT"                                                                 | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                       |
| 100 | zNOMBREFORM       | zraiz + "SCO_NM_DEV_SUBPRODUCT"                                                                 | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                       |
| 101 | zidSubAction      | zraiz + "SCO_ID_DEV_SUBACTION"                                                                  | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}                        |
| 102 | zNOMBRESESION     | zraiz + "SCO_NM_DEV_SUBACTION"                                                                  | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                        |
| 103 | zDTSTART          | zraiz + "DT_START"                                                                              | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                    |
| 104 | zFECHAFIN         | zraiz + "DT_END"                                                                                | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}                                      |
| 106 | zSTDNFAMILYNAME1  | zraiz1 + "STD_N_FAMILY_NAME_1"                                                                  | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}                                               |
| 107 | zSTDNFIRSTNAME    | zraiz1 + "STD_N_FIRST_NAME"                                                                     | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}                                                  |
| 108 | zSTDIDPERSON      | zraiz1 + "STD_ID_PERSON"                                                                        | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                                                     |
| 109 | zSCO_GB_NAME      | zraiz1 + "SCO_GB_NAME"                                                                          | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                                       |
| 111 | sSortNode         | zmeta4object + "!" + znodo + ".Sort"                                                            | SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{".Sort"}                                                                                             |
| 132 | zcounti           | 0                                                                                               | 0                                                                                                                                                         |
| 133 | zcount            | 0                                                                                               | 0                                                                                                                                                         |
| 134 | zcount1           | 0                                                                                               | 0                                                                                                                                                         |
| 135 | zcount1i          | 0                                                                                               | 0                                                                                                                                                         |
| 143 | zcountv           | String.valueOf(zcounti)                                                                         | String.valueOf(zcounti)                                                                                                                                   |
| 144 | zcount1v          | String.valueOf(zcount1)                                                                         | String.valueOf(zcount1)                                                                                                                                   |
| 148 | sFiltroNameL      | Tran.getProperty("Label.All")                                                                   | Tran.getProperty("Label.All")                                                                                                                             |
| 183 | sIdHREncr         | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL") | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL")                                                           |
| 207 | zposicions2       | "0"                                                                                             | 0                                                                                                                                                         |
| 208 | zcontrol2         | 0                                                                                               | 0                                                                                                                                                         |
| 209 | zposicion2        | 0                                                                                               | 0                                                                                                                                                         |
| 210 | zregistroinicials | String.valueOf(zregistroinicial)                                                                | String.valueOf(zregistroinicial)                                                                                                                          |
| 211 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                                  | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                            |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 114 | m4:startpage | m4task=SSM_TRAINING_ENROLLMENT                                                                                                                                                |
| 114 | m4:beginjob  |                                                                                                                                                                               |
| 115 | m4:datadef   | m4o=SSM_TRAINING_ENROLLMENT; m4name=SSM_TRAINING_ENROLLMENT                                                                                                                   |
| 121 | m4:exec      | m4method=CARGA:{}SSM_TRAINING_ENROLLMENT{"!SSM_PRINCIPAL.CARGA"}                                                                                                              |
| 121 | m4:param     | name=TIPO_CARGA; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                                     |
| 123 | m4:sortitems | m4name=SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{".Sort"}                                                                                                          |
| 124 | m4:param     | name=DT_START; value=DESC                                                                                                                                                     |
| 127 | m4:outputdef | m4alias=SSM_ENROLLMENT_SUBACTION                                                                                                                                              |
| 127 | m4:param     | name=m4name0; value=SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 128 | m4:outputdef | m4alias=SSM_EMPLEADOS                                                                                                                                                         |
| 128 | m4:param     | name=m4name0; value=SSM_TRAINING_ENROLLMENT{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                          |
| 129 | m4:endjob    |                                                                                                                                                                               |
| 151 | m4:move      |                                                                                                                                                                               |
| 151 | m4:param     | name=SSM_TRAINING_ENROLLMENT; value=SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"[FIRST]"}                                                                                                |
| 152 | m4:move      |                                                                                                                                                                               |
| 152 | m4:param     | name=SSM_TRAINING_ENROLLMENT; value=SSM_ENROLLMENT_SUBACTION{":"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"]"}                                       |
| 185 | m4:dataloop  | outputdef=SSM_ENROLLMENT_SUBACTION                                                                                                                                            |
| 186 | m4:item      | var=com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL"); item=STD_ID_PERSON; htmlsafe=true; outputdef=SSM_ENROLLMENT_SUBACTION    |
| 188 | m4:item      | item=SCO_GB_NAME; htmlsafe=true; outputdef=SSM_ENROLLMENT_SUBACTION                                                                                                           |
| 214 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                     |
| 216 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                               |
| 218 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                     |
| 220 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                      |
| 222 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true                                  |
| 223 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; htmlsafe=true                                    |
| 250 | m4:endpage   |                                                                                                                                                                               |

| L   | Operación        | Argumentos literales                            |
| --- | ---------------- | ----------------------------------------------- |
| 118 | setItem          | zsubsesion,znodomain,"","SSM_ID_PERSON",zfiltro |
| 138 | getCountInClient | znodo,zsubsesion,znodo                          |
| 139 | getCount         | znodo,zsubsesion,znodo                          |
| 140 | getCount         | znodo1,zsubsesion,znodo1                        |
| 141 | getCountInClient | znodo1,zsubsesion,znodo1                        |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función            | Argumentos |
| --- | ------------------ | ---------- |
| 38  | filtrar            |            |
| 45  | verdescdevtraining | typeDev,id |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if (zfiltroEncr == null &#124;&#124; zfiltroEncr.equals("")) {zfiltro="";}                                                               |
| 16  | else {zfiltro = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", zfiltroEncr);}                  |
| 21  | if ((zTLoad==null)&#124;&#124; (""==zTLoad)){zTLoad = "EC";}                                                                             |
| 22  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "ALL";}                                                                         |
| 23  | if ((zNomfiltro==null)&#124;&#124; (""==zNomfiltro)){zNomfiltro = "Todos";}                                                              |
| 24  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 25  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 28  | &lt;% if (zTLoad=="EC" &#124;&#124; zTLoad.equals("EC")) { %&gt;                                                                         |
| 30  | &lt;% } else { %&gt;                                                                                                                     |
| 48  | if (typeDev == 0){                                                                                                                       |
| 52  | else {                                                                                                                                   |
| 154 | &lt;% if (ztipocarga=="EC" &#124;&#124; ztipocarga.equals("EC")) { %&gt;                                                                 |
| 162 | &lt;% } else { %&gt;                                                                                                                     |
| 193 | if ('&lt;%=zfiltro%&gt;'!= "ALL"){                                                                                                       |
| 198 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                        |
| 226 | &lt;%} else {%&gt;                                                                                                                       |
| 229 | &lt;% if (ztipocarga=="EC" &#124;&#124; ztipocarga.equals("EC")) { %&gt;                                                                 |
| 231 | &lt;% } else { %&gt;                                                                                                                     |
| 236 | &lt;% if (ztipocarga=="EC" &#124;&#124; ztipocarga.equals("EC")) { %&gt;                                                                 |
| 238 | &lt;% } else { %&gt;                                                                                                                     |
| 50  | expresión de cálculo/transformación: dir = dir + "&amp;zidSubProduct=" + id;                                                             |
| 54  | expresión de cálculo/transformación: dir = dir + "&amp;zidSubAction=" + id;                                                              |
| 56  | expresión de cálculo/transformación: dir = dir + "&amp;zidCost=" + "0";                                                                  |
| 77  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 79  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 81  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 82  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 83  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 84  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                   |
| 85  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 87  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 88  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                       |
| 89  | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                |
| 90  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                                  |
| 91  | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                       |
| 93  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                               |
| 97  | expresión de cálculo/transformación: String zSCO_GB_NAMEEMP = zraiz + "SCO_GB_NAME";                                                     |
| 98  | expresión de cálculo/transformación: String zNOMBREEMP = zraiz + "NOMBRE_EMP";                                                           |
| 99  | expresión de cálculo/transformación: String zidSubProduct = zraiz + "SCO_ID_DEV_SUBPRODUCT";                                             |
| 100 | expresión de cálculo/transformación: String zNOMBREFORM = zraiz + "SCO_NM_DEV_SUBPRODUCT";                                               |
| 101 | expresión de cálculo/transformación: String zidSubAction = zraiz + "SCO_ID_DEV_SUBACTION";                                               |
| 102 | expresión de cálculo/transformación: String zNOMBRESESION = zraiz + "SCO_NM_DEV_SUBACTION";                                              |
| 103 | expresión de cálculo/transformación: String zDTSTART = zraiz + "DT_START";                                                               |
| 104 | expresión de cálculo/transformación: String zFECHAFIN = zraiz + "DT_END";                                                                |
| 106 | expresión de cálculo/transformación: String zSTDNFAMILYNAME1 = zraiz1 + "STD_N_FAMILY_NAME_1";                                           |
| 107 | expresión de cálculo/transformación: String zSTDNFIRSTNAME = zraiz1 + "STD_N_FIRST_NAME";                                                |
| 108 | expresión de cálculo/transformación: String zSTDIDPERSON = zraiz1 + "STD_ID_PERSON";                                                     |
| 109 | expresión de cálculo/transformación: String zSCO_GB_NAME = zraiz1 + "SCO_GB_NAME";                                                       |
| 111 | expresión de cálculo/transformación: String sSortNode = zmeta4object + "!" + znodo + ".Sort";                                            |
| 211 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 35  | ../../mss_generico/espanol/menu_mss.jsp               |
| 63  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 64  | ../../sse_generico/espanol/generico_links.jsp         |
| 246 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 247 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso          |
| --- | -------------------------- |
| 33  | /css/estilo_mss.css        |
| 34  | /libreria/funciones_sse.js |
| 54  | + id;                      |

```
}
dir = dir + |
```

| 157 | /iconos/noname_puesto_144_100.gif |
| 159 | mss_g3_p14.jsp?estado=31&amp;zTLoad=FR |
| 165 | /iconos/noname_puesto_144_100.gif |
| 168 | mss_g3_p14.jsp?estado=31&amp;zTLoad=EC |
| 169 | smco_g3_dev_plan_filter.jsp |
| 218 | javascript:verdescdevtraining( |
| 220 | javascript:verdescdevtraining( |
| 237 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=EC |
| 239 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=FR |
| 35 | ../../mss_generico/espanol/menu_mss.jsp |
| 49 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11 |
| 53 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11 |
| 63 | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 64 | ../../sse_generico/espanol/generico_links.jsp |
| 246 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 247 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 41  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| COLL   | 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| COLL   | 70  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 252 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| COLL   | 253 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| COLL   | 40  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 60  | + id;                                                 |

```
}
dir = dir + | dinámica | P06 |
```

| COLL | 165 | mss_g3_p14.jsp?estado=31&amp;zTLoad=FR | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| COLL | 174 | mss_g3_p14.jsp?estado=31&amp;zTLoad=EC | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| COLL | 224 | javascript:verdescdevtraining( | dinámica | P06 |
| COLL | 226 | javascript:verdescdevtraining( | dinámica | P06 |
| COLL | 243 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=EC | ausente | P06 |
| COLL | 245 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=FR | ausente | P06 |
| COLL | 41 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| COLL | 55 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11 | ausente | P06 |
| COLL | 59 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11 | ausente | P06 |
| COLL | 69 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| COLL | 70 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| COLL | 252 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| COLL | 253 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |
| CYC | 9 | ../../sse_generico/sse_generico_taglib.jsp | física | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md) |
| CYC | 10 | ../../sse_generico/sse_generico_taglib_2.jsp | física | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| CYC | 11 | ../../sse_generico/espanol/menu_ess.jsp | física | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md) |
| CYC | 12 | /sse_g3/sse_train_trans.jsp | contextual | [sse_g3/sse_train_trans.jsp](../../empleado/talento/sse_g3--sse_train_trans.md) |
| CYC | 91 | /LibQ/jQuery-3.3.1/jquery-3.3.1.min.js | contextual | &#96;LibQ/jQuery-3.3.1/jquery-3.3.1.min.js&#96; |
| CYC | 92 | /LibQ/DataTables_min/datatables.min.js | contextual | &#96;LibQ/DataTables_min/datatables.min.js&#96; |
| CYC | 93 | /LibQ/DataTable_trad/mi_datatable_es.js | contextual | [LibQ/DataTable_trad/mi_datatable_es.js](../../transversal/dependencias/libq--datatable_trad--mi_datatable_es.md) |
| CYC | 94 | /LibQ/DataTable_trad/mi_datatable_pt_ordenado.js | contextual | [LibQ/DataTable_trad/mi_datatable_pt_ordenado.js](../../transversal/dependencias/libq--datatable_trad--mi_datatable_pt_ordenado.md) |
| CYC | 95 | /LibQ/DataTable_trad/mi_datatable_es_ordenado_fechas_dd-mm-yyy.js | contextual | [LibQ/DataTable_trad/mi_datatable_es_ordenado_fechas_dd-mm-yyy.js](../../transversal/dependencias/libq--datatable_trad--mi_datatable_es_ordenado_fechas_dd-mm-yyy.md) |
| CYC | 96 | /LibQ/DataTables_Q_js/datatable_general.js | contextual | [LibQ/DataTables_Q_js/datatable_general.js](../../transversal/dependencias/libq--datatables_q_js--datatable_general.md) |
| CYC | 99 | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| CYC | 200 | mss_g3_p14.jsp?zTLoad=EC | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| CYC | 202 | mss_g3_p14.jsp?zTLoad=FR | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| CYC | 261 | ;
dir += id + | dinámica | P06 |
| CYC | 9 | ../../sse_generico/sse_generico_taglib.jsp | física | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md) |
| CYC | 10 | ../../sse_generico/sse_generico_taglib_2.jsp | física | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| CYC | 11 | ../../sse_generico/espanol/menu_ess.jsp | física | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md) |
| CYC | 12 | /sse_g3/sse_train_trans.jsp | contextual | [sse_g3/sse_train_trans.jsp](../../empleado/talento/sse_g3--sse_train_trans.md) |
| CYC | 261 | /sgco_desc_dev_subproduct.jsp?estado=11&amp;zidSubProduct= | ausente | P06 |
| CYC | 261 | /sgco_desc_dev_subaction.jsp?estado=11&amp;zidSubAction= | ausente | P06 |
| IBER | 41 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| IBER | 69 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| IBER | 70 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| IBER | 252 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| IBER | 253 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |
| IBER | 40 | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER | 60 | + id;
}
dir = dir + | dinámica | P06 |
| IBER | 165 | mss_g3_p14.jsp?estado=31&amp;zTLoad=FR | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| IBER | 174 | mss_g3_p14.jsp?estado=31&amp;zTLoad=EC | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| IBER | 224 | javascript:verdescdevtraining( | dinámica | P06 |
| IBER | 226 | javascript:verdescdevtraining( | dinámica | P06 |
| IBER | 243 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=EC | ausente | P06 |
| IBER | 245 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=FR | ausente | P06 |
| IBER | 41 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| IBER | 55 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11 | ausente | P06 |
| IBER | 59 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11 | ausente | P06 |
| IBER | 69 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| IBER | 70 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| IBER | 252 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| IBER | 253 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |
| BASE | 35 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| BASE | 63 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| BASE | 64 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE | 246 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE | 247 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |
| BASE | 34 | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE | 54 | + id;
}
dir = dir + | dinámica | P06 |
| BASE | 159 | mss_g3_p14.jsp?estado=31&amp;zTLoad=FR | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| BASE | 168 | mss_g3_p14.jsp?estado=31&amp;zTLoad=EC | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| BASE | 169 | smco_g3_dev_plan_filter.jsp | física | [mss_g3/smco_g3_dev_plan_filter.jsp](mss_g3--smco_g3_dev_plan_filter.md) |
| BASE | 218 | javascript:verdescdevtraining( | dinámica | P06 |
| BASE | 220 | javascript:verdescdevtraining( | dinámica | P06 |
| BASE | 237 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=EC | ausente | P06 |
| BASE | 239 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=FR | ausente | P06 |
| BASE | 35 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| BASE | 49 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11 | ausente | P06 |
| BASE | 53 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11 | ausente | P06 |
| BASE | 63 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| BASE | 64 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE | 246 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE | 247 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p14.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
