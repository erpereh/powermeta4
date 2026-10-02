# Actualizacion

Identificador: `sse_g3/sse_g3_p17_act.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p17_act.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p17_act.jsp) | `e304ec630f43ba04b72f4b4a44a059f9bcafea2e58e1f1e802f755131d89270c` |     58 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p17_act.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p17_act.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 50  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave    | Acceso literal                  |
| --- | ------------------ | ------------------------------- |
| 12  | ordinal            | getParameter(request,"ordinal") |
| 13  | SCO_EMPLOYEE_COMM  | zhash.get("SCO_EMPLOYEE_COMM")  |
| 14  | SCO_EMPLOYEE_AGREE | zhash.get("SCO_EMPLOYEE_AGREE") |

| L   | Variable     | Expresión fuente                                                    | Resolución estática parcial                                         |
| --- | ------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 12  | zordinal     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal") |
| 13  | zComment     | (String) zhash.get("SCO_EMPLOYEE_COMM")                             | (String) zhash.get("SCO_EMPLOYEE_COMM")                             |
| 14  | zAgreement   | (String) zhash.get("SCO_EMPLOYEE_AGREE")                            | (String) zhash.get("SCO_EMPLOYEE_AGREE")                            |
| 15  | zsubsesion   | "SSM_EV_ROL_LV_OBJ"                                                 | SSM_EV_ROL_LV_OBJ                                                   |
| 16  | zmeta4object | "SSM_EV_ROL_LV_OBJ"                                                 | SSM_EV_ROL_LV_OBJ                                                   |
| 17  | znodo        | "SSE_EV_ROL_LV_OBJ"                                                 | SSE_EV_ROL_LV_OBJ                                                   |
| 18  | znodo2       | "SSE_COMUNICACION"                                                  | SSE_COMUNICACION                                                    |
| 19  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                    | SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[*]"}                      |
| 20  | zoutputdef2  | zsubsesion + "!" + znodo2 + "[*]"                                   | SSM_EV_ROL_LV_OBJ{"!"}SSE_COMUNICACION{"[*]"}                       |
| 21  | zmetodo      | "CARGA:"+ zsubsesion + "!" + znodo + ".SSE_GRABAR"                  | CARGA:SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{".SSE_GRABAR"}        |
| 33  | zerror       | "0"                                                                 | 0                                                                   |
| 34  | zredireccion | ""                                                                  |                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                       |
| --- | ------------ | ---------------------------------------------------------------------------------------- |
| 24  | m4:startpage | m4task=SSM_EV_ROL_LV_OBJ                                                                 |
| 25  | m4:beginjob  |                                                                                          |
| 26  | m4:datadef   | m4o=SSM_EV_ROL_LV_OBJ; m4name=SSM_EV_ROL_LV_OBJ                                          |
| 27  | m4:exec      | m4method=CARGA:SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{".SSE_GRABAR"}                    |
| 27  | m4:param     | name=ARG_COMMENT; value=(String) zhash.get("SCO_EMPLOYEE_COMM")                          |
| 27  | m4:param     | name=ARG_AGREEMENT; value=(String) zhash.get("SCO_EMPLOYEE_AGREE")                       |
| 27  | m4:param     | name=ARG_CONT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal") |
| 28  | m4:exec      | m4method=CARGA:SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{".SSE_GRABAR"}                    |
| 29  | m4:outputdef |                                                                                          |
| 29  | m4:param     | name=m4name0; value=SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[*]"}                       |
| 30  | m4:outputdef |                                                                                          |
| 30  | m4:param     | name=m4name0; value=SSM_EV_ROL_LV_OBJ{"!"}SSE_COMUNICACION{"[*]"}                        |
| 31  | m4:endjob    |                                                                                          |
| 57  | m4:endpage   |                                                                                          |

| L   | Operación | Argumentos literales                      |
| --- | --------- | ----------------------------------------- |
| 37  | getItem   | "",zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 38  | getItem   | "",zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                      |
| --- | --------------------------------------------------------------------------------------------------------- |
| 44  | if ((zredireccion==null)){                                                                                |
| 19  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                |
| 20  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";              |
| 21  | expresión de cálculo/transformación: String zmetodo = "CARGA:"+ zsubsesion + "!" + znodo + ".SSE_GRABAR"; |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 53  | ../../sse_generico/espanol/menu_ess.jsp                   |
| 56  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 51  | /css/estilo_sse.css                                        |
| 52  | /libreria/funciones_sse.js                                 |
| 40  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31 |
| 53  | ../../sse_generico/espanol/menu_ess.jsp                    |
| 56  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                 | Resolución | Ficha / candidato                                                                                                       |
| ------ | --- | ---------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| BASE   | 53  | ../../sse_generico/espanol/menu_ess.jsp                    | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                     |
| BASE   | 56  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp  | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |
| BASE   | 52  | /libreria/funciones_sse.js                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                  |
| BASE   | 40  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31 | ausente    | P06                                                                                                                     |
| BASE   | 53  | ../../sse_generico/espanol/menu_ess.jsp                    | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                     |
| BASE   | 56  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp  | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p17_act.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
