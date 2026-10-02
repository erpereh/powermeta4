# mss_list_employees

Identificador: `mss_generico/mss_list_employees.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave           | Texto                                                      | Ámbito | Diccionario                                                                                   |
| --------------- | ---------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------- |
| prof_cv.Label2  | Sí                                                         | BASE   | [translations/smco_prof_cv_es.properties:L10](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.Label3  | No                                                         | BASE   | [translations/smco_prof_cv_es.properties:L11](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.Title16 | Datos Personales del Responsable de la Unidad Organizativa | BASE   | [translations/smco_prof_cv_es.properties:L64](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.Title5  | Enviar Correo Electrónico                                  | BASE   | [translations/smco_prof_cv_es.properties:L53](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.Title6  | Acceder Página WEB Personal                                | BASE   | [translations/smco_prof_cv_es.properties:L54](../../referencias/literales/smco_prof_cv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/mss_list_employees.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mss_list_employees.jsp) | `869f5d3fb6ec7bd96bc1774fc97640779f29f6012cb90cc8d7c832551b6910b0` |    271 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/mss_list_employees.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/mss_list_employees.jsp) | `869f5d3fb6ec7bd96bc1774fc97640779f29f6012cb90cc8d7c832551b6910b0` |    271 |
| BASE / español    | [mss_generico/espanol/mss_list_employees.jsp](../../../../clon_portal/portal/mss_generico/espanol/mss_list_employees.jsp)                             | `869f5d3fb6ec7bd96bc1774fc97640779f29f6012cb90cc8d7c832551b6910b0` |    271 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/mss_list_employees.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mss_list_employees.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta             |
| --- | ------------------------------------ |
| 90  | [valor dinámico] - [valor dinámico]: |
| 143 | ');" title="[valor dinámico]"&gt;    |
| 148 | " title="[valor dinámico]"&gt;       |
| 219 | -                                    |
| 221 | -                                    |
| 223 | -                                    |
| 227 | -                                    |
| 231 | -                                    |
| 233 | -                                    |
| 236 | -                                    |
| 240 | -                                    |
| 242 | -                                    |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 89  | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/informacion_blanco.gif                                                                                                               |
| 143 | a       | href=javascript:open_WEB('&lt;m4:item m4name=; htmlsafe=true                                                                                                                       |
| 148 | a       | href=mailto:&lt;m4:item m4name=; htmlsafe=true                                                                                                                                     |
| 265 | a       | href=javascript:window.close(); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                 |
| 265 | img     | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 17  | WU              | getParameter(request,"WU") |

| L   | Variable            | Expresión fuente                                               | Resolución estática parcial                                                                             |
| --- | ------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 16  | zsubsesion          | "SSM_SET_WORK_UNIT_TO_SEE"                                     | SSM_SET_WORK_UNIT_TO_SEE                                                                                |
| 17  | id_wu               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WU") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WU")                                          |
| 19  | znodocabecera       | "SMCO_GENERIC_PERSON_HEADER"                                   | SMCO_GENERIC_PERSON_HEADER                                                                              |
| 20  | zoutputdefcabecera  | zsubsesion + "!" + znodocabecera + "[*]"                       | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[*]"}                                          |
| 22  | zcomun              | zsubsesion + "!" + znodocabecera + "[&amp;VAR.m4lix]" + "."    | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}                        |
| 24  | PERSDATAGBNAME      | zcomun + "SMCO_GB_NAME"                                        | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_GB_NAME"}        |
| 25  | PERSDATADTBIRTH     | zcomun + "SMCO_DT_BIRTH"                                       | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_DT_BIRTH"}       |
| 26  | PERSDATAGENDER      | zcomun + "SMCO_N_GENDER"                                       | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_N_GENDER"}       |
| 27  | PERSDATANATIONALITY | zcomun + "SMCO_NATIONALITY"                                    | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_NATIONALITY"}    |
| 28  | PERSDATAHOMEPAGE    | zcomun + "SMCO_HOME_PAGE"                                      | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_HOME_PAGE"}      |
| 29  | PERSDATASID         | zcomun + "SMCO_ID_PERSON"                                      | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_ID_PERSON"}      |
| 30  | PERSDATAEMAIL       | zcomun + "SMCO_EMAIL"                                          | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_EMAIL"}          |
| 31  | PERSDATAAGE         | zcomun + "SMCO_AGE"                                            | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_AGE"}            |
| 32  | PERSDATAPHONE       | zcomun + "SMCO_PHONE"                                          | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHONE"}          |
| 33  | PERSDATAMOVIL       | zcomun + "SMCO_PHONE_MOVIL"                                    | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHONE_MOVIL"}    |
| 35  | PERSDATAMARITAL     | zcomun + "SMCO_MARITAL_STATUS"                                 | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_MARITAL_STATUS"} |
| 37  | PERSDATAHIREDATA    | zcomun + "SMCO_HIRE_DATA"                                      | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_HIRE_DATA"}      |
| 40  | PERSDATAPERSONTYPE  | zcomun + "SMCO_PERSON_TYPE"                                    | SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PERSON_TYPE"}    |
| 58  | zfieldvis           | (String)pageContext.getAttribute("FIELDS_VISIBILITY")          | (String)pageContext.getAttribute("FIELDS_VISIBILITY")                                                   |
| 62  | icount              | 0                                                              | 0                                                                                                       |
| 67  | zcounti             | 0                                                              | 0                                                                                                       |
| 73  | zcountv             | String.valueOf(zcounti)                                        | String.valueOf(zcounti)                                                                                 |
| 74  | zposicions          | "0"                                                            | 0                                                                                                       |
| 75  | zcontrol            | 0                                                              | 0                                                                                                       |
| 76  | zposicion           | 0                                                              | 0                                                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag             | Contrato declarado                                                                                                                      |
| --- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 44  | m4:startpage    | m4task=SSM_SET_WORK_UNIT_TO_SEE                                                                                                         |
| 44  | m4:beginjob     |                                                                                                                                         |
| 45  | m4:datadef      | m4o=SSM_SET_WORK_UNIT_TO_SEE; m4name=SSM_SET_WORK_UNIT_TO_SEE                                                                           |
| 46  | m4:exec         | node=SSM_SET_WORK_UNIT_TO_SEE; method=SMCO_LOAD_WUNIT_EMPLOYEE_LIST; m4object=SSM_SET_WORK_UNIT_TO_SEE                                  |
| 47  | m4:param        | name=ARG_WORK_UNIT; value=(id_wu)                                                                                                       |
| 51  | m4:outputdef    | node=SSM_EMPLOYEES_4_WUNIT; m4alias=EMPL_WORK_U; m4object=SSM_SET_WORK_UNIT_TO_SEE                                                      |
| 52  | m4:exec         | node=SSM_EMPLOYEES_4_WUNIT; alias=emple_wu_count; method=Count; m4object=SSM_SET_WORK_UNIT_TO_SEE                                       |
| 54  | m4:outputdef    |                                                                                                                                         |
| 54  | m4:param        | name=m4name0; value=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[*]"}                                                      |
| 55  | m4:endjob       |                                                                                                                                         |
| 56  | m4:getapplparam | section=PORTAL_PARAM; key=FIELDS_VISIBILITY; output=jsp                                                                                 |
| 63  | m4:outputexec   | var=count; alias=emple_wu_count                                                                                                         |
| 91  | m4:item         | item=SSM_ID_WORK_UNIT; htmlsafe=true; outputdef=EMPL_WORK_U                                                                             |
| 91  | m4:item         | item=SSM_N_WORK_UNIT; htmlsafe=true; outputdef=EMPL_WORK_U                                                                              |
| 92  | m4:item         | item=SSM_NUM_EMPLOYEES_4_WORK_UNIT; htmlsafe=true; outputdef=EMPL_WORK_U                                                                |
| 98  | m4:loop         | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                    |
| 105 | m4:item         | m4varname=is_key_employee; m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_KEY_EMPLOYEE"} |
| 106 | m4:item         | m4varname=this_age; m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_AGE"}                 |
| 139 | m4:label        | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_GB_NAME"}                                 |
| 140 | m4:item         | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_GB_NAME"}                                 |
| 142 | m4:label        | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_HOME_PAGE"}                               |
| 144 | m4:item         | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_HOME_PAGE"}; htmlsafe=true                |
| 147 | m4:label        | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_EMAIL"}                                   |
| 148 | m4:item         | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_EMAIL"}; htmlsafe=true                    |
| 150 | m4:label        | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHONE"}                                   |
| 151 | m4:item         | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHONE"}                                   |
| 154 | m4:label        | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHONE_MOVIL"}                             |
| 155 | m4:item         | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHONE_MOVIL"}                             |
| 159 | m4:label        | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_KEY_EMPLOYEE"}                            |
| 167 | m4:label        | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_HIRE_DATA"}                               |
| 168 | m4:item         | m4name=SSM_SET_WORK_UNIT_TO_SEE{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_HIRE_DATA"}                               |
| 207 | m4:dataloop     | outputdef=EMPL_WORK_U                                                                                                                   |
| 213 | m4:current      | var=current; outputdef=EMPL_WORK_U                                                                                                      |
| 220 | m4:item         | item=SCO_ID_HR; htmlsafe=true; outputdef=EMPL_WORK_U                                                                                    |
| 220 | m4:item         | item=SCO_GB_NAME; htmlsafe=true; outputdef=EMPL_WORK_U                                                                                  |
| 222 | m4:item         | item=SCO_OR_HR_ROLE; htmlsafe=true; outputdef=EMPL_WORK_U                                                                               |
| 222 | m4:item         | item=SCO_N_ROLE; htmlsafe=true; outputdef=EMPL_WORK_U                                                                                   |
| 224 | m4:item         | item=SCO_ID_JOB_CODE; htmlsafe=true; outputdef=EMPL_WORK_U                                                                              |
| 224 | m4:item         | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=EMPL_WORK_U                                                                               |
| 228 | m4:item         | item=SCO_ID_HR; htmlsafe=true; outputdef=EMPL_WORK_U                                                                                    |
| 228 | m4:item         | item=SCO_GB_NAME; htmlsafe=true; outputdef=EMPL_WORK_U                                                                                  |
| 230 | m4:item         | item=STD_DT_BIRTH; htmlsafe=true; outputdef=EMPL_WORK_U; m4format=d MMMM                                                                |
| 232 | m4:item         | item=SCO_OR_HR_ROLE; htmlsafe=true; outputdef=EMPL_WORK_U                                                                               |
| 232 | m4:item         | item=SCO_N_ROLE; htmlsafe=true; outputdef=EMPL_WORK_U                                                                                   |
| 234 | m4:item         | item=SCO_ID_JOB_CODE; htmlsafe=true; outputdef=EMPL_WORK_U                                                                              |
| 234 | m4:item         | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=EMPL_WORK_U                                                                               |
| 237 | m4:item         | item=SCO_ID_HR; htmlsafe=true; outputdef=EMPL_WORK_U                                                                                    |
| 237 | m4:item         | item=SCO_GB_NAME; htmlsafe=true; outputdef=EMPL_WORK_U                                                                                  |
| 239 | m4:item         | item=STD_DT_BIRTH; htmlsafe=true; outputdef=EMPL_WORK_U                                                                                 |
| 241 | m4:item         | item=SCO_OR_HR_ROLE; htmlsafe=true; outputdef=EMPL_WORK_U                                                                               |
| 241 | m4:item         | item=SCO_N_ROLE; htmlsafe=true; outputdef=EMPL_WORK_U                                                                                   |
| 243 | m4:item         | item=SCO_ID_JOB_CODE; htmlsafe=true; outputdef=EMPL_WORK_U                                                                              |
| 243 | m4:item         | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=EMPL_WORK_U                                                                               |
| 271 | m4:endpage      |                                                                                                                                         |

| L   | Operación        | Argumentos literales        |
| --- | ---------------- | --------------------------- |
| 70  | getCountInClient | "",zsubsesion,znodocabecera |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos |
| --- | --------- | ---------- |
| 109 | open_WEB  | path       |
| 114 | load_prof | empleado   |
| 120 | load_cv   | empleado   |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 160 | &lt;% if(is_key_employee.equals("1")) { %&gt;                                                                                                                                                                                                                       |
| 162 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                    |
| 178 | &lt;%if (icount &gt; 0) {%&gt;                                                                                                                                                                                                                                      |
| 188 | &lt;%if(zfieldvis.equals("0")){%&gt;                                                                                                                                                                                                                                |
| 192 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                    |
| 193 | &lt;%if(zfieldvis.equals("2")){%&gt;                                                                                                                                                                                                                                |
| 198 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                    |
| 218 | &lt;%if(zfieldvis.equals("0")){%&gt;                                                                                                                                                                                                                                |
| 225 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                    |
| 226 | &lt;%if(zfieldvis.equals("2")){%&gt;                                                                                                                                                                                                                                |
| 235 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                    |
| 252 | }else{%&gt;                                                                                                                                                                                                                                                         |
| 20  | expresión de cálculo/transformación: String zoutputdefcabecera = zsubsesion + "!" + znodocabecera + "[*]";                                                                                                                                                          |
| 22  | expresión de cálculo/transformación: String zcomun = zsubsesion + "!" + znodocabecera + "[&amp;VAR.m4lix]" + ".";                                                                                                                                                   |
| 24  | expresión de cálculo/transformación: String PERSDATAGBNAME = zcomun + "SMCO_GB_NAME";                                                                                                                                                                               |
| 25  | expresión de cálculo/transformación: String PERSDATADTBIRTH = zcomun + "SMCO_DT_BIRTH";                                                                                                                                                                             |
| 26  | expresión de cálculo/transformación: String PERSDATAGENDER = zcomun + "SMCO_N_GENDER";                                                                                                                                                                              |
| 27  | expresión de cálculo/transformación: String PERSDATANATIONALITY = zcomun + "SMCO_NATIONALITY";                                                                                                                                                                      |
| 28  | expresión de cálculo/transformación: String PERSDATAHOMEPAGE = zcomun + "SMCO_HOME_PAGE";                                                                                                                                                                           |
| 29  | expresión de cálculo/transformación: String PERSDATASID = zcomun + "SMCO_ID_PERSON";                                                                                                                                                                                |
| 30  | expresión de cálculo/transformación: String PERSDATAEMAIL = zcomun + "SMCO_EMAIL";                                                                                                                                                                                  |
| 31  | expresión de cálculo/transformación: String PERSDATAAGE= zcomun + "SMCO_AGE";                                                                                                                                                                                       |
| 32  | expresión de cálculo/transformación: String PERSDATAPHONE= zcomun + "SMCO_PHONE";                                                                                                                                                                                   |
| 33  | expresión de cálculo/transformación: String PERSDATAMOVIL= zcomun + "SMCO_PHONE_MOVIL";                                                                                                                                                                             |
| 35  | expresión de cálculo/transformación: String PERSDATAMARITAL = zcomun + "SMCO_MARITAL_STATUS";                                                                                                                                                                       |
| 37  | expresión de cálculo/transformación: String PERSDATAHIREDATA = zcomun + "SMCO_HIRE_DATA";                                                                                                                                                                           |
| 38  | expresión de cálculo/transformación: String PERSDATAKEYEMPLOYEE = zcomun + "SMCO_KEY_EMPLOYEE";                                                                                                                                                                     |
| 40  | expresión de cálculo/transformación: String PERSDATAPERSONTYPE = zcomun + "SMCO_PERSON_TYPE";                                                                                                                                                                       |
| 64  | expresión de cálculo/transformación: &lt;% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%&gt;                                                                                                                                        |
| 91  | expresión de cálculo/transformación: &lt;b&gt;&lt;u&gt;&lt;m4:item item="SSM_ID_WORK_UNIT" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt; - &lt;m4:item item="SSM_N_WORK_UNIT" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt;&lt;/b&gt;&lt;/u&gt;&lt;br/&gt;&lt;br/&gt; |
| 116 | expresión de cálculo/transformación: var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=" + empleado;                                                                                                               |
| 122 | expresión de cálculo/transformación: var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person=" + empleado + "&amp;RET=DAT";                                                                 |
| 220 | expresión de cálculo/transformación: &lt;m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt; - &lt;m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt;&lt;/td&gt;                                                             |
| 222 | expresión de cálculo/transformación: &lt;m4:item item="SCO_OR_HR_ROLE" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt; - &lt;m4:item item="SCO_N_ROLE" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt;&lt;/td&gt;                                                         |
| 224 | expresión de cálculo/transformación: &lt;m4:item item="SCO_ID_JOB_CODE" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt; - &lt;m4:item item="STD_N_JOB_CODE" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt;&lt;/td&gt;                                                    |
| 228 | expresión de cálculo/transformación: &lt;m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt; - &lt;m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt;&lt;/td&gt;                                                             |
| 232 | expresión de cálculo/transformación: &lt;m4:item item="SCO_OR_HR_ROLE" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt; - &lt;m4:item item="SCO_N_ROLE" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt;&lt;/td&gt;                                                         |
| 234 | expresión de cálculo/transformación: &lt;m4:item item="SCO_ID_JOB_CODE" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt; - &lt;m4:item item="STD_N_JOB_CODE" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt;&lt;/td&gt;                                                    |
| 237 | expresión de cálculo/transformación: &lt;m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt; - &lt;m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt;&lt;/td&gt;                                                             |
| 241 | expresión de cálculo/transformación: &lt;m4:item item="SCO_OR_HR_ROLE" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt; - &lt;m4:item item="SCO_N_ROLE" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt;&lt;/td&gt;                                                         |
| 243 | expresión de cálculo/transformación: &lt;m4:item item="SCO_ID_JOB_CODE" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt; - &lt;m4:item item="STD_N_JOB_CODE" htmlsafe="true" outputdef="EMPL_WORK_U"/&gt;&lt;/td&gt;                                                    |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 2   | ../../mss_g1/smco_prof_cv_trans.jsp |
| 9   | ../../mss_generico/mss_cr_trans.jsp |

| L   | Destino / recurso                                                                                                       |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 8   | /libreria/funciones_sse.js                                                                                              |
| 11  | /css/estilo_mss.css                                                                                                     |
| 89  | /iconos/informacion_blanco.gif                                                                                          |
| 143 | javascript:open_WEB(                                                                                                    |
| 148 | mailto:&lt;m4:item m4name=                                                                                              |
| 265 | javascript:window.close()                                                                                               |
| 265 | /iconos/entrar_blanco.gif                                                                                               |
| 2   | ../../mss_g1/smco_prof_cv_trans.jsp                                                                                     |
| 9   | ../../mss_generico/mss_cr_trans.jsp                                                                                     |
| 116 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=                              |
| 122 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                              | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ----------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 2   | ../../mss_g1/smco_prof_cv_trans.jsp                                                                                     | física     | [mss_g1/smco_prof_cv_trans.jsp](../equipo/mss_g1--smco_prof_cv_trans.md)                                                                                                       |
| COLL   | 9   | ../../mss_generico/mss_cr_trans.jsp                                                                                     | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| COLL   | 8   | /libreria/funciones_sse.js                                                                                              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 143 | javascript:open_WEB(                                                                                                    | dinámica   | P06                                                                                                                                                                            |
| COLL   | 265 | javascript:window.close()                                                                                               | dinámica   | P06                                                                                                                                                                            |
| COLL   | 2   | ../../mss_g1/smco_prof_cv_trans.jsp                                                                                     | física     | [mss_g1/smco_prof_cv_trans.jsp](../equipo/mss_g1--smco_prof_cv_trans.md)                                                                                                       |
| COLL   | 9   | ../../mss_generico/mss_cr_trans.jsp                                                                                     | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| COLL   | 116 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=                              | ausente    | P06                                                                                                                                                                            |
| COLL   | 122 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person= | ausente    | P06                                                                                                                                                                            |
| IBER   | 2   | ../../mss_g1/smco_prof_cv_trans.jsp                                                                                     | física     | [mss_g1/smco_prof_cv_trans.jsp](../equipo/mss_g1--smco_prof_cv_trans.md)                                                                                                       |
| IBER   | 9   | ../../mss_generico/mss_cr_trans.jsp                                                                                     | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| IBER   | 8   | /libreria/funciones_sse.js                                                                                              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 143 | javascript:open_WEB(                                                                                                    | dinámica   | P06                                                                                                                                                                            |
| IBER   | 265 | javascript:window.close()                                                                                               | dinámica   | P06                                                                                                                                                                            |
| IBER   | 2   | ../../mss_g1/smco_prof_cv_trans.jsp                                                                                     | física     | [mss_g1/smco_prof_cv_trans.jsp](../equipo/mss_g1--smco_prof_cv_trans.md)                                                                                                       |
| IBER   | 9   | ../../mss_generico/mss_cr_trans.jsp                                                                                     | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| IBER   | 116 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=                              | ausente    | P06                                                                                                                                                                            |
| IBER   | 122 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person= | ausente    | P06                                                                                                                                                                            |
| BASE   | 2   | ../../mss_g1/smco_prof_cv_trans.jsp                                                                                     | física     | [mss_g1/smco_prof_cv_trans.jsp](../equipo/mss_g1--smco_prof_cv_trans.md)                                                                                                       |
| BASE   | 9   | ../../mss_generico/mss_cr_trans.jsp                                                                                     | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| BASE   | 8   | /libreria/funciones_sse.js                                                                                              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 143 | javascript:open_WEB(                                                                                                    | dinámica   | P06                                                                                                                                                                            |
| BASE   | 265 | javascript:window.close()                                                                                               | dinámica   | P06                                                                                                                                                                            |
| BASE   | 2   | ../../mss_g1/smco_prof_cv_trans.jsp                                                                                     | física     | [mss_g1/smco_prof_cv_trans.jsp](../equipo/mss_g1--smco_prof_cv_trans.md)                                                                                                       |
| BASE   | 9   | ../../mss_generico/mss_cr_trans.jsp                                                                                     | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| BASE   | 116 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=                              | ausente    | P06                                                                                                                                                                            |
| BASE   | 122 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person= | ausente    | P06                                                                                                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/mss_list_employees.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
