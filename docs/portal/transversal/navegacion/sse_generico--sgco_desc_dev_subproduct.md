# sgco_desc_dev_subproduct

Identificador: `sse_generico/sgco_desc_dev_subproduct.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                     | Texto                                                       | Ámbito | Diccionario                                                                             |
| ------------------------- | ----------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------- |
| Label.NoDataDevSubproduct | No hay datos referentes al curso de formación seleccionado. | BASE   | [translations/ess_train_es.properties:L21](../../referencias/literales/ess_train_es.md) |
| Label.descDevSubproduct   | Descripción del curso de formación                          | BASE   | [translations/ess_train_es.properties:L9](../../referencias/literales/ess_train_es.md)  |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/sgco_desc_dev_subproduct.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sgco_desc_dev_subproduct.jsp) | `267964a404495e903324353d7f7e054c19d6d8b44b53db8d4033b2dceba9e896` |    149 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/sgco_desc_dev_subproduct.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sgco_desc_dev_subproduct.jsp)   | `267964a404495e903324353d7f7e054c19d6d8b44b53db8d4033b2dceba9e896` |    149 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/sgco_desc_dev_subproduct.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/sgco_desc_dev_subproduct.jsp) | `267964a404495e903324353d7f7e054c19d6d8b44b53db8d4033b2dceba9e896` |    149 |
| BASE / español    | [sse_generico/espanol/sgco_desc_dev_subproduct.jsp](../../../../clon_portal/portal/sse_generico/espanol/sgco_desc_dev_subproduct.jsp)                             | `267964a404495e903324353d7f7e054c19d6d8b44b53db8d4033b2dceba9e896` |    149 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/sgco_desc_dev_subproduct.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sgco_desc_dev_subproduct.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta      |
| --- | ----------------------------- |
| 86  | ' height="100" border="0"&gt; |
| 87  | : ( ) [valor dinámico]        |
| 100 | :                             |
| 103 | :                             |
| 105 | :                             |
| 113 | :                             |
| 119 | :                             |
| 121 | :                             |
| 125 | :                             |
| 127 | :                             |
| 134 | :                             |
| 136 | :                             |
| 138 | :                             |
| 145 | :                             |
| 146 | :                             |
| 146 | "&gt;                         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                     |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 86  | img     | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; alt='&lt;m4:label; m4name=&lt;%=znamenodo%&gt;; htmlsafe=true |
| 146 | a       | href=&lt;m4:item m4name=; htmlsafe=true                                                                                       |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 14  | estado          | getParameter(request,"estado")        |
| 15  | zidSubProduct   | getParameter(request,"zidSubProduct") |
| 16  | zidCost         | getParameter(request,"zidCost")       |

| L   | Variable                       | Expresión fuente                                                          | Resolución estática parcial                                                                                    |
| --- | ------------------------------ | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 14  | estado                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                             |
| 15  | zidSubProduct                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidSubProduct") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidSubProduct")                                      |
| 16  | zidCost                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCost")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCost")                                            |
| 23  | zsubsesion                     | "SGCO_TRAINING_DESC"                                                      | SGCO_TRAINING_DESC                                                                                             |
| 24  | zMeta4Object                   | "SGCO_TRAINING_DESC"                                                      | SGCO_TRAINING_DESC                                                                                             |
| 26  | znodo                          | "SGCO_TRA_SUBPRODUCT_DESC"                                                | SGCO_TRA_SUBPRODUCT_DESC                                                                                       |
| 28  | zregistroinicial               | 0                                                                         | 0                                                                                                              |
| 30  | zventana                       | 0                                                                         | 0                                                                                                              |
| 31  | zregistrofinal                 | zregistroinicial + zventana - 1                                           | 0{zventana - 1}                                                                                                |
| 33  | zoutputdef                     | zsubsesion + "!" + znodo + "[*]"                                          | SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC{"[*]"}                                                         |
| 34  | zraiz                          | znodo + ":" + zsubsesion + "!"+ znodo+"."                                 | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.                                  |
| 35  | zmove                          | znodo + ":" + znodo + "[FIRST]"                                           | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRA_SUBPRODUCT_DESC{"[FIRST]"}                                               |
| 37  | znamenodo                      | znodo + ":" + zsubsesion + "!" + znodo                                    | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC                                   |
| 39  | zMETODOCARGA                   | "CARGA:" + zsubsesion + "!SGCO_TRA_SUBPRODUCT_DESC.SCO_LOAD"              | CARGA:{}SGCO_TRAINING_DESC{"!SGCO_TRA_SUBPRODUCT_DESC.SCO_LOAD"}                                               |
| 41  | zSCO_NM_DEV_SUBPRODUCT         | zraiz + "SCO_NM_DEV_SUBPRODUCT"                                           | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NM_DEV_SUBPRODUCT"}         |
| 42  | zSCO_ID_DEV_PRO_TYPE           | zraiz + "SCO_ID_DEV_PRO_TYPE"                                             | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_ID_DEV_PRO_TYPE"}           |
| 43  | zSCO_NM_DEV_PRO_TYPE           | zraiz + "SCO_NM_DEV_PRO_TYPE"                                             | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NM_DEV_PRO_TYPE"}           |
| 44  | zSCO_NM_DEV_PRODUCT            | zraiz + "SCO_NM_DEV_PRODUCT"                                              | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NM_DEV_PRODUCT"}            |
| 45  | zSCO_NM_PRODUCT_TYPE           | zraiz + "SCO_NM_PRODUCT_TYPE"                                             | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NM_PRODUCT_TYPE"}           |
| 46  | zSCO_EDUCAT_OBJ                | zraiz + "SCO_EDUCAT_OBJ"                                                  | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_EDUCAT_OBJ"}                |
| 47  | zSCO_HTTP_PATH                 | zraiz + "SCO_HTTP_PATH"                                                   | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_HTTP_PATH"}                 |
| 49  | zSCO_HOURS_OTW                 | zraiz + "SCO_HOURS_OTW"                                                   | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_HOURS_OTW"}                 |
| 50  | zSCO_HOURS                     | zraiz + "SCO_HOURS"                                                       | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_HOURS"}                     |
| 51  | zSCO_DAYS                      | zraiz + "SCO_DAYS"                                                        | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_DAYS"}                      |
| 52  | zSCO_NB_MIN                    | zraiz + "SCO_NB_MIN"                                                      | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NB_MIN"}                    |
| 53  | zSCO_NB_MAX                    | zraiz + "SCO_NB_MAX"                                                      | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NB_MAX"}                    |
| 54  | zSCO_NUMBER_OF_UNITS           | zraiz + "SCO_NUMBER_OF_UNITS"                                             | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NUMBER_OF_UNITS"}           |
| 55  | zSCO_NM_TRAINING_LOCATION_TYPE | zraiz + "SCO_NM_TRAINING_LOCATION_TYPE"                                   | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NM_TRAINING_LOCATION_TYPE"} |
| 58  | zSCO_AUTHOR                    | zraiz + "SCO_AUTHOR"                                                      | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_AUTHOR"}                    |
| 59  | zSCO_CD_DATE                   | zraiz + "SCO_CD_DATE"                                                     | SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_CD_DATE"}                   |
| 75  | zcount                         | 0                                                                         | 0                                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                   |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 62  | m4:startpage | m4task=SGCO_TRAINING_DESC                                                                                                            |
| 63  | m4:beginjob  |                                                                                                                                      |
| 64  | m4:datadef   | m4o=SGCO_TRAINING_DESC; m4name=SGCO_TRAINING_DESC                                                                                    |
| 66  | m4:exec      | m4method=CARGA:{}SGCO_TRAINING_DESC{"!SGCO_TRA_SUBPRODUCT_DESC.SCO_LOAD"}                                                            |
| 67  | m4:param     | name=ARG_ID_DEV_TRA; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidSubProduct")                                 |
| 68  | m4:param     | name=ARG_ID_COST; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCost")                                          |
| 70  | m4:outputdef | m4alias=SGCO_TRA_SUBPRODUCT_DESC                                                                                                     |
| 70  | m4:param     | name=m4name0; value=SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC{"[*]"}                                                           |
| 71  | m4:endjob    |                                                                                                                                      |
| 73  | m4:move      |                                                                                                                                      |
| 73  | m4:param     | name=SGCO_TRAINING_DESC; value=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRA_SUBPRODUCT_DESC{"[FIRST]"}                                      |
| 84  | m4:label     | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC; htmlsafe=true                                   |
| 89  | m4:label     | item=SCO_NM_DEV_SUBPRODUCT; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                        |
| 89  | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true         |
| 89  | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true           |
| 98  | m4:label     | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC; htmlsafe=true                                   |
| 100 | m4:label     | item=SCO_NM_PRODUCT_TYPE; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                          |
| 101 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NM_PRODUCT_TYPE"}; htmlsafe=true           |
| 103 | m4:label     | item=SCO_NM_DEV_PRODUCT; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                           |
| 104 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NM_DEV_PRODUCT"}; htmlsafe=true            |
| 105 | m4:label     | item=SCO_NM_TRAINING_LOCATION_TYPE; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                |
| 106 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NM_TRAINING_LOCATION_TYPE"}; htmlsafe=true |
| 109 | m4:item      | m4varname=zIdTypeC; m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_ID_DEV_PRO_TYPE"}      |
| 110 | m4:item      | m4varname=zcoDays; m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_DAYS"}                  |
| 113 | m4:label     | item=SCO_DAYS; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                                     |
| 114 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_DAYS"}; htmlsafe=true                      |
| 119 | m4:label     | item=SCO_HOURS; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                                    |
| 120 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_HOURS"}; htmlsafe=true                     |
| 121 | m4:label     | item=SCO_HOURS_OTW; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                                |
| 122 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_HOURS_OTW"}; htmlsafe=true                 |
| 125 | m4:label     | item=SCO_NB_MIN; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                                   |
| 126 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NB_MIN"}; htmlsafe=true                    |
| 127 | m4:label     | item=SCO_NB_MAX; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                                   |
| 128 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NB_MAX"}; htmlsafe=true                    |
| 134 | m4:label     | item=SCO_AUTHOR; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                                   |
| 135 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_AUTHOR"}; htmlsafe=true                    |
| 136 | m4:label     | item=SCO_CD_DATE; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                                  |
| 137 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_CD_DATE"}; htmlsafe=true                   |
| 138 | m4:label     | item=SCO_NUMBER_OF_UNITS; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                          |
| 139 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_NUMBER_OF_UNITS"}; htmlsafe=true           |
| 145 | m4:label     | item=SCO_EDUCAT_OBJ; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                               |
| 145 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_EDUCAT_OBJ"}; htmlsafe=true                |
| 146 | m4:label     | item=SCO_HTTP_PATH; htmlsafe=true; outputdef=SGCO_TRA_SUBPRODUCT_DESC                                                                |
| 146 | m4:item      | m4name=SGCO_TRA_SUBPRODUCT_DESC{":"}SGCO_TRAINING_DESC{"!"}SGCO_TRA_SUBPRODUCT_DESC.{"SCO_HTTP_PATH"}; htmlsafe=true                 |
| 149 | m4:endpage   |                                                                                                                                      |

| L   | Operación | Argumentos literales   |
| --- | --------- | ---------------------- |
| 78  | getCount  | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------------------ |
| 18  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                      |
| 88  | &lt;% if (zcount &gt; 0) { %&gt;                                                                                         |
| 90  | &lt;%} else {%&gt;                                                                                                       |
| 96  | &lt;% if (zcount &gt; 0) { %&gt;                                                                                         |
| 111 | &lt;%if (!zcoDays.equals("1")){%&gt;                                                                                     |
| 131 | &lt;%if (zIdTypeC.equals("02")){%&gt;                                                                                    |
| 31  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                               |
| 33  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                               |
| 34  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!"+ znodo+"." ;                          |
| 35  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                     |
| 37  | expresión de cálculo/transformación: String znamenodo = znodo + ":" + zsubsesion + "!" + znodo;                          |
| 39  | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!SGCO_TRA_SUBPRODUCT_DESC.SCO_LOAD"; |
| 41  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zraiz + "SCO_NM_DEV_SUBPRODUCT";                    |
| 42  | expresión de cálculo/transformación: String zSCO_ID_DEV_PRO_TYPE = zraiz + "SCO_ID_DEV_PRO_TYPE";                        |
| 43  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zraiz + "SCO_NM_DEV_PRO_TYPE";                        |
| 44  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRODUCT = zraiz + "SCO_NM_DEV_PRODUCT";                          |
| 45  | expresión de cálculo/transformación: String zSCO_NM_PRODUCT_TYPE = zraiz + "SCO_NM_PRODUCT_TYPE";                        |
| 46  | expresión de cálculo/transformación: String zSCO_EDUCAT_OBJ = zraiz + "SCO_EDUCAT_OBJ";                                  |
| 47  | expresión de cálculo/transformación: String zSCO_HTTP_PATH = zraiz + "SCO_HTTP_PATH";                                    |
| 49  | expresión de cálculo/transformación: String zSCO_HOURS_OTW = zraiz + "SCO_HOURS_OTW";                                    |
| 50  | expresión de cálculo/transformación: String zSCO_HOURS = zraiz + "SCO_HOURS";                                            |
| 51  | expresión de cálculo/transformación: String zSCO_DAYS = zraiz + "SCO_DAYS";                                              |
| 52  | expresión de cálculo/transformación: String zSCO_NB_MIN = zraiz + "SCO_NB_MIN";                                          |
| 53  | expresión de cálculo/transformación: String zSCO_NB_MAX = zraiz + "SCO_NB_MAX";                                          |
| 54  | expresión de cálculo/transformación: String zSCO_NUMBER_OF_UNITS = zraiz + "SCO_NUMBER_OF_UNITS";                        |
| 55  | expresión de cálculo/transformación: String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz + "SCO_NM_TRAINING_LOCATION_TYPE";    |
| 58  | expresión de cálculo/transformación: String zSCO_AUTHOR = zraiz + "SCO_AUTHOR";                                          |
| 59  | expresión de cálculo/transformación: String zSCO_CD_DATE = zraiz + "SCO_CD_DATE";                                        |

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
| 86  | /iconos/noname_incripciones_formacion_99_100.gif |
| 146 | &lt;m4:item m4name=                              |
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

- Confirmar exposición y permisos de `sse_generico/sgco_desc_dev_subproduct.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
