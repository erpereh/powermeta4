# shco_gen_param_process_execute

Identificador: `shco_g0/shco_gen_param_process_execute.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_param_process_execute.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_param_process_execute.jsp) | `49aa6b0de9c711fa8c2142c58c9c4790701f4b10ae97eaff55c921c01a7be516` |     63 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_param_process_execute.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_param_process_execute.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| 50  | form    | id=frmExecuteProcess; name=frmExecuteProcess; method=post; action=/servlet/CheckSecurity/JSP/&lt;%=zprocesspage%&gt; |
| 51  | input   | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                             |
| 52  | input   | type=hidden; id=zm4o; name=zm4o; value=&lt;%=zm4object%&gt;                                                          |
| 53  | input   | type=hidden; id=znode; name=znode; value=SHCO_GN_PARAM_VALUES                                                        |
| 54  | input   | type=hidden; id=zopenmode; name=zopenmode; value=0                                                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 18  | zparamvalstring | getParameter("zparamvalstring") |
| 19  | zitemvalstring  | getParameter("zitemvalstring")  |
| 20  | zsubsesion      | getParameter ("zsubsesion")     |
| 21  | zprocesspage    | getParameter ("zprocesspage")   |

| L   | Variable        | Expresión fuente                        | Resolución estática parcial             |
| --- | --------------- | --------------------------------------- | --------------------------------------- |
| 14  | zm4object       | "TC_RP_PARAM_PAGE_MAKER"                | TC_RP_PARAM_PAGE_MAKER                  |
| 15  | znodocom        | "SHCO_GN_COMUNICATION"                  | SHCO_GN_COMUNICATION                    |
| 18  | zparamvalstring | request.getParameter("zparamvalstring") | request.getParameter("zparamvalstring") |
| 19  | zitemvalstring  | request.getParameter("zitemvalstring")  | request.getParameter("zitemvalstring")  |
| 20  | zsubsesion      | request.getParameter ("zsubsesion")     | request.getParameter ("zsubsesion")     |
| 21  | zprocesspage    | request.getParameter ("zprocesspage")   | request.getParameter ("zprocesspage")   |
| 39  | zerror          | ""                                      |                                         |
| 40  | zshco_TEXT      | ""                                      |                                         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                   |
| --- | ------------- | ---------------------------------------------------------------------------------------------------- |
| 27  | m4:beginjob   |                                                                                                      |
| 28  | m4:datadef    | m4o=TC_RP_PARAM_PAGE_MAKER; m4name=TC_RP_PARAM_PAGE_MAKER                                            |
| 29  | m4:exec       | alias=EXECUTE_PROCESS; m4object=TC_RP_PARAM_PAGE_MAKER; node=TC_RP_PARAM_API; method=EXECUTE_PROCESS |
| 30  | m4:param      | name=ARG_PARAM_VAL_STRING; value=request.getParameter("zparamvalstring")                             |
| 31  | m4:param      | name=ARG_ITEM_VAL_STRING; value=request.getParameter("zitemvalstring")                               |
| 33  | m4:outputdef  | m4alias=SHCO_GN_COMUNICATION; m4object=TC_RP_PARAM_PAGE_MAKER; node=SHCO_GN_COMUNICATION; records=*  |
| 34  | m4:endjob     |                                                                                                      |
| 35  | m4:outputexec | m4alias=EXECUTE_PROCESS; m4varname=zExecuteProcessReturn                                             |
| 62  | m4:endpage    |                                                                                                      |

| L   | Operación | Argumentos literales                               |
| --- | --------- | -------------------------------------------------- |
| 43  | getItem   | znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                      |
| --- | ------------------------------------------------------------------------- |
| 37  | &lt;% if (zExecuteProcessReturn==null){zExecuteProcessReturn ="-1";}%&gt; |
| 38  | &lt;%if (zExecuteProcessReturn.equals("-1")){                             |
| 48  | &lt;%}else{%&gt;                                                          |

### Includes, navegación y dependencias

| L   | Include                           |
| --- | --------------------------------- |
| 10  | ../shco_g0/shco_gen_taglib.jsp    |
| 24  | ../shco_g0/shco_gen_arg.jsp       |
| 24  | ../shco_g0/shco_gen_bag.jsp       |
| 26  | ../shco_g0/shco_gen_datadef.jsp   |
| 46  | ../shco_g0/shco_gen_error.jsp     |
| 49  | ../shco_g0/shco_gen_normal_js.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 50  | /servlet/CheckSecurity/JSP/&lt;%=zprocesspage%&gt; |
| 10  | ../shco_g0/shco_gen_taglib.jsp                     |
| 24  | ../shco_g0/shco_gen_arg.jsp                        |
| 24  | ../shco_g0/shco_gen_bag.jsp                        |
| 26  | ../shco_g0/shco_gen_datadef.jsp                    |
| 46  | ../shco_g0/shco_gen_error.jsp                      |
| 49  | ../shco_g0/shco_gen_normal_js.jsp                  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                |
| ------ | --- | -------------------------------------------------- | ---------- | ---------------------------------------------------------------- |
| BASE   | 10  | ../shco_g0/shco_gen_taglib.jsp                     | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)       |
| BASE   | 24  | ../shco_g0/shco_gen_arg.jsp                        | física     | [shco_g0/shco_gen_arg.jsp](shco_g0--shco_gen_arg.md)             |
| BASE   | 24  | ../shco_g0/shco_gen_bag.jsp                        | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)             |
| BASE   | 26  | ../shco_g0/shco_gen_datadef.jsp                    | física     | [shco_g0/shco_gen_datadef.jsp](shco_g0--shco_gen_datadef.md)     |
| BASE   | 46  | ../shco_g0/shco_gen_error.jsp                      | física     | [shco_g0/shco_gen_error.jsp](shco_g0--shco_gen_error.md)         |
| BASE   | 49  | ../shco_g0/shco_gen_normal_js.jsp                  | física     | [shco_g0/shco_gen_normal_js.jsp](shco_g0--shco_gen_normal_js.md) |
| BASE   | 50  | /servlet/CheckSecurity/JSP/&lt;%=zprocesspage%&gt; | dinámica   | P06                                                              |
| BASE   | 10  | ../shco_g0/shco_gen_taglib.jsp                     | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)       |
| BASE   | 24  | ../shco_g0/shco_gen_arg.jsp                        | física     | [shco_g0/shco_gen_arg.jsp](shco_g0--shco_gen_arg.md)             |
| BASE   | 24  | ../shco_g0/shco_gen_bag.jsp                        | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)             |
| BASE   | 26  | ../shco_g0/shco_gen_datadef.jsp                    | física     | [shco_g0/shco_gen_datadef.jsp](shco_g0--shco_gen_datadef.md)     |
| BASE   | 46  | ../shco_g0/shco_gen_error.jsp                      | física     | [shco_g0/shco_gen_error.jsp](shco_g0--shco_gen_error.md)         |
| BASE   | 49  | ../shco_g0/shco_gen_normal_js.jsp                  | física     | [shco_g0/shco_gen_normal_js.jsp](shco_g0--shco_gen_normal_js.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_param_process_execute.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
