# mss_list_all_employees_noenlaces

Identificador: `mss_generico/mss_list_all_employees_noenlaces.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/mss_list_all_employees_noenlaces.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mss_list_all_employees_noenlaces.jsp) | `31e089b6a64535ebd686cdd50ac0430a13540101bce8ca7614373d2142729c5f` |    223 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/mss_list_all_employees_noenlaces.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/mss_list_all_employees_noenlaces.jsp) | `31e089b6a64535ebd686cdd50ac0430a13540101bce8ca7614373d2142729c5f` |    223 |
| BASE / español    | [mss_generico/espanol/mss_list_all_employees_noenlaces.jsp](../../../../clon_portal/portal/mss_generico/espanol/mss_list_all_employees_noenlaces.jsp)                             | `31e089b6a64535ebd686cdd50ac0430a13540101bce8ca7614373d2142729c5f` |    223 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/mss_list_all_employees_noenlaces.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mss_list_all_employees_noenlaces.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 136 | -                        |
| 140 | -                        |
| 141 | -                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 107 | img     | src=/iconos/noname_mujer_53_100.gif; width=100; height=100                                                                                                                         |
| 119 | form    | action=/servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees.jsp?estado=11; method=post; name=oculto; id=oculto                                                           |
| 119 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                    |
| 156 | a       | href=javascript:allManagerscollapse.slideit();thisChange('1'); title=JSP_EXPR_Mss_cr.getProperty(                                                                                  |
| 156 | img     | src=/iconos/doble_flecha_20.png; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                    |
| 163 | a       | href=javascript:allManagerscollapse.slideit();thisChange('2'); title=JSP_EXPR_Mss_cr.getProperty(                                                                                  |
| 163 | img     | src=/iconos/doble_flecha_20.png; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                    |
| 215 | a       | href=javascript:window.close(); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                 |
| 215 | img     | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 13  | estado          | getParameter(request,"estado")   |
| 14  | zinicios        | getParameter(request,"zinicios") |
| 30  | wunits          | getParameter(request,"wunits")   |

| L   | Variable            | Expresión fuente                                                                    | Resolución estática parcial                                                                                                                             |
| --- | ------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                      |
| 14  | zinicios            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                    |
| 30  | id_wunits           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wunits")                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wunits")                                                                                      |
| 35  | i                   | 0                                                                                   | 0                                                                                                                                                       |
| 42  | zsubsesion          | "SSM_SET_WORK_UNIT_TO_SEE"                                                          | SSM_SET_WORK_UNIT_TO_SEE                                                                                                                                |
| 43  | zmeta4object        | "SSM_SET_WORK_UNIT_TO_SEE"                                                          | SSM_SET_WORK_UNIT_TO_SEE                                                                                                                                |
| 44  | zmetodocarga        | zsubsesion + "!SSM_SET_WORK_UNIT_TO_SEE.SSM_VIEW_ALL_EMPLOYEES"                     | SSM_SET_WORK_UNIT_TO_SEE{"!SSM_SET_WORK_UNIT_TO_SEE.SSM_VIEW_ALL_EMPLOYEES"}                                                                            |
| 45  | znodo               | "SSM_EMPLOYEES_4_WUNIT"                                                             | SSM_EMPLOYEES_4_WUNIT                                                                                                                                   |
| 46  | znodo_managers      | "SMCO_VIEW_ALL_MANAGERS"                                                            | SMCO_VIEW_ALL_MANAGERS                                                                                                                                  |
| 47  | zcomun              | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                   | SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}                                                   |
| 48  | zcomun_managers     | znodo_managers + ":" + zsubsesion + "!" + znodo_managers + "[&amp;VAR.m4lix]" + "." | SMCO_VIEW_ALL_MANAGERS{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_VIEW_ALL_MANAGERS{"[&amp;VAR.m4lix]"}{"."}                                                 |
| 50  | zventanas           | "50"                                                                                | 50                                                                                                                                                      |
| 51  | zvuelta             | 5                                                                                   | 5                                                                                                                                                       |
| 52  | zdireccion          | "/mss_generico/mss_list_all_employees.jsp"                                          | /mss_generico/mss_list_all_employees.jsp                                                                                                                |
| 54  | ziterator           | znodo + ":" + zsubsesion + "!" + znodo                                              | SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT                                                                            |
| 55  | zregistroinicial    | Integer.valueOf(zinicios).intValue()                                                | Integer.valueOf(zinicios).intValue()                                                                                                                    |
| 57  | zventana            | Integer.valueOf(zventanas).intValue()                                               | Integer.valueOf(zventanas).intValue()                                                                                                                   |
| 58  | zregistrofinal      | zregistroinicial + zventana - 1                                                     | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                      |
| 59  | zmove               | znodo + ":" + znodo + "["+zregistroinicial+"]"                                      | SSM_EMPLOYEES_4_WUNIT{":"}SSM_EMPLOYEES_4_WUNIT{"["}Integer.valueOf(zinicios).intValue()]                                                               |
| 60  | zoutputdef          | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"      | SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 61  | ztipocarga          | "ALL"                                                                               | ALL                                                                                                                                                     |
| 63  | zmove_managers      | znodo_managers + ":" + znodo_managers + "[FIRST]"                                   | SMCO_VIEW_ALL_MANAGERS{":"}SMCO_VIEW_ALL_MANAGERS{"[FIRST]"}                                                                                            |
| 64  | zoutputdef_managers | zsubsesion + "!" + znodo_managers + "[*]"                                           | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_VIEW_ALL_MANAGERS{"[*]"}                                                                                              |
| 66  | zHR                 | zcomun + "SCO_ID_HR"                                                                | SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_HR"}                                      |
| 67  | zNAME               | zcomun + "SCO_GB_NAME"                                                              | SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                    |
| 68  | zJOBCODE            | zcomun + "SCO_ID_JOB_CODE"                                                          | SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_JOB_CODE"}                                |
| 69  | zROLE               | zcomun + "SCO_N_ROLE"                                                               | SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ROLE"}                                     |
| 70  | zORDROLE            | zcomun + "SCO_OR_HR_ROLE"                                                           | SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_HR_ROLE"}                                 |
| 71  | zBIRTH              | zcomun + "STD_DT_BIRTH"                                                             | SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_BIRTH"}                                   |
| 72  | zJOBNAME            | zcomun + "STD_N_JOB_CODE"                                                           | SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                 |
| 84  | zcount              | 0                                                                                   | 0                                                                                                                                                       |
| 85  | zcounti             | 0                                                                                   | 0                                                                                                                                                       |
| 91  | zcountv             | String.valueOf(zcounti)                                                             | String.valueOf(zcounti)                                                                                                                                 |
| 93  | zcount_managers     | 0                                                                                   | 0                                                                                                                                                       |
| 94  | zcounti_managers    | 0                                                                                   | 0                                                                                                                                                       |
| 100 | zcountv_managers    | String.valueOf(zcounti_managers)                                                    | String.valueOf(zcounti_managers)                                                                                                                        |
| 114 | zregistroinicials   | String.valueOf(zregistroinicial)                                                    | String.valueOf(zregistroinicial)                                                                                                                        |
| 115 | zregistrofinals     | String.valueOf(zregistroinicial + zcounti - 1)                                      | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                         |
| 116 | zposicions          | "0"                                                                                 | 0                                                                                                                                                       |
| 117 | zcontrol            | 0                                                                                   | 0                                                                                                                                                       |
| 118 | zposicion           | 0                                                                                   | 0                                                                                                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                          |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 75  | m4:startpage | m4task=SSM_SET_WORK_UNIT_TO_SEE                                                                                                                                             |
| 75  | m4:beginjob  |                                                                                                                                                                             |
| 76  | m4:datadef   | m4o=SSM_SET_WORK_UNIT_TO_SEE; m4name=SSM_SET_WORK_UNIT_TO_SEE                                                                                                               |
| 77  | m4:exec      | m4method=SSM_SET_WORK_UNIT_TO_SEE{"!SSM_SET_WORK_UNIT_TO_SEE.SSM_VIEW_ALL_EMPLOYEES"}                                                                                       |
| 77  | m4:param     | name=ARG_ALL_WUNITS; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wunits")                                                                               |
| 78  | m4:outputdef | m4alias=SSM_EMPLOYEES_4_WUNIT                                                                                                                                               |
| 78  | m4:param     | name=m4name0; value=SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 79  | m4:outputdef | m4alias=SMCO_VIEW_ALL_MANAGERS                                                                                                                                              |
| 79  | m4:param     | name=m4name0; value=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_VIEW_ALL_MANAGERS{"[*]"}                                                                                              |
| 80  | m4:endjob    |                                                                                                                                                                             |
| 81  | m4:move      |                                                                                                                                                                             |
| 81  | m4:param     | name=SSM_SET_WORK_UNIT_TO_SEE; value=SSM_EMPLOYEES_4_WUNIT{":"}SSM_EMPLOYEES_4_WUNIT{"["}Integer.valueOf(zinicios).intValue()]                                              |
| 82  | m4:move      |                                                                                                                                                                             |
| 82  | m4:param     | name=SSM_SET_WORK_UNIT_TO_SEE; value=SMCO_VIEW_ALL_MANAGERS{":"}SMCO_VIEW_ALL_MANAGERS{"[FIRST]"}                                                                           |
| 134 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                   |
| 137 | m4:item      | m4name=SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_HR"}; htmlsafe=true; m4varname=sIdHREnc                |
| 139 | m4:item      | m4name=SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_HR"}                                                   |
| 139 | m4:item      | m4name=SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                                 |
| 140 | m4:item      | m4name=SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_HR_ROLE"}                                              |
| 140 | m4:item      | m4name=SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ROLE"}                                                  |
| 141 | m4:item      | m4name=SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_JOB_CODE"}                                             |
| 141 | m4:item      | m4name=SSM_EMPLOYEES_4_WUNIT{":"}SSM_SET_WORK_UNIT_TO_SEE{"!"}SSM_EMPLOYEES_4_WUNIT{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                              |
| 174 | m4:dataloop  | outputdef=SMCO_VIEW_ALL_MANAGERS                                                                                                                                            |
| 176 | m4:item      | item=SMCO_MANAGER_WHOLE_NAME; htmlsafe=true; outputdef=SMCO_VIEW_ALL_MANAGERS                                                                                               |
| 177 | m4:item      | item=SMCO_MANAGER_4_THIS_WUNIT; htmlsafe=true; outputdef=SMCO_VIEW_ALL_MANAGERS                                                                                             |
| 178 | m4:item      | item=SMCO_MANAGER_4_THIS_WUNIT_NM; htmlsafe=true; outputdef=SMCO_VIEW_ALL_MANAGERS                                                                                          |
| 221 | m4:endpage   |                                                                                                                                                                             |

| L   | Operación        | Argumentos literales                     |
| --- | ---------------- | ---------------------------------------- |
| 88  | getCount         | znodo,zsubsesion,znodo                   |
| 89  | getCountInClient | znodo,zsubsesion,znodo                   |
| 97  | getCount         | znodo_managers,zsubsesion,znodo_managers |
| 98  | getCountInClient | znodo_managers,zsubsesion,znodo_managers |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 20  | load_prof  | empleado   |
| 189 | thisChange | tipo       |

| L   | Condición / acción / mensaje literal                                                                                                                  |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="01";}                                                                                      |
| 16  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                               |
| 32  | if (id_wunits != null) {                                                                                                                              |
| 38  | } else {                                                                                                                                              |
| 113 | &lt;%if (zcounti &gt; 0) {                                                                                                                            |
| 146 | &lt;%}else{%&gt;                                                                                                                                      |
| 191 | if (tipo=='1')                                                                                                                                        |
| 197 | if (tipo=='2')                                                                                                                                        |
| 21  | expresión de cálculo/transformación: var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=" + empleado; |
| 44  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_SET_WORK_UNIT_TO_SEE.SSM_VIEW_ALL_EMPLOYEES";                           |
| 47  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                               |
| 48  | expresión de cálculo/transformación: String zcomun_managers = znodo_managers + ":" + zsubsesion + "!" + znodo_managers + "[&amp;VAR.m4lix]" + ".";    |
| 54  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                                       |
| 56  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                         |
| 58  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                            |
| 59  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";                                                   |
| 60  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";              |
| 63  | expresión de cálculo/transformación: String zmove_managers = znodo_managers + ":" + znodo_managers + "[FIRST]";                                       |
| 64  | expresión de cálculo/transformación: String zoutputdef_managers = zsubsesion + "!" + znodo_managers + "[*]";                                          |
| 66  | expresión de cálculo/transformación: String zHR = zcomun + "SCO_ID_HR";                                                                               |
| 67  | expresión de cálculo/transformación: String zNAME = zcomun + "SCO_GB_NAME";                                                                           |
| 68  | expresión de cálculo/transformación: String zJOBCODE = zcomun + "SCO_ID_JOB_CODE";                                                                    |
| 69  | expresión de cálculo/transformación: String zROLE = zcomun + "SCO_N_ROLE";                                                                            |
| 70  | expresión de cálculo/transformación: String zORDROLE = zcomun + "SCO_OR_HR_ROLE";                                                                     |
| 71  | expresión de cálculo/transformación: String zBIRTH = zcomun + "STD_DT_BIRTH";                                                                         |
| 72  | expresión de cálculo/transformación: String zJOBNAME = zcomun + "STD_N_JOB_CODE";                                                                     |
| 115 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                         |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 8   | ../../mss_generico/mss_cr_trans.jsp                   |
| 145 | ../../sse_generico/espanol/generico_ventanas_post.jsp |

| L   | Destino / recurso                                                                          |
| --- | ------------------------------------------------------------------------------------------ |
| 7   | /libreria/funciones_sse.js                                                                 |
| 10  | /css/estilo_mss.css                                                                        |
| 107 | /iconos/noname_mujer_53_100.gif                                                            |
| 119 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees.jsp?estado=11               |
| 156 | javascript:allManagerscollapse.slideit();thisChange(                                       |
| 156 | /iconos/doble_flecha_20.png                                                                |
| 163 | javascript:allManagerscollapse.slideit();thisChange(                                       |
| 163 | /iconos/doble_flecha_20.png                                                                |
| 215 | javascript:window.close()                                                                  |
| 215 | /iconos/entrar_blanco.gif                                                                  |
| 8   | ../../mss_generico/mss_cr_trans.jsp                                                        |
| 21  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person= |
| 52  | /mss_generico/mss_list_all_employees.jsp                                                   |
| 145 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                 | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ------------------------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 8   | ../../mss_generico/mss_cr_trans.jsp                                                        | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| COLL   | 145 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                      | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| COLL   | 7   | /libreria/funciones_sse.js                                                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 119 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees.jsp?estado=11               | ausente    | P06                                                                                                                                                                            |
| COLL   | 156 | javascript:allManagerscollapse.slideit();thisChange(                                       | dinámica   | P06                                                                                                                                                                            |
| COLL   | 163 | javascript:allManagerscollapse.slideit();thisChange(                                       | dinámica   | P06                                                                                                                                                                            |
| COLL   | 215 | javascript:window.close()                                                                  | dinámica   | P06                                                                                                                                                                            |
| COLL   | 8   | ../../mss_generico/mss_cr_trans.jsp                                                        | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| COLL   | 21  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person= | ausente    | P06                                                                                                                                                                            |
| COLL   | 52  | /mss_generico/mss_list_all_employees.jsp                                                   | ausente    | P06                                                                                                                                                                            |
| COLL   | 145 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                      | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| IBER   | 8   | ../../mss_generico/mss_cr_trans.jsp                                                        | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| IBER   | 145 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                      | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| IBER   | 7   | /libreria/funciones_sse.js                                                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 119 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees.jsp?estado=11               | ausente    | P06                                                                                                                                                                            |
| IBER   | 156 | javascript:allManagerscollapse.slideit();thisChange(                                       | dinámica   | P06                                                                                                                                                                            |
| IBER   | 163 | javascript:allManagerscollapse.slideit();thisChange(                                       | dinámica   | P06                                                                                                                                                                            |
| IBER   | 215 | javascript:window.close()                                                                  | dinámica   | P06                                                                                                                                                                            |
| IBER   | 8   | ../../mss_generico/mss_cr_trans.jsp                                                        | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| IBER   | 21  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person= | ausente    | P06                                                                                                                                                                            |
| IBER   | 52  | /mss_generico/mss_list_all_employees.jsp                                                   | ausente    | P06                                                                                                                                                                            |
| IBER   | 145 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                      | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp                                                        | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| BASE   | 145 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                      | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| BASE   | 7   | /libreria/funciones_sse.js                                                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 119 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees.jsp?estado=11               | ausente    | P06                                                                                                                                                                            |
| BASE   | 156 | javascript:allManagerscollapse.slideit();thisChange(                                       | dinámica   | P06                                                                                                                                                                            |
| BASE   | 163 | javascript:allManagerscollapse.slideit();thisChange(                                       | dinámica   | P06                                                                                                                                                                            |
| BASE   | 215 | javascript:window.close()                                                                  | dinámica   | P06                                                                                                                                                                            |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp                                                        | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| BASE   | 21  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person= | ausente    | P06                                                                                                                                                                            |
| BASE   | 52  | /mss_generico/mss_list_all_employees.jsp                                                   | ausente    | P06                                                                                                                                                                            |
| BASE   | 145 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                      | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/mss_list_all_employees_noenlaces.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
