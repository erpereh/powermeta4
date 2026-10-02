# sgco_desc_dev_subaction

Identificador: `sse_generico/sgco_desc_dev_subaction.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                                                                                         |
| ------ | --------- | ------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| COLL   | espanol   | contenido diferente | sin diferencia en estos identificadores | m4:item:SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_HOURS_OTW"} |
| CYC    | espanol   | contenido diferente | sin diferencia en estos identificadores | m4:item:SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_HOURS_OTW"} |
| IBER   | espanol   | contenido diferente | sin diferencia en estos identificadores | m4:item:SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_HOURS_OTW"} |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                    | Texto                                                          | Ámbito | Diccionario                                                                             |
| ------------------------ | -------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------- |
| Label.NoDataDevSubaction | No hay datos referentes a la sesión de formación seleccionada. | BASE   | [translations/ess_train_es.properties:L22](../../referencias/literales/ess_train_es.md) |
| Label.descDevSubaction   | Descripción de la sesión de formación                          | BASE   | [translations/ess_train_es.properties:L10](../../referencias/literales/ess_train_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/sgco_desc_dev_subaction.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sgco_desc_dev_subaction.jsp) | `4f9b30fded4b868f55eec8c2a2a5b527fe2365250b20cf4ea43a0ef180076072` |    174 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/sgco_desc_dev_subaction.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sgco_desc_dev_subaction.jsp)   | `4f9b30fded4b868f55eec8c2a2a5b527fe2365250b20cf4ea43a0ef180076072` |    174 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/sgco_desc_dev_subaction.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/sgco_desc_dev_subaction.jsp) | `4f9b30fded4b868f55eec8c2a2a5b527fe2365250b20cf4ea43a0ef180076072` |    174 |
| BASE / español    | [sse_generico/espanol/sgco_desc_dev_subaction.jsp](../../../../clon_portal/portal/sse_generico/espanol/sgco_desc_dev_subaction.jsp)                             | `ab1b04bd942c8fa223bb19cc289ea06687ee3b5a37a81d1a040ba6266e257928` |    174 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/sgco_desc_dev_subaction.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sgco_desc_dev_subaction.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta      |
| --- | ----------------------------- |
| 101 | ' height="100" border="0"&gt; |
| 102 | : ( ) [valor dinámico]        |
| 115 | :                             |
| 119 | :                             |
| 123 | :                             |
| 127 | :                             |
| 135 | :                             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                     |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 101 | img     | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; alt='&lt;m4:label; m4name=&lt;%=znamenodo%&gt;; htmlsafe=true |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 16  | estado          | getParameter(request,"estado")       |
| 17  | zidSubAction    | getParameter(request,"zidSubAction") |
| 18  | zidCost         | getParameter(request,"zidCost")      |

| L   | Variable                       | Expresión fuente                                                         | Resolución estática parcial                                                                                                              |
| --- | ------------------------------ | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | estado                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                       |
| 17  | zidSubAction                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidSubAction") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidSubAction")                                                                 |
| 18  | zidCost                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCost")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCost")                                                                      |
| 25  | zsubsesion                     | "SGCO_TRAINING_DESC"                                                     | SGCO_TRAINING_DESC                                                                                                                       |
| 26  | zMeta4Object                   | "SGCO_TRAINING_DESC"                                                     | SGCO_TRAINING_DESC                                                                                                                       |
| 28  | znodo                          | "SGCO_TRA_SUBACTION_DESC"                                                | SGCO_TRA_SUBACTION_DESC                                                                                                                  |
| 29  | znodo1                         | "SGCO_TRA_SUBACT_CALENDAR_DESC"                                          | SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                                            |
| 30  | zregistroinicial               | 0                                                                        | 0                                                                                                                                        |
| 32  | zventana                       | 0                                                                        | 0                                                                                                                                        |
| 33  | zregistrofinal                 | zregistroinicial + zventana - 1                                          | 0{zventana - 1}                                                                                                                          |
| 35  | zoutputdef                     | zsubsesion + "!" + znodo + "[*]"                                         | SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC{"[*]"}                                                                                    |
| 36  | zraiz                          | znodo + ":" + zsubsesion + "!"+ znodo+"."                                | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.                                                              |
| 37  | zmove                          | znodo + ":" + znodo + "[FIRST]"                                          | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRA_SUBACTION_DESC{"[FIRST]"}                                                                           |
| 38  | znamenodo                      | znodo + ":" + zsubsesion + "!" + znodo                                   | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC                                                               |
| 40  | zoutputdef1                    | zsubsesion + "!" + znodo1 + "[*]"                                        | SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[*]"}                                                                              |
| 41  | zmove1                         | znodo1 + "[FIRST]"                                                       | SGCO_TRA_SUBACT_CALENDAR_DESC{"[FIRST]"}                                                                                                 |
| 42  | znamenodo1                     | znodo1 + ":" + zsubsesion + "!" + znodo1                                 | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC                                                   |
| 43  | zlectura1                      | zsubsesion + "!" + znodo1                                                | SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                     |
| 44  | zraiz1                         | zsubsesion + "!" + znodo1 + "."                                          | SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"."}                                                                                |
| 45  | zcomun1                        | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."      | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}                          |
| 47  | zMETODOCARGA                   | "CARGA:" + zsubsesion + "!SGCO_TRA_SUBACTION_DESC.SCO_LOAD"              | CARGA:{}SGCO_TRAINING_DESC{"!SGCO_TRA_SUBACTION_DESC.SCO_LOAD"}                                                                          |
| 49  | zSCO_NM_DEV_SUBPRODUCT         | zraiz + "SCO_NM_DEV_SUBPRODUCT"                                          | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_DEV_SUBPRODUCT"}                                     |
| 50  | zSCO_NM_DEV_SUBACTION          | zraiz + "SCO_NM_DEV_SUBACTION"                                           | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_DEV_SUBACTION"}                                      |
| 52  | zSCO_NM_DEV_ACT_TYPE           | zraiz + "SCO_NM_DEV_ACT_TYPE"                                            | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_DEV_ACT_TYPE"}                                       |
| 54  | zSCO_HOURS_OTW                 | zraiz + "SCO_HOURS_OTW"                                                  | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_HOURS_OTW"}                                             |
| 55  | zSCO_HOURS                     | zraiz + "SCO_HOURS"                                                      | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_HOURS"}                                                 |
| 56  | zSCO_DAYS                      | zraiz + "SCO_DAYS"                                                       | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_DAYS"}                                                  |
| 57  | zSCO_NM_TRAINING_LOCATION_TYPE | zraiz + "SCO_NM_TRAINING_LOCATION_TYPE"                                  | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_TRAINING_LOCATION_TYPE"}                             |
| 58  | zSCO_NM_SUBACTION_STATUS       | zraiz + "SCO_NM_SUBACTION_STATUS"                                        | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_SUBACTION_STATUS"}                                   |
| 60  | zSCO_DATE                      | zcomun1 + "SCO_DATE"                                                     | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}              |
| 61  | zSCO_HOUR_START                | zcomun1 + "SCO_HOUR_START"                                               | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_START"}        |
| 62  | zSCO_HOUR_END                  | zcomun1 + "SCO_HOUR_END"                                                 | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_END"}          |
| 63  | zSCO_HOUR_START_PAUSE          | zcomun1 + "SCO_HOUR_START_PAUSE"                                         | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_START_PAUSE"}  |
| 64  | zSCO_HOUR_END_PAUSE            | zcomun1 + "SCO_HOUR_END_PAUSE"                                           | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_END_PAUSE"}    |
| 65  | zSCO_REAL_HOURS                | zcomun1 + "SCO_REAL_HOURS"                                               | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_REAL_HOURS"}        |
| 66  | zSCO_NM_TRAIN_LOCATION         | zcomun1 + "SCO_NM_TRAIN_LOCATION"                                        | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAIN_LOCATION"} |
| 81  | zcount                         | 0                                                                        | 0                                                                                                                                        |
| 88  | zcount1                        | 0                                                                        | 0                                                                                                                                        |
| 95  | zcount1v                       | String.valueOf(zcount1)                                                  | String.valueOf(zcount1)                                                                                                                  |
| 154 | zpos                           | ""                                                                       |                                                                                                                                          |
| 155 | zregistroinicials              | String.valueOf(zregistroinicial)                                         | String.valueOf(zregistroinicial)                                                                                                         |
| 156 | zregistrofinals                | String.valueOf(zregistrofinal)                                           | String.valueOf(zregistrofinal)                                                                                                           |
| 157 | zposicions                     | "0"                                                                      | 0                                                                                                                                        |
| 157 | zcontrol                       | 0                                                                        | 0                                                                                                                                        |
| 157 | zposicion                      | 0                                                                        | 0                                                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 68  | m4:startpage | m4task=SGCO_TRAINING_DESC                                                                                                                                      |
| 69  | m4:beginjob  |                                                                                                                                                                |
| 70  | m4:datadef   | m4o=SGCO_TRAINING_DESC; m4name=SGCO_TRAINING_DESC                                                                                                              |
| 72  | m4:exec      | m4method=CARGA:{}SGCO_TRAINING_DESC{"!SGCO_TRA_SUBACTION_DESC.SCO_LOAD"}                                                                                       |
| 73  | m4:param     | name=ARG_ID_DEV_TRA; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidSubAction")                                                            |
| 74  | m4:param     | name=ARG_ID_COST; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCost")                                                                    |
| 76  | m4:outputdef | m4alias=SGCO_TRA_SUBACTION_DESC                                                                                                                                |
| 76  | m4:param     | name=m4name0; value=SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC{"[*]"}                                                                                      |
| 77  | m4:outputdef | m4alias=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                                                          |
| 77  | m4:param     | name=m4name0; value=SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[*]"}                                                                                |
| 78  | m4:endjob    |                                                                                                                                                                |
| 79  | m4:move      |                                                                                                                                                                |
| 79  | m4:param     | name=SGCO_TRAINING_DESC; value=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRA_SUBACTION_DESC{"[FIRST]"}                                                                  |
| 99  | m4:label     | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC; htmlsafe=true                                                               |
| 104 | m4:label     | item=SCO_NM_DEV_SUBPRODUCT; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                                   |
| 104 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                     |
| 104 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_DEV_ACT_TYPE"}; htmlsafe=true                                       |
| 113 | m4:label     | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC; htmlsafe=true                                                               |
| 115 | m4:label     | item=SCO_NM_DEV_SUBACTION; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                                    |
| 116 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                                      |
| 119 | m4:label     | item=SCO_NM_TRAINING_LOCATION_TYPE; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                           |
| 120 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_TRAINING_LOCATION_TYPE"}; htmlsafe=true                             |
| 123 | m4:label     | item=SCO_DAYS; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                                                |
| 124 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_DAYS"}; htmlsafe=true                                                  |
| 127 | m4:label     | item=SCO_HOURS; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                                               |
| 128 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_HOURS"}; htmlsafe=true                                                 |
| 135 | m4:label     | item=SCO_NM_SUBACTION_STATUS; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                                 |
| 136 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_SUBACTION_STATUS"}; htmlsafe=true                                   |
| 143 | m4:label     | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC; htmlsafe=true                                                   |
| 146 | m4:label     | item=SCO_DATE; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                          |
| 147 | m4:label     | item=SCO_HOUR_START; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                    |
| 148 | m4:label     | item=SCO_HOUR_END; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                      |
| 149 | m4:label     | item=SCO_HOUR_START_PAUSE; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                              |
| 150 | m4:label     | item=SCO_HOUR_END_PAUSE; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                |
| 151 | m4:label     | item=SCO_REAL_HOURS; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                    |
| 152 | m4:label     | item=SCO_NM_TRAIN_LOCATION; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                             |
| 158 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount1v).intValue()-1).toString()                                                                                          |
| 161 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; htmlsafe=true              |
| 162 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_START"}; htmlsafe=true        |
| 163 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_END"}; htmlsafe=true          |
| 164 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_START_PAUSE"}; htmlsafe=true  |
| 165 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_END_PAUSE"}; htmlsafe=true    |
| 166 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_REAL_HOURS"}; htmlsafe=true        |
| 167 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAIN_LOCATION"}; htmlsafe=true |
| 174 | m4:endpage   |                                                                                                                                                                |

| L   | Operación | Argumentos literales     |
| --- | --------- | ------------------------ |
| 84  | getCount  | znodo,zsubsesion,znodo   |
| 91  | getCount  | znodo1,zsubsesion,znodo1 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 20  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                         |
| 103 | &lt;% if (zcount &gt; 0) { %&gt;                                                                                                            |
| 105 | &lt;%} else {%&gt;                                                                                                                          |
| 111 | &lt;% if (zcount &gt; 0) { %&gt;                                                                                                            |
| 141 | &lt;%if (zcount1 &gt; 0) {%&gt;                                                                                                             |
| 159 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 33  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 35  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                  |
| 36  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!"+ znodo+"." ;                                             |
| 37  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                        |
| 38  | expresión de cálculo/transformación: String znamenodo = znodo + ":" + zsubsesion + "!" + znodo;                                             |
| 40  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                |
| 41  | expresión de cálculo/transformación: String zmove1 = znodo1 + "[FIRST]";                                                                    |
| 42  | expresión de cálculo/transformación: String znamenodo1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                          |
| 43  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                          |
| 44  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                       |
| 45  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                  |
| 47  | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!SGCO_TRA_SUBACTION_DESC.SCO_LOAD";                     |
| 49  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zraiz + "SCO_NM_DEV_SUBPRODUCT";                                       |
| 50  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBACTION = zraiz + "SCO_NM_DEV_SUBACTION";                                         |
| 52  | expresión de cálculo/transformación: String zSCO_NM_DEV_ACT_TYPE = zraiz + "SCO_NM_DEV_ACT_TYPE";                                           |
| 54  | expresión de cálculo/transformación: String zSCO_HOURS_OTW = zraiz + "SCO_HOURS_OTW";                                                       |
| 55  | expresión de cálculo/transformación: String zSCO_HOURS = zraiz + "SCO_HOURS";                                                               |
| 56  | expresión de cálculo/transformación: String zSCO_DAYS = zraiz + "SCO_DAYS";                                                                 |
| 57  | expresión de cálculo/transformación: String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz + "SCO_NM_TRAINING_LOCATION_TYPE";                       |
| 58  | expresión de cálculo/transformación: String zSCO_NM_SUBACTION_STATUS = zraiz + "SCO_NM_SUBACTION_STATUS";                                   |
| 60  | expresión de cálculo/transformación: String zSCO_DATE = zcomun1 + "SCO_DATE";                                                               |
| 61  | expresión de cálculo/transformación: String zSCO_HOUR_START = zcomun1 + "SCO_HOUR_START";                                                   |
| 62  | expresión de cálculo/transformación: String zSCO_HOUR_END = zcomun1 + "SCO_HOUR_END";                                                       |
| 63  | expresión de cálculo/transformación: String zSCO_HOUR_START_PAUSE = zcomun1 + "SCO_HOUR_START_PAUSE";                                       |
| 64  | expresión de cálculo/transformación: String zSCO_HOUR_END_PAUSE = zcomun1 + "SCO_HOUR_END_PAUSE";                                           |
| 65  | expresión de cálculo/transformación: String zSCO_REAL_HOURS = zcomun1 + "SCO_REAL_HOURS";                                                   |
| 66  | expresión de cálculo/transformación: String zSCO_NM_TRAIN_LOCATION = zcomun1 + "SCO_NM_TRAIN_LOCATION";                                     |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 9   | ../../mss_generico/espanol/menu_mss.jsp      |
| 10  | ../../sse_g3/sse_train_trans.jsp             |

| L   | Destino / recurso                                |
| --- | ------------------------------------------------ |
| 8   | /libreria/funciones_sse.js                       |
| 12  | /css/estilo_sse.css                              |
| 101 | /iconos/noname_incripciones_formacion_99_100.gif |
| 1   | ../../sse_generico/sse_generico_taglib.jsp       |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp     |
| 9   | ../../mss_generico/espanol/menu_mss.jsp          |
| 10  | ../../sse_g3/sse_train_trans.jsp                 |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_generico/espanol/sgco_desc_dev_subaction.jsp](../../../../clon_portal/portal/sse_generico/espanol/sgco_desc_dev_subaction.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta      |
| --- | ----------------------------- |
| 101 | ' height="100" border="0"&gt; |
| 102 | : ( ) [valor dinámico]        |
| 115 | :                             |
| 119 | :                             |
| 123 | :                             |
| 127 | :                             |
| 131 | :                             |
| 135 | :                             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                     |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 101 | img     | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; alt='&lt;m4:label; m4name=&lt;%=znamenodo%&gt;; htmlsafe=true |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 16  | estado          | getParameter(request,"estado")       |
| 17  | zidSubAction    | getParameter(request,"zidSubAction") |
| 18  | zidCost         | getParameter(request,"zidCost")      |

| L   | Variable                       | Expresión fuente                                                         | Resolución estática parcial                                                                                                              |
| --- | ------------------------------ | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | estado                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                       |
| 17  | zidSubAction                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidSubAction") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidSubAction")                                                                 |
| 18  | zidCost                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCost")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCost")                                                                      |
| 25  | zsubsesion                     | "SGCO_TRAINING_DESC"                                                     | SGCO_TRAINING_DESC                                                                                                                       |
| 26  | zMeta4Object                   | "SGCO_TRAINING_DESC"                                                     | SGCO_TRAINING_DESC                                                                                                                       |
| 28  | znodo                          | "SGCO_TRA_SUBACTION_DESC"                                                | SGCO_TRA_SUBACTION_DESC                                                                                                                  |
| 29  | znodo1                         | "SGCO_TRA_SUBACT_CALENDAR_DESC"                                          | SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                                            |
| 30  | zregistroinicial               | 0                                                                        | 0                                                                                                                                        |
| 32  | zventana                       | 0                                                                        | 0                                                                                                                                        |
| 33  | zregistrofinal                 | zregistroinicial + zventana - 1                                          | 0{zventana - 1}                                                                                                                          |
| 35  | zoutputdef                     | zsubsesion + "!" + znodo + "[*]"                                         | SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC{"[*]"}                                                                                    |
| 36  | zraiz                          | znodo + ":" + zsubsesion + "!"+ znodo+"."                                | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.                                                              |
| 37  | zmove                          | znodo + ":" + znodo + "[FIRST]"                                          | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRA_SUBACTION_DESC{"[FIRST]"}                                                                           |
| 38  | znamenodo                      | znodo + ":" + zsubsesion + "!" + znodo                                   | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC                                                               |
| 40  | zoutputdef1                    | zsubsesion + "!" + znodo1 + "[*]"                                        | SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[*]"}                                                                              |
| 41  | zmove1                         | znodo1 + "[FIRST]"                                                       | SGCO_TRA_SUBACT_CALENDAR_DESC{"[FIRST]"}                                                                                                 |
| 42  | znamenodo1                     | znodo1 + ":" + zsubsesion + "!" + znodo1                                 | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC                                                   |
| 43  | zlectura1                      | zsubsesion + "!" + znodo1                                                | SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                     |
| 44  | zraiz1                         | zsubsesion + "!" + znodo1 + "."                                          | SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"."}                                                                                |
| 45  | zcomun1                        | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."      | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}                          |
| 47  | zMETODOCARGA                   | "CARGA:" + zsubsesion + "!SGCO_TRA_SUBACTION_DESC.SCO_LOAD"              | CARGA:{}SGCO_TRAINING_DESC{"!SGCO_TRA_SUBACTION_DESC.SCO_LOAD"}                                                                          |
| 49  | zSCO_NM_DEV_SUBPRODUCT         | zraiz + "SCO_NM_DEV_SUBPRODUCT"                                          | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_DEV_SUBPRODUCT"}                                     |
| 50  | zSCO_NM_DEV_SUBACTION          | zraiz + "SCO_NM_DEV_SUBACTION"                                           | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_DEV_SUBACTION"}                                      |
| 52  | zSCO_NM_DEV_ACT_TYPE           | zraiz + "SCO_NM_DEV_ACT_TYPE"                                            | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_DEV_ACT_TYPE"}                                       |
| 54  | zSCO_HOURS_OTW                 | zraiz + "SCO_HOURS_OTW"                                                  | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_HOURS_OTW"}                                             |
| 55  | zSCO_HOURS                     | zraiz + "SCO_HOURS"                                                      | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_HOURS"}                                                 |
| 56  | zSCO_DAYS                      | zraiz + "SCO_DAYS"                                                       | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_DAYS"}                                                  |
| 57  | zSCO_NM_TRAINING_LOCATION_TYPE | zraiz + "SCO_NM_TRAINING_LOCATION_TYPE"                                  | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_TRAINING_LOCATION_TYPE"}                             |
| 58  | zSCO_NM_SUBACTION_STATUS       | zraiz + "SCO_NM_SUBACTION_STATUS"                                        | SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_SUBACTION_STATUS"}                                   |
| 60  | zSCO_DATE                      | zcomun1 + "SCO_DATE"                                                     | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}              |
| 61  | zSCO_HOUR_START                | zcomun1 + "SCO_HOUR_START"                                               | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_START"}        |
| 62  | zSCO_HOUR_END                  | zcomun1 + "SCO_HOUR_END"                                                 | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_END"}          |
| 63  | zSCO_HOUR_START_PAUSE          | zcomun1 + "SCO_HOUR_START_PAUSE"                                         | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_START_PAUSE"}  |
| 64  | zSCO_HOUR_END_PAUSE            | zcomun1 + "SCO_HOUR_END_PAUSE"                                           | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_END_PAUSE"}    |
| 65  | zSCO_REAL_HOURS                | zcomun1 + "SCO_REAL_HOURS"                                               | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_REAL_HOURS"}        |
| 66  | zSCO_NM_TRAIN_LOCATION         | zcomun1 + "SCO_NM_TRAIN_LOCATION"                                        | SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAIN_LOCATION"} |
| 81  | zcount                         | 0                                                                        | 0                                                                                                                                        |
| 88  | zcount1                        | 0                                                                        | 0                                                                                                                                        |
| 95  | zcount1v                       | String.valueOf(zcount1)                                                  | String.valueOf(zcount1)                                                                                                                  |
| 154 | zpos                           | ""                                                                       |                                                                                                                                          |
| 155 | zregistroinicials              | String.valueOf(zregistroinicial)                                         | String.valueOf(zregistroinicial)                                                                                                         |
| 156 | zregistrofinals                | String.valueOf(zregistrofinal)                                           | String.valueOf(zregistrofinal)                                                                                                           |
| 157 | zposicions                     | "0"                                                                      | 0                                                                                                                                        |
| 157 | zcontrol                       | 0                                                                        | 0                                                                                                                                        |
| 157 | zposicion                      | 0                                                                        | 0                                                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 68  | m4:startpage | m4task=SGCO_TRAINING_DESC                                                                                                                                      |
| 69  | m4:beginjob  |                                                                                                                                                                |
| 70  | m4:datadef   | m4o=SGCO_TRAINING_DESC; m4name=SGCO_TRAINING_DESC                                                                                                              |
| 72  | m4:exec      | m4method=CARGA:{}SGCO_TRAINING_DESC{"!SGCO_TRA_SUBACTION_DESC.SCO_LOAD"}                                                                                       |
| 73  | m4:param     | name=ARG_ID_DEV_TRA; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidSubAction")                                                            |
| 74  | m4:param     | name=ARG_ID_COST; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCost")                                                                    |
| 76  | m4:outputdef | m4alias=SGCO_TRA_SUBACTION_DESC                                                                                                                                |
| 76  | m4:param     | name=m4name0; value=SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC{"[*]"}                                                                                      |
| 77  | m4:outputdef | m4alias=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                                                          |
| 77  | m4:param     | name=m4name0; value=SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[*]"}                                                                                |
| 78  | m4:endjob    |                                                                                                                                                                |
| 79  | m4:move      |                                                                                                                                                                |
| 79  | m4:param     | name=SGCO_TRAINING_DESC; value=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRA_SUBACTION_DESC{"[FIRST]"}                                                                  |
| 99  | m4:label     | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC; htmlsafe=true                                                               |
| 104 | m4:label     | item=SCO_NM_DEV_SUBPRODUCT; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                                   |
| 104 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                     |
| 104 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_DEV_ACT_TYPE"}; htmlsafe=true                                       |
| 113 | m4:label     | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC; htmlsafe=true                                                               |
| 115 | m4:label     | item=SCO_NM_DEV_SUBACTION; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                                    |
| 116 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                                      |
| 119 | m4:label     | item=SCO_NM_TRAINING_LOCATION_TYPE; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                           |
| 120 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_TRAINING_LOCATION_TYPE"}; htmlsafe=true                             |
| 123 | m4:label     | item=SCO_DAYS; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                                                |
| 124 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_DAYS"}; htmlsafe=true                                                  |
| 127 | m4:label     | item=SCO_HOURS; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                                               |
| 128 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_HOURS"}; htmlsafe=true                                                 |
| 131 | m4:label     | item=SCO_HOURS_OTW; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                                           |
| 132 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_HOURS_OTW"}; htmlsafe=true                                             |
| 135 | m4:label     | item=SCO_NM_SUBACTION_STATUS; htmlsafe=true; outputdef=SGCO_TRA_SUBACTION_DESC                                                                                 |
| 136 | m4:item      | m4name=SGCO_TRA_SUBACTION_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACTION_DESC.{"SCO_NM_SUBACTION_STATUS"}; htmlsafe=true                                   |
| 143 | m4:label     | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC; htmlsafe=true                                                   |
| 146 | m4:label     | item=SCO_DATE; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                          |
| 147 | m4:label     | item=SCO_HOUR_START; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                    |
| 148 | m4:label     | item=SCO_HOUR_END; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                      |
| 149 | m4:label     | item=SCO_HOUR_START_PAUSE; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                              |
| 150 | m4:label     | item=SCO_HOUR_END_PAUSE; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                |
| 151 | m4:label     | item=SCO_REAL_HOURS; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                                    |
| 152 | m4:label     | item=SCO_NM_TRAIN_LOCATION; htmlsafe=true; outputdef=SGCO_TRA_SUBACT_CALENDAR_DESC                                                                             |
| 158 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount1v).intValue()-1).toString()                                                                                          |
| 161 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; htmlsafe=true              |
| 162 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_START"}; htmlsafe=true        |
| 163 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_END"}; htmlsafe=true          |
| 164 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_START_PAUSE"}; htmlsafe=true  |
| 165 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_HOUR_END_PAUSE"}; htmlsafe=true    |
| 166 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_REAL_HOURS"}; htmlsafe=true        |
| 167 | m4:item      | m4name=SGCO_TRA_SUBACT_CALENDAR_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBACT_CALENDAR_DESC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAIN_LOCATION"}; htmlsafe=true |
| 174 | m4:endpage   |                                                                                                                                                                |

| L   | Operación | Argumentos literales     |
| --- | --------- | ------------------------ |
| 84  | getCount  | znodo,zsubsesion,znodo   |
| 91  | getCount  | znodo1,zsubsesion,znodo1 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 20  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                         |
| 103 | &lt;% if (zcount &gt; 0) { %&gt;                                                                                                            |
| 105 | &lt;%} else {%&gt;                                                                                                                          |
| 111 | &lt;% if (zcount &gt; 0) { %&gt;                                                                                                            |
| 141 | &lt;%if (zcount1 &gt; 0) {%&gt;                                                                                                             |
| 159 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 33  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 35  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                  |
| 36  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!"+ znodo+"." ;                                             |
| 37  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                        |
| 38  | expresión de cálculo/transformación: String znamenodo = znodo + ":" + zsubsesion + "!" + znodo;                                             |
| 40  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                |
| 41  | expresión de cálculo/transformación: String zmove1 = znodo1 + "[FIRST]";                                                                    |
| 42  | expresión de cálculo/transformación: String znamenodo1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                          |
| 43  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                          |
| 44  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                       |
| 45  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                  |
| 47  | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!SGCO_TRA_SUBACTION_DESC.SCO_LOAD";                     |
| 49  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zraiz + "SCO_NM_DEV_SUBPRODUCT";                                       |
| 50  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBACTION = zraiz + "SCO_NM_DEV_SUBACTION";                                         |
| 52  | expresión de cálculo/transformación: String zSCO_NM_DEV_ACT_TYPE = zraiz + "SCO_NM_DEV_ACT_TYPE";                                           |
| 54  | expresión de cálculo/transformación: String zSCO_HOURS_OTW = zraiz + "SCO_HOURS_OTW";                                                       |
| 55  | expresión de cálculo/transformación: String zSCO_HOURS = zraiz + "SCO_HOURS";                                                               |
| 56  | expresión de cálculo/transformación: String zSCO_DAYS = zraiz + "SCO_DAYS";                                                                 |
| 57  | expresión de cálculo/transformación: String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz + "SCO_NM_TRAINING_LOCATION_TYPE";                       |
| 58  | expresión de cálculo/transformación: String zSCO_NM_SUBACTION_STATUS = zraiz + "SCO_NM_SUBACTION_STATUS";                                   |
| 60  | expresión de cálculo/transformación: String zSCO_DATE = zcomun1 + "SCO_DATE";                                                               |
| 61  | expresión de cálculo/transformación: String zSCO_HOUR_START = zcomun1 + "SCO_HOUR_START";                                                   |
| 62  | expresión de cálculo/transformación: String zSCO_HOUR_END = zcomun1 + "SCO_HOUR_END";                                                       |
| 63  | expresión de cálculo/transformación: String zSCO_HOUR_START_PAUSE = zcomun1 + "SCO_HOUR_START_PAUSE";                                       |
| 64  | expresión de cálculo/transformación: String zSCO_HOUR_END_PAUSE = zcomun1 + "SCO_HOUR_END_PAUSE";                                           |
| 65  | expresión de cálculo/transformación: String zSCO_REAL_HOURS = zcomun1 + "SCO_REAL_HOURS";                                                   |
| 66  | expresión de cálculo/transformación: String zSCO_NM_TRAIN_LOCATION = zcomun1 + "SCO_NM_TRAIN_LOCATION";                                     |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 9   | ../../mss_generico/espanol/menu_mss.jsp      |
| 10  | ../../sse_g3/sse_train_trans.jsp             |

| L   | Destino / recurso                                |
| --- | ------------------------------------------------ |
| 8   | /libreria/funciones_sse.js                       |
| 12  | /css/estilo_sse.css                              |
| 101 | /iconos/noname_incripciones_formacion_99_100.gif |
| 1   | ../../sse_generico/sse_generico_taglib.jsp       |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp     |
| 9   | ../../mss_generico/espanol/menu_mss.jsp          |
| 10  | ../../sse_g3/sse_train_trans.jsp                 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                   | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | -------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| COLL   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| COLL   | 9   | ../../mss_generico/espanol/menu_mss.jsp      | física     | [mss_generico/menu_mss.jsp](../../responsable/tareas/mss_generico--menu_mss.md)                                                                  |
| COLL   | 10  | ../../sse_g3/sse_train_trans.jsp             | ausente    | P06                                                                                                                                              |
| COLL   | 8   | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| COLL   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| COLL   | 9   | ../../mss_generico/espanol/menu_mss.jsp      | física     | [mss_generico/menu_mss.jsp](../../responsable/tareas/mss_generico--menu_mss.md)                                                                  |
| COLL   | 10  | ../../sse_g3/sse_train_trans.jsp             | ausente    | P06                                                                                                                                              |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| CYC    | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| CYC    | 9   | ../../mss_generico/espanol/menu_mss.jsp      | física     | [mss_generico/menu_mss.jsp](../../responsable/tareas/mss_generico--menu_mss.md)                                                                  |
| CYC    | 10  | ../../sse_g3/sse_train_trans.jsp             | ausente    | P06                                                                                                                                              |
| CYC    | 8   | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| CYC    | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| CYC    | 9   | ../../mss_generico/espanol/menu_mss.jsp      | física     | [mss_generico/menu_mss.jsp](../../responsable/tareas/mss_generico--menu_mss.md)                                                                  |
| CYC    | 10  | ../../sse_g3/sse_train_trans.jsp             | ausente    | P06                                                                                                                                              |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| IBER   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| IBER   | 9   | ../../mss_generico/espanol/menu_mss.jsp      | física     | [mss_generico/menu_mss.jsp](../../responsable/tareas/mss_generico--menu_mss.md)                                                                  |
| IBER   | 10  | ../../sse_g3/sse_train_trans.jsp             | ausente    | P06                                                                                                                                              |
| IBER   | 8   | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| IBER   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| IBER   | 9   | ../../mss_generico/espanol/menu_mss.jsp      | física     | [mss_generico/menu_mss.jsp](../../responsable/tareas/mss_generico--menu_mss.md)                                                                  |
| IBER   | 10  | ../../sse_g3/sse_train_trans.jsp             | ausente    | P06                                                                                                                                              |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| BASE   | 9   | ../../mss_generico/espanol/menu_mss.jsp      | física     | [mss_generico/menu_mss.jsp](../../responsable/tareas/mss_generico--menu_mss.md)                                                                  |
| BASE   | 10  | ../../sse_g3/sse_train_trans.jsp             | física     | [sse_g3/sse_train_trans.jsp](../../empleado/talento/sse_g3--sse_train_trans.md)                                                                  |
| BASE   | 8   | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| BASE   | 9   | ../../mss_generico/espanol/menu_mss.jsp      | física     | [mss_generico/menu_mss.jsp](../../responsable/tareas/mss_generico--menu_mss.md)                                                                  |
| BASE   | 10  | ../../sse_g3/sse_train_trans.jsp             | física     | [sse_g3/sse_train_trans.jsp](../../empleado/talento/sse_g3--sse_train_trans.md)                                                                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sgco_desc_dev_subaction.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
