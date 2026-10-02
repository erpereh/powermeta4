# mss_g2_p3_grade

Identificador: `mss_g2/mss_g2_p3_grade.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p3_grade.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p3_grade.jsp) | `eeb696e4dbf5b955f280f340dd59ee23d9f8a872143c2af9db447811d9c0f1be` |     78 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p3_grade.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p3_grade.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 37  | -                        |
| 41  | -                        |
| 57  | %                        |
| 61  | %                        |
| 64  | 25th %ile                |
| 69  | 75th %ile                |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73  | a       | href=javascript:window.close(); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                 |
| 73  | img     | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable   | Expresión fuente            | Resolución estática parcial |
| --- | ---------- | --------------------------- | --------------------------- |
| 19  | zsubsesion | "SSM_SALARY_REVIEW_PROCESS" | SSM_SALARY_REVIEW_PROCESS   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                  |
| --- | ------------ | ----------------------------------------------------------------------------------- |
| 23  | m4:startpage | m4task=SSM_SALARY_REVIEW_PROCESS                                                    |
| 23  | m4:beginjob  |                                                                                     |
| 24  | m4:datadef   | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                     |
| 25  | m4:outputdef | node=SSM_INFO_COMES_FROM_ROLE; m4alias=EMPLEADO; m4object=SSM_SALARY_REVIEW_PROCESS |
| 27  | m4:endjob    |                                                                                     |
| 33  | m4:item      | item=SALARY_GRADE_NAME; htmlsafe=true; outputdef=EMPLEADO                           |
| 37  | m4:item      | item=SALARY_STRUCTURE_ID; htmlsafe=true; outputdef=EMPLEADO                         |
| 37  | m4:item      | item=SALARY_STRUCTURE_NAME; htmlsafe=true; outputdef=EMPLEADO                       |
| 41  | m4:item      | item=SALARY_GRADE_ID; htmlsafe=true; outputdef=EMPLEADO                             |
| 41  | m4:item      | item=SALARY_GRADE_NAME; htmlsafe=true; outputdef=EMPLEADO                           |
| 45  | m4:item      | item=SALARY_GRADE_MAX_SALARY; htmlsafe=true; outputdef=EMPLEADO                     |
| 45  | m4:item      | item=SALARY_STRUCTURE_CURRENCY; htmlsafe=true; outputdef=EMPLEADO                   |
| 49  | m4:item      | item=SALARY_GRADE_MIDPOINT; htmlsafe=true; outputdef=EMPLEADO                       |
| 49  | m4:item      | item=SALARY_STRUCTURE_CURRENCY; htmlsafe=true; outputdef=EMPLEADO                   |
| 53  | m4:item      | item=SALARY_GRADE_MIN_SALARY; htmlsafe=true; outputdef=EMPLEADO                     |
| 53  | m4:item      | item=SALARY_STRUCTURE_CURRENCY; htmlsafe=true; outputdef=EMPLEADO                   |
| 57  | m4:item      | item=COMPARATIO; htmlsafe=true; outputdef=EMPLEADO                                  |
| 61  | m4:item      | item=GRADE_PENETRATION; htmlsafe=true; outputdef=EMPLEADO                           |
| 65  | m4:item      | item=PERCENTIL_25; htmlsafe=true; outputdef=EMPLEADO                                |
| 65  | m4:item      | item=SALARY_STRUCTURE_CURRENCY; htmlsafe=true; outputdef=EMPLEADO                   |
| 70  | m4:item      | item=PERCENTIL_75; htmlsafe=true; outputdef=EMPLEADO                                |
| 70  | m4:item      | item=SALARY_STRUCTURE_CURRENCY; htmlsafe=true; outputdef=EMPLEADO                   |
| 78  | m4:endpage   |                                                                                     |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                            |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 37  | expresión de cálculo/transformación: &lt;td class="fuentevalor" colspan="1"&gt;&lt;m4:item item="SALARY_STRUCTURE_ID" htmlsafe="true" outputdef="EMPLEADO"/&gt; - &lt;m4:item item="SALARY_STRUCTURE_NAME" htmlsafe="true" outputdef="EMPLEADO"/&gt;&lt;/td&gt; |
| 41  | expresión de cálculo/transformación: &lt;td class="fuentevalor" colspan="1"&gt;&lt;m4:item item="SALARY_GRADE_ID" htmlsafe="true" outputdef="EMPLEADO"/&gt; - &lt;m4:item item="SALARY_GRADE_NAME" htmlsafe="true" outputdef="EMPLEADO"/&gt;&lt;/td&gt;         |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 8   | ../../mss_generico/mss_cr_trans.jsp |

| L   | Destino / recurso                   |
| --- | ----------------------------------- |
| 7   | /libreria/funciones_sse.js          |
| 10  | /css/estilo_mss.css                 |
| 73  | javascript:window.close()           |
| 73  | /iconos/entrar_blanco.gif           |
| 8   | ../../mss_generico/mss_cr_trans.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                          | Resolución | Ficha / candidato                                                                      |
| ------ | --- | ----------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |
| BASE   | 7   | /libreria/funciones_sse.js          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 73  | javascript:window.close()           | dinámica   | P06                                                                                    |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p3_grade.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
