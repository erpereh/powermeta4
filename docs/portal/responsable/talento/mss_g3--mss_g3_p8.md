# Planes de carrera

Identificador: `mss_g3/mss_g3_p8.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p8.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p8.jsp) | `b5d7ad2d226eecab3726765930c25f787212847fd22f1ab99c60c9e3fe5ca7c4` |    156 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p8.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p8.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                 |
| --- | ---------------------------------------------------------------------------------------- |
| 6   | Planes de carrera                                                                        |
| 105 | Planes de carrera                                                                        |
| 108 | Consulta los planes de carrera de tus empleados y el puesto que ocupan en la actualidad. |
| 117 | Empleados                                                                                |
| 117 | Plan de carrera                                                                          |
| 117 | Puesto actual                                                                            |
| 143 | ');"&gt;                                                                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                  |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 107 | img     | alt=Planes de carrera; src=/iconos/noname_plan_carrera_133_100.gif; width=100; height=100                                                                  |
| 119 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_pc.jsp?estado=31; method=post; name=plan; id=plan                                                       |
| 120 | input   | type=hidden; id=pk0; name=pk0; value=                                                                                                                      |
| 121 | input   | type=hidden; id=pk1; name=pk1; value=                                                                                                                      |
| 122 | input   | type=hidden; id=pk2; name=pk2; value=                                                                                                                      |
| 124 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_desc.jsp?estado=31; method=post; name=puesto; id=puesto                                                 |
| 125 | input   | type=hidden; id=zSJOB; name=zSJOB; value=                                                                                                                  |
| 142 | a       | class=enlacefuncional; title=Detalle del plan de carrera; href=javascript:ver_plan('&lt;%=sIDPerson%&gt;','&lt;%=sOrHrPeriod%&gt;','&lt;%=sDtStart%&gt;'); |
| 143 | a       | class=enlacefuncional; title=Detalle del puesto; href=javascript:ver_puesto('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 12  | estado          | getParameter(request,"estado")   |
| 13  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable                | Expresión fuente                                                               | Resolución estática parcial                                                                                                              |
| --- | ----------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 12  | estado                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                       |
| 13  | zinicios                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                     |
| 36  | zsubsesion              | "SSM_CAREER_PLAN"                                                              | SSM_CAREER_PLAN                                                                                                                          |
| 37  | zmeta4object            | "SSM_CAREER_PLAN"                                                              | SSM_CAREER_PLAN                                                                                                                          |
| 38  | zmetodocarga            | zsubsesion + "!SSM_PRINCIPAL.CARGA"                                            | SSM_CAREER_PLAN{"!SSM_PRINCIPAL.CARGA"}                                                                                                  |
| 39  | znodo                   | "SSM_CAREER_PLAN"                                                              | SSM_CAREER_PLAN                                                                                                                          |
| 41  | zventanas               | "20"                                                                           | 20                                                                                                                                       |
| 42  | zvuelta                 | 5                                                                              | 5                                                                                                                                        |
| 43  | zdireccion              | "/mss_g3/mss_g3_p8.jsp"                                                        | /mss_g3/mss_g3_p8.jsp                                                                                                                    |
| 44  | zestado                 | "31"                                                                           | 31                                                                                                                                       |
| 48  | zregistroinicial        | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                     |
| 50  | zventana                | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                    |
| 51  | zregistrofinal          | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                       |
| 53  | zoutputdef              | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 54  | zmove                   | znodo + "[" + zregistroinicial + "]"                                           | SSM_CAREER_PLAN{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                            |
| 55  | zlectura                | zsubsesion + "!" + znodo                                                       | SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN                                                                                                      |
| 56  | zraiz                   | zsubsesion + "!" + znodo + "."                                                 | SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"."}                                                                                                 |
| 57  | zcomun                  | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 59  | ztipocarga              | "M4T"                                                                          | M4T                                                                                                                                      |
| 63  | zSNOMBREGLOBAL          | zcomun + "SCO_GB_NAME"                                                         | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                          |
| 64  | zSNOMBRE                | zcomun + "STD_N_FIRST_NAME"                                                    | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}                                     |
| 65  | zSAPELLIDOS             | zcomun + "STD_N_FAMILY_NAME_1"                                                 | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}                                  |
| 66  | zSPLAN                  | zcomun + "SCO_NM_CAREER_PLAN"                                                  | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_CAREER_PLAN"}                                   |
| 67  | zNJOB                   | zcomun + "STD_N_JOB_CODE"                                                      | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                       |
| 68  | zSJOB                   | zcomun + "SCO_ID_JOB_CODE"                                                     | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_JOB_CODE"}                                      |
| 69  | zpk0                    | zcomun + "STD_ID_HR"                                                           | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_HR"}                                            |
| 70  | zpk1                    | zcomun + "STD_OR_HR_PERIOD"                                                    | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_OR_HR_PERIOD"}                                     |
| 71  | zpk2                    | zcomun + "DT_START"                                                            | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                             |
| 72  | zCAREER_PLAN_LBL        | zcomun + "CAREER_PLAN_LBL"                                                     | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"CAREER_PLAN_LBL"}                                      |
| 73  | zCAREER_PLAN_DESC_LBL   | zcomun + "CAREER_PLAN_DESC_LBL"                                                | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"CAREER_PLAN_DESC_LBL"}                                 |
| 75  | zEMPLOYEE_LBL           | zcomun + "EMPLOYEE_LBL"                                                        | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"EMPLOYEE_LBL"}                                         |
| 76  | zCAREER_PLAN_S_LBL      | zcomun + "CAREER_PLAN_S_LBL"                                                   | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"CAREER_PLAN_S_LBL"}                                    |
| 77  | zJOB_LBL                | zcomun + "JOB_LBL"                                                             | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"JOB_LBL"}                                              |
| 78  | zCAREER_PLAN_DETAIL_LBL | zcomun + "CAREER_PLAN_DETAIL_LBL"                                              | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"CAREER_PLAN_DETAIL_LBL"}                               |
| 79  | zJOB_DETAIL_LBL_1       | zcomun + "JOB_DETAIL_LBL_1"                                                    | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"JOB_DETAIL_LBL_1"}                                     |
| 80  | zNO_DATA_LBL            | zcomun + "NO_DATA_LBL"                                                         | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"NO_DATA_LBL"}                                          |
| 83  | sIDPerson               | ""                                                                             |                                                                                                                                          |
| 84  | sOrHrPeriod             | ""                                                                             |                                                                                                                                          |
| 85  | sDtStart                | ""                                                                             |                                                                                                                                          |
| 95  | zcount                  | 0                                                                              | 0                                                                                                                                        |
| 96  | zcounti                 | 0                                                                              | 0                                                                                                                                        |
| 102 | zcountv                 | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                  |
| 128 | zregistroinicials       | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                         |
| 129 | zregistrofinals         | String.valueOf(zregistrofinal)                                                 | String.valueOf(zregistrofinal)                                                                                                           |
| 130 | zposicions              | "0"                                                                            | 0                                                                                                                                        |
| 130 | zcontrol                | 0                                                                              | 0                                                                                                                                        |
| 130 | zposicion               | 0                                                                              | 0                                                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                           |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 87  | m4:startpage | m4task=SSM_CAREER_PLAN                                                                                                                                       |
| 88  | m4:beginjob  |                                                                                                                                                              |
| 89  | m4:datadef   | m4o=SSM_CAREER_PLAN; m4name=SSM_CAREER_PLAN                                                                                                                  |
| 90  | m4:exec      | m4method=SSM_CAREER_PLAN{"!SSM_PRINCIPAL.CARGA"}                                                                                                             |
| 90  | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                                   |
| 91  | m4:outputdef | m4alias=SSM_CAREER_PLAN                                                                                                                                      |
| 91  | m4:param     | name=m4name0; value=SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 92  | m4:endjob    |                                                                                                                                                              |
| 93  | m4:move      |                                                                                                                                                              |
| 93  | m4:param     | name=SSM_CAREER_PLAN; value=SSM_CAREER_PLAN{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 131 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                                         |
| 134 | m4:item      | item=STD_ID_HR; htmlsafe=true; outputdef=SSM_CAREER_PLAN; var=                                                                                               |
| 136 | m4:item      | item=STD_OR_HR_PERIOD; htmlsafe=true; outputdef=SSM_CAREER_PLAN; var=                                                                                        |
| 138 | m4:item      | item=DT_START; htmlsafe=true; outputdef=SSM_CAREER_PLAN; var=                                                                                                |
| 140 | m4:item      | m4name=SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                        |
| 142 | m4:item      | m4name=SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_CAREER_PLAN"}; htmlsafe=true                                 |
| 143 | m4:item      | m4name=SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                     |
| 153 | m4:endpage   |                                                                                                                                                              |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 99  | getCount         | znodo,zsubsesion,znodo |
| 100 | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 18  | ver_plan   | a,b,c      |
| 26  | ver_puesto | a          |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 15  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 114 | &lt;%if (zcounti &gt; 0) {%&gt;                                                                                                          |
| 147 | &lt;%} else{%&gt;                                                                                                                        |
| 38  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";                                          |
| 49  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 51  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 53  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 54  | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                |
| 55  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 56  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                      |
| 57  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 63  | expresión de cálculo/transformación: String zSNOMBREGLOBAL = zcomun + "SCO_GB_NAME";                                                     |
| 64  | expresión de cálculo/transformación: String zSNOMBRE = zcomun + "STD_N_FIRST_NAME";                                                      |
| 65  | expresión de cálculo/transformación: String zSAPELLIDOS = zcomun + "STD_N_FAMILY_NAME_1";                                                |
| 66  | expresión de cálculo/transformación: String zSPLAN = zcomun + "SCO_NM_CAREER_PLAN";                                                      |
| 67  | expresión de cálculo/transformación: String zNJOB = zcomun + "STD_N_JOB_CODE";                                                           |
| 68  | expresión de cálculo/transformación: String zSJOB = zcomun + "SCO_ID_JOB_CODE";                                                          |
| 69  | expresión de cálculo/transformación: String zpk0 = zcomun + "STD_ID_HR";                                                                 |
| 70  | expresión de cálculo/transformación: String zpk1 = zcomun + "STD_OR_HR_PERIOD";                                                          |
| 71  | expresión de cálculo/transformación: String zpk2 = zcomun + "DT_START";                                                                  |
| 72  | expresión de cálculo/transformación: String zCAREER_PLAN_LBL = zcomun + "CAREER_PLAN_LBL";                                               |
| 73  | expresión de cálculo/transformación: String zCAREER_PLAN_DESC_LBL = zcomun + "CAREER_PLAN_DESC_LBL";                                     |
| 75  | expresión de cálculo/transformación: String zEMPLOYEE_LBL = zcomun + "EMPLOYEE_LBL";                                                     |
| 76  | expresión de cálculo/transformación: String zCAREER_PLAN_S_LBL = zcomun + "CAREER_PLAN_S_LBL";                                           |
| 77  | expresión de cálculo/transformación: String zJOB_LBL = zcomun + "JOB_LBL";                                                               |
| 78  | expresión de cálculo/transformación: String zCAREER_PLAN_DETAIL_LBL = zcomun + "CAREER_PLAN_DETAIL_LBL";                                 |
| 79  | expresión de cálculo/transformación: String zJOB_DETAIL_LBL_1 = zcomun + "JOB_DETAIL_LBL_1";                                             |
| 80  | expresión de cálculo/transformación: String zNO_DATA_LBL = zcomun + "NO_DATA_LBL";                                                       |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 9   | ../../mss_generico/espanol/menu_mss.jsp               |
| 33  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 34  | ../../sse_generico/espanol/generico_links.jsp         |
| 146 | ../../sse_generico/espanol/generico_ventanas.jsp      |
| 150 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                              |
| --- | -------------------------------------------------------------- |
| 7   | /css/estilo_mss.css                                            |
| 8   | /libreria/funciones_sse.js                                     |
| 107 | /iconos/noname_plan_carrera_133_100.gif                        |
| 119 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_pc.jsp?estado=31   |
| 124 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_desc.jsp?estado=31 |
| 142 | javascript:ver_plan(                                           |
| 143 | javascript:ver_puesto(                                         |
| 9   | ../../mss_generico/espanol/menu_mss.jsp                        |
| 33  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             |
| 34  | ../../sse_generico/espanol/generico_links.jsp                  |
| 43  | /mss_g3/mss_g3_p8.jsp                                          |
| 146 | ../../sse_generico/espanol/generico_ventanas.jsp               |
| 150 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                     | Resolución | Ficha / candidato                                                                                     |
| ------ | --- | -------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| BASE   | 9   | ../../mss_generico/espanol/menu_mss.jsp                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                      |
| BASE   | 33  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                |
| BASE   | 34  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)       |
| BASE   | 146 | ../../sse_generico/espanol/generico_ventanas.jsp               | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md) |
| BASE   | 150 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)          |
| BASE   | 8   | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                |
| BASE   | 119 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_pc.jsp?estado=31   | ausente    | P06                                                                                                   |
| BASE   | 124 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_desc.jsp?estado=31 | ausente    | P06                                                                                                   |
| BASE   | 142 | javascript:ver_plan(                                           | dinámica   | P06                                                                                                   |
| BASE   | 143 | javascript:ver_puesto(                                         | dinámica   | P06                                                                                                   |
| BASE   | 9   | ../../mss_generico/espanol/menu_mss.jsp                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                      |
| BASE   | 33  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                |
| BASE   | 34  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)       |
| BASE   | 43  | /mss_g3/mss_g3_p8.jsp                                          | ausente    | P06                                                                                                   |
| BASE   | 146 | ../../sse_generico/espanol/generico_ventanas.jsp               | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md) |
| BASE   | 150 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p8.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
