# mss_g2_p3_comment

Identificador: `mss_g2/mss_g2_p3_comment.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p3_comment.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p3_comment.jsp) | `6b5e177795f425e913dde85b9c180c894413b4a1c187e87460f05dc5b64349a1` |    137 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p3_comment.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p3_comment.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                                                         |
| --- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 51  | form     | name=sel_rev; action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_comment_p.jsp?; method=GET; enctype=application/x-www-form-urlencoded                                                                                            |
| 70  | textarea | cols=30; name=HCO_CR_COMMENT; rows=4                                                                                                                                                                                              |
| 103 | m4:input | name=&lt;%="PN_REC_INDEX_"_+_(current)%&gt;; type=hidden                                                                                                                                                                          |
| 104 | input    | name=JSP_EXPR_; type=hidden; value=0                                                                                                                                                                                              |
| 113 | textarea | cols=30; name=&lt;%="HCO_CR_COMMENT_"_+_(current)%&gt;; rows=4                                                                                                                                                                    |
| 113 | a        | href=JSP_EXPR_; shape=rect                                                                                                                                                                                                        |
| 113 | img      | src=/iconos/icono_eliminar_mss_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; title=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 128 | a        | href=javascript:set_comment(); shape=rect                                                                                                                                                                                         |
| 128 | img      | src=/iconos/icono_aceptar_ess_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; title=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)  |
| 130 | a        | href=javascript:window.close(); shape=rect                                                                                                                                                                                        |
| 130 | img      | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; title=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)            |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable   | Expresión fuente            | Resolución estática parcial |
| --- | ---------- | --------------------------- | --------------------------- |
| 15  | zsubsesion | "SSM_SALARY_REVIEW_PROCESS" | SSM_SALARY_REVIEW_PROCESS   |
| 83  | icount     | 0                           | 0                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                    |
| --- | ------------- | ----------------------------------------------------------------------------------------------------- |
| 44  | m4:startpage  | m4task=SSM_SALARY_REVIEW_PROCESS                                                                      |
| 44  | m4:beginjob   |                                                                                                       |
| 45  | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                       |
| 46  | m4:outputdef  | node=SSM_SALARY_REVIEW_COMMENTS; m4alias=COMMENTS; m4object=SSM_SALARY_REVIEW_PROCESS                 |
| 47  | m4:exec       | node=SSM_SALARY_REVIEW_COMMENTS; alias=num_comments; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS |
| 49  | m4:endjob     |                                                                                                       |
| 84  | m4:outputexec | var=count; alias=num_comments                                                                         |
| 98  | m4:dataloop   | outputdef=COMMENTS                                                                                    |
| 101 | m4:current    | var=current; outputdef=COMMENTS                                                                       |
| 103 | m4:item       | item=PN_REC_INDEX; htmlsafe=true; outputdef=COMMENTS                                                  |
| 113 | m4:item       | item=HCO_CR_COMMENT; outputdef=COMMENTS                                                               |
| 136 | m4:endpage    |                                                                                                       |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos |
| --- | ----------- | ---------- |
| 20  | delrec      | num        |
| 36  | set_comment |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24  | if(form.elements["del_" + num].value == "0") {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 29  | else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 87  | &lt;%if (icount &gt; 0) {%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 119 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 85  | expresión de cálculo/transformación: &lt;% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 103 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "PN_REC_INDEX_" + (current)%&gt;' type="hidden"&gt;&lt;m4:item item="PN_REC_INDEX" htmlsafe="true" outputdef="COMMENTS"/&gt;&lt;/m4:input&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 104 | expresión de cálculo/transformación: &lt;input name="&lt;%= "del_" + (current)%&gt;" type="hidden" value="0"/&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 113 | expresión de cálculo/transformación: &lt;td class="fuentevalor" colspan="1"&gt;&lt;textarea cols="30" name='&lt;%= "HCO_CR_COMMENT_" + (current)%&gt;' rows="4"&gt;&lt;m4:item item="HCO_CR_COMMENT" outputdef="COMMENTS" /&gt;&lt;/textarea&gt;   &lt;a href="&lt;%= "javascript:delrec(" + (current) + ")"%&gt;" shape="rect"&gt;&lt;img src="/iconos/icono_eliminar_mss_36_36.gif" width="36" height="36" alt="&lt;%=Mss_cr.getProperty("msscr.Comen-ad")%&gt;" title="&lt;%=Mss_cr.getProperty("msscr.Comen-ad")%&gt;" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /&gt;&lt;/a&gt;&lt;/td&gt; |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 8   | ../../mss_generico/mss_cr_trans.jsp |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 7   | /libreria/funciones_sse.js                                 |
| 10  | /css/estilo_mss.css                                        |
| 51  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_comment_p.jsp? |
| 113 | &lt;%=                                                     |
| 113 | /iconos/icono_eliminar_mss_36_36.gif                       |
| 128 | javascript:set_comment()                                   |
| 128 | /iconos/icono_aceptar_ess_36_36.gif                        |
| 130 | javascript:window.close()                                  |
| 130 | /iconos/entrar_blanco.gif                                  |
| 8   | ../../mss_generico/mss_cr_trans.jsp                        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                 | Resolución | Ficha / candidato                                                                      |
| ------ | --- | ---------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp                        | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |
| BASE   | 7   | /libreria/funciones_sse.js                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 51  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_comment_p.jsp? | ausente    | P06                                                                                    |
| BASE   | 113 | &lt;%=                                                     | dinámica   | P06                                                                                    |
| BASE   | 128 | javascript:set_comment()                                   | dinámica   | P06                                                                                    |
| BASE   | 130 | javascript:window.close()                                  | dinámica   | P06                                                                                    |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp                        | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p3_comment.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
