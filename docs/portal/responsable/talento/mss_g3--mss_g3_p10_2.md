# Formaciones realizadas

Identificador: `mss_g3/mss_g3_p10_2.jsp`. Perfil: **responsable**. Dominio: **talento**.

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

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p10_2.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p10_2.jsp) | `b1d3c41c08d30c63747b5b2a9ba64557c708363840f87f7c3440bea2564a6b28` |    258 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p10_2.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p10_2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                            |
| --- | --------------------------------------------------- |
| 8   | Formaciones realizadas                              |
| 128 | Formaciones realizadas                              |
| 139 | Empleado: [valor dinámico] "&gt; ,                  |
| 166 | Formación                                           |
| 167 | Tipo                                                |
| 168 | Inicio                                              |
| 169 | Fin                                                 |
| 170 | Empleado                                            |
| 229 | ');" title="Detalle del curso"&gt; [valor dinámico] |
| 237 | ');" title="Detalle del curso"&gt; [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                     |
| --- | ------- | ------------------------------------------------------------------------------------------------------------- |
| 131 | img     | src=/iconos/noname_catalogo_99_100.gif; width=99; height=100; alt=Eventos actuales convocados                 |
| 135 | form    | name=prueba; id=prueba; action=                                                                               |
| 140 | select  | id=filtroemp; class=fuenteapartados; onchange=filtrar()                                                       |
| 142 | option  | value=ALL                                                                                                     |
| 144 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                      |
| 155 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p10_2.jsp?estado=31; method=post; name=oculto; id=oculto      |
| 156 | input   | type=hidden; id=zfiltroemp; name=zfiltroemp; value=&lt;%=zfiltroemp%&gt;                                      |
| 157 | input   | type=hidden; id=znombreemp; name=znombreemp; value=&lt;%=znombreemp%&gt;                                      |
| 158 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                               |
| 161 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc4.jsp?estado=31; method=post; name=oculto5; id=oculto5 |
| 162 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                         |
| 229 | a       | href="javascript:verdesc('&lt;%=zIDTRTB%&gt;/                                                                 |
| 237 | a       | href="javascript:verdesc('&lt;%=zIDTRTB%&gt;/                                                                 |

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
| 45  | ztipocarga         | "ES2"                                                                          | ES2                                                                                                                                             |
| 46  | zdireccion         | "/mss_g3/mss_g3_p10.jsp"                                                       | /mss_g3/mss_g3_p10.jsp                                                                                                                          |
| 47  | zventanas          | "20"                                                                           | 20                                                                                                                                              |
| 48  | zvuelta            | 5                                                                              | 5                                                                                                                                               |
| 52  | zregistroinicial   | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                            |
| 54  | zventana           | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                           |
| 55  | zregistrofinal     | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                              |
| 57  | zoutputdef         | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 58  | zmove              | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | M4T_ENROLLMENT{":"}M4T_ENROLLMENT{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                 |
| 59  | zlectura           | zsubsesion + "!" + znodo                                                       | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT                                                                                                      |
| 60  | zraiz              | zsubsesion + "!" + znodo + "."                                                 | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}                                                                                                 |
| 61  | ziterator          | znodo + ":" + zsubsesion + "!" + znodo                                         | M4T_ENROLLMENT{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT                                                                                   |
| 63  | zoutputdef1        | zsubsesion + "!" + znodo1 + "[*]"                                              | SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                |
| 64  | zmove1             | znodo1 + "[FIRST]"                                                             | SSM_EMPLEADOS{"[FIRST]"}                                                                                                                        |
| 65  | zlectura1          | zsubsesion + "!" + znodo1                                                      | SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS                                                                                                       |
| 66  | zraiz1             | zsubsesion + "!" + znodo1 + "."                                                | SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"."}                                                                                                  |
| 67  | zcomun1            | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."            | SSM_EMPLEADOS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}                                                            |
| 69  | znodoprincipal     | "SSM_PRINCIPAL"                                                                | SSM_PRINCIPAL                                                                                                                                   |
| 70  | zmetodocarga       | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                 | CARGA:{}SSM_ENROLLMENT_OVERVIEW{"!SSM_PRINCIPAL.CARGA"}                                                                                         |
| 74  | zSTDNFIRSTNAME     | zraiz + "STD_N_FIRST_NAME"                                                     | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"STD_N_FIRST_NAME"}                                                                             |
| 75  | zSTDNFAMILYNAME1   | zraiz + "STD_N_FAMILY_NAME_1"                                                  | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"STD_N_FAMILY_NAME_1"}                                                                          |
| 76  | zSCODATE           | zraiz + "SCO_DATE"                                                             | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"SCO_DATE"}                                                                                     |
| 77  | zSCODATE1          | zraiz + "SCO_DATE_1"                                                           | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"SCO_DATE_1"}                                                                                   |
| 78  | zSCONMEVENT        | zraiz + "SCO_NM_EVENT"                                                         | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"SCO_NM_EVENT"}                                                                                 |
| 79  | zSCONMSESSION      | zraiz + "SCO_NM_SESSION"                                                       | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"SCO_NM_SESSION"}                                                                               |
| 80  | zSCONMPRODUCTTYPE  | zraiz + "SCO_NM_PRODUCT_TYPE"                                                  | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"SCO_NM_PRODUCT_TYPE"}                                                                          |
| 81  | zSCONMTRAININGPROV | zraiz + "SCO_NM_TRAINING_PROV"                                                 | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"."}{"SCO_NM_TRAINING_PROV"}                                                                         |
| 83  | STDIDPERSON        | zcomun1 + "STD_ID_PERSON"                                                      | SSM_EMPLEADOS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                                           |
| 84  | STDNFAMILYNAME1    | zcomun1 + "STD_N_FAMILY_NAME_1"                                                | SSM_EMPLEADOS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}                                     |
| 85  | STDNFIRSTNAME      | zcomun1 + "STD_N_FIRST_NAME"                                                   | SSM_EMPLEADOS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}                                        |
| 101 | zcounti            | 0                                                                              | 0                                                                                                                                               |
| 106 | zcountv            | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                         |
| 107 | zcount             | 0                                                                              | 0                                                                                                                                               |
| 112 | zcount1            | 0                                                                              | 0                                                                                                                                               |
| 113 | zcount1i           | 0                                                                              | 0                                                                                                                                               |
| 119 | zcount1v           | String.valueOf(zcount1)                                                        | String.valueOf(zcount1)                                                                                                                         |
| 122 | sFiltroNameL       | Tran.getProperty("Label.All")                                                  | Tran.getProperty("Label.All")                                                                                                                   |
| 175 | i                  | 0                                                                              | 0                                                                                                                                               |
| 176 | znombreant         | ""                                                                             |                                                                                                                                                 |
| 177 | znombrenuevo       | ""                                                                             |                                                                                                                                                 |
| 178 | zpersona           | ""                                                                             |                                                                                                                                                 |
| 179 | zproveedor         | ""                                                                             |                                                                                                                                                 |
| 180 | ztipo              | ""                                                                             |                                                                                                                                                 |
| 181 | z1                 | ""                                                                             |                                                                                                                                                 |
| 182 | z2                 | ""                                                                             |                                                                                                                                                 |
| 183 | z3                 | ""                                                                             |                                                                                                                                                 |
| 184 | x1                 | ""                                                                             |                                                                                                                                                 |
| 185 | x2                 | ""                                                                             |                                                                                                                                                 |
| 186 | x3                 | ""                                                                             |                                                                                                                                                 |
| 187 | zinicio            | ""                                                                             |                                                                                                                                                 |
| 188 | zfin               | ""                                                                             |                                                                                                                                                 |
| 189 | zIDTRTB            | ""                                                                             |                                                                                                                                                 |
| 190 | a                  | 0                                                                              | 0                                                                                                                                               |
| 192 | id                 | String.valueOf(i)                                                              | String.valueOf(i)                                                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 87  | m4:startpage | m4task=SSM_ENROLLMENT_OVERVIEW                                                                                                                                      |
| 87  | m4:beginjob  |                                                                                                                                                                     |
| 88  | m4:datadef   | m4o=SSM_ENROLLMENT_OVERVIEW; m4name=SSM_ENROLLMENT_OVERVIEW                                                                                                         |
| 94  | m4:exec      | m4method=CARGA:{}SSM_ENROLLMENT_OVERVIEW{"!SSM_PRINCIPAL.CARGA"}                                                                                                    |
| 94  | m4:param     | name=TIPO_CARGA; value=ES2                                                                                                                                          |
| 95  | m4:outputdef | m4alias=M4T_ENROLLMENT                                                                                                                                              |
| 95  | m4:param     | name=m4name0; value=SSM_ENROLLMENT_OVERVIEW{"!"}M4T_ENROLLMENT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 96  | m4:outputdef | m4alias=SSM_EMPLEADOS                                                                                                                                               |
| 96  | m4:param     | name=m4name0; value=SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                |
| 97  | m4:endjob    |                                                                                                                                                                     |
| 98  | m4:move      |                                                                                                                                                                     |
| 98  | m4:param     | name=SSM_ENROLLMENT_OVERVIEW; value=SSM_EMPLEADOS{"[FIRST]"}                                                                                                        |
| 125 | m4:move      |                                                                                                                                                                     |
| 125 | m4:param     | name=SSM_ENROLLMENT_OVERVIEW; value=M4T_ENROLLMENT{":"}M4T_ENROLLMENT{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                 |
| 143 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount1v).intValue()-1).toString()                                                                                               |
| 144 | m4:item      | m4name=SSM_EMPLEADOS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}; htmlsafe=true                                   |
| 144 | m4:item      | m4name=SSM_EMPLEADOS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}; htmlsafe=true                                      |
| 255 | m4:endpage   |                                                                                                                                                                     |

| L   | Operación        | Argumentos literales                                    |
| --- | ---------------- | ------------------------------------------------------- |
| 91  | setItem          | zsubsesion,znodoprincipal,"","SSM_ID_PERSON",zfiltroemp |
| 104 | getCountInClient | znodo,zsubsesion,znodo                                  |
| 110 | getCount         | znodo,zsubsesion,znodo                                  |
| 116 | getCount         | znodo1,zsubsesion,znodo1                                |
| 117 | getCountInClient | znodo1,zsubsesion,znodo1                                |
| 194 | getItem          | znodo,zmeta4object,znodo,"","STD_N_FAMILY_NAME_1"       |
| 195 | getItem          | znodo,zmeta4object,znodo,"","STD_N_FIRST_NAME"          |
| 196 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_PRODUCT_TYPE"       |
| 197 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_TRAINING_PROV"      |
| 198 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_EVENT"              |
| 199 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_TRTBREQ"            |
| 200 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_SESSION"            |
| 201 | getItem          | znodo,zmeta4object,znodo,"","SCO_DATE"                  |
| 205 | getItem          | znodo,zmeta4object,znodo,"","SCO_DATE_1"                |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 25  | filtrar | num        |
| 31  | verdesc | id         |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | if ((zfiltroemp==null)&#124;&#124; (""==zfiltroemp)){zfiltroemp = "ALL";}                                                                |
| 20  | if ((znombreemp==null)&#124;&#124; (""==znombreemp)){znombreemp = "Todos";}                                                              |
| 21  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 22  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 148 | if ('&lt;%=zfiltroemp%&gt;'!= "ALL"){                                                                                                    |
| 160 | &lt;%if (zcount &gt; 0) {%&gt;                                                                                                           |
| 215 | if ((znombrenuevo==znombreant)&#124;&#124; znombrenuevo.equals(znombreant)){                                                             |
| 221 | }else{                                                                                                                                   |
| 227 | &lt;% if (a==0){%&gt;                                                                                                                    |
| 235 | &lt;%}else{%&gt;                                                                                                                         |
| 247 | &lt;%}else{%&gt;                                                                                                                         |
| 53  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 55  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 57  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 58  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 59  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 60  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                      |
| 61  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 63  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 64  | expresión de cálculo/transformación: String zmove1 = znodo1 + "[FIRST]";                                                                 |
| 65  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                       |
| 66  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                    |
| 67  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";               |
| 70  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                               |
| 74  | expresión de cálculo/transformación: String zSTDNFIRSTNAME = zraiz + "STD_N_FIRST_NAME";                                                 |
| 75  | expresión de cálculo/transformación: String zSTDNFAMILYNAME1 = zraiz + "STD_N_FAMILY_NAME_1";                                            |
| 76  | expresión de cálculo/transformación: String zSCODATE = zraiz + "SCO_DATE";                                                               |
| 77  | expresión de cálculo/transformación: String zSCODATE1 = zraiz + "SCO_DATE_1";                                                            |
| 78  | expresión de cálculo/transformación: String zSCONMEVENT = zraiz + "SCO_NM_EVENT";                                                        |
| 79  | expresión de cálculo/transformación: String zSCONMSESSION = zraiz + "SCO_NM_SESSION";                                                    |
| 80  | expresión de cálculo/transformación: String zSCONMPRODUCTTYPE = zraiz + "SCO_NM_PRODUCT_TYPE";                                           |
| 81  | expresión de cálculo/transformación: String zSCONMTRAININGPROV = zraiz + "SCO_NM_TRAINING_PROV";                                         |
| 83  | expresión de cálculo/transformación: String STDIDPERSON = zcomun1 + "STD_ID_PERSON";                                                     |
| 84  | expresión de cálculo/transformación: String STDNFAMILYNAME1 = zcomun1 + "STD_N_FAMILY_NAME_1";                                           |
| 85  | expresión de cálculo/transformación: String STDNFIRSTNAME = zcomun1 + "STD_N_FIRST_NAME";                                                |
| 214 | expresión de cálculo/transformación: zfin = z3 + "-" + z2 + "-" + z1;                                                                    |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 37  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 38  | ../../sse_generico/espanol/generico_links.jsp         |
| 246 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 252 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                             |
| 10  | /libreria/funciones_sse.js                                      |
| 131 | /iconos/noname_catalogo_99_100.gif                              |
| 155 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p10_2.jsp?estado=31    |
| 161 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc4.jsp?estado=31 |
| 229 | javascript:verdesc(                                             |
| 237 | javascript:verdesc(                                             |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                         |
| 37  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              |
| 38  | ../../sse_generico/espanol/generico_links.jsp                   |
| 46  | /mss_g3/mss_g3_p10.jsp                                          |
| 246 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 252 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 37  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 38  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 246 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 252 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 155 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p10_2.jsp?estado=31    | ausente    | P06                                                                                                             |
| BASE   | 161 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc4.jsp?estado=31 | ausente    | P06                                                                                                             |
| BASE   | 229 | javascript:verdesc(                                             | dinámica   | P06                                                                                                             |
| BASE   | 237 | javascript:verdesc(                                             | dinámica   | P06                                                                                                             |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 37  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 38  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 46  | /mss_g3/mss_g3_p10.jsp                                          | ausente    | P06                                                                                                             |
| BASE   | 246 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 252 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p10_2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
