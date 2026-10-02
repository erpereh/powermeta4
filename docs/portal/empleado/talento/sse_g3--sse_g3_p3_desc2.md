# Descripción de un curso programado

Identificador: `sse_g3/sse_g3_p3_desc2.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave       | Texto  | Ámbito | Diccionario                                                                             |
| ----------- | ------ | ------ | --------------------------------------------------------------------------------------- |
| Label.State | Estado | BASE   | [translations/ess_train_es.properties:L11](../../referencias/literales/ess_train_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p3_desc2.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3_desc2.jsp) | `66f3d6c88767300336e191f4e2f5ec1d2eee395989fabb201b9a94156f7246de` |    174 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p3_desc2.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3_desc2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                        |
| --- | ----------------------------------------------- |
| 8   | Descripción de un curso programado              |
| 102 | Descripción del curso de formación              |
| 105 | Nombre del curso: ( ) Inscripciones a formación |
| 112 | Descripción del curso de formación              |
| 114 | Sesión:                                         |
| 118 | Lugar:                                          |
| 122 | Días:                                           |
| 126 | Número de horas:                                |
| 130 | Número de horas extras:                         |
| 134 | [valor dinámico]:                               |
| 145 | Día                                             |
| 146 | Hora de inicio                                  |
| 147 | Hora de fin                                     |
| 148 | Hora de inicio pausa                            |
| 149 | Hora de fin pausa                               |
| 150 | Horas                                           |
| 151 | Lugar                                           |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                      |
| --- | ------- | -------------------------------------------------------------------------------------------------------------- |
| 104 | img     | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; height=100; alt=Inscripción en curso; border=0 |
| 107 | a       | class=enlacefuncional; title=Inscripciones a formación; href=sse_g3_p7.jsp?estado=31                           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 17  | estado          | getParameter(request,"estado")  |
| 18  | zidtrtb         | getParameter(request,"zidtrtb") |

| L   | Variable                       | Expresión fuente                                                    | Resolución estática parcial                                                                             |
| --- | ------------------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 17  | estado                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                      |
| 18  | zidtrtb                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")                                     |
| 27  | zsubsesion                     | "SSM_ENROLLMENT_OVERVIEW"                                           | SSM_ENROLLMENT_OVERVIEW                                                                                 |
| 28  | zMeta4Object                   | "SSM_ENROLLMENT_OVERVIEW"                                           | SSM_ENROLLMENT_OVERVIEW                                                                                 |
| 30  | znodo1                         | "M4T_DS"                                                            | M4T_DS                                                                                                  |
| 31  | znodo2                         | "M4T_CAL_DS"                                                        | M4T_CAL_DS                                                                                              |
| 32  | ztipocarga                     | "M4S"                                                               | M4S                                                                                                     |
| 33  | zregistroinicial               | 0                                                                   | 0                                                                                                       |
| 35  | zventana                       | 0                                                                   | 0                                                                                                       |
| 36  | zregistrofinal                 | zregistroinicial + zventana - 1                                     | 0{zventana - 1}                                                                                         |
| 38  | zoutputdef1                    | zsubsesion + "!" + znodo1 + "[*]"                                   | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS{"[*]"}                                                               |
| 39  | zraiz1                         | znodo1 + ":" + zsubsesion + "!"+ znodo1+"."                         | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.                                                          |
| 40  | zmove1                         | znodo1 + ":" + znodo1 + "[FIRST]"                                   | M4T_DS{":"}M4T_DS{"[FIRST]"}                                                                            |
| 42  | zoutputdef2                    | zsubsesion + "!" + znodo2 + "[*]"                                   | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[*]"}                                                           |
| 43  | zmove2                         | znodo2 + "[FIRST]"                                                  | M4T_CAL_DS{"[FIRST]"}                                                                                   |
| 44  | zlectura2                      | zsubsesion + "!" + znodo2                                           | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS                                                                  |
| 45  | zraiz2                         | zsubsesion + "!" + znodo2 + "."                                     | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"."}                                                             |
| 46  | zcomun2                        | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "." | M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}                          |
| 48  | zMETODOCARGA                   | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                      | CARGA:{}SSM_ENROLLMENT_OVERVIEW{"!SSM_PRINCIPAL.CARGA"}                                                 |
| 50  | zSCO_NM_DEV_SUBPRODUCT         | zraiz1 + "SCO_NM_DEV_SUBPRODUCT"                                    | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_NM_DEV_SUBPRODUCT"}                                 |
| 51  | zSCO_NM_DEV_SUBACTION          | zraiz1 + "SCO_NM_DEV_SUBACTION"                                     | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_NM_DEV_SUBACTION"}                                  |
| 55  | zSCO_ID_DEV_PRO_TYPE           | zraiz1 + "SCO_ID_DEV_PRO_TYPE"                                      | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_ID_DEV_PRO_TYPE"}                                   |
| 56  | zSCO_NM_DEV_PRO_TYPE           | zraiz1 + "SCO_NM_DEV_ACT_TYPE"                                      | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_NM_DEV_ACT_TYPE"}                                   |
| 57  | zSCO_NM_DEV_PRODUCT            | zraiz1 + "SCO_NM_DEV_PRODUCT"                                       | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_NM_DEV_PRODUCT"}                                    |
| 58  | zSCO_NM_PRODUCT_TYPE           | zraiz1 + "SCO_NM_PRODUCT_TYPE"                                      | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_NM_PRODUCT_TYPE"}                                   |
| 59  | zSCO_EDUCAT_OBJ                | zraiz1 + "SCO_EDUCAT_OBJ"                                           | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_EDUCAT_OBJ"}                                        |
| 60  | zSCO_HTTP_PATH                 | zraiz1 + "SCO_HTTP_PATH"                                            | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_HTTP_PATH"}                                         |
| 62  | zSCO_HOURS_OTW                 | zraiz1 + "SCO_HOURS_OTW"                                            | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_HOURS_OTW"}                                         |
| 63  | zSCO_HOURS                     | zraiz1 + "SCO_HOURS"                                                | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_HOURS"}                                             |
| 64  | zSCO_DAYS                      | zraiz1 + "SCO_DAYS"                                                 | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_DAYS"}                                              |
| 65  | zSCO_NM_TRAINING_LOCATION_TYPE | zraiz1 + "SCO_NM_TRAINING_LOCATION_TYPE"                            | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_NM_TRAINING_LOCATION_TYPE"}                         |
| 66  | zSCO_NM_SUBACTION_STATUS       | zraiz1 + "SCO_NM_SUBACTION_STATUS"                                  | M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_NM_SUBACTION_STATUS"}                               |
| 68  | zSCO_DATE                      | zcomun2 + "SCO_DATE"                                                | M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}              |
| 70  | zSCO_HOUR_START                | zcomun2 + "SCO_HOUR_START"                                          | M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_START"}        |
| 71  | zSCO_HOUR_END                  | zcomun2 + "SCO_HOUR_END"                                            | M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_END"}          |
| 72  | zSCO_HOUR_START_PAUSE          | zcomun2 + "SCO_HOUR_START_PAUSE"                                    | M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_START_PAUSE"}  |
| 73  | zSCO_HOUR_END_PAUSE            | zcomun2 + "SCO_HOUR_END_PAUSE"                                      | M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_END_PAUSE"}    |
| 74  | zSCO_REAL_HOURS                | zcomun2 + "SCO_REAL_HOURS"                                          | M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_REAL_HOURS"}        |
| 75  | zSCO_NM_TRAIN_LOCATION         | zcomun2 + "SCO_NM_TRAIN_LOCATION"                                   | M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAIN_LOCATION"} |
| 91  | zcount2                        | 0                                                                   | 0                                                                                                       |
| 98  | zcount2v                       | String.valueOf(zcount2)                                             | String.valueOf(zcount2)                                                                                 |
| 153 | zpos                           | ""                                                                  |                                                                                                         |
| 154 | zregistroinicials              | String.valueOf(zregistroinicial)                                    | String.valueOf(zregistroinicial)                                                                        |
| 155 | zregistrofinals                | String.valueOf(zregistrofinal)                                      | String.valueOf(zregistrofinal)                                                                          |
| 156 | zposicions                     | "0"                                                                 | 0                                                                                                       |
| 156 | zcontrol                       | 0                                                                   | 0                                                                                                       |
| 156 | zposicion                      | 0                                                                   | 0                                                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                            |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| 77  | m4:startpage | m4task=SSM_ENROLLMENT_OVERVIEW                                                                                                |
| 78  | m4:beginjob  |                                                                                                                               |
| 79  | m4:datadef   | m4o=SSM_ENROLLMENT_OVERVIEW; m4name=SSM_ENROLLMENT_OVERVIEW                                                                   |
| 84  | m4:exec      | m4method=CARGA:{}SSM_ENROLLMENT_OVERVIEW{"!SSM_PRINCIPAL.CARGA"}                                                              |
| 85  | m4:param     | name=TIPO_CARGA; value=M4S                                                                                                    |
| 86  | m4:outputdef | m4alias=M4T_DS                                                                                                                |
| 86  | m4:param     | name=m4name0; value=SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS{"[*]"}                                                                 |
| 87  | m4:outputdef | m4alias=M4T_CAL_DS                                                                                                            |
| 87  | m4:param     | name=m4name0; value=SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[*]"}                                                             |
| 88  | m4:endjob    |                                                                                                                               |
| 89  | m4:move      |                                                                                                                               |
| 89  | m4:param     | name=SSM_ENROLLMENT_OVERVIEW; value=M4T_DS{":"}M4T_DS{"[FIRST]"}                                                              |
| 106 | m4:item      | m4name=M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                 |
| 106 | m4:item      | m4name=M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_NM_DEV_ACT_TYPE"}; htmlsafe=true                                   |
| 115 | m4:item      | m4name=M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                                  |
| 119 | m4:item      | m4name=M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_NM_TRAINING_LOCATION_TYPE"}; htmlsafe=true                         |
| 123 | m4:item      | m4name=M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_DAYS"}; htmlsafe=true                                              |
| 127 | m4:item      | m4name=M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_HOURS"}; htmlsafe=true                                             |
| 131 | m4:item      | m4name=M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_HOURS_OTW"}; htmlsafe=true                                         |
| 135 | m4:item      | m4name=M4T_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DS.{"SCO_NM_SUBACTION_STATUS"}; htmlsafe=true                               |
| 157 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount2v).intValue()-1).toString()                                                         |
| 160 | m4:item      | m4name=M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; htmlsafe=true              |
| 161 | m4:item      | m4name=M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_START"}; htmlsafe=true        |
| 162 | m4:item      | m4name=M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_END"}; htmlsafe=true          |
| 163 | m4:item      | m4name=M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_START_PAUSE"}; htmlsafe=true  |
| 164 | m4:item      | m4name=M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_END_PAUSE"}; htmlsafe=true    |
| 165 | m4:item      | m4name=M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_REAL_HOURS"}; htmlsafe=true        |
| 166 | m4:item      | m4name=M4T_CAL_DS{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_CAL_DS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAIN_LOCATION"}; htmlsafe=true |
| 174 | m4:endpage   |                                                                                                                               |

| L   | Operación | Argumentos literales                  |
| --- | --------- | ------------------------------------- |
| 82  | setItem   | zsubsesion,znodo1,"","IDTRTB",zidtrtb |
| 94  | getCount  | znodo2,zsubsesion,znodo2              |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 20  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                         |
| 140 | &lt;%if (zcount2 &gt; 0) {%&gt;                                                                                                             |
| 158 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 36  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 38  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                |
| 39  | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!"+ znodo1+"." ;                                          |
| 40  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                                     |
| 42  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                |
| 43  | expresión de cálculo/transformación: String zmove2 = znodo2 + "[FIRST]";                                                                    |
| 44  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                                          |
| 45  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                       |
| 46  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                  |
| 48  | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                                  |
| 50  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zraiz1 + "SCO_NM_DEV_SUBPRODUCT";                                      |
| 51  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBACTION = zraiz1 + "SCO_NM_DEV_SUBACTION";                                        |
| 55  | expresión de cálculo/transformación: String zSCO_ID_DEV_PRO_TYPE = zraiz1 + "SCO_ID_DEV_PRO_TYPE";                                          |
| 56  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zraiz1 + "SCO_NM_DEV_ACT_TYPE";                                          |
| 57  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRODUCT = zraiz1 + "SCO_NM_DEV_PRODUCT";                                            |
| 58  | expresión de cálculo/transformación: String zSCO_NM_PRODUCT_TYPE = zraiz1 + "SCO_NM_PRODUCT_TYPE";                                          |
| 59  | expresión de cálculo/transformación: String zSCO_EDUCAT_OBJ = zraiz1 + "SCO_EDUCAT_OBJ";                                                    |
| 60  | expresión de cálculo/transformación: String zSCO_HTTP_PATH = zraiz1 + "SCO_HTTP_PATH";                                                      |
| 62  | expresión de cálculo/transformación: String zSCO_HOURS_OTW= zraiz1 + "SCO_HOURS_OTW";                                                       |
| 63  | expresión de cálculo/transformación: String zSCO_HOURS= zraiz1 + "SCO_HOURS";                                                               |
| 64  | expresión de cálculo/transformación: String zSCO_DAYS = zraiz1 + "SCO_DAYS";                                                                |
| 65  | expresión de cálculo/transformación: String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz1 + "SCO_NM_TRAINING_LOCATION_TYPE";                      |
| 66  | expresión de cálculo/transformación: String zSCO_NM_SUBACTION_STATUS = zraiz1 + "SCO_NM_SUBACTION_STATUS";                                  |
| 68  | expresión de cálculo/transformación: String zSCO_DATE = zcomun2 + "SCO_DATE";                                                               |
| 70  | expresión de cálculo/transformación: String zSCO_HOUR_START = zcomun2 + "SCO_HOUR_START";                                                   |
| 71  | expresión de cálculo/transformación: String zSCO_HOUR_END = zcomun2 + "SCO_HOUR_END";                                                       |
| 72  | expresión de cálculo/transformación: String zSCO_HOUR_START_PAUSE = zcomun2 + "SCO_HOUR_START_PAUSE";                                       |
| 73  | expresión de cálculo/transformación: String zSCO_HOUR_END_PAUSE = zcomun2 + "SCO_HOUR_END_PAUSE";                                           |
| 74  | expresión de cálculo/transformación: String zSCO_REAL_HOURS = zcomun2 + "SCO_REAL_HOURS";                                                   |
| 75  | expresión de cálculo/transformación: String zSCO_NM_TRAIN_LOCATION = zcomun2 + "SCO_NM_TRAIN_LOCATION";                                     |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp            |
| 12  | /sse_g3/sse_train_trans.jsp                        |
| 24  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 25  | ../../sse_generico/espanol/generico_links.jsp      |
| 173 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 9   | /css/estilo_sse.css                                |
| 10  | /libreria/funciones_sse.js                         |
| 104 | /iconos/noname_incripciones_formacion_99_100.gif   |
| 107 | sse_g3_p7.jsp?estado=31                            |
| 11  | ../../sse_generico/espanol/menu_ess.jsp            |
| 12  | /sse_g3/sse_train_trans.jsp                        |
| 24  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 25  | ../../sse_generico/espanol/generico_links.jsp      |
| 173 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 12  | /sse_g3/sse_train_trans.jsp                        | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                  |
| BASE   | 24  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 25  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 173 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 10  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 107 | sse_g3_p7.jsp?estado=31                            | física     | [sse_g3/sse_g3_p7.jsp](sse_g3--sse_g3_p7.md)                                                              |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 12  | /sse_g3/sse_train_trans.jsp                        | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                  |
| BASE   | 24  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 25  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 173 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p3_desc2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
