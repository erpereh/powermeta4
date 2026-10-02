# ssco_mod_document

Identificador: `sse_g0/ssco_mod_document.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave               | Texto                                                                     | Ámbito | Diccionario                                                                         |
| ------------------- | ------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| iv_mss.LblChooseDoc | Elegir documento                                                          | BASE   | [translations/smco_iv_es.properties:L59](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblDoc       | Documento                                                                 | BASE   | [translations/smco_iv_es.properties:L58](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblProcess   | Procesando datos                                                          | BASE   | [translations/smco_iv_es.properties:L63](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblSelDoc    | Selecciona el documento que deseas y pulsa enviar para aceptar el cambio. | BASE   | [translations/smco_iv_es.properties:L73](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblSend      | Enviar                                                                    | BASE   | [translations/smco_iv_es.properties:L19](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblSending   | Enviando el documento                                                     | BASE   | [translations/smco_iv_es.properties:L72](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblWait      | Por favor, espere unos instantes.                                         | BASE   | [translations/smco_iv_es.properties:L64](../../referencias/literales/smco_iv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_mod_document.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_mod_document.jsp) | `0753eb50e7ae56ac6856b64fdb9bde63654a387cf39820464ca75176e2495ee4` |    167 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_mod_document.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_mod_document.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                      |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 77  | form    | enctype=multipart/form-data; action=/servlet/CheckSecurity/JSP/sse_g0/ssco_mod_document.jsp?zDOCSave=Y; id=frmsavedoc; name=frmsavedoc; method=post                                            |
| 79  | input   | type=hidden; id=zDOCID; name=zDOCID; value=&lt;%=zIdDoc%&gt;                                                                                                                                   |
| 82  | input   | type=file; id=DOCREQUEST; name=DOCREQUEST; size=50                                                                                                                                             |
| 88  | a       | title=JSP_EXPR_tranivMSS.getProperty(; href=javascript:savedoc();                                                                                                                              |
| 88  | img     | alt=JSP_EXPR_tranivMSS.getProperty(; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 44  | zDOCSave        | getParameter(request,"zDOCSave") |
| 45  | IDDoc           | getParameter(request,"IDDoc")    |

| L   | Variable     | Expresión fuente                                                     | Resolución estática parcial                                                         |
| --- | ------------ | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 44  | zIdSaveDoc   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDOCSave") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDOCSave")                |
| 45  | zIdDoc       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDDoc")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDDoc")                   |
| 106 | zsubsesion   | "SSCO_VIEW_DOCUMENT"                                                 | SSCO_VIEW_DOCUMENT                                                                  |
| 107 | zMeta4Object | "SSCO_VIEW_DOCUMENT"                                                 | SSCO_VIEW_DOCUMENT                                                                  |
| 108 | znode        | "SSCO_VIEW_DOCUMENT"                                                 | SSCO_VIEW_DOCUMENT                                                                  |
| 109 | zmetodocarga | "CARGA:" + zsubsesion + "!SSCO_VIEW_DOCUMENT.SSCO_MTD_SAVE_DOC"      | CARGA:{}SSCO_VIEW_DOCUMENT{"!SSCO_VIEW_DOCUMENT.SSCO_MTD_SAVE_DOC"}                 |
| 111 | zoutputdef   | zsubsesion + "!" + znode + "[*]"                                     | SSCO_VIEW_DOCUMENT{"!"}SSCO_VIEW_DOCUMENT{"[*]"}                                    |
| 112 | zcomun       | znode + ":" + zsubsesion + "!" + znode + "."                         | SSCO_VIEW_DOCUMENT{":"}SSCO_VIEW_DOCUMENT{"!"}SSCO_VIEW_DOCUMENT{"."}               |
| 114 | zSCOIDDOC    | zcomun + "SCO_ID_DOC"                                                | SSCO_VIEW_DOCUMENT{":"}SSCO_VIEW_DOCUMENT{"!"}SSCO_VIEW_DOCUMENT{"."}{"SCO_ID_DOC"} |
| 120 | zSaveFILEDOC | (String) pageContext.getAttribute("DOCREQUEST")                      | (String) pageContext.getAttribute("DOCREQUEST")                                     |
| 121 | zSaveDOCID   | (String) pageContext.getAttribute("zDOCID")                          | (String) pageContext.getAttribute("zDOCID")                                         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                          |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 118 | m4:startpage | m4task=SSCO_VIEW_DOCUMENT                                                                                                   |
| 126 | m4:beginjob  |                                                                                                                             |
| 127 | m4:datadef   | m4o=SSCO_VIEW_DOCUMENT; m4name=SSCO_VIEW_DOCUMENT                                                                           |
| 128 | m4:setfile   | m4blob=SSCO_VIEW_DOCUMENT!SSCO_VIEW_DOCUMENT.PRP_DOC; m4path=&amp;REQUEST.DOCREQUEST                                        |
| 132 | m4:exec      | m4method=CARGA:{}SSCO_VIEW_DOCUMENT{"!SSCO_VIEW_DOCUMENT.SSCO_MTD_SAVE_DOC"}                                                |
| 132 | m4:param     | name=ARG_ID_DOC; value=(String) pageContext.getAttribute("zDOCID")                                                          |
| 133 | m4:outputdef | m4alias=SSCO_VIEW_DOCUMENT                                                                                                  |
| 133 | m4:param     | name=m4name0; value=SSCO_VIEW_DOCUMENT{"!"}SSCO_VIEW_DOCUMENT{"[*]"}                                                        |
| 134 | m4:endjob    |                                                                                                                             |
| 149 | m4:item      | m4name=SSCO_VIEW_DOCUMENT{":"}SSCO_VIEW_DOCUMENT{"!"}SSCO_VIEW_DOCUMENT{"."}{"SCO_ID_DOC"}; htmlsafe=true; m4varname=sIdDoc |
| 160 | m4:endpage   |                                                                                                                             |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 18  | savedoc |            |

| L   | Condición / acción / mensaje literal                                                                                        |
| --- | --------------------------------------------------------------------------------------------------------------------------- |
| 24  | if (sresult == null &#124;&#124; sresult == "")                                                                             |
| 30  | if (error == 1)                                                                                                             |
| 32  | alert(texto);                                                                                                               |
| 35  | else                                                                                                                        |
| 47  | if (zIdDoc==null &#124;&#124; zIdDoc.equals("0") &#124;&#124; zIdDoc.equals("")) {                                          |
| 49  | } else {                                                                                                                    |
| 55  | &lt;% if (zIdSaveDoc==null)                                                                                                 |
| 95  | else                                                                                                                        |
| 123 | if (zSaveDOCID.equals("-1")) {zSaveDOCID="";}                                                                               |
| 151 | if (&lt;%=sIdDoc%&gt; &lt; 0)                                                                                               |
| 153 | alert(zExtDoc);                                                                                                             |
| 26  | expresión de cálculo/transformación: texto = texto + "\n " + m4getmessage("_sl_co_ess_doc_3");                              |
| 109 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSCO_VIEW_DOCUMENT.SSCO_MTD_SAVE_DOC"; |
| 111 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znode + "[*]";                                  |
| 112 | expresión de cálculo/transformación: String zcomun = znode + ":" + zsubsesion + "!" + znode + ".";                          |
| 114 | expresión de cálculo/transformación: String zSCOIDDOC = zcomun + "SCO_ID_DOC";                                              |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 13  | ../../sse_generico/espanol/menu_ess.jsp |
| 14  | /mss_g3/smco_iv_trans.jsp               |

| L   | Destino / recurso                                                  |
| --- | ------------------------------------------------------------------ |
| 8   | /css/estilo_mss.css                                                |
| 10  | /libreria/funciones_sse_val1.js                                    |
| 11  | /libreria/funciones_sse.js                                         |
| 12  | /libreria/funciones_doc.js                                         |
| 77  | /servlet/CheckSecurity/JSP/sse_g0/ssco_mod_document.jsp?zDOCSave=Y |
| 88  | javascript:savedoc();                                              |
| 88  | /iconos/icono_enviar_ess_36_36.gif                                 |
| 13  | ../../sse_generico/espanol/menu_ess.jsp                            |
| 14  | /mss_g3/smco_iv_trans.jsp                                          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                         | Resolución | Ficha / candidato                                                                                |
| ------ | --- | ------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 13  | ../../sse_generico/espanol/menu_ess.jsp                            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)              |
| BASE   | 14  | /mss_g3/smco_iv_trans.jsp                                          | contextual | [mss_g3/smco_iv_trans.jsp](../../responsable/talento/mss_g3--smco_iv_trans.md)                   |
| BASE   | 10  | /libreria/funciones_sse_val1.js                                    | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| BASE   | 11  | /libreria/funciones_sse.js                                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 12  | /libreria/funciones_doc.js                                         | contextual | [libreria/funciones_doc.js](../../transversal/dependencias/libreria--funciones_doc.md)           |
| BASE   | 77  | /servlet/CheckSecurity/JSP/sse_g0/ssco_mod_document.jsp?zDOCSave=Y | ausente    | P06                                                                                              |
| BASE   | 88  | javascript:savedoc();                                              | dinámica   | P06                                                                                              |
| BASE   | 13  | ../../sse_generico/espanol/menu_ess.jsp                            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)              |
| BASE   | 14  | /mss_g3/smco_iv_trans.jsp                                          | contextual | [mss_g3/smco_iv_trans.jsp](../../responsable/talento/mss_g3--smco_iv_trans.md)                   |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_mod_document.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
