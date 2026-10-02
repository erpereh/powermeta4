# mss_g2_p2_ht

Identificador: `mss_g2/mss_g2_p2_ht.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p2_ht.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p2_ht.jsp) | `925e35fd20b5854af70a12f013329026ec9256128aeba9309159b4bcac7d1508` |    110 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p2_ht.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p2_ht.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 69  | - -                               |
| 76  | [valor dinámico] [valor dinámico] |
| 78  | [valor dinámico] [valor dinámico] |
| 86  | -                                 |
| 89  | ( %)                              |
| 90  | [valor dinámico] [valor dinámico] |
| 91  | -                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100 | a       | href=javascript:window.close(); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                 |
| 100 | img     | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 106 | a       | href=javascript:window.close(); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                 |
| 106 | img     | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 17  | HR              | getParameter(request,"HR")      |
| 19  | HR_ROLE         | getParameter(request,"HR_ROLE") |

| L   | Variable   | Expresión fuente                                                    | Resolución estática parcial                                         |
| --- | ---------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 16  | zsubsesion | "SSM_SALARY_REVIEW_PROCESS"                                         | SSM_SALARY_REVIEW_PROCESS                                           |
| 17  | employee   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HR")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HR")      |
| 19  | role       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HR_ROLE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HR_ROLE") |
| 44  | icount     | 0                                                                   | 0                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                              |
| --- | ------------- | ----------------------------------------------------------------------------------------------- |
| 27  | m4:startpage  | m4task=SSM_SALARY_REVIEW_PROCESS                                                                |
| 27  | m4:beginjob   |                                                                                                 |
| 28  | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                 |
| 29  | m4:exec       | node=SSM_CR_H_HR_SAL_REV_EMP; method=LOAD_EMPLOYEE_HISTORY; m4object=SSM_SALARY_REVIEW_PROCESS  |
| 30  | m4:param      | name=ARG_EMPLOYEE; value=(employee)                                                             |
| 31  | m4:param      | name=ARG_EMPLOYEE_ROLE; value=(role)                                                            |
| 33  | m4:outputdef  | node=SSM_CR_H_HR_SAL_REV_EMP; m4alias=EMP_HIST; m4object=SSM_SALARY_REVIEW_PROCESS              |
| 34  | m4:exec       | node=SSM_CR_H_HR_SAL_REV_EMP; alias=emp_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS |
| 35  | m4:endjob     |                                                                                                 |
| 45  | m4:outputexec | var=count; alias=emp_count                                                                      |
| 50  | m4:dataloop   | outputdef=EMP_HIST                                                                              |
| 52  | m4:item       | m4varname=employee_id; item=SCO_ID_HR; htmlsafe=true; outputdef=EMP_HIST                        |
| 53  | m4:item       | m4varname=idx_this_rec; item=IDX_REG; htmlsafe=true; outputdef=EMP_HIST                         |
| 54  | m4:item       | m4varname=employee_name; item=SCO_GB_NAME; htmlsafe=true; outputdef=EMP_HIST                    |
| 69  | m4:item       | item=SCO_ID_HR; htmlsafe=true; outputdef=EMP_HIST                                               |
| 69  | m4:item       | item=SCO_GB_NAME; htmlsafe=true; outputdef=EMP_HIST                                             |
| 69  | m4:item       | item=SCO_N_ROLE; htmlsafe=true; outputdef=EMP_HIST                                              |
| 86  | m4:item       | item=HCO_CR_SALARY_P_NM; htmlsafe=true; outputdef=EMP_HIST                                      |
| 86  | m4:item       | item=HCO_CR_SPLAN_TP_NM; htmlsafe=true; outputdef=EMP_HIST                                      |
| 87  | m4:item       | item=HCO_CR_SAL_REV_VALUE; htmlsafe=true; outputdef=EMP_HIST                                    |
| 87  | m4:item       | item=ID_CURRENCY; htmlsafe=true; outputdef=EMP_HIST                                             |
| 88  | m4:item       | item=PREVIOUS_AMOUNT; htmlsafe=true; outputdef=EMP_HIST                                         |
| 88  | m4:item       | item=ID_CURRENCY; htmlsafe=true; outputdef=EMP_HIST                                             |
| 89  | m4:item       | item=INCREASE_AMOUNT; htmlsafe=true; outputdef=EMP_HIST                                         |
| 89  | m4:item       | item=ID_CURRENCY; htmlsafe=true; outputdef=EMP_HIST                                             |
| 89  | m4:item       | item=HCO_CR_INC_PERCENTAGE; htmlsafe=true; outputdef=EMP_HIST                                   |
| 90  | m4:item       | item=DT_START; htmlsafe=true; outputdef=EMP_HIST                                                |
| 90  | m4:item       | item=DT_END; htmlsafe=true; outputdef=EMP_HIST                                                  |
| 91  | m4:item       | item=STD_ID_HR_MANAGER; htmlsafe=true; outputdef=EMP_HIST                                       |
| 91  | m4:item       | item=SCO_GB_NAME_MANAGER; htmlsafe=true; outputdef=EMP_HIST                                     |
| 91  | m4:item       | item=HCO_CR_REVIEW_DATE; htmlsafe=true; outputdef=EMP_HIST                                      |
| 110 | m4:endpage    |                                                                                                 |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                      |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48  | &lt;%if (icount &gt; 0) {%&gt;                                                                                                                                                                                                                                                                                                            |
| 56  | &lt;% if(!employee_name.equals("")) { %&gt;                                                                                                                                                                                                                                                                                               |
| 62  | &lt;% if(!idx_this_rec.equals("0")) { %&gt;                                                                                                                                                                                                                                                                                               |
| 83  | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                          |
| 105 | }else{%&gt;                                                                                                                                                                                                                                                                                                                               |
| 46  | expresión de cálculo/transformación: &lt;% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%&gt;                                                                                                                                                                                                              |
| 69  | expresión de cálculo/transformación: &lt;td class="fuentevalor" colspan="8"&gt;&lt;b&gt;&lt;m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="EMP_HIST"/&gt; - &lt;m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMP_HIST"/&gt; - &lt;m4:item item="SCO_N_ROLE" htmlsafe="true" outputdef="EMP_HIST"/&gt;&lt;/b&gt;&lt;/td&gt;  |
| 86  | expresión de cálculo/transformación: &lt;td class="fuentevalor" colspan="2"&gt;&lt;m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="EMP_HIST"/&gt; - &lt;m4:item item="HCO_CR_SPLAN_TP_NM" htmlsafe="true" outputdef="EMP_HIST"/&gt;&lt;/td&gt;                                                                               |
| 91  | expresión de cálculo/transformación: &lt;td class="fuentevalor"&gt;&lt;m4:item item="STD_ID_HR_MANAGER" htmlsafe="true" outputdef="EMP_HIST"/&gt; - &lt;m4:item item="SCO_GB_NAME_MANAGER" htmlsafe="true" outputdef="EMP_HIST"/&gt;&lt;/br&gt;&lt;m4:item item="HCO_CR_REVIEW_DATE" htmlsafe="true" outputdef="EMP_HIST"/&gt;&lt;/td&gt; |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 7   | ../../mss_generico/mss_cr_trans.jsp |

| L   | Destino / recurso                   |
| --- | ----------------------------------- |
| 9   | /css/estilo_mss.css                 |
| 10  | /libreria/funciones_sse.js          |
| 100 | javascript:window.close()           |
| 100 | /iconos/entrar_blanco.gif           |
| 106 | javascript:window.close()           |
| 106 | /iconos/entrar_blanco.gif           |
| 7   | ../../mss_generico/mss_cr_trans.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                          | Resolución | Ficha / candidato                                                                      |
| ------ | --- | ----------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 7   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |
| BASE   | 10  | /libreria/funciones_sse.js          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 100 | javascript:window.close()           | dinámica   | P06                                                                                    |
| BASE   | 106 | javascript:window.close()           | dinámica   | P06                                                                                    |
| BASE   | 7   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p2_ht.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
