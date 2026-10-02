# Filtro : Informe Mapa de Puestos

Identificador: `mss_g1/mss_g1_rp_mapa_puestos.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_rp_mapa_puestos.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_rp_mapa_puestos.jsp) | `2464ab7e15a73aae9ef2f675ebee2dd5d4da03ac02108f2e6b01c3c843a7ad6f` |    109 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/mss_g1_rp_mapa_puestos.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_rp_mapa_puestos.jsp)   | `244381e08e4a38de06277a3bef708346facfcd001cbd1a03d5b489eef28c7cf6` |    227 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_rp_mapa_puestos.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_rp_mapa_puestos.jsp) | `2464ab7e15a73aae9ef2f675ebee2dd5d4da03ac02108f2e6b01c3c843a7ad6f` |    109 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_rp_mapa_puestos.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_rp_mapa_puestos.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta         |
| --- | -------------------------------- |
| 17  | Filtro : Informe Mapa de Puestos |
| 70  | Seleccione una Dirección         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 72  | select  | id=direcciones                                                                                                               |
| 73  | option  | value=; selected=presente; confirmar condición si dinámico                                                                   |
| 84  | option  | value=&lt;%=idUnidad%&gt;                                                                                                    |
| 89  | form    | id=filtroInforme; name=filtroInforme; method=post; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 90  | input   | type=hidden; id=informe; name=informe; value=MAPAPUESTOS                                                                     |
| 91  | input   | type=hidden; id=direccion; name=direccion; value=                                                                            |
| 92  | input   | type=hidden; id=pagina; name=pagina; value=mss_g1_rp_mapa_puestos.jsp                                                        |

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
| 92  | mss_g1_rp_mapa_puestos.jsp                                         |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_g1/espanol/mss_g1_rp_mapa_puestos.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_rp_mapa_puestos.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta         |
| --- | -------------------------------- |
| 17  | Filtro : Informe Mapa de Puestos |
| 167 | Mapas de puestos de Ver          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 170 | a       | onclick=$('#filtroInforme').submit(); style=cursor: pointer; margin :10px; color: rgba(216, 0, 31, 1)                        |
| 181 | form    | id=filtroInforme; name=filtroInforme; method=post; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 182 | input   | type=hidden; id=informe; name=informe; value=MAPAPUESTOS                                                                     |
| 183 | input   | type=hidden; id=direccion; name=direccion; value=                                                                            |
| 184 | input   | type=hidden; id=pagina; name=pagina; value=mss_g1_rp_mapa_puestos.jsp                                                        |
| 188 | select  | id=ARE                                                                                                                       |
| 189 | select  | id=UNI                                                                                                                       |
| 190 | select  | id=SER                                                                                                                       |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable           | Expresión fuente                                       | Resolución estática parcial                                                                       |
| --- | ------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| 24  | zsubsesion         | "CSP_RP_ORO_MSS"                                       | CSP_RP_ORO_MSS                                                                                    |
| 25  | zmeta4object       | "CSP_RP_ORO_MSS"                                       | CSP_RP_ORO_MSS                                                                                    |
| 26  | znodeUnidades      | "CSP_UNIDADES_DIRECCION"                               | CSP_UNIDADES_DIRECCION                                                                            |
| 27  | combos             | "CSP_JSON_SELECT_DEPEN"                                | CSP_JSON_SELECT_DEPEN                                                                             |
| 29  | zmetodocarga       | zsubsesion +"!CSP_RP_ORO_MSS.CSP_CARGA"                | CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_CARGA                                                           |
| 32  | zoutputdefUnidades | zsubsesion + "!" + znodeUnidades + "[*]"               | CSP_RP_ORO_MSS{"!"}CSP_UNIDADES_DIRECCION{"[*]"}                                                  |
| 33  | zmoveUnidades      | znodeUnidades + ":" + znodeUnidades + "[FIRST]"        | CSP_UNIDADES_DIRECCION{":"}CSP_UNIDADES_DIRECCION{"[FIRST]"}                                      |
| 36  | idUnidad           | ""                                                     |                                                                                                   |
| 37  | nUnidad            | ""                                                     |                                                                                                   |
| 40  | zmetodocarga2      | zsubsesion +"!"+combos+".CREAR_JSON"                   | CSP_RP_ORO_MSS!CSP_JSON_SELECT_DEPEN.CREAR_JSON                                                   |
| 41  | zoutputdefcombos   | zsubsesion + "!" + combos + "[*]"                      | CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[*]"}                                                   |
| 42  | zmovecombos        | combos + ":" + combos + "[FIRST]"                      | CSP_JSON_SELECT_DEPEN{":"}CSP_JSON_SELECT_DEPEN{"[FIRST]"}                                        |
| 43  | ziteratorcombos    | combos + ":" + zsubsesion + "!" + combos               | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN                                |
| 44  | zlecturacombos     | zsubsesion + "!" + combos                              | CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN                                                          |
| 45  | zraizcombos        | zsubsesion + "!" + combos + "."                        | CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"."}                                                     |
| 47  | zcomuncombos       | combos + ":" + zsubsesion + "!" + combos + "[1]" + "." | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}                    |
| 49  | jSociedad          | zcomuncombos + "P_JSON_SOC"                            | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_SOC"}      |
| 50  | jDireccion         | zcomuncombos + "P_JSON_DIR"                            | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_DIR"}      |
| 51  | jAreas             | zcomuncombos + "P_JSON_AREA"                           | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_AREA"}     |
| 52  | jServicios         | zcomuncombos + "P_JSON_SERVICIO"                       | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_SERVICIO"} |
| 53  | jUnidades          | zcomuncombos + "P_JSON_UNIDAD"                         | CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_UNIDAD"}   |
| 78  | i                  | 0                                                      | 0                                                                                                 |
| 79  | zposicionUnidades  | 0                                                      | 0                                                                                                 |
| 88  | id                 | ""                                                     |                                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                       |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| 59  | m4:startpage | m4task=CSP_RP_ORO_MSS                                                                                                    |
| 61  | m4:beginjob  |                                                                                                                          |
| 62  | m4:datadef   | m4o=CSP_RP_ORO_MSS; m4name=CSP_RP_ORO_MSS                                                                                |
| 64  | m4:exec      | m4method=CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_CARGA                                                                         |
| 65  | m4:exec      | m4method=CSP_RP_ORO_MSS!CSP_JSON_SELECT_DEPEN.CREAR_JSON                                                                 |
| 67  | m4:outputdef | m4alias=CSP_UNIDADES_DIRECCION                                                                                           |
| 67  | m4:param     | name=m4name0; value=CSP_RP_ORO_MSS{"!"}CSP_UNIDADES_DIRECCION{"[*]"}                                                     |
| 68  | m4:outputdef | m4alias=CSP_JSON_SELECT_DEPEN                                                                                            |
| 68  | m4:param     | name=m4name0; value=CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[*]"}                                                      |
| 69  | m4:endjob    |                                                                                                                          |
| 70  | m4:move      |                                                                                                                          |
| 70  | m4:param     | name=CSP_RP_ORO_MSS; value=CSP_UNIDADES_DIRECCION{":"}CSP_UNIDADES_DIRECCION{"[FIRST]"}                                  |
| 205 | m4:item      | m4name=CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_SOC"}; htmlsafe=false      |
| 206 | m4:item      | m4name=CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_DIR"}; htmlsafe=false      |
| 207 | m4:item      | m4name=CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_AREA"}; htmlsafe=false     |
| 208 | m4:item      | m4name=CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_UNIDAD"}; htmlsafe=false   |
| 209 | m4:item      | m4name=CSP_JSON_SELECT_DEPEN{":"}CSP_RP_ORO_MSS{"!"}CSP_JSON_SELECT_DEPEN{"[1]"}{"."}{"P_JSON_SERVICIO"}; htmlsafe=false |

| L   | Operación        | Argumentos literales                   |
| --- | ---------------- | -------------------------------------- |
| 83  | getCountInClient | znodeUnidades,zsubsesion,znodeUnidades |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------ |
| 32  | expresión de cálculo/transformación: String zoutputdefUnidades = zsubsesion + "!" + znodeUnidades + "[*]";         |
| 33  | expresión de cálculo/transformación: String zmoveUnidades = znodeUnidades + ":" + znodeUnidades + "[FIRST]";       |
| 41  | expresión de cálculo/transformación: String zoutputdefcombos = zsubsesion + "!" + combos + "[*]";                  |
| 42  | expresión de cálculo/transformación: String zmovecombos = combos + ":" + combos + "[FIRST]";                       |
| 43  | expresión de cálculo/transformación: String ziteratorcombos = combos + ":" + zsubsesion + "!" + combos;            |
| 44  | expresión de cálculo/transformación: String zlecturacombos = zsubsesion + "!" + combos;                            |
| 45  | expresión de cálculo/transformación: String zraizcombos = zsubsesion + "!" + combos + ".";                         |
| 47  | expresión de cálculo/transformación: String zcomuncombos = combos + ":" + zsubsesion + "!" + combos + "[1]" + "."; |
| 49  | expresión de cálculo/transformación: String jSociedad = zcomuncombos + "P_JSON_SOC";                               |
| 50  | expresión de cálculo/transformación: String jDireccion = zcomuncombos + "P_JSON_DIR";                              |
| 51  | expresión de cálculo/transformación: String jAreas = zcomuncombos + "P_JSON_AREA";                                 |
| 52  | expresión de cálculo/transformación: String jServicios = zcomuncombos + "P_JSON_SERVICIO";                         |
| 53  | expresión de cálculo/transformación: String jUnidades = zcomuncombos + "P_JSON_UNIDAD";                            |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                  |
| --- | ------------------------------------------------------------------ |
| 18  | /css/estilo_sse.css                                                |
| 19  | /library/jquery.js                                                 |
| 20  | /libreria/combos.js                                                |
| 181 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 184 | mss_g1_rp_mapa_puestos.jsp                                         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                         | Resolución | Ficha / candidato                                                        |
| ------ | --- | ------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------ |
| COLL   | 19  | /library/jquery.js                                                 | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;   |
| COLL   | 89  | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp | ausente    | P06                                                                      |
| COLL   | 92  | mss_g1_rp_mapa_puestos.jsp                                         | física     | [mss_g1/mss_g1_rp_mapa_puestos.jsp](mss_g1--mss_g1_rp_mapa_puestos.md)   |
| CYC    | 19  | /library/jquery.js                                                 | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;    |
| CYC    | 20  | /libreria/combos.js                                                | contextual | [libreria/combos.js](../../transversal/dependencias/libreria--combos.md) |
| CYC    | 181 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp | ausente    | P06                                                                      |
| CYC    | 184 | mss_g1_rp_mapa_puestos.jsp                                         | física     | [mss_g1/mss_g1_rp_mapa_puestos.jsp](mss_g1--mss_g1_rp_mapa_puestos.md)   |
| IBER   | 19  | /library/jquery.js                                                 | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;   |
| IBER   | 89  | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp | ausente    | P06                                                                      |
| IBER   | 92  | mss_g1_rp_mapa_puestos.jsp                                         | física     | [mss_g1/mss_g1_rp_mapa_puestos.jsp](mss_g1--mss_g1_rp_mapa_puestos.md)   |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_rp_mapa_puestos.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
