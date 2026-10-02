# mss_g2_p3_p

Identificador: `mss_g2/mss_g2_p3_p.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p3_p.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p3_p.jsp) | `f09d82741508917b934c3d9d0dead7c3674b83d61912e96dd6b78b758bc03319` |     39 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p3_p.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p3_p.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave                | Acceso literal                                         |
| --- | ------------------------------ | ------------------------------------------------------ |
| 14  | FILTER                         | getParameter(request,"FILTER")                         |
| 15  | SCO_ID_LEVEL                   | getParameter(request,"SCO_ID_LEVEL")                   |
| 29  | LAST_BASE_DEPENDANT_REVIEW_VAL | getParameter(request,"LAST_BASE_DEPENDANT_REVIEW_VAL") |
| 30  | LAST_BASE_DEPENDANT_REVIEW_CUR | getParameter(request,"LAST_BASE_DEPENDANT_REVIEW_CUR") |
| 31  | LAST_BASE_DEP_REVIEW_DT_START  | getParameter(request,"LAST_BASE_DEP_REVIEW_DT_START")  |
| 32  | LAST_BASE_DEP_REVIEW_DT_END    | getParameter(request,"LAST_BASE_DEP_REVIEW_DT_END")    |

| L   | Variable      | Expresión fuente                                                                           | Resolución estática parcial                                                                |
| --- | ------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 4   | zsubsesion    | "SSM_SALARY_REVIEW_PROCESS"                                                                | SSM_SALARY_REVIEW_PROCESS                                                                  |
| 5   | zestado       | "21"                                                                                       | 21                                                                                         |
| 14  | for_filtering | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"FILTER")                         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"FILTER")                         |
| 15  | perf_level    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_LEVEL")                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_LEVEL")                   |
| 29  | last_base_vl  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LAST_BASE_DEPENDANT_REVIEW_VAL") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LAST_BASE_DEPENDANT_REVIEW_VAL") |
| 30  | last_base_cr  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LAST_BASE_DEPENDANT_REVIEW_CUR") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LAST_BASE_DEPENDANT_REVIEW_CUR") |
| 31  | last_base_fi  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LAST_BASE_DEP_REVIEW_DT_START")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LAST_BASE_DEP_REVIEW_DT_START")  |
| 32  | last_base_ff  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LAST_BASE_DEP_REVIEW_DT_END")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LAST_BASE_DEP_REVIEW_DT_END")    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado                                                                                     |
| --- | ---------- | ------------------------------------------------------------------------------------------------------ |
| 8   | m4:page    | subsessionid=SSM_SALARY_REVIEW_PROCESS                                                                 |
| 10  | m4:job     |                                                                                                        |
| 11  | m4:datadef | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                        |
| 18  | m4:exec    | node=SSM_SALARY_REVIEW_PROCESS; method=CR_SET_SAL_PLAN_FOR_REVIEW; m4object=SSM_SALARY_REVIEW_PROCESS  |
| 19  | m4:param   | name=ARG_INPUT_SAL_PLAN; value=(for_filtering)                                                         |
| 22  | m4:exec    | node=SSM_SALARY_REVIEW_PROCESS; method=CR_SET_EMPLOYEE_PERFORMANCE; m4object=SSM_SALARY_REVIEW_PROCESS |
| 23  | m4:param   | name=ARG_PERFORMANCE; value=(perf_level)                                                               |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                       |
| --- | ------------------------------------------------------- |
| 34  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4.jsp?estado= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                              | Resolución | Ficha / candidato |
| ------ | --- | ------------------------------------------------------- | ---------- | ----------------- |
| BASE   | 34  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4.jsp?estado= | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p3_p.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
