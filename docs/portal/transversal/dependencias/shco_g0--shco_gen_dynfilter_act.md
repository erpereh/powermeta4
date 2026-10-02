# shco_gen_dynfilter_act

Identificador: `shco_g0/shco_gen_dynfilter_act.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_dynfilter_act.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_dynfilter_act.jsp) | `9472a666546e969e45620b12aa2a7345d9aa9a0362242aadf2c3b9eff5238de2` |     62 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_dynfilter_act.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_dynfilter_act.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                         |
| --- | ------------ | ------------------------------------------------------------------------------------------ |
| 13  | m4:exec      | m4object=zm4oalias; node=znodoapi; method=zmetodosetparams; alias=zmetodosetparams         |
| 14  | m4:param     | name=ARG_ID_T3; value=zdf_m4o                                                              |
| 15  | m4:param     | name=ARG_APPLY_MODE; value=zdf_applymode                                                   |
| 16  | m4:param     | name=ARG_ID_T3_ALIAS; value=zdf_m4oalias                                                   |
| 17  | m4:param     | name=ARG_RETURN_PAGE; value=zdf_returnpage                                                 |
| 18  | m4:param     | name=ARG_ID_T3_SESSION; value=zsubsesion                                                   |
| 19  | m4:param     | name=ARG_RETURN_PAGE_WIDTH; value=zdf_returnpagewidth                                      |
| 20  | m4:param     | name=ARG_RETURN_PAGE_HEIGHT; value=zdf_returnpageheight                                    |
| 22  | m4:exec      | m4object=zm4oalias; node=znodoapi; method=zmetodolist; alias=zmetodolist                   |
| 26  | m4:exec      | m4object=zm4oalias; node=znodoapi; method=zmetodosavedynfilter; alias=zmetodosavedynfilter |
| 27  | m4:param     | name=ARG_ID_NODE; value=zidnode                                                            |
| 28  | m4:param     | name=ARG_ID_SENTENCE; value=zidsentence                                                    |
| 29  | m4:param     | name=ARG_LANGUAGE; value=znatlanguage                                                      |
| 30  | m4:param     | name=ARG_API_SQL; value=zapisql                                                            |
| 31  | m4:param     | name=ARG_ID_SCENARIO; value=zidscenario                                                    |
| 36  | m4:exec      | m4object=zm4oalias; node=znodoapi; method=zmetodosavedynfilter; alias=zmetodosavedynfilter |
| 37  | m4:param     | name=ARG_ID_NODE; value=zidnode                                                            |
| 38  | m4:param     | name=ARG_ID_SENTENCE; value=                                                               |
| 39  | m4:param     | name=ARG_LANGUAGE; value=                                                                  |
| 40  | m4:param     | name=ARG_API_SQL; value=                                                                   |
| 41  | m4:param     | name=ARG_ID_SCENARIO; value=zidscenario                                                    |
| 43  | m4:exec      | m4object=zm4oalias; node=znodoapi; method=zmetodoremovefilter; alias=zmetodoremovefilter   |
| 44  | m4:param     | name=ARG_ID_SENTENCE; value=zidsentence                                                    |
| 47  | m4:exec      | m4object=zm4oalias; node=znodoapi; method=zmetodosavedynfilter; alias=zmetodosavedynfilter |
| 48  | m4:param     | name=ARG_ID_NODE; value=zidnode                                                            |
| 49  | m4:param     | name=ARG_ID_SENTENCE; value=zidsentence                                                    |
| 50  | m4:param     | name=ARG_LANGUAGE; value=znatlanguage                                                      |
| 51  | m4:param     | name=ARG_API_SQL; value=zapisql                                                            |
| 52  | m4:param     | name=ARG_ID_SCENARIO; value=zidscenario                                                    |
| 54  | m4:exec      | m4object=zm4oalias; node=znodoapi; method=zmetodoapply; alias=zmetodoapply                 |
| 59  | m4:outputdef | m4alias=znododynfilterlist; m4object=zm4oalias; node=znododynfilterlist; records=*         |
| 60  | m4:outputdef | m4alias=znodoapi; m4object=zm4oalias; node=znodoapi; records=*                             |
| 61  | m4:outputdef | m4alias=znodolabel; m4object=zm4oalias; node=znodolabel; records=*                         |
| 62  | m4:outputdef | m4alias=znodocom; m4object=zm4oalias; node=znodocom; records=*                             |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                      |
| --- | --------------------------------------------------------------------------------------------------------- |
| 9   | &lt;% if (zdf_returnpage.equals("")){zdf_returnpage=zdireccion;}                                          |
| 11  | if (zoperation.equals("")){%&gt;                                                                          |
| 25  | &lt;%}else if (zoperation.equals(zSAVE_FILTER_OP)){%&gt;                                                  |
| 34  | &lt;%}else if (zoperation.equals(zDELETE_FILTER_OP) &#124;&#124; zoperation.equals(zDELETE_SENTENCE_OP)){ |
| 35  | if (zoperation.equals(zDELETE_FILTER_OP)){zidscenario="";} %&gt;                                          |
| 46  | &lt;%}else if (zoperation.equals(zAPPLY_DYN_FILTER_OP)){%&gt;                                             |

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

- Confirmar exposición y permisos de `shco_g0/shco_gen_dynfilter_act.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
