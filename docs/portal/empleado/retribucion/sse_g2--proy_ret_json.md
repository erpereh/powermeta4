# proy_ret_json

Identificador: `sse_g2/proy_ret_json.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/proy_ret_json.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/proy_ret_json.jsp) | `51d65a55792c8c8dc208dccc4ff45713041df836138bfe85e2d6df6a4083f2ae` |     37 |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/proy_ret_json.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/proy_ret_json.jsp)   | `51d65a55792c8c8dc208dccc4ff45713041df836138bfe85e2d6df6a4083f2ae` |     37 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/proy_ret_json.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/proy_ret_json.jsp) | `51d65a55792c8c8dc208dccc4ff45713041df836138bfe85e2d6df6a4083f2ae` |     37 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/proy_ret_json.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/proy_ret_json.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 13  | ANIO            | getParameter(request,"ANIO") |

| L   | Variable      | Expresión fuente                                                    | Resolución estática parcial                                                                        |
| --- | ------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 10  | zsubsesion    | "CSP_PROYECCIONES_JSON"                                             | CSP_PROYECCIONES_JSON                                                                              |
| 11  | zmeta4object  | "CSP_PROYECCIONES_JSON"                                             | CSP_PROYECCIONES_JSON                                                                              |
| 12  | znodo8        | "CSP_PROYECCIONES_JSON"                                             | CSP_PROYECCIONES_JSON                                                                              |
| 13  | anio          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ANIO")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ANIO")                                   |
| 14  | zmetodocarga4 | zsubsesion + "!"+znodo8+".CARGA"                                    | CSP_PROYECCIONES_JSON{"!"}CSP_PROYECCIONES_JSON.CARGA                                              |
| 15  | zoutputdef8   | zsubsesion + "!" + znodo8 + "[*]"                                   | CSP_PROYECCIONES_JSON{"!"}CSP_PROYECCIONES_JSON{"[*]"}                                             |
| 16  | zcomun8       | znodo8 + ":" + zsubsesion + "!" + znodo8 + "[&amp;VAR.m4lix]" + "." | CSP_PROYECCIONES_JSON{":"}CSP_PROYECCIONES_JSON{"!"}CSP_PROYECCIONES_JSON{"[&amp;VAR.m4lix]"}{"."} |
| 17  | zmove8        | znodo8 + ":" + znodo8 + "[FIRST]"                                   | CSP_PROYECCIONES_JSON{":"}CSP_PROYECCIONES_JSON{"[FIRST]"}                                         |
| 18  | zJSON         | ""                                                                  |                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                     |
| --- | ------------ | -------------------------------------------------------------------------------------- |
| 21  | m4:startpage | m4task=CSP_PROYECCIONES_JSON                                                           |
| 22  | m4:beginjob  |                                                                                        |
| 23  | m4:datadef   | m4o=CSP_PROYECCIONES_JSON; m4name=CSP_PROYECCIONES_JSON                                |
| 24  | m4:exec      | m4method=CSP_PROYECCIONES_JSON{"!"}CSP_PROYECCIONES_JSON.CARGA                         |
| 24  | m4:param     | name=VALUE_ARG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ANIO") |
| 25  | m4:outputdef | m4alias=CSP_PROYECCIONES_JSON                                                          |
| 25  | m4:param     | name=m4name0; value=CSP_PROYECCIONES_JSON{"!"}CSP_PROYECCIONES_JSON{"[*]"}             |
| 26  | m4:endjob    |                                                                                        |

| L   | Operación | Argumentos literales                 |
| --- | --------- | ------------------------------------ |
| 31  | getItem   | znodo8,zmeta4object,znodo8,"","JSON" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                          |
| --- | --------------------------------------------------------------------------------------------- |
| 14  | expresión de cálculo/transformación: String zmetodocarga4 = zsubsesion + "!"+znodo8+".CARGA"; |
| 15  | expresión de cálculo/transformación: String zoutputdef8 = zsubsesion + "!" + znodo8 + "[*]";  |

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

- Confirmar exposición y permisos de `sse_g2/proy_ret_json.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
