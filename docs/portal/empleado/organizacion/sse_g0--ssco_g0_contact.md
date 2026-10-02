# ssco_g0_contact

Identificador: `sse_g0/ssco_g0_contact.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_g0_contact.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_g0_contact.jsp) | `f443e31dd6e89506206b7b947c078d3f4aa810071a922bc635c4fb94f8d7cb51` |      1 |
| BASE / compartido | [sse_g0/ssco_g0_contact.jsp](../../../../clon_portal/portal/sse_g0/ssco_g0_contact.jsp)                 | `1ac7688420ff06f624934c41da77f1198fd32a16d133202e75d0795c51f47e11` |    151 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_g0_contact.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_g0_contact.jsp). Líneas físicas, contando desde 1.

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

| L   | Include                |
| --- | ---------------------- |
| 1   | ../ssco_g0_contact.jsp |

| L   | Destino / recurso      |
| --- | ---------------------- |
| 1   | ../ssco_g0_contact.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_g0_contact.jsp](../../../../clon_portal/portal/sse_g0/ssco_g0_contact.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta              |
| --- | ------------------------------------- |
| 117 | [valor dinámico] 0 [valor dinámico] 0 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                  |
| --- | ------- | -------------------------------------------------------------------------- |
| 75  | img     | src=/iconos/inf_complementaria_empleado_100x100.gif; title=Mis contactos   |
| 82  | a       | class=aLink; href=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp |
| 88  | img     | class=nophoto; id=imgPhoto; src=                                           |
| 125 | img     | id=imgFirstPageEmp; m4action=first; title=&lt;%=sAuxLabel%&gt;             |
| 127 | img     | id=imgPrevPageEmp; m4action=prev; title=&lt;%=sAuxLabel%&gt;               |
| 129 | input   | id=inputPageEmp; type=text; maxlength=3; title=&lt;%=sAuxLabel%&gt;        |
| 131 | img     | id=imgNextPageEmp; m4action=next; title=&lt;%=sAuxLabel%&gt;               |
| 133 | img     | id=imgLastPageEmp; m4action=last; title=&lt;%=sAuxLabel%&gt;               |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable             | Expresión fuente                      | Resolución estática parcial                                |
| --- | -------------------- | ------------------------------------- | ---------------------------------------------------------- |
| 33  | sPathTempMap         | m4Session.getPathTempMapping()        | m4Session.getPathTempMapping()                             |
| 34  | sPathTempURI         | m4Session.getUserTempURI() + '/'      | {m4Session.getUserTempURI()}{'/'}                          |
| 36  | sSubSession          | "SGCO_CONTACT"                        | SGCO_CONTACT                                               |
| 37  | sMeta4Object         | "SGCO_CONTACT"                        | SGCO_CONTACT                                               |
| 39  | sNodeLabel           | "SGCO_CONTACT_LABEL"                  | SGCO_CONTACT_LABEL                                         |
| 40  | sDataDefLabel        | sMeta4Object + "!" + sNodeLabel       | SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL                        |
| 41  | sOutputDefLabel      | sDataDefLabel + "[*]"                 | SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL{"[*]"}                 |
| 42  | sMethodLoadLabel     | sDataDefLabel + ".SCO_MTD_LOAD_LABEL" | SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL{".SCO_MTD_LOAD_LABEL"} |
| 44  | sNodeLabelTable      | "SGCO_CONTACT_LABEL_TABLE"            | SGCO_CONTACT_LABEL_TABLE                                   |
| 45  | sDataDefLabelTable   | sMeta4Object + "!" + sNodeLabelTable  | SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL_TABLE                  |
| 46  | sOutputDefLabelTable | sDataDefLabelTable + "[*]"            | SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL_TABLE{"[*]"}           |
| 48  | sDescription         | ""                                    |                                                            |
| 49  | sAuxData             | ""                                    |                                                            |
| 50  | sAuxLabel            | ""                                    |                                                            |
| 51  | sAuxLabelTitle       | ""                                    |                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                             |
| --- | ------------ | ---------------------------------------------------------------------------------------------- |
| 57  | m4:page      | subsessionid=SGCO_CONTACT                                                                      |
| 58  | m4:job       |                                                                                                |
| 59  | m4:datadef   | m4name=SGCO_CONTACT; m4o=SGCO_CONTACT                                                          |
| 60  | m4:exec      | m4method=SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL{".SCO_MTD_LOAD_LABEL"}                            |
| 62  | m4:outputdef | m4alias=SGCO_CONTACT_LABEL                                                                     |
| 62  | m4:param     | name=M4NAME0; value=SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL{"[*]"}                                 |
| 63  | m4:outputdef | m4alias=SGCO_CONTACT_LABEL_TABLE                                                               |
| 63  | m4:param     | name=M4NAME0; value=SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL_TABLE{"[*]"}                           |
| 69  | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL; item=SCO_PRP_LBL_TITLE; var=; htmlsafe=true            |
| 77  | m4:item      | outputdef=SGCO_CONTACT_LABEL; item=SCO_PRP_LBL_DESC; var=; htmlsafe=true                       |
| 81  | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL; item=SCO_PRP_LBL_WHO; var=; htmlsafe=true              |
| 96  | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL; item=SCO_PRP_LBL_LIST_CONTACT; var=; htmlsafe=true     |
| 100 | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL; item=SCO_PRP_LBL_NAME; var=; htmlsafe=true             |
| 102 | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL; item=SCO_PRP_LBL_WUNIT; var=; htmlsafe=true            |
| 104 | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL; item=SCO_PRP_LBL_PHONE; var=; htmlsafe=true            |
| 106 | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL; item=SCO_PRP_LBL_EMAIL; var=; htmlsafe=true            |
| 108 | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL; item=SCO_PRP_LBL_WLOC; var=; htmlsafe=true             |
| 119 | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_PAGE; var=; htmlsafe=true       |
| 120 | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_OF; var=; htmlsafe=true         |
| 124 | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_FIRST_PAGE; var=; htmlsafe=true |
| 126 | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_PRV_PAGE; var=; htmlsafe=true   |
| 128 | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_GOTO_PAGE; var=; htmlsafe=true  |
| 130 | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_NEXT_PAGE; var=; htmlsafe=true  |
| 132 | m4:label     | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_LAST_PAGE; var=; htmlsafe=true  |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                   |
| --- | ------------------------------------------------------------------------------------------------------ |
| 34  | expresión de cálculo/transformación: String sPathTempURI = m4Session.getUserTempURI() + '/';           |
| 40  | expresión de cálculo/transformación: String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;           |
| 41  | expresión de cálculo/transformación: String sOutputDefLabel = sDataDefLabel + "[*]";                   |
| 42  | expresión de cálculo/transformación: String sMethodLoadLabel = sDataDefLabel + ".SCO_MTD_LOAD_LABEL";  |
| 45  | expresión de cálculo/transformación: String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable; |
| 46  | expresión de cálculo/transformación: String sOutputDefLabelTable = sDataDefLabelTable + "[*]";         |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 9   | ../sse_generico/sse_generico_taglib.jsp |

| L   | Destino / recurso                                        |
| --- | -------------------------------------------------------- |
| 12  | /libreria/mootools.js                                    |
| 13  | /libreria/meta4ajax.js                                   |
| 14  | /libreria/meta4photo.js                                  |
| 15  | /libreria/meta4table.js                                  |
| 16  | /libreria/meta4infpers.js                                |
| 17  | /libreria/functions_contact.js                           |
| 18  | /css/style_contact.css                                   |
| 19  | /css/meta4table.css                                      |
| 75  | /iconos/inf_complementaria_empleado_100x100.gif          |
| 82  | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp |
| 125 | first                                                    |
| 127 | prev                                                     |
| 131 | next                                                     |
| 133 | last                                                     |
| 9   | ../sse_generico/sse_generico_taglib.jsp                  |
| 29  | com.meta4.jsp                                            |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                               | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../ssco_g0_contact.jsp                                   | física     | [sse_g0/ssco_g0_contact.jsp](sse_g0--ssco_g0_contact.md)                                                  |
| BASE   | 1   | ../ssco_g0_contact.jsp                                   | física     | [sse_g0/ssco_g0_contact.jsp](sse_g0--ssco_g0_contact.md)                                                  |
| BASE   | 9   | ../sse_generico/sse_generico_taglib.jsp                  | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md) |
| BASE   | 12  | /libreria/mootools.js                                    | contextual | &#96;libreria/mootools.js&#96;                                                                            |
| BASE   | 13  | /libreria/meta4ajax.js                                   | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                            |
| BASE   | 14  | /libreria/meta4photo.js                                  | contextual | [libreria/meta4photo.js](../../transversal/dependencias/libreria--meta4photo.md)                          |
| BASE   | 15  | /libreria/meta4table.js                                  | contextual | [libreria/meta4table.js](../../transversal/dependencias/libreria--meta4table.md)                          |
| BASE   | 16  | /libreria/meta4infpers.js                                | contextual | [libreria/meta4infpers.js](../../transversal/dependencias/libreria--meta4infpers.md)                      |
| BASE   | 17  | /libreria/functions_contact.js                           | contextual | [libreria/functions_contact.js](../../transversal/dependencias/libreria--functions_contact.md)            |
| BASE   | 82  | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp | contextual | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                            |
| BASE   | 9   | ../sse_generico/sse_generico_taglib.jsp                  | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md) |
| BASE   | 29  | com.meta4.jsp                                            | ausente    | P06                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_g0_contact.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
