# mss_g2_p0_wu_mail

Identificador: `mss_g2/mss_g2_p0_wu_mail.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p0_wu_mail.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p0_wu_mail.jsp) | `dfb4f1e2dbabb80b0812d4d15660d231f4b2393c4a2ea2609d3c7f0067bc5994` |    146 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p0_wu_mail.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p0_wu_mail.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                     |
| --- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 74  | img      | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/informacion_blanco.gif                                                                                                                          |
| 97  | form     | name=sel_rev; action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu_mail_p.jsp?; method=post; enctype=application/x-www-form-urlencoded                                                       |
| 99  | input    | name=SEL_DIR; id=SEL_DIR; type=hidden                                                                                                                                                         |
| 100 | input    | name=OPERATION; id=OPERATION; type=hidden                                                                                                                                                     |
| 101 | input    | name=WORK_UNIT; id=WORK_UNIT; type=hidden; value=&lt;%=wu%&gt;                                                                                                                                |
| 102 | input    | name=RESP_TYPE; id=RESP_TYPE; type=hidden; value=&lt;%=resp_tp%&gt;                                                                                                                           |
| 109 | m4:input | name=&lt;%="STD_OR_MAIL_"_+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                                    |
| 113 | input    | title=JSP_EXPR_Mss_cr.getProperty(; name=&lt;%="SEL_"_+_(current)%&gt;; id=JSP_EXPR_; type=checkbox                                                                                           |
| 126 | textarea | cols=50; rows=4; name=MAIL_TEXT; id=MAIL_TEXT                                                                                                                                                 |
| 133 | a        | href=javascript:set_selection('&lt;%=icount%&gt;',1); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                      |
| 133 | img      | src=/iconos/icono_aceptar_mss_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)  |
| 135 | a        | href=javascript:set_selection('&lt;%=icount%&gt;',0); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                      |
| 135 | img      | src=/iconos/icono_cancelar_mss_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 15  | WORK_UNIT       | getParameter(request,"WORK_UNIT") |
| 16  | RESP_TYPE       | getParameter(request,"RESP_TYPE") |

| L   | Variable   | Expresión fuente                                                      | Resolución estática parcial                                           |
| --- | ---------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 13  | zsubsesion | "SSM_SALARY_REVIEW_PROCESS"                                           | SSM_SALARY_REVIEW_PROCESS                                             |
| 14  | zestado    | "21"                                                                  | 21                                                                    |
| 15  | wu         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WORK_UNIT") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WORK_UNIT") |
| 16  | resp_tp    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RESP_TYPE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RESP_TYPE") |
| 80  | icount     | 0                                                                     | 0                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                             |
| --- | ------------- | ---------------------------------------------------------------------------------------------- |
| 60  | m4:page       | subsessionid=SSM_SALARY_REVIEW_PROCESS                                                         |
| 62  | m4:job        |                                                                                                |
| 63  | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                |
| 64  | m4:exec       | node=SSM_HR_EMAIL_ADDRESS; alias=email_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS |
| 65  | m4:outputdef  | node=SSM_HR_EMAIL_ADDRESS; m4alias=EMAIL; m4object=SSM_SALARY_REVIEW_PROCESS                   |
| 81  | m4:outputexec | var=count; alias=email_count                                                                   |
| 104 | m4:dataloop   | outputdef=EMAIL                                                                                |
| 107 | m4:current    | var=current; outputdef=EMAIL                                                                   |
| 109 | m4:item       | item=STD_EMAIL; htmlsafe=true; outputdef=EMAIL                                                 |
| 112 | m4:item       | item=STD_N_LOCATION_TYPE; outputdef=EMAIL; htmlsafe=true                                       |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos                   |
| --- | ------------- | ---------------------------- |
| 22  | set_selection | total_records,operation_code |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25  | if (operation_code==0)                                                                                                                                                                                                                      |
| 30  | else                                                                                                                                                                                                                                        |
| 41  | if (form.elements["SEL_" + i].checked==true)                                                                                                                                                                                                |
| 45  | if (text=="")                                                                                                                                                                                                                               |
| 47  | else                                                                                                                                                                                                                                        |
| 84  | &lt;%if (icount &gt; 0) {%&gt;                                                                                                                                                                                                              |
| 37  | expresión de cálculo/transformación: var new_dir = form.elements["STD_OR_MAIL_" + i].value                                                                                                                                                  |
| 42  | expresión de cálculo/transformación: text = text + new_dir + ";"                                                                                                                                                                            |
| 82  | expresión de cálculo/transformación: &lt;% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%&gt;                                                                                                                |
| 109 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "STD_OR_MAIL_" + (current)%&gt;' type="hidden" disabled="disabled"&gt;&lt;m4:item item="STD_EMAIL" htmlsafe="true" outputdef="EMAIL"/&gt;&lt;/m4:input&gt;                   |
| 113 | expresión de cálculo/transformación: &lt;td class="fuentevalor"&gt;&lt;input title="&lt;%=Mss_cr.getProperty("msscr.Lugar")%&gt;" name='&lt;%= "SEL_" + (current)%&gt;' id="&lt;%= "SEL_" + (current)%&gt;" type="checkbox"/&gt;&lt;/td&gt; |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 8   | ../../mss_generico/mss_cr_trans.jsp |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 7   | /libreria/funciones_sse.js                                 |
| 10  | /css/estilo_mss.css                                        |
| 74  | /iconos/informacion_blanco.gif                             |
| 97  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu_mail_p.jsp? |
| 133 | javascript:set_selection(                                  |
| 133 | /iconos/icono_aceptar_mss_36_36.gif                        |
| 135 | javascript:set_selection(                                  |
| 135 | /iconos/icono_cancelar_mss_36_36.gif                       |
| 8   | ../../mss_generico/mss_cr_trans.jsp                        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                 | Resolución | Ficha / candidato                                                                      |
| ------ | --- | ---------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp                        | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |
| BASE   | 7   | /libreria/funciones_sse.js                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 97  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu_mail_p.jsp? | ausente    | P06                                                                                    |
| BASE   | 133 | javascript:set_selection(                                  | dinámica   | P06                                                                                    |
| BASE   | 135 | javascript:set_selection(                                  | dinámica   | P06                                                                                    |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp                        | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p0_wu_mail.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
