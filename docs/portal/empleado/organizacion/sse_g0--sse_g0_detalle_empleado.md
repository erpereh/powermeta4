# Ficha del empleado

Identificador: `sse_g0/sse_g0_detalle_empleado.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/sse_g0_detalle_empleado.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_g0_detalle_empleado.jsp) | `9c45caddfd0b7f110948d457af8122afabb4801962428de9f19214b01e51250b` |    101 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/sse_g0_detalle_empleado.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_g0_detalle_empleado.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta        |
| --- | ------------------------------- |
| 7   | Ficha del empleado              |
| 69  | Ficha del empleado              |
| 72  | ' width="120" height="120"/&gt; |
| 73  | Quién es quién                  |
| 79  | Empleado:                       |
| 82  | Departamento                    |
| 86  | Puesto                          |
| 90  | Teléfono                        |
| 92  | E-Mail                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| 72  | img     | alt=Fotografía; src='&lt;%=sPathTempURI%&gt;&lt;m4:item; m4name=&lt;%=sSCO_PRP_NAME_PHOTO%&gt;; htmlsafe=true            |
| 73  | a       | class=enlacefuncional; title=Quién es quién; href=/servlet/CheckSecurity/JSP/sse_g0/sse_g0_buscar_contactos.jsp?estado=0 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 11  | estado          | getParameter(request,"estado") |
| 15  | REC             | getParameter(request,"REC")    |

| L   | Variable            | Expresión fuente                                                   | Resolución estática parcial                                                                      |
| --- | ------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 11  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                               |
| 15  | zregistro           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"REC")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"REC")                                  |
| 27  | sPathTempMap        | m4Session.getPathTempMapping()                                     | m4Session.getPathTempMapping()                                                                   |
| 28  | sPathTempURI        | m4Session.getUserTempURI() + '/'                                   | {m4Session.getUserTempURI()}{'/'}                                                                |
| 30  | zsubsesion          | "SSE_INVENTARIO"                                                   | SSE_INVENTARIO                                                                                   |
| 31  | zmeta4object        | "SSE_INVENTARIO"                                                   | SSE_INVENTARIO                                                                                   |
| 32  | zmetodocarga        | zsubsesion + "!SSE_INVENTARIO.CARGA"                               | SSE_INVENTARIO{"!SSE_INVENTARIO.CARGA"}                                                          |
| 33  | znodo               | "SSE_INVENTARIO_DETALLE"                                           | SSE_INVENTARIO_DETALLE                                                                           |
| 34  | znodo2              | "SSE_INVENTARIO"                                                   | SSE_INVENTARIO                                                                                   |
| 35  | ztipocarga          | "DET"                                                              | DET                                                                                              |
| 39  | zoutputdef          | zsubsesion + "!" + znodo + "[*]"                                   | SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"[*]"}                                                 |
| 40  | zmove               | znodo + ":" + znodo + "[FIRST]"                                    | SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO_DETALLE{"[FIRST]"}                                     |
| 41  | zraiz               | znodo + ":" + zsubsesion + "!" + znodo + "."                       | SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}                        |
| 45  | zSTDNFAMILYNAME1    | zraiz + "STD_N_FAMILY_NAME_1"                                      | SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"STD_N_FAMILY_NAME_1"} |
| 46  | zSTDNFIRSTNAME      | zraiz + "STD_N_FIRST_NAME"                                         | SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"STD_N_FIRST_NAME"}    |
| 47  | zSCOGBNAME          | zraiz + "SCO_GB_NAME"                                              | SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"SCO_GB_NAME"}         |
| 48  | zSTDIDPERSON        | zraiz + "STD_ID_PERSON"                                            | SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"STD_ID_PERSON"}       |
| 49  | zSTDEMAIL           | zraiz + "STD_EMAIL"                                                | SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"STD_EMAIL"}           |
| 50  | zSTDNWORKUNIT       | zraiz + "STD_N_WORK_UNIT"                                          | SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"STD_N_WORK_UNIT"}     |
| 51  | zSTDPHONE           | zraiz + "STD_PHONE"                                                | SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"STD_PHONE"}           |
| 52  | zSTDGBPHONE         | zraiz + "STD_GB_PHONE"                                             | SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"STD_GB_PHONE"}        |
| 53  | zJOB                | zraiz + "SCO_N_ROLE"                                               | SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"SCO_N_ROLE"}          |
| 54  | sSCO_PRP_NAME_PHOTO | zraiz + "SCO_PRP_NAME_PHOTO"                                       | SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"SCO_PRP_NAME_PHOTO"}  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                 |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------ |
| 56  | m4:startpage | m4task=SSE_INVENTARIO                                                                                              |
| 56  | m4:beginjob  |                                                                                                                    |
| 57  | m4:datadef   | m4o=SSE_INVENTARIO; m4name=SSE_INVENTARIO                                                                          |
| 63  | m4:exec      | m4method=SSE_INVENTARIO{"!SSE_INVENTARIO.CARGA"}                                                                   |
| 63  | m4:param     | name=TIPO_CARGA; value=DET                                                                                         |
| 63  | m4:param     | name=ARG_PATH_TEMP; value=m4Session.getPathTempMapping()                                                           |
| 64  | m4:outputdef | m4alias=SSE_INVENTARIO_DETALLE                                                                                     |
| 64  | m4:param     | name=m4name0; value=SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"[*]"}                                               |
| 65  | m4:endjob    |                                                                                                                    |
| 66  | m4:move      |                                                                                                                    |
| 66  | m4:param     | name=SSE_INVENTARIO; value=SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO_DETALLE{"[FIRST]"}                            |
| 79  | m4:item      | m4name=SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"SCO_GB_NAME"}; htmlsafe=true     |
| 83  | m4:item      | m4name=SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true |
| 87  | m4:item      | m4name=SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"SCO_N_ROLE"}; htmlsafe=true      |
| 91  | m4:item      | m4name=SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"STD_GB_PHONE"}; htmlsafe=true    |
| 93  | m4:item      | m4name=SSE_INVENTARIO_DETALLE{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_DETALLE{"."}{"STD_EMAIL"}; htmlsafe=true       |
| 96  | m4:endpage   |                                                                                                                    |

| L   | Operación | Argumentos literales                               |
| --- | --------- | -------------------------------------------------- |
| 60  | setItem   | zsubsesion,znodo2,"","STD_ID_PERSON_PAR",zregistro |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                              |
| --- | ------------------------------------------------------------------------------------------------- |
| 12  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                               |
| 16  | if ((zregistro==null)&#124;&#124;(zregistro.equals(""))){                                         |
| 28  | expresión de cálculo/transformación: String sPathTempURI = m4Session.getUserTempURI() + '/';      |
| 32  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_INVENTARIO.CARGA";  |
| 39  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";        |
| 40  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";              |
| 41  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "."; |
| 45  | expresión de cálculo/transformación: String zSTDNFAMILYNAME1 = zraiz + "STD_N_FAMILY_NAME_1";     |
| 46  | expresión de cálculo/transformación: String zSTDNFIRSTNAME = zraiz + "STD_N_FIRST_NAME";          |
| 47  | expresión de cálculo/transformación: String zSCOGBNAME = zraiz + "SCO_GB_NAME";                   |
| 48  | expresión de cálculo/transformación: String zSTDIDPERSON = zraiz + "STD_ID_PERSON";               |
| 49  | expresión de cálculo/transformación: String zSTDEMAIL = zraiz + "STD_EMAIL";                      |
| 50  | expresión de cálculo/transformación: String zSTDNWORKUNIT = zraiz + "STD_N_WORK_UNIT";            |
| 51  | expresión de cálculo/transformación: String zSTDPHONE = zraiz + "STD_PHONE";                      |
| 52  | expresión de cálculo/transformación: String zSTDGBPHONE = zraiz + "STD_GB_PHONE";                 |
| 53  | expresión de cálculo/transformación: String zJOB = zraiz + "SCO_N_ROLE";                          |
| 54  | expresión de cálculo/transformación: String sSCO_PRP_NAME_PHOTO = zraiz + "SCO_PRP_NAME_PHOTO";   |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 22  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 23  | ../../sse_generico/espanol/generico_links.jsp      |
| 97  | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                      |
| --- | ---------------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                                    |
| 9   | /libreria/funciones_sse.js                                             |
| 72  | &lt;%=sPathTempURI%&gt;&lt;m4:item m4name=                             |
| 73  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_buscar_contactos.jsp?estado=0 |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                                |
| 22  | ../../sse_generico/espanol/generico_menusup.jsp                        |
| 23  | ../../sse_generico/espanol/generico_links.jsp                          |
| 97  | ../../sse_generico/espanol/generico_disclaimer.jsp                     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                             | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | ---------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 22  | ../../sse_generico/espanol/generico_menusup.jsp                        | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 23  | ../../sse_generico/espanol/generico_links.jsp                          | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 97  | ../../sse_generico/espanol/generico_disclaimer.jsp                     | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 9   | /libreria/funciones_sse.js                                             | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 72  | &lt;%=sPathTempURI%&gt;&lt;m4:item m4name=                             | dinámica   | P06                                                                                                       |
| BASE   | 73  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_buscar_contactos.jsp?estado=0 | ausente    | P06                                                                                                       |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 22  | ../../sse_generico/espanol/generico_menusup.jsp                        | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 23  | ../../sse_generico/espanol/generico_links.jsp                          | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 97  | ../../sse_generico/espanol/generico_disclaimer.jsp                     | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/sse_g0_detalle_empleado.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
