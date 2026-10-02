# smco_pm_submit_details

Identificador: `mss_generico/smco_pm_submit_details.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| COLL   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                   | Texto                             | Ámbito | Diccionario                                                                         |
| ----------------------- | --------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| redirect.description    | Por favor, espere unos instantes. | BASE   | [translations/smco_pm_es.properties:L44](../../referencias/literales/smco_pm_es.md) |
| submitDetails.pageTitle | Actualización                     | BASE   | [translations/smco_pm_es.properties:L91](../../referencias/literales/smco_pm_es.md) |
| submitDetails.title     | Procesando datos                  | BASE   | [translations/smco_pm_es.properties:L92](../../referencias/literales/smco_pm_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/smco_pm_submit_details.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/smco_pm_submit_details.jsp) | `7d77e1c2751fcaff8f2a17470bf1829f5aa3a1b02f2d2f8e64599de9be67c607` |      2 |
| COLL / compartido | [m4custom/COLL/mss_generico/smco_pm_submit_details.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/smco_pm_submit_details.jsp)                 | `26bce3eafbc4d3da47556adeaab596a79fea6fb136a183275b09c2cf9c80d394` |    142 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/smco_pm_submit_details.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/smco_pm_submit_details.jsp) | `7d77e1c2751fcaff8f2a17470bf1829f5aa3a1b02f2d2f8e64599de9be67c607` |      2 |
| IBER / compartido | [m4custom/IBER/mss_generico/smco_pm_submit_details.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/smco_pm_submit_details.jsp)                 | `26bce3eafbc4d3da47556adeaab596a79fea6fb136a183275b09c2cf9c80d394` |    142 |
| BASE / español    | [mss_generico/espanol/smco_pm_submit_details.jsp](../../../../clon_portal/portal/mss_generico/espanol/smco_pm_submit_details.jsp)                             | `7d77e1c2751fcaff8f2a17470bf1829f5aa3a1b02f2d2f8e64599de9be67c607` |      2 |
| BASE / compartido | [mss_generico/smco_pm_submit_details.jsp](../../../../clon_portal/portal/mss_generico/smco_pm_submit_details.jsp)                                             | `53e44da0b2ff40d619bc377acdec10aabe52bf32a7808cba1e8cb43cb236b08f` |    154 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/smco_pm_submit_details.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/smco_pm_submit_details.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                       |
| --- | ----------------------------- |
| 1   | menu_mss.jsp                  |
| 2   | ../smco_pm_submit_details.jsp |

| L   | Destino / recurso             |
| --- | ----------------------------- |
| 1   | menu_mss.jsp                  |
| 2   | ../smco_pm_submit_details.jsp |

## Versión 2: COLL compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/smco_pm_submit_details.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/smco_pm_submit_details.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 8   | SCO_IND_TEMP    | getParameter(request,"SCO_IND_TEMP") |

| L   | Variable                 | Expresión fuente                                                                           | Resolución estática parcial                                                                |
| --- | ------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 8   | ai_sTempSave             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_IND_TEMP")                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_IND_TEMP")                   |
| 11  | sParameterName           | ""                                                                                         |                                                                                            |
| 12  | sParameterValue          | ""                                                                                         |                                                                                            |
| 13  | sFullItemName            | ""                                                                                         |                                                                                            |
| 17  | sUrl                     | "/servlet/CheckSecurity/JSP"                                                               | /servlet/CheckSecurity/JSP                                                                 |
| 18  | sGenericPage             | "/mss_g3/smco_pm_modification.jsp?pmType="                                                 | /mss_g3/smco_pm_modification.jsp?pmType=                                                   |
| 19  | iDelay                   | 0                                                                                          | 0                                                                                          |
| 22  | sSubSession              | "SRCO_PA_MODIFICATION"                                                                     | SRCO_PA_MODIFICATION                                                                       |
| 25  | sM4ObjectHire            | "SRCO_PA_MN_HIRE"                                                                          | SRCO_PA_MN_HIRE                                                                            |
| 26  | sNodeHire                | "SRCO_PA_HIRE"                                                                             | SRCO_PA_HIRE                                                                               |
| 27  | sMethodCleanHire         | "SRCO_PM_CLEAN_OBJECT"                                                                     | SRCO_PM_CLEAN_OBJECT                                                                       |
| 30  | sM4ObjectPM              | "SRCO_PA_MODIFICATION"                                                                     | SRCO_PA_MODIFICATION                                                                       |
| 31  | sNodePmApi               | "SRCO_PA_MODIFICATION"                                                                     | SRCO_PA_MODIFICATION                                                                       |
| 32  | sNodePmCom               | "SSE_COMUNICACION"                                                                         | SSE_COMUNICACION                                                                           |
| 33  | sMethodPetitionCompleted | "SRCO_WF_PETITION_COMPLETED"                                                               | SRCO_WF_PETITION_COMPLETED                                                                 |
| 34  | sResultPetition          | ""                                                                                         |                                                                                            |
| 35  | sOutputDefPmApi          | sM4ObjectPM + "!" + sNodePmApi + "[*]"                                                     | SRCO_PA_MODIFICATION{"!"}SRCO_PA_MODIFICATION{"[*]"}                                       |
| 36  | sOutputDefPmCom          | sM4ObjectPM + "!" + sNodePmCom + "[*]"                                                     | SRCO_PA_MODIFICATION{"!"}SSE_COMUNICACION{"[*]"}                                           |
| 47  | iNewRegisters            | Integer.parseInt(com.meta4.taglib.util.M4SafeRequest.getParameter(request,sParameterName)) | Integer.parseInt(com.meta4.taglib.util.M4SafeRequest.getParameter(request,sParameterName)) |
| 48  | sNode                    | sParameterName.substring(0, sParameterName.indexOf(".AddRegisters"))                       | sParameterName.substring(0, sParameterName.indexOf(".AddRegisters"))                       |
| 52  | i                        | 0                                                                                          | 0                                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                                            |
| --- | ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 38  | m4:page       | subsessionid=SRCO_PA_MODIFICATION                                                                                             |
| 39  | m4:job        |                                                                                                                               |
| 40  | m4:datadef    | m4name=SRCO_PA_MN_HIRE; m4o=SRCO_PA_MN_HIRE                                                                                   |
| 41  | m4:exec       | m4object=SRCO_PA_MN_HIRE; node=SRCO_PA_HIRE; method=SRCO_PM_CLEAN_OBJECT                                                      |
| 53  | m4:exec       | m4object=SRCO_PA_MN_HIRE; node=sParameterName.substring(0, sParameterName.indexOf(".AddRegisters")); method=AddRegister       |
| 70  | m4:setitems   |                                                                                                                               |
| 70  | m4:param      | name=; value=                                                                                                                 |
| 78  | m4:datadef    | m4name=SRCO_PA_MODIFICATION; m4o=SRCO_PA_MODIFICATION                                                                         |
| 79  | m4:exec       | m4object=SRCO_PA_MODIFICATION; node=SRCO_PA_MODIFICATION; method=SRCO_WF_PETITION_COMPLETED; alias=SRCO_WF_PETITION_COMPLETED |
| 80  | m4:param      | name=ARG_SCO_IND_TEMP; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_IND_TEMP")                         |
| 82  | m4:outputdef  | m4alias=SRCO_PA_MODIFICATION                                                                                                  |
| 82  | m4:param      | name=M4NAME0; value=SRCO_PA_MODIFICATION{"!"}SRCO_PA_MODIFICATION{"[*]"}                                                      |
| 83  | m4:outputdef  | m4alias=SSE_COMUNICACION                                                                                                      |
| 83  | m4:param      | name=M4NAME0; value=SRCO_PA_MODIFICATION{"!"}SSE_COMUNICACION{"[*]"}                                                          |
| 85  | m4:outputexec | alias=SRCO_WF_PETITION_COMPLETED; var=                                                                                        |
| 90  | m4:item       | outputdef=SRCO_PA_MODIFICATION; item=SRCO_ID_PM_TYPE; m4varname=sPmTypeId                                                     |
| 96  | m4:item       | outputdef=SRCO_PA_MODIFICATION; item=SRCO_URL; m4varname=sUrlPmType                                                           |
| 98  | m4:item       | outputdef=SRCO_PA_MODIFICATION; item=SRCO_ID_DURATION; m4varname=sIdDuration                                                  |
| 101 | m4:item       | outputdef=SRCO_PA_MODIFICATION; item=SRCO_AS_AT_DATE; m4varname=sAsAtDate                                                     |
| 105 | m4:item       | outputdef=SRCO_PA_MODIFICATION; item=SRCO_DT_START; m4varname=sStartDate                                                      |
| 106 | m4:item       | outputdef=SRCO_PA_MODIFICATION; item=SRCO_DT_END; m4varname=sEndDate                                                          |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | if(ai_sTempSave==null &#124;&#124; ai_sTempSave.equals("")){ai_sTempSave = "0";}                                                                     |
| 46  | if(sParameterName.indexOf(".AddRegisters") != -1){                                                                                                   |
| 65  | if(sNodeItem.length == 2){                                                                                                                           |
| 67  | if(!sNodeItem[1].equals("AddRegisters")){                                                                                                            |
| 71  | }else{                                                                                                                                               |
| 74  | }else{                                                                                                                                               |
| 87  | if(sResultPetition.equals("0") &amp;&amp; ai_sTempSave.equals("0")){                                                                                 |
| 92  | }else{                                                                                                                                               |
| 99  | &lt;%if(sIdDuration.equals("1")){                                                                                                                    |
| 103 | }else{                                                                                                                                               |
| 122 | &lt;%if(sResultPetition.equals("-1")){                                                                                                               |
| 128 | &lt;%}else{%&gt;                                                                                                                                     |
| 35  | expresión de cálculo/transformación: String sOutputDefPmApi = sM4ObjectPM + "!" + sNodePmApi + "[*]";                                                |
| 36  | expresión de cálculo/transformación: String sOutputDefPmCom = sM4ObjectPM + "!" + sNodePmCom + "[*]";                                                |
| 47  | expresión de cálculo/transformación: int iNewRegisters = Integer.parseInt(com.meta4.taglib.util.M4SafeRequest.getParameter(request,sParameterName)); |
| 68  | expresión de cálculo/transformación: sFullItemName = sM4ObjectHire + "!" + sParameterName;                                                           |

### Includes, navegación y dependencias

| L   | Include                         |
| --- | ------------------------------- |
| 115 | /mss_generico/smco_pm_trans.jsp |

| L   | Destino / recurso                                                                                         |
| --- | --------------------------------------------------------------------------------------------------------- |
| 118 | /css/estilo_sse.css                                                                                       |
| 4   | com.meta4.jsp                                                                                             |
| 18  | /mss_g3/smco_pm_modification.jsp?pmType=                                                                  |
| 115 | /mss_generico/smco_pm_trans.jsp                                                                           |
| 125 | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%=sSubSession%&gt; |

## Versión 3: BASE compartida

Fuente de los localizadores `L`: [mss_generico/smco_pm_submit_details.jsp](../../../../clon_portal/portal/mss_generico/smco_pm_submit_details.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 8   | SCO_IND_TEMP    | getParameter(request,"SCO_IND_TEMP") |

| L   | Variable                 | Expresión fuente                                                                           | Resolución estática parcial                                                                |
| --- | ------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 8   | ai_sTempSave             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_IND_TEMP")                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_IND_TEMP")                   |
| 11  | sParameterName           | ""                                                                                         |                                                                                            |
| 12  | sParameterValue          | ""                                                                                         |                                                                                            |
| 13  | sFullItemName            | ""                                                                                         |                                                                                            |
| 17  | sUrl                     | "/servlet/CheckSecurity/JSP"                                                               | /servlet/CheckSecurity/JSP                                                                 |
| 18  | sGenericPage             | "/mss_g3/smco_pm_modification.jsp?pmType="                                                 | /mss_g3/smco_pm_modification.jsp?pmType=                                                   |
| 19  | iDelay                   | 0                                                                                          | 0                                                                                          |
| 22  | sSubSession              | "SRCO_PA_MODIFICATION"                                                                     | SRCO_PA_MODIFICATION                                                                       |
| 25  | sM4ObjectHire            | "SRCO_PA_MN_HIRE"                                                                          | SRCO_PA_MN_HIRE                                                                            |
| 26  | sNodeHire                | "SRCO_PA_HIRE"                                                                             | SRCO_PA_HIRE                                                                               |
| 27  | sMethodCleanHire         | "SRCO_PM_CLEAN_OBJECT"                                                                     | SRCO_PM_CLEAN_OBJECT                                                                       |
| 30  | sM4ObjectPM              | "SRCO_PA_MODIFICATION"                                                                     | SRCO_PA_MODIFICATION                                                                       |
| 31  | sNodePmApi               | "SRCO_PA_MODIFICATION"                                                                     | SRCO_PA_MODIFICATION                                                                       |
| 32  | sNodePmCom               | "SSE_COMUNICACION"                                                                         | SSE_COMUNICACION                                                                           |
| 33  | sMethodPetitionCompleted | "SRCO_WF_PETITION_COMPLETED"                                                               | SRCO_WF_PETITION_COMPLETED                                                                 |
| 34  | sResultPetition          | ""                                                                                         |                                                                                            |
| 35  | sOutputDefPmApi          | sM4ObjectPM + "!" + sNodePmApi + "[*]"                                                     | SRCO_PA_MODIFICATION{"!"}SRCO_PA_MODIFICATION{"[*]"}                                       |
| 36  | sOutputDefPmCom          | sM4ObjectPM + "!" + sNodePmCom + "[*]"                                                     | SRCO_PA_MODIFICATION{"!"}SSE_COMUNICACION{"[*]"}                                           |
| 47  | iNewRegisters            | Integer.parseInt(com.meta4.taglib.util.M4SafeRequest.getParameter(request,sParameterName)) | Integer.parseInt(com.meta4.taglib.util.M4SafeRequest.getParameter(request,sParameterName)) |
| 48  | sNode                    | sParameterName.substring(0, sParameterName.indexOf(".AddRegisters"))                       | sParameterName.substring(0, sParameterName.indexOf(".AddRegisters"))                       |
| 52  | i                        | 0                                                                                          | 0                                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                                            |
| --- | ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 38  | m4:page       | subsessionid=SRCO_PA_MODIFICATION                                                                                             |
| 39  | m4:job        |                                                                                                                               |
| 40  | m4:datadef    | m4name=SRCO_PA_MN_HIRE; m4o=SRCO_PA_MN_HIRE                                                                                   |
| 41  | m4:exec       | m4object=SRCO_PA_MN_HIRE; node=SRCO_PA_HIRE; method=SRCO_PM_CLEAN_OBJECT                                                      |
| 53  | m4:exec       | m4object=SRCO_PA_MN_HIRE; node=sParameterName.substring(0, sParameterName.indexOf(".AddRegisters")); method=AddRegister       |
| 70  | m4:setitems   |                                                                                                                               |
| 70  | m4:param      | name=; value=                                                                                                                 |
| 78  | m4:datadef    | m4name=SRCO_PA_MODIFICATION; m4o=SRCO_PA_MODIFICATION                                                                         |
| 79  | m4:exec       | m4object=SRCO_PA_MODIFICATION; node=SRCO_PA_MODIFICATION; method=SRCO_WF_PETITION_COMPLETED; alias=SRCO_WF_PETITION_COMPLETED |
| 80  | m4:param      | name=ARG_SCO_IND_TEMP; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_IND_TEMP")                         |
| 82  | m4:outputdef  | m4alias=SRCO_PA_MODIFICATION                                                                                                  |
| 82  | m4:param      | name=M4NAME0; value=SRCO_PA_MODIFICATION{"!"}SRCO_PA_MODIFICATION{"[*]"}                                                      |
| 83  | m4:outputdef  | m4alias=SSE_COMUNICACION                                                                                                      |
| 83  | m4:param      | name=M4NAME0; value=SRCO_PA_MODIFICATION{"!"}SSE_COMUNICACION{"[*]"}                                                          |
| 85  | m4:outputexec | alias=SRCO_WF_PETITION_COMPLETED; var=                                                                                        |
| 90  | m4:item       | outputdef=SRCO_PA_MODIFICATION; item=SRCO_ID_PM_TYPE; m4varname=sPmTypeId                                                     |
| 96  | m4:item       | outputdef=SRCO_PA_MODIFICATION; item=SRCO_URL; m4varname=sUrlPmType                                                           |
| 98  | m4:item       | outputdef=SRCO_PA_MODIFICATION; item=SRCO_ID_DURATION; m4varname=sIdDuration                                                  |
| 101 | m4:item       | outputdef=SRCO_PA_MODIFICATION; item=SRCO_AS_AT_DATE; m4varname=sAsAtDate                                                     |
| 105 | m4:item       | outputdef=SRCO_PA_MODIFICATION; item=SRCO_DT_START; m4varname=sStartDate                                                      |
| 106 | m4:item       | outputdef=SRCO_PA_MODIFICATION; item=SRCO_DT_END; m4varname=sEndDate                                                          |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | if(ai_sTempSave==null &#124;&#124; ai_sTempSave.equals("")){ai_sTempSave = "0";}                                                                     |
| 46  | if(sParameterName.indexOf(".AddRegisters") != -1){                                                                                                   |
| 65  | if(sNodeItem.length == 2){                                                                                                                           |
| 67  | if(!sNodeItem[1].equals("AddRegisters")){                                                                                                            |
| 71  | }else{                                                                                                                                               |
| 74  | }else{                                                                                                                                               |
| 87  | if(sResultPetition.equals("0") &amp;&amp; ai_sTempSave.equals("0")){                                                                                 |
| 92  | }else{                                                                                                                                               |
| 99  | &lt;%if(sIdDuration.equals("1")){                                                                                                                    |
| 103 | }else{                                                                                                                                               |
| 134 | &lt;%if(sResultPetition.equals("-1")){                                                                                                               |
| 140 | &lt;%}else{%&gt;                                                                                                                                     |
| 35  | expresión de cálculo/transformación: String sOutputDefPmApi = sM4ObjectPM + "!" + sNodePmApi + "[*]";                                                |
| 36  | expresión de cálculo/transformación: String sOutputDefPmCom = sM4ObjectPM + "!" + sNodePmCom + "[*]";                                                |
| 47  | expresión de cálculo/transformación: int iNewRegisters = Integer.parseInt(com.meta4.taglib.util.M4SafeRequest.getParameter(request,sParameterName)); |
| 68  | expresión de cálculo/transformación: sFullItemName = sM4ObjectHire + "!" + sParameterName;                                                           |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                         |
| --- | --------------------------------------------------------------------------------------------------------- |
| 130 | /css/estilo_sse.css                                                                                       |
| 4   | com.meta4.jsp                                                                                             |
| 18  | /mss_g3/smco_pm_modification.jsp?pmType=                                                                  |
| 137 | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%=sSubSession%&gt; |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                | Resolución | Ficha / candidato                                                                                                                  |
| ------ | --- | --------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 1   | menu_mss.jsp                                                                                              | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                             |
| COLL   | 2   | ../smco_pm_submit_details.jsp                                                                             | física     | [mss_generico/smco_pm_submit_details.jsp](mss_generico--smco_pm_submit_details.md)                                                 |
| COLL   | 1   | menu_mss.jsp                                                                                              | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                             |
| COLL   | 2   | ../smco_pm_submit_details.jsp                                                                             | física     | [mss_generico/smco_pm_submit_details.jsp](mss_generico--smco_pm_submit_details.md)                                                 |
| COLL   | 115 | /mss_generico/smco_pm_trans.jsp                                                                           | contextual | [mss_generico/smco_pm_trans.jsp](mss_generico--smco_pm_trans.md); [mss_generico/smco_pm_trans.jsp](mss_generico--smco_pm_trans.md) |
| COLL   | 4   | com.meta4.jsp                                                                                             | ausente    | P06                                                                                                                                |
| COLL   | 18  | /mss_g3/smco_pm_modification.jsp?pmType=                                                                  | contextual | [mss_g3/smco_pm_modification.jsp](../talento/mss_g3--smco_pm_modification.md)                                                      |
| COLL   | 115 | /mss_generico/smco_pm_trans.jsp                                                                           | contextual | [mss_generico/smco_pm_trans.jsp](mss_generico--smco_pm_trans.md); [mss_generico/smco_pm_trans.jsp](mss_generico--smco_pm_trans.md) |
| COLL   | 125 | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%=sSubSession%&gt; | ausente    | P06                                                                                                                                |
| IBER   | 1   | menu_mss.jsp                                                                                              | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                             |
| IBER   | 2   | ../smco_pm_submit_details.jsp                                                                             | física     | [mss_generico/smco_pm_submit_details.jsp](mss_generico--smco_pm_submit_details.md)                                                 |
| IBER   | 1   | menu_mss.jsp                                                                                              | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                             |
| IBER   | 2   | ../smco_pm_submit_details.jsp                                                                             | física     | [mss_generico/smco_pm_submit_details.jsp](mss_generico--smco_pm_submit_details.md)                                                 |
| IBER   | 115 | /mss_generico/smco_pm_trans.jsp                                                                           | contextual | [mss_generico/smco_pm_trans.jsp](mss_generico--smco_pm_trans.md); [mss_generico/smco_pm_trans.jsp](mss_generico--smco_pm_trans.md) |
| IBER   | 4   | com.meta4.jsp                                                                                             | ausente    | P06                                                                                                                                |
| IBER   | 18  | /mss_g3/smco_pm_modification.jsp?pmType=                                                                  | contextual | [mss_g3/smco_pm_modification.jsp](../talento/mss_g3--smco_pm_modification.md)                                                      |
| IBER   | 115 | /mss_generico/smco_pm_trans.jsp                                                                           | contextual | [mss_generico/smco_pm_trans.jsp](mss_generico--smco_pm_trans.md); [mss_generico/smco_pm_trans.jsp](mss_generico--smco_pm_trans.md) |
| IBER   | 125 | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%=sSubSession%&gt; | ausente    | P06                                                                                                                                |
| BASE   | 1   | menu_mss.jsp                                                                                              | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                             |
| BASE   | 2   | ../smco_pm_submit_details.jsp                                                                             | física     | [mss_generico/smco_pm_submit_details.jsp](mss_generico--smco_pm_submit_details.md)                                                 |
| BASE   | 1   | menu_mss.jsp                                                                                              | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                             |
| BASE   | 2   | ../smco_pm_submit_details.jsp                                                                             | física     | [mss_generico/smco_pm_submit_details.jsp](mss_generico--smco_pm_submit_details.md)                                                 |
| BASE   | 4   | com.meta4.jsp                                                                                             | ausente    | P06                                                                                                                                |
| BASE   | 18  | /mss_g3/smco_pm_modification.jsp?pmType=                                                                  | contextual | [mss_g3/smco_pm_modification.jsp](../talento/mss_g3--smco_pm_modification.md)                                                      |
| BASE   | 137 | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%=sSubSession%&gt; | ausente    | P06                                                                                                                                |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/smco_pm_submit_details.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
