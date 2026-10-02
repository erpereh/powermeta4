# Descripción de un curso

Identificador: `sse_g3/sse_g3_p3_desc3.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                     | Texto       | Ámbito | Diccionario                                                                       |
| ------------------------- | ----------- | ------ | --------------------------------------------------------------------------------- |
| Label.sse_g3_p3_mod1_Desc | Descripción | BASE   | [translations/sse_g3_es.properties:L37](../../referencias/literales/sse_g3_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p3_desc3.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3_desc3.jsp) | `f4eaa35588068528ba87870fbc95dcc68038fc6b2b2b0d6c6d45c046316a9331` |    149 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p3_desc3.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3_desc3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                        |
| --- | ----------------------------------------------- |
| 8   | Descripción de un curso                         |
| 82  | Descripción del curso de formación              |
| 85  | Nombre del curso: ( ) Inscripciones a formación |
| 92  | Descripción del curso de formación              |
| 94  | Producto tipo de formación:                     |
| 97  | Producto de formación:                          |
| 99  | Lugar:                                          |
| 104 | [valor dinámico]:                               |
| 113 | Días:                                           |
| 119 | Número de horas:                                |
| 121 | Número de horas extras:                         |
| 125 | Número mínimo de asistentes:                    |
| 127 | Número máximo de asistentes:                    |
| 134 | Autor:                                          |
| 136 | Fecha del cd:                                   |
| 138 | Unidades disponibles:                           |
| 145 | Objetivo formativo :                            |
| 146 | Ruta internet :                                 |
| 146 | "&gt;                                           |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                      |
| --- | ------- | -------------------------------------------------------------------------------------------------------------- |
| 84  | img     | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; height=100; alt=Inscripción en curso; border=0 |
| 87  | a       | class=enlacefuncional; title=Inscripciones a formación; href=sse_g3_p7.jsp?estado=31                           |
| 146 | a       | href=&lt;m4:item m4name=; htmlsafe=true                                                                        |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 16  | estado          | getParameter(request,"estado")       |
| 17  | zidtrtb         | getParameter(request,"zidtrtb")      |
| 18  | zdescription    | getParameter(request,"zdescription") |

| L   | Variable                       | Expresión fuente                                                         | Resolución estática parcial                                                     |
| --- | ------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 16  | estado                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")              |
| 17  | zidtrtb                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")             |
| 18  | zSCO_DESCRIPTION               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdescription") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdescription")        |
| 27  | zsubsesion                     | "SSM_ENROLLMENT_OVERVIEW"                                                | SSM_ENROLLMENT_OVERVIEW                                                         |
| 28  | zMeta4Object                   | "SSM_ENROLLMENT_OVERVIEW"                                                | SSM_ENROLLMENT_OVERVIEW                                                         |
| 30  | znodo1                         | "M4T_DC"                                                                 | M4T_DC                                                                          |
| 31  | ztipocarga                     | "M4T"                                                                    | M4T                                                                             |
| 32  | zregistroinicial               | 0                                                                        | 0                                                                               |
| 34  | zventana                       | 0                                                                        | 0                                                                               |
| 35  | zregistrofinal                 | zregistroinicial + zventana - 1                                          | 0{zventana - 1}                                                                 |
| 37  | zoutputdef1                    | zsubsesion + "!" + znodo1 + "[*]"                                        | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC{"[*]"}                                       |
| 38  | zraiz1                         | znodo1 + ":" + zsubsesion + "!"+ znodo1+"."                              | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.                                  |
| 39  | zmove1                         | znodo1 + ":" + znodo1 + "[FIRST]"                                        | M4T_DC{":"}M4T_DC{"[FIRST]"}                                                    |
| 42  | zMETODOCARGA                   | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                           | CARGA:{}SSM_ENROLLMENT_OVERVIEW{"!SSM_PRINCIPAL.CARGA"}                         |
| 44  | zSCO_NM_DEV_SUBPRODUCT         | zraiz1 + "SCO_NM_DEV_SUBPRODUCT"                                         | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NM_DEV_SUBPRODUCT"}         |
| 45  | zSCO_ID_DEV_PRO_TYPE           | zraiz1 + "SCO_ID_DEV_PRO_TYPE"                                           | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_ID_DEV_PRO_TYPE"}           |
| 46  | zSCO_NM_DEV_PRO_TYPE           | zraiz1 + "SCO_NM_DEV_PRO_TYPE"                                           | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NM_DEV_PRO_TYPE"}           |
| 47  | zSCO_NM_DEV_PRODUCT            | zraiz1 + "SCO_NM_DEV_PRODUCT"                                            | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NM_DEV_PRODUCT"}            |
| 48  | zSCO_NM_PRODUCT_TYPE           | zraiz1 + "SCO_NM_PRODUCT_TYPE"                                           | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NM_PRODUCT_TYPE"}           |
| 49  | zSCO_EDUCAT_OBJ                | zraiz1 + "SCO_EDUCAT_OBJ"                                                | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_EDUCAT_OBJ"}                |
| 50  | zSCO_HTTP_PATH                 | zraiz1 + "SCO_HTTP_PATH"                                                 | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_HTTP_PATH"}                 |
| 52  | zSCO_HOURS_OTW                 | zraiz1 + "SCO_HOURS_OTW"                                                 | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_HOURS_OTW"}                 |
| 53  | zSCO_HOURS                     | zraiz1 + "SCO_HOURS"                                                     | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_HOURS"}                     |
| 54  | zSCO_DAYS                      | zraiz1 + "SCO_DAYS"                                                      | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_DAYS"}                      |
| 55  | zSCO_NB_MIN                    | zraiz1 + "SCO_NB_MIN"                                                    | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NB_MIN"}                    |
| 56  | zSCO_NB_MAX                    | zraiz1 + "SCO_NB_MAX"                                                    | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NB_MAX"}                    |
| 57  | zSCO_NUMBER_OF_UNITS           | zraiz1 + "SCO_NUMBER_OF_UNITS"                                           | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NUMBER_OF_UNITS"}           |
| 58  | zSCO_NM_TRAINING_LOCATION_TYPE | zraiz1 + "SCO_NM_TRAINING_LOCATION_TYPE"                                 | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NM_TRAINING_LOCATION_TYPE"} |
| 61  | zSCO_AUTHOR                    | zraiz1 + "SCO_AUTHOR"                                                    | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_AUTHOR"}                    |
| 62  | zSCO_CD_DATE                   | zraiz1 + "SCO_CD_DATE"                                                   | M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_CD_DATE"}                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                    |
| --- | ------------ | ----------------------------------------------------------------------------------------------------- |
| 69  | m4:startpage | m4task=SSM_ENROLLMENT_OVERVIEW                                                                        |
| 70  | m4:beginjob  |                                                                                                       |
| 71  | m4:datadef   | m4o=SSM_ENROLLMENT_OVERVIEW; m4name=SSM_ENROLLMENT_OVERVIEW                                           |
| 76  | m4:exec      | m4method=CARGA:{}SSM_ENROLLMENT_OVERVIEW{"!SSM_PRINCIPAL.CARGA"}                                      |
| 77  | m4:param     | name=TIPO_CARGA; value=M4T                                                                            |
| 78  | m4:outputdef | m4alias=M4T_DC                                                                                        |
| 78  | m4:param     | name=m4name0; value=SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC{"[*]"}                                         |
| 79  | m4:endjob    |                                                                                                       |
| 80  | m4:move      |                                                                                                       |
| 80  | m4:param     | name=SSM_ENROLLMENT_OVERVIEW; value=M4T_DC{":"}M4T_DC{"[FIRST]"}                                      |
| 86  | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true         |
| 86  | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true           |
| 95  | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NM_PRODUCT_TYPE"}; htmlsafe=true           |
| 98  | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NM_DEV_PRODUCT"}; htmlsafe=true            |
| 100 | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NM_TRAINING_LOCATION_TYPE"}; htmlsafe=true |
| 109 | m4:item      | m4varname=zIdTypeC; m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_ID_DEV_PRO_TYPE"}      |
| 110 | m4:item      | m4varname=zcoDays; m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_DAYS"}                  |
| 114 | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_DAYS"}; htmlsafe=true                      |
| 120 | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_HOURS"}; htmlsafe=true                     |
| 122 | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_HOURS_OTW"}; htmlsafe=true                 |
| 126 | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NB_MIN"}; htmlsafe=true                    |
| 128 | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NB_MAX"}; htmlsafe=true                    |
| 135 | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_AUTHOR"}; htmlsafe=true                    |
| 137 | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_CD_DATE"}; htmlsafe=true                   |
| 139 | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_NUMBER_OF_UNITS"}; htmlsafe=true           |
| 145 | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_EDUCAT_OBJ"}; htmlsafe=true                |
| 146 | m4:item      | m4name=M4T_DC{":"}SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC.{"SCO_HTTP_PATH"}; htmlsafe=true                 |
| 149 | m4:endpage   |                                                                                                       |

| L   | Operación | Argumentos literales                  |
| --- | --------- | ------------------------------------- |
| 74  | setItem   | zsubsesion,znodo1,"","IDTRTB",zidtrtb |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                   |
| --- | ---------------------------------------------------------------------------------------------------------------------- |
| 20  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                    |
| 102 | &lt;%if (zSCO_DESCRIPTION.equals("")== false &amp;&amp; zSCO_DESCRIPTION.equals(null) == false){%&gt;                  |
| 111 | &lt;%if (!zcoDays.equals("1")){%&gt;                                                                                   |
| 131 | &lt;%if (zIdTypeC.equals("02")){%&gt;                                                                                  |
| 35  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                             |
| 37  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                           |
| 38  | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!"+ znodo1+"." ;                     |
| 39  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                |
| 42  | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";             |
| 44  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zraiz1 + "SCO_NM_DEV_SUBPRODUCT";                 |
| 45  | expresión de cálculo/transformación: String zSCO_ID_DEV_PRO_TYPE = zraiz1 + "SCO_ID_DEV_PRO_TYPE";                     |
| 46  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zraiz1 + "SCO_NM_DEV_PRO_TYPE";                     |
| 47  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRODUCT = zraiz1 + "SCO_NM_DEV_PRODUCT";                       |
| 48  | expresión de cálculo/transformación: String zSCO_NM_PRODUCT_TYPE = zraiz1 + "SCO_NM_PRODUCT_TYPE";                     |
| 49  | expresión de cálculo/transformación: String zSCO_EDUCAT_OBJ = zraiz1 + "SCO_EDUCAT_OBJ";                               |
| 50  | expresión de cálculo/transformación: String zSCO_HTTP_PATH = zraiz1 + "SCO_HTTP_PATH";                                 |
| 52  | expresión de cálculo/transformación: String zSCO_HOURS_OTW= zraiz1 + "SCO_HOURS_OTW";                                  |
| 53  | expresión de cálculo/transformación: String zSCO_HOURS= zraiz1 + "SCO_HOURS";                                          |
| 54  | expresión de cálculo/transformación: String zSCO_DAYS = zraiz1 + "SCO_DAYS";                                           |
| 55  | expresión de cálculo/transformación: String zSCO_NB_MIN = zraiz1 + "SCO_NB_MIN";                                       |
| 56  | expresión de cálculo/transformación: String zSCO_NB_MAX = zraiz1 + "SCO_NB_MAX";                                       |
| 57  | expresión de cálculo/transformación: String zSCO_NUMBER_OF_UNITS= zraiz1 + "SCO_NUMBER_OF_UNITS";                      |
| 58  | expresión de cálculo/transformación: String zSCO_NM_TRAINING_LOCATION_TYPE = zraiz1 + "SCO_NM_TRAINING_LOCATION_TYPE"; |
| 61  | expresión de cálculo/transformación: String zSCO_AUTHOR = zraiz1 + "SCO_AUTHOR";                                       |
| 62  | expresión de cálculo/transformación: String zSCO_CD_DATE = zraiz1 + "SCO_CD_DATE";                                     |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp            |
| 12  | /sse_g3/sse_g3_trans.jsp                           |
| 24  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 25  | ../../sse_generico/espanol/generico_links.jsp      |
| 148 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 9   | /css/estilo_sse.css                                |
| 10  | /libreria/funciones_sse.js                         |
| 84  | /iconos/noname_incripciones_formacion_99_100.gif   |
| 87  | sse_g3_p7.jsp?estado=31                            |
| 146 | &lt;m4:item m4name=                                |
| 11  | ../../sse_generico/espanol/menu_ess.jsp            |
| 12  | /sse_g3/sse_g3_trans.jsp                           |
| 24  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 25  | ../../sse_generico/espanol/generico_links.jsp      |
| 148 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 12  | /sse_g3/sse_g3_trans.jsp                           | contextual | [sse_g3/sse_g3_trans.jsp](sse_g3--sse_g3_trans.md)                                                        |
| BASE   | 24  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 25  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 148 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 10  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 87  | sse_g3_p7.jsp?estado=31                            | física     | [sse_g3/sse_g3_p7.jsp](sse_g3--sse_g3_p7.md)                                                              |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 12  | /sse_g3/sse_g3_trans.jsp                           | contextual | [sse_g3/sse_g3_trans.jsp](sse_g3--sse_g3_trans.md)                                                        |
| BASE   | 24  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 25  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 148 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p3_desc3.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
