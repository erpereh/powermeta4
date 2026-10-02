# mss_g2_p4_mi

Identificador: `mss_g2/mss_g2_p4_mi.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p4_mi.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p4_mi.jsp) | `f680b7eedc3e0825b62e57c7f036222cae2af4cf3025e9eb3eb9115401e574af` |     90 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p4_mi.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p4_mi.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave        | Acceso literal                                 |
| --- | ---------------------- | ---------------------------------------------- |
| 6   | NUM_SAL_PLANS          | getParameter(request,"NUM_SAL_PLANS")          |
| 16  | SCO_ID_WORK_UNIT       | getParameter(request,"SCO_ID_WORK_UNIT")       |
| 17  | SCO_ID_BASE_PLAN       | getParameter(request,"SCO_ID_BASE_PLAN")       |
| 18  | SCO_NUM_EMPLOYEES_BASE | getParameter(request,"SCO_NUM_EMPLOYEES_BASE") |
| 19  | SCO_ID_CURRENCY_BASE   | getParameter(request,"SCO_ID_CURRENCY_BASE")   |
| 20  | SCO_DT_START_BASE      | getParameter(request,"SCO_DT_START_BASE")      |
| 21  | SCO_DT_END_BASE        | getParameter(request,"SCO_DT_END_BASE")        |
| 22  | SCO_NUM_VARB_PLANS     | getParameter(request,"SCO_NUM_VARB_PLANS")     |

| L   | Variable             | Expresión fuente                                                                               | Resolución estática parcial                                                                 |
| --- | -------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 5   | zsubsesion           | "SSM_SALARY_REVIEW_PROCESS"                                                                    | SSM_SALARY_REVIEW_PROCESS                                                                   |
| 6   | rec_to_process       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NUM_SAL_PLANS")                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NUM_SAL_PLANS")                   |
| 7   | icount               | 0                                                                                              | 0                                                                                           |
| 16  | zbase_id_work_unit   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_WORK_UNIT")                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_WORK_UNIT")                |
| 17  | zbase_id_plan        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_BASE_PLAN")                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_BASE_PLAN")                |
| 18  | zbase_num_employees  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NUM_EMPLOYEES_BASE")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NUM_EMPLOYEES_BASE")          |
| 19  | zbase_id_currency    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_CURRENCY_BASE")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_CURRENCY_BASE")            |
| 20  | zbase_dt_start       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_BASE")                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_BASE")               |
| 21  | zbase_dt_end         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_END_BASE")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_END_BASE")                 |
| 22  | znum_varb_plans      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NUM_VARB_PLANS")                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NUM_VARB_PLANS")              |
| 23  | zibase_num_employees | 0                                                                                              | 0                                                                                           |
| 24  | zinum_varb_plans     | 0                                                                                              | 0                                                                                           |
| 34  | i                    | 0                                                                                              | 0                                                                                           |
| 35  | zbase_id_hr          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR_BASE_" + i)                | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR_BASE_"}{i)}            |
| 36  | zbase_or_hr_role     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_ROLE_BASE_" + i)           | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_ROLE_BASE_"}{i)}       |
| 37  | zbase_amt_inc        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_AMT_INC_BASE_" + i)              | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_AMT_INC_BASE_"}{i)}          |
| 38  | zbase_prc_inc        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_PRC_INC_BASE_" + i)              | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_PRC_INC_BASE_"}{i)}          |
| 39  | zbase_comment        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_COMMENT_BASE_" + i)              | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_COMMENT_BASE_"}{i)}          |
| 50  | i                    | 0                                                                                              | 0                                                                                           |
| 51  | zvarb_id_plan        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_VARB_PLAN_" + i)              | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_VARB_PLAN_"}{i)}          |
| 52  | zvarb_num_employees  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NUM_EMP_VARB_" + i)              | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NUM_EMP_VARB_"}{i)}          |
| 53  | zvarb_id_currency    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_CURRENCY_VARB_" + i)          | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_CURRENCY_VARB_"}{i)}      |
| 54  | zvarb_dt_start       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_VARB_" + i)             | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_VARB_"}{i)}         |
| 55  | zvarb_dt_end         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_END_VARB_" + i)               | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_END_VARB_"}{i)}           |
| 56  | zivarb_num_employees | 0                                                                                              | 0                                                                                           |
| 66  | k                    | 0                                                                                              | 0                                                                                           |
| 67  | zvarb_id_hr          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR_VARB_" + i + "_" + k)      | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR_VARB_"}0{"_"}{k)}      |
| 68  | zvarb_or_hr_role     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_ROLE_VARB_" + i + "_" + k) | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_ROLE_VARB_"}0{"_"}{k)} |
| 69  | zvarb_amt_inc        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_AMT_INC_VARB_" + i + "_" + k)    | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_AMT_INC_VARB_"}0{"_"}{k)}    |
| 70  | zvarb_prc_inc        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_PRC_INC_VARB_" + i + "_" + k)    | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_PRC_INC_VARB_"}0{"_"}{k)}    |
| 71  | zvarb_comment        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_COMMENT_VARB_" + i + "_" + k)    | {com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_COMMENT_VARB_"}0{"_"}{k)}    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado                                                                                                         |
| --- | ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| 11  | m4:page    | subsessionid=SSM_SALARY_REVIEW_PROCESS                                                                                     |
| 13  | m4:job     |                                                                                                                            |
| 14  | m4:datadef | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                                            |
| 26  | m4:exec    | node=SSM_SALARY_REVIEW_PROCESS; method=CR_MSR_IMP_BASE_PLAN; m4object=SSM_SALARY_REVIEW_PROCESS                            |
| 27  | m4:param   | name=ARG_SCO_ID_PLAN; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_BASE_PLAN")                   |
| 28  | m4:param   | name=ARG_SCO_ID_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_WORK_UNIT")              |
| 29  | m4:param   | name=ARG_SCO_NUM_EMPLOYEES; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NUM_EMPLOYEES_BASE")       |
| 30  | m4:param   | name=ARG_SCO_ID_CURRENCY; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_CURRENCY_BASE")           |
| 31  | m4:param   | name=ARG_SCO_DT_START; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_BASE")                 |
| 32  | m4:param   | name=ARG_SCO_DT_END; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_END_BASE")                     |
| 41  | m4:exec    | node=SSM_SALARY_REVIEW_PROCESS; method=CR_MSR_IMP_EMPLOYEE; m4object=SSM_SALARY_REVIEW_PROCESS                             |
| 42  | m4:param   | name=ARG_SCO_ID_HR; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR_BASE_"}{i)}                 |
| 43  | m4:param   | name=ARG_SCO_OR_HR_ROLE; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_ROLE_BASE_"}{i)}       |
| 44  | m4:param   | name=ARG_SCO_ID_PLAN; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_BASE_PLAN")                   |
| 45  | m4:param   | name=ARG_SCO_AMT_INC; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_AMT_INC_BASE_"}{i)}             |
| 46  | m4:param   | name=ARG_SCO_PRC_INC; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_PRC_INC_BASE_"}{i)}             |
| 47  | m4:param   | name=ARG_SCO_COMMENT; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_COMMENT_BASE_"}{i)}             |
| 58  | m4:exec    | node=SSM_SALARY_REVIEW_PROCESS; method=CR_MSR_IMP_VARB_PLAN; m4object=SSM_SALARY_REVIEW_PROCESS                            |
| 59  | m4:param   | name=ARG_SCO_ID_PLAN; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_VARB_PLAN_"}{i)}             |
| 60  | m4:param   | name=ARG_SCO_NUM_EMPLOYEES; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NUM_EMP_VARB_"}{i)}       |
| 61  | m4:param   | name=ARG_SCO_ID_CURRENCY; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_CURRENCY_VARB_"}{i)}     |
| 62  | m4:param   | name=ARG_SCO_DT_START; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_VARB_"}{i)}           |
| 63  | m4:param   | name=ARG_SCO_DT_END; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_END_VARB_"}{i)}               |
| 73  | m4:exec    | node=SSM_SALARY_REVIEW_PROCESS; method=CR_MSR_IMP_EMPLOYEE; m4object=SSM_SALARY_REVIEW_PROCESS                             |
| 74  | m4:param   | name=ARG_SCO_ID_HR; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR_VARB_"}0{"_"}{k)}           |
| 75  | m4:param   | name=ARG_SCO_OR_HR_ROLE; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_ROLE_VARB_"}0{"_"}{k)} |
| 76  | m4:param   | name=ARG_SCO_ID_PLAN; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_VARB_PLAN_"}{i)}             |
| 77  | m4:param   | name=ARG_SCO_AMT_INC; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_AMT_INC_VARB_"}0{"_"}{k)}       |
| 78  | m4:param   | name=ARG_SCO_PRC_INC; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_PRC_INC_VARB_"}0{"_"}{k)}       |
| 79  | m4:param   | name=ARG_SCO_COMMENT; value={com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_COMMENT_VARB_"}0{"_"}{k)}       |
| 83  | m4:exec    | node=SSM_SALARY_REVIEW_PROCESS; method=CR_MSR_IMP_FINISH; m4object=SSM_SALARY_REVIEW_PROCESS                               |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                      |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | expresión de cálculo/transformación: try { icount = Integer.parseInt(rec_to_process); } catch(Exception e) { icount = 0; }                                                                |
| 23  | expresión de cálculo/transformación: int zibase_num_employees = 0; try { zibase_num_employees = Integer.parseInt(zbase_num_employees); } catch(Exception e) { zibase_num_employees = 0; } |
| 24  | expresión de cálculo/transformación: int zinum_varb_plans = 0; try { zinum_varb_plans = Integer.parseInt(znum_varb_plans); } catch(Exception e) { zinum_varb_plans = 0; }                 |
| 35  | expresión de cálculo/transformación: String zbase_id_hr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR_BASE_" + i);                                                |
| 36  | expresión de cálculo/transformación: String zbase_or_hr_role = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_ROLE_BASE_" + i);                                      |
| 37  | expresión de cálculo/transformación: String zbase_amt_inc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_AMT_INC_BASE_" + i);                                            |
| 38  | expresión de cálculo/transformación: String zbase_prc_inc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_PRC_INC_BASE_" + i);                                            |
| 39  | expresión de cálculo/transformación: String zbase_comment = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_COMMENT_BASE_" + i);                                            |
| 51  | expresión de cálculo/transformación: String zvarb_id_plan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_VARB_PLAN_" + i);                                            |
| 52  | expresión de cálculo/transformación: String zvarb_num_employees = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NUM_EMP_VARB_" + i);                                      |
| 53  | expresión de cálculo/transformación: String zvarb_id_currency = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_CURRENCY_VARB_" + i);                                    |
| 54  | expresión de cálculo/transformación: String zvarb_dt_start = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_VARB_" + i);                                          |
| 55  | expresión de cálculo/transformación: String zvarb_dt_end = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_END_VARB_" + i);                                              |
| 56  | expresión de cálculo/transformación: int zivarb_num_employees = 0; try { zivarb_num_employees = Integer.parseInt(zvarb_num_employees); } catch(Exception e) { zivarb_num_employees = 0; } |
| 67  | expresión de cálculo/transformación: String zvarb_id_hr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR_VARB_" + i + "_" + k);                                      |
| 68  | expresión de cálculo/transformación: String zvarb_or_hr_role = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_ROLE_VARB_" + i + "_" + k);                            |
| 69  | expresión de cálculo/transformación: String zvarb_amt_inc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_AMT_INC_VARB_" + i + "_" + k);                                  |
| 70  | expresión de cálculo/transformación: String zvarb_prc_inc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_PRC_INC_VARB_" + i + "_" + k);                                  |
| 71  | expresión de cálculo/transformación: String zvarb_comment = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_COMMENT_VARB_" + i + "_" + k);                                  |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p4_mi.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
