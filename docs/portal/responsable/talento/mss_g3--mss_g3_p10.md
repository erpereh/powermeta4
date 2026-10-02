# Eventos actuales convocados

Identificador: `mss_g3/mss_g3_p10.jsp`. Perfil: **responsable**. Dominio: **talento**.

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

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p10.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p10.jsp) | `b421d3901dab9ac08d6d609baea8f080bf2d3364575e74a41879207db12843a7` |    248 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p10.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p10.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                       |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | Eventos actuales convocados                                                                                                                    |
| 117 | Eventos actuales convocados                                                                                                                    |
| 120 | Consulta la lista de eventos con empleados convocados. A través del filtro puedes ver las inscripciones de un empleado. Formaciones realizadas |
| 127 | Filtro                                                                                                                                         |
| 129 | Empleado: [valor dinámico] "&gt; ,                                                                                                             |
| 156 | Formación                                                                                                                                      |
| 157 | Tipo                                                                                                                                           |
| 158 | Inicio                                                                                                                                         |
| 159 | Fin                                                                                                                                            |
| 160 | Empleado                                                                                                                                       |
| 219 | ');" title="Detalle del curso"&gt; [valor dinámico]                                                                                            |
| 227 | ');" title="Detalle del curso"&gt; [valor dinámico]                                                                                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                     |
| --- | ------- | ------------------------------------------------------------------------------------------------------------- |
| 119 | img     | src=/iconos/noname_catalogo_99_100.gif; width=99; height=100; alt=Eventos actuales convocados                 |
| 121 | a       | class=enlacefuncional; title=Formaciones ya realizadas; href=mss_g3_p10_2.jsp?estado=31                       |
| 125 | form    | name=prueba; id=prueba; action=                                                                               |
| 130 | select  | id=filtroemp; class=fuenteapartados; onchange=filtrar()                                                       |
| 132 | option  | value=ALL                                                                                                     |
| 134 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                      |
| 145 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p10.jsp?estado=31; method=post; name=oculto; id=oculto        |
| 146 | input   | type=hidden; id=zfiltroemp; name=zfiltroemp; value=&lt;%=zfiltroemp%&gt;                                      |
| 147 | input   | type=hidden; id=znombreemp; name=znombreemp; value=&lt;%=znombreemp%&gt;                                      |
| 148 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                               |
| 151 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc4.jsp?estado=31; method=post; name=oculto5; id=oculto5 |
| 152 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                         |
| 219 | a       | href="javascript:verdesc('&lt;%=zIDTRTB%&gt;/                                                                 |
| 227 | a       | href="javascript:verdesc('&lt;%=zIDTRTB%&gt;/                                                                 |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable           | Expresión fuente                                                               | Resolución estática parcial                                                                                                                     |
| --- | ------------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | estado             | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                                |
| 16  | zinicios           | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                              |
| 17  | zfiltroemp         | zobjtabla.m4paramvalor("zfiltroemp")                                           | zobjtabla.m4paramvalor("zfiltroemp")                                                                                                            |
| 18  | znombreemp         | zobjtabla.m4paramvalor("znombreemp")                                           | zobjtabla.m4paramvalor("znombreemp")                                                                                                            |
| 40  | zsubsesion         | "SSM_ENROLLMENT_OVERVIEW"                                                      | SSM_ENROLLMENT_OVERVIEW                                                                                                                         |
| 41  | zmeta4object       | "SSM_ENROLLMENT_OVERVIEW"                                                      | SSM_ENROLLMENT_OVERVIEW                                                                                                                         |
| 42  | znodo              | "M4T_ENROLLMENT"                                                               | M4T_ENROLLMENT                                                                                                                                  |
| 43  | znodo1             | "SSM_EMPLEADOS"                                                                | SSM_EMPLEADOS                                                                                                                                   |
| 45  | ztipocarga         | "ES"                                                                           | ES                                                                                                                                              |
| 46  | zdireccion         | "/mss_g3/mss_g3_p10.jsp"                                                       | /mss_g3/mss_g3_p10.jsp                                                                                                                          |
| 47  | zventanas          | "20"                                                                           | 20                                                                                                                                              |
| 48  | zvuelta            | 5                                                                              | 5                                                                                                                                               |
| 49  | zregistroinicial   | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                            |
| 51  | zventana           | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                           |
| 52  | zregistrofinal     | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                              |
| 54  | zoutputdef         | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 55  | zmove              | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | M4T_ENROLLMENT{":"}M4T_ENROLLMENT{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                 |
| 56  | zlectura           | zsubsesion + "!" + znodo                                                       | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT                                                                                                      |
| 57  | zraiz              | zsubsesion + "!" + znodo + "."                                                 | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}                                                                                                 |
| 58  | ziterator          | znodo + ":" + zsubsesion + "!" + znodo                                         | M4T_ENROLLMENT{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT                                                                                   |
| 60  | zoutputdef1        | zsubsesion + "!" + znodo1 + "[*]"                                              | SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                |
| 61  | zmove1             | znodo1 + "[FIRST]"                                                             | SSM_EMPLEADOS{"[FIRST]"}                                                                                                                        |
| 62  | zlectura1          | zsubsesion + "!" + znodo1                                                      | SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS                                                                                                       |
| 63  | zraiz1             | zsubsesion + "!" + znodo1 + "."                                                | SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"."}                                                                                                  |
| 64  | zcomun1            | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."            | SSM_EMPLEADOS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}                                                            |
| 66  | znodoprincipal     | "SSM_PRINCIPAL"                                                                | SSM_PRINCIPAL                                                                                                                                   |
| 67  | zmetodocarga       | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                 | CARGA:{}SSM_ENROLLMENT_OVERVIEW{"!SSM_PRINCIPAL.CARGA"}                                                                                         |
| 71  | zSTDNFIRSTNAME     | zraiz + "STD_N_FIRST_NAME"                                                     | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"STD_N_FIRST_NAME"}                                                                             |
| 72  | zSTDNFAMILYNAME1   | zraiz + "STD_N_FAMILY_NAME_1"                                                  | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"STD_N_FAMILY_NAME_1"}                                                                          |
| 73  | zSCODATE           | zraiz + "SCO_DATE"                                                             | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"SCO_DATE"}                                                                                     |
| 74  | zSCODATE1          | zraiz + "SCO_DATE_1"                                                           | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"SCO_DATE_1"}                                                                                   |
| 75  | zSCONMEVENT        | zraiz + "SCO_NM_EVENT"                                                         | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"SCO_NM_EVENT"}                                                                                 |
| 76  | zSCONMSESSION      | zraiz + "SCO_NM_SESSION"                                                       | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"SCO_NM_SESSION"}                                                                               |
| 77  | zSCONMPRODUCTTYPE  | zraiz + "SCO_NM_PRODUCT_TYPE"                                                  | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"SCO_NM_PRODUCT_TYPE"}                                                                          |
| 78  | zSCONMTRAININGPROV | zraiz + "SCO_NM_TRAINING_PROV"                                                 | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"SCO_NM_TRAINING_PROV"}                                                                         |
| 80  | STDIDPERSON        | zcomun1 + "STD_ID_PERSON"                                                      | SSM_EMPLEADOS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                                           |
| 81  | STDNFAMILYNAME1    | zcomun1 + "STD_N_FAMILY_NAME_1"                                                | SSM_EMPLEADOS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}                                     |
| 82  | STDNFIRSTNAME      | zcomun1 + "STD_N_FIRST_NAME"                                                   | SSM_EMPLEADOS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}                                        |
| 97  | zcounti            | 0                                                                              | 0                                                                                                                                               |
| 98  | zcount             | 0                                                                              | 0                                                                                                                                               |
| 99  | zcount1            | 0                                                                              | 0                                                                                                                                               |
| 100 | zcount1i           | 0                                                                              | 0                                                                                                                                               |
| 108 | zcountv            | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                         |
| 109 | zcount1v           | String.valueOf(zcount1)                                                        | String.valueOf(zcount1)                                                                                                                         |
| 112 | sFiltroNameL       | Tran.getProperty("Label.All")                                                  | Tran.getProperty("Label.All")                                                                                                                   |
| 165 | i                  | 0                                                                              | 0                                                                                                                                               |
| 166 | znombreant         | ""                                                                             |                                                                                                                                                 |
| 167 | znombrenuevo       | ""                                                                             |                                                                                                                                                 |
| 168 | zpersona           | ""                                                                             |                                                                                                                                                 |
| 169 | zproveedor         | ""                                                                             |                                                                                                                                                 |
| 170 | ztipo              | ""                                                                             |                                                                                                                                                 |
| 171 | z1                 | ""                                                                             |                                                                                                                                                 |
| 172 | z2                 | ""                                                                             |                                                                                                                                                 |
| 173 | z3                 | ""                                                                             |                                                                                                                                                 |
| 174 | x1                 | ""                                                                             |                                                                                                                                                 |
| 175 | x2                 | ""                                                                             |                                                                                                                                                 |
| 176 | x3                 | ""                                                                             |                                                                                                                                                 |
| 177 | zinicio            | ""                                                                             |                                                                                                                                                 |
| 178 | zfin               | ""                                                                             |                                                                                                                                                 |
| 179 | zIDTRTB            | ""                                                                             |                                                                                                                                                 |
| 180 | a                  | 0                                                                              | 0                                                                                                                                               |
| 182 | id                 | String.valueOf(i)                                                              | String.valueOf(i)                                                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 84  | m4:startpage | m4task=SSM_ENROLLMENT_OVERVIEW                                                                                                                                      |
| 84  | m4:beginjob  |                                                                                                                                                                     |
| 85  | m4:datadef   | m4o=SSM_ENROLLMENT_OVERVIEW; m4name=SSM_ENROLLMENT_OVERVIEW                                                                                                         |
| 91  | m4:exec      | m4method=CARGA:{}SSM_ENROLLMENT_OVERVIEW{"!SSM_PRINCIPAL.CARGA"}                                                                                                    |
| 91  | m4:param     | name=TIPO_CARGA; value=ES                                                                                                                                           |
| 92  | m4:outputdef | m4alias=M4T_ENROLLMENT                                                                                                                                              |
| 92  | m4:param     | name=m4name0; value=SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 93  | m4:outputdef | m4alias=SSM_EMPLEADOS                                                                                                                                               |
| 93  | m4:param     | name=m4name0; value=SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                |
| 94  | m4:endjob    |                                                                                                                                                                     |
| 95  | m4:move      |                                                                                                                                                                     |
| 95  | m4:param     | name=SSM_ENROLLMENT_OVERVIEW; value=SSM_EMPLEADOS{"[FIRST]"}                                                                                                        |
| 115 | m4:move      |                                                                                                                                                                     |
| 115 | m4:param     | name=SSM_ENROLLMENT_OVERVIEW; value=M4T_ENROLLMENT{":"}M4T_ENROLLMENT{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                 |
| 133 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount1v).intValue()-1).toString()                                                                                               |
| 134 | m4:item      | m4name=SSM_EMPLEADOS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}; htmlsafe=true                                   |
| 134 | m4:item      | m4name=SSM_EMPLEADOS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}; htmlsafe=true                                      |
| 245 | m4:endpage   |                                                                                                                                                                     |

| L   | Operación        | Argumentos literales                                    |
| --- | ---------------- | ------------------------------------------------------- |
| 88  | setItem          | zsubsesion,znodoprincipal,"","SSM_ID_PERSON",zfiltroemp |
| 103 | getCountInClient | znodo,zsubsesion,znodo                                  |
| 104 | getCount         | znodo,zsubsesion,znodo                                  |
| 105 | getCount         | znodo1,zsubsesion,znodo1                                |
| 106 | getCountInClient | znodo1,zsubsesion,znodo1                                |
| 184 | getItem          | znodo,zmeta4object,znodo,"","STD_N_FAMILY_NAME_1"       |
| 185 | getItem          | znodo,zmeta4object,znodo,"","STD_N_FIRST_NAME"          |
| 186 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_PRODUCT_TYPE"       |
| 187 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_TRAINING_PROV"      |
| 188 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_EVENT"              |
| 189 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_TRTBREQ"            |
| 190 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_SESSION"            |
| 191 | getItem          | znodo,zmeta4object,znodo,"","SCO_DATE"                  |
| 195 | getItem          | znodo,zmeta4object,znodo,"","SCO_DATE_1"                |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 25  | filtrar |            |
| 31  | verdesc | id         |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | if ((zfiltroemp==null)&#124;&#124; (""==zfiltroemp)){zfiltroemp = "ALL";}                                                                |
| 20  | if ((znombreemp==null)&#124;&#124; (""==znombreemp)){znombreemp = "Todos";}                                                              |
| 21  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 22  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 138 | if ('&lt;%=zfiltroemp%&gt;'!= "ALL"){                                                                                                    |
| 150 | &lt;%if (zcount &gt; 0) {%&gt;                                                                                                           |
| 205 | if ((znombrenuevo==znombreant)&#124;&#124; znombrenuevo.equals(znombreant)){                                                             |
| 211 | }else{                                                                                                                                   |
| 217 | &lt;% if (a==0){%&gt;                                                                                                                    |
| 225 | &lt;%}else{%&gt;                                                                                                                         |
| 237 | &lt;%}else{%&gt;                                                                                                                         |
| 50  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 52  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 54  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 55  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 56  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 57  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                      |
| 58  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 60  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 61  | expresión de cálculo/transformación: String zmove1 = znodo1 + "[FIRST]";                                                                 |
| 62  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                       |
| 63  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                    |
| 64  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";               |
| 67  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                               |
| 71  | expresión de cálculo/transformación: String zSTDNFIRSTNAME = zraiz + "STD_N_FIRST_NAME";                                                 |
| 72  | expresión de cálculo/transformación: String zSTDNFAMILYNAME1 = zraiz + "STD_N_FAMILY_NAME_1";                                            |
| 73  | expresión de cálculo/transformación: String zSCODATE = zraiz + "SCO_DATE";                                                               |
| 74  | expresión de cálculo/transformación: String zSCODATE1 = zraiz + "SCO_DATE_1";                                                            |
| 75  | expresión de cálculo/transformación: String zSCONMEVENT = zraiz + "SCO_NM_EVENT";                                                        |
| 76  | expresión de cálculo/transformación: String zSCONMSESSION = zraiz + "SCO_NM_SESSION";                                                    |
| 77  | expresión de cálculo/transformación: String zSCONMPRODUCTTYPE = zraiz + "SCO_NM_PRODUCT_TYPE";                                           |
| 78  | expresión de cálculo/transformación: String zSCONMTRAININGPROV = zraiz + "SCO_NM_TRAINING_PROV";                                         |
| 80  | expresión de cálculo/transformación: String STDIDPERSON = zcomun1 + "STD_ID_PERSON";                                                     |
| 81  | expresión de cálculo/transformación: String STDNFAMILYNAME1 = zcomun1 + "STD_N_FAMILY_NAME_1";                                           |
| 82  | expresión de cálculo/transformación: String STDNFIRSTNAME = zcomun1 + "STD_N_FIRST_NAME";                                                |
| 204 | expresión de cálculo/transformación: zfin = z3 + "-" + z2 + "-" + z1;                                                                    |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 37  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 38  | ../../sse_generico/espanol/generico_links.jsp         |
| 236 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 242 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                             |
| 10  | /libreria/funciones_sse.js                                      |
| 119 | /iconos/noname_catalogo_99_100.gif                              |
| 121 | mss_g3_p10_2.jsp?estado=31                                      |
| 145 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p10.jsp?estado=31      |
| 151 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc4.jsp?estado=31 |
| 219 | javascript:verdesc(                                             |
| 227 | javascript:verdesc(                                             |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                         |
| 37  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              |
| 38  | ../../sse_generico/espanol/generico_links.jsp                   |
| 46  | /mss_g3/mss_g3_p10.jsp                                          |
| 236 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 242 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 37  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 38  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 236 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 242 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 121 | mss_g3_p10_2.jsp?estado=31                                      | física     | [mss_g3/mss_g3_p10_2.jsp](mss_g3--mss_g3_p10_2.md)                                                              |
| BASE   | 145 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p10.jsp?estado=31      | ausente    | P06                                                                                                             |
| BASE   | 151 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc4.jsp?estado=31 | ausente    | P06                                                                                                             |
| BASE   | 219 | javascript:verdesc(                                             | dinámica   | P06                                                                                                             |
| BASE   | 227 | javascript:verdesc(                                             | dinámica   | P06                                                                                                             |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 37  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 38  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 46  | /mss_g3/mss_g3_p10.jsp                                          | ausente    | P06                                                                                                             |
| BASE   | 236 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 242 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p10.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
