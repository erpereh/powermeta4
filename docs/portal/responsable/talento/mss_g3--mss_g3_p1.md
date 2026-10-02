# Sigue los procesos abiertos

Identificador: `mss_g3/mss_g3_p1.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                      | Texto                   | Ámbito | Diccionario                                                                       |
| -------------------------- | ----------------------- | ------ | --------------------------------------------------------------------------------- |
| Label.mss_g3_p1_Comment    | Comentario              | BASE   | [translations/mss_g3_es.properties:L69](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_DtIncorp   | Fecha de incorporación  | BASE   | [translations/mss_g3_es.properties:L65](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_DtLim      | Fecha límite            | BASE   | [translations/mss_g3_es.properties:L66](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_IntMov     | Movilidad internacional | BASE   | [translations/mss_g3_es.properties:L68](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_Job        | Puesto requerido        | BASE   | [translations/mss_g3_es.properties:L60](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_MaxCurr    | Salario max             | BASE   | [translations/mss_g3_es.properties:L64](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_MinCurr    | Salario min             | BASE   | [translations/mss_g3_es.properties:L63](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_NacMov     | Movilidad nacional      | BASE   | [translations/mss_g3_es.properties:L67](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_NumVac     | Nº de vacantes          | BASE   | [translations/mss_g3_es.properties:L61](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_WorkLoc    | Lugar de trabajo        | BASE   | [translations/mss_g3_es.properties:L62](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_wiz1Consid | Motivo de solicitud     | BASE   | [translations/mss_g3_es.properties:L55](../../referencias/literales/mss_g3_es.md) |
| Title.mss_g3_p1            | Vacantes Rechazadas     | BASE   | [translations/mss_g3_es.properties:L59](../../referencias/literales/mss_g3_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p1.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1.jsp) | `68dcbafb33b5b6a3c2e559445883f4e6876f9b2fa10486e58d9a6267dfbc3a34` |    290 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p1.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                                                                                                                                |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | Sigue los procesos abiertos                                                                                                                                                                                                                                                                             |
| 137 | Sigue los procesos abiertos                                                                                                                                                                                                                                                                             |
| 140 | Estos son los procesos de selección abiertos para las vacantes que ya han sido aceptadas. El estado y los candidatos inscritos se encuentran en el detalle del proceso. A continuación puedes ver las vacantes que has solicitado y están pendientes de ser incluidas en un proceso. Puestos de trabajo |
| 159 | Proceso de selección                                                                                                                                                                                                                                                                                    |
| 160 | Puesto requerido                                                                                                                                                                                                                                                                                        |
| 161 | Fecha de solicitud                                                                                                                                                                                                                                                                                      |
| 162 | Fecha límite                                                                                                                                                                                                                                                                                            |
| 184 | Vacantes solicitadas pendientes de ser inscritas en un proceso de selección                                                                                                                                                                                                                             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                              |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 139 | img     | alt=Sigue los procesos abiertos; src=/iconos/nonmae_procesos_selec_abiertos_80_100.gif; width=80; height=100                           |
| 146 | a       | class=enlacefuncional; tabindex=1; title=Ir a puestos de trabajo; href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3 |
| 171 | a       | title=Detalle del proceso; href=javascript:Enviarproceso('&lt;%=sIdProcSel%&gt;', '&lt;%=zindice%&gt;');                               |
| 281 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp; method=post; name=Vacantes; id=Vacantes                                    |
| 282 | input   | type=hidden; id=PRO; name=PRO; value=                                                                                                  |
| 283 | input   | type=hidden; id=ACT; name=ACT; value=                                                                                                  |
| 284 | input   | type=hidden; id=EST; name=EST; value=                                                                                                  |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 21  | estado          | getParameter(request,"estado")   |
| 22  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable           | Expresión fuente                                                     | Resolución estática parcial                                                                                 |
| --- | ------------------ | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 21  | estado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                          |
| 22  | zinicios           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                        |
| 31  | zsubsesion         | "SSM_RECRUIT_PRO"                                                    | SSM_RECRUIT_PRO                                                                                             |
| 32  | zmeta4object       | "SSM_RECRUIT_PRO"                                                    | SSM_RECRUIT_PRO                                                                                             |
| 33  | zmetodocarga       | zsubsesion + "!SSM_RECRUIT_PRO.CARGA"                                | SSM_RECRUIT_PRO{"!SSM_RECRUIT_PRO.CARGA"}                                                                   |
| 34  | znodo              | "SSM_RECRUIT_PRO"                                                    | SSM_RECRUIT_PRO                                                                                             |
| 35  | znodo2             | "SSM_JOB_POST_PEND"                                                  | SSM_JOB_POST_PEND                                                                                           |
| 36  | znodo3             | "SSM_JOB_POST_CANC"                                                  | SSM_JOB_POST_CANC                                                                                           |
| 38  | zventanas          | "20"                                                                 | 20                                                                                                          |
| 39  | zvuelta            | 5                                                                    | 5                                                                                                           |
| 40  | zdireccion         | "mss_g3/mss_g3_p1.jsp"                                               | mss_g3/mss_g3_p1.jsp                                                                                        |
| 41  | zestado            | "31"                                                                 | 31                                                                                                          |
| 45  | zregistroinicial   | Integer.valueOf(zinicios).intValue()                                 | Integer.valueOf(zinicios).intValue()                                                                        |
| 47  | zventana           | Integer.valueOf(zventanas).intValue()                                | Integer.valueOf(zventanas).intValue()                                                                       |
| 48  | zregistrofinal     | zregistroinicial + zventana - 1                                      | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                          |
| 50  | zmove              | znodo + ":" + znodo + "[FIRST]"                                      | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"[FIRST]"}                                                              |
| 51  | zoutputdef         | zsubsesion + "!" + znodo + "[*]"                                     | SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[*]"}                                                                  |
| 52  | ziterator          | znodo + ":" + zsubsesion + "!" + znodo                               | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO                                                     |
| 53  | zcomun             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."    | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}                            |
| 55  | zmove2             | znodo2 + ":" + znodo2 + "[FIRST]"                                    | SSM_JOB_POST_PEND{":"}SSM_JOB_POST_PEND{"[FIRST]"}                                                          |
| 56  | zoutputdef2        | zsubsesion + "!" + znodo2 + "[*]"                                    | SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[*]"}                                                                |
| 57  | zcomun2            | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."  | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}                        |
| 59  | zmove3             | znodo3 + ":" + znodo3 + "[FIRST]"                                    | SSM_JOB_POST_CANC{":"}SSM_JOB_POST_CANC{"[FIRST]"}                                                          |
| 60  | zoutputdef3        | zsubsesion + "!" + znodo3 + "[*]"                                    | SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[*]"}                                                                |
| 61  | zcomun3            | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."  | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}                        |
| 63  | ztipocarga         | "M4T"                                                                | M4T                                                                                                         |
| 67  | zSPUESTO           | zcomun + "SCO_NM_JOB_POSITION"                                       | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_JOB_POSITION"}     |
| 68  | zSFSOL             | zcomun + "SCO_DT_REQUEST"                                            | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}          |
| 69  | zSFLIM             | zcomun + "SCO_DT_LIMIT"                                              | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_LIMIT"}            |
| 70  | zSPROCESO          | zcomun + "SCO_OR_RECRUIT_PR"                                         | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_RECRUIT_PR"}       |
| 71  | zSNPROCESO         | zcomun + "SCO_NM_RECRUITMENT"                                        | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_RECRUITMENT"}      |
| 73  | zSSENUMVAC         | zcomun2 + "SSE_NUM_VAC"                                              | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"SSE_NUM_VAC"}         |
| 74  | zSTDNJOBCODE       | zcomun2 + "STD_N_JOB_CODE"                                           | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}      |
| 75  | zSTDNWORKLOCATION  | zcomun2 + "STD_N_WORK_LOCATION"                                      | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"} |
| 76  | zSTDNWORKUNIT      | zcomun2 + "STD_N_WORK_UNIT"                                          | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}     |
| 78  | zSUELDOMINIMO      | zcomun2 + "SUELDO_MINIMO"                                            | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"SUELDO_MINIMO"}       |
| 79  | zSUELDOMAXIMO      | zcomun2 + "SUELDO_MAXIMO"                                            | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"SUELDO_MAXIMO"}       |
| 80  | zSCODTLIMIT        | zcomun2 + "SCO_DT_LIMIT"                                             | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_LIMIT"}        |
| 81  | zSCODTINCORPORATE  | zcomun2 + "SCO_DT_INCORPORATE"                                       | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_INCORPORATE"}  |
| 82  | zNMCURRENCY        | zcomun2 + "NM_CURRENCY"                                              | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}         |
| 83  | zMOVILIDADNAC      | zcomun2 + "MOVILIDAD_NAC"                                            | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"MOVILIDAD_NAC"}       |
| 84  | zMOVILIDADINT      | zcomun2 + "MOVILIDAD_INT"                                            | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"MOVILIDAD_INT"}       |
| 85  | zCONSIDERATIONS    | zcomun2 + "SCO_CONSIDERATIONS"                                       | SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"SCO_CONSIDERATIONS"}  |
| 87  | zSSENUMVAC2        | zcomun3 + "SSE_NUM_VAC"                                              | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"SSE_NUM_VAC"}         |
| 88  | zSTDNJOBCODE2      | zcomun3 + "STD_N_JOB_CODE"                                           | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}      |
| 89  | zSTDNWORKLOCATION2 | zcomun3 + "STD_N_WORK_LOCATION"                                      | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"} |
| 90  | zSTDNWORKUNIT2     | zcomun3 + "STD_N_WORK_UNIT"                                          | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}     |
| 92  | zSUELDOMINIMO2     | zcomun3 + "SUELDO_MINIMO"                                            | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"SUELDO_MINIMO"}       |
| 93  | zSUELDOMAXIMO2     | zcomun3 + "SUELDO_MAXIMO"                                            | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"SUELDO_MAXIMO"}       |
| 94  | zSCODTLIMIT2       | zcomun3 + "SCO_DT_LIMIT"                                             | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_LIMIT"}        |
| 95  | zSCODTINCORPORATE2 | zcomun3 + "SCO_DT_INCORPORATE"                                       | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_INCORPORATE"}  |
| 96  | zNMCURRENCY2       | zcomun3 + "NM_CURRENCY"                                              | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}         |
| 97  | zMOVILIDADNAC2     | zcomun3 + "MOVILIDAD_NAC"                                            | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"MOVILIDAD_NAC"}       |
| 98  | zMOVILIDADINT2     | zcomun3 + "MOVILIDAD_INT"                                            | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"MOVILIDAD_INT"}       |
| 99  | zCONSIDERATIONS2   | zcomun3 + "SCO_CONSIDERATIONS"                                       | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"SCO_CONSIDERATIONS"}  |
| 100 | zSCOCOMMENT        | zcomun3 + "COMMENT"                                                  | SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"COMMENT"}             |
| 115 | zcount             | 0                                                                    | 0                                                                                                           |
| 116 | zcounti            | 0                                                                    | 0                                                                                                           |
| 117 | zcount2            | 0                                                                    | 0                                                                                                           |
| 118 | zcounti2           | 0                                                                    | 0                                                                                                           |
| 119 | zcount3            | 0                                                                    | 0                                                                                                           |
| 120 | zcounti3           | 0                                                                    | 0                                                                                                           |
| 131 | zcountv            | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                                                                     |
| 132 | zcountv2           | String.valueOf(zcounti2)                                             | String.valueOf(zcounti2)                                                                                    |
| 133 | zcountv3           | String.valueOf(zcounti3)                                             | String.valueOf(zcounti3)                                                                                    |
| 134 | zto                | new Integer(new Integer(zcountv).intValue()-1).toString()            | new Integer(new Integer(zcountv).intValue()-1).toString()                                                   |
| 154 | zpos               | "0"                                                                  | 0                                                                                                           |
| 155 | zindice            | 0                                                                    | 0                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 103 | m4:startpage | m4task=SSM_RECRUIT_PRO                                                                                                                            |
| 104 | m4:beginjob  |                                                                                                                                                   |
| 105 | m4:datadef   | m4o=SSM_RECRUIT_PRO; m4name=SSM_RECRUIT_PRO                                                                                                       |
| 106 | m4:exec      | m4method=SSM_RECRUIT_PRO{"!SSM_RECRUIT_PRO.CARGA"}                                                                                                |
| 106 | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                        |
| 107 | m4:outputdef | m4alias=SSM_RECRUIT_PRO                                                                                                                           |
| 107 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[*]"}                                                                                    |
| 108 | m4:outputdef | m4alias=SSM_JOB_POST_PEND                                                                                                                         |
| 108 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[*]"}                                                                                  |
| 109 | m4:outputdef | m4alias=SSM_JOB_POST_CANC                                                                                                                         |
| 109 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[*]"}                                                                                  |
| 110 | m4:endjob    |                                                                                                                                                   |
| 111 | m4:move      |                                                                                                                                                   |
| 111 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"[FIRST]"}                                                                        |
| 112 | m4:move      |                                                                                                                                                   |
| 112 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_JOB_POST_PEND{":"}SSM_JOB_POST_PEND{"[FIRST]"}                                                                    |
| 113 | m4:move      |                                                                                                                                                   |
| 113 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_JOB_POST_CANC{":"}SSM_JOB_POST_CANC{"[FIRST]"}                                                                    |
| 164 | m4:loop      | from=0; to=new Integer(new Integer(zcountv).intValue()-1).toString()                                                                              |
| 169 | m4:item      | m4name=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_RECRUIT_PR"}; htmlsafe=true; m4varname=sIdProcSel |
| 171 | m4:item      | m4name=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_RECRUITMENT"}; htmlsafe=true                      |
| 172 | m4:item      | m4name=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_JOB_POSITION"}; htmlsafe=true                     |
| 173 | m4:item      | m4name=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                          |
| 174 | m4:item      | m4name=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_LIMIT"}; htmlsafe=true                            |
| 186 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                             |
| 188 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                      |
| 189 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"SSE_NUM_VAC"}; htmlsafe=true                         |
| 192 | m4:label     | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                     |
| 192 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                     |
| 193 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}; htmlsafe=true                 |
| 198 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"SUELDO_MINIMO"}; htmlsafe=true                       |
| 198 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                         |
| 202 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"SUELDO_MAXIMO"}; htmlsafe=true                       |
| 202 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                         |
| 207 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_INCORPORATE"}; htmlsafe=true                  |
| 209 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_LIMIT"}; htmlsafe=true                        |
| 213 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"MOVILIDAD_NAC"}; htmlsafe=true                       |
| 215 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"MOVILIDAD_INT"}; htmlsafe=true                       |
| 219 | m4:item      | m4name=SSM_JOB_POST_PEND{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PEND{"[&amp;VAR.m4lix]"}{"."}{"SCO_CONSIDERATIONS"}; htmlsafe=true                  |
| 231 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                             |
| 233 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                      |
| 234 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"SSE_NUM_VAC"}; htmlsafe=true                         |
| 237 | m4:label     | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                     |
| 237 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                     |
| 238 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}; htmlsafe=true                 |
| 243 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"SUELDO_MINIMO"}; htmlsafe=true                       |
| 243 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                         |
| 247 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"SUELDO_MAXIMO"}; htmlsafe=true                       |
| 247 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                         |
| 252 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_INCORPORATE"}; htmlsafe=true                  |
| 254 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_LIMIT"}; htmlsafe=true                        |
| 258 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"MOVILIDAD_NAC"}; htmlsafe=true                       |
| 260 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"MOVILIDAD_INT"}; htmlsafe=true                       |
| 264 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"SCO_CONSIDERATIONS"}; htmlsafe=true                  |
| 267 | m4:item      | m4name=SSM_JOB_POST_CANC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CANC{"[&amp;VAR.m4lix]"}{"."}{"COMMENT"}; htmlsafe=true                             |
| 287 | m4:endpage   |                                                                                                                                                   |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 124 | getCount         | znodo,zsubsesion,znodo   |
| 125 | getCountInClient | znodo,zsubsesion,znodo   |
| 126 | getCount         | znodo2,zsubsesion,znodo2 |
| 127 | getCountInClient | znodo2,zsubsesion,znodo2 |
| 128 | getCount         | znodo3,zsubsesion,znodo3 |
| 129 | getCountInClient | znodo3,zsubsesion,znodo3 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos      |
| --- | ------------- | --------------- |
| 13  | Enviarproceso | proceso, actual |

| L   | Condición / acción / mensaje literal                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 23  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                            |
| 24  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                    |
| 153 | if (zcounti &gt; 0) {                                                                                                      |
| 181 | &lt;% if (zcounti2 &gt; 0) {%&gt;                                                                                          |
| 226 | &lt;% if (zcounti3 &gt; 0) {%&gt;                                                                                          |
| 276 | if ((zcounti == 0)&amp;&amp;(zcounti2 == 0)){ %&gt;                                                                        |
| 33  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_RECRUIT_PRO.CARGA";                          |
| 46  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                              |
| 48  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                 |
| 50  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                       |
| 51  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                 |
| 52  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                            |
| 53  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";    |
| 55  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                    |
| 56  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                               |
| 57  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."; |
| 59  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                    |
| 60  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                               |
| 61  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."; |
| 67  | expresión de cálculo/transformación: String zSPUESTO = zcomun + "SCO_NM_JOB_POSITION";                                     |
| 68  | expresión de cálculo/transformación: String zSFSOL = zcomun + "SCO_DT_REQUEST";                                            |
| 69  | expresión de cálculo/transformación: String zSFLIM = zcomun + "SCO_DT_LIMIT";                                              |
| 70  | expresión de cálculo/transformación: String zSPROCESO = zcomun + "SCO_OR_RECRUIT_PR";                                      |
| 71  | expresión de cálculo/transformación: String zSNPROCESO = zcomun + "SCO_NM_RECRUITMENT";                                    |
| 73  | expresión de cálculo/transformación: String zSSENUMVAC = zcomun2 + "SSE_NUM_VAC";                                          |
| 74  | expresión de cálculo/transformación: String zSTDNJOBCODE = zcomun2 + "STD_N_JOB_CODE";                                     |
| 75  | expresión de cálculo/transformación: String zSTDNWORKLOCATION = zcomun2 + "STD_N_WORK_LOCATION";                           |
| 76  | expresión de cálculo/transformación: String zSTDNWORKUNIT = zcomun2 + "STD_N_WORK_UNIT";                                   |
| 78  | expresión de cálculo/transformación: String zSUELDOMINIMO = zcomun2 + "SUELDO_MINIMO";                                     |
| 79  | expresión de cálculo/transformación: String zSUELDOMAXIMO = zcomun2 + "SUELDO_MAXIMO";                                     |
| 80  | expresión de cálculo/transformación: String zSCODTLIMIT = zcomun2 + "SCO_DT_LIMIT";                                        |
| 81  | expresión de cálculo/transformación: String zSCODTINCORPORATE = zcomun2 + "SCO_DT_INCORPORATE";                            |
| 82  | expresión de cálculo/transformación: String zNMCURRENCY = zcomun2 + "NM_CURRENCY";                                         |
| 83  | expresión de cálculo/transformación: String zMOVILIDADNAC = zcomun2 + "MOVILIDAD_NAC";                                     |
| 84  | expresión de cálculo/transformación: String zMOVILIDADINT= zcomun2 + "MOVILIDAD_INT";                                      |
| 85  | expresión de cálculo/transformación: String zCONSIDERATIONS = zcomun2 + "SCO_CONSIDERATIONS";                              |
| 87  | expresión de cálculo/transformación: String zSSENUMVAC2 = zcomun3 + "SSE_NUM_VAC";                                         |
| 88  | expresión de cálculo/transformación: String zSTDNJOBCODE2 = zcomun3 + "STD_N_JOB_CODE";                                    |
| 89  | expresión de cálculo/transformación: String zSTDNWORKLOCATION2 = zcomun3 + "STD_N_WORK_LOCATION";                          |
| 90  | expresión de cálculo/transformación: String zSTDNWORKUNIT2 = zcomun3 + "STD_N_WORK_UNIT";                                  |
| 92  | expresión de cálculo/transformación: String zSUELDOMINIMO2 = zcomun3 + "SUELDO_MINIMO";                                    |
| 93  | expresión de cálculo/transformación: String zSUELDOMAXIMO2 = zcomun3 + "SUELDO_MAXIMO";                                    |
| 94  | expresión de cálculo/transformación: String zSCODTLIMIT2 = zcomun3 + "SCO_DT_LIMIT";                                       |
| 95  | expresión de cálculo/transformación: String zSCODTINCORPORATE2 = zcomun3 + "SCO_DT_INCORPORATE";                           |
| 96  | expresión de cálculo/transformación: String zNMCURRENCY2 = zcomun3 + "NM_CURRENCY";                                        |
| 97  | expresión de cálculo/transformación: String zMOVILIDADNAC2 = zcomun3 + "MOVILIDAD_NAC";                                    |
| 98  | expresión de cálculo/transformación: String zMOVILIDADINT2= zcomun3 + "MOVILIDAD_INT";                                     |
| 99  | expresión de cálculo/transformación: String zCONSIDERATIONS2 = zcomun3 + "SCO_CONSIDERATIONS";                             |
| 100 | expresión de cálculo/transformación: String zSCOCOMMENT = zcomun3 + "COMMENT";                                             |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 11  | /mss_g3/mss_g3_trans.jsp                              |
| 28  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 29  | ../../sse_generico/espanol/generico_links.jsp         |
| 178 | ../../sse_generico/espanol/generico_ventanas.jsp      |
| 279 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 139 | /iconos/nonmae_procesos_selec_abiertos_80_100.gif               |
| 146 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3 |
| 171 | javascript:Enviarproceso(                                       |
| 281 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp             |
| 10  | ../../mss_generico/espanol/menu_mss.jsp                         |
| 11  | /mss_g3/mss_g3_trans.jsp                                        |
| 28  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              |
| 29  | ../../sse_generico/espanol/generico_links.jsp                   |
| 40  | mss_g3/mss_g3_p1.jsp                                            |
| 178 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 279 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                     |
| ------ | --- | --------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                      |
| BASE   | 11  | /mss_g3/mss_g3_trans.jsp                                        | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                    |
| BASE   | 28  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                |
| BASE   | 29  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)       |
| BASE   | 178 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md) |
| BASE   | 279 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)          |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                |
| BASE   | 146 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3 | ausente    | P06                                                                                                   |
| BASE   | 171 | javascript:Enviarproceso(                                       | dinámica   | P06                                                                                                   |
| BASE   | 281 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp             | ausente    | P06                                                                                                   |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                      |
| BASE   | 11  | /mss_g3/mss_g3_trans.jsp                                        | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                    |
| BASE   | 28  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                |
| BASE   | 29  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)       |
| BASE   | 40  | mss_g3/mss_g3_p1.jsp                                            | ausente    | P06                                                                                                   |
| BASE   | 178 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md) |
| BASE   | 279 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p1.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
