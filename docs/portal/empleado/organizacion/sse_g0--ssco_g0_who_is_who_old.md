# Quién es Quién

Identificador: `sse_g0/ssco_g0_who_is_who_old.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/sse_g0/ssco_g0_who_is_who_old.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/ssco_g0_who_is_who_old.jsp) | `5aa69570d6e4fdb1f9d46eeebd172cf7e902874cf54f574a8507e3c23f56b972` |    578 |
| CYC / compartido  | [m4custom/CYC/sse_g0/ssco_g0_who_is_who_old.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/ssco_g0_who_is_who_old.jsp)   | `e02ad833d44f5c8bec1ff9bfce4e0db896f8a6bb8115076aa76b3109422c9d10` |    584 |
| IBER / compartido | [m4custom/IBER/sse_g0/ssco_g0_who_is_who_old.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g0/ssco_g0_who_is_who_old.jsp) | `5aa69570d6e4fdb1f9d46eeebd172cf7e902874cf54f574a8507e3c23f56b972` |    578 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_g0/ssco_g0_who_is_who_old.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/ssco_g0_who_is_who_old.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta       |
| --- | ------------------------------ |
| 41  | Quién es Quién                 |
| 329 | Empleados                      |
| 333 | Nombre                         |
| 358 | Dirección / D. Territorial     |
| 359 | Seleccione Dirección "&gt;     |
| 395 | Centro de Trabajo              |
| 396 | Seleccione Centro - "&gt;      |
| 418 | Área / Sucursal                |
| 419 | Seleccione Área/Sucursal "&gt; |
| 443 | Puesto                         |
| 444 | Seleccione Puesto "&gt;        |
| 506 | Apellidos y Nombre             |
| 507 | Centro de trabajo              |
| 508 | Dirección                      |
| 509 | Unidad Organizativa            |
| 510 | Puesto                         |
| 520 | "/&gt; "/&gt;                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                     |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 312 | form    | id=filtroAreas; name=filtroAreas; method=post; action=ssco_g0_who_is_who.jsp                                                  |
| 313 | input   | type=hidden; id=direccionArea; name=direccionArea; value=                                                                     |
| 317 | form    | id=filtroBusqueda; name=filtroBusqueda; method=post; action=ssco_g0_who_is_who.jsp; accept-charset=ISO-8859-1                 |
| 318 | input   | type=hidden; id=direccion; name=direccion; value=                                                                             |
| 319 | input   | type=hidden; id=nombreCompleto; name=nombreCompleto; value=                                                                   |
| 320 | input   | type=hidden; id=area; name=area; value=                                                                                       |
| 321 | input   | type=hidden; id=puesto; name=puesto; value=                                                                                   |
| 322 | input   | type=hidden; id=idcentro; name=idcentro; value=                                                                               |
| 323 | input   | type=hidden; id=centro; name=centro; value=                                                                                   |
| 324 | input   | type=hidden; id=busqueda; name=busqueda; value=1                                                                              |
| 329 | img     | src=/iconos/infos.gif                                                                                                         |
| 336 | input   | type=text; name=nombre; id=nombre; value=&lt;%=nombreCompleto%&gt;; onkeypress=return AddKeyPress(event);; style=width: 450px |
| 360 | select  | name=Direcciones; id=Direcciones; style=width: 450px                                                                          |
| 361 | option  | value=00; selected=presente; confirmar condición si dinámico                                                                  |
| 374 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                      |
| 397 | select  | name=CentrosTrabajo; id=CentrosTrabajo; style=width: 450px                                                                    |
| 398 | option  | value=00                                                                                                                      |
| 410 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                      |
| 420 | select  | name=Areas; id=Areas; style=width: 450px                                                                                      |
| 421 | option  | value=                                                                                                                        |
| 434 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                      |
| 446 | select  | name=puestos; id=puestos; style=width: 450px                                                                                  |
| 447 | option  | value=00                                                                                                                      |
| 460 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                      |
| 471 | input   | name=button; type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028;                                 |

```
						background-repeat: no-repeat;
						border: 1px solid #DC0028;
						border-radius: 4px;
						color: #FFFFFF;
						margin: 10px;
						max-width: 150px;
						min-height: 30px;
						min-width: 110px;; value=Búsqueda |
```

| 522 | form | id=datosCargadosFiltro&lt;%=zposicions2%&gt;; name=datosCargadosFiltro&lt;%=zposicions2%&gt;; method=post; target=_blank; action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp |
| 524 | input | type=hidden; id=empleado; name=empleado; value=&lt;m4:item m4name=; htmlsafe=true |
| 525 | input | type=hidden; id=empleado; name=uniraiz; value=&lt;m4:item m4name=; htmlsafe=true |
| 526 | input | type=hidden; id=nombresele; name=nombresele; value=&lt;%=nombreCompleto%&gt; |
| 527 | input | type=hidden; id=direcsele; name=direcsele; value=&lt;%=dirbusqueda%&gt; |
| 528 | input | type=hidden; id=idcentrosele; name=idcentrosele; value=&lt;%=idcentro%&gt; |
| 529 | input | type=hidden; id=centrosele; name=centrosele; value=&lt;%=centro%&gt; |
| 530 | input | type=hidden; id=areasele; name=areasele; value=&lt;%=area%&gt; |
| 531 | input | type=hidden; id=puestosele; name=puestosele; value=&lt;%=puesto%&gt; |
| 533 | a | id=ficha; alt=Consultar ficha del empleado; href=javascript:m4submit('datosCargadosFiltro&lt;%=zposicions2%&gt;') |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                         |
| --- | --------------- | -------------------------------------- |
| 93  | direccionArea   | getParameter(request,"direccionArea")  |
| 94  | direccion       | getParameter(request,"direccion")      |
| 95  | nombreCompleto  | getParameter(request,"nombreCompleto") |
| 96  | area            | getParameter(request,"area")           |
| 97  | puesto          | getParameter(request,"puesto")         |
| 98  | idcentro        | getParameter(request,"idcentro")       |
| 99  | centro          | getParameter(request,"centro")         |
| 100 | busqueda        | getParameter(request,"busqueda")       |

| L   | Variable         | Expresión fuente                                                          | Resolución estática parcial                                                                                |
| --- | ---------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 93  | direccion        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccionArea") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccionArea")                                  |
| 94  | dirbusqueda      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")                                      |
| 96  | area             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")                                           |
| 97  | puesto           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")                                         |
| 98  | idcentro         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idcentro")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idcentro")                                       |
| 99  | centro           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"centro")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"centro")                                         |
| 100 | busqueda         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda")                                       |
| 110 | zsubsesion       | "CSP_QUIEN_ES_QUIEN"                                                      | CSP_QUIEN_ES_QUIEN                                                                                         |
| 111 | zmeta4object     | "CSP_QUIEN_ES_QUIEN"                                                      | CSP_QUIEN_ES_QUIEN                                                                                         |
| 112 | znodoWU          | "CSP_UNID_AREA"                                                           | CSP_UNID_AREA                                                                                              |
| 113 | znodoWL          | "CSP_CENTROS"                                                             | CSP_CENTROS                                                                                                |
| 114 | znodoORO         | "CSP_ORO"                                                                 | CSP_ORO                                                                                                    |
| 115 | znodoJOB         | "CSP_PUESTOS"                                                             | CSP_PUESTOS                                                                                                |
| 116 | znodoWUD         | "CSP_UNID_DIRE"                                                           | CSP_UNID_DIRE                                                                                              |
| 118 | zmetodocarga     | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"                     | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"}                                               |
| 120 | zoutputdefWU     | zsubsesion + "!" + znodoWU + "[*]"                                        | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[*]"}                                                                |
| 121 | zmoveWU          | znodoWU + ":" + znodoWU + "[FIRST]"                                       | CSP_UNID_AREA{":"}CSP_UNID_AREA{"[FIRST]"}                                                                 |
| 122 | ziteratorWU      | znodoWU + ":" + zsubsesion + "!" + znodoWU                                | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA                                                     |
| 123 | zlecturaWU       | zsubsesion + "!" + znodoWU                                                | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA                                                                       |
| 124 | zraizWU          | zsubsesion + "!" + znodoWU + "."                                          | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"."}                                                                  |
| 126 | zcomunWU         | znodoWU + ":" + zsubsesion + "!" + znodoWU + "[&amp;VAR.m4lix]" + "."     | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}                            |
| 128 | zIdWunit         | zcomunWU + "STD_ID_WORK_UNIT_CHILD"                                       | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_CHILD"}  |
| 129 | zNWunit          | zcomunWU + "STD_N_WORK_UNIT"                                              | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}         |
| 130 | zTypeWunit       | zcomunWU + "STD_ID_WORK_UNIT_TYPE"                                        | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_TYPE"}   |
| 131 | zIdParentWunit   | zcomunWU + "STD_ID_WORK_UNIT_PARENT"                                      | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_PARENT"} |
| 133 | zoutputdefWL     | zsubsesion + "!" + znodoWL + "[*]"                                        | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[*]"}                                                                  |
| 134 | zmoveWL          | znodoWL + ":" + znodoWL + "[FIRST]"                                       | CSP_CENTROS{":"}CSP_CENTROS{"[FIRST]"}                                                                     |
| 135 | ziteratorWL      | znodoWL + ":" + zsubsesion + "!" + znodoWL                                | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS                                                         |
| 136 | zlecturaWL       | zsubsesion + "!" + znodoWL                                                | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS                                                                         |
| 137 | zraizWL          | zsubsesion + "!" + znodoWL + "."                                          | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"."}                                                                    |
| 139 | zcomunWL         | znodoWL + ":" + zsubsesion + "!" + znodoWL + "[&amp;VAR.m4lix]" + "."     | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}                                |
| 141 | zIdWlocat        | zcomunWL + "STD_ID_WORK_LOCATION"                                         | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}        |
| 142 | zIdNWlocat       | zcomunWL + "STD_N_WORK_LOCATION"                                          | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}         |
| 143 | zIdTypeWlocat    | zcomunWL + "STD_ID_WL_TYPE"                                               | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WL_TYPE"}              |
| 145 | zoutputdefORO    | zsubsesion + "!" + znodoORO + "[*]"                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[*]"}                                                                      |
| 146 | zmoveORO         | znodoORO + ":" + znodoORO + "[FIRST]"                                     | CSP_ORO{":"}CSP_ORO{"[FIRST]"}                                                                             |
| 147 | ziteratorORO     | znodoORO + ":" + zsubsesion + "!" + znodoORO                              | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO                                                                 |
| 148 | zlecturaORO      | zsubsesion + "!" + znodoORO                                               | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO                                                                             |
| 149 | zraizORO         | zsubsesion + "!" + znodoORO + "."                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"."}                                                                        |
| 151 | zcomunORO        | znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "."   | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}                                        |
| 154 | zNommbreCompleto | zcomunORO + "SCO_GB_NAME"                                                 | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                         |
| 155 | zNomCentTrabajo  | zcomunORO + "N_CENTRO_TRABAJO"                                            | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}                    |
| 156 | zDirCentTrabajo  | zcomunORO + "DIR_CENTRO_TRABAJO"                                          | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}                  |
| 157 | zNomDireccion    | zcomunORO + "N_DIRECCION"                                                 | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}                         |
| 158 | zNomArea         | zcomunORO + "N_AREA"                                                      | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}                              |
| 159 | zNomPuesto       | zcomunORO + "N_PUESTO"                                                    | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}                            |
| 160 | zIdCentroTrab    | zcomunORO + "ID_CENTRO_TRABAJO"                                           | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}                   |
| 161 | zFotoEmpleado    | zcomunORO + "SCO_BLOB_PHOTO"                                              | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_BLOB_PHOTO"}                      |
| 162 | zIdUnidadRaiz    | zcomunORO + "ID_UNIDAD_RAIZ"                                              | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_UNIDAD_RAIZ"}                      |
| 165 | zNUnidadRaiz     | zcomunORO + "N_UNIDAD_RAIZ"                                               | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}                       |
| 168 | zIdDireccion     | zcomunORO + "ID_DIRECCION"                                                | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_DIRECCION"}                        |
| 169 | zIdArea          | zcomunORO + "ID_AREA"                                                     | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}                             |
| 170 | zIdPuesto        | zcomunORO + "ID_PUESTO"                                                   | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}                           |
| 171 | zIdEmpleado      | zcomunORO + "ID_EMPLEADO"                                                 | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_EMPLEADO"}                         |
| 173 | zoutputdefJOB    | zsubsesion + "!" + znodoJOB + "[*]"                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                                  |
| 174 | zmoveJOB         | znodoJOB + ":" + znodoJOB + "[FIRST]"                                     | CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                                                     |
| 175 | ziteratorJOB     | znodoJOB + ":" + zsubsesion + "!" + znodoJOB                              | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS                                                         |
| 176 | zlecturaJOB      | zsubsesion + "!" + znodoJOB                                               | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS                                                                         |
| 177 | zraizJOB         | zsubsesion + "!" + znodoJOB + "."                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"."}                                                                    |
| 179 | zcomunJOB        | znodoJOB + ":" + zsubsesion + "!" + znodoJOB + "[&amp;VAR.m4lix]" + "."   | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}                                |
| 182 | zIdJob           | zcomunJOB + "STD_ID_JOB_CODE"                                             | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_JOB_CODE"}             |
| 183 | zNJob            | zcomunJOB + "STD_N_JOB_CODE"                                              | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}              |
| 186 | zoutputdefWUD    | zsubsesion + "!" + znodoWUD + "[*]"                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[*]"}                                                                |
| 187 | zmoveWUD         | znodoWUD + ":" + znodoWUD + "[FIRST]"                                     | CSP_UNID_DIRE{":"}CSP_UNID_DIRE{"[FIRST]"}                                                                 |
| 188 | ziteratorWUD     | znodoWUD + ":" + zsubsesion + "!" + znodoWUD                              | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE                                                     |
| 189 | zlecturaWUD      | zsubsesion + "!" + znodoWUD                                               | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE                                                                       |
| 190 | zraizWUD         | zsubsesion + "!" + znodoWUD + "."                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"."}                                                                  |
| 192 | zcomunWUD        | znodoWUD + ":" + zsubsesion + "!" + znodoWUD + "[&amp;VAR.m4lix]" + "."   | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}                            |
| 194 | zIdWDunit        | zcomunWUD + "STD_ID_WORK_UNIT"                                            | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"}        |
| 195 | zNWDunit         | zcomunWUD + "STD_N_WORK_UNIT"                                             | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}         |
| 198 | zoutputdefQEQ    | zsubsesion + "!" + zsubsesion + "[*]"                                     | CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                                           |
| 199 | zmoveQEQ         | zsubsesion + ":" + zsubsesion + "[FIRST]"                                 | CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                                                       |
| 268 | zcountiWU        | 0                                                                         | 0                                                                                                          |
| 269 | zcountiWL        | 0                                                                         | 0                                                                                                          |
| 270 | zcountiORO       | 0                                                                         | 0                                                                                                          |
| 271 | zcountiJOB       | 0                                                                         | 0                                                                                                          |
| 272 | zcountiWUD       | 0                                                                         | 0                                                                                                          |
| 284 | zcountvWU        | String.valueOf(zcountiWU)                                                 | String.valueOf(zcountiWU)                                                                                  |
| 285 | zcountvWL        | String.valueOf(zcountiWL)                                                 | String.valueOf(zcountiWL)                                                                                  |
| 286 | zcountvORO       | String.valueOf(zcountiORO)                                                | String.valueOf(zcountiORO)                                                                                 |
| 287 | zcountvJOB       | String.valueOf(zcountiJOB)                                                | String.valueOf(zcountiJOB)                                                                                 |
| 288 | zcountvWUD       | String.valueOf(zcountiWUD)                                                | String.valueOf(zcountiWUD)                                                                                 |
| 291 | esTerritorio     | m.getItem(zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO")            | m.getItem(zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO")                                             |
| 364 | zposicions2      | "0"                                                                       | 0                                                                                                          |
| 365 | zposicion2       | 0                                                                         | 0                                                                                                          |
| 401 | zposicions2      | "0"                                                                       | 0                                                                                                          |
| 402 | zposicion2       | 0                                                                         | 0                                                                                                          |
| 424 | zposicions2      | "0"                                                                       | 0                                                                                                          |
| 425 | zposicion2       | 0                                                                         | 0                                                                                                          |
| 450 | zposicions2      | "0"                                                                       | 0                                                                                                          |
| 451 | zposicion2       | 0                                                                         | 0                                                                                                          |
| 501 | zposicions2      | "0"                                                                       | 0                                                                                                          |
| 502 | zposicion2       | 0                                                                         | 0                                                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                        |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| 206 | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                                                 |
| 208 | m4:beginjob  |                                                                                                                           |
| 209 | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                                         |
| 227 | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"}                                                     |
| 229 | m4:outputdef | m4alias=CSP_QUIEN_ES_QUIEN                                                                                                |
| 229 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                                      |
| 230 | m4:outputdef | m4alias=CSP_UNID_AREA                                                                                                     |
| 230 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[*]"}                                                           |
| 231 | m4:outputdef | m4alias=CSP_CENTROS                                                                                                       |
| 231 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[*]"}                                                             |
| 232 | m4:outputdef | m4alias=CSP_ORO                                                                                                           |
| 232 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[*]"}                                                                 |
| 233 | m4:outputdef | m4alias=CSP_PUESTOS                                                                                                       |
| 233 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                             |
| 234 | m4:outputdef | m4alias=CSP_UNID_DIRE                                                                                                     |
| 234 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[*]"}                                                           |
| 236 | m4:endjob    |                                                                                                                           |
| 238 | m4:move      |                                                                                                                           |
| 238 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                                       |
| 239 | m4:move      |                                                                                                                           |
| 239 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_UNID_AREA{":"}CSP_UNID_AREA{"[FIRST]"}                                                 |
| 240 | m4:move      |                                                                                                                           |
| 240 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CENTROS{":"}CSP_CENTROS{"[FIRST]"}                                                     |
| 241 | m4:move      |                                                                                                                           |
| 241 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_ORO{":"}CSP_ORO{"[FIRST]"}                                                             |
| 242 | m4:move      |                                                                                                                           |
| 242 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                                     |
| 243 | m4:move      |                                                                                                                           |
| 243 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_UNID_DIRE{":"}CSP_UNID_DIRE{"[FIRST]"}                                                 |
| 367 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWUD).intValue()-1).toString()                                                   |
| 374 | m4:item      | m4name=CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true  |
| 404 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWL).intValue()-1).toString()                                                    |
| 410 | m4:item      | m4name=CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}; htmlsafe=true |
| 410 | m4:item      | m4name=CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}; htmlsafe=true  |
| 427 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWU).intValue()-1).toString()                                                    |
| 434 | m4:item      | m4name=CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true  |
| 453 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvJOB).intValue()-1).toString()                                                   |
| 460 | m4:item      | m4name=CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true       |
| 513 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                                   |
| 519 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}; htmlsafe=true                      |
| 519 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}; htmlsafe=true                    |
| 519 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                  |
| 519 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}; htmlsafe=true            |
| 533 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                  |
| 536 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true             |
| 541 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true                  |
| 544 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; htmlsafe=true                       |
| 548 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}; htmlsafe=true                |
| 549 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true                     |
| 570 | m4:endpage   |                                                                                                                           |

| L   | Operación        | Argumentos literales                                |
| --- | ---------------- | --------------------------------------------------- |
| 216 | setItem          | zsubsesion,zsubsesion,"","P_BUSQUEDA",busqueda      |
| 217 | setItem          | zsubsesion,zsubsesion,"","P_DIRECCIONB",dirbusqueda |
| 218 | setItem          | zsubsesion,zsubsesion,"","P_DIRECCION",direccion    |
| 219 | setItem          | zsubsesion,zsubsesion,"","P_AREA",area              |
| 220 | setItem          | zsubsesion,zsubsesion,"","P_NOMBRE",nombreCompleto  |
| 221 | setItem          | zsubsesion,zsubsesion,"","P_PUESTO",puesto          |
| 222 | setItem          | zsubsesion,zsubsesion,"","P_CENTRO",centro          |
| 276 | getCountInClient | znodoWU,zsubsesion,znodoWU                          |
| 277 | getCountInClient | znodoWL,zsubsesion,znodoWL                          |
| 278 | getCountInClient | znodoORO,zsubsesion,znodoORO                        |
| 279 | getCountInClient | znodoJOB,zsubsesion,znodoJOB                        |
| 280 | getCountInClient | znodoWUD,zsubsesion,znodoWUD                        |
| 291 | getItem          | zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función              | Argumentos        |
| --- | -------------------- | ----------------- |
| 52  | AddKeyPress          | e                 |
| 63  | seleccionarDireccion | idDireccion       |
| 76  | seleccionarOpcion    | valor,desplegable |

| L   | Condición / acción / mensaje literal                                                                                             |
| --- | -------------------------------------------------------------------------------------------------------------------------------- |
| 55  | if (e.keyCode == 13) {                                                                                                           |
| 69  | if (options[i].value == idDireccion) {                                                                                           |
| 82  | if (options[i].value == valor) {                                                                                                 |
| 102 | if (nombreCompleto == null) {nombreCompleto="";}                                                                                 |
| 296 | if(direccion != null){                                                                                                           |
| 363 | if (zcountiWUD &gt; 0) {                                                                                                         |
| 380 | &lt;% if (direccion != null) {%&gt;                                                                                              |
| 386 | &lt;% //if (dirbusqueda != null) {%&gt;                                                                                          |
| 400 | if (zcountiWL &gt; 0) {                                                                                                          |
| 423 | if (zcountiWU &gt; 0) {                                                                                                          |
| 449 | if (zcountiJOB &gt; 0) {                                                                                                         |
| 500 | if (zcountiORO &gt; 0) {                                                                                                         |
| 540 | &lt;%if (esTerritorio.equals("0")) {%&gt;                                                                                        |
| 543 | &lt;%if (esTerritorio.equals("1")) {%&gt;                                                                                        |
| 554 | &lt;%} else {                                                                                                                    |
| 555 | if (busqueda != null) {                                                                                                          |
| 118 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA";                |
| 120 | expresión de cálculo/transformación: String zoutputdefWU = zsubsesion + "!" + znodoWU + "[*]";                                   |
| 121 | expresión de cálculo/transformación: String zmoveWU = znodoWU + ":" + znodoWU + "[FIRST]";                                       |
| 122 | expresión de cálculo/transformación: String ziteratorWU = znodoWU + ":" + zsubsesion + "!" + znodoWU;                            |
| 123 | expresión de cálculo/transformación: String zlecturaWU = zsubsesion + "!" + znodoWU;                                             |
| 124 | expresión de cálculo/transformación: String zraizWU = zsubsesion + "!" + znodoWU + ".";                                          |
| 126 | expresión de cálculo/transformación: String zcomunWU = znodoWU + ":" + zsubsesion + "!" + znodoWU + "[&amp;VAR.m4lix]" + ".";    |
| 128 | expresión de cálculo/transformación: String zIdWunit = zcomunWU + "STD_ID_WORK_UNIT_CHILD";                                      |
| 129 | expresión de cálculo/transformación: String zNWunit = zcomunWU + "STD_N_WORK_UNIT";                                              |
| 130 | expresión de cálculo/transformación: String zTypeWunit = zcomunWU + "STD_ID_WORK_UNIT_TYPE";                                     |
| 131 | expresión de cálculo/transformación: String zIdParentWunit = zcomunWU + "STD_ID_WORK_UNIT_PARENT";                               |
| 133 | expresión de cálculo/transformación: String zoutputdefWL = zsubsesion + "!" + znodoWL + "[*]";                                   |
| 134 | expresión de cálculo/transformación: String zmoveWL = znodoWL + ":" + znodoWL + "[FIRST]";                                       |
| 135 | expresión de cálculo/transformación: String ziteratorWL = znodoWL + ":" + zsubsesion + "!" + znodoWL;                            |
| 136 | expresión de cálculo/transformación: String zlecturaWL = zsubsesion + "!" + znodoWL;                                             |
| 137 | expresión de cálculo/transformación: String zraizWL = zsubsesion + "!" + znodoWL + ".";                                          |
| 139 | expresión de cálculo/transformación: String zcomunWL = znodoWL + ":" + zsubsesion + "!" + znodoWL + "[&amp;VAR.m4lix]" + ".";    |
| 141 | expresión de cálculo/transformación: String zIdWlocat = zcomunWL + "STD_ID_WORK_LOCATION";                                       |
| 142 | expresión de cálculo/transformación: String zIdNWlocat = zcomunWL + "STD_N_WORK_LOCATION";                                       |
| 143 | expresión de cálculo/transformación: String zIdTypeWlocat = zcomunWL + "STD_ID_WL_TYPE";                                         |
| 145 | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                 |
| 146 | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                    |
| 147 | expresión de cálculo/transformación: String ziteratorORO = znodoORO + ":" + zsubsesion + "!" + znodoORO;                         |
| 148 | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + znodoORO;                                           |
| 149 | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + znodoORO + ".";                                        |
| 151 | expresión de cálculo/transformación: String zcomunORO = znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "."; |
| 154 | expresión de cálculo/transformación: String zNommbreCompleto = zcomunORO + "SCO_GB_NAME";                                        |
| 155 | expresión de cálculo/transformación: String zNomCentTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                    |
| 156 | expresión de cálculo/transformación: String zDirCentTrabajo = zcomunORO + "DIR_CENTRO_TRABAJO";                                  |
| 157 | expresión de cálculo/transformación: String zNomDireccion = zcomunORO + "N_DIRECCION";                                           |
| 158 | expresión de cálculo/transformación: String zNomArea = zcomunORO + "N_AREA";                                                     |
| 159 | expresión de cálculo/transformación: String zNomPuesto = zcomunORO + "N_PUESTO";                                                 |
| 160 | expresión de cálculo/transformación: String zIdCentroTrab = zcomunORO + "ID_CENTRO_TRABAJO";                                     |
| 161 | expresión de cálculo/transformación: String zFotoEmpleado = zcomunORO + "SCO_BLOB_PHOTO";                                        |
| 162 | expresión de cálculo/transformación: String zIdUnidadRaiz = zcomunORO + "ID_UNIDAD_RAIZ";                                        |
| 165 | expresión de cálculo/transformación: String zNUnidadRaiz = zcomunORO + "N_UNIDAD_RAIZ";                                          |
| 168 | expresión de cálculo/transformación: String zIdDireccion = zcomunORO + "ID_DIRECCION";                                           |
| 169 | expresión de cálculo/transformación: String zIdArea = zcomunORO + "ID_AREA";                                                     |
| 170 | expresión de cálculo/transformación: String zIdPuesto = zcomunORO + "ID_PUESTO";                                                 |
| 171 | expresión de cálculo/transformación: String zIdEmpleado = zcomunORO + "ID_EMPLEADO";                                             |
| 173 | expresión de cálculo/transformación: String zoutputdefJOB = zsubsesion + "!" + znodoJOB + "[*]";                                 |
| 174 | expresión de cálculo/transformación: String zmoveJOB = znodoJOB + ":" + znodoJOB + "[FIRST]";                                    |
| 175 | expresión de cálculo/transformación: String ziteratorJOB = znodoJOB + ":" + zsubsesion + "!" + znodoJOB;                         |
| 176 | expresión de cálculo/transformación: String zlecturaJOB = zsubsesion + "!" + znodoJOB;                                           |
| 177 | expresión de cálculo/transformación: String zraizJOB = zsubsesion + "!" + znodoJOB + ".";                                        |
| 179 | expresión de cálculo/transformación: String zcomunJOB = znodoJOB + ":" + zsubsesion + "!" + znodoJOB + "[&amp;VAR.m4lix]" + "."; |
| 182 | expresión de cálculo/transformación: String zIdJob = zcomunJOB + "STD_ID_JOB_CODE";                                              |
| 183 | expresión de cálculo/transformación: String zNJob = zcomunJOB + "STD_N_JOB_CODE";                                                |
| 186 | expresión de cálculo/transformación: String zoutputdefWUD = zsubsesion + "!" + znodoWUD + "[*]";                                 |
| 187 | expresión de cálculo/transformación: String zmoveWUD = znodoWUD + ":" + znodoWUD + "[FIRST]";                                    |
| 188 | expresión de cálculo/transformación: String ziteratorWUD = znodoWUD + ":" + zsubsesion + "!" + znodoWUD;                         |
| 189 | expresión de cálculo/transformación: String zlecturaWUD = zsubsesion + "!" + znodoWUD;                                           |
| 190 | expresión de cálculo/transformación: String zraizWUD = zsubsesion + "!" + znodoWUD + ".";                                        |
| 192 | expresión de cálculo/transformación: String zcomunWUD = znodoWUD + ":" + zsubsesion + "!" + znodoWUD + "[&amp;VAR.m4lix]" + "."; |
| 194 | expresión de cálculo/transformación: String zIdWDunit = zcomunWUD + "STD_ID_WORK_UNIT";                                          |
| 195 | expresión de cálculo/transformación: String zNWDunit = zcomunWUD + "STD_N_WORK_UNIT";                                            |
| 198 | expresión de cálculo/transformación: String zoutputdefQEQ = zsubsesion + "!" + zsubsesion + "[*]";                               |
| 199 | expresión de cálculo/transformación: String zmoveQEQ = zsubsesion + ":" + zsubsesion + "[FIRST]";                                |
| 252 | expresión de cálculo/transformación: parametros = parametros + "-- PARAMETROS RECOGIDOS POR REQUEST --" + "\n";                  |
| 253 | expresión de cálculo/transformación: parametros = parametros + "Busqueda:" + '&lt;%=busqueda%&gt;' + "\n";                       |
| 254 | expresión de cálculo/transformación: parametros = parametros + "Nombre:" + '&lt;%=nombreCompleto%&gt;' + "\n";                   |
| 255 | expresión de cálculo/transformación: parametros = parametros + "Direccion:" + '&lt;%=direccion%&gt;' + "\n";                     |
| 256 | expresión de cálculo/transformación: parametros = parametros + "Direccion Busqueda:" + '&lt;%=dirbusqueda%&gt;' + "\n";          |
| 257 | expresión de cálculo/transformación: parametros = parametros + "IdCentro:" + '&lt;%=idcentro%&gt;' + "\n";                       |
| 258 | expresión de cálculo/transformación: parametros = parametros + "Centro:" + '&lt;%=centro%&gt;' + "\n";                           |
| 259 | expresión de cálculo/transformación: parametros = parametros + "Area:" + '&lt;%=area%&gt;' + "\n";                               |
| 260 | expresión de cálculo/transformación: parametros = parametros + "Puesto:" + '&lt;%=puesto%&gt;' + "\n";                           |
| 301 | expresión de cálculo/transformación: parametros = parametros + "Direccion : " + '&lt;%=direccion%&gt;' + "\n";                   |
| 302 | expresión de cálculo/transformación: parametros = parametros + "Nº Areas : " + '&lt;%=zcountiWU%&gt;' + "\n";                    |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                   |
| --- | --------------------------------------------------- |
| 43  | /css/estilo_sse.css                                 |
| 44  | /css/style_persdata.css                             |
| 46  | /library/jquery.js                                  |
| 47  | /libreria/functions_quien_es_quien.js               |
| 48  | /libreria/funciones_sse.js                          |
| 312 | ssco_g0_who_is_who.jsp                              |
| 317 | ssco_g0_who_is_who.jsp                              |
| 329 | /iconos/infos.gif                                   |
| 522 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp |
| 533 | javascript:m4submit(                                |

## Versión 2: CYC compartida

Fuente de los localizadores `L`: [m4custom/CYC/sse_g0/ssco_g0_who_is_who_old.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/ssco_g0_who_is_who_old.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta       |
| --- | ------------------------------ |
| 41  | Quién es Quién                 |
| 329 | Empleados                      |
| 333 | Nombre                         |
| 358 | Dirección / D. Territorial     |
| 359 | Seleccione Dirección "&gt;     |
| 395 | Centro de Trabajo              |
| 396 | Seleccione Centro - "&gt;      |
| 418 | Área / Sucursal                |
| 419 | Seleccione Área/Sucursal "&gt; |
| 443 | Puesto                         |
| 444 | Seleccione Puesto "&gt;        |
| 506 | Apellidos y Nombre             |
| 507 | Centro de trabajo              |
| 508 | Dirección                      |
| 509 | Unidad Organizativa            |
| 510 | Puesto                         |
| 522 | "/&gt; "/&gt;                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                     |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 312 | form    | id=filtroAreas; name=filtroAreas; method=post; action=ssco_g0_who_is_who.jsp                                                  |
| 313 | input   | type=hidden; id=direccionArea; name=direccionArea; value=                                                                     |
| 317 | form    | id=filtroBusqueda; name=filtroBusqueda; method=post; action=ssco_g0_who_is_who.jsp; accept-charset=ISO-8859-1                 |
| 318 | input   | type=hidden; id=direccion; name=direccion; value=                                                                             |
| 319 | input   | type=hidden; id=nombreCompleto; name=nombreCompleto; value=                                                                   |
| 320 | input   | type=hidden; id=area; name=area; value=                                                                                       |
| 321 | input   | type=hidden; id=puesto; name=puesto; value=                                                                                   |
| 322 | input   | type=hidden; id=idcentro; name=idcentro; value=                                                                               |
| 323 | input   | type=hidden; id=centro; name=centro; value=                                                                                   |
| 324 | input   | type=hidden; id=busqueda; name=busqueda; value=1                                                                              |
| 329 | img     | src=/iconos/infos.gif                                                                                                         |
| 336 | input   | type=text; name=nombre; id=nombre; value=&lt;%=nombreCompleto%&gt;; onkeypress=return AddKeyPress(event);; style=width: 450px |
| 360 | select  | name=Direcciones; id=Direcciones; style=width: 450px                                                                          |
| 361 | option  | value=00; selected=presente; confirmar condición si dinámico                                                                  |
| 374 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                      |
| 397 | select  | name=CentrosTrabajo; id=CentrosTrabajo; style=width: 450px                                                                    |
| 398 | option  | value=00                                                                                                                      |
| 410 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                      |
| 420 | select  | name=Areas; id=Areas; style=width: 450px                                                                                      |
| 421 | option  | value=                                                                                                                        |
| 434 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                      |
| 446 | select  | name=puestos; id=puestos; style=width: 450px                                                                                  |
| 447 | option  | value=00                                                                                                                      |
| 460 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                      |
| 471 | input   | name=button; type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028;                                 |

```
						background-repeat: no-repeat;
						border: 1px solid #DC0028;
						border-radius: 4px;
						color: #FFFFFF;
						margin: 10px;
						max-width: 150px;
						min-height: 30px;
						min-width: 110px;; value=Búsqueda |
```

| 524 | form | id=datosCargadosFiltro&lt;%=zposicions2%&gt;; name=datosCargadosFiltro&lt;%=zposicions2%&gt;; method=post; target=_blank; action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp |
| 526 | input | type=hidden; id=empleado; name=empleado; value=&lt;m4:item m4name=; htmlsafe=true |
| 527 | input | type=hidden; id=empleado; name=uniraiz; value=&lt;m4:item m4name=; htmlsafe=true |
| 528 | input | type=hidden; id=nombresele; name=nombresele; value=&lt;%=nombreCompleto%&gt; |
| 529 | input | type=hidden; id=direcsele; name=direcsele; value=&lt;%=dirbusqueda%&gt; |
| 530 | input | type=hidden; id=idcentrosele; name=idcentrosele; value=&lt;%=idcentro%&gt; |
| 531 | input | type=hidden; id=centrosele; name=centrosele; value=&lt;%=centro%&gt; |
| 532 | input | type=hidden; id=areasele; name=areasele; value=&lt;%=area%&gt; |
| 533 | input | type=hidden; id=puestosele; name=puestosele; value=&lt;%=puesto%&gt; |
| 536 | a | id=ficha; alt=Consultar ficha del empleado; href=javascript:m4submit('datosCargadosFiltro&lt;%=zposicions2%&gt;') |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                         |
| --- | --------------- | -------------------------------------- |
| 93  | direccionArea   | getParameter(request,"direccionArea")  |
| 94  | direccion       | getParameter(request,"direccion")      |
| 95  | nombreCompleto  | getParameter(request,"nombreCompleto") |
| 96  | area            | getParameter(request,"area")           |
| 97  | puesto          | getParameter(request,"puesto")         |
| 98  | idcentro        | getParameter(request,"idcentro")       |
| 99  | centro          | getParameter(request,"centro")         |
| 100 | busqueda        | getParameter(request,"busqueda")       |

| L   | Variable         | Expresión fuente                                                          | Resolución estática parcial                                                                                |
| --- | ---------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 93  | direccion        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccionArea") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccionArea")                                  |
| 94  | dirbusqueda      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")                                      |
| 96  | area             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")                                           |
| 97  | puesto           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")                                         |
| 98  | idcentro         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idcentro")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idcentro")                                       |
| 99  | centro           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"centro")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"centro")                                         |
| 100 | busqueda         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda")                                       |
| 110 | zsubsesion       | "CSP_QUIEN_ES_QUIEN"                                                      | CSP_QUIEN_ES_QUIEN                                                                                         |
| 111 | zmeta4object     | "CSP_QUIEN_ES_QUIEN"                                                      | CSP_QUIEN_ES_QUIEN                                                                                         |
| 112 | znodoWU          | "CSP_UNID_AREA"                                                           | CSP_UNID_AREA                                                                                              |
| 113 | znodoWL          | "CSP_CENTROS"                                                             | CSP_CENTROS                                                                                                |
| 114 | znodoORO         | "CSP_ORO"                                                                 | CSP_ORO                                                                                                    |
| 115 | znodoJOB         | "CSP_PUESTOS"                                                             | CSP_PUESTOS                                                                                                |
| 116 | znodoWUD         | "CSP_UNID_DIRE"                                                           | CSP_UNID_DIRE                                                                                              |
| 118 | zmetodocarga     | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"                     | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"}                                               |
| 120 | zoutputdefWU     | zsubsesion + "!" + znodoWU + "[*]"                                        | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[*]"}                                                                |
| 121 | zmoveWU          | znodoWU + ":" + znodoWU + "[FIRST]"                                       | CSP_UNID_AREA{":"}CSP_UNID_AREA{"[FIRST]"}                                                                 |
| 122 | ziteratorWU      | znodoWU + ":" + zsubsesion + "!" + znodoWU                                | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA                                                     |
| 123 | zlecturaWU       | zsubsesion + "!" + znodoWU                                                | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA                                                                       |
| 124 | zraizWU          | zsubsesion + "!" + znodoWU + "."                                          | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"."}                                                                  |
| 126 | zcomunWU         | znodoWU + ":" + zsubsesion + "!" + znodoWU + "[&amp;VAR.m4lix]" + "."     | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}                            |
| 128 | zIdWunit         | zcomunWU + "STD_ID_WORK_UNIT_CHILD"                                       | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_CHILD"}  |
| 129 | zNWunit          | zcomunWU + "STD_N_WORK_UNIT"                                              | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}         |
| 130 | zTypeWunit       | zcomunWU + "STD_ID_WORK_UNIT_TYPE"                                        | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_TYPE"}   |
| 131 | zIdParentWunit   | zcomunWU + "STD_ID_WORK_UNIT_PARENT"                                      | CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT_PARENT"} |
| 133 | zoutputdefWL     | zsubsesion + "!" + znodoWL + "[*]"                                        | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[*]"}                                                                  |
| 134 | zmoveWL          | znodoWL + ":" + znodoWL + "[FIRST]"                                       | CSP_CENTROS{":"}CSP_CENTROS{"[FIRST]"}                                                                     |
| 135 | ziteratorWL      | znodoWL + ":" + zsubsesion + "!" + znodoWL                                | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS                                                         |
| 136 | zlecturaWL       | zsubsesion + "!" + znodoWL                                                | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS                                                                         |
| 137 | zraizWL          | zsubsesion + "!" + znodoWL + "."                                          | CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"."}                                                                    |
| 139 | zcomunWL         | znodoWL + ":" + zsubsesion + "!" + znodoWL + "[&amp;VAR.m4lix]" + "."     | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}                                |
| 141 | zIdWlocat        | zcomunWL + "STD_ID_WORK_LOCATION"                                         | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}        |
| 142 | zIdNWlocat       | zcomunWL + "STD_N_WORK_LOCATION"                                          | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}         |
| 143 | zIdTypeWlocat    | zcomunWL + "STD_ID_WL_TYPE"                                               | CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WL_TYPE"}              |
| 145 | zoutputdefORO    | zsubsesion + "!" + znodoORO + "[*]"                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[*]"}                                                                      |
| 146 | zmoveORO         | znodoORO + ":" + znodoORO + "[FIRST]"                                     | CSP_ORO{":"}CSP_ORO{"[FIRST]"}                                                                             |
| 147 | ziteratorORO     | znodoORO + ":" + zsubsesion + "!" + znodoORO                              | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO                                                                 |
| 148 | zlecturaORO      | zsubsesion + "!" + znodoORO                                               | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO                                                                             |
| 149 | zraizORO         | zsubsesion + "!" + znodoORO + "."                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"."}                                                                        |
| 151 | zcomunORO        | znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "."   | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}                                        |
| 154 | zNommbreCompleto | zcomunORO + "SCO_GB_NAME"                                                 | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                         |
| 155 | zNomCentTrabajo  | zcomunORO + "N_CENTRO_TRABAJO"                                            | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}                    |
| 156 | zDirCentTrabajo  | zcomunORO + "DIR_CENTRO_TRABAJO"                                          | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}                  |
| 157 | zNomDireccion    | zcomunORO + "N_DIRECCION"                                                 | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}                         |
| 158 | zNomArea         | zcomunORO + "N_AREA"                                                      | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}                              |
| 159 | zNomPuesto       | zcomunORO + "N_PUESTO"                                                    | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}                            |
| 160 | zIdCentroTrab    | zcomunORO + "ID_CENTRO_TRABAJO"                                           | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}                   |
| 161 | zFotoEmpleado    | zcomunORO + "SCO_BLOB_PHOTO"                                              | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_BLOB_PHOTO"}                      |
| 162 | zIdUnidadRaiz    | zcomunORO + "ID_UNIDAD_RAIZ"                                              | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_UNIDAD_RAIZ"}                      |
| 165 | zNUnidadRaiz     | zcomunORO + "N_UNIDAD_RAIZ"                                               | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}                       |
| 168 | zIdDireccion     | zcomunORO + "ID_DIRECCION"                                                | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_DIRECCION"}                        |
| 169 | zIdArea          | zcomunORO + "ID_AREA"                                                     | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}                             |
| 170 | zIdPuesto        | zcomunORO + "ID_PUESTO"                                                   | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}                           |
| 171 | zIdEmpleado      | zcomunORO + "ID_EMPLEADO"                                                 | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_EMPLEADO"}                         |
| 173 | zoutputdefJOB    | zsubsesion + "!" + znodoJOB + "[*]"                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                                  |
| 174 | zmoveJOB         | znodoJOB + ":" + znodoJOB + "[FIRST]"                                     | CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                                                     |
| 175 | ziteratorJOB     | znodoJOB + ":" + zsubsesion + "!" + znodoJOB                              | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS                                                         |
| 176 | zlecturaJOB      | zsubsesion + "!" + znodoJOB                                               | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS                                                                         |
| 177 | zraizJOB         | zsubsesion + "!" + znodoJOB + "."                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"."}                                                                    |
| 179 | zcomunJOB        | znodoJOB + ":" + zsubsesion + "!" + znodoJOB + "[&amp;VAR.m4lix]" + "."   | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}                                |
| 182 | zIdJob           | zcomunJOB + "STD_ID_JOB_CODE"                                             | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_JOB_CODE"}             |
| 183 | zNJob            | zcomunJOB + "STD_N_JOB_CODE"                                              | CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}              |
| 186 | zoutputdefWUD    | zsubsesion + "!" + znodoWUD + "[*]"                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[*]"}                                                                |
| 187 | zmoveWUD         | znodoWUD + ":" + znodoWUD + "[FIRST]"                                     | CSP_UNID_DIRE{":"}CSP_UNID_DIRE{"[FIRST]"}                                                                 |
| 188 | ziteratorWUD     | znodoWUD + ":" + zsubsesion + "!" + znodoWUD                              | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE                                                     |
| 189 | zlecturaWUD      | zsubsesion + "!" + znodoWUD                                               | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE                                                                       |
| 190 | zraizWUD         | zsubsesion + "!" + znodoWUD + "."                                         | CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"."}                                                                  |
| 192 | zcomunWUD        | znodoWUD + ":" + zsubsesion + "!" + znodoWUD + "[&amp;VAR.m4lix]" + "."   | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}                            |
| 194 | zIdWDunit        | zcomunWUD + "STD_ID_WORK_UNIT"                                            | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"}        |
| 195 | zNWDunit         | zcomunWUD + "STD_N_WORK_UNIT"                                             | CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}         |
| 198 | zoutputdefQEQ    | zsubsesion + "!" + zsubsesion + "[*]"                                     | CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                                           |
| 199 | zmoveQEQ         | zsubsesion + ":" + zsubsesion + "[FIRST]"                                 | CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                                                       |
| 268 | zcountiWU        | 0                                                                         | 0                                                                                                          |
| 269 | zcountiWL        | 0                                                                         | 0                                                                                                          |
| 270 | zcountiORO       | 0                                                                         | 0                                                                                                          |
| 271 | zcountiJOB       | 0                                                                         | 0                                                                                                          |
| 272 | zcountiWUD       | 0                                                                         | 0                                                                                                          |
| 284 | zcountvWU        | String.valueOf(zcountiWU)                                                 | String.valueOf(zcountiWU)                                                                                  |
| 285 | zcountvWL        | String.valueOf(zcountiWL)                                                 | String.valueOf(zcountiWL)                                                                                  |
| 286 | zcountvORO       | String.valueOf(zcountiORO)                                                | String.valueOf(zcountiORO)                                                                                 |
| 287 | zcountvJOB       | String.valueOf(zcountiJOB)                                                | String.valueOf(zcountiJOB)                                                                                 |
| 288 | zcountvWUD       | String.valueOf(zcountiWUD)                                                | String.valueOf(zcountiWUD)                                                                                 |
| 291 | esTerritorio     | m.getItem(zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO")            | m.getItem(zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO")                                             |
| 364 | zposicions2      | "0"                                                                       | 0                                                                                                          |
| 365 | zposicion2       | 0                                                                         | 0                                                                                                          |
| 401 | zposicions2      | "0"                                                                       | 0                                                                                                          |
| 402 | zposicion2       | 0                                                                         | 0                                                                                                          |
| 424 | zposicions2      | "0"                                                                       | 0                                                                                                          |
| 425 | zposicion2       | 0                                                                         | 0                                                                                                          |
| 450 | zposicions2      | "0"                                                                       | 0                                                                                                          |
| 451 | zposicion2       | 0                                                                         | 0                                                                                                          |
| 501 | zposicions2      | "0"                                                                       | 0                                                                                                          |
| 502 | zposicion2       | 0                                                                         | 0                                                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                        |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| 206 | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                                                 |
| 208 | m4:beginjob  |                                                                                                                           |
| 209 | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                                         |
| 227 | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA"}                                                     |
| 229 | m4:outputdef | m4alias=CSP_QUIEN_ES_QUIEN                                                                                                |
| 229 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                                      |
| 230 | m4:outputdef | m4alias=CSP_UNID_AREA                                                                                                     |
| 230 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[*]"}                                                           |
| 231 | m4:outputdef | m4alias=CSP_CENTROS                                                                                                       |
| 231 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[*]"}                                                             |
| 232 | m4:outputdef | m4alias=CSP_ORO                                                                                                           |
| 232 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[*]"}                                                                 |
| 233 | m4:outputdef | m4alias=CSP_PUESTOS                                                                                                       |
| 233 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                             |
| 234 | m4:outputdef | m4alias=CSP_UNID_DIRE                                                                                                     |
| 234 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[*]"}                                                           |
| 236 | m4:endjob    |                                                                                                                           |
| 238 | m4:move      |                                                                                                                           |
| 238 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                                       |
| 239 | m4:move      |                                                                                                                           |
| 239 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_UNID_AREA{":"}CSP_UNID_AREA{"[FIRST]"}                                                 |
| 240 | m4:move      |                                                                                                                           |
| 240 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CENTROS{":"}CSP_CENTROS{"[FIRST]"}                                                     |
| 241 | m4:move      |                                                                                                                           |
| 241 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_ORO{":"}CSP_ORO{"[FIRST]"}                                                             |
| 242 | m4:move      |                                                                                                                           |
| 242 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                                     |
| 243 | m4:move      |                                                                                                                           |
| 243 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_UNID_DIRE{":"}CSP_UNID_DIRE{"[FIRST]"}                                                 |
| 367 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWUD).intValue()-1).toString()                                                   |
| 374 | m4:item      | m4name=CSP_UNID_DIRE{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_DIRE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true  |
| 404 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWL).intValue()-1).toString()                                                    |
| 410 | m4:item      | m4name=CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}; htmlsafe=true |
| 410 | m4:item      | m4name=CSP_CENTROS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_CENTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}; htmlsafe=true  |
| 427 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWU).intValue()-1).toString()                                                    |
| 434 | m4:item      | m4name=CSP_UNID_AREA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_UNID_AREA{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true  |
| 453 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvJOB).intValue()-1).toString()                                                   |
| 460 | m4:item      | m4name=CSP_PUESTOS{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true       |
| 513 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                                   |
| 521 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}; htmlsafe=true                      |
| 521 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}; htmlsafe=true                    |
| 521 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                  |
| 521 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}; htmlsafe=true            |
| 536 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                  |
| 541 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true             |
| 547 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true                  |
| 550 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; htmlsafe=true                       |
| 554 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}; htmlsafe=true                |
| 555 | m4:item      | m4name=CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true                     |
| 576 | m4:endpage   |                                                                                                                           |

| L   | Operación        | Argumentos literales                                |
| --- | ---------------- | --------------------------------------------------- |
| 216 | setItem          | zsubsesion,zsubsesion,"","P_BUSQUEDA",busqueda      |
| 217 | setItem          | zsubsesion,zsubsesion,"","P_DIRECCIONB",dirbusqueda |
| 218 | setItem          | zsubsesion,zsubsesion,"","P_DIRECCION",direccion    |
| 219 | setItem          | zsubsesion,zsubsesion,"","P_AREA",area              |
| 220 | setItem          | zsubsesion,zsubsesion,"","P_NOMBRE",nombreCompleto  |
| 221 | setItem          | zsubsesion,zsubsesion,"","P_PUESTO",puesto          |
| 222 | setItem          | zsubsesion,zsubsesion,"","P_CENTRO",centro          |
| 276 | getCountInClient | znodoWU,zsubsesion,znodoWU                          |
| 277 | getCountInClient | znodoWL,zsubsesion,znodoWL                          |
| 278 | getCountInClient | znodoORO,zsubsesion,znodoORO                        |
| 279 | getCountInClient | znodoJOB,zsubsesion,znodoJOB                        |
| 280 | getCountInClient | znodoWUD,zsubsesion,znodoWUD                        |
| 291 | getItem          | zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función              | Argumentos        |
| --- | -------------------- | ----------------- |
| 52  | AddKeyPress          | e                 |
| 63  | seleccionarDireccion | idDireccion       |
| 76  | seleccionarOpcion    | valor,desplegable |

| L   | Condición / acción / mensaje literal                                                                                             |
| --- | -------------------------------------------------------------------------------------------------------------------------------- |
| 55  | if (e.keyCode == 13) {                                                                                                           |
| 69  | if (options[i].value == idDireccion) {                                                                                           |
| 82  | if (options[i].value == valor) {                                                                                                 |
| 102 | if (nombreCompleto == null) {nombreCompleto="";}                                                                                 |
| 296 | if(direccion != null){                                                                                                           |
| 363 | if (zcountiWUD &gt; 0) {                                                                                                         |
| 380 | &lt;% if (direccion != null) {%&gt;                                                                                              |
| 386 | &lt;% //if (dirbusqueda != null) {%&gt;                                                                                          |
| 400 | if (zcountiWL &gt; 0) {                                                                                                          |
| 423 | if (zcountiWU &gt; 0) {                                                                                                          |
| 449 | if (zcountiJOB &gt; 0) {                                                                                                         |
| 500 | if (zcountiORO &gt; 0) {                                                                                                         |
| 546 | &lt;%if (esTerritorio.equals("0")) {%&gt;                                                                                        |
| 549 | &lt;%if (esTerritorio.equals("1")) {%&gt;                                                                                        |
| 560 | &lt;%} else {                                                                                                                    |
| 561 | if (busqueda != null) {                                                                                                          |
| 118 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA";                |
| 120 | expresión de cálculo/transformación: String zoutputdefWU = zsubsesion + "!" + znodoWU + "[*]";                                   |
| 121 | expresión de cálculo/transformación: String zmoveWU = znodoWU + ":" + znodoWU + "[FIRST]";                                       |
| 122 | expresión de cálculo/transformación: String ziteratorWU = znodoWU + ":" + zsubsesion + "!" + znodoWU;                            |
| 123 | expresión de cálculo/transformación: String zlecturaWU = zsubsesion + "!" + znodoWU;                                             |
| 124 | expresión de cálculo/transformación: String zraizWU = zsubsesion + "!" + znodoWU + ".";                                          |
| 126 | expresión de cálculo/transformación: String zcomunWU = znodoWU + ":" + zsubsesion + "!" + znodoWU + "[&amp;VAR.m4lix]" + ".";    |
| 128 | expresión de cálculo/transformación: String zIdWunit = zcomunWU + "STD_ID_WORK_UNIT_CHILD";                                      |
| 129 | expresión de cálculo/transformación: String zNWunit = zcomunWU + "STD_N_WORK_UNIT";                                              |
| 130 | expresión de cálculo/transformación: String zTypeWunit = zcomunWU + "STD_ID_WORK_UNIT_TYPE";                                     |
| 131 | expresión de cálculo/transformación: String zIdParentWunit = zcomunWU + "STD_ID_WORK_UNIT_PARENT";                               |
| 133 | expresión de cálculo/transformación: String zoutputdefWL = zsubsesion + "!" + znodoWL + "[*]";                                   |
| 134 | expresión de cálculo/transformación: String zmoveWL = znodoWL + ":" + znodoWL + "[FIRST]";                                       |
| 135 | expresión de cálculo/transformación: String ziteratorWL = znodoWL + ":" + zsubsesion + "!" + znodoWL;                            |
| 136 | expresión de cálculo/transformación: String zlecturaWL = zsubsesion + "!" + znodoWL;                                             |
| 137 | expresión de cálculo/transformación: String zraizWL = zsubsesion + "!" + znodoWL + ".";                                          |
| 139 | expresión de cálculo/transformación: String zcomunWL = znodoWL + ":" + zsubsesion + "!" + znodoWL + "[&amp;VAR.m4lix]" + ".";    |
| 141 | expresión de cálculo/transformación: String zIdWlocat = zcomunWL + "STD_ID_WORK_LOCATION";                                       |
| 142 | expresión de cálculo/transformación: String zIdNWlocat = zcomunWL + "STD_N_WORK_LOCATION";                                       |
| 143 | expresión de cálculo/transformación: String zIdTypeWlocat = zcomunWL + "STD_ID_WL_TYPE";                                         |
| 145 | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                 |
| 146 | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                    |
| 147 | expresión de cálculo/transformación: String ziteratorORO = znodoORO + ":" + zsubsesion + "!" + znodoORO;                         |
| 148 | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + znodoORO;                                           |
| 149 | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + znodoORO + ".";                                        |
| 151 | expresión de cálculo/transformación: String zcomunORO = znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "."; |
| 154 | expresión de cálculo/transformación: String zNommbreCompleto = zcomunORO + "SCO_GB_NAME";                                        |
| 155 | expresión de cálculo/transformación: String zNomCentTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                    |
| 156 | expresión de cálculo/transformación: String zDirCentTrabajo = zcomunORO + "DIR_CENTRO_TRABAJO";                                  |
| 157 | expresión de cálculo/transformación: String zNomDireccion = zcomunORO + "N_DIRECCION";                                           |
| 158 | expresión de cálculo/transformación: String zNomArea = zcomunORO + "N_AREA";                                                     |
| 159 | expresión de cálculo/transformación: String zNomPuesto = zcomunORO + "N_PUESTO";                                                 |
| 160 | expresión de cálculo/transformación: String zIdCentroTrab = zcomunORO + "ID_CENTRO_TRABAJO";                                     |
| 161 | expresión de cálculo/transformación: String zFotoEmpleado = zcomunORO + "SCO_BLOB_PHOTO";                                        |
| 162 | expresión de cálculo/transformación: String zIdUnidadRaiz = zcomunORO + "ID_UNIDAD_RAIZ";                                        |
| 165 | expresión de cálculo/transformación: String zNUnidadRaiz = zcomunORO + "N_UNIDAD_RAIZ";                                          |
| 168 | expresión de cálculo/transformación: String zIdDireccion = zcomunORO + "ID_DIRECCION";                                           |
| 169 | expresión de cálculo/transformación: String zIdArea = zcomunORO + "ID_AREA";                                                     |
| 170 | expresión de cálculo/transformación: String zIdPuesto = zcomunORO + "ID_PUESTO";                                                 |
| 171 | expresión de cálculo/transformación: String zIdEmpleado = zcomunORO + "ID_EMPLEADO";                                             |
| 173 | expresión de cálculo/transformación: String zoutputdefJOB = zsubsesion + "!" + znodoJOB + "[*]";                                 |
| 174 | expresión de cálculo/transformación: String zmoveJOB = znodoJOB + ":" + znodoJOB + "[FIRST]";                                    |
| 175 | expresión de cálculo/transformación: String ziteratorJOB = znodoJOB + ":" + zsubsesion + "!" + znodoJOB;                         |
| 176 | expresión de cálculo/transformación: String zlecturaJOB = zsubsesion + "!" + znodoJOB;                                           |
| 177 | expresión de cálculo/transformación: String zraizJOB = zsubsesion + "!" + znodoJOB + ".";                                        |
| 179 | expresión de cálculo/transformación: String zcomunJOB = znodoJOB + ":" + zsubsesion + "!" + znodoJOB + "[&amp;VAR.m4lix]" + "."; |
| 182 | expresión de cálculo/transformación: String zIdJob = zcomunJOB + "STD_ID_JOB_CODE";                                              |
| 183 | expresión de cálculo/transformación: String zNJob = zcomunJOB + "STD_N_JOB_CODE";                                                |
| 186 | expresión de cálculo/transformación: String zoutputdefWUD = zsubsesion + "!" + znodoWUD + "[*]";                                 |
| 187 | expresión de cálculo/transformación: String zmoveWUD = znodoWUD + ":" + znodoWUD + "[FIRST]";                                    |
| 188 | expresión de cálculo/transformación: String ziteratorWUD = znodoWUD + ":" + zsubsesion + "!" + znodoWUD;                         |
| 189 | expresión de cálculo/transformación: String zlecturaWUD = zsubsesion + "!" + znodoWUD;                                           |
| 190 | expresión de cálculo/transformación: String zraizWUD = zsubsesion + "!" + znodoWUD + ".";                                        |
| 192 | expresión de cálculo/transformación: String zcomunWUD = znodoWUD + ":" + zsubsesion + "!" + znodoWUD + "[&amp;VAR.m4lix]" + "."; |
| 194 | expresión de cálculo/transformación: String zIdWDunit = zcomunWUD + "STD_ID_WORK_UNIT";                                          |
| 195 | expresión de cálculo/transformación: String zNWDunit = zcomunWUD + "STD_N_WORK_UNIT";                                            |
| 198 | expresión de cálculo/transformación: String zoutputdefQEQ = zsubsesion + "!" + zsubsesion + "[*]";                               |
| 199 | expresión de cálculo/transformación: String zmoveQEQ = zsubsesion + ":" + zsubsesion + "[FIRST]";                                |
| 252 | expresión de cálculo/transformación: parametros = parametros + "-- PARAMETROS RECOGIDOS POR REQUEST --" + "\n";                  |
| 253 | expresión de cálculo/transformación: parametros = parametros + "Busqueda:" + '&lt;%=busqueda%&gt;' + "\n";                       |
| 254 | expresión de cálculo/transformación: parametros = parametros + "Nombre:" + '&lt;%=nombreCompleto%&gt;' + "\n";                   |
| 255 | expresión de cálculo/transformación: parametros = parametros + "Direccion:" + '&lt;%=direccion%&gt;' + "\n";                     |
| 256 | expresión de cálculo/transformación: parametros = parametros + "Direccion Busqueda:" + '&lt;%=dirbusqueda%&gt;' + "\n";          |
| 257 | expresión de cálculo/transformación: parametros = parametros + "IdCentro:" + '&lt;%=idcentro%&gt;' + "\n";                       |
| 258 | expresión de cálculo/transformación: parametros = parametros + "Centro:" + '&lt;%=centro%&gt;' + "\n";                           |
| 259 | expresión de cálculo/transformación: parametros = parametros + "Area:" + '&lt;%=area%&gt;' + "\n";                               |
| 260 | expresión de cálculo/transformación: parametros = parametros + "Puesto:" + '&lt;%=puesto%&gt;' + "\n";                           |
| 301 | expresión de cálculo/transformación: parametros = parametros + "Direccion : " + '&lt;%=direccion%&gt;' + "\n";                   |
| 302 | expresión de cálculo/transformación: parametros = parametros + "Nº Areas : " + '&lt;%=zcountiWU%&gt;' + "\n";                    |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                   |
| --- | --------------------------------------------------- |
| 43  | /css/estilo_sse.css                                 |
| 44  | /css/style_persdata.css                             |
| 46  | /library/jquery.js                                  |
| 47  | /libreria/functions_quien_es_quien.js               |
| 48  | /libreria/funciones_sse.js                          |
| 312 | ssco_g0_who_is_who.jsp                              |
| 317 | ssco_g0_who_is_who.jsp                              |
| 329 | /iconos/infos.gif                                   |
| 524 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp |
| 536 | javascript:m4submit(                                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                          | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | --------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 46  | /library/jquery.js                                  | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| COLL   | 47  | /libreria/functions_quien_es_quien.js               | contextual | [libreria/functions_quien_es_quien.js](../../transversal/dependencias/libreria--functions_quien_es_quien.md)                                                                   |
| COLL   | 48  | /libreria/funciones_sse.js                          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 312 | ssco_g0_who_is_who.jsp                              | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| COLL   | 317 | ssco_g0_who_is_who.jsp                              | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| COLL   | 522 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp | ausente    | P06                                                                                                                                                                            |
| COLL   | 533 | javascript:m4submit(                                | dinámica   | P06                                                                                                                                                                            |
| CYC    | 46  | /library/jquery.js                                  | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                          |
| CYC    | 47  | /libreria/functions_quien_es_quien.js               | contextual | [libreria/functions_quien_es_quien.js](../../transversal/dependencias/libreria--functions_quien_es_quien.md)                                                                   |
| CYC    | 48  | /libreria/funciones_sse.js                          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 312 | ssco_g0_who_is_who.jsp                              | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| CYC    | 317 | ssco_g0_who_is_who.jsp                              | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| CYC    | 524 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp | ausente    | P06                                                                                                                                                                            |
| CYC    | 536 | javascript:m4submit(                                | dinámica   | P06                                                                                                                                                                            |
| IBER   | 46  | /library/jquery.js                                  | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| IBER   | 47  | /libreria/functions_quien_es_quien.js               | contextual | [libreria/functions_quien_es_quien.js](../../transversal/dependencias/libreria--functions_quien_es_quien.md)                                                                   |
| IBER   | 48  | /libreria/funciones_sse.js                          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 312 | ssco_g0_who_is_who.jsp                              | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| IBER   | 317 | ssco_g0_who_is_who.jsp                              | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| IBER   | 522 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp | ausente    | P06                                                                                                                                                                            |
| IBER   | 533 | javascript:m4submit(                                | dinámica   | P06                                                                                                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_g0_who_is_who_old.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
