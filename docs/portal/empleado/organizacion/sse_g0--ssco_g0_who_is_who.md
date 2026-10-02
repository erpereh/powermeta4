# Quién es Quién

Identificador: `sse_g0/ssco_g0_who_is_who.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Solo en BASE                                                                                         |
| ------ | --------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | sin diferencia en estos identificadores                                                              |
| CYC    | espanol   | idéntica            | sin diferencia en estos identificadores                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | sin diferencia en estos identificadores                                                              |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | sin diferencia en estos identificadores                                                              |
| COLL   | shared    | contenido diferente | m4:datadef:CSP_QUIEN_ES_QUIEN; m4:exec:CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"}; m4:item:CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; m4:item:CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}; m4:item:CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENT_TRAB_FIS"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; m4:item:CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; m4:item:CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; m4:item:CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"} | m4:datadef:SGCO_WHO_IS_WHO; m4:exec:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{".SCO_MTD_LOAD_LABEL"} |
| CYC    | shared    | contenido diferente | m4:datadef:CSP_QUIEN_ES_QUIEN; m4:exec:CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"}; m4:item:CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; m4:item:CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}; m4:item:CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENT_TRAB_FIS"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; m4:item:CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; m4:item:CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; m4:item:CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"} | m4:datadef:SGCO_WHO_IS_WHO; m4:exec:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{".SCO_MTD_LOAD_LABEL"} |
| IBER   | shared    | contenido diferente | m4:datadef:CSP_QUIEN_ES_QUIEN; m4:exec:CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"}; m4:item:CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; m4:item:CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}; m4:item:CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENT_TRAB_FIS"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}; m4:item:CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; m4:item:CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; m4:item:CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; m4:item:CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"} | m4:datadef:SGCO_WHO_IS_WHO; m4:exec:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{".SCO_MTD_LOAD_LABEL"} |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g0/espanol/ssco_g0_who_is_who.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/espanol/ssco_g0_who_is_who.jsp) | `de75abbb4ff8c0fcfee32e9ae36088d6e2affb48e4df6d24740c160d2bc08db5` |      1 |
| COLL / compartido | [m4custom/COLL/sse_g0/ssco_g0_who_is_who.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/ssco_g0_who_is_who.jsp)                 | `21c0db3eb9f14b92df395f81ff4e462c0d1ea41efda0d1ba3620954f08f4a452` |    606 |
| CYC / español     | [m4custom/CYC/sse_g0/espanol/ssco_g0_who_is_who.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/espanol/ssco_g0_who_is_who.jsp)   | `de75abbb4ff8c0fcfee32e9ae36088d6e2affb48e4df6d24740c160d2bc08db5` |      1 |
| CYC / compartido  | [m4custom/CYC/sse_g0/ssco_g0_who_is_who.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/ssco_g0_who_is_who.jsp)                   | `5e2e573f8a5963f4e989146e4a3767cc4c0afe312f3559c98ceefa00b4fc7448` |    605 |
| IBER / español    | [m4custom/IBER/sse_g0/espanol/ssco_g0_who_is_who.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g0/espanol/ssco_g0_who_is_who.jsp) | `de75abbb4ff8c0fcfee32e9ae36088d6e2affb48e4df6d24740c160d2bc08db5` |      1 |
| IBER / compartido | [m4custom/IBER/sse_g0/ssco_g0_who_is_who.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g0/ssco_g0_who_is_who.jsp)                 | `21c0db3eb9f14b92df395f81ff4e462c0d1ea41efda0d1ba3620954f08f4a452` |    606 |
| BASE / español    | [sse_g0/espanol/ssco_g0_who_is_who.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_g0_who_is_who.jsp)                             | `de75abbb4ff8c0fcfee32e9ae36088d6e2affb48e4df6d24740c160d2bc08db5` |      1 |
| BASE / compartido | [sse_g0/ssco_g0_who_is_who.jsp](../../../../clon_portal/portal/sse_g0/ssco_g0_who_is_who.jsp)                                             | `873363d81ef6a53b60527dd38d474369f1cc85ea2e08d6dad47742c6c686d4ce` |    210 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g0/espanol/ssco_g0_who_is_who.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/espanol/ssco_g0_who_is_who.jsp). Líneas físicas, contando desde 1.

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

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                   |
| --- | ------------------------- |
| 1   | ../ssco_g0_who_is_who.jsp |

| L   | Destino / recurso         |
| --- | ------------------------- |
| 1   | ../ssco_g0_who_is_who.jsp |

## Versión 2: COLL compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_g0/ssco_g0_who_is_who.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/ssco_g0_who_is_who.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 19  | Quién es Quién                    |
| 309 | Empleados                         |
| 313 | Sociedad                          |
| 314 | CYC IBER IBER                     |
| 344 | Nombre                            |
| 350 | Dirección / D. Territorial        |
| 351 | Seleccione Dirección "&gt;        |
| 387 | Centro de Trabajo Fisico          |
| 388 | Seleccione Centro Fisico - "&gt;  |
| 410 | Centro de Trabajo Funcional       |
| 411 | Seleccione Centro Funcional "&gt; |
| 433 | Área / Sucursal                   |
| 434 | Seleccione Área/Sucursal "&gt;    |
| 458 | Puesto                            |
| 459 | Seleccione Puesto "&gt;           |
| 522 | Apellidos y Nombre                |
| 523 | Dirección                         |
| 524 | Área                              |
| 525 | Unidad                            |
| 526 | Centro de trabajo Fun             |
| 527 | Centro de trabajo Fis             |
| 528 | Puesto                            |
| 543 | "/&gt; "/&gt;                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                     |
| --- | ------- | ------------------------------------------------------------------------------------------------------------- |
| 279 | form    | id=filtroAreas; name=filtroAreas; method=post; action=ssco_g0_who_is_who.jsp                                  |
| 280 | input   | type=hidden; id=sociedad; name=sociedad; value=&lt;%=sociedad%&gt;                                            |
| 281 | input   | type=hidden; id=direccionArea; name=direccionArea; value=                                                     |
| 285 | form    | id=filtroBusqueda; name=filtroBusqueda; method=post; action=ssco_g0_who_is_who.jsp; accept-charset=ISO-8859-1 |
| 286 | input   | type=hidden; id=direccion; name=direccion; value=                                                             |
| 287 | input   | type=hidden; id=nombreCompleto; name=nombreCompleto; value=                                                   |
| 288 | input   | type=hidden; id=area; name=area; value=                                                                       |
| 289 | input   | type=hidden; id=puesto; name=puesto; value=                                                                   |
| 290 | input   | type=hidden; id=idcentro; name=idcentro; value=                                                               |
| 291 | input   | type=hidden; id=idCentroFun; name=idCentroFun; value=                                                         |
| 292 | input   | type=hidden; id=centro; name=centro; value=                                                                   |
| 293 | input   | type=hidden; id=CentroFun; name=CentroFun; value=                                                             |
| 294 | input   | type=hidden; id=sociedad; name=sociedad; value=&lt;%=sociedad%&gt;                                            |
| 295 | input   | type=hidden; id=busqueda; name=busqueda; value=1                                                              |
| 309 | img     | src=/iconos/infos.gif                                                                                         |
| 312 | form    | id=filtroBusqueda; name=filtroBusqueda; method=post; action=ssco_g0_who_is_who.jsp; accept-charset=ISO-8859-1 |
| 315 | select  | name=sociedad; id=sociedad; style=width: 450px                                                                |
| 316 | option  | value=CYC                                                                                                     |
| 318 | option  | value=IBER; selected=                                                                                         |
| 320 | option  | value=IBER                                                                                                    |
| 326 | input   | name=button; type=submit; class=enterlogin; id=btnSociedad; style= background-color: #DC0028;                 |

```
							background-repeat: no-repeat;
							border: 1px solid #DC0028;
							border-radius: 4px;
							color: #FFFFFF;
							margin: 10px;
							max-width: 150px;
							min-height: 20px;
							min-width: 110px;; value=Cargar Sociedad |
```

| 346 | input | type=text; name=nombre; id=nombre; value=&lt;%=nombreCompleto%&gt;; onkeypress=return AddKeyPress(event);; style=width: 450px |
| 352 | select | name=Direcciones; id=Direcciones; style=width: 450px |
| 353 | option | value=00; selected=presente; confirmar condición si dinámico |
| 366 | option | value=&lt;m4:item m4name=; htmlsafe=true |
| 389 | select | name=CentrosTrabajo; id=CentrosTrabajo; style=width: 450px |
| 390 | option | value=00 |
| 402 | option | value=&lt;m4:item m4name=; htmlsafe=true |
| 412 | select | name=CentrosTrabajoFun; id=CentrosTrabajoFun; style=width: 450px |
| 413 | option | value=00 |
| 425 | option | value="&lt;m4:item; m4name=&lt;%=zIdCentroTr%&gt;; htmlsafe=true |
| 435 | select | name=Areas; id=Areas; style=width: 450px |
| 436 | option | value= |
| 449 | option | value=&lt;m4:item m4name=; htmlsafe=true |
| 461 | select | name=puestos; id=puestos; style=width: 450px |
| 462 | option | value=00 |
| 475 | option | value=&lt;m4:item m4name=; htmlsafe=true |
| 486 | input | name=button; type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028;
background-repeat: no-repeat;
border: 1px solid #DC0028;
border-radius: 4px;
color: #FFFFFF;
margin: 10px;
max-width: 150px;
min-height: 30px;
min-width: 110px;; value=Búsqueda |
| 545 | form | id=datosCargadosFiltro&lt;%=zposicions2%&gt;; name=datosCargadosFiltro&lt;%=zposicions2%&gt;; method=post; target=_blank; action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp |
| 547 | input | type=hidden; id=empleado; name=empleado; value=&lt;m4:item m4name=; htmlsafe=true |
| 548 | input | type=hidden; id=empleado; name=uniraiz; value=&lt;m4:item m4name=; htmlsafe=true |
| 549 | input | type=hidden; id=nombresele; name=nombresele; value=&lt;%=nombreCompleto%&gt; |
| 550 | input | type=hidden; id=direcsele; name=direcsele; value=&lt;%=dirbusqueda%&gt; |
| 551 | input | type=hidden; id=idcentrosele; name=idcentrosele; value=&lt;%=idcentro%&gt; |
| 552 | input | type=hidden; id=idCentrofunsele; name=ididCentrofunsele; value=&lt;%=idCentroFun%&gt; |
| 553 | input | type=hidden; id=centrosele; name=centrosele; value=&lt;%=centro%&gt; |
| 554 | input | type=hidden; id=centrofunsele; name=centrofunsele; value=&lt;%=CentroFun%&gt; |
| 555 | input | type=hidden; id=areasele; name=areasele; value=&lt;%=area%&gt; |
| 556 | input | type=hidden; id=puestosele; name=puestosele; value=&lt;%=puesto%&gt; |
| 559 | a | id=ficha; alt=Consultar ficha del empleado; href=javascript:m4submit('datosCargadosFiltro&lt;%=zposicions2%&gt;') |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                         |
| --- | --------------- | -------------------------------------- |
| 71  | direccionArea   | getParameter(request,"direccionArea")  |
| 72  | direccion       | getParameter(request,"direccion")      |
| 73  | nombreCompleto  | getParameter(request,"nombreCompleto") |
| 74  | area            | getParameter(request,"area")           |
| 75  | puesto          | getParameter(request,"puesto")         |
| 76  | idcentro        | getParameter(request,"idcentro")       |
| 77  | idCentroFun     | getParameter(request,"idCentroFun")    |
| 78  | centro          | getParameter(request,"centro")         |
| 79  | CentroFun       | getParameter(request,"CentroFun")      |
| 80  | busqueda        | getParameter(request,"busqueda")       |
| 81  | sociedad        | getParameter(request,"sociedad")       |

| L   | Variable         | Expresión fuente                                                            | Resolución estática parcial                                                                                |
| --- | ---------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 71  | direccion        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccionArea")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccionArea")                                  |
| 72  | dirbusqueda      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")                                      |
| 74  | area             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")                                           |
| 75  | puesto           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")                                         |
| 76  | idcentro         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idcentro")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idcentro")                                       |
| 77  | idCentroFun      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idCentroFun")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idCentroFun")                                    |
| 78  | centro           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"centro")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"centro")                                         |
| 79  | CentroFun        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"CentroFun")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"CentroFun")                                      |
| 80  | busqueda         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda")                                       |
| 81  | sociedad         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")                                       |
| 92  | zsubsesion       | "CSP_QUIEN_ES_QUIEN"                                                        | CSP_QUIEN_ES_QUIEN                                                                                         |
| 93  | zmeta4object     | "CSP_QUIEN_ES_QUIEN"                                                        | CSP_QUIEN_ES_QUIEN                                                                                         |
| 94  | znodoWU          | "CSP_UNID_AREA"                                                             | CSP_UNID_AREA                                                                                              |
| 95  | znodoWL          | "CSP_CENTROS"                                                               | CSP_CENTROS                                                                                                |
| 96  | znodoWLFun       | "CSP_CENTROS_FUN"                                                           | CSP_CENTROS_FUN                                                                                            |
| 97  | znodoORO         | "CSP_ORO"                                                                   | CSP_ORO                                                                                                    |
| 98  | znodoJOB         | "CSP_PUESTOS"                                                               | CSP_PUESTOS                                                                                                |
| 99  | znodoWUD         | "CSP_UNID_DIRE"                                                             | CSP_UNID_DIRE                                                                                              |
| 101 | zmetodocarga     | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"                       | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"}                                               |
| 103 | zoutputdefWU     | zsubsesion + "!" + znodoWU + "[*]"                                          | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[*]"}                                                                |
| 104 | zmoveWU          | znodoWU + ":" + znodoWU + "[FIRST]"                                         | CSP_UNID_AREA{":"}CSP_UNID_AREA{"[FIRST]"}                                                                 |
| 105 | ziteratorWU      | znodoWU + ":" + zsubsesion + "!" + znodoWU                                  | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA                                                     |
| 106 | zlecturaWU       | zsubsesion + "!" + znodoWU                                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA                                                                       |
| 107 | zraizWU          | zsubsesion + "!" + znodoWU + "."                                            | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"."}                                                                  |
| 109 | zcomunWU         | znodoWU + ":" + zsubsesion + "!" + znodoWU + "[&amp;VAR.m4lix]" + "."       | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}                            |
| 111 | zIdWunit         | zcomunWU + "STD_ID_WORK_UNIT_CHILD"                                         | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_CHILD"}  |
| 112 | zNWunit          | zcomunWU + "STD_N_WORK_UNIT"                                                | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}         |
| 113 | zTypeWunit       | zcomunWU + "STD_ID_WORK_UNIT_TYPE"                                          | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_TYPE"}   |
| 114 | zIdParentWunit   | zcomunWU + "STD_ID_WORK_UNIT_PARENT"                                        | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_PARENT"} |
| 116 | zoutputdefWL     | zsubsesion + "!" + znodoWL + "[*]"                                          | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[*]"}                                                                  |
| 117 | zmoveWL          | znodoWL + ":" + znodoWL + "[FIRST]"                                         | CSP_CENTROS{":"}CSP_CENTROS{"[FIRST]"}                                                                     |
| 118 | ziteratorWL      | znodoWL + ":" + zsubsesion + "!" + znodoWL                                  | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS                                                         |
| 119 | zlecturaWL       | zsubsesion + "!" + znodoWL                                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS                                                                         |
| 120 | zraizWL          | zsubsesion + "!" + znodoWL + "."                                            | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"."}                                                                    |
| 122 | zcomunWL         | znodoWL + ":" + zsubsesion + "!" + znodoWL + "[&amp;VAR.m4lix]" + "."       | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}                                |
| 124 | zIdWlocat        | zcomunWL + "STD_ID_WORK_LOCATION"                                           | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}        |
| 125 | zIdNWlocat       | zcomunWL + "STD_N_WORK_LOCATION"                                            | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}         |
| 126 | zIdTypeWlocat    | zcomunWL + "STD_ID_WL_TYPE"                                                 | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WL_TYPE"}              |
| 128 | zoutputdefWLFun  | zsubsesion + "!" + znodoWLFun + "[*]"                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[*]"}                                                              |
| 129 | zmoveWLFun       | znodoWLFun + ":" + znodoWLFun + "[FIRST]"                                   | CSP_CENTROS_FUN{":"}CSP_CENTROS_FUN{"[FIRST]"}                                                             |
| 130 | ziteratorWLFun   | znodoWLFun + ":" + zsubsesion + "!" + znodoWLFun                            | CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN                                                 |
| 131 | zlecturaWLFun    | zsubsesion + "!" + znodoWLFun                                               | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN                                                                     |
| 132 | zraizWLFun       | zsubsesion + "!" + znodoWLFun + "."                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"."}                                                                |
| 134 | zcomunWLFun      | znodoWLFun + ":" + zsubsesion + "!" + znodoWLFun + "[&amp;VAR.m4lix]" + "." | CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[&amp;VAR.m4lix]"}{"."}                        |
| 136 | zIdCentroTr      | zcomunWLFun + "ID_CENTRO_TRABAJO"                                           | CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}   |
| 137 | zNCentroTr       | zcomunWLFun + "N_CENTRO_TRABAJO"                                            | CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}    |
| 140 | zoutputdefORO    | zsubsesion + "!" + znodoORO + "[*]"                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[*]"}                                                                      |
| 141 | zmoveORO         | znodoORO + ":" + znodoORO + "[FIRST]"                                       | CSP_ORO{":"}CSP_ORO{"[FIRST]"}                                                                             |
| 142 | ziteratorORO     | znodoORO + ":" + zsubsesion + "!" + znodoORO                                | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO                                                                 |
| 143 | zlecturaORO      | zsubsesion + "!" + znodoORO                                                 | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO                                                                             |
| 144 | zraizORO         | zsubsesion + "!" + znodoORO + "."                                           | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"."}                                                                        |
| 146 | zcomunORO        | znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "."     | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}                                        |
| 149 | zNommbreCompleto | zcomunORO + "SCO_GB_NAME"                                                   | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                         |
| 150 | zNomCentTrabajo  | zcomunORO + "N_CENTRO_TRABAJO"                                              | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}                    |
| 151 | zNomCentTrabFis  | zcomunORO + "N_CENT_TRAB_FIS"                                               | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENT_TRAB_FIS"}                     |
| 152 | zIdCentTrabFis   | zcomunORO + "ID_CENT_TRAB_FIS"                                              | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENT_TRAB_FIS"}                    |
| 153 | zNomDireccion    | zcomunORO + "N_DIRECCION"                                                   | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}                         |
| 154 | zNomArea         | zcomunORO + "N_AREA"                                                        | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}                              |
| 155 | ztipoArea        | zcomunORO + "ID_TIPO_AREA"                                                  | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_TIPO_AREA"}                        |
| 156 | zNomUnidad       | zcomunORO + "N_UNIDAD"                                                      | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}                            |
| 157 | zNomPuesto       | zcomunORO + "N_PUESTO"                                                      | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}                            |
| 158 | zIdCentroTrab    | zcomunORO + "ID_CENTRO_TRABAJO"                                             | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}                   |
| 159 | zFotoEmpleado    | zcomunORO + "SCO_BLOB_PHOTO"                                                | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_BLOB_PHOTO"}                      |
| 160 | zIdUnidadRaiz    | zcomunORO + "ID_UNIDAD_RAIZ"                                                | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_UNIDAD_RAIZ"}                      |
| 163 | zNUnidadRaiz     | zcomunORO + "N_UNIDAD_RAIZ"                                                 | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}                       |
| 166 | zIdDireccion     | zcomunORO + "ID_DIRECCION"                                                  | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_DIRECCION"}                        |
| 167 | zIdArea          | zcomunORO + "ID_AREA"                                                       | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}                             |
| 168 | zIdPuesto        | zcomunORO + "ID_PUESTO"                                                     | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}                           |
| 169 | zIdEmpleado      | zcomunORO + "ID_EMPLEADO"                                                   | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_EMPLEADO"}                         |
| 171 | zoutputdefJOB    | zsubsesion + "!" + znodoJOB + "[*]"                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                                  |
| 172 | zmoveJOB         | znodoJOB + ":" + znodoJOB + "[FIRST]"                                       | CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                                                     |
| 173 | ziteratorJOB     | znodoJOB + ":" + zsubsesion + "!" + znodoJOB                                | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS                                                         |
| 174 | zlecturaJOB      | zsubsesion + "!" + znodoJOB                                                 | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS                                                                         |
| 175 | zraizJOB         | zsubsesion + "!" + znodoJOB + "."                                           | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"."}                                                                    |
| 177 | zcomunJOB        | znodoJOB + ":" + zsubsesion + "!" + znodoJOB + "[&amp;VAR.m4lix]" + "."     | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}                                |
| 180 | zIdJob           | zcomunJOB + "STD_ID_JOB_CODE"                                               | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_JOB_CODE"}             |
| 181 | zNJob            | zcomunJOB + "STD_N_JOB_CODE"                                                | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}              |
| 184 | zoutputdefWUD    | zsubsesion + "!" + znodoWUD + "[*]"                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[*]"}                                                                |
| 185 | zmoveWUD         | znodoWUD + ":" + znodoWUD + "[FIRST]"                                       | CSP_UNID_DIRE{":"}CSP_UNID_DIRE{"[FIRST]"}                                                                 |
| 186 | ziteratorWUD     | znodoWUD + ":" + zsubsesion + "!" + znodoWUD                                | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE                                                     |
| 187 | zlecturaWUD      | zsubsesion + "!" + znodoWUD                                                 | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE                                                                       |
| 188 | zraizWUD         | zsubsesion + "!" + znodoWUD + "."                                           | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"."}                                                                  |
| 190 | zcomunWUD        | znodoWUD + ":" + zsubsesion + "!" + znodoWUD + "[&amp;VAR.m4lix]" + "."     | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}                            |
| 192 | zIdWDunit        | zcomunWUD + "STD_ID_WORK_UNIT"                                              | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"}        |
| 193 | zNWDunit         | zcomunWUD + "STD_N_WORK_UNIT"                                               | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}         |
| 196 | zoutputdefQEQ    | zsubsesion + "!" + zsubsesion + "[*]"                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                                           |
| 197 | zmoveQEQ         | zsubsesion + ":" + zsubsesion + "[FIRST]"                                   | CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                                                       |
| 247 | zcountiWU        | 0                                                                           | 0                                                                                                          |
| 248 | zcountiWL        | 0                                                                           | 0                                                                                                          |
| 249 | zcountiWLFun     | 0                                                                           | 0                                                                                                          |
| 250 | zcountiORO       | 0                                                                           | 0                                                                                                          |
| 251 | zcountiJOB       | 0                                                                           | 0                                                                                                          |
| 252 | zcountiWUD       | 0                                                                           | 0                                                                                                          |
| 265 | zcountvWU        | String.valueOf(zcountiWU)                                                   | String.valueOf(zcountiWU)                                                                                  |
| 266 | zcountvWL        | String.valueOf(zcountiWL)                                                   | String.valueOf(zcountiWL)                                                                                  |
| 267 | zcountvWLFun     | String.valueOf(zcountiWL)                                                   | String.valueOf(zcountiWL)                                                                                  |
| 268 | zcountvORO       | String.valueOf(zcountiORO)                                                  | String.valueOf(zcountiORO)                                                                                 |
| 269 | zcountvJOB       | String.valueOf(zcountiJOB)                                                  | String.valueOf(zcountiJOB)                                                                                 |
| 270 | zcountvWUD       | String.valueOf(zcountiWUD)                                                  | String.valueOf(zcountiWUD)                                                                                 |
| 273 | esTerritorio     | m.getItem(zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO")              | m.getItem(zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO")                                             |
| 356 | zposicions2      | "0"                                                                         | 0                                                                                                          |
| 357 | zposicion2       | 0                                                                           | 0                                                                                                          |
| 393 | zposicions2      | "0"                                                                         | 0                                                                                                          |
| 394 | zposicion2       | 0                                                                           | 0                                                                                                          |
| 416 | zposicions2      | "0"                                                                         | 0                                                                                                          |
| 417 | zposicion2       | 0                                                                           | 0                                                                                                          |
| 439 | zposicions2      | "0"                                                                         | 0                                                                                                          |
| 440 | zposicion2       | 0                                                                           | 0                                                                                                          |
| 465 | zposicions2      | "0"                                                                         | 0                                                                                                          |
| 466 | zposicion2       | 0                                                                           | 0                                                                                                          |
| 516 | zposicions2      | "0"                                                                         | 0                                                                                                          |
| 517 | zposicion2       | 0                                                                           | 0                                                                                                          |
| 535 | varcss           | "fuentevalor"                                                               | fuentevalor                                                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                            |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| 200 | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                                                     |
| 202 | m4:beginjob  |                                                                                                                               |
| 203 | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                                             |
| 222 | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"}                                                         |
| 222 | m4:param     | name=ARG_SOCIEDAD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")                                 |
| 224 | m4:outputdef | m4alias=CSP_QUIEN_ES_QUIEN                                                                                                    |
| 224 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                                          |
| 225 | m4:outputdef | m4alias=CSP_UNID_AREA                                                                                                         |
| 225 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[*]"}                                                               |
| 226 | m4:outputdef | m4alias=CSP_CENTROS                                                                                                           |
| 226 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[*]"}                                                                 |
| 227 | m4:outputdef | m4alias=CSP_CENTROS_FUN                                                                                                       |
| 227 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[*]"}                                                             |
| 228 | m4:outputdef | m4alias=CSP_ORO                                                                                                               |
| 228 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[*]"}                                                                     |
| 229 | m4:outputdef | m4alias=CSP_PUESTOS                                                                                                           |
| 229 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                                 |
| 230 | m4:outputdef | m4alias=CSP_UNID_DIRE                                                                                                         |
| 230 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[*]"}                                                               |
| 232 | m4:endjob    |                                                                                                                               |
| 234 | m4:move      |                                                                                                                               |
| 234 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                                           |
| 235 | m4:move      |                                                                                                                               |
| 235 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_UNID_AREA{":"}CSP_UNID_AREA{"[FIRST]"}                                                     |
| 236 | m4:move      |                                                                                                                               |
| 236 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CENTROS{":"}CSP_CENTROS{"[FIRST]"}                                                         |
| 237 | m4:move      |                                                                                                                               |
| 237 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CENTROS_FUN{":"}CSP_CENTROS_FUN{"[FIRST]"}                                                 |
| 238 | m4:move      |                                                                                                                               |
| 238 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_ORO{":"}CSP_ORO{"[FIRST]"}                                                                 |
| 239 | m4:move      |                                                                                                                               |
| 239 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                                         |
| 240 | m4:move      |                                                                                                                               |
| 240 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_UNID_DIRE{":"}CSP_UNID_DIRE{"[FIRST]"}                                                     |
| 359 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWUD).intValue()-1).toString()                                                       |
| 366 | m4:item      | m4name=CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true      |
| 396 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWL).intValue()-1).toString()                                                        |
| 402 | m4:item      | m4name=CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}; htmlsafe=true     |
| 402 | m4:item      | m4name=CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}; htmlsafe=true      |
| 419 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountiWLFun).intValue()-1).toString()                                                     |
| 425 | m4:item      | m4name=CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true |
| 442 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWU).intValue()-1).toString()                                                        |
| 449 | m4:item      | m4name=CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true      |
| 468 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvJOB).intValue()-1).toString()                                                       |
| 475 | m4:item      | m4name=CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true           |
| 531 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                                       |
| 542 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}; htmlsafe=true                          |
| 542 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}; htmlsafe=true                        |
| 542 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                      |
| 542 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}; htmlsafe=true                |
| 559 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                      |
| 567 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true                      |
| 572 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; htmlsafe=true                           |
| 575 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}; htmlsafe=true                         |
| 577 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true                 |
| 579 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENT_TRAB_FIS"}; htmlsafe=true                  |
| 580 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true                         |
| 602 | m4:endpage   |                                                                                                                               |

| L   | Operación        | Argumentos literales                                |
| --- | ---------------- | --------------------------------------------------- |
| 210 | setItem          | zsubsesion,zsubsesion,"","P_BUSQUEDA",busqueda      |
| 211 | setItem          | zsubsesion,zsubsesion,"","P_DIRECCIONB",dirbusqueda |
| 212 | setItem          | zsubsesion,zsubsesion,"","P_DIRECCION",direccion    |
| 213 | setItem          | zsubsesion,zsubsesion,"","P_AREA",area              |
| 214 | setItem          | zsubsesion,zsubsesion,"","P_NOMBRE",nombreCompleto  |
| 215 | setItem          | zsubsesion,zsubsesion,"","P_PUESTO",puesto          |
| 216 | setItem          | zsubsesion,zsubsesion,"","P_CENTRO",centro          |
| 217 | setItem          | zsubsesion,zsubsesion,"","P_CENTRO_FUN",CentroFun   |
| 218 | setItem          | zsubsesion,zsubsesion,"","CSP_P_SOCIEDAD",sociedad  |
| 256 | getCountInClient | znodoWU,zsubsesion,znodoWU                          |
| 257 | getCountInClient | znodoWL,zsubsesion,znodoWL                          |
| 258 | getCountInClient | znodoWLFun,zsubsesion,znodoWLFun                    |
| 259 | getCountInClient | znodoORO,zsubsesion,znodoORO                        |
| 260 | getCountInClient | znodoJOB,zsubsesion,znodoJOB                        |
| 261 | getCountInClient | znodoWUD,zsubsesion,znodoWUD                        |
| 273 | getItem          | zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función              | Argumentos        |
| --- | -------------------- | ----------------- |
| 31  | AddKeyPress          | e                 |
| 42  | seleccionarDireccion | idDireccion       |
| 55  | seleccionarOpcion    | valor,desplegable |

| L   | Condición / acción / mensaje literal                                                                                                   |
| --- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 34  | if (e.keyCode == 13) {                                                                                                                 |
| 48  | if (options[i].value == idDireccion) {                                                                                                 |
| 61  | if (options[i].value == valor) {                                                                                                       |
| 83  | if(sociedad == null &#124;&#124; sociedad == ""){sociedad = "IBER";}                                                                   |
| 84  | if (nombreCompleto == null) {nombreCompleto="";}                                                                                       |
| 317 | &lt;% if (sociedad.equals("IBER")) {%&gt;                                                                                              |
| 319 | &lt;%}else{%&gt;                                                                                                                       |
| 355 | if (zcountiWUD &gt; 0) {                                                                                                               |
| 372 | &lt;% if (direccion != null) {%&gt;                                                                                                    |
| 378 | &lt;% //if (dirbusqueda != null) {%&gt;                                                                                                |
| 392 | if (zcountiWL &gt; 0) {                                                                                                                |
| 415 | if (zcountiWLFun &gt; 0) {                                                                                                             |
| 438 | if (zcountiWU &gt; 0) {                                                                                                                |
| 464 | if (zcountiJOB &gt; 0) {                                                                                                               |
| 515 | if (zcountiORO &gt; 0) {                                                                                                               |
| 536 | if (zposicion2%2==0){                                                                                                                  |
| 585 | &lt;%} else {                                                                                                                          |
| 586 | if (busqueda != null) {                                                                                                                |
| 101 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA";                      |
| 103 | expresión de cálculo/transformación: String zoutputdefWU = zsubsesion + "!" + znodoWU + "[*]";                                         |
| 104 | expresión de cálculo/transformación: String zmoveWU = znodoWU + ":" + znodoWU + "[FIRST]";                                             |
| 105 | expresión de cálculo/transformación: String ziteratorWU = znodoWU + ":" + zsubsesion + "!" + znodoWU;                                  |
| 106 | expresión de cálculo/transformación: String zlecturaWU = zsubsesion + "!" + znodoWU;                                                   |
| 107 | expresión de cálculo/transformación: String zraizWU = zsubsesion + "!" + znodoWU + ".";                                                |
| 109 | expresión de cálculo/transformación: String zcomunWU = znodoWU + ":" + zsubsesion + "!" + znodoWU + "[&amp;VAR.m4lix]" + ".";          |
| 111 | expresión de cálculo/transformación: String zIdWunit = zcomunWU + "STD_ID_WORK_UNIT_CHILD";                                            |
| 112 | expresión de cálculo/transformación: String zNWunit = zcomunWU + "STD_N_WORK_UNIT";                                                    |
| 113 | expresión de cálculo/transformación: String zTypeWunit = zcomunWU + "STD_ID_WORK_UNIT_TYPE";                                           |
| 114 | expresión de cálculo/transformación: String zIdParentWunit = zcomunWU + "STD_ID_WORK_UNIT_PARENT";                                     |
| 116 | expresión de cálculo/transformación: String zoutputdefWL = zsubsesion + "!" + znodoWL + "[*]";                                         |
| 117 | expresión de cálculo/transformación: String zmoveWL = znodoWL + ":" + znodoWL + "[FIRST]";                                             |
| 118 | expresión de cálculo/transformación: String ziteratorWL = znodoWL + ":" + zsubsesion + "!" + znodoWL;                                  |
| 119 | expresión de cálculo/transformación: String zlecturaWL = zsubsesion + "!" + znodoWL;                                                   |
| 120 | expresión de cálculo/transformación: String zraizWL = zsubsesion + "!" + znodoWL + ".";                                                |
| 122 | expresión de cálculo/transformación: String zcomunWL = znodoWL + ":" + zsubsesion + "!" + znodoWL + "[&amp;VAR.m4lix]" + ".";          |
| 124 | expresión de cálculo/transformación: String zIdWlocat = zcomunWL + "STD_ID_WORK_LOCATION";                                             |
| 125 | expresión de cálculo/transformación: String zIdNWlocat = zcomunWL + "STD_N_WORK_LOCATION";                                             |
| 126 | expresión de cálculo/transformación: String zIdTypeWlocat = zcomunWL + "STD_ID_WL_TYPE";                                               |
| 128 | expresión de cálculo/transformación: String zoutputdefWLFun = zsubsesion + "!" + znodoWLFun + "[*]";                                   |
| 129 | expresión de cálculo/transformación: String zmoveWLFun = znodoWLFun + ":" + znodoWLFun + "[FIRST]";                                    |
| 130 | expresión de cálculo/transformación: String ziteratorWLFun = znodoWLFun + ":" + zsubsesion + "!" + znodoWLFun;                         |
| 131 | expresión de cálculo/transformación: String zlecturaWLFun = zsubsesion + "!" + znodoWLFun;                                             |
| 132 | expresión de cálculo/transformación: String zraizWLFun = zsubsesion + "!" + znodoWLFun + ".";                                          |
| 134 | expresión de cálculo/transformación: String zcomunWLFun = znodoWLFun + ":" + zsubsesion + "!" + znodoWLFun + "[&amp;VAR.m4lix]" + "."; |
| 136 | expresión de cálculo/transformación: String zIdCentroTr = zcomunWLFun + "ID_CENTRO_TRABAJO";                                           |
| 137 | expresión de cálculo/transformación: String zNCentroTr = zcomunWLFun + "N_CENTRO_TRABAJO";                                             |
| 140 | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                       |
| 141 | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                          |
| 142 | expresión de cálculo/transformación: String ziteratorORO = znodoORO + ":" + zsubsesion + "!" + znodoORO;                               |
| 143 | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + znodoORO;                                                 |
| 144 | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + znodoORO + ".";                                              |
| 146 | expresión de cálculo/transformación: String zcomunORO = znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + ".";       |
| 149 | expresión de cálculo/transformación: String zNommbreCompleto = zcomunORO + "SCO_GB_NAME";                                              |
| 150 | expresión de cálculo/transformación: String zNomCentTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                          |
| 151 | expresión de cálculo/transformación: String zNomCentTrabFis = zcomunORO + "N_CENT_TRAB_FIS";                                           |
| 152 | expresión de cálculo/transformación: String zIdCentTrabFis = zcomunORO + "ID_CENT_TRAB_FIS";                                           |
| 153 | expresión de cálculo/transformación: String zNomDireccion = zcomunORO + "N_DIRECCION";                                                 |
| 154 | expresión de cálculo/transformación: String zNomArea = zcomunORO + "N_AREA";                                                           |
| 155 | expresión de cálculo/transformación: String ztipoArea = zcomunORO + "ID_TIPO_AREA";                                                    |
| 156 | expresión de cálculo/transformación: String zNomUnidad = zcomunORO + "N_UNIDAD";                                                       |
| 157 | expresión de cálculo/transformación: String zNomPuesto = zcomunORO + "N_PUESTO";                                                       |
| 158 | expresión de cálculo/transformación: String zIdCentroTrab = zcomunORO + "ID_CENTRO_TRABAJO";                                           |
| 159 | expresión de cálculo/transformación: String zFotoEmpleado = zcomunORO + "SCO_BLOB_PHOTO";                                              |
| 160 | expresión de cálculo/transformación: String zIdUnidadRaiz = zcomunORO + "ID_UNIDAD_RAIZ";                                              |
| 163 | expresión de cálculo/transformación: String zNUnidadRaiz = zcomunORO + "N_UNIDAD_RAIZ";                                                |
| 166 | expresión de cálculo/transformación: String zIdDireccion = zcomunORO + "ID_DIRECCION";                                                 |
| 167 | expresión de cálculo/transformación: String zIdArea = zcomunORO + "ID_AREA";                                                           |
| 168 | expresión de cálculo/transformación: String zIdPuesto = zcomunORO + "ID_PUESTO";                                                       |
| 169 | expresión de cálculo/transformación: String zIdEmpleado = zcomunORO + "ID_EMPLEADO";                                                   |
| 171 | expresión de cálculo/transformación: String zoutputdefJOB = zsubsesion + "!" + znodoJOB + "[*]";                                       |
| 172 | expresión de cálculo/transformación: String zmoveJOB = znodoJOB + ":" + znodoJOB + "[FIRST]";                                          |
| 173 | expresión de cálculo/transformación: String ziteratorJOB = znodoJOB + ":" + zsubsesion + "!" + znodoJOB;                               |
| 174 | expresión de cálculo/transformación: String zlecturaJOB = zsubsesion + "!" + znodoJOB;                                                 |
| 175 | expresión de cálculo/transformación: String zraizJOB = zsubsesion + "!" + znodoJOB + ".";                                              |
| 177 | expresión de cálculo/transformación: String zcomunJOB = znodoJOB + ":" + zsubsesion + "!" + znodoJOB + "[&amp;VAR.m4lix]" + ".";       |
| 180 | expresión de cálculo/transformación: String zIdJob = zcomunJOB + "STD_ID_JOB_CODE";                                                    |
| 181 | expresión de cálculo/transformación: String zNJob = zcomunJOB + "STD_N_JOB_CODE";                                                      |
| 184 | expresión de cálculo/transformación: String zoutputdefWUD = zsubsesion + "!" + znodoWUD + "[*]";                                       |
| 185 | expresión de cálculo/transformación: String zmoveWUD = znodoWUD + ":" + znodoWUD + "[FIRST]";                                          |
| 186 | expresión de cálculo/transformación: String ziteratorWUD = znodoWUD + ":" + zsubsesion + "!" + znodoWUD;                               |
| 187 | expresión de cálculo/transformación: String zlecturaWUD = zsubsesion + "!" + znodoWUD;                                                 |
| 188 | expresión de cálculo/transformación: String zraizWUD = zsubsesion + "!" + znodoWUD + ".";                                              |
| 190 | expresión de cálculo/transformación: String zcomunWUD = znodoWUD + ":" + zsubsesion + "!" + znodoWUD + "[&amp;VAR.m4lix]" + ".";       |
| 192 | expresión de cálculo/transformación: String zIdWDunit = zcomunWUD + "STD_ID_WORK_UNIT";                                                |
| 193 | expresión de cálculo/transformación: String zNWDunit = zcomunWUD + "STD_N_WORK_UNIT";                                                  |
| 196 | expresión de cálculo/transformación: String zoutputdefQEQ = zsubsesion + "!" + zsubsesion + "[*]";                                     |
| 197 | expresión de cálculo/transformación: String zmoveQEQ = zsubsesion + ":" + zsubsesion + "[FIRST]";                                      |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                   |
| --- | --------------------------------------------------- |
| 21  | /css/estilo_sse.css                                 |
| 22  | /css/style_persdata.css                             |
| 23  | /css/bootstrap/css/bootstrap.min.css                |
| 24  | /js/bootstrap.min.js                                |
| 25  | /library/jquery.js                                  |
| 26  | /libreria/functions_quien_es_quien.js               |
| 27  | /libreria/funciones_sse.js                          |
| 279 | ssco_g0_who_is_who.jsp                              |
| 285 | ssco_g0_who_is_who.jsp                              |
| 309 | /iconos/infos.gif                                   |
| 312 | ssco_g0_who_is_who.jsp                              |
| 545 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp |
| 559 | javascript:m4submit(                                |

## Versión 3: CYC compartida

Fuente de los localizadores `L`: [m4custom/CYC/sse_g0/ssco_g0_who_is_who.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/ssco_g0_who_is_who.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 19  | Quién es Quién                    |
| 313 | Empleados                         |
| 317 | Sociedad                          |
| 318 | CYC IBER IBER                     |
| 329 | Limpiar filtros                   |
| 342 | Nombre                            |
| 348 | Dirección / D. Territorial        |
| 349 | Seleccione Dirección "&gt;        |
| 385 | Centro de Trabajo Fisico          |
| 386 | Seleccione Centro Fisico - "&gt;  |
| 408 | Centro de Trabajo Funcional       |
| 409 | Seleccione Centro Funcional "&gt; |
| 431 | Área / Sucursal                   |
| 432 | Seleccione Área/Sucursal "&gt;    |
| 456 | Puesto                            |
| 457 | Seleccione Puesto "&gt;           |
| 520 | Apellidos y Nombre                |
| 521 | Dirección                         |
| 522 | Área                              |
| 523 | Unidad                            |
| 524 | Centro de trabajo Fun             |
| 525 | Centro de trabajo Fis             |
| 526 | Puesto                            |
| 541 | "/&gt; "/&gt;                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                       |
| --- | ------- | --------------------------------------------------------------------------------------------------------------- |
| 283 | form    | id=filtroAreas; name=filtroAreas; method=post; action=ssco_g0_who_is_who.jsp                                    |
| 284 | input   | type=hidden; id=sociedad; name=sociedad; value=&lt;%=sociedad%&gt;                                              |
| 285 | input   | type=hidden; id=direccionArea; name=direccionArea; value=                                                       |
| 289 | form    | id=filtroBusqueda; name=filtroBusqueda; method=post; action=ssco_g0_who_is_who.jsp; accept-charset=ISO-8859-1   |
| 290 | input   | type=hidden; id=direccion; name=direccion; value=                                                               |
| 291 | input   | type=hidden; id=nombreCompleto; name=nombreCompleto; value=                                                     |
| 292 | input   | type=hidden; id=area; name=area; value=                                                                         |
| 293 | input   | type=hidden; id=puesto; name=puesto; value=                                                                     |
| 294 | input   | type=hidden; id=idcentro; name=idcentro; value=                                                                 |
| 295 | input   | type=hidden; id=idCentroFun; name=idCentroFun; value=                                                           |
| 296 | input   | type=hidden; id=centro; name=centro; value=                                                                     |
| 297 | input   | type=hidden; id=CentroFun; name=CentroFun; value=                                                               |
| 298 | input   | type=hidden; id=sociedad; name=sociedad; value=&lt;%=sociedad%&gt;                                              |
| 299 | input   | type=hidden; id=busqueda; name=busqueda; value=1                                                                |
| 313 | img     | src=/iconos/infos.gif                                                                                           |
| 316 | form    | id=filtroBusqueda1; name=filtroBusqueda1; method=post; action=ssco_g0_who_is_who.jsp; accept-charset=ISO-8859-1 |
| 319 | select  | name=sociedad; id=sociedad; style=width: 450px; onchange=enviarF()                                              |
| 320 | option  | value=CYC                                                                                                       |
| 322 | option  | value=IBER; selected=                                                                                           |
| 324 | option  | value=IBER                                                                                                      |
| 329 | button  | onclick=location.href=location.href; class=enterlogin; style= background-color: #DC0028;                        |

```
						background-repeat: no-repeat;
						border: 1px solid #DC0028;
						border-radius: 4px;
						color: #FFFFFF;
						margin: 10px;
						max-width: 150px;
						min-height: 20px;
						min-width: 110px; |
```

| 344 | input | type=text; name=nombre; id=nombre; value=&lt;%=nombreCompleto%&gt;; onkeypress=return AddKeyPress(event);; style=width: 450px |
| 350 | select | name=Direcciones; id=Direcciones; style=width: 450px |
| 351 | option | value=00; selected=presente; confirmar condición si dinámico |
| 364 | option | value=&lt;m4:item m4name=; htmlsafe=true |
| 387 | select | name=CentrosTrabajo; id=CentrosTrabajo; style=width: 450px |
| 388 | option | value=00 |
| 400 | option | value=&lt;m4:item m4name=; htmlsafe=true |
| 410 | select | name=CentrosTrabajoFun; id=CentrosTrabajoFun; style=width: 450px |
| 411 | option | value=00 |
| 423 | option | value="&lt;m4:item; m4name=&lt;%=zIdCentroTr%&gt;; htmlsafe=true |
| 433 | select | name=Areas; id=Areas; style=width: 450px |
| 434 | option | value= |
| 447 | option | value=&lt;m4:item m4name=; htmlsafe=true |
| 459 | select | name=puestos; id=puestos; style=width: 450px |
| 460 | option | value=00 |
| 473 | option | value=&lt;m4:item m4name=; htmlsafe=true |
| 484 | input | name=button; type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028;
background-repeat: no-repeat;
border: 1px solid #DC0028;
border-radius: 4px;
color: #FFFFFF;
margin: 10px;
max-width: 150px;
min-height: 30px;
min-width: 110px;; value=Búsqueda |
| 543 | form | id=datosCargadosFiltro&lt;%=zposicions2%&gt;; name=datosCargadosFiltro&lt;%=zposicions2%&gt;; method=post; target=_blank; action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp |
| 545 | input | type=hidden; id=empleado; name=empleado; value=&lt;m4:item m4name=; htmlsafe=true |
| 546 | input | type=hidden; id=empleado; name=uniraiz; value=&lt;m4:item m4name=; htmlsafe=true |
| 547 | input | type=hidden; id=nombresele; name=nombresele; value=&lt;%=nombreCompleto%&gt; |
| 548 | input | type=hidden; id=direcsele; name=direcsele; value=&lt;%=dirbusqueda%&gt; |
| 549 | input | type=hidden; id=idcentrosele; name=idcentrosele; value=&lt;%=idcentro%&gt; |
| 550 | input | type=hidden; id=idCentrofunsele; name=ididCentrofunsele; value=&lt;%=idCentroFun%&gt; |
| 551 | input | type=hidden; id=centrosele; name=centrosele; value=&lt;%=centro%&gt; |
| 552 | input | type=hidden; id=centrofunsele; name=centrofunsele; value=&lt;%=CentroFun%&gt; |
| 553 | input | type=hidden; id=areasele; name=areasele; value=&lt;%=area%&gt; |
| 554 | input | type=hidden; id=puestosele; name=puestosele; value=&lt;%=puesto%&gt; |
| 559 | a | id=ficha; alt=Consultar ficha del empleado; href=# |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                         |
| --- | --------------- | -------------------------------------- |
| 71  | direccionArea   | getParameter(request,"direccionArea")  |
| 72  | direccion       | getParameter(request,"direccion")      |
| 73  | nombreCompleto  | getParameter(request,"nombreCompleto") |
| 74  | area            | getParameter(request,"area")           |
| 75  | puesto          | getParameter(request,"puesto")         |
| 76  | idcentro        | getParameter(request,"idcentro")       |
| 77  | idCentroFun     | getParameter(request,"idCentroFun")    |
| 78  | centro          | getParameter(request,"centro")         |
| 79  | CentroFun       | getParameter(request,"CentroFun")      |
| 80  | busqueda        | getParameter(request,"busqueda")       |
| 81  | sociedad        | getParameter(request,"sociedad")       |

| L   | Variable         | Expresión fuente                                                            | Resolución estática parcial                                                                                |
| --- | ---------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 71  | direccion        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccionArea")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccionArea")                                  |
| 72  | dirbusqueda      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")                                      |
| 74  | area             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")                                           |
| 75  | puesto           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")                                         |
| 76  | idcentro         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idcentro")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idcentro")                                       |
| 77  | idCentroFun      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idCentroFun")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idCentroFun")                                    |
| 78  | centro           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"centro")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"centro")                                         |
| 79  | CentroFun        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"CentroFun")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"CentroFun")                                      |
| 80  | busqueda         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda")                                       |
| 81  | sociedad         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")                                       |
| 92  | zsubsesion       | "CSP_QUIEN_ES_QUIEN"                                                        | CSP_QUIEN_ES_QUIEN                                                                                         |
| 93  | zmeta4object     | "CSP_QUIEN_ES_QUIEN"                                                        | CSP_QUIEN_ES_QUIEN                                                                                         |
| 94  | znodoWU          | "CSP_UNID_AREA"                                                             | CSP_UNID_AREA                                                                                              |
| 95  | znodoWL          | "CSP_CENTROS"                                                               | CSP_CENTROS                                                                                                |
| 96  | znodoWLFun       | "CSP_CENTROS_FUN"                                                           | CSP_CENTROS_FUN                                                                                            |
| 97  | znodoORO         | "CSP_ORO"                                                                   | CSP_ORO                                                                                                    |
| 98  | znodoJOB         | "CSP_PUESTOS"                                                               | CSP_PUESTOS                                                                                                |
| 99  | znodoWUD         | "CSP_UNID_DIRE"                                                             | CSP_UNID_DIRE                                                                                              |
| 101 | zmetodocarga     | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"                       | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"}                                               |
| 103 | zoutputdefWU     | zsubsesion + "!" + znodoWU + "[*]"                                          | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[*]"}                                                                |
| 104 | zmoveWU          | znodoWU + ":" + znodoWU + "[FIRST]"                                         | CSP_UNID_AREA{":"}CSP_UNID_AREA{"[FIRST]"}                                                                 |
| 105 | ziteratorWU      | znodoWU + ":" + zsubsesion + "!" + znodoWU                                  | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA                                                     |
| 106 | zlecturaWU       | zsubsesion + "!" + znodoWU                                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA                                                                       |
| 107 | zraizWU          | zsubsesion + "!" + znodoWU + "."                                            | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"."}                                                                  |
| 109 | zcomunWU         | znodoWU + ":" + zsubsesion + "!" + znodoWU + "[&amp;VAR.m4lix]" + "."       | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}                            |
| 111 | zIdWunit         | zcomunWU + "STD_ID_WORK_UNIT_CHILD"                                         | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_CHILD"}  |
| 112 | zNWunit          | zcomunWU + "STD_N_WORK_UNIT"                                                | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}         |
| 113 | zTypeWunit       | zcomunWU + "STD_ID_WORK_UNIT_TYPE"                                          | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_TYPE"}   |
| 114 | zIdParentWunit   | zcomunWU + "STD_ID_WORK_UNIT_PARENT"                                        | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_PARENT"} |
| 116 | zoutputdefWL     | zsubsesion + "!" + znodoWL + "[*]"                                          | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[*]"}                                                                  |
| 117 | zmoveWL          | znodoWL + ":" + znodoWL + "[FIRST]"                                         | CSP_CENTROS{":"}CSP_CENTROS{"[FIRST]"}                                                                     |
| 118 | ziteratorWL      | znodoWL + ":" + zsubsesion + "!" + znodoWL                                  | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS                                                         |
| 119 | zlecturaWL       | zsubsesion + "!" + znodoWL                                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS                                                                         |
| 120 | zraizWL          | zsubsesion + "!" + znodoWL + "."                                            | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"."}                                                                    |
| 122 | zcomunWL         | znodoWL + ":" + zsubsesion + "!" + znodoWL + "[&amp;VAR.m4lix]" + "."       | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}                                |
| 124 | zIdWlocat        | zcomunWL + "STD_ID_WORK_LOCATION"                                           | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}        |
| 125 | zIdNWlocat       | zcomunWL + "STD_N_WORK_LOCATION"                                            | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}         |
| 126 | zIdTypeWlocat    | zcomunWL + "STD_ID_WL_TYPE"                                                 | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WL_TYPE"}              |
| 128 | zoutputdefWLFun  | zsubsesion + "!" + znodoWLFun + "[*]"                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[*]"}                                                              |
| 129 | zmoveWLFun       | znodoWLFun + ":" + znodoWLFun + "[FIRST]"                                   | CSP_CENTROS_FUN{":"}CSP_CENTROS_FUN{"[FIRST]"}                                                             |
| 130 | ziteratorWLFun   | znodoWLFun + ":" + zsubsesion + "!" + znodoWLFun                            | CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN                                                 |
| 131 | zlecturaWLFun    | zsubsesion + "!" + znodoWLFun                                               | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN                                                                     |
| 132 | zraizWLFun       | zsubsesion + "!" + znodoWLFun + "."                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"."}                                                                |
| 134 | zcomunWLFun      | znodoWLFun + ":" + zsubsesion + "!" + znodoWLFun + "[&amp;VAR.m4lix]" + "." | CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[&amp;VAR.m4lix]"}{"."}                        |
| 136 | zIdCentroTr      | zcomunWLFun + "ID_CENTRO_TRABAJO"                                           | CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}   |
| 137 | zNCentroTr       | zcomunWLFun + "N_CENTRO_TRABAJO"                                            | CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}    |
| 140 | zoutputdefORO    | zsubsesion + "!" + znodoORO + "[*]"                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[*]"}                                                                      |
| 141 | zmoveORO         | znodoORO + ":" + znodoORO + "[FIRST]"                                       | CSP_ORO{":"}CSP_ORO{"[FIRST]"}                                                                             |
| 142 | ziteratorORO     | znodoORO + ":" + zsubsesion + "!" + znodoORO                                | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO                                                                 |
| 143 | zlecturaORO      | zsubsesion + "!" + znodoORO                                                 | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO                                                                             |
| 144 | zraizORO         | zsubsesion + "!" + znodoORO + "."                                           | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"."}                                                                        |
| 146 | zcomunORO        | znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "."     | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}                                        |
| 149 | zNommbreCompleto | zcomunORO + "SCO_GB_NAME"                                                   | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                         |
| 150 | zNomCentTrabajo  | zcomunORO + "N_CENTRO_TRABAJO"                                              | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}                    |
| 151 | zNomCentTrabFis  | zcomunORO + "N_CENT_TRAB_FIS"                                               | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENT_TRAB_FIS"}                     |
| 152 | zIdCentTrabFis   | zcomunORO + "ID_CENT_TRAB_FIS"                                              | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENT_TRAB_FIS"}                    |
| 153 | zNomDireccion    | zcomunORO + "N_DIRECCION"                                                   | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}                         |
| 154 | zNomArea         | zcomunORO + "N_AREA"                                                        | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}                              |
| 155 | ztipoArea        | zcomunORO + "ID_TIPO_AREA"                                                  | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_TIPO_AREA"}                        |
| 156 | zNomUnidad       | zcomunORO + "N_UNIDAD"                                                      | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}                            |
| 157 | zNomPuesto       | zcomunORO + "N_PUESTO"                                                      | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}                            |
| 158 | zIdCentroTrab    | zcomunORO + "ID_CENTRO_TRABAJO"                                             | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}                   |
| 159 | zFotoEmpleado    | zcomunORO + "SCO_BLOB_PHOTO"                                                | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_BLOB_PHOTO"}                      |
| 160 | zIdUnidadRaiz    | zcomunORO + "ID_UNIDAD_RAIZ"                                                | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_UNIDAD_RAIZ"}                      |
| 163 | zNUnidadRaiz     | zcomunORO + "N_UNIDAD_RAIZ"                                                 | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}                       |
| 166 | zIdDireccion     | zcomunORO + "ID_DIRECCION"                                                  | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_DIRECCION"}                        |
| 167 | zIdArea          | zcomunORO + "ID_AREA"                                                       | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}                             |
| 168 | zIdPuesto        | zcomunORO + "ID_PUESTO"                                                     | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}                           |
| 169 | zIdEmpleado      | zcomunORO + "ID_EMPLEADO"                                                   | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_EMPLEADO"}                         |
| 171 | zoutputdefJOB    | zsubsesion + "!" + znodoJOB + "[*]"                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                                  |
| 172 | zmoveJOB         | znodoJOB + ":" + znodoJOB + "[FIRST]"                                       | CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                                                     |
| 173 | ziteratorJOB     | znodoJOB + ":" + zsubsesion + "!" + znodoJOB                                | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS                                                         |
| 174 | zlecturaJOB      | zsubsesion + "!" + znodoJOB                                                 | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS                                                                         |
| 175 | zraizJOB         | zsubsesion + "!" + znodoJOB + "."                                           | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"."}                                                                    |
| 177 | zcomunJOB        | znodoJOB + ":" + zsubsesion + "!" + znodoJOB + "[&amp;VAR.m4lix]" + "."     | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}                                |
| 180 | zIdJob           | zcomunJOB + "STD_ID_JOB_CODE"                                               | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_JOB_CODE"}             |
| 181 | zNJob            | zcomunJOB + "STD_N_JOB_CODE"                                                | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}              |
| 184 | zoutputdefWUD    | zsubsesion + "!" + znodoWUD + "[*]"                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[*]"}                                                                |
| 185 | zmoveWUD         | znodoWUD + ":" + znodoWUD + "[FIRST]"                                       | CSP_UNID_DIRE{":"}CSP_UNID_DIRE{"[FIRST]"}                                                                 |
| 186 | ziteratorWUD     | znodoWUD + ":" + zsubsesion + "!" + znodoWUD                                | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE                                                     |
| 187 | zlecturaWUD      | zsubsesion + "!" + znodoWUD                                                 | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE                                                                       |
| 188 | zraizWUD         | zsubsesion + "!" + znodoWUD + "."                                           | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"."}                                                                  |
| 190 | zcomunWUD        | znodoWUD + ":" + zsubsesion + "!" + znodoWUD + "[&amp;VAR.m4lix]" + "."     | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}                            |
| 192 | zIdWDunit        | zcomunWUD + "STD_ID_WORK_UNIT"                                              | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"}        |
| 193 | zNWDunit         | zcomunWUD + "STD_N_WORK_UNIT"                                               | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}         |
| 196 | zoutputdefQEQ    | zsubsesion + "!" + zsubsesion + "[*]"                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                                           |
| 197 | zmoveQEQ         | zsubsesion + ":" + zsubsesion + "[FIRST]"                                   | CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                                                       |
| 247 | zcountiWU        | 0                                                                           | 0                                                                                                          |
| 248 | zcountiWL        | 0                                                                           | 0                                                                                                          |
| 249 | zcountiWLFun     | 0                                                                           | 0                                                                                                          |
| 250 | zcountiORO       | 0                                                                           | 0                                                                                                          |
| 251 | zcountiJOB       | 0                                                                           | 0                                                                                                          |
| 252 | zcountiWUD       | 0                                                                           | 0                                                                                                          |
| 265 | zcountvWU        | String.valueOf(zcountiWU)                                                   | String.valueOf(zcountiWU)                                                                                  |
| 266 | zcountvWL        | String.valueOf(zcountiWL)                                                   | String.valueOf(zcountiWL)                                                                                  |
| 267 | zcountvWLFun     | String.valueOf(zcountiWL)                                                   | String.valueOf(zcountiWL)                                                                                  |
| 268 | zcountvORO       | String.valueOf(zcountiORO)                                                  | String.valueOf(zcountiORO)                                                                                 |
| 269 | zcountvJOB       | String.valueOf(zcountiJOB)                                                  | String.valueOf(zcountiJOB)                                                                                 |
| 270 | zcountvWUD       | String.valueOf(zcountiWUD)                                                  | String.valueOf(zcountiWUD)                                                                                 |
| 273 | esTerritorio     | m.getItem(zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO")              | m.getItem(zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO")                                             |
| 354 | zposicions2      | "0"                                                                         | 0                                                                                                          |
| 355 | zposicion2       | 0                                                                           | 0                                                                                                          |
| 391 | zposicions2      | "0"                                                                         | 0                                                                                                          |
| 392 | zposicion2       | 0                                                                           | 0                                                                                                          |
| 414 | zposicions2      | "0"                                                                         | 0                                                                                                          |
| 415 | zposicion2       | 0                                                                           | 0                                                                                                          |
| 437 | zposicions2      | "0"                                                                         | 0                                                                                                          |
| 438 | zposicion2       | 0                                                                           | 0                                                                                                          |
| 463 | zposicions2      | "0"                                                                         | 0                                                                                                          |
| 464 | zposicion2       | 0                                                                           | 0                                                                                                          |
| 514 | zposicions2      | "0"                                                                         | 0                                                                                                          |
| 515 | zposicion2       | 0                                                                           | 0                                                                                                          |
| 533 | varcss           | "fuentevalor"                                                               | fuentevalor                                                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                            |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| 200 | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                                                     |
| 202 | m4:beginjob  |                                                                                                                               |
| 203 | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                                             |
| 222 | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"}                                                         |
| 222 | m4:param     | name=ARG_SOCIEDAD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")                                 |
| 224 | m4:outputdef | m4alias=CSP_QUIEN_ES_QUIEN                                                                                                    |
| 224 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                                          |
| 225 | m4:outputdef | m4alias=CSP_UNID_AREA                                                                                                         |
| 225 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[*]"}                                                               |
| 226 | m4:outputdef | m4alias=CSP_CENTROS                                                                                                           |
| 226 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[*]"}                                                                 |
| 227 | m4:outputdef | m4alias=CSP_CENTROS_FUN                                                                                                       |
| 227 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[*]"}                                                             |
| 228 | m4:outputdef | m4alias=CSP_ORO                                                                                                               |
| 228 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[*]"}                                                                     |
| 229 | m4:outputdef | m4alias=CSP_PUESTOS                                                                                                           |
| 229 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                                 |
| 230 | m4:outputdef | m4alias=CSP_UNID_DIRE                                                                                                         |
| 230 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[*]"}                                                               |
| 232 | m4:endjob    |                                                                                                                               |
| 234 | m4:move      |                                                                                                                               |
| 234 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                                           |
| 235 | m4:move      |                                                                                                                               |
| 235 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_UNID_AREA{":"}CSP_UNID_AREA{"[FIRST]"}                                                     |
| 236 | m4:move      |                                                                                                                               |
| 236 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CENTROS{":"}CSP_CENTROS{"[FIRST]"}                                                         |
| 237 | m4:move      |                                                                                                                               |
| 237 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CENTROS_FUN{":"}CSP_CENTROS_FUN{"[FIRST]"}                                                 |
| 238 | m4:move      |                                                                                                                               |
| 238 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_ORO{":"}CSP_ORO{"[FIRST]"}                                                                 |
| 239 | m4:move      |                                                                                                                               |
| 239 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                                         |
| 240 | m4:move      |                                                                                                                               |
| 240 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_UNID_DIRE{":"}CSP_UNID_DIRE{"[FIRST]"}                                                     |
| 357 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWUD).intValue()-1).toString()                                                       |
| 364 | m4:item      | m4name=CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true      |
| 394 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWL).intValue()-1).toString()                                                        |
| 400 | m4:item      | m4name=CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}; htmlsafe=true     |
| 400 | m4:item      | m4name=CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}; htmlsafe=true      |
| 417 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountiWLFun).intValue()-1).toString()                                                     |
| 423 | m4:item      | m4name=CSP_CENTROS_FUN{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS_FUN{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true |
| 440 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWU).intValue()-1).toString()                                                        |
| 447 | m4:item      | m4name=CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true      |
| 466 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvJOB).intValue()-1).toString()                                                       |
| 473 | m4:item      | m4name=CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true           |
| 529 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                                       |
| 540 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}; htmlsafe=true                          |
| 540 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}; htmlsafe=true                        |
| 540 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                      |
| 540 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}; htmlsafe=true                |
| 559 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                      |
| 566 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true                      |
| 571 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; htmlsafe=true                           |
| 574 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}; htmlsafe=true                         |
| 576 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true                 |
| 578 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENT_TRAB_FIS"}; htmlsafe=true                  |
| 579 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true                         |
| 601 | m4:endpage   |                                                                                                                               |

| L   | Operación        | Argumentos literales                                |
| --- | ---------------- | --------------------------------------------------- |
| 210 | setItem          | zsubsesion,zsubsesion,"","P_BUSQUEDA",busqueda      |
| 211 | setItem          | zsubsesion,zsubsesion,"","P_DIRECCIONB",dirbusqueda |
| 212 | setItem          | zsubsesion,zsubsesion,"","P_DIRECCION",direccion    |
| 213 | setItem          | zsubsesion,zsubsesion,"","P_AREA",area              |
| 214 | setItem          | zsubsesion,zsubsesion,"","P_NOMBRE",nombreCompleto  |
| 215 | setItem          | zsubsesion,zsubsesion,"","P_PUESTO",puesto          |
| 216 | setItem          | zsubsesion,zsubsesion,"","P_CENTRO",centro          |
| 217 | setItem          | zsubsesion,zsubsesion,"","P_CENTRO_FUN",CentroFun   |
| 218 | setItem          | zsubsesion,zsubsesion,"","CSP_P_SOCIEDAD",sociedad  |
| 256 | getCountInClient | znodoWU,zsubsesion,znodoWU                          |
| 257 | getCountInClient | znodoWL,zsubsesion,znodoWL                          |
| 258 | getCountInClient | znodoWLFun,zsubsesion,znodoWLFun                    |
| 259 | getCountInClient | znodoORO,zsubsesion,znodoORO                        |
| 260 | getCountInClient | znodoJOB,zsubsesion,znodoJOB                        |
| 261 | getCountInClient | znodoWUD,zsubsesion,znodoWUD                        |
| 273 | getItem          | zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función              | Argumentos        |
| --- | -------------------- | ----------------- |
| 31  | AddKeyPress          | e                 |
| 42  | seleccionarDireccion | idDireccion       |
| 55  | seleccionarOpcion    | valor,desplegable |
| 278 | enviarF              |                   |

| L   | Condición / acción / mensaje literal                                                                                                   |
| --- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 34  | if (e.keyCode == 13) {                                                                                                                 |
| 48  | if (options[i].value == idDireccion) {                                                                                                 |
| 61  | if (options[i].value == valor) {                                                                                                       |
| 83  | if(sociedad == null &#124;&#124; sociedad == ""){sociedad = "CYC";}                                                                    |
| 84  | if (nombreCompleto == null) {nombreCompleto="";}                                                                                       |
| 321 | &lt;% if (sociedad.equals("IBER")) {%&gt;                                                                                              |
| 323 | &lt;%}else{%&gt;                                                                                                                       |
| 353 | if (zcountiWUD &gt; 0) {                                                                                                               |
| 370 | &lt;% if (direccion != null) {%&gt;                                                                                                    |
| 376 | &lt;% //if (dirbusqueda != null) {%&gt;                                                                                                |
| 390 | if (zcountiWL &gt; 0) {                                                                                                                |
| 413 | if (zcountiWLFun &gt; 0) {                                                                                                             |
| 436 | if (zcountiWU &gt; 0) {                                                                                                                |
| 462 | if (zcountiJOB &gt; 0) {                                                                                                               |
| 513 | if (zcountiORO &gt; 0) {                                                                                                               |
| 534 | if (zposicion2%2==0){                                                                                                                  |
| 584 | &lt;%} else {                                                                                                                          |
| 585 | if (busqueda != null) {                                                                                                                |
| 101 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA";                      |
| 103 | expresión de cálculo/transformación: String zoutputdefWU = zsubsesion + "!" + znodoWU + "[*]";                                         |
| 104 | expresión de cálculo/transformación: String zmoveWU = znodoWU + ":" + znodoWU + "[FIRST]";                                             |
| 105 | expresión de cálculo/transformación: String ziteratorWU = znodoWU + ":" + zsubsesion + "!" + znodoWU;                                  |
| 106 | expresión de cálculo/transformación: String zlecturaWU = zsubsesion + "!" + znodoWU;                                                   |
| 107 | expresión de cálculo/transformación: String zraizWU = zsubsesion + "!" + znodoWU + ".";                                                |
| 109 | expresión de cálculo/transformación: String zcomunWU = znodoWU + ":" + zsubsesion + "!" + znodoWU + "[&amp;VAR.m4lix]" + ".";          |
| 111 | expresión de cálculo/transformación: String zIdWunit = zcomunWU + "STD_ID_WORK_UNIT_CHILD";                                            |
| 112 | expresión de cálculo/transformación: String zNWunit = zcomunWU + "STD_N_WORK_UNIT";                                                    |
| 113 | expresión de cálculo/transformación: String zTypeWunit = zcomunWU + "STD_ID_WORK_UNIT_TYPE";                                           |
| 114 | expresión de cálculo/transformación: String zIdParentWunit = zcomunWU + "STD_ID_WORK_UNIT_PARENT";                                     |
| 116 | expresión de cálculo/transformación: String zoutputdefWL = zsubsesion + "!" + znodoWL + "[*]";                                         |
| 117 | expresión de cálculo/transformación: String zmoveWL = znodoWL + ":" + znodoWL + "[FIRST]";                                             |
| 118 | expresión de cálculo/transformación: String ziteratorWL = znodoWL + ":" + zsubsesion + "!" + znodoWL;                                  |
| 119 | expresión de cálculo/transformación: String zlecturaWL = zsubsesion + "!" + znodoWL;                                                   |
| 120 | expresión de cálculo/transformación: String zraizWL = zsubsesion + "!" + znodoWL + ".";                                                |
| 122 | expresión de cálculo/transformación: String zcomunWL = znodoWL + ":" + zsubsesion + "!" + znodoWL + "[&amp;VAR.m4lix]" + ".";          |
| 124 | expresión de cálculo/transformación: String zIdWlocat = zcomunWL + "STD_ID_WORK_LOCATION";                                             |
| 125 | expresión de cálculo/transformación: String zIdNWlocat = zcomunWL + "STD_N_WORK_LOCATION";                                             |
| 126 | expresión de cálculo/transformación: String zIdTypeWlocat = zcomunWL + "STD_ID_WL_TYPE";                                               |
| 128 | expresión de cálculo/transformación: String zoutputdefWLFun = zsubsesion + "!" + znodoWLFun + "[*]";                                   |
| 129 | expresión de cálculo/transformación: String zmoveWLFun = znodoWLFun + ":" + znodoWLFun + "[FIRST]";                                    |
| 130 | expresión de cálculo/transformación: String ziteratorWLFun = znodoWLFun + ":" + zsubsesion + "!" + znodoWLFun;                         |
| 131 | expresión de cálculo/transformación: String zlecturaWLFun = zsubsesion + "!" + znodoWLFun;                                             |
| 132 | expresión de cálculo/transformación: String zraizWLFun = zsubsesion + "!" + znodoWLFun + ".";                                          |
| 134 | expresión de cálculo/transformación: String zcomunWLFun = znodoWLFun + ":" + zsubsesion + "!" + znodoWLFun + "[&amp;VAR.m4lix]" + "."; |
| 136 | expresión de cálculo/transformación: String zIdCentroTr = zcomunWLFun + "ID_CENTRO_TRABAJO";                                           |
| 137 | expresión de cálculo/transformación: String zNCentroTr = zcomunWLFun + "N_CENTRO_TRABAJO";                                             |
| 140 | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                       |
| 141 | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                          |
| 142 | expresión de cálculo/transformación: String ziteratorORO = znodoORO + ":" + zsubsesion + "!" + znodoORO;                               |
| 143 | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + znodoORO;                                                 |
| 144 | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + znodoORO + ".";                                              |
| 146 | expresión de cálculo/transformación: String zcomunORO = znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + ".";       |
| 149 | expresión de cálculo/transformación: String zNommbreCompleto = zcomunORO + "SCO_GB_NAME";                                              |
| 150 | expresión de cálculo/transformación: String zNomCentTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                          |
| 151 | expresión de cálculo/transformación: String zNomCentTrabFis = zcomunORO + "N_CENT_TRAB_FIS";                                           |
| 152 | expresión de cálculo/transformación: String zIdCentTrabFis = zcomunORO + "ID_CENT_TRAB_FIS";                                           |
| 153 | expresión de cálculo/transformación: String zNomDireccion = zcomunORO + "N_DIRECCION";                                                 |
| 154 | expresión de cálculo/transformación: String zNomArea = zcomunORO + "N_AREA";                                                           |
| 155 | expresión de cálculo/transformación: String ztipoArea = zcomunORO + "ID_TIPO_AREA";                                                    |
| 156 | expresión de cálculo/transformación: String zNomUnidad = zcomunORO + "N_UNIDAD";                                                       |
| 157 | expresión de cálculo/transformación: String zNomPuesto = zcomunORO + "N_PUESTO";                                                       |
| 158 | expresión de cálculo/transformación: String zIdCentroTrab = zcomunORO + "ID_CENTRO_TRABAJO";                                           |
| 159 | expresión de cálculo/transformación: String zFotoEmpleado = zcomunORO + "SCO_BLOB_PHOTO";                                              |
| 160 | expresión de cálculo/transformación: String zIdUnidadRaiz = zcomunORO + "ID_UNIDAD_RAIZ";                                              |
| 163 | expresión de cálculo/transformación: String zNUnidadRaiz = zcomunORO + "N_UNIDAD_RAIZ";                                                |
| 166 | expresión de cálculo/transformación: String zIdDireccion = zcomunORO + "ID_DIRECCION";                                                 |
| 167 | expresión de cálculo/transformación: String zIdArea = zcomunORO + "ID_AREA";                                                           |
| 168 | expresión de cálculo/transformación: String zIdPuesto = zcomunORO + "ID_PUESTO";                                                       |
| 169 | expresión de cálculo/transformación: String zIdEmpleado = zcomunORO + "ID_EMPLEADO";                                                   |
| 171 | expresión de cálculo/transformación: String zoutputdefJOB = zsubsesion + "!" + znodoJOB + "[*]";                                       |
| 172 | expresión de cálculo/transformación: String zmoveJOB = znodoJOB + ":" + znodoJOB + "[FIRST]";                                          |
| 173 | expresión de cálculo/transformación: String ziteratorJOB = znodoJOB + ":" + zsubsesion + "!" + znodoJOB;                               |
| 174 | expresión de cálculo/transformación: String zlecturaJOB = zsubsesion + "!" + znodoJOB;                                                 |
| 175 | expresión de cálculo/transformación: String zraizJOB = zsubsesion + "!" + znodoJOB + ".";                                              |
| 177 | expresión de cálculo/transformación: String zcomunJOB = znodoJOB + ":" + zsubsesion + "!" + znodoJOB + "[&amp;VAR.m4lix]" + ".";       |
| 180 | expresión de cálculo/transformación: String zIdJob = zcomunJOB + "STD_ID_JOB_CODE";                                                    |
| 181 | expresión de cálculo/transformación: String zNJob = zcomunJOB + "STD_N_JOB_CODE";                                                      |
| 184 | expresión de cálculo/transformación: String zoutputdefWUD = zsubsesion + "!" + znodoWUD + "[*]";                                       |
| 185 | expresión de cálculo/transformación: String zmoveWUD = znodoWUD + ":" + znodoWUD + "[FIRST]";                                          |
| 186 | expresión de cálculo/transformación: String ziteratorWUD = znodoWUD + ":" + zsubsesion + "!" + znodoWUD;                               |
| 187 | expresión de cálculo/transformación: String zlecturaWUD = zsubsesion + "!" + znodoWUD;                                                 |
| 188 | expresión de cálculo/transformación: String zraizWUD = zsubsesion + "!" + znodoWUD + ".";                                              |
| 190 | expresión de cálculo/transformación: String zcomunWUD = znodoWUD + ":" + zsubsesion + "!" + znodoWUD + "[&amp;VAR.m4lix]" + ".";       |
| 192 | expresión de cálculo/transformación: String zIdWDunit = zcomunWUD + "STD_ID_WORK_UNIT";                                                |
| 193 | expresión de cálculo/transformación: String zNWDunit = zcomunWUD + "STD_N_WORK_UNIT";                                                  |
| 196 | expresión de cálculo/transformación: String zoutputdefQEQ = zsubsesion + "!" + zsubsesion + "[*]";                                     |
| 197 | expresión de cálculo/transformación: String zmoveQEQ = zsubsesion + ":" + zsubsesion + "[FIRST]";                                      |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                   |
| --- | --------------------------------------------------- |
| 21  | /css/estilo_sse.css                                 |
| 22  | /css/style_persdata.css                             |
| 23  | /css/bootstrap/css/bootstrap.min.css                |
| 24  | /js/bootstrap.min.js                                |
| 25  | /library/jquery.js                                  |
| 26  | /libreria/functions_quien_es_quien.js               |
| 27  | /libreria/funciones_sse.js                          |
| 283 | ssco_g0_who_is_who.jsp                              |
| 289 | ssco_g0_who_is_who.jsp                              |
| 313 | /iconos/infos.gif                                   |
| 316 | ssco_g0_who_is_who.jsp                              |
| 543 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp |
| 559 | #                                                   |

## Versión 4: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_g0_who_is_who.jsp](../../../../clon_portal/portal/sse_g0/ssco_g0_who_is_who.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta              |
| --- | ------------------------------------- |
| 176 | [valor dinámico] 0 [valor dinámico] 0 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                  |
| --- | ------- | ------------------------------------------------------------------------------------------ |
| 73  | img     | src=/iconos/inf_complementaria_empleado_100x100.gif; title=&lt;%=sAuxLabel%&gt;            |
| 80  | a       | class=aLink; href=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_contact.jsp                    |
| 86  | img     | class=nophoto; id=imgPhoto; src=                                                           |
| 102 | input   | id=inputSearchEmp; type=text; title=&lt;%=sAuxLabel%&gt;                                   |
| 104 | img     | class=nophoto; id=imgSearchEmp; title=&lt;%=sAuxLabel%&gt;; src=/iconos/lu_close_1_24.png  |
| 110 | input   | id=inputSearchWU; type=text; title=&lt;%=sAuxLabel%&gt;                                    |
| 112 | img     | class=nophoto; id=imgSearchWU; title=&lt;%=sAuxLabel%&gt;; src=/iconos/lu_close_1_24.png   |
| 118 | input   | id=inputSearchWLoc; type=text; title=&lt;%=sAuxLabel%&gt;                                  |
| 120 | img     | class=nophoto; id=imgSearchWLoc; title=&lt;%=sAuxLabel%&gt;; src=/iconos/lu_close_1_24.png |
| 184 | img     | id=imgFirstPageEmp; m4action=first; title=&lt;%=sAuxLabel%&gt;                             |
| 186 | img     | id=imgPrevPageEmp; m4action=prev; title=&lt;%=sAuxLabel%&gt;                               |
| 188 | input   | id=inputPageEmp; type=text; maxlength=3; title=&lt;%=sAuxLabel%&gt;                        |
| 190 | img     | id=imgNextPageEmp; m4action=next; title=&lt;%=sAuxLabel%&gt;                               |
| 192 | img     | id=imgLastPageEmp; m4action=last; title=&lt;%=sAuxLabel%&gt;                               |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable             | Expresión fuente                      | Resolución estática parcial                                      |
| --- | -------------------- | ------------------------------------- | ---------------------------------------------------------------- |
| 32  | sPathTempMap         | m4Session.getPathTempMapping()        | m4Session.getPathTempMapping()                                   |
| 33  | sPathTempURI         | m4Session.getUserTempURI() + '/'      | {m4Session.getUserTempURI()}{'/'}                                |
| 35  | sSubSession          | "SGCO_WHO_IS_WHO"                     | SGCO_WHO_IS_WHO                                                  |
| 36  | sMeta4Object         | "SGCO_WHO_IS_WHO"                     | SGCO_WHO_IS_WHO                                                  |
| 38  | sNodeLabel           | "SGCO_WHO_IS_WHO_LABEL"               | SGCO_WHO_IS_WHO_LABEL                                            |
| 39  | sDataDefLabel        | sMeta4Object + "!" + sNodeLabel       | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL                        |
| 40  | sOutputDefLabel      | sDataDefLabel + "[*]"                 | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{"[*]"}                 |
| 41  | sMethodLoadLabel     | sDataDefLabel + ".SCO_MTD_LOAD_LABEL" | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{".SCO_MTD_LOAD_LABEL"} |
| 43  | sNodeLabelTable      | "SGCO_WHO_IS_WHO_LABEL_TABLE"         | SGCO_WHO_IS_WHO_LABEL_TABLE                                      |
| 44  | sDataDefLabelTable   | sMeta4Object + "!" + sNodeLabelTable  | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL_TABLE                  |
| 45  | sOutputDefLabelTable | sDataDefLabelTable + "[*]"            | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL_TABLE{"[*]"}           |
| 47  | sDescription         | ""                                    |                                                                  |
| 48  | sAuxLabel            | ""                                    |                                                                  |
| 49  | sAuxLabelTitle       | ""                                    |                                                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                |
| --- | ------------ | ------------------------------------------------------------------------------------------------- |
| 55  | m4:page      | subsessionid=SGCO_WHO_IS_WHO                                                                      |
| 56  | m4:job       |                                                                                                   |
| 57  | m4:datadef   | m4name=SGCO_WHO_IS_WHO; m4o=SGCO_WHO_IS_WHO                                                       |
| 58  | m4:exec      | m4method=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{".SCO_MTD_LOAD_LABEL"}                         |
| 60  | m4:outputdef | m4alias=SGCO_WHO_IS_WHO_LABEL                                                                     |
| 60  | m4:param     | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{"[*]"}                              |
| 61  | m4:outputdef | m4alias=SGCO_WHO_IS_WHO_LABEL_TABLE                                                               |
| 61  | m4:param     | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL_TABLE{"[*]"}                        |
| 67  | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_WHO; var=; htmlsafe=true              |
| 75  | m4:item      | outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_DESC; var=; htmlsafe=true                       |
| 79  | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_CONTACT; var=; htmlsafe=true          |
| 95  | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_SEARCH; var=; htmlsafe=true           |
| 99  | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_NAME; var=; htmlsafe=true             |
| 101 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_2_CAR; var=; htmlsafe=true            |
| 103 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_FILTER_DEL; var=; htmlsafe=true       |
| 107 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_WUNIT; var=; htmlsafe=true            |
| 109 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_2_CAR; var=; htmlsafe=true            |
| 111 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_FILTER_DEL; var=; htmlsafe=true       |
| 115 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_WLOC; var=; htmlsafe=true             |
| 117 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_2_CAR; var=; htmlsafe=true            |
| 119 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_FILTER_DEL; var=; htmlsafe=true       |
| 125 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_RESULT; var=; htmlsafe=true           |
| 136 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_FILTER_ACTIVE; var=; htmlsafe=true    |
| 140 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_FILTER_EMP; var=; htmlsafe=true       |
| 144 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_FILTER_WU; var=; htmlsafe=true        |
| 148 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_FILTER_WLOC; var=; htmlsafe=true      |
| 155 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_LIST_EMPLOYEE; var=; htmlsafe=true    |
| 159 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_NAME; var=; htmlsafe=true             |
| 161 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_WUNIT; var=; htmlsafe=true            |
| 163 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_PHONE; var=; htmlsafe=true            |
| 165 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_EMAIL; var=; htmlsafe=true            |
| 167 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_WLOC; var=; htmlsafe=true             |
| 178 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_PAGE; var=; htmlsafe=true       |
| 179 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_OF; var=; htmlsafe=true         |
| 183 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_FIRST_PAGE; var=; htmlsafe=true |
| 185 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_PRV_PAGE; var=; htmlsafe=true   |
| 187 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_GOTO_PAGE; var=; htmlsafe=true  |
| 189 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_NEXT_PAGE; var=; htmlsafe=true  |
| 191 | m4:label     | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_LAST_PAGE; var=; htmlsafe=true  |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                   |
| --- | ------------------------------------------------------------------------------------------------------ |
| 33  | expresión de cálculo/transformación: String sPathTempURI = m4Session.getUserTempURI() + '/';           |
| 39  | expresión de cálculo/transformación: String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;           |
| 40  | expresión de cálculo/transformación: String sOutputDefLabel = sDataDefLabel + "[*]";                   |
| 41  | expresión de cálculo/transformación: String sMethodLoadLabel = sDataDefLabel + ".SCO_MTD_LOAD_LABEL";  |
| 44  | expresión de cálculo/transformación: String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable; |
| 45  | expresión de cálculo/transformación: String sOutputDefLabelTable = sDataDefLabelTable + "[*]";         |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 9   | ../sse_generico/sse_generico_taglib.jsp |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 12  | /libreria/mootools.js                                 |
| 13  | /libreria/meta4ajax.js                                |
| 14  | /libreria/meta4photo.js                               |
| 15  | /libreria/meta4table.js                               |
| 16  | /libreria/meta4infpers.js                             |
| 17  | /libreria/functions_whoiswho.js                       |
| 18  | /css/style_whoiswho.css                               |
| 19  | /css/meta4table.css                                   |
| 73  | /iconos/inf_complementaria_empleado_100x100.gif       |
| 80  | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_contact.jsp |
| 104 | /iconos/lu_close_1_24.png                             |
| 112 | /iconos/lu_close_1_24.png                             |
| 120 | /iconos/lu_close_1_24.png                             |
| 184 | first                                                 |
| 186 | prev                                                  |
| 190 | next                                                  |
| 192 | last                                                  |
| 9   | ../sse_generico/sse_generico_taglib.jsp               |
| 28  | com.meta4.jsp                                         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 1   | ../ssco_g0_who_is_who.jsp                             | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| COLL   | 1   | ../ssco_g0_who_is_who.jsp                             | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| COLL   | 24  | /js/bootstrap.min.js                                  | contextual | &#96;js/bootstrap.min.js&#96;                                                                                                                                                  |
| COLL   | 25  | /library/jquery.js                                    | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| COLL   | 26  | /libreria/functions_quien_es_quien.js                 | contextual | [libreria/functions_quien_es_quien.js](../../transversal/dependencias/libreria--functions_quien_es_quien.md)                                                                   |
| COLL   | 27  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 279 | ssco_g0_who_is_who.jsp                                | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| COLL   | 285 | ssco_g0_who_is_who.jsp                                | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| COLL   | 312 | ssco_g0_who_is_who.jsp                                | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| COLL   | 545 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp   | ausente    | P06                                                                                                                                                                            |
| COLL   | 559 | javascript:m4submit(                                  | dinámica   | P06                                                                                                                                                                            |
| CYC    | 1   | ../ssco_g0_who_is_who.jsp                             | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| CYC    | 1   | ../ssco_g0_who_is_who.jsp                             | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| CYC    | 24  | /js/bootstrap.min.js                                  | contextual | &#96;js/bootstrap.min.js&#96;                                                                                                                                                  |
| CYC    | 25  | /library/jquery.js                                    | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                          |
| CYC    | 26  | /libreria/functions_quien_es_quien.js                 | contextual | [libreria/functions_quien_es_quien.js](../../transversal/dependencias/libreria--functions_quien_es_quien.md)                                                                   |
| CYC    | 27  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 283 | ssco_g0_who_is_who.jsp                                | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| CYC    | 289 | ssco_g0_who_is_who.jsp                                | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| CYC    | 316 | ssco_g0_who_is_who.jsp                                | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| CYC    | 543 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp   | ausente    | P06                                                                                                                                                                            |
| IBER   | 1   | ../ssco_g0_who_is_who.jsp                             | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| IBER   | 1   | ../ssco_g0_who_is_who.jsp                             | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| IBER   | 24  | /js/bootstrap.min.js                                  | contextual | &#96;js/bootstrap.min.js&#96;                                                                                                                                                  |
| IBER   | 25  | /library/jquery.js                                    | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| IBER   | 26  | /libreria/functions_quien_es_quien.js                 | contextual | [libreria/functions_quien_es_quien.js](../../transversal/dependencias/libreria--functions_quien_es_quien.md)                                                                   |
| IBER   | 27  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 279 | ssco_g0_who_is_who.jsp                                | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| IBER   | 285 | ssco_g0_who_is_who.jsp                                | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| IBER   | 312 | ssco_g0_who_is_who.jsp                                | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| IBER   | 545 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp   | ausente    | P06                                                                                                                                                                            |
| IBER   | 559 | javascript:m4submit(                                  | dinámica   | P06                                                                                                                                                                            |
| BASE   | 1   | ../ssco_g0_who_is_who.jsp                             | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| BASE   | 1   | ../ssco_g0_who_is_who.jsp                             | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| BASE   | 9   | ../sse_generico/sse_generico_taglib.jsp               | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| BASE   | 12  | /libreria/mootools.js                                 | contextual | &#96;libreria/mootools.js&#96;                                                                                                                                                 |
| BASE   | 13  | /libreria/meta4ajax.js                                | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                                                                                                 |
| BASE   | 14  | /libreria/meta4photo.js                               | contextual | [libreria/meta4photo.js](../../transversal/dependencias/libreria--meta4photo.md)                                                                                               |
| BASE   | 15  | /libreria/meta4table.js                               | contextual | [libreria/meta4table.js](../../transversal/dependencias/libreria--meta4table.md)                                                                                               |
| BASE   | 16  | /libreria/meta4infpers.js                             | contextual | [libreria/meta4infpers.js](../../transversal/dependencias/libreria--meta4infpers.md)                                                                                           |
| BASE   | 17  | /libreria/functions_whoiswho.js                       | contextual | [libreria/functions_whoiswho.js](../../transversal/dependencias/libreria--functions_whoiswho.md)                                                                               |
| BASE   | 80  | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_contact.jsp | contextual | [sse_g0/ssco_g0_contact.jsp](sse_g0--ssco_g0_contact.md)                                                                                                                       |
| BASE   | 9   | ../sse_generico/sse_generico_taglib.jsp               | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| BASE   | 28  | com.meta4.jsp                                         | ausente    | P06                                                                                                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_g0_who_is_who.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
