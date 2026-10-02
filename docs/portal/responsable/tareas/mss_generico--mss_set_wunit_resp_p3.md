# mss_set_wunit_resp_p3

Identificador: `mss_generico/mss_set_wunit_resp_p3.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/mss_set_wunit_resp_p3.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mss_set_wunit_resp_p3.jsp) | `712c64148966411a8ce622fafb814cc351d55c8b72ab04319bf8431b56e92f6d` |     29 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/mss_set_wunit_resp_p3.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/mss_set_wunit_resp_p3.jsp) | `712c64148966411a8ce622fafb814cc351d55c8b72ab04319bf8431b56e92f6d` |     29 |
| BASE / español    | [mss_generico/espanol/mss_set_wunit_resp_p3.jsp](../../../../clon_portal/portal/mss_generico/espanol/mss_set_wunit_resp_p3.jsp)                             | `712c64148966411a8ce622fafb814cc351d55c8b72ab04319bf8431b56e92f6d` |     29 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/mss_set_wunit_resp_p3.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mss_set_wunit_resp_p3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 6   | tp_for_filter   | getParameter(request,"tp_for_filter") |
| 15  | wu              | getParameter(request,"wu")            |

| L   | Variable   | Expresión fuente                                                          | Resolución estática parcial                                               |
| --- | ---------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 4   | zsubsesion | "SSM_SET_WORK_UNIT_TO_SEE"                                                | SSM_SET_WORK_UNIT_TO_SEE                                                  |
| 5   | zestado    | "21"                                                                      | 21                                                                        |
| 6   | tipo_resp  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_for_filter") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_for_filter") |
| 15  | work_unit  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wu")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wu")            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado                                                                              |
| --- | ---------- | ----------------------------------------------------------------------------------------------- |
| 9   | m4:page    | subsessionid=SSM_SET_WORK_UNIT_TO_SEE                                                           |
| 11  | m4:job     |                                                                                                 |
| 12  | m4:datadef | m4o=SSM_SET_WORK_UNIT_TO_SEE; m4name=SSM_SET_WORK_UNIT_TO_SEE                                   |
| 18  | m4:exec    | node=SSM_SET_WORK_UNIT_TO_SEE; method=SSM_UNSET_ALL_SUB_TREE; m4object=SSM_SET_WORK_UNIT_TO_SEE |
| 19  | m4:param   | name=ARG_WORK_UNIT; value=(work_unit)                                                           |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                      |
| --- | ---------------------------------------------------------------------- |
| 24  | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                             | Resolución | Ficha / candidato |
| ------ | --- | ---------------------------------------------------------------------- | ---------- | ----------------- |
| COLL   | 24  | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado= | ausente    | P06               |
| IBER   | 24  | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado= | ausente    | P06               |
| BASE   | 24  | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado= | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/mss_set_wunit_resp_p3.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
