# mss_g4_gta_timesheet_employee

Identificador: `mss_g4/mss_g4_gta_timesheet_employee.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/mss_g4_gta_timesheet_employee.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_gta_timesheet_employee.jsp) | `952255ee1cba6fe67edb792c1a6a665c44bccb76f3ff6c333c584ab625fa1260` |     22 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/mss_g4_gta_timesheet_employee.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_gta_timesheet_employee.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 10  | sIdHr           | getParameter(request,"sIdHr")  |
| 16  | sOrPer          | getParameter(request,"sOrPer") |

| L   | Variable            | Expresión fuente                                                                                   | Resolución estática parcial                                                                        |
| --- | ------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 3   | sMonthOrDetail      | "M"                                                                                                | M                                                                                                  |
| 4   | sCommingFrom        | "M"                                                                                                | M                                                                                                  |
| 5   | sType               | "MSS"                                                                                              | MSS                                                                                                |
| 7   | sFormAction         | "/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp"                              | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp                                |
| 8   | sFormActionRedirect | "/servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp"     | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp       |
| 10  | sIdHrEcrpt          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIdHr")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sIdHr")                                  |
| 11  | sIdHr               | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sIdHrEcrpt)  | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sIdHrEcrpt)  |
| 16  | sOrPerEcrpt         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOrPer")                                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sOrPer")                                 |
| 17  | sOrPer              | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sOrPerEcrpt) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan",sOrPerEcrpt) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                |
| --- | --------------------------------------------------- |
| 12  | if (sIdHr==null){                                   |
| 18  | if ((sOrPer==null)&#124;&#124;(sOrPer.equals(""))){ |

### Includes, navegación y dependencias

| L   | Include                                                                  |
| --- | ------------------------------------------------------------------------ |
| 22  | ../../sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp |

| L   | Destino / recurso                                                                            |
| --- | -------------------------------------------------------------------------------------------- |
| 7   | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp                          |
| 8   | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp |
| 22  | ../../sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp                     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                   | Resolución | Ficha / candidato                                                                                                                                     |
| ------ | --- | -------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| BASE   | 22  | ../../sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp                     | física     | [sse_generico/sse_generico_gta_employee_presence_TSheet.jsp](../../transversal/navegacion/sse_generico--sse_generico_gta_employee_presence_tsheet.md) |
| BASE   | 7   | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp                          | ausente    | P06                                                                                                                                                   |
| BASE   | 8   | /servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp | ausente    | P06                                                                                                                                                   |
| BASE   | 22  | ../../sse_generico/espanol/sse_generico_gta_employee_presence_TSheet.jsp                     | física     | [sse_generico/sse_generico_gta_employee_presence_TSheet.jsp](../../transversal/navegacion/sse_generico--sse_generico_gta_employee_presence_tsheet.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g4/mss_g4_gta_timesheet_employee.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
