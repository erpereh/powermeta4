# mss_g2_p4_salto

Identificador: `mss_g2/mss_g2_p4_salto.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p4_salto.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p4_salto.jsp) | `8e1684aa7c4b17518f5bed0340a2dbbcf8b00064b86f5c27b0d5980dcd6a8f4c` |     73 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p4_salto.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p4_salto.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 5   | NUM_SAL_PLANS   | getParameter(request,"NUM_SAL_PLANS") |
| 6   | control         | getParameter(request,"control")       |

| L   | Variable        | Expresión fuente                                                          | Resolución estática parcial                                               |
| --- | --------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 4   | zsubsesion      | "SSM_SALARY_REVIEW_PROCESS"                                               | SSM_SALARY_REVIEW_PROCESS                                                 |
| 5   | rec_to_process  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NUM_SAL_PLANS") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NUM_SAL_PLANS") |
| 6   | control_redirec | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"control")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"control")       |
| 7   | zestado         | "21"                                                                      | 21                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                      |
| --- | ------------- | ------------------------------------------------------------------------------------------------------- |
| 10  | m4:page       | subsessionid=SSM_SALARY_REVIEW_PROCESS                                                                  |
| 12  | m4:job        |                                                                                                         |
| 13  | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                         |
| 17  | m4:exec       | node=SSM_SALARY_REVIEW_PROCESS; method=CR_SET_EMPLOYEE_SALARY_PLANS; m4object=SSM_SALARY_REVIEW_PROCESS |
| 18  | m4:outputdef  | node=SSM_SALARY_REVIEW_PROCESS; m4alias=GENERICO; m4object=SSM_SALARY_REVIEW_PROCESS                    |
| 20  | m4:exec       | node=SSM_EMPLOYEES_INFORMATION; alias=count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS           |
| 21  | m4:exec       | node=SSM_SAL_REVIEW_EMPL_RESUMEN; alias=count_rev; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS     |
| 26  | m4:outputexec | var=count; alias=count                                                                                  |
| 29  | m4:outputexec | var=count_2; alias=count_rev                                                                            |
| 34  | m4:item       | m4varname=var_control; item=CR_LAST_EMPLOTYEE_CALCULATED; htmlsafe=true; outputdef=GENERICO             |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal          |
| --- | --------------------------------------------- |
| 15  | &lt;% if (control_redirec.equals("0")){ %&gt; |
| 32  | &lt;% if (control_redirec.equals("0"))        |
| 36  | &lt;% if (count.equals("1"))                  |
| 40  | else                                          |
| 42  | if (var_control.equals("0"))                  |
| 46  | else                                          |
| 48  | if (count_2.equals("0"))                      |
| 52  | else                                          |
| 59  | else                                          |
| 61  | if (count_2.equals("0"))                      |
| 65  | else                                          |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                       |
| --- | ------------------------------------------------------- |
| 38  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado= |
| 44  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3.jsp?estado= |
| 50  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado= |
| 54  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5.jsp?estado= |
| 63  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado= |
| 67  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5.jsp?estado= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                              | Resolución | Ficha / candidato |
| ------ | --- | ------------------------------------------------------- | ---------- | ----------------- |
| BASE   | 38  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado= | ausente    | P06               |
| BASE   | 44  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3.jsp?estado= | ausente    | P06               |
| BASE   | 50  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado= | ausente    | P06               |
| BASE   | 54  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5.jsp?estado= | ausente    | P06               |
| BASE   | 63  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado= | ausente    | P06               |
| BASE   | 67  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5.jsp?estado= | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p4_salto.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
