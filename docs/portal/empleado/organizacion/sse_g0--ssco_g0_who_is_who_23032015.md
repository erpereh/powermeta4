# Quién es Quién

Identificador: `sse_g0/ssco_g0_who_is_who_23032015.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/sse_g0/ssco_g0_who_is_who_23032015.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/ssco_g0_who_is_who_23032015.jsp) | `69726c59bf3f1361afd1df1605cc275287235071b9706a3aa4d019baa4530f7f` |    582 |
| CYC / compartido  | [m4custom/CYC/sse_g0/ssco_g0_who_is_who_23032015.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/ssco_g0_who_is_who_23032015.jsp)   | `69726c59bf3f1361afd1df1605cc275287235071b9706a3aa4d019baa4530f7f` |    582 |
| IBER / compartido | [m4custom/IBER/sse_g0/ssco_g0_who_is_who_23032015.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g0/ssco_g0_who_is_who_23032015.jsp) | `69726c59bf3f1361afd1df1605cc275287235071b9706a3aa4d019baa4530f7f` |    582 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_g0/ssco_g0_who_is_who_23032015.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/ssco_g0_who_is_who_23032015.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta         |
| --- | -------------------------------- |
| 32  | Quién es Quién                   |
| 382 | Empleados                        |
| 386 | Nombre                           |
| 387 | Seleccione Nombre "&gt;          |
| 411 | Dirección / D. Territorial       |
| 412 | Seleccione Dirección "&gt;       |
| 434 | Centro de Trabajo                |
| 435 | Seleccione Centro - "&gt;        |
| 456 | Área / Sucursal                  |
| 457 | Seleccione Área/Sucursal - "&gt; |
| 481 | Puesto                           |
| 482 | Seleccione Puesto "&gt;          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                     |
| --- | ------- | --------------------------------------------------------------------------------------------- |
| 379 | form    | method=POST; action=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp                  |
| 382 | img     | src=/iconos/infos.gif                                                                         |
| 389 | select  | name=Empleados; id=Empleados                                                                  |
| 390 | option  | value=00                                                                                      |
| 402 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                      |
| 413 | select  | name=Direcciones; id=Direcciones                                                              |
| 414 | option  | value=00                                                                                      |
| 426 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                      |
| 441 | select  | name=CentrosTrabajo; id=CentrosTrabajo                                                        |
| 442 | option  | value=00                                                                                      |
| 449 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                      |
| 464 | select  | name=Areas; id=Areas                                                                          |
| 465 | option  | value=                                                                                        |
| 473 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                      |
| 484 | select  | name=puestos; id=puestos                                                                      |
| 485 | option  | value=00                                                                                      |
| 498 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                      |
| 509 | input   | name=button; type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028; |

```
							background-repeat: no-repeat;
							border: 1px solid #DC0028;
							border-radius: 4px;
							color: #FFFFFF;
							margin: 10px;
							max-width: 150px;
							min-height: 30px;
							min-width: 110px;; value=Búqueda |
```

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 199 | direccion       | getParameter(request,"direccion") |

| L   | Variable         | Expresión fuente                                                        | Resolución estática parcial                                                                                 |
| --- | ---------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 199 | direccion        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")                                       |
| 208 | sPathTempMap     | m4Session.getPathTempMapping()                                          | m4Session.getPathTempMapping()                                                                              |
| 209 | sPathTempURI     | m4Session.getUserTempURI() + '/'                                        | {m4Session.getUserTempURI()}{'/'}                                                                           |
| 211 | zsubsesion       | "CSP_WHO_IS_WHO"                                                        | CSP_WHO_IS_WHO                                                                                              |
| 212 | zmeta4object     | "CSP_WHO_IS_WHO"                                                        | CSP_WHO_IS_WHO                                                                                              |
| 213 | znodoWU          | "CSP_UNID_WIW"                                                          | CSP_UNID_WIW                                                                                                |
| 214 | znodoWL          | "CSP_WL_WIW"                                                            | CSP_WL_WIW                                                                                                  |
| 215 | znodoORO         | "CSP_DATOS_ORO"                                                         | CSP_DATOS_ORO                                                                                               |
| 216 | znodoJOB         | "CSP_JOB_WIW"                                                           | CSP_JOB_WIW                                                                                                 |
| 217 | znodoWUA         | "CSP_AREAS_WIW"                                                         | CSP_AREAS_WIW                                                                                               |
| 218 | znodoWUD         | "CSP_DIRECCIONES_WIW"                                                   | CSP_DIRECCIONES_WIW                                                                                         |
| 220 | zmetodocarga     | zsubsesion + "!CSP_WHO_IS_WHO.CSP_BUSQUEDA"                             | CSP_WHO_IS_WHO{"!CSP_WHO_IS_WHO.CSP_BUSQUEDA"}                                                              |
| 222 | zoutputdefWU     | zsubsesion + "!" + znodoWU + "[*]"                                      | CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[*]"}                                                                      |
| 223 | zmoveWU          | znodoWU + ":" + znodoWU + "[FIRST]"                                     | CSP_UNID_WIW{":"}CSP_UNID_WIW{"[FIRST]"}                                                                    |
| 224 | ziteratorWU      | znodoWU + ":" + zsubsesion + "!" + znodoWU                              | CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW                                                            |
| 225 | zlecturaWU       | zsubsesion + "!" + znodoWU                                              | CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW                                                                             |
| 226 | zraizWU          | zsubsesion + "!" + znodoWU + "."                                        | CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"."}                                                                        |
| 228 | zcomunWU         | znodoWU + ":" + zsubsesion + "!" + znodoWU + "[&amp;VAR.m4lix]" + "."   | CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}                                   |
| 230 | zIdWunit         | zcomunWU +"STD_ID_WORK_UNIT"                                            | CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_ID_WORK_UNIT                   |
| 231 | zNWunit          | zcomunWU +"STD_N_WORK_UNIT"                                             | CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_N_WORK_UNIT                    |
| 232 | zTypeWunit       | zcomunWU +"STD_ID_WORK_UNIT_TYPE"                                       | CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_ID_WORK_UNIT_TYPE              |
| 233 | zIdParentWunit   | zcomunWU +"STD_ID_WORK_UNIT_PARENT"                                     | CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_ID_WORK_UNIT_PARENT            |
| 235 | zoutputdefWL     | zsubsesion + "!" + znodoWL + "[*]"                                      | CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[*]"}                                                                        |
| 236 | zmoveWL          | znodoWL + ":" + znodoWL + "[FIRST]"                                     | CSP_WL_WIW{":"}CSP_WL_WIW{"[FIRST]"}                                                                        |
| 237 | ziteratorWL      | znodoWL + ":" + zsubsesion + "!" + znodoWL                              | CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW                                                                |
| 238 | zlecturaWL       | zsubsesion + "!" + znodoWL                                              | CSP_WHO_IS_WHO{"!"}CSP_WL_WIW                                                                               |
| 239 | zraizWL          | zsubsesion + "!" + znodoWL + "."                                        | CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"."}                                                                          |
| 241 | zcomunWL         | znodoWL + ":" + zsubsesion + "!" + znodoWL + "[&amp;VAR.m4lix]" + "."   | CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[&amp;VAR.m4lix]"}{"."}                                       |
| 243 | zIdWlocat        | zcomunWL + "STD_ID_WORK_LOCATION"                                       | CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}               |
| 244 | zIdNWlocat       | zcomunWL + "STD_N_WORK_LOCATION"                                        | CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}                |
| 245 | zIdTypeWlocat    | zcomunWL + "STD_ID_WL_TYPE"                                             | CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WL_TYPE"}                     |
| 247 | zoutputdefORO    | zsubsesion + "!" + znodoORO + "[*]"                                     | CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[*]"}                                                                     |
| 248 | zmoveORO         | znodoORO + ":" + znodoORO + "[FIRST]"                                   | CSP_DATOS_ORO{":"}CSP_DATOS_ORO{"[FIRST]"}                                                                  |
| 249 | ziteratorORO     | znodoORO + ":" + zsubsesion + "!" + znodoORO                            | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO                                                          |
| 250 | zlecturaORO      | zsubsesion + "!" + znodoORO                                             | CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO                                                                            |
| 251 | zraizORO         | zsubsesion + "!" + znodoORO + "."                                       | CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"."}                                                                       |
| 253 | zcomunORO        | znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "." | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}                                 |
| 256 | zNommbreCompleto | zcomunORO + "NOMBRE_COMPLETO"                                           | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}              |
| 257 | zNomCentTrabajo  | zcomunORO + "N_CENTRO_TRABAJO"                                          | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}             |
| 258 | zDirCentTrabajo  | zcomunORO + "DIR_CENTRO_TRABAJO"                                        | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}           |
| 259 | zNomDireccion    | zcomunORO + "N_DIRECCION"                                               | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}                  |
| 260 | zNomPuesto       | zcomunORO + "N_PUESTO"                                                  | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}                     |
| 261 | zIdCentroTrab    | zcomunORO + "ID_CENTRO_TRABAJO"                                         | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}            |
| 265 | zIdDireccion     | zcomunORO + "ID_DIRECCION"                                              | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_DIRECCION"}                 |
| 266 | zIdArea          | zcomunORO + "ID_AREA"                                                   | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}                      |
| 267 | zIdPuesto        | zcomunORO + "ID_PUESTO"                                                 | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}                    |
| 269 | zoutputdefJOB    | zsubsesion + "!" + znodoJOB + "[*]"                                     | CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"[*]"}                                                                       |
| 270 | zmoveJOB         | znodoJOB + ":" + znodoJOB + "[FIRST]"                                   | CSP_JOB_WIW{":"}CSP_JOB_WIW{"[FIRST]"}                                                                      |
| 271 | ziteratorJOB     | znodoJOB + ":" + zsubsesion + "!" + znodoJOB                            | CSP_JOB_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW                                                              |
| 272 | zlecturaJOB      | zsubsesion + "!" + znodoJOB                                             | CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW                                                                              |
| 273 | zraizJOB         | zsubsesion + "!" + znodoJOB + "."                                       | CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"."}                                                                         |
| 275 | zcomunJOB        | znodoJOB + ":" + zsubsesion + "!" + znodoJOB + "[&amp;VAR.m4lix]" + "." | CSP_JOB_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"[&amp;VAR.m4lix]"}{"."}                                     |
| 278 | zIdJob           | zcomunJOB + "STD_ID_JOB_CODE"                                           | CSP_JOB_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_JOB_CODE"}                  |
| 279 | zNJob            | zcomunJOB + "STD_N_JOB_CODE"                                            | CSP_JOB_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                   |
| 281 | zoutputdefWUA    | zsubsesion + "!" + znodoWUA + "[*]"                                     | CSP_WHO_IS_WHO{"!"}CSP_AREAS_WIW{"[*]"}                                                                     |
| 282 | zmoveWUA         | znodoWUA + ":" + znodoWUA + "[FIRST]"                                   | CSP_AREAS_WIW{":"}CSP_AREAS_WIW{"[FIRST]"}                                                                  |
| 283 | ziteratorWUA     | znodoWUA + ":" + zsubsesion + "!" + znodoWUA                            | CSP_AREAS_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_AREAS_WIW                                                          |
| 284 | zlecturaWUA      | zsubsesion + "!" + znodoWUA                                             | CSP_WHO_IS_WHO{"!"}CSP_AREAS_WIW                                                                            |
| 285 | zraizWUA         | zsubsesion + "!" + znodoWUA + "."                                       | CSP_WHO_IS_WHO{"!"}CSP_AREAS_WIW{"."}                                                                       |
| 287 | zcomunWUA        | znodoWUA + ":" + zsubsesion + "!" + znodoWUA + "[&amp;VAR.m4lix]" + "." | CSP_AREAS_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_AREAS_WIW{"[&amp;VAR.m4lix]"}{"."}                                 |
| 289 | zIdWunitA        | zcomunWUA + "STD_ID_WORK_UNIT_CHILD"                                    | CSP_AREAS_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_AREAS_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_CHILD"}       |
| 290 | zNWunitA         | zcomunWUA + "STD_N_WORK_UNIT"                                           | CSP_AREAS_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_AREAS_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}              |
| 292 | zoutputdefWUD    | zsubsesion + "!" + znodoWUD + "[*]"                                     | CSP_WHO_IS_WHO{"!"}CSP_DIRECCIONES_WIW{"[*]"}                                                               |
| 293 | zmoveWUD         | znodoWUD + ":" + znodoWUD + "[FIRST]"                                   | CSP_DIRECCIONES_WIW{":"}CSP_DIRECCIONES_WIW{"[FIRST]"}                                                      |
| 294 | ziteratorWUD     | znodoWUD + ":" + zsubsesion + "!" + znodoWUD                            | CSP_DIRECCIONES_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_DIRECCIONES_WIW                                              |
| 295 | zlecturaWUD      | zsubsesion + "!" + znodoWUD                                             | CSP_WHO_IS_WHO{"!"}CSP_DIRECCIONES_WIW                                                                      |
| 296 | zraizWUD         | zsubsesion + "!" + znodoWUD + "."                                       | CSP_WHO_IS_WHO{"!"}CSP_DIRECCIONES_WIW{"."}                                                                 |
| 298 | zcomunWUD        | znodoWUD + ":" + zsubsesion + "!" + znodoWUD + "[&amp;VAR.m4lix]" + "." | CSP_DIRECCIONES_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_DIRECCIONES_WIW{"[&amp;VAR.m4lix]"}{"."}                     |
| 300 | zIdWunitD        | zcomunWUD + "STD_ID_WORK_UNIT"                                          | CSP_DIRECCIONES_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_DIRECCIONES_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"} |
| 301 | zNWunitD         | zcomunWUD + "STD_N_WORK_UNIT"                                           | CSP_DIRECCIONES_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_DIRECCIONES_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}  |
| 342 | zcountiWU        | 0                                                                       | 0                                                                                                           |
| 343 | zcountiWL        | 0                                                                       | 0                                                                                                           |
| 344 | zcountiORO       | 0                                                                       | 0                                                                                                           |
| 345 | zcountiJOB       | 0                                                                       | 0                                                                                                           |
| 346 | zcountiWUD       | 0                                                                       | 0                                                                                                           |
| 347 | zcountiWUA       | 0                                                                       | 0                                                                                                           |
| 362 | zcountvWU        | String.valueOf(zcountiWU)                                               | String.valueOf(zcountiWU)                                                                                   |
| 363 | zcountvWL        | String.valueOf(zcountiWL)                                               | String.valueOf(zcountiWL)                                                                                   |
| 364 | zcountvORO       | String.valueOf(zcountiORO)                                              | String.valueOf(zcountiORO)                                                                                  |
| 365 | zcountvJOB       | String.valueOf(zcountiJOB)                                              | String.valueOf(zcountiJOB)                                                                                  |
| 366 | zcountvWUA       | String.valueOf(zcountiWUA)                                              | String.valueOf(zcountiWUA)                                                                                  |
| 367 | zcountvWUD       | String.valueOf(zcountiWUD)                                              | String.valueOf(zcountiWUD)                                                                                  |
| 393 | zposicions2      | "0"                                                                     | 0                                                                                                           |
| 394 | zposicion2       | 0                                                                       | 0                                                                                                           |
| 417 | zposicions2      | "0"                                                                     | 0                                                                                                           |
| 418 | zposicion2       | 0                                                                       | 0                                                                                                           |
| 438 | zposicions2      | "0"                                                                     | 0                                                                                                           |
| 439 | zposicion2       | 0                                                                       | 0                                                                                                           |
| 461 | zposicions2      | "0"                                                                     | 0                                                                                                           |
| 462 | zposicion2       | 0                                                                       | 0                                                                                                           |
| 488 | zposicions2      | "0"                                                                     | 0                                                                                                           |
| 489 | zposicion2       | 0                                                                       | 0                                                                                                           |
| 545 | zposicions2      | "0"                                                                     | 0                                                                                                           |
| 546 | zposicion2       | 0                                                                       | 0                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                               |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 307 | m4:startpage | m4task=CSP_WHO_IS_WHO                                                                                                            |
| 309 | m4:beginjob  |                                                                                                                                  |
| 310 | m4:datadef   | m4o=CSP_WHO_IS_WHO; m4name=CSP_WHO_IS_WHO                                                                                        |
| 320 | m4:exec      | m4method=CSP_WHO_IS_WHO{"!CSP_WHO_IS_WHO.CSP_BUSQUEDA"}                                                                          |
| 322 | m4:outputdef | m4alias=CSP_UNID_WIW                                                                                                             |
| 322 | m4:param     | name=m4name0; value=CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[*]"}                                                                       |
| 323 | m4:outputdef | m4alias=CSP_WL_WIW                                                                                                               |
| 323 | m4:param     | name=m4name0; value=CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[*]"}                                                                         |
| 324 | m4:outputdef | m4alias=CSP_DATOS_ORO                                                                                                            |
| 324 | m4:param     | name=m4name0; value=CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[*]"}                                                                      |
| 325 | m4:outputdef | m4alias=CSP_JOB_WIW                                                                                                              |
| 325 | m4:param     | name=m4name0; value=CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"[*]"}                                                                        |
| 326 | m4:outputdef | m4alias=CSP_AREAS_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_AREAS_WIW{"[&amp;VAR.m4lix]"}{"."}                                              |
| 326 | m4:param     | name=m4name0; value=CSP_WHO_IS_WHO{"!"}CSP_AREAS_WIW{"[*]"}                                                                      |
| 327 | m4:outputdef | m4alias=CSP_DIRECCIONES_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_DIRECCIONES_WIW{"[&amp;VAR.m4lix]"}{"."}                                  |
| 327 | m4:param     | name=m4name0; value=CSP_WHO_IS_WHO{"!"}CSP_DIRECCIONES_WIW{"[*]"}                                                                |
| 329 | m4:endjob    |                                                                                                                                  |
| 331 | m4:move      |                                                                                                                                  |
| 331 | m4:param     | name=CSP_WHO_IS_WHO; value=CSP_UNID_WIW{":"}CSP_UNID_WIW{"[FIRST]"}                                                              |
| 332 | m4:move      |                                                                                                                                  |
| 332 | m4:param     | name=CSP_WHO_IS_WHO; value=CSP_WL_WIW{":"}CSP_WL_WIW{"[FIRST]"}                                                                  |
| 333 | m4:move      |                                                                                                                                  |
| 333 | m4:param     | name=CSP_WHO_IS_WHO; value=CSP_DATOS_ORO{":"}CSP_DATOS_ORO{"[FIRST]"}                                                            |
| 334 | m4:move      |                                                                                                                                  |
| 334 | m4:param     | name=CSP_WHO_IS_WHO; value=CSP_JOB_WIW{":"}CSP_JOB_WIW{"[FIRST]"}                                                                |
| 335 | m4:move      |                                                                                                                                  |
| 335 | m4:param     | name=CSP_WHO_IS_WHO; value=CSP_AREAS_WIW                                                                                         |
| 336 | m4:move      |                                                                                                                                  |
| 336 | m4:param     | name=CSP_WHO_IS_WHO; value=CSP_DIRECCIONES_WIW                                                                                   |
| 396 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                                          |
| 402 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true             |
| 420 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWUD).intValue()-1).toString()                                                          |
| 426 | m4:item      | m4name=CSP_DIRECCIONES_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_DIRECCIONES_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true |
| 443 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWL).intValue()-1).toString()                                                           |
| 449 | m4:item      | m4name=CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}; htmlsafe=true              |
| 449 | m4:item      | m4name=CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}; htmlsafe=true               |
| 466 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWU).intValue()-1).toString()                                                           |
| 473 | m4:item      | m4name=CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_ID_WORK_UNIT_PARENT; htmlsafe=true           |
| 473 | m4:item      | m4name=CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_N_WORK_UNIT; htmlsafe=true                   |
| 491 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvJOB).intValue()-1).toString()                                                          |
| 498 | m4:item      | m4name=CSP_JOB_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                  |
| 537 | m4:label     | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true             |
| 538 | m4:label     | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true            |
| 539 | m4:label     | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}; htmlsafe=true          |
| 540 | m4:label     | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true                 |
| 541 | m4:label     | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true                    |
| 548 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                                          |
| 554 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}; htmlsafe=true                     |
| 554 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}; htmlsafe=true                   |
| 554 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true             |
| 554 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}; htmlsafe=true           |
| 555 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true             |
| 556 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true            |
| 557 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}; htmlsafe=true          |
| 558 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true                 |
| 559 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true                    |
| 574 | m4:endpage   |                                                                                                                                  |

| L   | Operación | Argumentos literales                      |
| --- | --------- | ----------------------------------------- |
| 315 | setItem   | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 353 | getCount  | znodoWU,zsubsesion,znodoWU                |
| 354 | getCount  | znodoWL,zsubsesion,znodoWL                |
| 355 | getCount  | znodoORO,zsubsesion,znodoORO              |
| 356 | getCount  | znodoJOB,zsubsesion,znodoJOB              |
| 357 | getCount  | znodoWUA,zsubsesion,znodoWUA              |
| 358 | getCount  | znodoWUD,zsubsesion,znodoWUD              |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 131 | filtrarColumna | nombre     |

| L   | Condición / acción / mensaje literal                                                                                              |
| --- | --------------------------------------------------------------------------------------------------------------------------------- |
| 48  | if($(this).val().substring(2,3) != "D") {                                                                                         |
| 51  | if($(this).val()=="00") {                                                                                                         |
| 57  | if($(this).val() != "") {$(this).hide();}                                                                                         |
| 61  | if($(this).val().indexOf("1") &gt; 0) {$(this).hide();}                                                                           |
| 84  | if($(this).val() != "") {                                                                                                         |
| 86  | }else{                                                                                                                            |
| 92  | if($(this).val().substring(5,largo) == str) {                                                                                     |
| 135 | if ((nombre) &amp;&amp; (nombre!="00")){                                                                                          |
| 137 | if(visibles){                                                                                                                     |
| 143 | if (id.indexOf(nombre) &gt; 0){                                                                                                   |
| 145 | } else {                                                                                                                          |
| 150 | }else{                                                                                                                            |
| 156 | if (id.indexOf(nombre) &gt; 0){                                                                                                   |
| 158 | }else {                                                                                                                           |
| 168 | if(visibles &gt; 0) {                                                                                                             |
| 173 | } else {                                                                                                                          |
| 183 | if(nombre){filtrarColumna(nombre);}                                                                                               |
| 186 | if(direccion){filtrarColumna(direccion.substring(direccion.indexOf('-')+1,direccion.length));}                                    |
| 187 | if(centro){filtrarColumna(centrobusqueda);}                                                                                       |
| 188 | if(area){filtrarColumna(area);}                                                                                                   |
| 189 | if(puesto){filtrarColumna(puesto);}                                                                                               |
| 392 | if (zcountiORO &gt; 0) {                                                                                                          |
| 416 | if (zcountiWUD &gt; 0) {                                                                                                          |
| 437 | if (zcountiWL &gt; 0) {                                                                                                           |
| 460 | if (zcountiWU &gt; 0) {                                                                                                           |
| 487 | if (zcountiJOB &gt; 0) {                                                                                                          |
| 544 | if (zcountiORO &gt; 0) {                                                                                                          |
| 121 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "Nombre : " + nombre + "\n";                       |
| 122 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "Direccion : " + direccion + "\n";                 |
| 123 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "Centro : " + centro + "\n";                       |
| 124 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "Area : " + area + "\n";                           |
| 125 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "Puesto : " + puesto + "\n";                       |
| 126 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "direccionbusqueda : " + direccionbusqueda + "\n"; |
| 127 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "centrobusqueda : " + centrobusqueda + "\n";       |
| 209 | expresión de cálculo/transformación: String sPathTempURI = m4Session.getUserTempURI() + '/';                                      |
| 220 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_WHO_IS_WHO.CSP_BUSQUEDA";                           |
| 222 | expresión de cálculo/transformación: String zoutputdefWU = zsubsesion + "!" + znodoWU + "[*]";                                    |
| 223 | expresión de cálculo/transformación: String zmoveWU = znodoWU + ":" + znodoWU + "[FIRST]";                                        |
| 224 | expresión de cálculo/transformación: String ziteratorWU = znodoWU + ":" + zsubsesion + "!" + znodoWU;                             |
| 225 | expresión de cálculo/transformación: String zlecturaWU = zsubsesion + "!" + znodoWU;                                              |
| 226 | expresión de cálculo/transformación: String zraizWU = zsubsesion + "!" + znodoWU + ".";                                           |
| 228 | expresión de cálculo/transformación: String zcomunWU = znodoWU + ":" + zsubsesion + "!" + znodoWU + "[&amp;VAR.m4lix]" + ".";     |
| 235 | expresión de cálculo/transformación: String zoutputdefWL = zsubsesion + "!" + znodoWL + "[*]";                                    |
| 236 | expresión de cálculo/transformación: String zmoveWL = znodoWL + ":" + znodoWL + "[FIRST]";                                        |
| 237 | expresión de cálculo/transformación: String ziteratorWL = znodoWL + ":" + zsubsesion + "!" + znodoWL;                             |
| 238 | expresión de cálculo/transformación: String zlecturaWL = zsubsesion + "!" + znodoWL;                                              |
| 239 | expresión de cálculo/transformación: String zraizWL = zsubsesion + "!" + znodoWL + ".";                                           |
| 241 | expresión de cálculo/transformación: String zcomunWL = znodoWL + ":" + zsubsesion + "!" + znodoWL + "[&amp;VAR.m4lix]" + ".";     |
| 243 | expresión de cálculo/transformación: String zIdWlocat = zcomunWL + "STD_ID_WORK_LOCATION";                                        |
| 244 | expresión de cálculo/transformación: String zIdNWlocat = zcomunWL + "STD_N_WORK_LOCATION";                                        |
| 245 | expresión de cálculo/transformación: String zIdTypeWlocat = zcomunWL + "STD_ID_WL_TYPE";                                          |
| 247 | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                  |
| 248 | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                     |
| 249 | expresión de cálculo/transformación: String ziteratorORO = znodoORO + ":" + zsubsesion + "!" + znodoORO;                          |
| 250 | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + znodoORO;                                            |
| 251 | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + znodoORO + ".";                                         |
| 253 | expresión de cálculo/transformación: String zcomunORO = znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + ".";  |
| 256 | expresión de cálculo/transformación: String zNommbreCompleto = zcomunORO + "NOMBRE_COMPLETO";                                     |
| 257 | expresión de cálculo/transformación: String zNomCentTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                     |
| 258 | expresión de cálculo/transformación: String zDirCentTrabajo = zcomunORO + "DIR_CENTRO_TRABAJO";                                   |
| 259 | expresión de cálculo/transformación: String zNomDireccion = zcomunORO + "N_DIRECCION";                                            |
| 260 | expresión de cálculo/transformación: String zNomPuesto = zcomunORO + "N_PUESTO";                                                  |
| 261 | expresión de cálculo/transformación: String zIdCentroTrab = zcomunORO + "ID_CENTRO_TRABAJO";                                      |
| 265 | expresión de cálculo/transformación: String zIdDireccion = zcomunORO + "ID_DIRECCION";                                            |
| 266 | expresión de cálculo/transformación: String zIdArea = zcomunORO + "ID_AREA";                                                      |
| 267 | expresión de cálculo/transformación: String zIdPuesto = zcomunORO + "ID_PUESTO";                                                  |
| 269 | expresión de cálculo/transformación: String zoutputdefJOB = zsubsesion + "!" + znodoJOB + "[*]";                                  |
| 270 | expresión de cálculo/transformación: String zmoveJOB = znodoJOB + ":" + znodoJOB + "[FIRST]";                                     |
| 271 | expresión de cálculo/transformación: String ziteratorJOB = znodoJOB + ":" + zsubsesion + "!" + znodoJOB;                          |
| 272 | expresión de cálculo/transformación: String zlecturaJOB = zsubsesion + "!" + znodoJOB;                                            |
| 273 | expresión de cálculo/transformación: String zraizJOB = zsubsesion + "!" + znodoJOB + ".";                                         |
| 275 | expresión de cálculo/transformación: String zcomunJOB = znodoJOB + ":" + zsubsesion + "!" + znodoJOB + "[&amp;VAR.m4lix]" + ".";  |
| 278 | expresión de cálculo/transformación: String zIdJob = zcomunJOB + "STD_ID_JOB_CODE";                                               |
| 279 | expresión de cálculo/transformación: String zNJob = zcomunJOB + "STD_N_JOB_CODE";                                                 |
| 281 | expresión de cálculo/transformación: String zoutputdefWUA = zsubsesion + "!" + znodoWUA + "[*]";                                  |
| 282 | expresión de cálculo/transformación: String zmoveWUA = znodoWUA + ":" + znodoWUA + "[FIRST]";                                     |
| 283 | expresión de cálculo/transformación: String ziteratorWUA = znodoWUA + ":" + zsubsesion + "!" + znodoWUA;                          |
| 284 | expresión de cálculo/transformación: String zlecturaWUA = zsubsesion + "!" + znodoWUA;                                            |
| 285 | expresión de cálculo/transformación: String zraizWUA = zsubsesion + "!" + znodoWUA + ".";                                         |
| 287 | expresión de cálculo/transformación: String zcomunWUA = znodoWUA + ":" + zsubsesion + "!" + znodoWUA + "[&amp;VAR.m4lix]" + ".";  |
| 289 | expresión de cálculo/transformación: String zIdWunitA = zcomunWUA + "STD_ID_WORK_UNIT_CHILD";                                     |
| 290 | expresión de cálculo/transformación: String zNWunitA = zcomunWUA + "STD_N_WORK_UNIT";                                             |
| 292 | expresión de cálculo/transformación: String zoutputdefWUD = zsubsesion + "!" + znodoWUD + "[*]";                                  |
| 293 | expresión de cálculo/transformación: String zmoveWUD = znodoWUD + ":" + znodoWUD + "[FIRST]";                                     |
| 294 | expresión de cálculo/transformación: String ziteratorWUD = znodoWUD + ":" + zsubsesion + "!" + znodoWUD;                          |
| 295 | expresión de cálculo/transformación: String zlecturaWUD = zsubsesion + "!" + znodoWUD;                                            |
| 296 | expresión de cálculo/transformación: String zraizWUD = zsubsesion + "!" + znodoWUD + ".";                                         |
| 298 | expresión de cálculo/transformación: String zcomunWUD = znodoWUD + ":" + zsubsesion + "!" + znodoWUD + "[&amp;VAR.m4lix]" + ".";  |
| 300 | expresión de cálculo/transformación: String zIdWunitD = zcomunWUD + "STD_ID_WORK_UNIT";                                           |
| 301 | expresión de cálculo/transformación: String zNWunitD = zcomunWUD + "STD_N_WORK_UNIT";                                             |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                        |
| --- | -------------------------------------------------------- |
| 34  | /css/estilo_sse.css                                      |
| 35  | /css/style_persdata.css                                  |
| 37  | /library/jquery.js                                       |
| 379 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp |
| 382 | /iconos/infos.gif                                        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                               | Resolución | Ficha / candidato                                                                                                              |
| ------ | --- | -------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 37  | /library/jquery.js                                       | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                         |
| COLL   | 379 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp | contextual | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md); [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md) |
| CYC    | 37  | /library/jquery.js                                       | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                          |
| CYC    | 379 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp | contextual | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md); [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md) |
| IBER   | 37  | /library/jquery.js                                       | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                         |
| IBER   | 379 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp | contextual | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md); [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_g0_who_is_who_23032015.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
