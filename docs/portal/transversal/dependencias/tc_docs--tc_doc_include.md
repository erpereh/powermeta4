# tc_doc_include

Identificador: `tc_docs/tc_doc_include.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave               | Texto                 | Ámbito | Diccionario                                                                           |
| ------------------- | --------------------- | ------ | ------------------------------------------------------------------------------------- |
| doc.LblDelDoc       | Quitar el documento   | BASE   | [translations/shco_doc_es.properties:L24](../../referencias/literales/shco_doc_es.md) |
| doc.LblModDoc       | Adjuntar el documento | BASE   | [translations/shco_doc_es.properties:L31](../../referencias/literales/shco_doc_es.md) |
| doc.LblSignatureDoc | Acceder a otros datos | BASE   | [translations/shco_doc_es.properties:L42](../../referencias/literales/shco_doc_es.md) |
| doc.LblTitle        | Título del documento  | BASE   | [translations/shco_doc_es.properties:L44](../../referencias/literales/shco_doc_es.md) |
| doc.LblViewDoc      | Ver el documento      | BASE   | [translations/shco_doc_es.properties:L47](../../referencias/literales/shco_doc_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tc_docs/tc_doc_include.jsp](../../../../clon_portal/portal/tc_docs/tc_doc_include.jsp) | `87bb575e9dfebc03373071bd784e188163aedb2806db49d4a4a0016d0e4c985a` |     69 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tc_docs/tc_doc_include.jsp](../../../../clon_portal/portal/tc_docs/tc_doc_include.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                                                                                                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23  | input   | onmouseover=this.title=this.value;; class=&lt;%=sgtc_zIDCSSRow%&gt;; name=&lt;%=sgtc_zText_Title%&gt;; id=&lt;%=sgtc_zText_Title%&gt;; value=&lt;%=sgtc_zTITLEDOC%&gt;; size=50; readonly=presente; confirmar condición si dinámico                                                                                                                                                                                  |
| 25  | input   | id=&lt;%=sgtc_zText_DoEncr%&gt;; name=&lt;%=sgtc_zText_DoEncr%&gt;; value=&lt;%=sgtc_zDOENCRYPT%&gt;; type=hidden                                                                                                                                                                                                                                                                                                    |
| 28  | button  | type=button; onmouseover=this.style.cursor='pointer';; onmouseout=this.style.cursor='default';; id=&lt;%=sgtc_zButt_Attach%&gt;; name=&lt;%=sgtc_zButt_Attach%&gt;; class=fuentebotondoctable; onclick=javascript:manage_document('asig','&lt;%=sgtc_zsubsesionsave%&gt;','&lt;%=sgtc_zstylesheet%&gt;','&lt;%=sgtc_zNMInputIDDOC%&gt;');; alt=JSP_EXPR_transdoc.getProperty(; title=JSP_EXPR_transdoc.getProperty(  |
| 28  | img     | align=middle; file=../files_gif/ic_doc_attach.jsp                                                                                                                                                                                                                                                                                                                                                                    |
| 30  | input   | id=&lt;%=sgtc_zButt_Attach%&gt;; name=&lt;%=sgtc_zButt_Attach%&gt;; type=hidden                                                                                                                                                                                                                                                                                                                                      |
| 32  | button  | type=button; onmouseover=this.style.cursor='pointer';; onmouseout=this.style.cursor='default';; id=&lt;%=sgtc_zButt_View%&gt;; name=&lt;%=sgtc_zButt_View%&gt;; class=fuentebotondoctable; onclick=javascript:manage_document('view','&lt;%=sgtc_zsubsesionsave%&gt;','&lt;%=sgtc_zstylesheet%&gt;','&lt;%=sgtc_zNMInputIDDOC%&gt;');; alt=JSP_EXPR_transdoc.getProperty(; title=JSP_EXPR_transdoc.getProperty(      |
| 32  | img     | align=middle; file=../files_gif/ic_doc_view.jsp                                                                                                                                                                                                                                                                                                                                                                      |
| 34  | button  | type=button; onmouseover=this.style.cursor='pointer';; onmouseout=this.style.cursor='default';; id=&lt;%=sgtc_zButt_Delete%&gt;; name=&lt;%=sgtc_zButt_Delete%&gt;; class=fuentebotondoctable; onclick=javascript:manage_document('del','&lt;%=sgtc_zsubsesionsave%&gt;','&lt;%=sgtc_zstylesheet%&gt;','&lt;%=sgtc_zNMInputIDDOC%&gt;');; alt=JSP_EXPR_transdoc.getProperty(; title=JSP_EXPR_transdoc.getProperty(   |
| 34  | img     | align=middle; file=../files_gif/ic_doc_delete.jsp                                                                                                                                                                                                                                                                                                                                                                    |
| 36  | input   | id=&lt;%=sgtc_zButt_Delete%&gt;; name=&lt;%=sgtc_zButt_Delete%&gt;; type=hidden                                                                                                                                                                                                                                                                                                                                      |
| 38  | button  | type=button; onmouseover=this.style.cursor='pointer';; onmouseout=this.style.cursor='default';; id=&lt;%=sgtc_zButt_Info%&gt;; name=&lt;%=sgtc_zButt_Info%&gt;; class=fuentebotondoctable; onclick=javascript:manage_document('signature','&lt;%=sgtc_zsubsesionsave%&gt;','&lt;%=sgtc_zstylesheet%&gt;','&lt;%=sgtc_zNMInputIDDOC%&gt;');; alt=JSP_EXPR_transdoc.getProperty(; title=JSP_EXPR_transdoc.getProperty( |
| 38  | img     | align=middle; file=../files_gif/ic_doc_info.jsp                                                                                                                                                                                                                                                                                                                                                                      |
| 42  | input   | onmouseover=this.title=this.value;; class=&lt;%=sgtc_zIDCSSRow%&gt;; name=&lt;%=sgtc_zText_Title%&gt;; id=&lt;%=sgtc_zText_Title%&gt;; value=&lt;%=sgtc_zTITLEDOC%&gt;; readonly=presente; confirmar condición si dinámico                                                                                                                                                                                           |
| 44  | input   | id=&lt;%=sgtc_zText_DoEncr%&gt;; name=&lt;%=sgtc_zText_DoEncr%&gt;; value=&lt;%=sgtc_zDOENCRYPT%&gt;; type=hidden                                                                                                                                                                                                                                                                                                    |
| 47  | button  | type=button; onmouseover=this.style.cursor='pointer';; onmouseout=this.style.cursor='default';; id=&lt;%=sgtc_zButt_Attach%&gt;; name=&lt;%=sgtc_zButt_Attach%&gt;; class=fuentebotondoctable; onclick=javascript:manage_document('asig','&lt;%=sgtc_zsubsesionsave%&gt;','&lt;%=sgtc_zstylesheet%&gt;','&lt;%=sgtc_zNMInputIDDOC%&gt;');; alt=JSP_EXPR_transdoc.getProperty(; title=JSP_EXPR_transdoc.getProperty(  |
| 47  | img     | align=middle; file=../files_gif/ic_doc_attach.jsp                                                                                                                                                                                                                                                                                                                                                                    |
| 49  | input   | id=&lt;%=sgtc_zButt_Attach%&gt;; name=&lt;%=sgtc_zButt_Attach%&gt;; type=hidden                                                                                                                                                                                                                                                                                                                                      |
| 51  | button  | type=button; onmouseover=this.style.cursor='pointer';; onmouseout=this.style.cursor='default';; id=&lt;%=sgtc_zButt_View%&gt;; name=&lt;%=sgtc_zButt_View%&gt;; class=fuentebotondoctable; onclick=javascript:manage_document('view','&lt;%=sgtc_zsubsesionsave%&gt;','&lt;%=sgtc_zstylesheet%&gt;','&lt;%=sgtc_zNMInputIDDOC%&gt;');; alt=JSP_EXPR_transdoc.getProperty(; title=JSP_EXPR_transdoc.getProperty(      |
| 51  | img     | align=middle; file=../files_gif/ic_doc_view.jsp                                                                                                                                                                                                                                                                                                                                                                      |
| 53  | button  | type=button; onmouseover=this.style.cursor='pointer';; onmouseout=this.style.cursor='default';; id=&lt;%=sgtc_zButt_Delete%&gt;; name=&lt;%=sgtc_zButt_Delete%&gt;; class=fuentebotondoctable; onclick=javascript:manage_document('del','&lt;%=sgtc_zsubsesionsave%&gt;','&lt;%=sgtc_zstylesheet%&gt;','&lt;%=sgtc_zNMInputIDDOC%&gt;');; alt=JSP_EXPR_transdoc.getProperty(; title=JSP_EXPR_transdoc.getProperty(   |
| 53  | img     | align=middle; file=../files_gif/ic_doc_delete.jsp                                                                                                                                                                                                                                                                                                                                                                    |
| 55  | input   | id=&lt;%=sgtc_zButt_Delete%&gt;; name=&lt;%=sgtc_zButt_Delete%&gt;; type=hidden                                                                                                                                                                                                                                                                                                                                      |
| 57  | button  | type=button; onmouseover=this.style.cursor='pointer';; onmouseout=this.style.cursor='default';; id=&lt;%=sgtc_zButt_Info%&gt;; name=&lt;%=sgtc_zButt_Info%&gt;; class=fuentebotondoctable; onclick=javascript:manage_document('signature','&lt;%=sgtc_zsubsesionsave%&gt;','&lt;%=sgtc_zstylesheet%&gt;','&lt;%=sgtc_zNMInputIDDOC%&gt;');; alt=JSP_EXPR_transdoc.getProperty(; title=JSP_EXPR_transdoc.getProperty( |
| 57  | img     | align=middle; file=../files_gif/ic_doc_info.jsp                                                                                                                                                                                                                                                                                                                                                                      |

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

| L   | Condición / acción / mensaje literal                                                         |
| --- | -------------------------------------------------------------------------------------------- |
| 19  | &lt;%if (sgtc_zTITLEDOC==null){sgtc_zTITLEDOC="";}%&gt;                                      |
| 21  | &lt;%if (sgtc_zShowMode.equals("0")){%&gt;                                                   |
| 27  | &lt;%if (sgtc_zReadWrite.equals("1")){%&gt;                                                  |
| 29  | &lt;%}else{%&gt;                                                                             |
| 33  | &lt;%if (sgtc_zReadWrite.equals("1")){%&gt;                                                  |
| 35  | &lt;%}else{%&gt;                                                                             |
| 40  | &lt;%}else{%&gt;                                                                             |
| 46  | &lt;%if (sgtc_zReadWrite.equals("1")){%&gt;                                                  |
| 48  | &lt;%}else{%&gt;                                                                             |
| 52  | &lt;%if (sgtc_zReadWrite.equals("1")){%&gt;                                                  |
| 54  | &lt;%}else{%&gt;                                                                             |
| 11  | expresión de cálculo/transformación: sgtc_zText_Title = sgtc_zNMInputIDDOC + "_TITLE";       |
| 12  | expresión de cálculo/transformación: sgtc_zButt_Attach = sgtc_zNMInputIDDOC + "_ATTACH";     |
| 13  | expresión de cálculo/transformación: sgtc_zButt_View = sgtc_zNMInputIDDOC + "_VIEW";         |
| 14  | expresión de cálculo/transformación: sgtc_zButt_Delete = sgtc_zNMInputIDDOC + "_DELETE";     |
| 15  | expresión de cálculo/transformación: sgtc_zButt_Info = sgtc_zNMInputIDDOC + "_INFO";         |
| 16  | expresión de cálculo/transformación: sgtc_zText_DoEncr = sgtc_zNMInputIDDOC + "_DO_ENCRYPT"; |

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 28  | ../files_gif/ic_doc_attach.jsp |
| 32  | ../files_gif/ic_doc_view.jsp   |
| 34  | ../files_gif/ic_doc_delete.jsp |
| 38  | ../files_gif/ic_doc_info.jsp   |
| 47  | ../files_gif/ic_doc_attach.jsp |
| 51  | ../files_gif/ic_doc_view.jsp   |
| 53  | ../files_gif/ic_doc_delete.jsp |
| 57  | ../files_gif/ic_doc_info.jsp   |

| L   | Destino / recurso              |
| --- | ------------------------------ |
| 28  | ../files_gif/ic_doc_attach.jsp |
| 32  | ../files_gif/ic_doc_view.jsp   |
| 34  | ../files_gif/ic_doc_delete.jsp |
| 38  | ../files_gif/ic_doc_info.jsp   |
| 47  | ../files_gif/ic_doc_attach.jsp |
| 51  | ../files_gif/ic_doc_view.jsp   |
| 53  | ../files_gif/ic_doc_delete.jsp |
| 57  | ../files_gif/ic_doc_info.jsp   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                     | Resolución | Ficha / candidato                                          |
| ------ | --- | ------------------------------ | ---------- | ---------------------------------------------------------- |
| BASE   | 28  | ../files_gif/ic_doc_attach.jsp | física     | [files_gif/ic_doc_attach.jsp](files_gif--ic_doc_attach.md) |
| BASE   | 32  | ../files_gif/ic_doc_view.jsp   | física     | [files_gif/ic_doc_view.jsp](files_gif--ic_doc_view.md)     |
| BASE   | 34  | ../files_gif/ic_doc_delete.jsp | física     | [files_gif/ic_doc_delete.jsp](files_gif--ic_doc_delete.md) |
| BASE   | 38  | ../files_gif/ic_doc_info.jsp   | física     | [files_gif/ic_doc_info.jsp](files_gif--ic_doc_info.md)     |
| BASE   | 47  | ../files_gif/ic_doc_attach.jsp | física     | [files_gif/ic_doc_attach.jsp](files_gif--ic_doc_attach.md) |
| BASE   | 51  | ../files_gif/ic_doc_view.jsp   | física     | [files_gif/ic_doc_view.jsp](files_gif--ic_doc_view.md)     |
| BASE   | 53  | ../files_gif/ic_doc_delete.jsp | física     | [files_gif/ic_doc_delete.jsp](files_gif--ic_doc_delete.md) |
| BASE   | 57  | ../files_gif/ic_doc_info.jsp   | física     | [files_gif/ic_doc_info.jsp](files_gif--ic_doc_info.md)     |
| BASE   | 28  | ../files_gif/ic_doc_attach.jsp | física     | [files_gif/ic_doc_attach.jsp](files_gif--ic_doc_attach.md) |
| BASE   | 32  | ../files_gif/ic_doc_view.jsp   | física     | [files_gif/ic_doc_view.jsp](files_gif--ic_doc_view.md)     |
| BASE   | 34  | ../files_gif/ic_doc_delete.jsp | física     | [files_gif/ic_doc_delete.jsp](files_gif--ic_doc_delete.md) |
| BASE   | 38  | ../files_gif/ic_doc_info.jsp   | física     | [files_gif/ic_doc_info.jsp](files_gif--ic_doc_info.md)     |
| BASE   | 47  | ../files_gif/ic_doc_attach.jsp | física     | [files_gif/ic_doc_attach.jsp](files_gif--ic_doc_attach.md) |
| BASE   | 51  | ../files_gif/ic_doc_view.jsp   | física     | [files_gif/ic_doc_view.jsp](files_gif--ic_doc_view.md)     |
| BASE   | 53  | ../files_gif/ic_doc_delete.jsp | física     | [files_gif/ic_doc_delete.jsp](files_gif--ic_doc_delete.md) |
| BASE   | 57  | ../files_gif/ic_doc_info.jsp   | física     | [files_gif/ic_doc_info.jsp](files_gif--ic_doc_info.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tc_docs/tc_doc_include.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
