# Filtro : Informe Puestos Unidad

Identificador: `mss_g1/mss_g1_rp_saluni.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_rp_saluni.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_rp_saluni.jsp) | `9491e876a79f626fdb5f7c938451e10c08b4feedc3987b9e4b13164c2015e8e2` |    109 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/mss_g1_rp_saluni.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_rp_saluni.jsp)   | `ac87e63aae4371d9fe8cea6636225637efcb6a1987dcf42289657d139bb90da8` |    211 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_rp_saluni.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_rp_saluni.jsp) | `9491e876a79f626fdb5f7c938451e10c08b4feedc3987b9e4b13164c2015e8e2` |    109 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_rp_saluni.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_rp_saluni.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta        |
| --- | ------------------------------- |
| 17  | Filtro : Informe Puestos Unidad |
| 70  | Seleccione una Dirección        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 72  | select  | id=direcciones                                                                                                               |
| 73  | option  | value=; selected=presente; confirmar condición si dinámico                                                                   |
| 84  | option  | value=&lt;%=idUnidad%&gt;                                                                                                    |
| 89  | form    | id=filtroInforme; name=filtroInforme; method=post; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 90  | input   | type=hidden; id=informe; name=informe; value=RETUNIDADES                                                                     |
| 91  | input   | type=hidden; id=direccion; name=direccion; value=                                                                            |
| 92  | input   | type=hidden; id=pagina; name=pagina; value=mss_g1_rp_saluni.jsp                                                              |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable           | Expresión fuente                                | Resolución estática parcial                                  |
| --- | ------------------ | ----------------------------------------------- | ------------------------------------------------------------ |
| 22  | zsubsesion         | "CSP_RP_ORO_MSS"                                | CSP_RP_ORO_MSS                                               |
| 23  | zmeta4object       | "CSP_RP_ORO_MSS"                                | CSP_RP_ORO_MSS                                               |
| 24  | znodeUnidades      | "CSP_UNIDADES_DIRECCION"                        | CSP_UNIDADES_DIRECCION                                       |
| 26  | zmetodocarga       | zsubsesion +"!CSP_RP_ORO_MSS.CSP_CARGA"         | CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_CARGA                      |
| 29  | zoutputdefUnidades | zsubsesion + "!" + znodeUnidades + "[*]"        | CSP_RP_ORO_MSS{"!"}CSP_UNIDADES_DIRECCION{"[*]"}             |
| 30  | zmoveUnidades      | znodeUnidades + ":" + znodeUnidades + "[FIRST]" | CSP_UNIDADES_DIRECCION{":"}CSP_UNIDADES_DIRECCION{"[FIRST]"} |
| 33  | idUnidad           | ""                                              |                                                              |
| 34  | nUnidad            | ""                                              |                                                              |
| 56  | i                  | 0                                               | 0                                                            |
| 57  | zposicionUnidades  | 0                                               | 0                                                            |
| 66  | id                 | ""                                              |                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                      |
| --- | ------------ | --------------------------------------------------------------------------------------- |
| 39  | m4:startpage | m4task=CSP_RP_ORO_MSS                                                                   |
| 41  | m4:beginjob  |                                                                                         |
| 42  | m4:datadef   | m4o=CSP_RP_ORO_MSS; m4name=CSP_RP_ORO_MSS                                               |
| 44  | m4:exec      | m4method=CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_CARGA                                        |
| 46  | m4:outputdef | m4alias=CSP_UNIDADES_DIRECCION                                                          |
| 46  | m4:param     | name=m4name0; value=CSP_RP_ORO_MSS{"!"}CSP_UNIDADES_DIRECCION{"[*]"}                    |
| 47  | m4:endjob    |                                                                                         |
| 48  | m4:move      |                                                                                         |
| 48  | m4:param     | name=CSP_RP_ORO_MSS; value=CSP_UNIDADES_DIRECCION{":"}CSP_UNIDADES_DIRECCION{"[FIRST]"} |

| L   | Operación        | Argumentos literales                                           |
| --- | ---------------- | -------------------------------------------------------------- |
| 61  | getCountInClient | znodeUnidades,zsubsesion,znodeUnidades                         |
| 79  | getItem          | znodeUnidades,zmeta4object,znodeUnidades,"","STD_ID_WORK_UNIT" |
| 80  | getItem          | znodeUnidades,zmeta4object,znodeUnidades,"","STD_N_WORK_UNIT"  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 29  | expresión de cálculo/transformación: String zoutputdefUnidades = zsubsesion + "!" + znodeUnidades + "[*]";   |
| 30  | expresión de cálculo/transformación: String zmoveUnidades = znodeUnidades + ":" + znodeUnidades + "[FIRST]"; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                  |
| --- | ------------------------------------------------------------------ |
| 18  | /css/estilo_sse.css                                                |
| 19  | /library/jquery.js                                                 |
| 89  | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 92  | mss_g1_rp_saluni.jsp                                               |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_g1/espanol/mss_g1_rp_saluni.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_rp_saluni.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta        |
| --- | ------------------------------- |
| 7   | Filtro : Informe Puestos Unidad |
| 157 | Retribucion de Ver              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 160 | a       | onclick=$('#filtroInforme').submit(); style=cursor: pointer; margin :10px; color: rgba(216, 0, 31, 1)                        |
| 170 | form    | id=filtroInforme; name=filtroInforme; method=post; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 171 | input   | type=hidden; id=informe; name=informe; value=RETUNIDADES                                                                     |
| 172 | input   | type=hidden; id=direccion; name=direccion; value=                                                                            |
| 173 | input   | type=hidden; id=pagina; name=pagina; value=mss_g1_rp_saluni.jsp                                                              |
| 177 | select  | id=ARE                                                                                                                       |
| 178 | select  | id=UNI                                                                                                                       |
| 179 | select  | id=SER                                                                                                                       |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable           | Expresión fuente                                       | Resolución estática parcial                                                                       |
| --- | ------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| 14  | zsubsesion         | "CSP_RP_ORO_MSS"                                       | CSP_RP_ORO_MSS                                                                                    |
| 15  | zmeta4object       | "CSP_RP_ORO_MSS"                                       | CSP_RP_ORO_MSS                                                                                    |
| 16  | znodeUnidades      | "CSP_UNIDADES_DIRECCION"                               | CSP_UNIDADES_DIRECCION                                                                            |
| 17  | combos             | "CSP_JSON_SELECT_DEPEN"                                | CSP_JSON_SELECT_DEPEN                                                                             |
| 19  | zmetodocarga       | zsubsesion +"!CSP_RP_ORO_MSS.CSP_CARGA"                | CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_CARGA                                                           |
| 22  | zoutputdefUnidades | zsubsesion + "!" + znodeUnidades + "[*]"               | CSP_RP_ORO_MSS{"!"}CSP_UNIDADES_DIRECCION{"[*]"}                                                  |
| 23  | zmoveUnidades      | znodeUnidades + ":" + znodeUnidades + "[FIRST]"        | CSP_UNIDADES_DIRECCION{":"}CSP_UNIDADES_DIRECCION{"[FIRST]"}                                      |
| 26  | idUnidad           | ""                                                     |                                                                                                   |
| 27  | nUnidad            | ""                                                     |                                                                                                   |
| 30  | zmetodocarga2      | zsubsesion +"!"+combos+".CREAR_JSON"                   | CSP_RP_ORO_MSS!CSP_JSON_SELECT_DEPEN.CREAR_JSON                                                   |
| 31  | zoutputdefcombos   | zsubsesion + "!" + combos + "[*]"                      | CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[*]"}                                                   |
| 32  | zmovecombos        | combos + ":" + combos + "[FIRST]"                      | CSP_JSON_SELECT_DEPEN{":"}CSP_JSON_SELECT_DEPEN{"[FIRST]"}                                        |
| 33  | ziteratorcombos    | combos + ":" + zsubsesion + "!" + combos               | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN                                |
| 34  | zlecturacombos     | zsubsesion + "!" + combos                              | CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN                                                          |
| 35  | zraizcombos        | zsubsesion + "!" + combos + "."                        | CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"."}                                                     |
| 37  | zcomuncombos       | combos + ":" + zsubsesion + "!" + combos + "[1]" + "." | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}                    |
| 39  | jSociedad          | zcomuncombos + "P_JSON_SOC"                            | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_SOC"}      |
| 40  | jDireccion         | zcomuncombos + "P_JSON_DIR"                            | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_DIR"}      |
| 41  | jAreas             | zcomuncombos + "P_JSON_AREA"                           | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_AREA"}     |
| 42  | jServicios         | zcomuncombos + "P_JSON_SERVICIO"                       | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_SERVICIO"} |
| 43  | jUnidades          | zcomuncombos + "P_JSON_UNIDAD"                         | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_UNIDAD"}   |
| 69  | i                  | 0                                                      | 0                                                                                                 |
| 70  | zposicionUnidades  | 0                                                      | 0                                                                                                 |
| 79  | id                 | ""                                                     |                                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                       |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| 49  | m4:startpage | m4task=CSP_RP_ORO_MSS                                                                                                    |
| 51  | m4:beginjob  |                                                                                                                          |
| 52  | m4:datadef   | m4o=CSP_RP_ORO_MSS; m4name=CSP_RP_ORO_MSS                                                                                |
| 54  | m4:exec      | m4method=CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_CARGA                                                                         |
| 55  | m4:exec      | m4method=CSP_RP_ORO_MSS!CSP_JSON_SELECT_DEPEN.CREAR_JSON                                                                 |
| 57  | m4:outputdef | m4alias=CSP_UNIDADES_DIRECCION                                                                                           |
| 57  | m4:param     | name=m4name0; value=CSP_RP_ORO_MSS{"!"}CSP_UNIDADES_DIRECCION{"[*]"}                                                     |
| 58  | m4:outputdef | m4alias=CSP_JSON_SELECT_DEPEN                                                                                            |
| 58  | m4:param     | name=m4name0; value=CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[*]"}                                                      |
| 59  | m4:endjob    |                                                                                                                          |
| 60  | m4:move      |                                                                                                                          |
| 60  | m4:param     | name=CSP_RP_ORO_MSS; value=CSP_UNIDADES_DIRECCION{":"}CSP_UNIDADES_DIRECCION{"[FIRST]"}                                  |
| 61  | m4:move      |                                                                                                                          |
| 61  | m4:param     | name=CSP_RP_ORO_MSS; value=CSP_JSON_SELECT_DEPEN{":"}CSP_JSON_SELECT_DEPEN{"[FIRST]"}                                    |
| 194 | m4:item      | m4name=CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_SOC"}; htmlsafe=false      |
| 195 | m4:item      | m4name=CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_DIR"}; htmlsafe=false      |
| 196 | m4:item      | m4name=CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_AREA"}; htmlsafe=false     |
| 197 | m4:item      | m4name=CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_UNIDAD"}; htmlsafe=false   |
| 198 | m4:item      | m4name=CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_SERVICIO"}; htmlsafe=false |

| L   | Operación        | Argumentos literales                   |
| --- | ---------------- | -------------------------------------- |
| 74  | getCountInClient | znodeUnidades,zsubsesion,znodeUnidades |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------ |
| 22  | expresión de cálculo/transformación: String zoutputdefUnidades = zsubsesion + "!" + znodeUnidades + "[*]";         |
| 23  | expresión de cálculo/transformación: String zmoveUnidades = znodeUnidades + ":" + znodeUnidades + "[FIRST]";       |
| 31  | expresión de cálculo/transformación: String zoutputdefcombos = zsubsesion + "!" + combos + "[*]";                  |
| 32  | expresión de cálculo/transformación: String zmovecombos = combos + ":" + combos + "[FIRST]";                       |
| 33  | expresión de cálculo/transformación: String ziteratorcombos = combos + ":" + zsubsesion + "!" + combos;            |
| 34  | expresión de cálculo/transformación: String zlecturacombos = zsubsesion + "!" + combos;                            |
| 35  | expresión de cálculo/transformación: String zraizcombos = zsubsesion + "!" + combos + ".";                         |
| 37  | expresión de cálculo/transformación: String zcomuncombos = combos + ":" + zsubsesion + "!" + combos + "[1]" + "."; |
| 39  | expresión de cálculo/transformación: String jSociedad = zcomuncombos + "P_JSON_SOC";                               |
| 40  | expresión de cálculo/transformación: String jDireccion = zcomuncombos + "P_JSON_DIR";                              |
| 41  | expresión de cálculo/transformación: String jAreas = zcomuncombos + "P_JSON_AREA";                                 |
| 42  | expresión de cálculo/transformación: String jServicios = zcomuncombos + "P_JSON_SERVICIO";                         |
| 43  | expresión de cálculo/transformación: String jUnidades = zcomuncombos + "P_JSON_UNIDAD";                            |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                  |
| --- | ------------------------------------------------------------------ |
| 8   | /css/estilo_sse.css                                                |
| 9   | /libreria/combos.js                                                |
| 10  | /library/jquery.js                                                 |
| 170 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 173 | mss_g1_rp_saluni.jsp                                               |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                         | Resolución | Ficha / candidato                                                        |
| ------ | --- | ------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------ |
| COLL   | 19  | /library/jquery.js                                                 | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;   |
| COLL   | 89  | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp | ausente    | P06                                                                      |
| COLL   | 92  | mss_g1_rp_saluni.jsp                                               | física     | [mss_g1/mss_g1_rp_saluni.jsp](mss_g1--mss_g1_rp_saluni.md)               |
| CYC    | 9   | /libreria/combos.js                                                | contextual | [libreria/combos.js](../../transversal/dependencias/libreria--combos.md) |
| CYC    | 10  | /library/jquery.js                                                 | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;    |
| CYC    | 170 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp | ausente    | P06                                                                      |
| CYC    | 173 | mss_g1_rp_saluni.jsp                                               | física     | [mss_g1/mss_g1_rp_saluni.jsp](mss_g1--mss_g1_rp_saluni.md)               |
| IBER   | 19  | /library/jquery.js                                                 | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;   |
| IBER   | 89  | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp | ausente    | P06                                                                      |
| IBER   | 92  | mss_g1_rp_saluni.jsp                                               | física     | [mss_g1/mss_g1_rp_saluni.jsp](mss_g1--mss_g1_rp_saluni.md)               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_rp_saluni.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
