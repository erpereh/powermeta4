# Quién es Quién

Identificador: `sse_g0/ssco_g0_who_is_who_bckp_20032015.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/sse_g0/ssco_g0_who_is_who_bckp_20032015.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/ssco_g0_who_is_who_bckp_20032015.jsp) | `c2129b189df72f7f8cb863b8b4ad9a3abd42cf6fbc5f1af8082355eba313aae4` |    566 |
| CYC / compartido  | [m4custom/CYC/sse_g0/ssco_g0_who_is_who_bckp_20032015.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/ssco_g0_who_is_who_bckp_20032015.jsp)   | `c2129b189df72f7f8cb863b8b4ad9a3abd42cf6fbc5f1af8082355eba313aae4` |    566 |
| IBER / compartido | [m4custom/IBER/sse_g0/ssco_g0_who_is_who_bckp_20032015.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g0/ssco_g0_who_is_who_bckp_20032015.jsp) | `c2129b189df72f7f8cb863b8b4ad9a3abd42cf6fbc5f1af8082355eba313aae4` |    566 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_g0/ssco_g0_who_is_who_bckp_20032015.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/ssco_g0_who_is_who_bckp_20032015.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta         |
| --- | -------------------------------- |
| 32  | Quién es Quién                   |
| 173 | Empleados                        |
| 187 | Nombre                           |
| 188 | Seleccione Nombre "&gt;          |
| 213 | Dirección / D. Territorial       |
| 214 | Seleccione Dirección - "&gt;     |
| 236 | Centro de Trabajo                |
| 237 | Seleccione Centro - "&gt;        |
| 258 | Área / Sucursal                  |
| 259 | Seleccione Área/Sucursal - "&gt; |
| 283 | Puesto                           |
| 284 | Seleccione Puesto "&gt;          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                     |
| --- | ------- | --------------------------------------------------------------------------------------------- |
| 170 | form    | method=POST; action=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp                  |
| 173 | img     | src=/iconos/infos.gif                                                                         |
| 191 | select  | name=Empleados; id=Empleados                                                                  |
| 192 | option  | value=00                                                                                      |
| 204 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                      |
| 215 | select  | name=Direcciones; id=Direcciones                                                              |
| 216 | option  | value=00                                                                                      |
| 228 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                      |
| 243 | select  | name=CentrosTrabajo; id=CentrosTrabajo                                                        |
| 244 | option  | value=00                                                                                      |
| 251 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                      |
| 266 | select  | name=Areas; id=Areas                                                                          |
| 267 | option  | value=                                                                                        |
| 275 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                      |
| 286 | select  | name=puestos; id=puestos                                                                      |
| 287 | option  | value=00                                                                                      |
| 300 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                      |
| 311 | input   | name=button; type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028; |

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

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable         | Expresión fuente                                                        | Resolución estática parcial                                                                       |
| --- | ---------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 44  | sPathTempMap     | m4Session.getPathTempMapping()                                          | m4Session.getPathTempMapping()                                                                    |
| 45  | sPathTempURI     | m4Session.getUserTempURI() + '/'                                        | {m4Session.getUserTempURI()}{'/'}                                                                 |
| 47  | zsubsesion       | "CSP_WHO_IS_WHO"                                                        | CSP_WHO_IS_WHO                                                                                    |
| 48  | zmeta4object     | "CSP_WHO_IS_WHO"                                                        | CSP_WHO_IS_WHO                                                                                    |
| 49  | znodoWU          | "CSP_UNID_WIW"                                                          | CSP_UNID_WIW                                                                                      |
| 50  | znodoWL          | "CSP_WL_WIW"                                                            | CSP_WL_WIW                                                                                        |
| 51  | znodoORO         | "CSP_DATOS_ORO"                                                         | CSP_DATOS_ORO                                                                                     |
| 52  | znodoJOB         | "CSP_JOB_WIW"                                                           | CSP_JOB_WIW                                                                                       |
| 54  | zmetodocarga     | zsubsesion + "!CSP_WHO_IS_WHO.CSP_BUSQUEDA"                             | CSP_WHO_IS_WHO{"!CSP_WHO_IS_WHO.CSP_BUSQUEDA"}                                                    |
| 56  | zoutputdefWU     | zsubsesion + "!" + znodoWU + "[*]"                                      | CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[*]"}                                                            |
| 57  | zmoveWU          | znodoWU + ":" + znodoWU + "[FIRST]"                                     | CSP_UNID_WIW{":"}CSP_UNID_WIW{"[FIRST]"}                                                          |
| 58  | ziteratorWU      | znodoWU + ":" + zsubsesion + "!" + znodoWU                              | CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW                                                  |
| 59  | zlecturaWU       | zsubsesion + "!" + znodoWU                                              | CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW                                                                   |
| 60  | zraizWU          | zsubsesion + "!" + znodoWU + "."                                        | CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"."}                                                              |
| 62  | zcomunWU         | znodoWU + ":" + zsubsesion + "!" + znodoWU + "[&amp;VAR.m4lix]" + "."   | CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}                         |
| 64  | zIdWunit         | zcomunWU +"STD_ID_WORK_UNIT"                                            | CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_ID_WORK_UNIT         |
| 65  | zNWunit          | zcomunWU +"STD_N_WORK_UNIT"                                             | CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_N_WORK_UNIT          |
| 66  | zTypeWunit       | zcomunWU +"STD_ID_WORK_UNIT_TYPE"                                       | CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_ID_WORK_UNIT_TYPE    |
| 67  | zIdParentWunit   | zcomunWU +"STD_ID_WORK_UNIT_PARENT"                                     | CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_ID_WORK_UNIT_PARENT  |
| 69  | zoutputdefWL     | zsubsesion + "!" + znodoWL + "[*]"                                      | CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[*]"}                                                              |
| 70  | zmoveWL          | znodoWL + ":" + znodoWL + "[FIRST]"                                     | CSP_WL_WIW{":"}CSP_WL_WIW{"[FIRST]"}                                                              |
| 71  | ziteratorWL      | znodoWL + ":" + zsubsesion + "!" + znodoWL                              | CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW                                                      |
| 72  | zlecturaWL       | zsubsesion + "!" + znodoWL                                              | CSP_WHO_IS_WHO{"!"}CSP_WL_WIW                                                                     |
| 73  | zraizWL          | zsubsesion + "!" + znodoWL + "."                                        | CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"."}                                                                |
| 75  | zcomunWL         | znodoWL + ":" + zsubsesion + "!" + znodoWL + "[&amp;VAR.m4lix]" + "."   | CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[&amp;VAR.m4lix]"}{"."}                             |
| 77  | zIdWlocat        | zcomunWL + "STD_ID_WORK_LOCATION"                                       | CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}     |
| 78  | zIdNWlocat       | zcomunWL + "STD_N_WORK_LOCATION"                                        | CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}      |
| 79  | zIdTypeWlocat    | zcomunWL + "STD_ID_WL_TYPE"                                             | CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WL_TYPE"}           |
| 81  | zoutputdefORO    | zsubsesion + "!" + znodoORO + "[*]"                                     | CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[*]"}                                                           |
| 82  | zmoveORO         | znodoORO + ":" + znodoORO + "[FIRST]"                                   | CSP_DATOS_ORO{":"}CSP_DATOS_ORO{"[FIRST]"}                                                        |
| 83  | ziteratorORO     | znodoORO + ":" + zsubsesion + "!" + znodoORO                            | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO                                                |
| 84  | zlecturaORO      | zsubsesion + "!" + znodoORO                                             | CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO                                                                  |
| 85  | zraizORO         | zsubsesion + "!" + znodoORO + "."                                       | CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"."}                                                             |
| 87  | zcomunORO        | znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "." | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}                       |
| 90  | zNommbreCompleto | zcomunORO + "NOMBRE_COMPLETO"                                           | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}    |
| 91  | zNomCentTrabajo  | zcomunORO + "N_CENTRO_TRABAJO"                                          | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}   |
| 92  | zDirCentTrabajo  | zcomunORO + "DIR_CENTRO_TRABAJO"                                        | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"} |
| 93  | zNomDireccion    | zcomunORO + "N_DIRECCION"                                               | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}        |
| 94  | zNomPuesto       | zcomunORO + "N_PUESTO"                                                  | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}           |
| 95  | zIdCentroTrab    | zcomunORO + "ID_CENTRO_TRABAJO"                                         | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}  |
| 99  | zIdDireccion     | zcomunORO + "ID_DIRECCION"                                              | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_DIRECCION"}       |
| 100 | zIdArea          | zcomunORO + "ID_AREA"                                                   | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}            |
| 101 | zIdPuesto        | zcomunORO + "ID_PUESTO"                                                 | CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}          |
| 103 | zoutputdefJOB    | zsubsesion + "!" + znodoJOB + "[*]"                                     | CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"[*]"}                                                             |
| 104 | zmoveJOB         | znodoJOB + ":" + znodoJOB + "[FIRST]"                                   | CSP_JOB_WIW{":"}CSP_JOB_WIW{"[FIRST]"}                                                            |
| 105 | ziteratorJOB     | znodoJOB + ":" + zsubsesion + "!" + znodoJOB                            | CSP_JOB_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW                                                    |
| 106 | zlecturaJOB      | zsubsesion + "!" + znodoJOB                                             | CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW                                                                    |
| 107 | zraizJOB         | zsubsesion + "!" + znodoJOB + "."                                       | CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"."}                                                               |
| 109 | zcomunJOB        | znodoJOB + ":" + zsubsesion + "!" + znodoJOB + "[&amp;VAR.m4lix]" + "." | CSP_JOB_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"[&amp;VAR.m4lix]"}{"."}                           |
| 112 | zIdJob           | zcomunJOB + "STD_ID_JOB_CODE"                                           | CSP_JOB_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_JOB_CODE"}        |
| 113 | zNJob            | zcomunJOB + "STD_N_JOB_CODE"                                            | CSP_JOB_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}         |
| 140 | zcountiWU        | 0                                                                       | 0                                                                                                 |
| 141 | zcountiWL        | 0                                                                       | 0                                                                                                 |
| 142 | zcountiORO       | 0                                                                       | 0                                                                                                 |
| 143 | zcountiJOB       | 0                                                                       | 0                                                                                                 |
| 155 | zcountvWU        | String.valueOf(zcountiWU)                                               | String.valueOf(zcountiWU)                                                                         |
| 156 | zcountvWL        | String.valueOf(zcountiWL)                                               | String.valueOf(zcountiWL)                                                                         |
| 157 | zcountvORO       | String.valueOf(zcountiORO)                                              | String.valueOf(zcountiORO)                                                                        |
| 158 | zcountvJOB       | String.valueOf(zcountiJOB)                                              | String.valueOf(zcountiJOB)                                                                        |
| 195 | zposicions2      | "0"                                                                     | 0                                                                                                 |
| 196 | zposicion2       | 0                                                                       | 0                                                                                                 |
| 219 | zposicions2      | "0"                                                                     | 0                                                                                                 |
| 220 | zposicion2       | 0                                                                       | 0                                                                                                 |
| 240 | zposicions2      | "0"                                                                     | 0                                                                                                 |
| 241 | zposicion2       | 0                                                                       | 0                                                                                                 |
| 263 | zposicions2      | "0"                                                                     | 0                                                                                                 |
| 264 | zposicion2       | 0                                                                       | 0                                                                                                 |
| 290 | zposicions2      | "0"                                                                     | 0                                                                                                 |
| 291 | zposicion2       | 0                                                                       | 0                                                                                                 |
| 347 | zposicions2      | "0"                                                                     | 0                                                                                                 |
| 348 | zposicion2       | 0                                                                       | 0                                                                                                 |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                      |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| 119 | m4:startpage | m4task=CSP_WHO_IS_WHO                                                                                                   |
| 121 | m4:beginjob  |                                                                                                                         |
| 122 | m4:datadef   | m4o=CSP_WHO_IS_WHO; m4name=CSP_WHO_IS_WHO                                                                               |
| 123 | m4:exec      | m4method=CSP_WHO_IS_WHO{"!CSP_WHO_IS_WHO.CSP_BUSQUEDA"}                                                                 |
| 125 | m4:outputdef | m4alias=CSP_UNID_WIW                                                                                                    |
| 125 | m4:param     | name=m4name0; value=CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[*]"}                                                              |
| 126 | m4:outputdef | m4alias=CSP_WL_WIW                                                                                                      |
| 126 | m4:param     | name=m4name0; value=CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[*]"}                                                                |
| 127 | m4:outputdef | m4alias=CSP_DATOS_ORO                                                                                                   |
| 127 | m4:param     | name=m4name0; value=CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[*]"}                                                             |
| 128 | m4:outputdef | m4alias=CSP_JOB_WIW                                                                                                     |
| 128 | m4:param     | name=m4name0; value=CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"[*]"}                                                               |
| 130 | m4:endjob    |                                                                                                                         |
| 132 | m4:move      |                                                                                                                         |
| 132 | m4:param     | name=CSP_WHO_IS_WHO; value=CSP_UNID_WIW{":"}CSP_UNID_WIW{"[FIRST]"}                                                     |
| 133 | m4:move      |                                                                                                                         |
| 133 | m4:param     | name=CSP_WHO_IS_WHO; value=CSP_WL_WIW{":"}CSP_WL_WIW{"[FIRST]"}                                                         |
| 134 | m4:move      |                                                                                                                         |
| 134 | m4:param     | name=CSP_WHO_IS_WHO; value=CSP_DATOS_ORO{":"}CSP_DATOS_ORO{"[FIRST]"}                                                   |
| 135 | m4:move      |                                                                                                                         |
| 135 | m4:param     | name=CSP_WHO_IS_WHO; value=CSP_JOB_WIW{":"}CSP_JOB_WIW{"[FIRST]"}                                                       |
| 198 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                                 |
| 204 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true    |
| 222 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWU).intValue()-1).toString()                                                  |
| 228 | m4:item      | m4name=CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_ID_WORK_UNIT; htmlsafe=true         |
| 228 | m4:item      | m4name=CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_N_WORK_UNIT; htmlsafe=true          |
| 245 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWL).intValue()-1).toString()                                                  |
| 251 | m4:item      | m4name=CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_LOCATION"}; htmlsafe=true     |
| 251 | m4:item      | m4name=CSP_WL_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_WL_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}; htmlsafe=true      |
| 268 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvWU).intValue()-1).toString()                                                  |
| 275 | m4:item      | m4name=CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_ID_WORK_UNIT_PARENT; htmlsafe=true  |
| 275 | m4:item      | m4name=CSP_UNID_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_UNID_WIW{"[&amp;VAR.m4lix]"}{"."}STD_N_WORK_UNIT; htmlsafe=true          |
| 293 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvJOB).intValue()-1).toString()                                                 |
| 300 | m4:item      | m4name=CSP_JOB_WIW{":"}CSP_WHO_IS_WHO{"!"}CSP_JOB_WIW{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true         |
| 339 | m4:label     | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true    |
| 340 | m4:label     | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true   |
| 341 | m4:label     | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}; htmlsafe=true |
| 342 | m4:label     | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true        |
| 343 | m4:label     | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true           |
| 350 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                                 |
| 356 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_AREA"}; htmlsafe=true            |
| 356 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}; htmlsafe=true          |
| 356 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true    |
| 356 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}; htmlsafe=true  |
| 357 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true    |
| 358 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true   |
| 359 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}; htmlsafe=true |
| 360 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true        |
| 361 | m4:item      | m4name=CSP_DATOS_ORO{":"}CSP_WHO_IS_WHO{"!"}CSP_DATOS_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true           |
| 558 | m4:endpage   |                                                                                                                         |

| L   | Operación | Argumentos literales         |
| --- | --------- | ---------------------------- |
| 148 | getCount  | znodoWU,zsubsesion,znodoWU   |
| 149 | getCount  | znodoWL,zsubsesion,znodoWL   |
| 150 | getCount  | znodoORO,zsubsesion,znodoORO |
| 151 | getCount  | znodoJOB,zsubsesion,znodoJOB |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 468 | filtrarColumna | nombre     |

| L   | Condición / acción / mensaje literal                                                                                              |
| --- | --------------------------------------------------------------------------------------------------------------------------------- |
| 194 | if (zcountiORO &gt; 0) {                                                                                                          |
| 218 | if (zcountiWU &gt; 0) {                                                                                                           |
| 239 | if (zcountiWL &gt; 0) {                                                                                                           |
| 262 | if (zcountiWU &gt; 0) {                                                                                                           |
| 289 | if (zcountiJOB &gt; 0) {                                                                                                          |
| 346 | if (zcountiORO &gt; 0) {                                                                                                          |
| 382 | if($(this).val().substring(2,3) != "D") {                                                                                         |
| 385 | if($(this).val()=="00") {                                                                                                         |
| 391 | if($(this).val() != "") {$(this).hide();}                                                                                         |
| 395 | if($(this).val().indexOf("1") &gt; 0) {$(this).hide();}                                                                           |
| 418 | if($(this).val() != "") {                                                                                                         |
| 420 | }else{                                                                                                                            |
| 426 | if($(this).val().substring(5,largo) == str) {                                                                                     |
| 472 | if ((nombre) &amp;&amp; (nombre!="00")){                                                                                          |
| 474 | if(visibles){                                                                                                                     |
| 480 | if (id.indexOf(nombre) &gt; 0){                                                                                                   |
| 482 | } else {                                                                                                                          |
| 487 | }else{                                                                                                                            |
| 493 | if (id.indexOf(nombre) &gt; 0){                                                                                                   |
| 495 | }else {                                                                                                                           |
| 505 | if(visibles &gt; 0) {                                                                                                             |
| 510 | } else {                                                                                                                          |
| 520 | if(nombre){filtrarColumna(nombre);}                                                                                               |
| 523 | if(direccion){filtrarColumna(direccion.substring(direccion.indexOf('-')+1,direccion.length));}                                    |
| 524 | if(centro){filtrarColumna(centrobusqueda);}                                                                                       |
| 525 | if(area){filtrarColumna(area);}                                                                                                   |
| 526 | if(puesto){filtrarColumna(puesto);}                                                                                               |
| 45  | expresión de cálculo/transformación: String sPathTempURI = m4Session.getUserTempURI() + '/';                                      |
| 54  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_WHO_IS_WHO.CSP_BUSQUEDA";                           |
| 56  | expresión de cálculo/transformación: String zoutputdefWU = zsubsesion + "!" + znodoWU + "[*]";                                    |
| 57  | expresión de cálculo/transformación: String zmoveWU = znodoWU + ":" + znodoWU + "[FIRST]";                                        |
| 58  | expresión de cálculo/transformación: String ziteratorWU = znodoWU + ":" + zsubsesion + "!" + znodoWU;                             |
| 59  | expresión de cálculo/transformación: String zlecturaWU = zsubsesion + "!" + znodoWU;                                              |
| 60  | expresión de cálculo/transformación: String zraizWU = zsubsesion + "!" + znodoWU + ".";                                           |
| 62  | expresión de cálculo/transformación: String zcomunWU = znodoWU + ":" + zsubsesion + "!" + znodoWU + "[&amp;VAR.m4lix]" + ".";     |
| 69  | expresión de cálculo/transformación: String zoutputdefWL = zsubsesion + "!" + znodoWL + "[*]";                                    |
| 70  | expresión de cálculo/transformación: String zmoveWL = znodoWL + ":" + znodoWL + "[FIRST]";                                        |
| 71  | expresión de cálculo/transformación: String ziteratorWL = znodoWL + ":" + zsubsesion + "!" + znodoWL;                             |
| 72  | expresión de cálculo/transformación: String zlecturaWL = zsubsesion + "!" + znodoWL;                                              |
| 73  | expresión de cálculo/transformación: String zraizWL = zsubsesion + "!" + znodoWL + ".";                                           |
| 75  | expresión de cálculo/transformación: String zcomunWL = znodoWL + ":" + zsubsesion + "!" + znodoWL + "[&amp;VAR.m4lix]" + ".";     |
| 77  | expresión de cálculo/transformación: String zIdWlocat = zcomunWL + "STD_ID_WORK_LOCATION";                                        |
| 78  | expresión de cálculo/transformación: String zIdNWlocat = zcomunWL + "STD_N_WORK_LOCATION";                                        |
| 79  | expresión de cálculo/transformación: String zIdTypeWlocat = zcomunWL + "STD_ID_WL_TYPE";                                          |
| 81  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                  |
| 82  | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                     |
| 83  | expresión de cálculo/transformación: String ziteratorORO = znodoORO + ":" + zsubsesion + "!" + znodoORO;                          |
| 84  | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + znodoORO;                                            |
| 85  | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + znodoORO + ".";                                         |
| 87  | expresión de cálculo/transformación: String zcomunORO = znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + ".";  |
| 90  | expresión de cálculo/transformación: String zNommbreCompleto = zcomunORO + "NOMBRE_COMPLETO";                                     |
| 91  | expresión de cálculo/transformación: String zNomCentTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                     |
| 92  | expresión de cálculo/transformación: String zDirCentTrabajo = zcomunORO + "DIR_CENTRO_TRABAJO";                                   |
| 93  | expresión de cálculo/transformación: String zNomDireccion = zcomunORO + "N_DIRECCION";                                            |
| 94  | expresión de cálculo/transformación: String zNomPuesto = zcomunORO + "N_PUESTO";                                                  |
| 95  | expresión de cálculo/transformación: String zIdCentroTrab = zcomunORO + "ID_CENTRO_TRABAJO";                                      |
| 99  | expresión de cálculo/transformación: String zIdDireccion = zcomunORO + "ID_DIRECCION";                                            |
| 100 | expresión de cálculo/transformación: String zIdArea = zcomunORO + "ID_AREA";                                                      |
| 101 | expresión de cálculo/transformación: String zIdPuesto = zcomunORO + "ID_PUESTO";                                                  |
| 103 | expresión de cálculo/transformación: String zoutputdefJOB = zsubsesion + "!" + znodoJOB + "[*]";                                  |
| 104 | expresión de cálculo/transformación: String zmoveJOB = znodoJOB + ":" + znodoJOB + "[FIRST]";                                     |
| 105 | expresión de cálculo/transformación: String ziteratorJOB = znodoJOB + ":" + zsubsesion + "!" + znodoJOB;                          |
| 106 | expresión de cálculo/transformación: String zlecturaJOB = zsubsesion + "!" + znodoJOB;                                            |
| 107 | expresión de cálculo/transformación: String zraizJOB = zsubsesion + "!" + znodoJOB + ".";                                         |
| 109 | expresión de cálculo/transformación: String zcomunJOB = znodoJOB + ":" + zsubsesion + "!" + znodoJOB + "[&amp;VAR.m4lix]" + ".";  |
| 112 | expresión de cálculo/transformación: String zIdJob = zcomunJOB + "STD_ID_JOB_CODE";                                               |
| 113 | expresión de cálculo/transformación: String zNJob = zcomunJOB + "STD_N_JOB_CODE";                                                 |
| 458 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "Nombre : " + nombre + "\n";                       |
| 459 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "Direccion : " + direccion + "\n";                 |
| 460 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "Centro : " + centro + "\n";                       |
| 461 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "Area : " + area + "\n";                           |
| 462 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "Puesto : " + puesto + "\n";                       |
| 463 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "direccionbusqueda : " + direccionbusqueda + "\n"; |
| 464 | expresión de cálculo/transformación: parametrosBusqueda = parametrosBusqueda + "centrobusqueda : " + centrobusqueda + "\n";       |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                        |
| --- | -------------------------------------------------------- |
| 34  | /css/estilo_sse.css                                      |
| 35  | /css/style_persdata.css                                  |
| 37  | /library/jquery-2.1.3.min.js                             |
| 170 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp |
| 173 | /iconos/infos.gif                                        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                               | Resolución | Ficha / candidato                                                                                                              |
| ------ | --- | -------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 37  | /library/jquery-2.1.3.min.js                             | contextual | &#96;m4custom/COLL/library/jquery-2.1.3.min.js&#96;                                                                            |
| COLL   | 170 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp | contextual | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md); [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md) |
| CYC    | 37  | /library/jquery-2.1.3.min.js                             | contextual | &#96;m4custom/CYC/library/jquery-2.1.3.min.js&#96;                                                                             |
| CYC    | 170 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp | contextual | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md); [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md) |
| IBER   | 37  | /library/jquery-2.1.3.min.js                             | contextual | &#96;m4custom/IBER/library/jquery-2.1.3.min.js&#96;                                                                            |
| IBER   | 170 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp | contextual | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md); [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_g0_who_is_who_bckp_20032015.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
