# Formación no completada

Identificador: `mss_g3/mss_g3_p24.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Solo en BASE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------ | --------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | espanol   | contenido diferente | m4:datadef:CSP_FORM_NO_REALIZADA; m4:exec:CARGA:{}CSP_FORM_NO_REALIZADA{"!CSP_FORM_NO_REALIZADA.CSP_CARGA"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_NON_ATT_REASON"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PORC_TOTAL"} | m4:datadef:SSM_TRAINING_ENROLLMENT_1; m4:exec:CARGA:{}SSM_TRAINING_ENROLLMENT_1{"!SSM_PRINCIPAL.CARGA"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_NON_ATT_REASON"}; m4:sortitems:SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{".Sort"} |
| CYC    | espanol   | contenido diferente | m4:datadef:CSP_FORM_NO_REALIZADA; m4:exec:CARGA:{}CSP_FORM_NO_REALIZADA{"!CSP_FORM_NO_REALIZADA.CSP_CARGA"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_NON_ATT_REASON"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PORC_TOTAL"} | m4:datadef:SSM_TRAINING_ENROLLMENT_1; m4:exec:CARGA:{}SSM_TRAINING_ENROLLMENT_1{"!SSM_PRINCIPAL.CARGA"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_NON_ATT_REASON"}; m4:sortitems:SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{".Sort"} |
| IBER   | espanol   | contenido diferente | m4:datadef:CSP_FORM_NO_REALIZADA; m4:exec:CARGA:{}CSP_FORM_NO_REALIZADA{"!CSP_FORM_NO_REALIZADA.CSP_CARGA"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_NON_ATT_REASON"}; m4:item:CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PORC_TOTAL"} | m4:datadef:SSM_TRAINING_ENROLLMENT_1; m4:exec:CARGA:{}SSM_TRAINING_ENROLLMENT_1{"!SSM_PRINCIPAL.CARGA"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_NON_ATT_REASON"}; m4:sortitems:SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{".Sort"} |

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
| COLL / español    | [m4custom/COLL/mss_g3/espanol/mss_g3_p24.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p24.jsp) | `8eb626dc122ef4cd7bc82e429949d7eb8ce51165027ad6f5cec87efd5d09c8be` |    219 |
| CYC / español     | [m4custom/CYC/mss_g3/espanol/mss_g3_p24.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p24.jsp)   | `8eb626dc122ef4cd7bc82e429949d7eb8ce51165027ad6f5cec87efd5d09c8be` |    219 |
| IBER / español    | [m4custom/IBER/mss_g3/espanol/mss_g3_p24.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g3/espanol/mss_g3_p24.jsp) | `8eb626dc122ef4cd7bc82e429949d7eb8ce51165027ad6f5cec87efd5d09c8be` |    219 |
| BASE / español    | [mss_g3/espanol/mss_g3_p24.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p24.jsp)                             | `eb896059dcb69fbd77ac2fd152429446e092afb909cb390370a87291d642776e` |    240 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g3/espanol/mss_g3_p24.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p24.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                                                                            |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32  | Formación no completada                                                                                                                                                                                                                             |
| 131 | Formación no completada                                                                                                                                                                                                                             |
| 134 | Consulta la Formación cancelada de tus empleados, y/o aquella en la que no han realizado un aprovechamiento óptimo en cuanto a su asistencia. A través del filtro puedes ver las inscripciones a cursos de un empleado. Eventos actuales convocados |
| 147 | Filtro                                                                                                                                                                                                                                              |
| 149 | Empleado [valor dinámico]                                                                                                                                                                                                                           |
| 168 | Empleado                                                                                                                                                                                                                                            |
| 169 | Formación                                                                                                                                                                                                                                           |
| 170 | Sesión                                                                                                                                                                                                                                              |
| 171 | Inicio                                                                                                                                                                                                                                              |
| 172 | % Asistencia                                                                                                                                                                                                                                        |
| 173 | Motivo de cancelación                                                                                                                                                                                                                               |
| 188 | ');" title="Detalle de la formación"&gt;                                                                                                                                                                                                            |
| 190 | ');" title="Detalle de la sesión"&gt;                                                                                                                                                                                                               |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| 133 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=Eventos actuales convocados                         |
| 136 | a       | class=enlacefuncional; title=Eventos actuales convocados; href=mss_g3_p14.jsp?estado=31&amp;zTLoad=EC                |
| 145 | form    | name=formfiltro; id=formfiltro; action=                                                                              |
| 150 | select  | id=filtroformacion; name=filtroformacion; class=fuenteapartados; onchange=javascript:filtrar()                       |
| 152 | option  | value=&lt;%=sIdHREncr%&gt;                                                                                           |
| 156 | option  | value=&lt;%=sIdHREncr%&gt;                                                                                           |
| 188 | a       | href=javascript:verdescdevtraining('0','&lt;m4:item m4name=; jsafe=true; htmlsafe=true                               |
| 190 | a       | href=javascript:verdescdevtraining('1','&lt;m4:item m4name=; jsafe=true; htmlsafe=true                               |
| 205 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p24.jsp?estado=31&amp;zTLoad=FR; method=post; name=oculto; id=oculto |
| 207 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltroEncr%&gt;                                                  |
| 208 | input   | type=hidden; id=zNomfiltro; name=zNomfiltro; value=&lt;%=zNomfiltro%&gt;                                             |
| 209 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                      |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 11  | estado          | getParameter(request,"estado")     |
| 12  | zinicios        | getParameter(request,"zinicios")   |
| 14  | zfiltro         | getParameter(request, "zfiltro")   |
| 21  | zNomfiltro      | getParameter(request,"zNomfiltro") |

| L   | Variable               | Expresión fuente                                                                                | Resolución estática parcial                                                                                                                          |
| --- | ---------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | estado                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                   |
| 12  | zinicios               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                 |
| 13  | zfiltro                | ""                                                                                              |                                                                                                                                                      |
| 14  | zfiltroEncr            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro")                                                                                 |
| 16  | sIdHREncr              | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL") | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL")                                                      |
| 21  | zNomfiltro             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro")                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro")                                                                               |
| 66  | zsubsesion             | "CSP_FORM_NO_REALIZADA"                                                                         | CSP_FORM_NO_REALIZADA                                                                                                                                |
| 67  | zmeta4object           | "CSP_FORM_NO_REALIZADA"                                                                         | CSP_FORM_NO_REALIZADA                                                                                                                                |
| 68  | znodo                  | "CSP_FORM_NO_REALIZADA"                                                                         | CSP_FORM_NO_REALIZADA                                                                                                                                |
| 73  | zventanas              | "20"                                                                                            | 20                                                                                                                                                   |
| 74  | zvuelta                | 5                                                                                               | 5                                                                                                                                                    |
| 75  | zregistroinicial       | Integer.valueOf(zinicios).intValue()                                                            | Integer.valueOf(zinicios).intValue()                                                                                                                 |
| 77  | zventana               | Integer.valueOf(zventanas).intValue()                                                           | Integer.valueOf(zventanas).intValue()                                                                                                                |
| 78  | zregistrofinal         | zregistroinicial + zventana - 1                                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                   |
| 80  | zoutputdef             | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"                  | CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 81  | zmove                  | znodo + ":" + znodo + "[" + zregistroinicial + "]"                                              | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 82  | zlectura               | zsubsesion + "!" + znodo                                                                        | CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA                                                                                                      |
| 83  | zraiz                  | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                               | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}                                                   |
| 84  | ziterator              | znodo + ":" + zsubsesion + "!" + znodo                                                          | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA                                                                            |
| 86  | zmetodocarga           | "CARGA:" + zsubsesion + "!CSP_FORM_NO_REALIZADA.CSP_CARGA"                                      | CARGA:{}CSP_FORM_NO_REALIZADA{"!CSP_FORM_NO_REALIZADA.CSP_CARGA"}                                                                                    |
| 90  | zSCO_GB_NAMEEMP        | zraiz + "SCO_GB_NAME"                                                                           | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                    |
| 91  | zidSubProduct          | zraiz + "SCO_ID_DEV_SUBPRODUCT"                                                                 | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                          |
| 92  | zNOMBREFORM            | zraiz + "SCO_NM_DEV_SUBPRODUCT"                                                                 | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                          |
| 93  | zidSubAction           | zraiz + "SCO_ID_DEV_SUBACTION"                                                                  | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}                           |
| 94  | zNOMBRESESION          | zraiz + "SCO_NM_DEV_SUBACTION"                                                                  | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                           |
| 95  | zDTSTART               | zraiz + "DT_START"                                                                              | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                       |
| 96  | zFECHAFIN              | zraiz + "DT_END"                                                                                | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}                                         |
| 97  | zSCO_NM_NON_ATT_REASON | zraiz + "SCO_NM_NON_ATT_REASON"                                                                 | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_NON_ATT_REASON"}                          |
| 98  | zSSP_PORC_TOTAL        | zraiz + "SSP_PORC_TOTAL"                                                                        | CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PORC_TOTAL"}                                 |
| 113 | zcounti                | 0                                                                                               | 0                                                                                                                                                    |
| 114 | zcount                 | 0                                                                                               | 0                                                                                                                                                    |
| 121 | zcountv                | String.valueOf(zcounti)                                                                         | String.valueOf(zcounti)                                                                                                                              |
| 126 | sFiltroNameL           | Tran.getProperty("Label.All")                                                                   | Tran.getProperty("Label.All")                                                                                                                        |
| 151 | sIdHREncr              | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL") | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL")                                                      |
| 177 | zposicions2            | "0"                                                                                             | 0                                                                                                                                                    |
| 178 | zcontrol2              | 0                                                                                               | 0                                                                                                                                                    |
| 179 | zposicion2             | 0                                                                                               | 0                                                                                                                                                    |
| 180 | zregistroinicials      | String.valueOf(zregistroinicial)                                                                | String.valueOf(zregistroinicial)                                                                                                                     |
| 181 | zregistrofinals        | String.valueOf(zregistroinicial + zcounti - 1)                                                  | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                       |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 101 | m4:startpage | m4task=CSP_FORM_NO_REALIZADA                                                                                                                                             |
| 101 | m4:beginjob  |                                                                                                                                                                          |
| 102 | m4:datadef   | m4o=CSP_FORM_NO_REALIZADA; m4name=CSP_FORM_NO_REALIZADA                                                                                                                  |
| 108 | m4:exec      | m4method=CARGA:{}CSP_FORM_NO_REALIZADA{"!CSP_FORM_NO_REALIZADA.CSP_CARGA"}                                                                                               |
| 109 | m4:outputdef | m4alias=CSP_FORM_NO_REALIZADA                                                                                                                                            |
| 109 | m4:param     | name=m4name0; value=CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 110 | m4:endjob    |                                                                                                                                                                          |
| 129 | m4:move      |                                                                                                                                                                          |
| 129 | m4:param     | name=CSP_FORM_NO_REALIZADA; value=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                          |
| 153 | m4:dataloop  | outputdef=CSP_FORM_NO_REALIZADA                                                                                                                                          |
| 154 | m4:item      | var=com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL"); item=STD_ID_PERSON; htmlsafe=true; outputdef=CSP_FORM_NO_REALIZADA  |
| 156 | m4:item      | item=SCO_GB_NAME; htmlsafe=true; outputdef=CSP_FORM_NO_REALIZADA                                                                                                         |
| 184 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                |
| 186 | m4:item      | m4name=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                  |
| 188 | m4:item      | m4name=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                        |
| 190 | m4:item      | m4name=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                         |
| 192 | m4:item      | m4name=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true                                     |
| 193 | m4:item      | m4name=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SSP_PORC_TOTAL"}; htmlsafe=true                               |
| 194 | m4:item      | m4name=CSP_FORM_NO_REALIZADA{":"}CSP_FORM_NO_REALIZADA{"!"}CSP_FORM_NO_REALIZADA{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_NON_ATT_REASON"}; htmlsafe=true                        |
| 216 | m4:endpage   |                                                                                                                                                                          |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 105 | setItem          | zsubsesion,znodo,"","P_ID_PERSON",zfiltro |
| 118 | getCountInClient | znodo,zsubsesion,znodo                    |
| 119 | getCount         | znodo,zsubsesion,znodo                    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función            | Argumentos |
| --- | ------------------ | ---------- |
| 38  | filtrar            |            |
| 45  | verdescdevtraining | typeDev,id |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if (zfiltroEncr == null &#124;&#124; zfiltroEncr.equals("")) {                                                                           |
| 20  | else {zfiltro = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", zfiltroEncr);}                  |
| 26  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "ALL";}                                                                         |
| 27  | if ((zNomfiltro==null)&#124;&#124; (""==zNomfiltro)){zNomfiltro = "Todos";}                                                              |
| 28  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 29  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 48  | if (typeDev == 0){                                                                                                                       |
| 52  | else {                                                                                                                                   |
| 161 | if ('&lt;%=zfiltro%&gt;'!= "ALL"){                                                                                                       |
| 166 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                        |
| 197 | &lt;%}else{%&gt;                                                                                                                         |
| 50  | expresión de cálculo/transformación: dir = dir + "&amp;zidSubProduct=" + id;                                                             |
| 54  | expresión de cálculo/transformación: dir = dir + "&amp;zidSubAction=" + id;                                                              |
| 56  | expresión de cálculo/transformación: dir = dir + "&amp;zidCost=" + "0";                                                                  |
| 76  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 78  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 80  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 81  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 82  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 83  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                   |
| 84  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 86  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!CSP_FORM_NO_REALIZADA.CSP_CARGA";                   |
| 90  | expresión de cálculo/transformación: String zSCO_GB_NAMEEMP = zraiz + "SCO_GB_NAME";                                                     |
| 91  | expresión de cálculo/transformación: String zidSubProduct = zraiz + "SCO_ID_DEV_SUBPRODUCT";                                             |
| 92  | expresión de cálculo/transformación: String zNOMBREFORM = zraiz + "SCO_NM_DEV_SUBPRODUCT";                                               |
| 93  | expresión de cálculo/transformación: String zidSubAction = zraiz + "SCO_ID_DEV_SUBACTION";                                               |
| 94  | expresión de cálculo/transformación: String zNOMBRESESION = zraiz + "SCO_NM_DEV_SUBACTION";                                              |
| 95  | expresión de cálculo/transformación: String zDTSTART = zraiz + "DT_START";                                                               |
| 96  | expresión de cálculo/transformación: String zFECHAFIN = zraiz + "DT_END";                                                                |
| 97  | expresión de cálculo/transformación: String zSCO_NM_NON_ATT_REASON = zraiz + "SCO_NM_NON_ATT_REASON";                                    |
| 98  | expresión de cálculo/transformación: String zSSP_PORC_TOTAL = zraiz + "SSP_PORC_TOTAL";                                                  |
| 181 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 35  | ../../mss_generico/espanol/menu_mss.jsp               |
| 63  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 64  | ../../sse_generico/espanol/generico_links.jsp         |
| 212 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 213 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso          |
| --- | -------------------------- |
| 33  | /css/estilo_mss.css        |
| 34  | /libreria/funciones_sse.js |
| 54  | + id;                      |

```
}
dir = dir + |
```

| 133 | /iconos/noname_puesto_144_100.gif |
| 136 | mss_g3_p14.jsp?estado=31&amp;zTLoad=EC |
| 188 | javascript:verdescdevtraining( |
| 190 | javascript:verdescdevtraining( |
| 205 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p24.jsp?estado=31&amp;zTLoad=FR |
| 35 | ../../mss_generico/espanol/menu_mss.jsp |
| 49 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11 |
| 53 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11 |
| 63 | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 64 | ../../sse_generico/espanol/generico_links.jsp |
| 212 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 213 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p24.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p24.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 28  | Inscripciones a Formación con cancelación                                                                                                                                      |
| 152 | Inscripciones a formacion con cancelacion                                                                                                                                      |
| 155 | Consulta la lista de inscripciones a los que han asistido tus empleados. A través del filtro puedes ver las inscripciones a cursos de un empleado. Eventos actuales convocados |
| 168 | Filtro                                                                                                                                                                         |
| 170 | Empleado [valor dinámico]                                                                                                                                                      |
| 189 | Empleado                                                                                                                                                                       |
| 190 | Formación                                                                                                                                                                      |
| 191 | Sesión                                                                                                                                                                         |
| 192 | Inicio                                                                                                                                                                         |
| 193 | Fin                                                                                                                                                                            |
| 194 | Motivo de cancelación                                                                                                                                                          |
| 209 | ');" title="Detalle de la formación"&gt;                                                                                                                                       |
| 211 | ');" title="Detalle de la sesión"&gt;                                                                                                                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| 154 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=Eventos actuales convocados                         |
| 157 | a       | class=enlacefuncional; title=Eventos actuales convocados; href=mss_g3_p14.jsp?estado=31&amp;zTLoad=EC                |
| 166 | form    | name=formfiltro; id=formfiltro; action=                                                                              |
| 171 | select  | id=filtroformacion; name=filtroformacion; class=fuenteapartados; onchange=javascript:filtrar()                       |
| 173 | option  | value=&lt;%=sIdHREncr%&gt;                                                                                           |
| 177 | option  | value=&lt;%=sIdHREncr%&gt;                                                                                           |
| 209 | a       | href=javascript:verdescdevtraining('0','&lt;m4:item m4name=; jsafe=true; htmlsafe=true                               |
| 211 | a       | href=javascript:verdescdevtraining('1','&lt;m4:item m4name=; jsafe=true; htmlsafe=true                               |
| 226 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p24.jsp?estado=31&amp;zTLoad=FR; method=post; name=oculto; id=oculto |
| 228 | input   | type=hidden; id=zfiltro; name=zfiltro; value=&lt;%=zfiltroEncr%&gt;                                                  |
| 229 | input   | type=hidden; id=zNomfiltro; name=zNomfiltro; value=&lt;%=zNomfiltro%&gt;                                             |
| 230 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                      |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 11  | estado          | getParameter(request,"estado")     |
| 12  | zinicios        | getParameter(request,"zinicios")   |
| 14  | zfiltro         | getParameter(request, "zfiltro")   |
| 17  | zNomfiltro      | getParameter(request,"zNomfiltro") |
| 18  | zTLoad          | getParameter(request,"zTLoad")     |

| L   | Variable               | Expresión fuente                                                                                | Resolución estática parcial                                                                                                                                 |
| --- | ---------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | estado                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                          |
| 12  | zinicios               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                        |
| 13  | zfiltro                | ""                                                                                              |                                                                                                                                                             |
| 14  | zfiltroEncr            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro")                                                                                        |
| 17  | zNomfiltro             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro")                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro")                                                                                      |
| 18  | zTLoad                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                                          |
| 62  | zsubsesion             | "SSM_TRAINING_ENROLLMENT_1"                                                                     | SSM_TRAINING_ENROLLMENT_1                                                                                                                                   |
| 63  | zmeta4object           | "SSM_TRAINING_ENROLLMENT_1"                                                                     | SSM_TRAINING_ENROLLMENT_1                                                                                                                                   |
| 64  | znodo                  | "SSM_ENROLLMENT_SUBACTION"                                                                      | SSM_ENROLLMENT_SUBACTION                                                                                                                                    |
| 65  | znodo1                 | "SSM_EMPLEADOS"                                                                                 | SSM_EMPLEADOS                                                                                                                                               |
| 66  | znodomain              | "SSM_PRINCIPAL"                                                                                 | SSM_PRINCIPAL                                                                                                                                               |
| 69  | ztipocarga             | zTLoad                                                                                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                                          |
| 70  | zventanas              | "20"                                                                                            | 20                                                                                                                                                          |
| 71  | zvuelta                | 5                                                                                               | 5                                                                                                                                                           |
| 72  | zregistroinicial       | Integer.valueOf(zinicios).intValue()                                                            | Integer.valueOf(zinicios).intValue()                                                                                                                        |
| 74  | zventana               | Integer.valueOf(zventanas).intValue()                                                           | Integer.valueOf(zventanas).intValue()                                                                                                                       |
| 75  | zregistrofinal         | zregistroinicial + zventana - 1                                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                          |
| 77  | zoutputdef             | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"                  | SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 78  | zmove                  | znodo + ":" + znodo + "[" + zregistroinicial + "]"                                              | SSM_ENROLLMENT_SUBACTION{":"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                         |
| 79  | zlectura               | zsubsesion + "!" + znodo                                                                        | SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION                                                                                                      |
| 80  | zraiz                  | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                               | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}                                                |
| 81  | ziterator              | znodo + ":" + zsubsesion + "!" + znodo                                                          | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION                                                                         |
| 83  | zoutputdef1            | zsubsesion + "!" + znodo1 + "[*]"                                                               | SSM_TRAINING_ENROLLMENT_1{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                          |
| 84  | zlectura1              | zsubsesion + "!" + znodo1                                                                       | SSM_TRAINING_ENROLLMENT_1{"!"}SSM_EMPLEADOS                                                                                                                 |
| 85  | zraiz1                 | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."                             | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}                                                                      |
| 86  | zmove1                 | znodo1 + ":" + znodo1 + "[FIRST]"                                                               | SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"[FIRST]"}                                                                                                                  |
| 87  | ziterator1             | znodo1 + ":" + zsubsesion + "!" + znodo1                                                        | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_EMPLEADOS                                                                                               |
| 89  | zmetodocarga           | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                                  | CARGA:{}SSM_TRAINING_ENROLLMENT_1{"!SSM_PRINCIPAL.CARGA"}                                                                                                   |
| 93  | zSCO_GB_NAMEEMP        | zraiz + "SCO_GB_NAME"                                                                           | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                 |
| 94  | zNOMBREEMP             | zraiz + "NOMBRE_EMP"                                                                            | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_EMP"}                                  |
| 95  | zidSubProduct          | zraiz + "SCO_ID_DEV_SUBPRODUCT"                                                                 | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                       |
| 96  | zNOMBREFORM            | zraiz + "SCO_NM_DEV_SUBPRODUCT"                                                                 | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                       |
| 97  | zidSubAction           | zraiz + "SCO_ID_DEV_SUBACTION"                                                                  | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBACTION"}                        |
| 98  | zNOMBRESESION          | zraiz + "SCO_NM_DEV_SUBACTION"                                                                  | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                        |
| 99  | zDTSTART               | zraiz + "DT_START"                                                                              | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                    |
| 100 | zFECHAFIN              | zraiz + "DT_END"                                                                                | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}                                      |
| 101 | zSCO_NM_NON_ATT_REASON | zraiz + "SCO_NM_NON_ATT_REASON"                                                                 | SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_NON_ATT_REASON"}                       |
| 104 | zSTDNFAMILYNAME1       | zraiz1 + "STD_N_FAMILY_NAME_1"                                                                  | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}                                               |
| 105 | zSTDNFIRSTNAME         | zraiz1 + "STD_N_FIRST_NAME"                                                                     | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}                                                  |
| 106 | zSTDIDPERSON           | zraiz1 + "STD_ID_PERSON"                                                                        | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                                                     |
| 107 | zSCO_GB_NAME           | zraiz1 + "SCO_GB_NAME"                                                                          | SSM_EMPLEADOS{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_EMPLEADOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                                       |
| 109 | sSortNode              | zmeta4object + "!" + znodo + ".Sort"                                                            | SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{".Sort"}                                                                                             |
| 130 | zcounti                | 0                                                                                               | 0                                                                                                                                                           |
| 131 | zcount                 | 0                                                                                               | 0                                                                                                                                                           |
| 132 | zcount1                | 0                                                                                               | 0                                                                                                                                                           |
| 133 | zcount1i               | 0                                                                                               | 0                                                                                                                                                           |
| 141 | zcountv                | String.valueOf(zcounti)                                                                         | String.valueOf(zcounti)                                                                                                                                     |
| 142 | zcount1v               | String.valueOf(zcount1)                                                                         | String.valueOf(zcount1)                                                                                                                                     |
| 146 | sFiltroNameL           | Tran.getProperty("Label.All")                                                                   | Tran.getProperty("Label.All")                                                                                                                               |
| 172 | sIdHREncr              | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL") | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL")                                                             |
| 198 | zposicions2            | "0"                                                                                             | 0                                                                                                                                                           |
| 199 | zcontrol2              | 0                                                                                               | 0                                                                                                                                                           |
| 200 | zposicion2             | 0                                                                                               | 0                                                                                                                                                           |
| 201 | zregistroinicials      | String.valueOf(zregistroinicial)                                                                | String.valueOf(zregistroinicial)                                                                                                                            |
| 202 | zregistrofinals        | String.valueOf(zregistroinicial + zcounti - 1)                                                  | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                              |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 112 | m4:startpage | m4task=SSM_TRAINING_ENROLLMENT_1                                                                                                                                                |
| 112 | m4:beginjob  |                                                                                                                                                                                 |
| 113 | m4:datadef   | m4o=SSM_TRAINING_ENROLLMENT_1; m4name=SSM_TRAINING_ENROLLMENT_1                                                                                                                 |
| 119 | m4:exec      | m4method=CARGA:{}SSM_TRAINING_ENROLLMENT_1{"!SSM_PRINCIPAL.CARGA"}                                                                                                              |
| 119 | m4:param     | name=TIPO_CARGA; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad")                                                                                       |
| 121 | m4:sortitems | m4name=SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{".Sort"}                                                                                                          |
| 122 | m4:param     | name=DT_START; value=DESC                                                                                                                                                       |
| 125 | m4:outputdef | m4alias=SSM_ENROLLMENT_SUBACTION                                                                                                                                                |
| 125 | m4:param     | name=m4name0; value=SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 126 | m4:outputdef | m4alias=SSM_EMPLEADOS                                                                                                                                                           |
| 126 | m4:param     | name=m4name0; value=SSM_TRAINING_ENROLLMENT_1{"!"}SSM_EMPLEADOS{"[*]"}                                                                                                          |
| 127 | m4:endjob    |                                                                                                                                                                                 |
| 149 | m4:move      |                                                                                                                                                                                 |
| 149 | m4:param     | name=SSM_TRAINING_ENROLLMENT_1; value=SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"[FIRST]"}                                                                                                |
| 150 | m4:move      |                                                                                                                                                                                 |
| 150 | m4:param     | name=SSM_TRAINING_ENROLLMENT_1; value=SSM_ENROLLMENT_SUBACTION{":"}SSM_ENROLLMENT_SUBACTION{"["}Integer.valueOf(zinicios).intValue(){"]"}                                       |
| 174 | m4:dataloop  | outputdef=SSM_ENROLLMENT_SUBACTION                                                                                                                                              |
| 175 | m4:item      | var=com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", "ALL"); item=STD_ID_PERSON; htmlsafe=true; outputdef=SSM_ENROLLMENT_SUBACTION      |
| 177 | m4:item      | item=SCO_GB_NAME; htmlsafe=true; outputdef=SSM_ENROLLMENT_SUBACTION                                                                                                             |
| 205 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                       |
| 207 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                               |
| 209 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                     |
| 211 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                      |
| 213 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true                                  |
| 214 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; htmlsafe=true                                    |
| 215 | m4:item      | m4name=SSM_ENROLLMENT_SUBACTION{":"}SSM_TRAINING_ENROLLMENT_1{"!"}SSM_ENROLLMENT_SUBACTION{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_NON_ATT_REASON"}; htmlsafe=true                     |
| 237 | m4:endpage   |                                                                                                                                                                                 |

| L   | Operación        | Argumentos literales                            |
| --- | ---------------- | ----------------------------------------------- |
| 116 | setItem          | zsubsesion,znodomain,"","SSM_ID_PERSON",zfiltro |
| 136 | getCountInClient | znodo,zsubsesion,znodo                          |
| 137 | getCount         | znodo,zsubsesion,znodo                          |
| 138 | getCount         | znodo1,zsubsesion,znodo1                        |
| 139 | getCountInClient | znodo1,zsubsesion,znodo1                        |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función            | Argumentos |
| --- | ------------------ | ---------- |
| 34  | filtrar            |            |
| 41  | verdescdevtraining | typeDev,id |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if (zfiltroEncr == null &#124;&#124; zfiltroEncr.equals("")) {zfiltro="";}                                                               |
| 16  | else {zfiltro = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", zfiltroEncr);}                  |
| 21  | if ((zTLoad==null)&#124;&#124; (""==zTLoad)){zTLoad = "EC";}                                                                             |
| 22  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "ALL";}                                                                         |
| 23  | if ((zNomfiltro==null)&#124;&#124; (""==zNomfiltro)){zNomfiltro = "Todos";}                                                              |
| 24  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 25  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 44  | if (typeDev == 0){                                                                                                                       |
| 48  | else {                                                                                                                                   |
| 182 | if ('&lt;%=zfiltro%&gt;'!= "ALL"){                                                                                                       |
| 187 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                        |
| 218 | &lt;%}else{%&gt;                                                                                                                         |
| 46  | expresión de cálculo/transformación: dir = dir + "&amp;zidSubProduct=" + id;                                                             |
| 50  | expresión de cálculo/transformación: dir = dir + "&amp;zidSubAction=" + id;                                                              |
| 52  | expresión de cálculo/transformación: dir = dir + "&amp;zidCost=" + "0";                                                                  |
| 73  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 75  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 77  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 78  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 79  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                         |
| 80  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                   |
| 81  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 83  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 84  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                       |
| 85  | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                |
| 86  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                                  |
| 87  | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                       |
| 89  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                               |
| 93  | expresión de cálculo/transformación: String zSCO_GB_NAMEEMP = zraiz + "SCO_GB_NAME";                                                     |
| 94  | expresión de cálculo/transformación: String zNOMBREEMP = zraiz + "NOMBRE_EMP";                                                           |
| 95  | expresión de cálculo/transformación: String zidSubProduct = zraiz + "SCO_ID_DEV_SUBPRODUCT";                                             |
| 96  | expresión de cálculo/transformación: String zNOMBREFORM = zraiz + "SCO_NM_DEV_SUBPRODUCT";                                               |
| 97  | expresión de cálculo/transformación: String zidSubAction = zraiz + "SCO_ID_DEV_SUBACTION";                                               |
| 98  | expresión de cálculo/transformación: String zNOMBRESESION = zraiz + "SCO_NM_DEV_SUBACTION";                                              |
| 99  | expresión de cálculo/transformación: String zDTSTART = zraiz + "DT_START";                                                               |
| 100 | expresión de cálculo/transformación: String zFECHAFIN = zraiz + "DT_END";                                                                |
| 101 | expresión de cálculo/transformación: String zSCO_NM_NON_ATT_REASON = zraiz + "SCO_NM_NON_ATT_REASON";                                    |
| 104 | expresión de cálculo/transformación: String zSTDNFAMILYNAME1 = zraiz1 + "STD_N_FAMILY_NAME_1";                                           |
| 105 | expresión de cálculo/transformación: String zSTDNFIRSTNAME = zraiz1 + "STD_N_FIRST_NAME";                                                |
| 106 | expresión de cálculo/transformación: String zSTDIDPERSON = zraiz1 + "STD_ID_PERSON";                                                     |
| 107 | expresión de cálculo/transformación: String zSCO_GB_NAME = zraiz1 + "SCO_GB_NAME";                                                       |
| 109 | expresión de cálculo/transformación: String sSortNode = zmeta4object + "!" + znodo + ".Sort";                                            |
| 202 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 31  | ../../mss_generico/espanol/menu_mss.jsp               |
| 59  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 60  | ../../sse_generico/espanol/generico_links.jsp         |
| 233 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 234 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso          |
| --- | -------------------------- |
| 29  | /css/estilo_mss.css        |
| 30  | /libreria/funciones_sse.js |
| 50  | + id;                      |

```
}
dir = dir + |
```

| 154 | /iconos/noname_puesto_144_100.gif |
| 157 | mss_g3_p14.jsp?estado=31&amp;zTLoad=EC |
| 209 | javascript:verdescdevtraining( |
| 211 | javascript:verdescdevtraining( |
| 226 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p24.jsp?estado=31&amp;zTLoad=FR |
| 31 | ../../mss_generico/espanol/menu_mss.jsp |
| 45 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11 |
| 49 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11 |
| 59 | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 60 | ../../sse_generico/espanol/generico_links.jsp |
| 233 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 234 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 35  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| COLL   | 63  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| COLL   | 64  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 212 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| COLL   | 213 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| COLL   | 34  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 54  | + id;                                                 |

```
}
dir = dir + | dinámica | P06 |
```

| COLL | 136 | mss_g3_p14.jsp?estado=31&amp;zTLoad=EC | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| COLL | 188 | javascript:verdescdevtraining( | dinámica | P06 |
| COLL | 190 | javascript:verdescdevtraining( | dinámica | P06 |
| COLL | 205 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p24.jsp?estado=31&amp;zTLoad=FR | ausente | P06 |
| COLL | 35 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| COLL | 49 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11 | ausente | P06 |
| COLL | 53 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11 | ausente | P06 |
| COLL | 63 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| COLL | 64 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| COLL | 212 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| COLL | 213 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |
| CYC | 35 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| CYC | 63 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| CYC | 64 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| CYC | 212 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| CYC | 213 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |
| CYC | 34 | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| CYC | 54 | + id;
}
dir = dir + | dinámica | P06 |
| CYC | 136 | mss_g3_p14.jsp?estado=31&amp;zTLoad=EC | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| CYC | 188 | javascript:verdescdevtraining( | dinámica | P06 |
| CYC | 190 | javascript:verdescdevtraining( | dinámica | P06 |
| CYC | 205 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p24.jsp?estado=31&amp;zTLoad=FR | ausente | P06 |
| CYC | 35 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| CYC | 49 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11 | ausente | P06 |
| CYC | 53 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11 | ausente | P06 |
| CYC | 63 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| CYC | 64 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| CYC | 212 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| CYC | 213 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |
| IBER | 35 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| IBER | 63 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| IBER | 64 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| IBER | 212 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| IBER | 213 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |
| IBER | 34 | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER | 54 | + id;
}
dir = dir + | dinámica | P06 |
| IBER | 136 | mss_g3_p14.jsp?estado=31&amp;zTLoad=EC | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| IBER | 188 | javascript:verdescdevtraining( | dinámica | P06 |
| IBER | 190 | javascript:verdescdevtraining( | dinámica | P06 |
| IBER | 205 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p24.jsp?estado=31&amp;zTLoad=FR | ausente | P06 |
| IBER | 35 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| IBER | 49 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11 | ausente | P06 |
| IBER | 53 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11 | ausente | P06 |
| IBER | 63 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| IBER | 64 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| IBER | 212 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| IBER | 213 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |
| BASE | 31 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| BASE | 59 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| BASE | 60 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE | 233 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE | 234 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |
| BASE | 30 | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE | 50 | + id;
}
dir = dir + | dinámica | P06 |
| BASE | 157 | mss_g3_p14.jsp?estado=31&amp;zTLoad=EC | física | [mss_g3/mss_g3_p14.jsp](mss_g3--mss_g3_p14.md) |
| BASE | 209 | javascript:verdescdevtraining( | dinámica | P06 |
| BASE | 211 | javascript:verdescdevtraining( | dinámica | P06 |
| BASE | 226 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p24.jsp?estado=31&amp;zTLoad=FR | ausente | P06 |
| BASE | 31 | ../../mss_generico/espanol/menu_mss.jsp | física | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md) |
| BASE | 45 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11 | ausente | P06 |
| BASE | 49 | /servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11 | ausente | P06 |
| BASE | 59 | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md) |
| BASE | 60 | ../../sse_generico/espanol/generico_links.jsp | física | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE | 233 | ../../sse_generico/espanol/generico_ventanas_post.jsp | física | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE | 234 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p24.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
