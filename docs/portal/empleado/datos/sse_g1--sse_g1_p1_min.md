# Quién es Quién - Datos Empleado

Identificador: `sse_g1/sse_g1_p1_min.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p1_min.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_min.jsp) | `b2d943b7386159ea823ce1ef7da64c797c90bc3769da68a117509326494e85c3` |    346 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p1_min.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_min.jsp)   | `f2750526dfaeacb428dbb901f252a053bd43f46975da38badb354a7821d6f897` |    349 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p1_min.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p1_min.jsp) | `b2d943b7386159ea823ce1ef7da64c797c90bc3769da68a117509326494e85c3` |    346 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p1_min.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_min.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                      |
| --- | --------------------------------------------- |
| 17  | Quién es Quién - Datos Empleado               |
| 179 | " height="141" width="94" alt="foto_bbdd"&gt; |
| 258 | Fecha de Antigüedad:                          |
| 259 | Centro de Trabajo:                            |
| 260 | Dirección del Centro de Trabajo:              |
| 261 | eMail:                                        |
| 261 | "&gt;                                         |
| 262 | Teléfono / Móvil de Empresa:                  |
| 264 | Acceso datos CV:                              |
| 264 | Informe                                       |
| 266 | Acceso datos CV:                              |
| 272 | Localización                                  |
| 279 | Área / Sucursal                               |
| 280 | Nombre de la Unidad                           |
| 281 | Responsable directo                           |
| 298 | eMail Responsable                             |
| 299 | Tfno. / Móvil de Empresa responsable          |
| 309 | Ver ficha completa del empleado               |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 185 | img     | src=/images/empleados/&lt;m4:item m4name='&lt;%=zNombreFoto%&gt;' htmlsafe=                                                                                                                              |
| 189 | img     | height=141; width=94; alt=foto_bbdd; src=/images/empleados/Avatar_female.png                                                                                                                             |
| 191 | img     | height=141; width=94; alt=foto_bbdd; src=/images/empleados/Avatar_male.png                                                                                                                               |
| 247 | a       | class=enlacefuncional; title=DPT; href=javascript:dpt();; target=_self                                                                                                                                   |
| 249 | a       | class=enlacefuncional; title=DPT; style=text-decoration: underline;; href=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA; target=_blank |
| 261 | a       | href=mailto:&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                           |
| 264 | a       | href=javascript:cv();; target=_self                                                                                                                                                                      |
| 286 | a       | href= +                                                                                                                                                                                                  |
| 293 | form    | id=fichaempleado&lt;%=m4lix%&gt;; name=fichaempleado&lt;%=m4lix%&gt;; method=post; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp; accept-charset=UTF-8                       |
| 294 | input   | type=hidden; id=empleado; name=empleado; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                        |
| 295 | input   | type=hidden; id=uniraiz; name=uniraiz; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                          |
| 296 | form    |                                                                                                                                                                                                          |
| 311 | a       | style=font-weight: bold; background-color: #DC0028;COLOR: #ffffff;FONT-SIZE: 13px;; title=FichaCompleta; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;          |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 27  | empleado        | getParameter(request,"empleado") |
| 28  | uniraiz         | getParameter(request,"uniraiz")  |
| 209 | zIdPerson       | getBagEntries("zIdPerson")       |

| L   | Variable             | Expresión fuente                                                        | Resolución estática parcial                                                                    |
| --- | -------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 27  | empleado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                           |
| 28  | uniraiz              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz")                            |
| 35  | zsubsesion           | "CSP_QUIEN_ES_QUIEN"                                                    | CSP_QUIEN_ES_QUIEN                                                                             |
| 36  | zmeta4object         | "CSP_QUIEN_ES_QUIEN"                                                    | CSP_QUIEN_ES_QUIEN                                                                             |
| 37  | znodoORO             | "CSP_FICHA"                                                             | CSP_FICHA                                                                                      |
| 38  | znodoRESP            | "CSP_RESP"                                                              | CSP_RESP                                                                                       |
| 39  | znodoMRESP           | "CSP_MAIL_RESP"                                                         | CSP_MAIL_RESP                                                                                  |
| 41  | zoutputdefORO        | zsubsesion + "!" + znodoORO + "[*]"                                     | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[*]"}                                                        |
| 42  | zmoveORO             | znodoORO + ":" + znodoORO + "[FIRST]"                                   | CSP_FICHA{":"}CSP_FICHA{"[FIRST]"}                                                             |
| 43  | ziteratorORO         | znodoORO + ":" + zsubsesion + "!" + znodoORO                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA                                                 |
| 44  | zlecturaORO          | zsubsesion + "!" + znodoORO                                             | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA                                                               |
| 45  | zraizORO             | zsubsesion + "!" + znodoORO + "."                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"."}                                                          |
| 47  | zmetodocarga         | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"                   | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"}                                   |
| 49  | zcomunORO            | znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "." | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}                        |
| 52  | zNommbreCompleto     | zcomunORO + "NOMBRE_COMPLETO"                                           | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}     |
| 53  | zIdEmpleado          | zcomunORO + "ID_EMPLEADO"                                               | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_EMPLEADO"}         |
| 54  | zNomCentTrabajo      | zcomunORO + "N_CENTRO_TRABAJO"                                          | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}    |
| 55  | zDirCentTrabajo      | zcomunORO + "DIR_CENTRO_TRABAJO"                                        | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}  |
| 56  | zNomDireccion        | zcomunORO + "N_DIRECCION"                                               | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}         |
| 57  | zNomPuesto           | zcomunORO + "N_PUESTO"                                                  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}            |
| 58  | zIdCentroTrab        | zcomunORO + "ID_CENTRO_TRABAJO"                                         | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}   |
| 59  | zFotoEmpleado        | zcomunORO + "SCO_BLOB_PHOTO"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"SCO_BLOB_PHOTO"}      |
| 60  | zMail                | zcomunORO + "CORREO"                                                    | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}              |
| 61  | zFAntiguedad         | zcomunORO + "FEC_ANTIGUEDAD"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}      |
| 62  | zNArea               | zcomunORO + "N_AREA"                                                    | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}              |
| 63  | zNCentroTrabajo      | zcomunORO + "N_CENTRO_TRABAJO"                                          | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}    |
| 64  | zNDireccion          | zcomunORO + "N_DIRECCION"                                               | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}         |
| 65  | zNPuesto             | zcomunORO + "N_PUESTO"                                                  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}            |
| 66  | zNServicio           | zcomunORO + "N_SERVICIO"                                                | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_SERVICIO"}          |
| 67  | zNTipoPuesto         | zcomunORO + "N_TIPO_PUESTO"                                             | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_TIPO_PUESTO"}       |
| 68  | zNUnidad             | zcomunORO + "N_UNIDAD"                                                  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}            |
| 69  | zNUnidadRaiz         | zcomunORO + "N_UNIDAD_RAIZ"                                             | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}       |
| 70  | zIdResponsable       | zcomunORO + "ID_RESPONSABLE"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_RESPONSABLE"}      |
| 71  | zIdPuesto            | zcomunORO + "ID_PUESTO"                                                 | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}           |
| 72  | zIdUnidadRaiz        | zcomunORO + "ID_UNIDAD_RAIZ"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_UNIDAD_RAIZ"}      |
| 73  | zIdUnidadRaizResp    | zcomunORO + "ID_UNID_RESPONSABLE"                                       | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_UNID_RESPONSABLE"} |
| 74  | zTlfsFicha           | zcomunORO + "CSP_TLFS_FICHA"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CSP_TLFS_FICHA"}      |
| 75  | znodoPuestos         | "CSP_PUESTOS"                                                           | CSP_PUESTOS                                                                                    |
| 78  | zNombreFoto          | zcomunORO + "CSP_NOMBRE_FOTO"                                           | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CSP_NOMBRE_FOTO"}     |
| 80  | zoutputdefQEQ        | zsubsesion + "!" + zsubsesion + "[*]"                                   | CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                               |
| 81  | zmoveQEQ             | zsubsesion + ":" + zsubsesion + "[FIRST]"                               | CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                                           |
| 84  | zoutputdefRESP       | zsubsesion + "!" + znodoRESP + "[*]"                                    | CSP_QUIEN_ES_QUIEN{"!"}CSP_RESP{"[*]"}                                                         |
| 85  | zmoveRESP            | znodoRESP + ":" + znodoRESP + "[FIRST]"                                 | CSP_RESP{":"}CSP_RESP{"[FIRST]"}                                                               |
| 87  | zoutputdefMRESP      | zsubsesion + "!" + znodoMRESP + "[*]"                                   | CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESP{"[*]"}                                                    |
| 88  | zmoveMRESP           | znodoMRESP + ":" + znodoMRESP + "[FIRST]"                               | CSP_MAIL_RESP{":"}CSP_MAIL_RESP{"[FIRST]"}                                                     |
| 91  | zoutputdefPuestos    | zsubsesion + "!" + znodoPuestos + "[*]"                                 | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                      |
| 92  | zmovePuestos         | znodoPuestos + ":" + znodoPuestos + "[FIRST]"                           | CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                                         |
| 94  | mostrarDocumento     | ""                                                                      |                                                                                                |
| 95  | matricula            | ""                                                                      |                                                                                                |
| 96  | matriculaResp        | ""                                                                      |                                                                                                |
| 97  | esRrhh               | ""                                                                      |                                                                                                |
| 98  | esRresponsable       | ""                                                                      |                                                                                                |
| 99  | nombreResponsable    | ""                                                                      |                                                                                                |
| 100 | mailResponsable      | ""                                                                      |                                                                                                |
| 101 | telefonosResponsable | ""                                                                      |                                                                                                |
| 102 | sexo                 | ""                                                                      |                                                                                                |
| 103 | mostrarNDPT          | "0"                                                                     | 0                                                                                              |
| 104 | auxMatricula         | ""                                                                      |                                                                                                |
| 142 | zcountiORO           | 0                                                                       | 0                                                                                              |
| 143 | sociedad             | ""                                                                      |                                                                                                |
| 155 | zcountvORO           | String.valueOf(zcountiORO)                                              | String.valueOf(zcountiORO)                                                                     |
| 162 | zposicions2          | "0"                                                                     | 0                                                                                              |
| 163 | zposicion2           | 0                                                                       | 0                                                                                              |
| 228 | auxNDPT              | 0                                                                       | 0                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| 107 | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                                           |
| 109 | m4:beginjob  |                                                                                                                     |
| 110 | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                                   |
| 123 | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"}                                               |
| 125 | m4:outputdef | m4alias=CSP_FICHA                                                                                                   |
| 125 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[*]"}                                                         |
| 126 | m4:outputdef | m4alias=CSP_QUIEN_ES_QUIEN                                                                                          |
| 126 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                                |
| 127 | m4:outputdef | m4alias=CSP_RESP                                                                                                    |
| 127 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_RESP{"[*]"}                                                          |
| 128 | m4:outputdef | m4alias=CSP_MAIL_RESP                                                                                               |
| 128 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESP{"[*]"}                                                     |
| 129 | m4:outputdef | m4alias=CSP_PUESTOS                                                                                                 |
| 129 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                       |
| 131 | m4:endjob    |                                                                                                                     |
| 133 | m4:move      |                                                                                                                     |
| 133 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FICHA{":"}CSP_FICHA{"[FIRST]"}                                                   |
| 134 | m4:move      |                                                                                                                     |
| 134 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_QUIEN_ES_QUIEN                                                                   |
| 135 | m4:move      |                                                                                                                     |
| 135 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_RESP{":"}CSP_RESP{"[FIRST]"}                                                     |
| 136 | m4:move      |                                                                                                                     |
| 136 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_MAIL_RESP{":"}CSP_MAIL_RESP{"[FIRST]"}                                           |
| 137 | m4:move      |                                                                                                                     |
| 137 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                               |
| 165 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                             |
| 175 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true    |
| 247 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true           |
| 249 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true           |
| 251 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true           |
| 254 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true           |
| 258 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}; htmlsafe=true     |
| 259 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true   |
| 260 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}; htmlsafe=true |
| 261 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}; htmlsafe=true             |
| 262 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CSP_TLFS_FICHA"}; htmlsafe=true     |
| 278 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true        |
| 279 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; htmlsafe=true             |
| 280 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}; htmlsafe=true           |
| 284 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_RESPONSABLE"}; htmlsafe=true     |

| L   | Operación        | Argumentos literales                                        |
| --- | ---------------- | ----------------------------------------------------------- |
| 116 | setItem          | zsubsesion,zsubsesion,"","P_EMPLEADO",empleado              |
| 117 | setItem          | zsubsesion,zsubsesion,"","P_UNIDAD_RAIZ",uniraiz            |
| 146 | getCountInClient | znodoORO,zsubsesion,znodoORO                                |
| 149 | getItem          | znodoORO,zmeta4object,znodoORO,"","SCO_BLOB_PHOTO"          |
| 150 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_ID_GENDER"           |
| 151 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_ORGANIZATION"         |
| 203 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_PUESTO")              |
| 210 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_RESPONSABLE"          |
| 211 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO"             |
| 215 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","ES_RRHH"         |
| 216 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","ES_RESPONSABLE"  |
| 219 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC" |
| 223 | getItem          | znodoRESP,zmeta4object,znodoRESP,"","SCO_GB_NAME"           |
| 224 | getItem          | znodoMRESP,zmeta4object,znodoMRESP,"","STD_EMAIL"           |
| 225 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_RESPONSABLE"    |
| 230 | getItem          | znodoPuestos,zmeta4object,znodoPuestos,"","CSP_FUNCIONES"   |
| 305 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO")            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 334 | dpt     |            |
| 338 | cv      |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 115 | if(empleado != null){                                                                                                                                                                                            |
| 161 | if (zcountiORO &gt; 0) {                                                                                                                                                                                         |
| 184 | &lt;%if (!zFotoEmpleado.equals("")){%&gt;                                                                                                                                                                        |
| 187 | &lt;%} else if(sexo.equals("2")){%&gt;                                                                                                                                                                           |
| 190 | &lt;% }else{ %&gt;                                                                                                                                                                                               |
| 244 | &lt;%if ((esRresponsable.equals("S")) &#124;&#124; (esRrhh.equals("S")) &#124;&#124; (matricula.equals(empleado))){%&gt;                                                                                         |
| 245 | &lt;%if (auxNDPT&gt;0){%&gt;                                                                                                                                                                                     |
| 248 | &lt;%}else if (mostrarDocumento.equals("1")){%&gt;                                                                                                                                                               |
| 250 | &lt;%} else{%&gt;                                                                                                                                                                                                |
| 253 | }else{%&gt;                                                                                                                                                                                                      |
| 263 | &lt;%if ((esRresponsable.equals("S")) &#124;&#124; (esRrhh.equals("S")) &#124;&#124; (matricula.equals(empleado)) ){%&gt;                                                                                        |
| 265 | &lt;%}else{%&gt;                                                                                                                                                                                                 |
| 285 | if (responsable.length &gt; 0) {                                                                                                                                                                                 |
| 287 | }else{                                                                                                                                                                                                           |
| 303 | &lt;%if (esRrhh.equals("S")){                                                                                                                                                                                    |
| 332 | &lt;%if ((esRresponsable.equals("S")) &#124;&#124; (esRrhh.equals("S")) &#124;&#124; (matricula.equals(empleado))){%&gt;                                                                                         |
| 41  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                                                                                                 |
| 42  | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                                                                                                    |
| 43  | expresión de cálculo/transformación: String ziteratorORO = znodoORO + ":" + zsubsesion + "!" + znodoORO;                                                                                                         |
| 44  | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + znodoORO;                                                                                                                           |
| 45  | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + znodoORO + ".";                                                                                                                        |
| 47  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO";                                                                                                |
| 49  | expresión de cálculo/transformación: String zcomunORO = znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + ".";                                                                                 |
| 52  | expresión de cálculo/transformación: String zNommbreCompleto = zcomunORO + "NOMBRE_COMPLETO";                                                                                                                    |
| 53  | expresión de cálculo/transformación: String zIdEmpleado = zcomunORO + "ID_EMPLEADO";                                                                                                                             |
| 54  | expresión de cálculo/transformación: String zNomCentTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                                                                                                    |
| 55  | expresión de cálculo/transformación: String zDirCentTrabajo = zcomunORO + "DIR_CENTRO_TRABAJO";                                                                                                                  |
| 56  | expresión de cálculo/transformación: String zNomDireccion = zcomunORO + "N_DIRECCION";                                                                                                                           |
| 57  | expresión de cálculo/transformación: String zNomPuesto = zcomunORO + "N_PUESTO";                                                                                                                                 |
| 58  | expresión de cálculo/transformación: String zIdCentroTrab = zcomunORO + "ID_CENTRO_TRABAJO";                                                                                                                     |
| 59  | expresión de cálculo/transformación: String zFotoEmpleado = zcomunORO + "SCO_BLOB_PHOTO";                                                                                                                        |
| 60  | expresión de cálculo/transformación: String zMail = zcomunORO + "CORREO";                                                                                                                                        |
| 61  | expresión de cálculo/transformación: String zFAntiguedad = zcomunORO + "FEC_ANTIGUEDAD";                                                                                                                         |
| 62  | expresión de cálculo/transformación: String zNArea = zcomunORO + "N_AREA";                                                                                                                                       |
| 63  | expresión de cálculo/transformación: String zNCentroTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                                                                                                    |
| 64  | expresión de cálculo/transformación: String zNDireccion = zcomunORO + "N_DIRECCION";                                                                                                                             |
| 65  | expresión de cálculo/transformación: String zNPuesto = zcomunORO + "N_PUESTO";                                                                                                                                   |
| 66  | expresión de cálculo/transformación: String zNServicio = zcomunORO + "N_SERVICIO";                                                                                                                               |
| 67  | expresión de cálculo/transformación: String zNTipoPuesto = zcomunORO + "N_TIPO_PUESTO";                                                                                                                          |
| 68  | expresión de cálculo/transformación: String zNUnidad = zcomunORO + "N_UNIDAD";                                                                                                                                   |
| 69  | expresión de cálculo/transformación: String zNUnidadRaiz = zcomunORO + "N_UNIDAD_RAIZ";                                                                                                                          |
| 70  | expresión de cálculo/transformación: String zIdResponsable = zcomunORO + "ID_RESPONSABLE";                                                                                                                       |
| 71  | expresión de cálculo/transformación: String zIdPuesto = zcomunORO + "ID_PUESTO";                                                                                                                                 |
| 72  | expresión de cálculo/transformación: String zIdUnidadRaiz = zcomunORO + "ID_UNIDAD_RAIZ";                                                                                                                        |
| 73  | expresión de cálculo/transformación: String zIdUnidadRaizResp= zcomunORO + "ID_UNID_RESPONSABLE";                                                                                                                |
| 74  | expresión de cálculo/transformación: String zTlfsFicha = zcomunORO + "CSP_TLFS_FICHA";                                                                                                                           |
| 78  | expresión de cálculo/transformación: String zNombreFoto = zcomunORO + "CSP_NOMBRE_FOTO";                                                                                                                         |
| 80  | expresión de cálculo/transformación: String zoutputdefQEQ = zsubsesion + "!" + zsubsesion + "[*]";                                                                                                               |
| 81  | expresión de cálculo/transformación: String zmoveQEQ = zsubsesion + ":" + zsubsesion + "[FIRST]";                                                                                                                |
| 84  | expresión de cálculo/transformación: String zoutputdefRESP = zsubsesion + "!" + znodoRESP + "[*]";                                                                                                               |
| 85  | expresión de cálculo/transformación: String zmoveRESP = znodoRESP + ":" + znodoRESP + "[FIRST]";                                                                                                                 |
| 87  | expresión de cálculo/transformación: String zoutputdefMRESP = zsubsesion + "!" + znodoMRESP + "[*]";                                                                                                             |
| 88  | expresión de cálculo/transformación: String zmoveMRESP = znodoMRESP + ":" + znodoMRESP + "[FIRST]";                                                                                                              |
| 91  | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + znodoPuestos + "[*]";                                                                                                         |
| 92  | expresión de cálculo/transformación: String zmovePuestos = znodoPuestos + ":" + znodoPuestos + "[FIRST]";                                                                                                        |
| 286 | expresión de cálculo/transformación: document.write("&lt;a href=" + "javascript:m4submit('fichaempleado&lt;%=m4lix%&gt;')" + "&gt;" + '&lt;%=nombreResponsable%&gt;' +"&lt;/a&gt;");                             |
| 299 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Tfno. / Móvil de Empresa responsable &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;%=telefonosResponsable%&gt;&lt;/td&gt;&lt;/tr&gt; |
| 324 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + ' -- Valores de la visibilidad -- ' + '\n';                                                                                           |
| 325 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'esRresponsable :' + '&lt;%=esRresponsable%&gt;' + '\n';                                                                              |
| 326 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'esRrhh :' + '&lt;%=esRrhh%&gt;' + '\n';                                                                                              |
| 327 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'matricula :' + '&lt;%=matricula%&gt;' + '\n';                                                                                        |
| 328 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'empleado :' + '&lt;%=empleado%&gt;' + '\n';                                                                                          |
| 329 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'mostrarDocumento :' + '&lt;%=mostrarDocumento%&gt;' + '\n';                                                                          |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------------------------ |
| 19  | /css/estilo_sse.css                                                                                                |
| 20  | /css/style_persdata.css                                                                                            |
| 22  | /library/jquery.js                                                                                                 |
| 23  | /libreria/funciones_sse.js                                                                                         |
| 185 | /images/empleados/&lt;m4:item m4name=                                                                              |
| 189 | /images/empleados/Avatar_female.png                                                                                |
| 191 | /images/empleados/Avatar_male.png                                                                                  |
| 247 | javascript:dpt();                                                                                                  |
| 249 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA    |
| 261 | mailto:&lt;m4:item m4name=                                                                                         |
| 264 | javascript:cv();                                                                                                   |
| 286 | +                                                                                                                  |
| 293 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp                                                 |
| 311 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;                                  |
| 335 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=zIdPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; |
| 339 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                      |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/sse_g1_p1_min.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_min.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                      |
| --- | --------------------------------------------- |
| 17  | Quién es Quién - Datos Empleado               |
| 182 | " height="141" width="94" alt="foto_bbdd"&gt; |
| 261 | Fecha de Antigüedad:                          |
| 262 | Centro de Trabajo:                            |
| 263 | Dirección del Centro de Trabajo:              |
| 264 | eMail:                                        |
| 264 | "&gt;                                         |
| 265 | Teléfono / Móvil de Empresa:                  |
| 267 | Acceso datos CV:                              |
| 267 | Informe                                       |
| 269 | Acceso datos CV:                              |
| 275 | Localización                                  |
| 282 | Área / Sucursal                               |
| 283 | Nombre de la Unidad                           |
| 284 | Responsable directo                           |
| 301 | eMail Responsable                             |
| 302 | Tfno. / Móvil de Empresa responsable          |
| 312 | Ver ficha completa del empleado               |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 188 | img     | src=/images/empleados/&lt;m4:item m4name='&lt;%=zNombreFoto%&gt;' htmlsafe=                                                                                                                              |
| 192 | img     | height=141; width=94; alt=foto_bbdd; src=/images/empleados/Avatar_female.png                                                                                                                             |
| 194 | img     | height=141; width=94; alt=foto_bbdd; src=/images/empleados/Avatar_male.png                                                                                                                               |
| 250 | a       | class=enlacefuncional; title=DPT; href=javascript:dpt();; target=_self                                                                                                                                   |
| 252 | a       | class=enlacefuncional; title=DPT; style=text-decoration: underline;; href=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA; target=_blank |
| 264 | a       | href=mailto:&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                           |
| 267 | a       | href=javascript:cv();; target=_self                                                                                                                                                                      |
| 289 | a       | href= +                                                                                                                                                                                                  |
| 296 | form    | id=fichaempleado&lt;%=m4lix%&gt;; name=fichaempleado&lt;%=m4lix%&gt;; method=post; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp; accept-charset=UTF-8                       |
| 297 | input   | type=hidden; id=empleado; name=empleado; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                        |
| 298 | input   | type=hidden; id=uniraiz; name=uniraiz; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                          |
| 299 | form    |                                                                                                                                                                                                          |
| 314 | a       | style=font-weight: bold; background-color: #DC0028;COLOR: #ffffff;FONT-SIZE: 13px;; title=FichaCompleta; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;          |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 29  | empleado        | getParameter(request,"empleado") |
| 30  | uniraiz         | getParameter(request,"uniraiz")  |
| 212 | zIdPerson       | getBagEntries("zIdPerson")       |

| L   | Variable             | Expresión fuente                                                        | Resolución estática parcial                                                                    |
| --- | -------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 29  | empleado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                           |
| 30  | uniraiz              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz")                            |
| 37  | zsubsesion           | "CSP_QUIEN_ES_QUIEN"                                                    | CSP_QUIEN_ES_QUIEN                                                                             |
| 38  | zmeta4object         | "CSP_QUIEN_ES_QUIEN"                                                    | CSP_QUIEN_ES_QUIEN                                                                             |
| 39  | znodoORO             | "CSP_FICHA"                                                             | CSP_FICHA                                                                                      |
| 40  | znodoRESP            | "CSP_RESP"                                                              | CSP_RESP                                                                                       |
| 41  | znodoMRESP           | "CSP_MAIL_RESP"                                                         | CSP_MAIL_RESP                                                                                  |
| 43  | zoutputdefORO        | zsubsesion + "!" + znodoORO + "[*]"                                     | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[*]"}                                                        |
| 44  | zmoveORO             | znodoORO + ":" + znodoORO + "[FIRST]"                                   | CSP_FICHA{":"}CSP_FICHA{"[FIRST]"}                                                             |
| 45  | ziteratorORO         | znodoORO + ":" + zsubsesion + "!" + znodoORO                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA                                                 |
| 46  | zlecturaORO          | zsubsesion + "!" + znodoORO                                             | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA                                                               |
| 47  | zraizORO             | zsubsesion + "!" + znodoORO + "."                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"."}                                                          |
| 49  | zmetodocarga         | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"                   | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"}                                   |
| 51  | zcomunORO            | znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "." | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}                        |
| 54  | zNommbreCompleto     | zcomunORO + "NOMBRE_COMPLETO"                                           | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}     |
| 55  | zIdEmpleado          | zcomunORO + "ID_EMPLEADO"                                               | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_EMPLEADO"}         |
| 56  | zNomCentTrabajo      | zcomunORO + "N_CENTRO_TRABAJO"                                          | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}    |
| 57  | zDirCentTrabajo      | zcomunORO + "DIR_CENTRO_TRABAJO"                                        | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}  |
| 58  | zNomDireccion        | zcomunORO + "N_DIRECCION"                                               | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}         |
| 59  | zNomPuesto           | zcomunORO + "N_PUESTO"                                                  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}            |
| 60  | zIdCentroTrab        | zcomunORO + "ID_CENTRO_TRABAJO"                                         | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}   |
| 61  | zFotoEmpleado        | zcomunORO + "SCO_BLOB_PHOTO"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"SCO_BLOB_PHOTO"}      |
| 62  | zMail                | zcomunORO + "CORREO"                                                    | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}              |
| 63  | zFAntiguedad         | zcomunORO + "FEC_ANTIGUEDAD"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}      |
| 64  | zNArea               | zcomunORO + "N_AREA"                                                    | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}              |
| 65  | zNCentroTrabajo      | zcomunORO + "N_CENTRO_TRABAJO"                                          | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}    |
| 66  | zNDireccion          | zcomunORO + "N_DIRECCION"                                               | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}         |
| 67  | zNPuesto             | zcomunORO + "N_PUESTO"                                                  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}            |
| 68  | zNServicio           | zcomunORO + "N_SERVICIO"                                                | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_SERVICIO"}          |
| 69  | zNTipoPuesto         | zcomunORO + "N_TIPO_PUESTO"                                             | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_TIPO_PUESTO"}       |
| 70  | zNUnidad             | zcomunORO + "N_UNIDAD"                                                  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}            |
| 71  | zNUnidadRaiz         | zcomunORO + "N_UNIDAD_RAIZ"                                             | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}       |
| 72  | zIdResponsable       | zcomunORO + "ID_RESPONSABLE"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_RESPONSABLE"}      |
| 73  | zIdPuesto            | zcomunORO + "ID_PUESTO"                                                 | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}           |
| 74  | zIdUnidadRaiz        | zcomunORO + "ID_UNIDAD_RAIZ"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_UNIDAD_RAIZ"}      |
| 75  | zIdUnidadRaizResp    | zcomunORO + "ID_UNID_RESPONSABLE"                                       | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_UNID_RESPONSABLE"} |
| 76  | zTlfsFicha           | zcomunORO + "CSP_TLFS_FICHA"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CSP_TLFS_FICHA"}      |
| 77  | znodoPuestos         | "CSP_PUESTOS"                                                           | CSP_PUESTOS                                                                                    |
| 80  | zNombreFoto          | zcomunORO + "CSP_NOMBRE_FOTO"                                           | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CSP_NOMBRE_FOTO"}     |
| 82  | zoutputdefQEQ        | zsubsesion + "!" + zsubsesion + "[*]"                                   | CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                               |
| 83  | zmoveQEQ             | zsubsesion + ":" + zsubsesion + "[FIRST]"                               | CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                                           |
| 86  | zoutputdefRESP       | zsubsesion + "!" + znodoRESP + "[*]"                                    | CSP_QUIEN_ES_QUIEN{"!"}CSP_RESP{"[*]"}                                                         |
| 87  | zmoveRESP            | znodoRESP + ":" + znodoRESP + "[FIRST]"                                 | CSP_RESP{":"}CSP_RESP{"[FIRST]"}                                                               |
| 89  | zoutputdefMRESP      | zsubsesion + "!" + znodoMRESP + "[*]"                                   | CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESP{"[*]"}                                                    |
| 90  | zmoveMRESP           | znodoMRESP + ":" + znodoMRESP + "[FIRST]"                               | CSP_MAIL_RESP{":"}CSP_MAIL_RESP{"[FIRST]"}                                                     |
| 93  | zoutputdefPuestos    | zsubsesion + "!" + znodoPuestos + "[*]"                                 | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                      |
| 94  | zmovePuestos         | znodoPuestos + ":" + znodoPuestos + "[FIRST]"                           | CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                                         |
| 96  | mostrarDocumento     | ""                                                                      |                                                                                                |
| 97  | matricula            | ""                                                                      |                                                                                                |
| 98  | matriculaResp        | ""                                                                      |                                                                                                |
| 99  | esRrhh               | ""                                                                      |                                                                                                |
| 100 | esRresponsable       | ""                                                                      |                                                                                                |
| 101 | nombreResponsable    | ""                                                                      |                                                                                                |
| 102 | mailResponsable      | ""                                                                      |                                                                                                |
| 103 | telefonosResponsable | ""                                                                      |                                                                                                |
| 104 | sexo                 | ""                                                                      |                                                                                                |
| 105 | mostrarNDPT          | "0"                                                                     | 0                                                                                              |
| 106 | auxMatricula         | ""                                                                      |                                                                                                |
| 146 | zcountiORO           | 0                                                                       | 0                                                                                              |
| 158 | zcountvORO           | String.valueOf(zcountiORO)                                              | String.valueOf(zcountiORO)                                                                     |
| 165 | zposicions2          | "0"                                                                     | 0                                                                                              |
| 166 | zposicion2           | 0                                                                       | 0                                                                                              |
| 231 | auxNDPT              | 0                                                                       | 0                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| 111 | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                                           |
| 113 | m4:beginjob  |                                                                                                                     |
| 114 | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                                   |
| 127 | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"}                                               |
| 129 | m4:outputdef | m4alias=CSP_FICHA                                                                                                   |
| 129 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[*]"}                                                         |
| 130 | m4:outputdef | m4alias=CSP_QUIEN_ES_QUIEN                                                                                          |
| 130 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                                |
| 131 | m4:outputdef | m4alias=CSP_RESP                                                                                                    |
| 131 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_RESP{"[*]"}                                                          |
| 132 | m4:outputdef | m4alias=CSP_MAIL_RESP                                                                                               |
| 132 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESP{"[*]"}                                                     |
| 133 | m4:outputdef | m4alias=CSP_PUESTOS                                                                                                 |
| 133 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                       |
| 135 | m4:endjob    |                                                                                                                     |
| 137 | m4:move      |                                                                                                                     |
| 137 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FICHA{":"}CSP_FICHA{"[FIRST]"}                                                   |
| 138 | m4:move      |                                                                                                                     |
| 138 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_QUIEN_ES_QUIEN                                                                   |
| 139 | m4:move      |                                                                                                                     |
| 139 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_RESP{":"}CSP_RESP{"[FIRST]"}                                                     |
| 140 | m4:move      |                                                                                                                     |
| 140 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_MAIL_RESP{":"}CSP_MAIL_RESP{"[FIRST]"}                                           |
| 141 | m4:move      |                                                                                                                     |
| 141 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                               |
| 168 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                             |
| 178 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true    |
| 250 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true           |
| 252 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true           |
| 254 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true           |
| 257 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true           |
| 261 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}; htmlsafe=true     |
| 262 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true   |
| 263 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}; htmlsafe=true |
| 264 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}; htmlsafe=true             |
| 265 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CSP_TLFS_FICHA"}; htmlsafe=true     |
| 281 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true        |
| 282 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; htmlsafe=true             |
| 283 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}; htmlsafe=true           |
| 287 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_RESPONSABLE"}; htmlsafe=true     |

| L   | Operación        | Argumentos literales                                        |
| --- | ---------------- | ----------------------------------------------------------- |
| 120 | setItem          | zsubsesion,zsubsesion,"","P_EMPLEADO",empleado              |
| 121 | setItem          | zsubsesion,zsubsesion,"","P_UNIDAD_RAIZ",uniraiz            |
| 150 | getCountInClient | znodoORO,zsubsesion,znodoORO                                |
| 153 | getItem          | znodoORO,zmeta4object,znodoORO,"","SCO_BLOB_PHOTO"          |
| 154 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_ID_GENDER"           |
| 206 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_PUESTO")              |
| 213 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_RESPONSABLE"          |
| 214 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO"             |
| 218 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","ES_RRHH"         |
| 219 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","ES_RESPONSABLE"  |
| 222 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC" |
| 226 | getItem          | znodoRESP,zmeta4object,znodoRESP,"","SCO_GB_NAME"           |
| 227 | getItem          | znodoMRESP,zmeta4object,znodoMRESP,"","STD_EMAIL"           |
| 228 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_RESPONSABLE"    |
| 233 | getItem          | znodoPuestos,zmeta4object,znodoPuestos,"","CSP_FUNCIONES"   |
| 308 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO")            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 337 | dpt     |            |
| 341 | cv      |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 119 | if(empleado != null){                                                                                                                                                                                            |
| 164 | if (zcountiORO &gt; 0) {                                                                                                                                                                                         |
| 187 | &lt;%if (!zFotoEmpleado.equals("")){%&gt;                                                                                                                                                                        |
| 190 | &lt;%} else if(sexo.equals("2")){%&gt;                                                                                                                                                                           |
| 193 | &lt;% }else{ %&gt;                                                                                                                                                                                               |
| 247 | &lt;%if ((esRresponsable.equals("S")) &#124;&#124; (esRrhh.equals("S")) &#124;&#124; (matricula.equals(empleado))){%&gt;                                                                                         |
| 248 | &lt;%if (auxNDPT&gt;0){%&gt;                                                                                                                                                                                     |
| 251 | &lt;%}else if (mostrarDocumento.equals("1")){%&gt;                                                                                                                                                               |
| 253 | &lt;%} else{%&gt;                                                                                                                                                                                                |
| 256 | }else{%&gt;                                                                                                                                                                                                      |
| 266 | &lt;%if ((esRresponsable.equals("S")) &#124;&#124; (esRrhh.equals("S")) &#124;&#124; (matricula.equals(empleado)) ){%&gt;                                                                                        |
| 268 | &lt;%}else{%&gt;                                                                                                                                                                                                 |
| 288 | if (responsable.length &gt; 0) {                                                                                                                                                                                 |
| 290 | }else{                                                                                                                                                                                                           |
| 306 | &lt;%if (esRrhh.equals("S")){                                                                                                                                                                                    |
| 335 | &lt;%if ((esRresponsable.equals("S")) &#124;&#124; (esRrhh.equals("S")) &#124;&#124; (matricula.equals(empleado))){%&gt;                                                                                         |
| 43  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                                                                                                 |
| 44  | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                                                                                                    |
| 45  | expresión de cálculo/transformación: String ziteratorORO = znodoORO + ":" + zsubsesion + "!" + znodoORO;                                                                                                         |
| 46  | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + znodoORO;                                                                                                                           |
| 47  | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + znodoORO + ".";                                                                                                                        |
| 49  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO";                                                                                                |
| 51  | expresión de cálculo/transformación: String zcomunORO = znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + ".";                                                                                 |
| 54  | expresión de cálculo/transformación: String zNommbreCompleto = zcomunORO + "NOMBRE_COMPLETO";                                                                                                                    |
| 55  | expresión de cálculo/transformación: String zIdEmpleado = zcomunORO + "ID_EMPLEADO";                                                                                                                             |
| 56  | expresión de cálculo/transformación: String zNomCentTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                                                                                                    |
| 57  | expresión de cálculo/transformación: String zDirCentTrabajo = zcomunORO + "DIR_CENTRO_TRABAJO";                                                                                                                  |
| 58  | expresión de cálculo/transformación: String zNomDireccion = zcomunORO + "N_DIRECCION";                                                                                                                           |
| 59  | expresión de cálculo/transformación: String zNomPuesto = zcomunORO + "N_PUESTO";                                                                                                                                 |
| 60  | expresión de cálculo/transformación: String zIdCentroTrab = zcomunORO + "ID_CENTRO_TRABAJO";                                                                                                                     |
| 61  | expresión de cálculo/transformación: String zFotoEmpleado = zcomunORO + "SCO_BLOB_PHOTO";                                                                                                                        |
| 62  | expresión de cálculo/transformación: String zMail = zcomunORO + "CORREO";                                                                                                                                        |
| 63  | expresión de cálculo/transformación: String zFAntiguedad = zcomunORO + "FEC_ANTIGUEDAD";                                                                                                                         |
| 64  | expresión de cálculo/transformación: String zNArea = zcomunORO + "N_AREA";                                                                                                                                       |
| 65  | expresión de cálculo/transformación: String zNCentroTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                                                                                                    |
| 66  | expresión de cálculo/transformación: String zNDireccion = zcomunORO + "N_DIRECCION";                                                                                                                             |
| 67  | expresión de cálculo/transformación: String zNPuesto = zcomunORO + "N_PUESTO";                                                                                                                                   |
| 68  | expresión de cálculo/transformación: String zNServicio = zcomunORO + "N_SERVICIO";                                                                                                                               |
| 69  | expresión de cálculo/transformación: String zNTipoPuesto = zcomunORO + "N_TIPO_PUESTO";                                                                                                                          |
| 70  | expresión de cálculo/transformación: String zNUnidad = zcomunORO + "N_UNIDAD";                                                                                                                                   |
| 71  | expresión de cálculo/transformación: String zNUnidadRaiz = zcomunORO + "N_UNIDAD_RAIZ";                                                                                                                          |
| 72  | expresión de cálculo/transformación: String zIdResponsable = zcomunORO + "ID_RESPONSABLE";                                                                                                                       |
| 73  | expresión de cálculo/transformación: String zIdPuesto = zcomunORO + "ID_PUESTO";                                                                                                                                 |
| 74  | expresión de cálculo/transformación: String zIdUnidadRaiz = zcomunORO + "ID_UNIDAD_RAIZ";                                                                                                                        |
| 75  | expresión de cálculo/transformación: String zIdUnidadRaizResp= zcomunORO + "ID_UNID_RESPONSABLE";                                                                                                                |
| 76  | expresión de cálculo/transformación: String zTlfsFicha = zcomunORO + "CSP_TLFS_FICHA";                                                                                                                           |
| 80  | expresión de cálculo/transformación: String zNombreFoto = zcomunORO + "CSP_NOMBRE_FOTO";                                                                                                                         |
| 82  | expresión de cálculo/transformación: String zoutputdefQEQ = zsubsesion + "!" + zsubsesion + "[*]";                                                                                                               |
| 83  | expresión de cálculo/transformación: String zmoveQEQ = zsubsesion + ":" + zsubsesion + "[FIRST]";                                                                                                                |
| 86  | expresión de cálculo/transformación: String zoutputdefRESP = zsubsesion + "!" + znodoRESP + "[*]";                                                                                                               |
| 87  | expresión de cálculo/transformación: String zmoveRESP = znodoRESP + ":" + znodoRESP + "[FIRST]";                                                                                                                 |
| 89  | expresión de cálculo/transformación: String zoutputdefMRESP = zsubsesion + "!" + znodoMRESP + "[*]";                                                                                                             |
| 90  | expresión de cálculo/transformación: String zmoveMRESP = znodoMRESP + ":" + znodoMRESP + "[FIRST]";                                                                                                              |
| 93  | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + znodoPuestos + "[*]";                                                                                                         |
| 94  | expresión de cálculo/transformación: String zmovePuestos = znodoPuestos + ":" + znodoPuestos + "[FIRST]";                                                                                                        |
| 289 | expresión de cálculo/transformación: document.write("&lt;a href=" + "javascript:m4submit('fichaempleado&lt;%=m4lix%&gt;')" + "&gt;" + '&lt;%=nombreResponsable%&gt;' +"&lt;/a&gt;");                             |
| 302 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Tfno. / Móvil de Empresa responsable &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;%=telefonosResponsable%&gt;&lt;/td&gt;&lt;/tr&gt; |
| 327 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + ' -- Valores de la visibilidad -- ' + '\n';                                                                                           |
| 328 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'esRresponsable :' + '&lt;%=esRresponsable%&gt;' + '\n';                                                                              |
| 329 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'esRrhh :' + '&lt;%=esRrhh%&gt;' + '\n';                                                                                              |
| 330 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'matricula :' + '&lt;%=matricula%&gt;' + '\n';                                                                                        |
| 331 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'empleado :' + '&lt;%=empleado%&gt;' + '\n';                                                                                          |
| 332 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'mostrarDocumento :' + '&lt;%=mostrarDocumento%&gt;' + '\n';                                                                          |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                               |
| --- | --------------------------------------------------------------------------------------------------------------- |
| 21  | /css/estilo_sse.css                                                                                             |
| 22  | /css/style_persdata.css                                                                                         |
| 24  | /library/jquery.js                                                                                              |
| 25  | /libreria/funciones_sse.js                                                                                      |
| 188 | /images/empleados/&lt;m4:item m4name=                                                                           |
| 192 | /images/empleados/Avatar_female.png                                                                             |
| 194 | /images/empleados/Avatar_male.png                                                                               |
| 250 | javascript:dpt();                                                                                               |
| 252 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA |
| 264 | mailto:&lt;m4:item m4name=                                                                                      |
| 267 | javascript:cv();                                                                                                |
| 289 | +                                                                                                               |
| 296 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp                                              |
| 314 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;                               |
| 338 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=zIdPuesto%&gt;                               |
| 342 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                         | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 22  | /library/jquery.js                                                                                                 | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| COLL   | 23  | /libreria/funciones_sse.js                                                                                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 247 | javascript:dpt();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| COLL   | 264 | javascript:cv();                                                                                                   | dinámica   | P06                                                                                                                                                                            |
| COLL   | 286 | +                                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| COLL   | 293 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp                                                 | ausente    | P06                                                                                                                                                                            |
| COLL   | 311 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;                                  | ausente    | P06                                                                                                                                                                            |
| COLL   | 335 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=zIdPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; | ausente    | P06                                                                                                                                                                            |
| COLL   | 339 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                      | ausente    | P06                                                                                                                                                                            |
| CYC    | 24  | /library/jquery.js                                                                                                 | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                          |
| CYC    | 25  | /libreria/funciones_sse.js                                                                                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 250 | javascript:dpt();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| CYC    | 267 | javascript:cv();                                                                                                   | dinámica   | P06                                                                                                                                                                            |
| CYC    | 289 | +                                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| CYC    | 296 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp                                                 | ausente    | P06                                                                                                                                                                            |
| CYC    | 314 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;                                  | ausente    | P06                                                                                                                                                                            |
| CYC    | 338 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=zIdPuesto%&gt;                                  | ausente    | P06                                                                                                                                                                            |
| CYC    | 342 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                      | ausente    | P06                                                                                                                                                                            |
| IBER   | 22  | /library/jquery.js                                                                                                 | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| IBER   | 23  | /libreria/funciones_sse.js                                                                                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 247 | javascript:dpt();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| IBER   | 264 | javascript:cv();                                                                                                   | dinámica   | P06                                                                                                                                                                            |
| IBER   | 286 | +                                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| IBER   | 293 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp                                                 | ausente    | P06                                                                                                                                                                            |
| IBER   | 311 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;                                  | ausente    | P06                                                                                                                                                                            |
| IBER   | 335 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=zIdPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; | ausente    | P06                                                                                                                                                                            |
| IBER   | 339 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                      | ausente    | P06                                                                                                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p1_min.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
