# mss_g2_p4_p

Identificador: `mss_g2/mss_g2_p4_p.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p4_p.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p4_p.jsp) | `81e684185e2df9fbc7185836e5ba0968ff46b584436ee91b06b136a4764b30f0` |     59 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p4_p.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p4_p.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave            | Acceso literal                                     |
| --- | -------------------------- | -------------------------------------------------- |
| 5   | NUM_SAL_PLANS              | getParameter(request,"NUM_SAL_PLANS")              |
| 32  | TOTAL_MANAGER_CASH_HD      | getParameter(request,"TOTAL_MANAGER_CASH_HD")      |
| 33  | TOTAL_MANAGER_CASH_HD_REAL | getParameter(request,"TOTAL_MANAGER_CASH_HD_REAL") |
| 34  | START_DATE                 | getParameter(request,"START_DATE")                 |
| 35  | END_DATE                   | getParameter(request,"END_DATE")                   |

| L   | Variable       | Expresión fuente                                                                                                 | Resolución estática parcial                                                                                    |
| --- | -------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 4   | zsubsesion     | "SSM_SALARY_REVIEW_PROCESS"                                                                                      | SSM_SALARY_REVIEW_PROCESS                                                                                      |
| 5   | rec_to_process | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NUM_SAL_PLANS")                                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NUM_SAL_PLANS")                                      |
| 6   | zestado        | "21"                                                                                                             | 21                                                                                                             |
| 7   | icount         | 0                                                                                                                | 0                                                                                                              |
| 18  | b              | 0                                                                                                                | 0                                                                                                              |
| 21  | field_info     | "HCO_CR_SALARY_P_ID=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HCO_CR_SALARY_P_ID_" + b) + "  | HCO_CR_SALARY_P_ID={}{com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HCO_CR_SALARY_P_ID_"}{b)}{"}   |
| 32  | field_info     | "TOTAL_MANAGER_CASH_HD=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TOTAL_MANAGER_CASH_HD") + " | TOTAL_MANAGER_CASH_HD={}{com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TOTAL_MANAGER_CASH_HD")}{"} |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                       |
| --- | ------------ | -------------------------------------------------------------------------------------------------------- |
| 11  | m4:page      | subsessionid=SSM_SALARY_REVIEW_PROCESS                                                                   |
| 13  | m4:job       |                                                                                                          |
| 14  | m4:datadef   | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                          |
| 15  | m4:exec      | node=SSM_SALARY_REVIEW_PROCESS; method=CR_SET_NEW_COMMENTS; m4object=SSM_SALARY_REVIEW_PROCESS           |
| 16  | m4:exec      | node=SSM_SALARY_REVIEW_PROCESS; method=CR_DEL_SAL_PLANS_REVIEWED; m4object=SSM_SALARY_REVIEW_PROCESS     |
| 20  | m4:exec      | node=SSM_SALARY_REVIEW_PROCESS; method=CR_UPDATE_ITEMS; m4object=SSM_SALARY_REVIEW_PROCESS               |
| 26  | m4:param     | name=ARG_ITEM_PAIRS; value=(field_info)                                                                  |
| 31  | m4:exec      | node=SSM_SALARY_REVIEW_PROCESS; method=CR_UPDATE_ITEMS; m4object=SSM_SALARY_REVIEW_PROCESS               |
| 37  | m4:param     | name=ARG_ITEM_PAIRS; value=(field_info)                                                                  |
| 39  | m4:exec      | node=SSM_SALARY_REVIEW_PROCESS; method=CR_SET_SAL_REVIEW_EMP_RESUMEN; m4object=SSM_SALARY_REVIEW_PROCESS |
| 40  | m4:exec      | node=SSM_SALARY_REVIEW_PROCESS; method=CR_SET_HT_REVIEW_EMP; m4object=SSM_SALARY_REVIEW_PROCESS          |
| 41  | m4:exec      | node=SSM_SALARY_REVIEW_PROCESS; method=CR_SET_EMPLOYEE_SALARY_PLANS; m4object=SSM_SALARY_REVIEW_PROCESS  |
| 43  | m4:outputdef | node=SSM_SALARY_REVIEW_PROCESS; m4alias=GENERICO; m4object=SSM_SALARY_REVIEW_PROCESS                     |
| 47  | m4:item      | m4varname=var_control; item=CR_LAST_EMPLOTYEE_CALCULATED; htmlsafe=true; outputdef=GENERICO              |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                         |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 49  | &lt;% if(var_control.equals("1")) {                                                                                                                                                          |
| 52  | }else{                                                                                                                                                                                       |
| 8   | expresión de cálculo/transformación: try { icount = Integer.parseInt(rec_to_process); } catch(Exception e) { icount = 0; }                                                                   |
| 21  | expresión de cálculo/transformación: &lt;% String field_info = "HCO_CR_SALARY_P_ID=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HCO_CR_SALARY_P_ID_" + b) + ";";            |
| 22  | expresión de cálculo/transformación: field_info = field_info + "INC_AMOUNT_MNG=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"INC_AMOUNT_MNG_" + b) + ";" ;                   |
| 23  | expresión de cálculo/transformación: field_info = field_info + "INC_AMOUNT_MNG_REAL=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"INC_AMOUNT_MNG_REAL_" + b) + ";" ;         |
| 24  | expresión de cálculo/transformación: field_info = field_info + "INC_PERCENTAGE_MNG=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"INC_PERCENTAGE_MNG_" + b) + ";";            |
| 32  | expresión de cálculo/transformación: &lt;% String field_info = "TOTAL_MANAGER_CASH_HD=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TOTAL_MANAGER_CASH_HD") + ";";           |
| 33  | expresión de cálculo/transformación: field_info = field_info + "TOTAL_MANAGER_CASH_HD_REAL=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TOTAL_MANAGER_CASH_HD_REAL") + ";"; |
| 34  | expresión de cálculo/transformación: field_info = field_info + "START_DATE=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"START_DATE") + ";";                                 |
| 35  | expresión de cálculo/transformación: field_info = field_info + "END_DATE=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"END_DATE") + ";";                                     |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                       |
| --- | ------------------------------------------------------- |
| 51  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5.jsp?estado= |
| 53  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3.jsp?estado= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                              | Resolución | Ficha / candidato |
| ------ | --- | ------------------------------------------------------- | ---------- | ----------------- |
| BASE   | 51  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5.jsp?estado= | ausente    | P06               |
| BASE   | 53  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3.jsp?estado= | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p4_p.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
