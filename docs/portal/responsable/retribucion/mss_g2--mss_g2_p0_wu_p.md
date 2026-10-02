# mss_g2_p0_wu_p

Identificador: `mss_g2/mss_g2_p0_wu_p.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p0_wu_p.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p0_wu_p.jsp) | `d476a2da045250d862dd0906038824c0d42285aa021c764a012e4d3d7ed34bdc` |     59 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p0_wu_p.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p0_wu_p.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 15  | EMPLOYEE        | getParameter(request,"EMPLOYEE")    |
| 20  | EMPLOYEE_OR     | getParameter(request,"EMPLOYEE_OR") |
| 25  | MAIL_TEXT       | getParameter(request,"MAIL_TEXT")   |
| 44  | WORK_UNIT       | getParameter(request,"WORK_UNIT")   |
| 45  | RESP_TYPE       | getParameter(request,"RESP_TYPE")   |

| L   | Variable       | Expresión fuente                                                        | Resolución estática parcial                                             |
| --- | -------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 5   | zsubsesion     | "SSM_SALARY_REVIEW_PROCESS"                                             | SSM_SALARY_REVIEW_PROCESS                                               |
| 6   | zestado        | "21"                                                                    | 21                                                                      |
| 15  | id_employee    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"EMPLOYEE")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"EMPLOYEE")    |
| 20  | id_or_employee | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"EMPLOYEE_OR") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"EMPLOYEE_OR") |
| 25  | body_text      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"MAIL_TEXT")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"MAIL_TEXT")   |
| 44  | id_work_unit   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WORK_UNIT")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WORK_UNIT")   |
| 45  | resp_tp        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RESP_TYPE")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RESP_TYPE")   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                                     |
| --- | ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 9   | m4:page       | subsessionid=SSM_SALARY_REVIEW_PROCESS                                                                                 |
| 11  | m4:job        |                                                                                                                        |
| 12  | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                                        |
| 29  | m4:exec       | node=SSM_SALARY_REVIEW_PROCESS; alias=delegate; method=CR_SET_RESP_SALARY_DELEGATE; m4object=SSM_SALARY_REVIEW_PROCESS |
| 31  | m4:param      | name=ARG_HR; value=(id_employee)                                                                                       |
| 32  | m4:param      | name=ARG_OR_HR; value=(id_or_employee)                                                                                 |
| 33  | m4:param      | name=ARG_MAIL_TEXT; value=(body_text)                                                                                  |
| 41  | m4:outputexec | var=result; alias=delegate                                                                                             |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal             |
| --- | ------------------------------------------------ |
| 18  | if (id_employee == null) {id_employee="";}       |
| 23  | if (id_or_employee == null) {id_or_employee="";} |
| 47  | if (result.equals("1"))                          |
| 51  | else                                             |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                  |
| --- | ------------------------------------------------------------------ |
| 49  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu_mail.jsp?WORK_UNIT= |
| 53  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu.jsp?WU=             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                         | Resolución | Ficha / candidato |
| ------ | --- | ------------------------------------------------------------------ | ---------- | ----------------- |
| BASE   | 49  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu_mail.jsp?WORK_UNIT= | ausente    | P06               |
| BASE   | 53  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu.jsp?WU=             | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p0_wu_p.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
