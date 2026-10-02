# tc_doc_save_include

Identificador: `tc_docs/tc_doc_save_include.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tc_docs/tc_doc_save_include.jsp](../../../../clon_portal/portal/tc_docs/tc_doc_save_include.jsp) | `edc53ad3c0d9cdf8e010f861316c7a304695a1d694cb9f74d2d5b96175572af0` |    119 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tc_docs/tc_doc_save_include.jsp](../../../../clon_portal/portal/tc_docs/tc_doc_save_include.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                              |
| --- | --------------- | ------------------------------------------- |
| 21  | _TITLE          | getParameter(sgtc_zNMInputIDDOC + "_TITLE") |

| L   | Variable           | Expresión fuente                                                        | Resolución estática parcial                                                         |
| --- | ------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 18  | sExtErrorMessage   | ""                                                                      |                                                                                     |
| 19  | ztcSaveDOCID       | request.getParameter(sgtc_zNMInputIDDOC)                                | request.getParameter(sgtc_zNMInputIDDOC)                                            |
| 21  | ztcSaveTITLEDOC    | request.getParameter(sgtc_zNMInputIDDOC + "_TITLE")                     | {request.getParameter(sgtc_zNMInputIDDOC}{"_TITLE")}                                |
| 28  | ztcmeta4objectview | "SRTC_VIEW_DOCUMENT"                                                    | SRTC_VIEW_DOCUMENT                                                                  |
| 29  | ztcnodeview        | "SRTC_VIEW_DOCUMENT"                                                    | SRTC_VIEW_DOCUMENT                                                                  |
| 30  | ztcmetodoview      | "SAVE:" + ztcmeta4objectview + "!" + ztcnodeview + ".SRTC_MTD_SAVE_DOC" | SAVE:{}SRTC_VIEW_DOCUMENT{"!"}SRTC_VIEW_DOCUMENT{".SRTC_MTD_SAVE_DOC"}              |
| 32  | ztcoutputdefview   | ztcmeta4objectview + "!" + ztcnodeview + "[*]"                          | SRTC_VIEW_DOCUMENT{"!"}SRTC_VIEW_DOCUMENT{"[*]"}                                    |
| 33  | ztccomunview       | ztcnodeview + ":" + ztcmeta4objectview + "!" + ztcnodeview + "."        | SRTC_VIEW_DOCUMENT{":"}SRTC_VIEW_DOCUMENT{"!"}SRTC_VIEW_DOCUMENT{"."}               |
| 35  | ztcSCOIDDOC        | ztccomunview + "SCO_ID_DOC"                                             | SRTC_VIEW_DOCUMENT{":"}SRTC_VIEW_DOCUMENT{"!"}SRTC_VIEW_DOCUMENT{"."}{"SCO_ID_DOC"} |
| 53  | sDescription       | ""                                                                      |                                                                                     |
| 54  | sLineSeparator     | ""                                                                      |                                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                      |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38  | m4:beginjob  |                                                                                                                                                         |
| 40  | m4:datadef   | m4o=SRTC_VIEW_DOCUMENT; m4name=SRTC_VIEW_DOCUMENT; m4preserve=true                                                                                      |
| 42  | m4:exec      | m4method=SAVE:{}SRTC_VIEW_DOCUMENT{"!"}SRTC_VIEW_DOCUMENT{".SRTC_MTD_SAVE_DOC"}                                                                         |
| 42  | m4:param     | name=ARG_ID_DOC; value=request.getParameter(sgtc_zNMInputIDDOC)                                                                                         |
| 42  | m4:param     | name=ARG_TITLE_DOC; value={request.getParameter(sgtc_zNMInputIDDOC}{"_TITLE")}                                                                          |
| 44  | m4:outputdef | m4alias=SRTC_VIEW_DOCUMENT                                                                                                                              |
| 44  | m4:param     | name=M4NAME0; value=SRTC_VIEW_DOCUMENT{"!"}SRTC_VIEW_DOCUMENT{"[*]"}                                                                                    |
| 46  | m4:endjob    |                                                                                                                                                         |
| 48  | m4:item      | m4name=SRTC_VIEW_DOCUMENT{":"}SRTC_VIEW_DOCUMENT{"!"}SRTC_VIEW_DOCUMENT{"."}{"SCO_ID_DOC"}; var=request.getParameter(sgtc_zNMInputIDDOC); htmlsafe=true |
| 97  | m4:item      | m4name=SRTC_VIEW_DOCUMENT{":"}SRTC_VIEW_DOCUMENT{"!"}SRTC_VIEW_DOCUMENT{"."}{"SCO_ID_DOC"}; htmlsafe=true                                               |
| 101 | m4:item      | m4name=SRTC_VIEW_DOCUMENT{":"}SRTC_VIEW_DOCUMENT{"!"}SRTC_VIEW_DOCUMENT{"."}{"SCO_ID_DOC"}; htmlsafe=true                                               |
| 105 | m4:item      | m4name=SRTC_VIEW_DOCUMENT{":"}SRTC_VIEW_DOCUMENT{"!"}SRTC_VIEW_DOCUMENT{"."}{"SCO_ID_DOC"}; htmlsafe=true                                               |
| 109 | m4:item      | m4name=SRTC_VIEW_DOCUMENT{":"}SRTC_VIEW_DOCUMENT{"!"}SRTC_VIEW_DOCUMENT{"."}{"SCO_ID_DOC"}; htmlsafe=true                                               |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20  | if (ztcSaveDOCID==null){ztcSaveDOCID="";}                                                                                                                                 |
| 22  | if (ztcSaveTITLEDOC==null){ztcSaveTITLEDOC="";}                                                                                                                           |
| 24  | if (ztcSaveTITLEDOC.equals(""))                                                                                                                                           |
| 26  | else                                                                                                                                                                      |
| 63  | if (m.checkError(type, vMessages))                                                                                                                                        |
| 70  | if (oLogMsg != null &amp;&amp; ( oLogMsg.getCode().equals("7867176") &#124;&#124; oLogMsg.getCode().equals("7867177") &#124;&#124; oLogMsg.getCode().equals("7867174") )) |
| 91  | if( zStackError != "" )                                                                                                                                                   |
| 93  | alert(zStackError);                                                                                                                                                       |
| 95  | else                                                                                                                                                                      |
| 97  | if ("&lt;m4:item m4name="&lt;%=ztcSCOIDDOC%&gt;" htmlsafe = "true"/&gt;" == "-1")                                                                                         |
| 99  | alert(zExtDoc);                                                                                                                                                           |
| 101 | if ("&lt;m4:item m4name="&lt;%=ztcSCOIDDOC%&gt;" htmlsafe = "true"/&gt;" == "-2")                                                                                         |
| 103 | alert(zExtDocNotLoadFile);                                                                                                                                                |
| 105 | if ("&lt;m4:item m4name="&lt;%=ztcSCOIDDOC%&gt;" htmlsafe = "true"/&gt;" == "-3")                                                                                         |
| 107 | alert(zExtDocNotValiFile);                                                                                                                                                |
| 109 | if ("&lt;m4:item m4name="&lt;%=ztcSCOIDDOC%&gt;" htmlsafe = "true"/&gt;" == "-4")                                                                                         |
| 111 | alert(zExtDocNotAdapFile);                                                                                                                                                |
| 21  | expresión de cálculo/transformación: String ztcSaveTITLEDOC = request.getParameter(sgtc_zNMInputIDDOC + "_TITLE");                                                        |
| 30  | expresión de cálculo/transformación: String ztcmetodoview = "SAVE:" + ztcmeta4objectview + "!" + ztcnodeview + ".SRTC_MTD_SAVE_DOC";                                      |
| 32  | expresión de cálculo/transformación: String ztcoutputdefview = ztcmeta4objectview + "!" + ztcnodeview + "[*]";                                                            |
| 33  | expresión de cálculo/transformación: String ztccomunview = ztcnodeview + ":" + ztcmeta4objectview + "!" + ztcnodeview + ".";                                              |
| 35  | expresión de cálculo/transformación: String ztcSCOIDDOC = ztccomunview + "SCO_ID_DOC";                                                                                    |
| 74  | expresión de cálculo/transformación: sExtErrorMessage = sDescription + sLineSeparator + sExtErrorMessage;                                                                 |

### Includes, navegación y dependencias

| L   | Include                      |
| --- | ---------------------------- |
| 10  | /shco_g0/shco_gen_taglib.jsp |

| L   | Destino / recurso            |
| --- | ---------------------------- |
| 10  | /shco_g0/shco_gen_taglib.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                   | Resolución | Ficha / candidato                                          |
| ------ | --- | ---------------------------- | ---------- | ---------------------------------------------------------- |
| BASE   | 10  | /shco_g0/shco_gen_taglib.jsp | contextual | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md) |
| BASE   | 10  | /shco_g0/shco_gen_taglib.jsp | contextual | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tc_docs/tc_doc_save_include.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
