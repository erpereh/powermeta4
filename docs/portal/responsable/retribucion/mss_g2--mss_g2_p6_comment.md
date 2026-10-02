# mss_g2_p6_comment

Identificador: `mss_g2/mss_g2_p6_comment.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p6_comment.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p6_comment.jsp) | `bfd70193568571f496237315319a54a77b3be495b5fa72c2515e78743f51b979` |     88 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p6_comment.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p6_comment.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 60  | [valor dinámico] [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 83  | a       | href=javascript:window.close(); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                 |
| 83  | img     | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 17  | HR              | getParameter(request,"HR") |

| L   | Variable   | Expresión fuente                                               | Resolución estática parcial                                    |
| --- | ---------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| 16  | zsubsesion | "SSM_SALARY_REVIEW_PROCESS"                                    | SSM_SALARY_REVIEW_PROCESS                                      |
| 17  | employee   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HR") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HR") |
| 39  | icount     | 0                                                              | 0                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                       |
| --- | ------------- | -------------------------------------------------------------------------------------------------------- |
| 24  | m4:startpage  | m4task=SSM_SALARY_REVIEW_PROCESS                                                                         |
| 24  | m4:beginjob   |                                                                                                          |
| 25  | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                          |
| 27  | m4:exec       | node=SSM_SALARY_REVIEW_PROCESS; method=SSM_VIEW_COMMENTS_FOR_EMLOYEE; m4object=SSM_SALARY_REVIEW_PROCESS |
| 28  | m4:param      | name=ARG_EMPLOYEE; value=(employee)                                                                      |
| 31  | m4:outputdef  | node=SSM_SALARY_REVIEW_COMMENTS; m4alias=GENERAL; m4object=SSM_SALARY_REVIEW_PROCESS                     |
| 32  | m4:exec       | node=SSM_SALARY_REVIEW_COMMENTS; alias=count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS           |
| 34  | m4:endjob     |                                                                                                          |
| 40  | m4:outputexec | var=count; alias=count                                                                                   |
| 54  | m4:dataloop   | outputdef=GENERAL                                                                                        |
| 56  | m4:current    | var=current; outputdef=GENERAL                                                                           |
| 63  | m4:item       | item=HCO_CR_COMMENT; outputdef=GENERAL                                                                   |
| 88  | m4:endpage    |                                                                                                          |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                         |
| --- | ---------------------------------------------------------------------------------------------------------------------------- |
| 43  | &lt;%if (icount &gt; 0) {%&gt;                                                                                               |
| 73  | &lt;%}else{%&gt;                                                                                                             |
| 41  | expresión de cálculo/transformación: &lt;% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%&gt; |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 8   | ../../mss_generico/mss_cr_trans.jsp |

| L   | Destino / recurso                   |
| --- | ----------------------------------- |
| 7   | /libreria/funciones_sse.js          |
| 10  | /css/estilo_mss.css                 |
| 83  | javascript:window.close()           |
| 83  | /iconos/entrar_blanco.gif           |
| 8   | ../../mss_generico/mss_cr_trans.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                          | Resolución | Ficha / candidato                                                                      |
| ------ | --- | ----------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |
| BASE   | 7   | /libreria/funciones_sse.js          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 83  | javascript:window.close()           | dinámica   | P06                                                                                    |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p6_comment.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
