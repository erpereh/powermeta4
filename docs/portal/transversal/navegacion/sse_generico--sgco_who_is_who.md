# sgco_who_is_who

Identificador: `sse_generico/sgco_who_is_who.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/sse_generico/sgco_who_is_who.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sgco_who_is_who.jsp) | `454b343cb1310f6a137652c2b12e2bf9d36fb1d3b758d567ad72d4aa53fc9dff` |    103 |
| CYC / compartido  | [m4custom/CYC/sse_generico/sgco_who_is_who.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/sgco_who_is_who.jsp)   | `454b343cb1310f6a137652c2b12e2bf9d36fb1d3b758d567ad72d4aa53fc9dff` |    103 |
| IBER / compartido | [m4custom/IBER/sse_generico/sgco_who_is_who.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/sgco_who_is_who.jsp) | `454b343cb1310f6a137652c2b12e2bf9d36fb1d3b758d567ad72d4aa53fc9dff` |    103 |
| BASE / compartido | [sse_generico/sgco_who_is_who.jsp](../../../../clon_portal/portal/sse_generico/sgco_who_is_who.jsp)                             | `454b343cb1310f6a137652c2b12e2bf9d36fb1d3b758d567ad72d4aa53fc9dff` |    103 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/sgco_who_is_who.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sgco_who_is_who.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                         |
| --- | ------- | ------------------------------------------------- |
| 70  | form    | name=sendSearch                                   |
| 73  | input   | class=input; maxlength=250; id=nameEmp; type=text |
| 75  | select  | class=input; id=selWorkUnit                       |
| 76  | option  | value=                                            |
| 80  | option  | value=&lt;%=sIdWorkUnit%&gt;                      |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable            | Expresión fuente                                                                                                     | Resolución estática parcial                                                                                          |
| --- | ------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 11  | sSubSession         | "SSCO_WHO_IS_WHO"                                                                                                    | SSCO_WHO_IS_WHO                                                                                                      |
| 12  | sMeta4Object        | "SSCO_WHO_IS_WHO"                                                                                                    | SSCO_WHO_IS_WHO                                                                                                      |
| 14  | sNodeMain           | "SSCO_LABEL_WHO"                                                                                                     | SSCO_LABEL_WHO                                                                                                       |
| 15  | sDataDefMain        | sMeta4Object + "!" + sNodeMain                                                                                       | SSCO_WHO_IS_WHO{"!"}SSCO_LABEL_WHO                                                                                   |
| 16  | sOutputDefMain      | sDataDefMain + "[*]"                                                                                                 | SSCO_WHO_IS_WHO{"!"}SSCO_LABEL_WHO{"[*]"}                                                                            |
| 18  | sMethodLoad         | sDataDefMain + ".SCO_MTD_LOAD"                                                                                       | SSCO_WHO_IS_WHO{"!"}SSCO_LABEL_WHO{".SCO_MTD_LOAD"}                                                                  |
| 20  | sNodeWorkUnit       | "SSCO_WORK_UNIT_WHO"                                                                                                 | SSCO_WORK_UNIT_WHO                                                                                                   |
| 21  | sDataWorkUnit       | sMeta4Object + "!" + sNodeWorkUnit                                                                                   | SSCO_WHO_IS_WHO{"!"}SSCO_WORK_UNIT_WHO                                                                               |
| 22  | sOutputDefWorkUnit  | sDataWorkUnit + "[*]"                                                                                                | SSCO_WHO_IS_WHO{"!"}SSCO_WORK_UNIT_WHO{"[*]"}                                                                        |
| 23  | sMoveWorkUnit       | sNodeWorkUnit + ":" + sNodeWorkUnit + "[FIRST]"                                                                      | SSCO_WORK_UNIT_WHO{":"}SSCO_WORK_UNIT_WHO{"[FIRST]"}                                                                 |
| 25  | sMethodLoadWorkUnit | sDataWorkUnit + ".SCO_MTD_LOAD"                                                                                      | SSCO_WHO_IS_WHO{"!"}SSCO_WORK_UNIT_WHO{".SCO_MTD_LOAD"}                                                              |
| 27  | sTitle              | "", sFilter = "", sName = "", sWorkUnit = "", sSubtitle = "", s2Letters = "", sPhone = "", sEmail = "", sNoData = "" | {, sFilter = "", sName = "", sWorkUnit = "", sSubtitle = "", s2Letters = "", sPhone = "", sEmail = "", sNoData = ""} |
| 28  | sIdWorkUnit         | "", sNmWorkUnit = ""                                                                                                 | {, sNmWorkUnit = ""}                                                                                                 |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                                              |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44  | m4:page      | subsessionid=SSCO_WHO_IS_WHO                                                                                                                                                                    |
| 45  | m4:job       |                                                                                                                                                                                                 |
| 46  | m4:datadef   | m4name=SSCO_WHO_IS_WHO; m4o=SSCO_WHO_IS_WHO                                                                                                                                                     |
| 47  | m4:exec      | m4method=SSCO_WHO_IS_WHO{"!"}SSCO_LABEL_WHO{".SCO_MTD_LOAD"}                                                                                                                                    |
| 48  | m4:outputdef | m4alias=SSCO_LABEL_WHO                                                                                                                                                                          |
| 48  | m4:param     | name=M4NAME0; value=SSCO_WHO_IS_WHO{"!"}SSCO_LABEL_WHO{"[*]"}                                                                                                                                   |
| 50  | m4:exec      | m4method=SSCO_WHO_IS_WHO{"!"}SSCO_WORK_UNIT_WHO{".SCO_MTD_LOAD"}                                                                                                                                |
| 51  | m4:outputdef | m4alias=SSCO_WORK_UNIT_WHO                                                                                                                                                                      |
| 51  | m4:param     | name=M4NAME0; value=SSCO_WHO_IS_WHO{"!"}SSCO_WORK_UNIT_WHO{"[*]"}                                                                                                                               |
| 52  | m4:move      |                                                                                                                                                                                                 |
| 52  | m4:param     | name=SSCO_WHO_IS_WHO; value=SSCO_WORK_UNIT_WHO{":"}SSCO_WORK_UNIT_WHO{"[FIRST]"}                                                                                                                |
| 56  | m4:label     | get=item; outputdef=SSCO_LABEL_WHO; item=SCO_PRP_TITLE; var={, sFilter = "", sName = "", sWorkUnit = "", sSubtitle = "", s2Letters = "", sPhone = "", sEmail = "", sNoData = ""}; htmlsafe=true |
| 57  | m4:label     | get=item; outputdef=SSCO_LABEL_WHO; item=SCO_PRP_FILTER; var=sFilter; htmlsafe=true                                                                                                             |
| 58  | m4:label     | get=item; outputdef=SSCO_LABEL_WHO; item=SCO_PRP_NAME; var=sName; htmlsafe=true                                                                                                                 |
| 59  | m4:label     | get=item; outputdef=SSCO_LABEL_WHO; item=SCO_PRP_WORK_UNIT; var=sWorkUnit; htmlsafe=true                                                                                                        |
| 60  | m4:label     | get=item; outputdef=SSCO_LABEL_WHO; item=SCO_PRP_PHONE; var=sPhone; htmlsafe=true                                                                                                               |
| 61  | m4:label     | get=item; outputdef=SSCO_LABEL_WHO; item=SCO_PRP_EMAIL; var=sEmail; htmlsafe=true                                                                                                               |
| 62  | m4:item      | outputdef=SSCO_LABEL_WHO; item=SCO_PRP_NO_DATA; var=sNoData; htmlsafe=true                                                                                                                      |
| 63  | m4:item      | outputdef=SSCO_LABEL_WHO; item=SCO_PRP_SUBTITLE; var=sSubtitle; htmlsafe=true                                                                                                                   |
| 64  | m4:item      | outputdef=SSCO_LABEL_WHO; item=SCO_PRP_2_LETTERS; var=s2Letters; htmlsafe=true                                                                                                                  |
| 77  | m4:dataloop  | outputdef=SSCO_WORK_UNIT_WHO                                                                                                                                                                    |
| 78  | m4:item      | outputdef=SSCO_WORK_UNIT_WHO; item=STD_ID_WORK_UNIT; var={, sNmWorkUnit = ""}; htmlsafe=true                                                                                                    |
| 79  | m4:item      | outputdef=SSCO_WORK_UNIT_WHO; item=STD_N_WORK_UNIT; var=sNmWorkUnit; htmlsafe=true                                                                                                              |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 15  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                   |
| 16  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                           |
| 18  | expresión de cálculo/transformación: String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";                    |
| 21  | expresión de cálculo/transformación: String sDataWorkUnit = sMeta4Object + "!" + sNodeWorkUnit;              |
| 22  | expresión de cálculo/transformación: String sOutputDefWorkUnit = sDataWorkUnit + "[*]";                      |
| 23  | expresión de cálculo/transformación: String sMoveWorkUnit = sNodeWorkUnit + ":" + sNodeWorkUnit + "[FIRST]"; |
| 25  | expresión de cálculo/transformación: String sMethodLoadWorkUnit = sDataWorkUnit + ".SCO_MTD_LOAD";           |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                     |
| --- | ------------------------------------- |
| 34  | /libreria/mootools.js                 |
| 35  | /libreria/functions_search_emp.raw.js |
| 36  | /css/style_who.css                    |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                            | Resolución | Ficha / candidato                                                            |
| ------ | --- | ------------------------------------- | ---------- | ---------------------------------------------------------------------------- |
| COLL   | 34  | /libreria/mootools.js                 | contextual | &#96;m4custom/COLL/libreria/mootools.js&#96;; &#96;libreria/mootools.js&#96; |
| COLL   | 35  | /libreria/functions_search_emp.raw.js | ausente    | P06                                                                          |
| CYC    | 34  | /libreria/mootools.js                 | contextual | &#96;libreria/mootools.js&#96;                                               |
| CYC    | 35  | /libreria/functions_search_emp.raw.js | ausente    | P06                                                                          |
| IBER   | 34  | /libreria/mootools.js                 | contextual | &#96;m4custom/IBER/libreria/mootools.js&#96;; &#96;libreria/mootools.js&#96; |
| IBER   | 35  | /libreria/functions_search_emp.raw.js | ausente    | P06                                                                          |
| BASE   | 34  | /libreria/mootools.js                 | contextual | &#96;libreria/mootools.js&#96;                                               |
| BASE   | 35  | /libreria/functions_search_emp.raw.js | ausente    | P06                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sgco_who_is_who.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
