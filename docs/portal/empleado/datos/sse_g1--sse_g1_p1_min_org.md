# Quién es Quién - Datos Empleado

Identificador: `sse_g1/sse_g1_p1_min_org.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p1_min_org.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_min_org.jsp) | `4d314272eb5c6f536650317229686a911d87432003a2ad3cff4d84f459b6a1c8` |    351 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p1_min_org.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_min_org.jsp)   | `fb019197ccb885375405f2295a76502f5f14c1cd57b8da96752fed602f9fdca7` |    352 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p1_min_org.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p1_min_org.jsp) | `4d314272eb5c6f536650317229686a911d87432003a2ad3cff4d84f459b6a1c8` |    351 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p1_min_org.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_min_org.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                            |
| --- | ------------------------------------------------------------------- |
| 17  | Quién es Quién - Datos Empleado                                     |
| 179 | " height="141" width="94" alt="foto_bbdd"&gt;                       |
| 247 | [valor dinámico] [valor dinámico] [valor dinámico] [valor dinámico] |
| 263 | Fecha de Antigüedad:                                                |
| 264 | Centro de Trabajo:                                                  |
| 265 | Dirección del Centro de Trabajo:                                    |
| 266 | eMail:                                                              |
| 266 | "&gt;                                                               |
| 267 | Teléfono / Móvil de Empresa:                                        |
| 269 | Acceso datos CV:                                                    |
| 269 | Informe                                                             |
| 271 | Acceso datos CV:                                                    |
| 277 | Localización                                                        |
| 284 | Área / Sucursal                                                     |
| 285 | Nombre de la Unidad                                                 |
| 286 | Responsable directo                                                 |
| 303 | eMail Responsable                                                   |
| 304 | Tfno. / Móvil de Empresa responsable                                |
| 314 | Ver ficha completa del empleado                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 185 | img     | src=/images/empleados/&lt;m4:item m4name='&lt;%=zNombreFoto%&gt;' htmlsafe=                                                                                                                              |
| 189 | img     | height=141; width=94; alt=foto_bbdd; src=/images/empleados/Avatar_female.png                                                                                                                             |
| 191 | img     | height=141; width=94; alt=foto_bbdd; src=/images/empleados/Avatar_male.png                                                                                                                               |
| 252 | a       | class=enlacefuncional; title=DPT; href=javascript:dpt();; target=_self                                                                                                                                   |
| 254 | a       | class=enlacefuncional; title=DPT; style=text-decoration: underline;; href=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA; target=_blank |
| 266 | a       | href=mailto:&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                           |
| 269 | a       | href=javascript:cv();; target=_self                                                                                                                                                                      |
| 291 | a       | href= +                                                                                                                                                                                                  |
| 298 | form    | id=fichaempleado&lt;%=m4lix%&gt;; name=fichaempleado&lt;%=m4lix%&gt;; method=post; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp; accept-charset=UTF-8                       |
| 299 | input   | type=hidden; id=empleado; name=empleado; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                        |
| 300 | input   | type=hidden; id=uniraiz; name=uniraiz; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                          |
| 301 | form    |                                                                                                                                                                                                          |
| 316 | a       | style=font-weight: bold; background-color: #DC0028;COLOR: #ffffff;FONT-SIZE: 13px;; title=FichaCompleta; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;          |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 27  | empleado        | getParameter(request,"empleado") |
| 28  | uniraiz         | getParameter(request,"uniraiz")  |
| 29  | sociedad        | getParameter(request,"sociedad") |
| 209 | zIdPerson       | getBagEntries("zIdPerson")       |

| L   | Variable             | Expresión fuente                                                        | Resolución estática parcial                                                                    |
| --- | -------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 27  | empleado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                           |
| 28  | uniraiz              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz")                            |
| 29  | sociedad             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")                           |
| 37  | zsubsesion           | "CSP_QUIEN_ES_QUIEN"                                                    | CSP_QUIEN_ES_QUIEN                                                                             |
| 38  | zmeta4object         | "CSP_QUIEN_ES_QUIEN"                                                    | CSP_QUIEN_ES_QUIEN                                                                             |
| 39  | znodoORO             | "CSP_FICHA"                                                             | CSP_FICHA                                                                                      |
| 40  | znodoRESP            | "CSP_RESP"                                                              | CSP_RESP                                                                                       |
| 41  | znodoMRESP           | "CSP_MAIL_RESP"                                                         | CSP_MAIL_RESP                                                                                  |
| 42  | znodoPuestos         | "CSP_PUESTOS"                                                           | CSP_PUESTOS                                                                                    |
| 44  | zoutputdefORO        | zsubsesion + "!" + znodoORO + "[*]"                                     | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[*]"}                                                        |
| 45  | zmoveORO             | znodoORO + ":" + znodoORO + "[FIRST]"                                   | CSP_FICHA{":"}CSP_FICHA{"[FIRST]"}                                                             |
| 46  | ziteratorORO         | znodoORO + ":" + zsubsesion + "!" + znodoORO                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA                                                 |
| 47  | zlecturaORO          | zsubsesion + "!" + znodoORO                                             | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA                                                               |
| 48  | zraizORO             | zsubsesion + "!" + znodoORO + "."                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"."}                                                          |
| 50  | zmetodocarga         | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_ORG"               | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_ORG"}                               |
| 52  | zcomunORO            | znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "." | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}                        |
| 55  | zNommbreCompleto     | zcomunORO + "NOMBRE_COMPLETO"                                           | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}     |
| 56  | zIdEmpleado          | zcomunORO + "ID_EMPLEADO"                                               | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_EMPLEADO"}         |
| 57  | zNomCentTrabajo      | zcomunORO + "N_CENTRO_TRABAJO"                                          | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}    |
| 58  | zDirCentTrabajo      | zcomunORO + "DIR_CENTRO_TRABAJO"                                        | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}  |
| 59  | zNomDireccion        | zcomunORO + "N_DIRECCION"                                               | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}         |
| 60  | zNomPuesto           | zcomunORO + "N_PUESTO"                                                  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}            |
| 61  | zIdCentroTrab        | zcomunORO + "ID_CENTRO_TRABAJO"                                         | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}   |
| 62  | zFotoEmpleado        | zcomunORO + "SCO_BLOB_PHOTO"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"SCO_BLOB_PHOTO"}      |
| 63  | zMail                | zcomunORO + "CORREO"                                                    | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}              |
| 64  | zFAntiguedad         | zcomunORO + "FEC_ANTIGUEDAD"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}      |
| 65  | zNArea               | zcomunORO + "N_AREA"                                                    | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}              |
| 66  | zNCentroTrabajo      | zcomunORO + "N_CENTRO_TRABAJO"                                          | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}    |
| 67  | zNDireccion          | zcomunORO + "N_DIRECCION"                                               | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}         |
| 68  | zNPuesto             | zcomunORO + "N_PUESTO"                                                  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}            |
| 69  | zNServicio           | zcomunORO + "N_SERVICIO"                                                | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_SERVICIO"}          |
| 70  | zNTipoPuesto         | zcomunORO + "N_TIPO_PUESTO"                                             | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_TIPO_PUESTO"}       |
| 71  | zNUnidad             | zcomunORO + "N_UNIDAD"                                                  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}            |
| 72  | zNUnidadRaiz         | zcomunORO + "N_UNIDAD_RAIZ"                                             | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}       |
| 73  | zIdResponsable       | zcomunORO + "ID_RESPONSABLE"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_RESPONSABLE"}      |
| 74  | zIdPuesto            | zcomunORO + "ID_PUESTO"                                                 | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}           |
| 75  | zIdUnidadRaiz        | zcomunORO + "ID_UNIDAD_RAIZ"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_UNIDAD_RAIZ"}      |
| 76  | zIdUnidadRaizResp    | zcomunORO + "ID_UNID_RESPONSABLE"                                       | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_UNID_RESPONSABLE"} |
| 77  | zTlfsFicha           | zcomunORO + "CSP_TLFS_FICHA"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CSP_TLFS_FICHA"}      |
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
| 143 | zcountiORO           | 0                                                                       | 0                                                                                              |
| 155 | zcountvORO           | String.valueOf(zcountiORO)                                              | String.valueOf(zcountiORO)                                                                     |
| 162 | zposicions2          | "0"                                                                     | 0                                                                                              |
| 163 | zposicion2           | 0                                                                       | 0                                                                                              |
| 227 | auxNDPT              | 0                                                                       | 0                                                                                              |
| 241 | puesto               | q.getItem(znodoORO,zmeta4object,znodoORO,"","N_PUESTO")                 | q.getItem(znodoORO,zmeta4object,znodoORO,"","N_PUESTO")                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| 110 | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                                           |
| 112 | m4:beginjob  |                                                                                                                     |
| 113 | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                                   |
| 124 | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_ORG"}                                           |
| 124 | m4:param     | name=ARG_SOCIEDAD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")                       |
| 126 | m4:outputdef | m4alias=CSP_FICHA                                                                                                   |
| 126 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[*]"}                                                         |
| 127 | m4:outputdef | m4alias=CSP_QUIEN_ES_QUIEN                                                                                          |
| 127 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                                |
| 128 | m4:outputdef | m4alias=CSP_RESP                                                                                                    |
| 128 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_RESP{"[*]"}                                                          |
| 129 | m4:outputdef | m4alias=CSP_MAIL_RESP                                                                                               |
| 129 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESP{"[*]"}                                                     |
| 130 | m4:outputdef | m4alias=CSP_PUESTOS                                                                                                 |
| 130 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                       |
| 132 | m4:endjob    |                                                                                                                     |
| 134 | m4:move      |                                                                                                                     |
| 134 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FICHA{":"}CSP_FICHA{"[FIRST]"}                                                   |
| 135 | m4:move      |                                                                                                                     |
| 135 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_QUIEN_ES_QUIEN                                                                   |
| 136 | m4:move      |                                                                                                                     |
| 136 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_RESP{":"}CSP_RESP{"[FIRST]"}                                                     |
| 137 | m4:move      |                                                                                                                     |
| 137 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_MAIL_RESP{":"}CSP_MAIL_RESP{"[FIRST]"}                                           |
| 138 | m4:move      |                                                                                                                     |
| 138 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                               |
| 165 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                             |
| 175 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true    |
| 263 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}; htmlsafe=true     |
| 264 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true   |
| 265 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}; htmlsafe=true |
| 266 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}; htmlsafe=true             |
| 267 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CSP_TLFS_FICHA"}; htmlsafe=true     |
| 283 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true        |
| 284 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; htmlsafe=true             |
| 285 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}; htmlsafe=true           |
| 289 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_RESPONSABLE"}; htmlsafe=true     |

| L   | Operación        | Argumentos literales                                        |
| --- | ---------------- | ----------------------------------------------------------- |
| 119 | setItem          | zsubsesion,zsubsesion,"","P_EMPLEADO",empleado              |
| 120 | setItem          | zsubsesion,zsubsesion,"","P_UNIDAD_RAIZ",uniraiz            |
| 147 | getCountInClient | znodoORO,zsubsesion,znodoORO                                |
| 150 | getItem          | znodoORO,zmeta4object,znodoORO,"","SCO_BLOB_PHOTO"          |
| 151 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_ID_GENDER"           |
| 203 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_PUESTO")              |
| 210 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_RESPONSABLE"          |
| 211 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO"             |
| 215 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","ES_RRHH"         |
| 216 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","ES_RESPONSABLE"  |
| 219 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC" |
| 223 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC" |
| 229 | getItem          | znodoPuestos,zmeta4object,znodoPuestos,"","CSP_FUNCIONES"   |
| 238 | getItem          | znodoRESP,zmeta4object,znodoRESP,"","SCO_GB_NAME"           |
| 239 | getItem          | znodoMRESP,zmeta4object,znodoMRESP,"","STD_EMAIL"           |
| 240 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_RESPONSABLE"    |
| 241 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_PUESTO"                |
| 310 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO")            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 339 | dpt     |            |
| 343 | cv      |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 118 | if(empleado != null){                                                                                                                                                                                            |
| 161 | if (zcountiORO &gt; 0) {                                                                                                                                                                                         |
| 184 | &lt;%if (!zFotoEmpleado.equals("")){%&gt;                                                                                                                                                                        |
| 187 | &lt;%} else if(sexo.equals("2")){%&gt;                                                                                                                                                                           |
| 190 | &lt;% }else{ %&gt;                                                                                                                                                                                               |
| 249 | &lt;%if ((esRresponsable.equals("S")) &#124;&#124; (esRrhh.equals("S")) &#124;&#124; (matricula.equals(empleado))){%&gt;                                                                                         |
| 250 | &lt;%if (auxNDPT&gt;0){%&gt;                                                                                                                                                                                     |
| 253 | &lt;%}else if (mostrarDocumento.equals("1")){%&gt;                                                                                                                                                               |
| 255 | &lt;%} else{%&gt;                                                                                                                                                                                                |
| 258 | &lt;%}else{%&gt;                                                                                                                                                                                                 |
| 268 | &lt;%if ((esRresponsable.equals("S")) &#124;&#124; (esRrhh.equals("S")) &#124;&#124; (matricula.equals(empleado)) ){%&gt;                                                                                        |
| 270 | &lt;%}else{%&gt;                                                                                                                                                                                                 |
| 290 | if (responsable.length &gt; 0) {                                                                                                                                                                                 |
| 292 | }else{                                                                                                                                                                                                           |
| 308 | &lt;%if (esRrhh.equals("S")){                                                                                                                                                                                    |
| 337 | &lt;%if ((esRresponsable.equals("S")) &#124;&#124; (esRrhh.equals("S")) &#124;&#124; (matricula.equals(empleado))){%&gt;                                                                                         |
| 44  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                                                                                                 |
| 45  | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                                                                                                    |
| 46  | expresión de cálculo/transformación: String ziteratorORO = znodoORO + ":" + zsubsesion + "!" + znodoORO;                                                                                                         |
| 47  | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + znodoORO;                                                                                                                           |
| 48  | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + znodoORO + ".";                                                                                                                        |
| 50  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_ORG";                                                                                            |
| 52  | expresión de cálculo/transformación: String zcomunORO = znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + ".";                                                                                 |
| 55  | expresión de cálculo/transformación: String zNommbreCompleto = zcomunORO + "NOMBRE_COMPLETO";                                                                                                                    |
| 56  | expresión de cálculo/transformación: String zIdEmpleado = zcomunORO + "ID_EMPLEADO";                                                                                                                             |
| 57  | expresión de cálculo/transformación: String zNomCentTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                                                                                                    |
| 58  | expresión de cálculo/transformación: String zDirCentTrabajo = zcomunORO + "DIR_CENTRO_TRABAJO";                                                                                                                  |
| 59  | expresión de cálculo/transformación: String zNomDireccion = zcomunORO + "N_DIRECCION";                                                                                                                           |
| 60  | expresión de cálculo/transformación: String zNomPuesto = zcomunORO + "N_PUESTO";                                                                                                                                 |
| 61  | expresión de cálculo/transformación: String zIdCentroTrab = zcomunORO + "ID_CENTRO_TRABAJO";                                                                                                                     |
| 62  | expresión de cálculo/transformación: String zFotoEmpleado = zcomunORO + "SCO_BLOB_PHOTO";                                                                                                                        |
| 63  | expresión de cálculo/transformación: String zMail = zcomunORO + "CORREO";                                                                                                                                        |
| 64  | expresión de cálculo/transformación: String zFAntiguedad = zcomunORO + "FEC_ANTIGUEDAD";                                                                                                                         |
| 65  | expresión de cálculo/transformación: String zNArea = zcomunORO + "N_AREA";                                                                                                                                       |
| 66  | expresión de cálculo/transformación: String zNCentroTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                                                                                                    |
| 67  | expresión de cálculo/transformación: String zNDireccion = zcomunORO + "N_DIRECCION";                                                                                                                             |
| 68  | expresión de cálculo/transformación: String zNPuesto = zcomunORO + "N_PUESTO";                                                                                                                                   |
| 69  | expresión de cálculo/transformación: String zNServicio = zcomunORO + "N_SERVICIO";                                                                                                                               |
| 70  | expresión de cálculo/transformación: String zNTipoPuesto = zcomunORO + "N_TIPO_PUESTO";                                                                                                                          |
| 71  | expresión de cálculo/transformación: String zNUnidad = zcomunORO + "N_UNIDAD";                                                                                                                                   |
| 72  | expresión de cálculo/transformación: String zNUnidadRaiz = zcomunORO + "N_UNIDAD_RAIZ";                                                                                                                          |
| 73  | expresión de cálculo/transformación: String zIdResponsable = zcomunORO + "ID_RESPONSABLE";                                                                                                                       |
| 74  | expresión de cálculo/transformación: String zIdPuesto = zcomunORO + "ID_PUESTO";                                                                                                                                 |
| 75  | expresión de cálculo/transformación: String zIdUnidadRaiz = zcomunORO + "ID_UNIDAD_RAIZ";                                                                                                                        |
| 76  | expresión de cálculo/transformación: String zIdUnidadRaizResp= zcomunORO + "ID_UNID_RESPONSABLE";                                                                                                                |
| 77  | expresión de cálculo/transformación: String zTlfsFicha = zcomunORO + "CSP_TLFS_FICHA";                                                                                                                           |
| 80  | expresión de cálculo/transformación: String zNombreFoto = zcomunORO + "CSP_NOMBRE_FOTO";                                                                                                                         |
| 82  | expresión de cálculo/transformación: String zoutputdefQEQ = zsubsesion + "!" + zsubsesion + "[*]";                                                                                                               |
| 83  | expresión de cálculo/transformación: String zmoveQEQ = zsubsesion + ":" + zsubsesion + "[FIRST]";                                                                                                                |
| 86  | expresión de cálculo/transformación: String zoutputdefRESP = zsubsesion + "!" + znodoRESP + "[*]";                                                                                                               |
| 87  | expresión de cálculo/transformación: String zmoveRESP = znodoRESP + ":" + znodoRESP + "[FIRST]";                                                                                                                 |
| 89  | expresión de cálculo/transformación: String zoutputdefMRESP = zsubsesion + "!" + znodoMRESP + "[*]";                                                                                                             |
| 90  | expresión de cálculo/transformación: String zmoveMRESP = znodoMRESP + ":" + znodoMRESP + "[FIRST]";                                                                                                              |
| 93  | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + znodoPuestos + "[*]";                                                                                                         |
| 94  | expresión de cálculo/transformación: String zmovePuestos = znodoPuestos + ":" + znodoPuestos + "[FIRST]";                                                                                                        |
| 291 | expresión de cálculo/transformación: document.write("&lt;a href=" + "javascript:m4submit('fichaempleado&lt;%=m4lix%&gt;')" + "&gt;" + '&lt;%=nombreResponsable%&gt;' +"&lt;/a&gt;");                             |
| 304 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Tfno. / Móvil de Empresa responsable &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;%=telefonosResponsable%&gt;&lt;/td&gt;&lt;/tr&gt; |
| 329 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + ' -- Valores de la visibilidad -- ' + '\n';                                                                                           |
| 330 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'esRresponsable :' + '&lt;%=esRresponsable%&gt;' + '\n';                                                                              |
| 331 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'esRrhh :' + '&lt;%=esRrhh%&gt;' + '\n';                                                                                              |
| 332 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'matricula :' + '&lt;%=matricula%&gt;' + '\n';                                                                                        |
| 333 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'empleado :' + '&lt;%=empleado%&gt;' + '\n';                                                                                          |
| 334 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'mostrarDocumento :' + '&lt;%=mostrarDocumento%&gt;' + '\n';                                                                          |

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
| 252 | javascript:dpt();                                                                                                  |
| 254 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA    |
| 266 | mailto:&lt;m4:item m4name=                                                                                         |
| 269 | javascript:cv();                                                                                                   |
| 291 | +                                                                                                                  |
| 298 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp                                                 |
| 316 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;                                  |
| 340 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=zIdPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; |
| 344 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                      |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/sse_g1_p1_min_org.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_min_org.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                            |
| --- | ------------------------------------------------------------------- |
| 17  | Quién es Quién - Datos Empleado                                     |
| 180 | " height="141" width="94" alt="foto_bbdd"&gt;                       |
| 248 | [valor dinámico] [valor dinámico] [valor dinámico] [valor dinámico] |
| 264 | Fecha de Antigüedad:                                                |
| 265 | Centro de Trabajo:                                                  |
| 266 | Dirección del Centro de Trabajo:                                    |
| 267 | eMail:                                                              |
| 267 | "&gt;                                                               |
| 268 | Teléfono / Móvil de Empresa:                                        |
| 270 | Acceso datos CV:                                                    |
| 270 | Informe                                                             |
| 272 | Acceso datos CV:                                                    |
| 278 | Localización                                                        |
| 285 | Área / Sucursal                                                     |
| 286 | Nombre de la Unidad                                                 |
| 287 | Responsable directo                                                 |
| 304 | eMail Responsable                                                   |
| 305 | Tfno. / Móvil de Empresa responsable                                |
| 315 | Ver ficha completa del empleado                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 186 | img     | src=/images/empleados/&lt;m4:item m4name='&lt;%=zNombreFoto%&gt;' htmlsafe=                                                                                                                              |
| 190 | img     | height=141; width=94; alt=foto_bbdd; src=/images/empleados/Avatar_female.png                                                                                                                             |
| 192 | img     | height=141; width=94; alt=foto_bbdd; src=/images/empleados/Avatar_male.png                                                                                                                               |
| 253 | a       | class=enlacefuncional; title=DPT; href=javascript:dpt();; target=_self                                                                                                                                   |
| 255 | a       | class=enlacefuncional; title=DPT; style=text-decoration: underline;; href=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA; target=_blank |
| 267 | a       | href=mailto:&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                           |
| 270 | a       | href=javascript:cv();; target=_self                                                                                                                                                                      |
| 292 | a       | href= +                                                                                                                                                                                                  |
| 299 | form    | id=fichaempleado&lt;%=m4lix%&gt;; name=fichaempleado&lt;%=m4lix%&gt;; method=post; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp; accept-charset=UTF-8                       |
| 300 | input   | type=hidden; id=empleado; name=empleado; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                        |
| 301 | input   | type=hidden; id=uniraiz; name=uniraiz; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                          |
| 302 | form    |                                                                                                                                                                                                          |
| 317 | a       | style=font-weight: bold; background-color: #DC0028;COLOR: #ffffff;FONT-SIZE: 13px;; title=FichaCompleta; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;          |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 27  | empleado        | getParameter(request,"empleado") |
| 28  | uniraiz         | getParameter(request,"uniraiz")  |
| 29  | sociedad        | getParameter(request,"sociedad") |
| 210 | zIdPerson       | getBagEntries("zIdPerson")       |

| L   | Variable             | Expresión fuente                                                        | Resolución estática parcial                                                                    |
| --- | -------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 27  | empleado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                           |
| 28  | uniraiz              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz")                            |
| 29  | sociedad             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")                           |
| 37  | zsubsesion           | "CSP_QUIEN_ES_QUIEN"                                                    | CSP_QUIEN_ES_QUIEN                                                                             |
| 38  | zmeta4object         | "CSP_QUIEN_ES_QUIEN"                                                    | CSP_QUIEN_ES_QUIEN                                                                             |
| 39  | znodoORO             | "CSP_FICHA"                                                             | CSP_FICHA                                                                                      |
| 40  | znodoRESP            | "CSP_RESP"                                                              | CSP_RESP                                                                                       |
| 41  | znodoMRESP           | "CSP_MAIL_RESP"                                                         | CSP_MAIL_RESP                                                                                  |
| 42  | znodoPuestos         | "CSP_PUESTOS"                                                           | CSP_PUESTOS                                                                                    |
| 44  | zoutputdefORO        | zsubsesion + "!" + znodoORO + "[*]"                                     | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[*]"}                                                        |
| 45  | zmoveORO             | znodoORO + ":" + znodoORO + "[FIRST]"                                   | CSP_FICHA{":"}CSP_FICHA{"[FIRST]"}                                                             |
| 46  | ziteratorORO         | znodoORO + ":" + zsubsesion + "!" + znodoORO                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA                                                 |
| 47  | zlecturaORO          | zsubsesion + "!" + znodoORO                                             | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA                                                               |
| 48  | zraizORO             | zsubsesion + "!" + znodoORO + "."                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"."}                                                          |
| 50  | zmetodocarga         | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_ORG"               | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_ORG"}                               |
| 52  | zcomunORO            | znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "." | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}                        |
| 55  | zNommbreCompleto     | zcomunORO + "NOMBRE_COMPLETO"                                           | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}     |
| 56  | zIdEmpleado          | zcomunORO + "ID_EMPLEADO"                                               | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_EMPLEADO"}         |
| 57  | zNomCentTrabajo      | zcomunORO + "N_CENTRO_TRABAJO"                                          | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}    |
| 58  | zDirCentTrabajo      | zcomunORO + "DIR_CENTRO_TRABAJO"                                        | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}  |
| 59  | zNomDireccion        | zcomunORO + "N_DIRECCION"                                               | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}         |
| 60  | zNomPuesto           | zcomunORO + "N_PUESTO"                                                  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}            |
| 61  | zIdCentroTrab        | zcomunORO + "ID_CENTRO_TRABAJO"                                         | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}   |
| 62  | zFotoEmpleado        | zcomunORO + "SCO_BLOB_PHOTO"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"SCO_BLOB_PHOTO"}      |
| 63  | zMail                | zcomunORO + "CORREO"                                                    | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}              |
| 64  | zFAntiguedad         | zcomunORO + "FEC_ANTIGUEDAD"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}      |
| 65  | zNArea               | zcomunORO + "N_AREA"                                                    | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}              |
| 66  | zNCentroTrabajo      | zcomunORO + "N_CENTRO_TRABAJO"                                          | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}    |
| 67  | zNDireccion          | zcomunORO + "N_DIRECCION"                                               | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}         |
| 68  | zNPuesto             | zcomunORO + "N_PUESTO"                                                  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}            |
| 69  | zNServicio           | zcomunORO + "N_SERVICIO"                                                | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_SERVICIO"}          |
| 70  | zNTipoPuesto         | zcomunORO + "N_TIPO_PUESTO"                                             | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_TIPO_PUESTO"}       |
| 71  | zNUnidad             | zcomunORO + "N_UNIDAD"                                                  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}            |
| 72  | zNUnidadRaiz         | zcomunORO + "N_UNIDAD_RAIZ"                                             | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}       |
| 73  | zIdResponsable       | zcomunORO + "ID_RESPONSABLE"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_RESPONSABLE"}      |
| 74  | zIdPuesto            | zcomunORO + "ID_PUESTO"                                                 | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_PUESTO"}           |
| 75  | zIdUnidadRaiz        | zcomunORO + "ID_UNIDAD_RAIZ"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_UNIDAD_RAIZ"}      |
| 76  | zIdUnidadRaizResp    | zcomunORO + "ID_UNID_RESPONSABLE"                                       | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_UNID_RESPONSABLE"} |
| 77  | zTlfsFicha           | zcomunORO + "CSP_TLFS_FICHA"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CSP_TLFS_FICHA"}      |
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
| 143 | zcountiORO           | 0                                                                       | 0                                                                                              |
| 155 | zcountvORO           | String.valueOf(zcountiORO)                                              | String.valueOf(zcountiORO)                                                                     |
| 162 | zposicions2          | "0"                                                                     | 0                                                                                              |
| 163 | zposicion2           | 0                                                                       | 0                                                                                              |
| 228 | auxNDPT              | 0                                                                       | 0                                                                                              |
| 242 | puesto               | q.getItem(znodoORO,zmeta4object,znodoORO,"","N_PUESTO")                 | q.getItem(znodoORO,zmeta4object,znodoORO,"","N_PUESTO")                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| 110 | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                                           |
| 112 | m4:beginjob  |                                                                                                                     |
| 113 | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                                   |
| 124 | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_ORG"}                                           |
| 124 | m4:param     | name=ARG_SOCIEDAD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")                       |
| 126 | m4:outputdef | m4alias=CSP_FICHA                                                                                                   |
| 126 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[*]"}                                                         |
| 127 | m4:outputdef | m4alias=CSP_QUIEN_ES_QUIEN                                                                                          |
| 127 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                                |
| 128 | m4:outputdef | m4alias=CSP_RESP                                                                                                    |
| 128 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_RESP{"[*]"}                                                          |
| 129 | m4:outputdef | m4alias=CSP_MAIL_RESP                                                                                               |
| 129 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESP{"[*]"}                                                     |
| 130 | m4:outputdef | m4alias=CSP_PUESTOS                                                                                                 |
| 130 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                                       |
| 132 | m4:endjob    |                                                                                                                     |
| 134 | m4:move      |                                                                                                                     |
| 134 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FICHA{":"}CSP_FICHA{"[FIRST]"}                                                   |
| 135 | m4:move      |                                                                                                                     |
| 135 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_QUIEN_ES_QUIEN                                                                   |
| 136 | m4:move      |                                                                                                                     |
| 136 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_RESP{":"}CSP_RESP{"[FIRST]"}                                                     |
| 137 | m4:move      |                                                                                                                     |
| 137 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_MAIL_RESP{":"}CSP_MAIL_RESP{"[FIRST]"}                                           |
| 138 | m4:move      |                                                                                                                     |
| 138 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                               |
| 166 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                             |
| 176 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true    |
| 264 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}; htmlsafe=true     |
| 265 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true   |
| 266 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}; htmlsafe=true |
| 267 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}; htmlsafe=true             |
| 268 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CSP_TLFS_FICHA"}; htmlsafe=true     |
| 284 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true        |
| 285 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; htmlsafe=true             |
| 286 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}; htmlsafe=true           |
| 290 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_RESPONSABLE"}; htmlsafe=true     |

| L   | Operación        | Argumentos literales                                        |
| --- | ---------------- | ----------------------------------------------------------- |
| 119 | setItem          | zsubsesion,zsubsesion,"","P_EMPLEADO",empleado              |
| 120 | setItem          | zsubsesion,zsubsesion,"","P_UNIDAD_RAIZ",uniraiz            |
| 147 | getCountInClient | znodoORO,zsubsesion,znodoORO                                |
| 150 | getItem          | znodoORO,zmeta4object,znodoORO,"","SCO_BLOB_PHOTO"          |
| 151 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_ID_GENDER"           |
| 204 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_PUESTO")              |
| 211 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_RESPONSABLE"          |
| 212 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO"             |
| 216 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","ES_RRHH"         |
| 217 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","ES_RESPONSABLE"  |
| 220 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC" |
| 224 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC" |
| 230 | getItem          | znodoPuestos,zmeta4object,znodoPuestos,"","CSP_FUNCIONES"   |
| 239 | getItem          | znodoRESP,zmeta4object,znodoRESP,"","SCO_GB_NAME"           |
| 240 | getItem          | znodoMRESP,zmeta4object,znodoMRESP,"","STD_EMAIL"           |
| 241 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_RESPONSABLE"    |
| 242 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_PUESTO"                |
| 311 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO")            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 340 | dpt     |            |
| 344 | cv      |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 118 | if(empleado != null){                                                                                                                                                                                            |
| 161 | if (zcountiORO &gt; 0) {                                                                                                                                                                                         |
| 185 | &lt;%if (!zFotoEmpleado.equals("")){%&gt;                                                                                                                                                                        |
| 188 | &lt;%} else if(sexo.equals("2")){%&gt;                                                                                                                                                                           |
| 191 | &lt;% }else{ %&gt;                                                                                                                                                                                               |
| 250 | &lt;%if ((esRresponsable.equals("S")) &#124;&#124; (esRrhh.equals("S")) &#124;&#124; (matricula.equals(empleado))){%&gt;                                                                                         |
| 251 | &lt;%if (auxNDPT&gt;0){%&gt;                                                                                                                                                                                     |
| 254 | &lt;%}else if (mostrarDocumento.equals("1")){%&gt;                                                                                                                                                               |
| 256 | &lt;%} else{%&gt;                                                                                                                                                                                                |
| 259 | &lt;%}else{%&gt;                                                                                                                                                                                                 |
| 269 | &lt;%if ((esRresponsable.equals("S")) &#124;&#124; (esRrhh.equals("S")) &#124;&#124; (matricula.equals(empleado)) ){%&gt;                                                                                        |
| 271 | &lt;%}else{%&gt;                                                                                                                                                                                                 |
| 291 | if (responsable.length &gt; 0) {                                                                                                                                                                                 |
| 293 | }else{                                                                                                                                                                                                           |
| 309 | &lt;%if (esRrhh.equals("S")){                                                                                                                                                                                    |
| 338 | &lt;%if ((esRresponsable.equals("S")) &#124;&#124; (esRrhh.equals("S")) &#124;&#124; (matricula.equals(empleado))){%&gt;                                                                                         |
| 44  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                                                                                                 |
| 45  | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                                                                                                    |
| 46  | expresión de cálculo/transformación: String ziteratorORO = znodoORO + ":" + zsubsesion + "!" + znodoORO;                                                                                                         |
| 47  | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + znodoORO;                                                                                                                           |
| 48  | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + znodoORO + ".";                                                                                                                        |
| 50  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_ORG";                                                                                            |
| 52  | expresión de cálculo/transformación: String zcomunORO = znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + ".";                                                                                 |
| 55  | expresión de cálculo/transformación: String zNommbreCompleto = zcomunORO + "NOMBRE_COMPLETO";                                                                                                                    |
| 56  | expresión de cálculo/transformación: String zIdEmpleado = zcomunORO + "ID_EMPLEADO";                                                                                                                             |
| 57  | expresión de cálculo/transformación: String zNomCentTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                                                                                                    |
| 58  | expresión de cálculo/transformación: String zDirCentTrabajo = zcomunORO + "DIR_CENTRO_TRABAJO";                                                                                                                  |
| 59  | expresión de cálculo/transformación: String zNomDireccion = zcomunORO + "N_DIRECCION";                                                                                                                           |
| 60  | expresión de cálculo/transformación: String zNomPuesto = zcomunORO + "N_PUESTO";                                                                                                                                 |
| 61  | expresión de cálculo/transformación: String zIdCentroTrab = zcomunORO + "ID_CENTRO_TRABAJO";                                                                                                                     |
| 62  | expresión de cálculo/transformación: String zFotoEmpleado = zcomunORO + "SCO_BLOB_PHOTO";                                                                                                                        |
| 63  | expresión de cálculo/transformación: String zMail = zcomunORO + "CORREO";                                                                                                                                        |
| 64  | expresión de cálculo/transformación: String zFAntiguedad = zcomunORO + "FEC_ANTIGUEDAD";                                                                                                                         |
| 65  | expresión de cálculo/transformación: String zNArea = zcomunORO + "N_AREA";                                                                                                                                       |
| 66  | expresión de cálculo/transformación: String zNCentroTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                                                                                                    |
| 67  | expresión de cálculo/transformación: String zNDireccion = zcomunORO + "N_DIRECCION";                                                                                                                             |
| 68  | expresión de cálculo/transformación: String zNPuesto = zcomunORO + "N_PUESTO";                                                                                                                                   |
| 69  | expresión de cálculo/transformación: String zNServicio = zcomunORO + "N_SERVICIO";                                                                                                                               |
| 70  | expresión de cálculo/transformación: String zNTipoPuesto = zcomunORO + "N_TIPO_PUESTO";                                                                                                                          |
| 71  | expresión de cálculo/transformación: String zNUnidad = zcomunORO + "N_UNIDAD";                                                                                                                                   |
| 72  | expresión de cálculo/transformación: String zNUnidadRaiz = zcomunORO + "N_UNIDAD_RAIZ";                                                                                                                          |
| 73  | expresión de cálculo/transformación: String zIdResponsable = zcomunORO + "ID_RESPONSABLE";                                                                                                                       |
| 74  | expresión de cálculo/transformación: String zIdPuesto = zcomunORO + "ID_PUESTO";                                                                                                                                 |
| 75  | expresión de cálculo/transformación: String zIdUnidadRaiz = zcomunORO + "ID_UNIDAD_RAIZ";                                                                                                                        |
| 76  | expresión de cálculo/transformación: String zIdUnidadRaizResp= zcomunORO + "ID_UNID_RESPONSABLE";                                                                                                                |
| 77  | expresión de cálculo/transformación: String zTlfsFicha = zcomunORO + "CSP_TLFS_FICHA";                                                                                                                           |
| 80  | expresión de cálculo/transformación: String zNombreFoto = zcomunORO + "CSP_NOMBRE_FOTO";                                                                                                                         |
| 82  | expresión de cálculo/transformación: String zoutputdefQEQ = zsubsesion + "!" + zsubsesion + "[*]";                                                                                                               |
| 83  | expresión de cálculo/transformación: String zmoveQEQ = zsubsesion + ":" + zsubsesion + "[FIRST]";                                                                                                                |
| 86  | expresión de cálculo/transformación: String zoutputdefRESP = zsubsesion + "!" + znodoRESP + "[*]";                                                                                                               |
| 87  | expresión de cálculo/transformación: String zmoveRESP = znodoRESP + ":" + znodoRESP + "[FIRST]";                                                                                                                 |
| 89  | expresión de cálculo/transformación: String zoutputdefMRESP = zsubsesion + "!" + znodoMRESP + "[*]";                                                                                                             |
| 90  | expresión de cálculo/transformación: String zmoveMRESP = znodoMRESP + ":" + znodoMRESP + "[FIRST]";                                                                                                              |
| 93  | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + znodoPuestos + "[*]";                                                                                                         |
| 94  | expresión de cálculo/transformación: String zmovePuestos = znodoPuestos + ":" + znodoPuestos + "[FIRST]";                                                                                                        |
| 292 | expresión de cálculo/transformación: document.write("&lt;a href=" + "javascript:m4submit('fichaempleado&lt;%=m4lix%&gt;')" + "&gt;" + '&lt;%=nombreResponsable%&gt;' +"&lt;/a&gt;");                             |
| 305 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Tfno. / Móvil de Empresa responsable &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;%=telefonosResponsable%&gt;&lt;/td&gt;&lt;/tr&gt; |
| 330 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + ' -- Valores de la visibilidad -- ' + '\n';                                                                                           |
| 331 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'esRresponsable :' + '&lt;%=esRresponsable%&gt;' + '\n';                                                                              |
| 332 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'esRrhh :' + '&lt;%=esRrhh%&gt;' + '\n';                                                                                              |
| 333 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'matricula :' + '&lt;%=matricula%&gt;' + '\n';                                                                                        |
| 334 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'empleado :' + '&lt;%=empleado%&gt;' + '\n';                                                                                          |
| 335 | expresión de cálculo/transformación: valoresSeguridad = valoresSeguridad + 'mostrarDocumento :' + '&lt;%=mostrarDocumento%&gt;' + '\n';                                                                          |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------------------------ |
| 19  | /css/estilo_sse.css                                                                                                |
| 20  | /css/style_persdata.css                                                                                            |
| 22  | /library/jquery.js                                                                                                 |
| 23  | /libreria/funciones_sse.js                                                                                         |
| 186 | /images/empleados/&lt;m4:item m4name=                                                                              |
| 190 | /images/empleados/Avatar_female.png                                                                                |
| 192 | /images/empleados/Avatar_male.png                                                                                  |
| 253 | javascript:dpt();                                                                                                  |
| 255 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA    |
| 267 | mailto:&lt;m4:item m4name=                                                                                         |
| 270 | javascript:cv();                                                                                                   |
| 292 | +                                                                                                                  |
| 299 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp                                                 |
| 317 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;                                  |
| 341 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=zIdPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; |
| 345 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                         | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 22  | /library/jquery.js                                                                                                 | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| COLL   | 23  | /libreria/funciones_sse.js                                                                                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 252 | javascript:dpt();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| COLL   | 269 | javascript:cv();                                                                                                   | dinámica   | P06                                                                                                                                                                            |
| COLL   | 291 | +                                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| COLL   | 298 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp                                                 | ausente    | P06                                                                                                                                                                            |
| COLL   | 316 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;                                  | ausente    | P06                                                                                                                                                                            |
| COLL   | 340 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=zIdPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; | ausente    | P06                                                                                                                                                                            |
| COLL   | 344 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                      | ausente    | P06                                                                                                                                                                            |
| CYC    | 22  | /library/jquery.js                                                                                                 | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                          |
| CYC    | 23  | /libreria/funciones_sse.js                                                                                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 253 | javascript:dpt();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| CYC    | 270 | javascript:cv();                                                                                                   | dinámica   | P06                                                                                                                                                                            |
| CYC    | 292 | +                                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| CYC    | 299 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp                                                 | ausente    | P06                                                                                                                                                                            |
| CYC    | 317 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;                                  | ausente    | P06                                                                                                                                                                            |
| CYC    | 341 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=zIdPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; | ausente    | P06                                                                                                                                                                            |
| CYC    | 345 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                      | ausente    | P06                                                                                                                                                                            |
| IBER   | 22  | /library/jquery.js                                                                                                 | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| IBER   | 23  | /libreria/funciones_sse.js                                                                                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 252 | javascript:dpt();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| IBER   | 269 | javascript:cv();                                                                                                   | dinámica   | P06                                                                                                                                                                            |
| IBER   | 291 | +                                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| IBER   | 298 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp                                                 | ausente    | P06                                                                                                                                                                            |
| IBER   | 316 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=&lt;%=empleado%&gt;                                  | ausente    | P06                                                                                                                                                                            |
| IBER   | 340 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=zIdPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; | ausente    | P06                                                                                                                                                                            |
| IBER   | 344 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                      | ausente    | P06                                                                                                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p1_min_org.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
