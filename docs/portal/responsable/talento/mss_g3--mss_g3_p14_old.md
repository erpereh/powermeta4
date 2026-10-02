# Eventos actuales convocados

Identificador: `mss_g3/mss_g3_p14_old.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave     | Texto | Ámbito | Diccionario                                                                                  |
| --------- | ----- | ------ | -------------------------------------------------------------------------------------------- |
| Label.All | Todos | COLL   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All | Todos | CYC    | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All | Todos | IBER   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |
| Label.All | Todos | BASE   | [translations/ess_mss_gen_es.properties:L113](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/mss_g3/espanol/mss_g3_p14_old.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p14_old.jsp) | `6b27893a02a7b7c3e92744dc2700054442e5214ab1639c24920350fff02a927e` |    259 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_g3/espanol/mss_g3_p14_old.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p14_old.jsp). Líneas físicas, contando desde 1.

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

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ----------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| CYC    | 41  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| CYC    | 69  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| CYC    | 70  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| CYC    | 252 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| CYC    | 253 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| CYC    | 40  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| CYC    | 60  | + id;                                                 |

```
}
dir = dir + | dinámica | P06 |
```

| CYC | 165 | mss_g3_p14.jsp?estado=31&amp;zTLoad=FR | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| CYC | 174 | mss_g3_p14.jsp?estado=31&amp;zTLoad=EC | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| CYC | 224 | javascript:verdescdevtraining( | dinámica | P06 |
| CYC | 226 | javascript:verdescdevtraining( | dinámica | P06 |
| CYC | 243 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=EC | ausente | P06 |
| CYC | 245 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=FR | ausente | P06 |
| CYC | 41 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| CYC | 55 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11 | ausente | P06 |
| CYC | 59 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11 | ausente | P06 |
| CYC | 69 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| CYC | 70 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| CYC | 252 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| CYC | 253 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p14_old.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
