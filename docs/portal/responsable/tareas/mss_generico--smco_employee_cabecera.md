# smco_employee_cabecera

Identificador: `mss_generico/smco_employee_cabecera.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave           | Texto                            | Ámbito | Diccionario                                                                                   |
| --------------- | -------------------------------- | ------ | --------------------------------------------------------------------------------------------- |
| prof_cv.Alt     | Fotografía                       | BASE   | [translations/smco_prof_cv_es.properties:L68](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.Label2  | Sí                               | BASE   | [translations/smco_prof_cv_es.properties:L10](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.Label3  | No                               | BASE   | [translations/smco_prof_cv_es.properties:L11](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.MasCV   | CV del Candidato                 | BASE   | [translations/smco_prof_cv_es.properties:L69](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.MasProf | Datos Profesionales del Empleado | BASE   | [translations/smco_prof_cv_es.properties:L70](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.Title4  | Datos Personales                 | BASE   | [translations/smco_prof_cv_es.properties:L52](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.Title5  | Enviar Correo Electrónico        | BASE   | [translations/smco_prof_cv_es.properties:L53](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.Title6  | Acceder Página WEB Personal      | BASE   | [translations/smco_prof_cv_es.properties:L54](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.anios   | años                             | BASE   | [translations/smco_prof_cv_es.properties:L71](../../referencias/literales/smco_prof_cv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/mss_generico/smco_employee_cabecera.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/smco_employee_cabecera.jsp) | `a1e7b2a9f68d4a757cde32f7a3aa950da4cd9027431ac0ba4a7b9f103f05dd25` |    161 |
| IBER / compartido | [m4custom/IBER/mss_generico/smco_employee_cabecera.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/smco_employee_cabecera.jsp) | `a1e7b2a9f68d4a757cde32f7a3aa950da4cd9027431ac0ba4a7b9f103f05dd25` |    161 |
| BASE / compartido | [mss_generico/smco_employee_cabecera.jsp](../../../../clon_portal/portal/mss_generico/smco_employee_cabecera.jsp)                             | `a1e7b2a9f68d4a757cde32f7a3aa950da4cd9027431ac0ba4a7b9f103f05dd25` |    161 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/smco_employee_cabecera.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/smco_employee_cabecera.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 73  | ' width="90" height="120"/&gt;    |
| 101 | ');" title="[valor dinámico]"&gt; |
| 106 | " title="[valor dinámico]"&gt;    |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                      |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73  | img     | alt=&lt;%=ProfCv.getProperty("prof_cv.Alt")%&gt;; src='/fotos/&lt;m4:item; m4name=&lt;%=PERSDATAPHOTO%&gt;; htmlsafe=true                                      |
| 101 | a       | href=javascript:open_WEB('&lt;m4:item m4name=; htmlsafe=true                                                                                                   |
| 106 | a       | href=mailto:&lt;m4:item m4name=; htmlsafe=true                                                                                                                 |
| 141 | a       | class=enlacefuncional; title=JSP_EXPR_ProfCv.getProperty(; href=javascript:load_prof('&lt;%=sIDPerson%&gt;');                                                  |
| 142 | img     | align=right; alt=JSP_EXPR_ProfCv.getProperty(; src=/iconos/add.gif; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 150 | a       | class=enlacefuncional; title=JSP_EXPR_ProfCv.getProperty(; href=javascript:load_cv('&lt;%=sIDPerson%&gt;');                                                    |
| 151 | img     | align=right; alt=JSP_EXPR_ProfCv.getProperty(; src=/iconos/add.gif; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable            | Expresión fuente                                    | Resolución estática parcial                                                                            |
| --- | ------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 4   | zsubsesion          | "SMCO_KNOWLEDGE_FEEDBACK"                           | SMCO_KNOWLEDGE_FEEDBACK                                                                                |
| 5   | znodo               | "SMCO_GENERIC_PERSON_HEADER"                        | SMCO_GENERIC_PERSON_HEADER                                                                             |
| 7   | zcomun              | zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "." | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}                        |
| 9   | PERSDATAGBNAME      | zcomun + "SMCO_GB_NAME"                             | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_GB_NAME"}        |
| 10  | PERSDATADTBIRTH     | zcomun + "SMCO_DT_BIRTH"                            | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_DT_BIRTH"}       |
| 11  | PERSDATAGENDER      | zcomun + "SMCO_N_GENDER"                            | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_N_GENDER"}       |
| 12  | PERSDATANATIONALITY | zcomun + "SMCO_NATIONALITY"                         | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_NATIONALITY"}    |
| 13  | PERSDATAHOMEPAGE    | zcomun + "SMCO_HOME_PAGE"                           | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_HOME_PAGE"}      |
| 14  | PERSDATASID         | zcomun + "SMCO_ID_PERSON"                           | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_ID_PERSON"}      |
| 15  | PERSDATAEMAIL       | zcomun + "SMCO_EMAIL"                               | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_EMAIL"}          |
| 16  | PERSDATAAGE         | zcomun + "SMCO_AGE"                                 | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_AGE"}            |
| 17  | PERSDATAPHONE       | zcomun + "SMCO_PHONE"                               | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHONE"}          |
| 18  | PERSDATAMOVIL       | zcomun + "SMCO_PHONE_MOVIL"                         | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHONE_MOVIL"}    |
| 19  | PERSDATAPHOTO       | zcomun + "SMCO_PHOTO_ESS"                           | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHOTO_ESS"}      |
| 21  | PERSDATAMARITAL     | zcomun + "SMCO_MARITAL_STATUS"                      | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_MARITAL_STATUS"} |
| 23  | PERSDATAHIREDATA    | zcomun + "SMCO_HIRE_DATA"                           | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_HIRE_DATA"}      |
| 26  | PERSDATAPERSONTYPE  | zcomun + "SMCO_PERSON_TYPE"                         | SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PERSON_TYPE"}    |
| 28  | zcounti             | 0                                                   | 0                                                                                                      |
| 34  | zcountv             | String.valueOf(zcounti)                             | String.valueOf(zcounti)                                                                                |
| 35  | zposicions          | "0"                                                 | 0                                                                                                      |
| 36  | zcontrol            | 0                                                   | 0                                                                                                      |
| 37  | zposicion           | 0                                                   | 0                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag      | Contrato declarado                                                                                                                           |
| --- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 40  | m4:loop  | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                         |
| 47  | m4:item  | m4varname=tp_person; m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PERSON_TYPE"}              |
| 48  | m4:item  | m4varname=is_key_employee; m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_KEY_EMPLOYEE"}       |
| 49  | m4:item  | m4varname=this_age; m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_AGE"}                       |
| 81  | m4:label | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_GB_NAME"}                                       |
| 82  | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_GB_NAME"}                                       |
| 84  | m4:label | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_NATIONALITY"}                                   |
| 85  | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_NATIONALITY"}                                   |
| 89  | m4:label | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_DT_BIRTH"}                                      |
| 90  | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_DT_BIRTH"}                                      |
| 92  | m4:label | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_AGE"}                                           |
| 93  | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_AGE"}                                           |
| 97  | m4:label | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_N_GENDER"}                                      |
| 98  | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_N_GENDER"}                                      |
| 100 | m4:label | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_HOME_PAGE"}                                     |
| 102 | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_HOME_PAGE"}; htmlsafe=true                      |
| 105 | m4:label | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_EMAIL"}                                         |
| 106 | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_EMAIL"}; htmlsafe=true                          |
| 108 | m4:label | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHONE"}                                         |
| 109 | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHONE"}                                         |
| 112 | m4:label | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHONE_MOVIL"}                                   |
| 113 | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PHONE_MOVIL"}                                   |
| 117 | m4:label | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_KEY_EMPLOYEE"}                                  |
| 124 | m4:label | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_MARITAL_STATUS"}                                |
| 125 | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_MARITAL_STATUS"}                                |
| 131 | m4:label | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_HIRE_DATA"}                                     |
| 132 | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_HIRE_DATA"}                                     |
| 139 | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_ID_PERSON"}; htmlsafe=true; m4varname=sIDPerson |
| 148 | m4:item  | m4name=SMCO_KNOWLEDGE_FEEDBACK{"!"}SMCO_GENERIC_PERSON_HEADER{"[&amp;VAR.m4lix]"}{"."}{"SMCO_ID_PERSON"}; htmlsafe=true; m4varname=sIDPerson |

| L   | Operación        | Argumentos literales |
| --- | ---------------- | -------------------- |
| 31  | getCountInClient | "",zsubsesion,znodo  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos |
| --- | --------- | ---------- |
| 52  | open_WEB  | path       |
| 57  | load_prof | empleado   |
| 62  | load_cv   | empleado   |

| L   | Condición / acción / mensaje literal                                                                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 93  | &lt;td class="fuentevalor"&gt; &lt;m4:item m4name="&lt;%=PERSDATAAGE%&gt;"/&gt; &lt;%if (this_age.equals("")){}else{%&gt;&lt;%=ProfCv.getProperty("prof_cv.anios")%&gt;&lt;%}%&gt;&lt;/td&gt;       |
| 115 | &lt;% if (tp_person.equals("1")){%&gt;                                                                                                                                                              |
| 118 | &lt;% if(is_key_employee.equals("1")) { %&gt;                                                                                                                                                       |
| 120 | &lt;%}else{%&gt;                                                                                                                                                                                    |
| 123 | &lt;%}else{%&gt;                                                                                                                                                                                    |
| 129 | &lt;% if (tp_person.equals("1")){%&gt;                                                                                                                                                              |
| 136 | &lt;% if (tp_person.equals("1")){%&gt;                                                                                                                                                              |
| 145 | &lt;%}else{%&gt;                                                                                                                                                                                    |
| 7   | expresión de cálculo/transformación: String zcomun = zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                                                           |
| 9   | expresión de cálculo/transformación: String PERSDATAGBNAME = zcomun + "SMCO_GB_NAME";                                                                                                               |
| 10  | expresión de cálculo/transformación: String PERSDATADTBIRTH = zcomun + "SMCO_DT_BIRTH";                                                                                                             |
| 11  | expresión de cálculo/transformación: String PERSDATAGENDER = zcomun + "SMCO_N_GENDER";                                                                                                              |
| 12  | expresión de cálculo/transformación: String PERSDATANATIONALITY = zcomun + "SMCO_NATIONALITY";                                                                                                      |
| 13  | expresión de cálculo/transformación: String PERSDATAHOMEPAGE = zcomun + "SMCO_HOME_PAGE";                                                                                                           |
| 14  | expresión de cálculo/transformación: String PERSDATASID = zcomun + "SMCO_ID_PERSON";                                                                                                                |
| 15  | expresión de cálculo/transformación: String PERSDATAEMAIL = zcomun + "SMCO_EMAIL";                                                                                                                  |
| 16  | expresión de cálculo/transformación: String PERSDATAAGE= zcomun + "SMCO_AGE";                                                                                                                       |
| 17  | expresión de cálculo/transformación: String PERSDATAPHONE= zcomun + "SMCO_PHONE";                                                                                                                   |
| 18  | expresión de cálculo/transformación: String PERSDATAMOVIL= zcomun + "SMCO_PHONE_MOVIL";                                                                                                             |
| 19  | expresión de cálculo/transformación: String PERSDATAPHOTO= zcomun + "SMCO_PHOTO_ESS";                                                                                                               |
| 21  | expresión de cálculo/transformación: String PERSDATAMARITAL = zcomun + "SMCO_MARITAL_STATUS";                                                                                                       |
| 23  | expresión de cálculo/transformación: String PERSDATAHIREDATA = zcomun + "SMCO_HIRE_DATA";                                                                                                           |
| 24  | expresión de cálculo/transformación: String PERSDATAKEYEMPLOYEE = zcomun + "SMCO_KEY_EMPLOYEE";                                                                                                     |
| 26  | expresión de cálculo/transformación: String PERSDATAPERSONTYPE = zcomun + "SMCO_PERSON_TYPE";                                                                                                       |
| 58  | expresión de cálculo/transformación: var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=" + empleado;                                               |
| 63  | expresión de cálculo/transformación: var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person=" + empleado + "&amp;RET=DAT"; |

### Includes, navegación y dependencias

| L   | Include                          |
| --- | -------------------------------- |
| 1   | ../mss_g1/smco_prof_cv_trans.jsp |

| L   | Destino / recurso                                                                                                       |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 73  | /fotos/&lt;m4:item m4name=                                                                                              |
| 101 | javascript:open_WEB(                                                                                                    |
| 106 | mailto:&lt;m4:item m4name=                                                                                              |
| 141 | javascript:load_prof(                                                                                                   |
| 142 | /iconos/add.gif                                                                                                         |
| 150 | javascript:load_cv(                                                                                                     |
| 151 | /iconos/add.gif                                                                                                         |
| 1   | ../mss_g1/smco_prof_cv_trans.jsp                                                                                        |
| 58  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=                              |
| 63  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                              | Resolución | Ficha / candidato                                                        |
| ------ | --- | ----------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------ |
| COLL   | 1   | ../mss_g1/smco_prof_cv_trans.jsp                                                                                        | física     | [mss_g1/smco_prof_cv_trans.jsp](../equipo/mss_g1--smco_prof_cv_trans.md) |
| COLL   | 101 | javascript:open_WEB(                                                                                                    | dinámica   | P06                                                                      |
| COLL   | 141 | javascript:load_prof(                                                                                                   | dinámica   | P06                                                                      |
| COLL   | 150 | javascript:load_cv(                                                                                                     | dinámica   | P06                                                                      |
| COLL   | 1   | ../mss_g1/smco_prof_cv_trans.jsp                                                                                        | física     | [mss_g1/smco_prof_cv_trans.jsp](../equipo/mss_g1--smco_prof_cv_trans.md) |
| COLL   | 58  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=                              | ausente    | P06                                                                      |
| COLL   | 63  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person= | ausente    | P06                                                                      |
| IBER   | 1   | ../mss_g1/smco_prof_cv_trans.jsp                                                                                        | física     | [mss_g1/smco_prof_cv_trans.jsp](../equipo/mss_g1--smco_prof_cv_trans.md) |
| IBER   | 101 | javascript:open_WEB(                                                                                                    | dinámica   | P06                                                                      |
| IBER   | 141 | javascript:load_prof(                                                                                                   | dinámica   | P06                                                                      |
| IBER   | 150 | javascript:load_cv(                                                                                                     | dinámica   | P06                                                                      |
| IBER   | 1   | ../mss_g1/smco_prof_cv_trans.jsp                                                                                        | física     | [mss_g1/smco_prof_cv_trans.jsp](../equipo/mss_g1--smco_prof_cv_trans.md) |
| IBER   | 58  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=                              | ausente    | P06                                                                      |
| IBER   | 63  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person= | ausente    | P06                                                                      |
| BASE   | 1   | ../mss_g1/smco_prof_cv_trans.jsp                                                                                        | física     | [mss_g1/smco_prof_cv_trans.jsp](../equipo/mss_g1--smco_prof_cv_trans.md) |
| BASE   | 101 | javascript:open_WEB(                                                                                                    | dinámica   | P06                                                                      |
| BASE   | 141 | javascript:load_prof(                                                                                                   | dinámica   | P06                                                                      |
| BASE   | 150 | javascript:load_cv(                                                                                                     | dinámica   | P06                                                                      |
| BASE   | 1   | ../mss_g1/smco_prof_cv_trans.jsp                                                                                        | física     | [mss_g1/smco_prof_cv_trans.jsp](../equipo/mss_g1--smco_prof_cv_trans.md) |
| BASE   | 58  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=                              | ausente    | P06                                                                      |
| BASE   | 63  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person= | ausente    | P06                                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/smco_employee_cabecera.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
