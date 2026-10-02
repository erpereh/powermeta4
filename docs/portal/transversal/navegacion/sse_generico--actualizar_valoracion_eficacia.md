# Actualizacion

Identificador: `sse_generico/actualizar_valoracion_eficacia.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/actualizar_valoracion_eficacia.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/actualizar_valoracion_eficacia.jsp) | `8b4384ac131666fe470fda11d4551dd6be7b4a8071931ebd24c6aa45e62a1c63` |     54 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/actualizar_valoracion_eficacia.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/actualizar_valoracion_eficacia.jsp)   | `8b4384ac131666fe470fda11d4551dd6be7b4a8071931ebd24c6aa45e62a1c63` |     54 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/actualizar_valoracion_eficacia.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/actualizar_valoracion_eficacia.jsp) | `8b4384ac131666fe470fda11d4551dd6be7b4a8071931ebd24c6aa45e62a1c63` |     54 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/actualizar_valoracion_eficacia.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/actualizar_valoracion_eficacia.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 46  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 12  | valoraciones    | getParameter(request,"valoraciones") |

| L   | Variable     | Expresión fuente                                                         | Resolución estática parcial                                              |
| --- | ------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 12  | valoraciones | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"valoraciones") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"valoraciones") |
| 19  | zredireccion | "/servlet/CheckSecurity/JSP/mss_g3/mss_g3_val_efi.jsp"                   | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_val_efi.jsp                     |
| 20  | zerror       | "N"                                                                      | N                                                                        |
| 22  | zsubsesion   | "CSP_MNG_VALORA_EFICA"                                                   | CSP_MNG_VALORA_EFICA                                                     |
| 23  | zmeta4object | "CSP_MNG_VALORA_EFICA"                                                   | CSP_MNG_VALORA_EFICA                                                     |
| 24  | znodo        | "CSP_MNG_VALORA_EFICA"                                                   | CSP_MNG_VALORA_EFICA                                                     |
| 25  | zmetodo      | zsubsesion + "!" + znodo + ".CSP_M_RESPUESTAS_MSS"                       | CSP_MNG_VALORA_EFICA{"!"}CSP_MNG_VALORA_EFICA{".CSP_M_RESPUESTAS_MSS"}   |
| 26  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                         | CSP_MNG_VALORA_EFICA{"!"}CSP_MNG_VALORA_EFICA{"[*]"}                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                              |
| --- | ------------ | ------------------------------------------------------------------------------- |
| 32  | m4:startpage | m4task=CSP_MNG_VALORA_EFICA                                                     |
| 32  | m4:beginjob  |                                                                                 |
| 33  | m4:datadef   | m4o=CSP_MNG_VALORA_EFICA; m4name=CSP_MNG_VALORA_EFICA                           |
| 40  | m4:exec      | m4method=CSP_MNG_VALORA_EFICA{"!"}CSP_MNG_VALORA_EFICA{".CSP_M_RESPUESTAS_MSS"} |
| 41  | m4:outputdef | m4alias=CSP_MNG_VALORA_EFICA                                                    |
| 41  | m4:param     | name=m4name0; value=CSP_MNG_VALORA_EFICA{"!"}CSP_MNG_VALORA_EFICA{"[*]"}        |
| 42  | m4:endjob    |                                                                                 |
| 52  | m4:endpage   |                                                                                 |

| L   | Operación | Argumentos literales                                         |
| --- | --------- | ------------------------------------------------------------ |
| 37  | setItem   | zsubsesion,zsubsesion,"","CSP_P_RESPUESTAS_MSS",valoraciones |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                      |
| --- | --------------------------------------------------------------------------------------------------------- |
| 25  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".CSP_M_RESPUESTAS_MSS"; |
| 26  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                |

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 51  | generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                    |
| --- | ---------------------------------------------------- |
| 47  | /css/estilo_sse.css                                  |
| 48  | /libreria/funciones_sse.js                           |
| 19  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_val_efi.jsp |
| 51  | generico_actualizar_cuerpo.jsp                       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                           | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | ---------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 51  | generico_actualizar_cuerpo.jsp                       | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| COLL   | 48  | /libreria/funciones_sse.js                           | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 19  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_val_efi.jsp | ausente    | P06                                                                                                                                              |
| COLL   | 51  | generico_actualizar_cuerpo.jsp                       | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 51  | generico_actualizar_cuerpo.jsp                       | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 48  | /libreria/funciones_sse.js                           | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 19  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_val_efi.jsp | ausente    | P06                                                                                                                                              |
| CYC    | 51  | generico_actualizar_cuerpo.jsp                       | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 51  | generico_actualizar_cuerpo.jsp                       | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 48  | /libreria/funciones_sse.js                           | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 19  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_val_efi.jsp | ausente    | P06                                                                                                                                              |
| IBER   | 51  | generico_actualizar_cuerpo.jsp                       | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/actualizar_valoracion_eficacia.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
