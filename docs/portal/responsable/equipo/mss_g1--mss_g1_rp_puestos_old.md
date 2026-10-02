# Filtro : Informe Puestos Unidad

Identificador: `mss_g1/mss_g1_rp_puestos_old.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/mss_g1_rp_puestos_old.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_rp_puestos_old.jsp) | `a8793993d2b1ac8741cb2b962f6342e1ee5172532ce741145af35d59a34100b1` |    108 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_g1/espanol/mss_g1_rp_puestos_old.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_rp_puestos_old.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta        |
| --- | ------------------------------- |
| 17  | Filtro : Informe Puestos Unidad |
| 71  | Seleccione un Puesto            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 73  | select  | id=puestos                                                                                                                   |
| 74  | option  | value=; selected=presente; confirmar condición si dinámico                                                                   |
| 85  | option  | value=&lt;%=idPuesto%&gt;                                                                                                    |
| 90  | form    | id=filtroInforme; name=filtroInforme; method=post; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 91  | input   | type=hidden; id=informe; name=informe; value=PUESTOS                                                                         |
| 92  | input   | type=hidden; id=puesto; name=puesto; value=                                                                                  |
| 93  | input   | type=hidden; id=pagina; name=pagina; value=mss_g1_rp_puestos.jsp                                                             |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente                              | Resolución estática parcial                                |
| --- | ----------------- | --------------------------------------------- | ---------------------------------------------------------- |
| 23  | zsubsesion        | "CSP_RP_ORO_MSS"                              | CSP_RP_ORO_MSS                                             |
| 24  | zmeta4object      | "CSP_RP_ORO_MSS"                              | CSP_RP_ORO_MSS                                             |
| 25  | znodePuestos      | "CSP_PUESTOS_DIRECCION"                       | CSP_PUESTOS_DIRECCION                                      |
| 27  | zmetodocarga      | zsubsesion +"!CSP_RP_ORO_MSS.CSP_CARGA"       | CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_CARGA                    |
| 30  | zoutputdefPuestos | zsubsesion + "!" + znodePuestos + "[*]"       | CSP_RP_ORO_MSS{"!"}CSP_PUESTOS_DIRECCION{"[*]"}            |
| 31  | zmovePuestos      | znodePuestos + ":" + znodePuestos + "[FIRST]" | CSP_PUESTOS_DIRECCION{":"}CSP_PUESTOS_DIRECCION{"[FIRST]"} |
| 34  | idPuesto          | ""                                            |                                                            |
| 35  | nPuesto           | ""                                            |                                                            |
| 57  | i                 | 0                                             | 0                                                          |
| 58  | zposicionPuestos  | 0                                             | 0                                                          |
| 67  | id                | ""                                            |                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                    |
| --- | ------------ | ------------------------------------------------------------------------------------- |
| 40  | m4:startpage | m4task=CSP_RP_ORO_MSS                                                                 |
| 42  | m4:beginjob  |                                                                                       |
| 43  | m4:datadef   | m4o=CSP_RP_ORO_MSS; m4name=CSP_RP_ORO_MSS                                             |
| 45  | m4:exec      | m4method=CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_CARGA                                      |
| 47  | m4:outputdef | m4alias=CSP_PUESTOS_DIRECCION                                                         |
| 47  | m4:param     | name=m4name0; value=CSP_RP_ORO_MSS{"!"}CSP_PUESTOS_DIRECCION{"[*]"}                   |
| 48  | m4:endjob    |                                                                                       |
| 49  | m4:move      |                                                                                       |
| 49  | m4:param     | name=CSP_RP_ORO_MSS; value=CSP_PUESTOS_DIRECCION{":"}CSP_PUESTOS_DIRECCION{"[FIRST]"} |

| L   | Operación        | Argumentos literales                                  |
| --- | ---------------- | ----------------------------------------------------- |
| 62  | getCountInClient | znodePuestos,zsubsesion,znodePuestos                  |
| 80  | getItem          | znodePuestos,zmeta4object,znodePuestos,"","ID_PUESTO" |
| 81  | getItem          | znodePuestos,zmeta4object,znodePuestos,"","N_PUESTO"  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                      |
| --- | --------------------------------------------------------------------------------------------------------- |
| 30  | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + znodePuestos + "[*]";  |
| 31  | expresión de cálculo/transformación: String zmovePuestos = znodePuestos + ":" + znodePuestos + "[FIRST]"; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                  |
| --- | ------------------------------------------------------------------ |
| 18  | /css/estilo_sse.css                                                |
| 19  | /library/jquery.js                                                 |
| 90  | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 93  | mss_g1_rp_puestos.jsp                                              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                         | Resolución | Ficha / candidato                                                     |
| ------ | --- | ------------------------------------------------------------------ | ---------- | --------------------------------------------------------------------- |
| CYC    | 19  | /library/jquery.js                                                 | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96; |
| CYC    | 90  | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp | ausente    | P06                                                                   |
| CYC    | 93  | mss_g1_rp_puestos.jsp                                              | física     | [mss_g1/mss_g1_rp_puestos.jsp](mss_g1--mss_g1_rp_puestos.md)          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_rp_puestos_old.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
