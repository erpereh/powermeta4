# Quién es Quién - Datos Empleado

Identificador: `sse_g1/sse_g1_p1_rrhh.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p1_rrhh.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_rrhh.jsp) | `0676b7a94922fc23be30129113de5ef386c376c304d0a57246aba5cb19439b16` |    527 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p1_rrhh.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_rrhh.jsp)   | `e240360083165795d782c6e74b4d913c09cc1b0abdd0c1a35e431cdc171d3a39` |    527 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p1_rrhh.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p1_rrhh.jsp) | `0676b7a94922fc23be30129113de5ef386c376c304d0a57246aba5cb19439b16` |    527 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p1_rrhh.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_rrhh.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                            |
| --- | --------------------------------------------------------------------------------------------------- |
| 9   | Quién es Quién - Datos Empleado                                                                     |
| 346 | [valor dinámico] [valor dinámico] [valor dinámico]                                                  |
| 360 | Fecha de Antigüedad:                                                                                |
| 366 | Centro de Trabajo:                                                                                  |
| 367 | Dirección del Centro de Trabajo:                                                                    |
| 368 | eMail:                                                                                              |
| 369 | Teléfono / Móvil de Empresa:                                                                        |
| 370 | Acceso datos CV:                                                                                    |
| 370 | Informe                                                                                             |
| 375 | Localización                                                                                        |
| 400 | Área / Sucursal                                                                                     |
| 401 | Nombre de la Unidad                                                                                 |
| 402 | Responsable directo                                                                                 |
| 403 | eMail Responsable                                                                                   |
| 404 | Tfno. / Móvil de Empresa responsable                                                                |
| 409 | Datos Personales                                                                                    |
| 441 | Grupo / Nivel                                                                                       |
| 442 | DNI                                                                                                 |
| 443 | Num. Afiliación a SS:                                                                               |
| 444 | Domicilio:                                                                                          |
| 445 | Teléfono Personal                                                                                   |
| 446 | eMail Personal                                                                                      |
| 447 | Cuenta Bancaria Principal                                                                           |
| 448 | Cuenta Bancaria Beneficiaria                                                                        |
| 449 | Fecha de Nacimiento                                                                                 |
| 460 | Familiares                                                                                          |
| 467 | Tipo Relación                                                                                       |
| 468 | Fecha de Nacimiento                                                                                 |
| 506 | Tus datos todavía no están cargados en el sistema, por favor ponte en contacto con Recursos Humanos |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                          |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 293 | img     | src=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].SCO_BLOB_PHOTO; height=141; width=94; alt=foto_bbdd                                                       |
| 297 | img     | height=141; width=94; alt=foto_bbdd; src=/images/empleados/Avatar_female.png                                                                                                                                       |
| 299 | img     | height=141; width=94; alt=foto_bbdd; src=/images/empleados/Avatar_male.png                                                                                                                                         |
| 349 | a       | class=enlacefuncional; title=DPT; href=javascript:dpt();; target=_self                                                                                                                                             |
| 353 | a       | class=enlacefuncional; title=DPT; style=text-decoration: underline;; href=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].CSP_DOC_PUESTO_FICHA; target=_blank |
| 368 | a       | href=mailto:&lt;%=eMail%&gt;                                                                                                                                                                                       |
| 370 | a       | href=javascript:cv();; target=_self                                                                                                                                                                                |
| 403 | a       | href=mailto:&lt;%=emailResponsable%&gt;                                                                                                                                                                            |
| 446 | a       | href=mailto:&lt;%=emailPersonal%&gt;                                                                                                                                                                               |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 19  | empleado        | getParameter(request,"empleado") |

| L   | Variable               | Expresión fuente                                                     | Resolución estática parcial                                              |
| --- | ---------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 19  | empleado               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")     |
| 68  | zsubsesion             | "CSP_QUIEN_ES_QUIEN"                                                 | CSP_QUIEN_ES_QUIEN                                                       |
| 69  | zmeta4object           | "CSP_QUIEN_ES_QUIEN"                                                 | CSP_QUIEN_ES_QUIEN                                                       |
| 70  | znodoORO               | "CSP_FICHA_DETALLADA"                                                | CSP_FICHA_DETALLADA                                                      |
| 71  | znodoCde               | "CSP_DATOS_PAGO_EMPLEADO"                                            | CSP_DATOS_PAGO_EMPLEADO                                                  |
| 72  | znodoCbe               | "CSP_CUENTA_BANCARIA_EMPLEADO"                                       | CSP_CUENTA_BANCARIA_EMPLEADO                                             |
| 73  | znodoCbb               | "CSP_CUENTA_BENEFICIARIO"                                            | CSP_CUENTA_BENEFICIARIO                                                  |
| 74  | znodoDir               | "CSP_DIRECCION_EMPLEADO"                                             | CSP_DIRECCION_EMPLEADO                                                   |
| 75  | znodoMail              | "CSP_MAIL_PERSONAL"                                                  | CSP_MAIL_PERSONAL                                                        |
| 76  | znodoMailResp          | "CSP_MAIL_RESPONSABLE"                                               | CSP_MAIL_RESPONSABLE                                                     |
| 77  | znodoTelef             | "CSP_TELEFONO_PERSONAL"                                              | CSP_TELEFONO_PERSONAL                                                    |
| 78  | znodoFamIRPF           | "CSP_FAM_IRPF"                                                       | CSP_FAM_IRPF                                                             |
| 79  | znodoTelefEmp          | "CSP_TELEFONO_EMPRESA"                                               | CSP_TELEFONO_EMPRESA                                                     |
| 80  | znodoTelefResp         | "CSP_TELEFONO_RESPONSABLE"                                           | CSP_TELEFONO_RESPONSABLE                                                 |
| 81  | znodoGrupNivel         | "CSP_GRUPO_NIVEL"                                                    | CSP_GRUPO_NIVEL                                                          |
| 82  | znodoResponsable       | "CSP_RESPONSABLE"                                                    | CSP_RESPONSABLE                                                          |
| 83  | znodoPuestos           | "CSP_PUESTOS"                                                        | CSP_PUESTOS                                                              |
| 86  | zoutputdefQEQ          | zsubsesion + "!" + zsubsesion + "[*]"                                | CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                         |
| 87  | zmoveQEQ               | zsubsesion + ":" + zsubsesion + "[FIRST]"                            | CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                     |
| 90  | zoutputdefORO          | zsubsesion + "!" + znodoORO + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA_DETALLADA{"[*]"}                        |
| 91  | zmoveORO               | znodoORO + ":" + znodoORO + "[FIRST]"                                | CSP_FICHA_DETALLADA{":"}CSP_FICHA_DETALLADA{"[FIRST]"}                   |
| 94  | zoutputdefCde          | zsubsesion + "!" + znodoCde + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_DATOS_PAGO_EMPLEADO{"[*]"}                    |
| 95  | zmoveCde               | znodoCde + ":" + znodoCde + "[FIRST]"                                | CSP_DATOS_PAGO_EMPLEADO{":"}CSP_DATOS_PAGO_EMPLEADO{"[FIRST]"}           |
| 98  | zoutputdefCbe          | zsubsesion + "!" + znodoCbe + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BANCARIA_EMPLEADO{"[*]"}               |
| 99  | zmoveCbe               | znodoCbe + ":" + znodoCbe + "[FIRST]"                                | CSP_CUENTA_BANCARIA_EMPLEADO{":"}CSP_CUENTA_BANCARIA_EMPLEADO{"[FIRST]"} |
| 102 | zoutputdefDir          | zsubsesion + "!" + znodoDir + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_DIRECCION_EMPLEADO{"[*]"}                     |
| 103 | zmoveDir               | znodoDir + ":" + znodoDir + "[FIRST]"                                | CSP_DIRECCION_EMPLEADO{":"}CSP_DIRECCION_EMPLEADO{"[FIRST]"}             |
| 106 | zoutputdefCbb          | zsubsesion + "!" + znodoCbb + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BENEFICIARIO{"[*]"}                    |
| 107 | zmoveCbb               | znodoCbb + ":" + znodoCbb + "[FIRST]"                                | CSP_CUENTA_BENEFICIARIO{":"}CSP_CUENTA_BENEFICIARIO{"[FIRST]"}           |
| 110 | zoutputdefMail         | zsubsesion + "!" + znodoMail + "[*]"                                 | CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_PERSONAL{"[*]"}                          |
| 111 | zmoveMail              | znodoMail + ":" + znodoMail + "[FIRST]"                              | CSP_MAIL_PERSONAL{":"}CSP_MAIL_PERSONAL{"[FIRST]"}                       |
| 114 | zoutputdefMailResp     | zsubsesion + "!" + znodoMailResp + "[*]"                             | CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESPONSABLE{"[*]"}                       |
| 115 | zmoveMailResp          | znodoMailResp + ":" + znodoMailResp + "[FIRST]"                      | CSP_MAIL_RESPONSABLE{":"}CSP_MAIL_RESPONSABLE{"[FIRST]"}                 |
| 118 | zoutputdefTelef        | zsubsesion + "!" + znodoTelef + "[*]"                                | CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_PERSONAL{"[*]"}                      |
| 119 | zmoveTelef             | znodoTelef + ":" + znodoTelef + "[FIRST]"                            | CSP_TELEFONO_PERSONAL{":"}CSP_TELEFONO_PERSONAL{"[FIRST]"}               |
| 122 | zoutputdefFamIRPF      | zsubsesion + "!" + znodoFamIRPF + "[*]"                              | CSP_QUIEN_ES_QUIEN{"!"}CSP_FAM_IRPF{"[*]"}                               |
| 123 | zmoveFamIRPF           | znodoFamIRPF + ":" + znodoFamIRPF + "[FIRST]"                        | CSP_FAM_IRPF{":"}CSP_FAM_IRPF{"[FIRST]"}                                 |
| 126 | zoutputdefTelefEmp     | zsubsesion + "!" + znodoTelefEmp + "[*]"                             | CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_EMPRESA{"[*]"}                       |
| 127 | zmoveTelefEmp          | znodoTelefEmp + ":" + znodoTelefEmp + "[FIRST]"                      | CSP_TELEFONO_EMPRESA{":"}CSP_TELEFONO_EMPRESA{"[FIRST]"}                 |
| 130 | zoutputdefTelefResp    | zsubsesion + "!" + znodoTelefResp + "[*]"                            | CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_RESPONSABLE{"[*]"}                   |
| 131 | zmoveTelefResp         | znodoTelefResp + ":" + znodoTelefResp + "[FIRST]"                    | CSP_TELEFONO_RESPONSABLE{":"}CSP_TELEFONO_RESPONSABLE{"[FIRST]"}         |
| 134 | zoutputdefGrupNivel    | zsubsesion + "!" + znodoGrupNivel + "[*]"                            | CSP_QUIEN_ES_QUIEN{"!"}CSP_GRUPO_NIVEL{"[*]"}                            |
| 135 | zmoveGrupNivel         | znodoGrupNivel + ":" + znodoGrupNivel + "[FIRST]"                    | CSP_GRUPO_NIVEL{":"}CSP_GRUPO_NIVEL{"[FIRST]"}                           |
| 138 | zoutputdefResponsable  | zsubsesion + "!" + znodoResponsable + "[*]"                          | CSP_QUIEN_ES_QUIEN{"!"}CSP_RESPONSABLE{"[*]"}                            |
| 139 | zmoveResponsable       | znodoResponsable + ":" + znodoResponsable + "[FIRST]"                | CSP_RESPONSABLE{":"}CSP_RESPONSABLE{"[FIRST]"}                           |
| 142 | zoutputdefPuestos      | zsubsesion + "!" + znodoPuestos + "[*]"                              | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                |
| 143 | zmovePuestos           | znodoPuestos + ":" + znodoPuestos + "[FIRST]"                        | CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                   |
| 145 | zmetodocarga           | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"        | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"}     |
| 152 | puesto                 | ""                                                                   |                                                                          |
| 153 | idPuesto               | ""                                                                   |                                                                          |
| 154 | antiguedad             | ""                                                                   |                                                                          |
| 155 | centroTrabajo          | ""                                                                   |                                                                          |
| 156 | direccionCentrotrabajo | ""                                                                   |                                                                          |
| 157 | eMail                  | ""                                                                   |                                                                          |
| 158 | telefonoEmpresa        | ""                                                                   |                                                                          |
| 159 | unidadDireccion        | ""                                                                   |                                                                          |
| 160 | unidadArea             | ""                                                                   |                                                                          |
| 161 | nombreUnidad           | ""                                                                   |                                                                          |
| 162 | responsable            | ""                                                                   |                                                                          |
| 163 | emailResponsable       | ""                                                                   |                                                                          |
| 164 | telefonoResponsable    | ""                                                                   |                                                                          |
| 165 | matricula              | ""                                                                   |                                                                          |
| 166 | grupoNivel             | ""                                                                   |                                                                          |
| 167 | dni                    | ""                                                                   |                                                                          |
| 168 | numeroSS               | ""                                                                   |                                                                          |
| 169 | domicilio              | ""                                                                   |                                                                          |
| 170 | telefonoPersonal       | ""                                                                   |                                                                          |
| 171 | emailPersonal          | ""                                                                   |                                                                          |
| 172 | cuentaPrincipal        | ""                                                                   |                                                                          |
| 173 | cuentaBeneficiario     | ""                                                                   |                                                                          |
| 174 | fechaNacimiento        | ""                                                                   |                                                                          |
| 175 | nombreIRPF             | ""                                                                   |                                                                          |
| 176 | fechaNacimientoIRPF    | ""                                                                   |                                                                          |
| 177 | tipoRelacionIRPF       | ""                                                                   |                                                                          |
| 178 | nombreFoto             | ""                                                                   |                                                                          |
| 180 | mostrarDocumento       | "0"                                                                  | 0                                                                        |
| 181 | mostrarNDPT            | "0"                                                                  | 0                                                                        |
| 182 | auxMatricula           | ""                                                                   |                                                                          |
| 242 | numfichas              | 0                                                                    | 0                                                                        |
| 243 | numcuentas             | 0                                                                    | 0                                                                        |
| 244 | numBenef               | 0                                                                    | 0                                                                        |
| 245 | numDirecciones         | 0                                                                    | 0                                                                        |
| 246 | numMail                | 0                                                                    | 0                                                                        |
| 247 | numMailResp            | 0                                                                    | 0                                                                        |
| 248 | numTelefonoPer         | 0                                                                    | 0                                                                        |
| 249 | numTelefEmp            | 0                                                                    | 0                                                                        |
| 250 | numTelefResp           | 0                                                                    | 0                                                                        |
| 251 | numGrupNiv             | 0                                                                    | 0                                                                        |
| 252 | numFam                 | 0                                                                    | 0                                                                        |
| 253 | numResponsable         | 0                                                                    | 0                                                                        |
| 287 | Sexo                   | q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_ID_GENDER")         | q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_ID_GENDER")             |
| 323 | auxNDPT                | 0                                                                    | 0                                                                        |
| 340 | empleado1              | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO")           | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO")               |
| 472 | id                     | ""                                                                   |                                                                          |
| 473 | i                      | 0                                                                    | 0                                                                        |
| 510 | sociedad               | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_ORGANIZATION")       | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_ORGANIZATION")           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                      |
| --- | ------------ | ------------------------------------------------------------------------------------------------------- |
| 185 | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                               |
| 187 | m4:beginjob  |                                                                                                         |
| 188 | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                       |
| 198 | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"}                           |
| 200 | m4:outputdef | m4alias=CSP_QUIEN_ES_QUIEN                                                                              |
| 200 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                    |
| 201 | m4:outputdef | m4alias=CSP_FICHA_DETALLADA                                                                             |
| 201 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA_DETALLADA{"[*]"}                                   |
| 202 | m4:outputdef | m4alias=CSP_DATOS_PAGO_EMPLEADO                                                                         |
| 202 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_DATOS_PAGO_EMPLEADO{"[*]"}                               |
| 203 | m4:outputdef | m4alias=CSP_CUENTA_BANCARIA_EMPLEADO                                                                    |
| 203 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BANCARIA_EMPLEADO{"[*]"}                          |
| 204 | m4:outputdef | m4alias=CSP_CUENTA_BENEFICIARIO                                                                         |
| 204 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BENEFICIARIO{"[*]"}                               |
| 205 | m4:outputdef | m4alias=CSP_DIRECCION_EMPLEADO                                                                          |
| 205 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_DIRECCION_EMPLEADO{"[*]"}                                |
| 206 | m4:outputdef | m4alias=CSP_MAIL_PERSONAL                                                                               |
| 206 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_PERSONAL{"[*]"}                                     |
| 207 | m4:outputdef | m4alias=CSP_MAIL_RESPONSABLE                                                                            |
| 207 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESPONSABLE{"[*]"}                                  |
| 208 | m4:outputdef | m4alias=CSP_TELEFONO_RESPONSABLE                                                                        |
| 208 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_RESPONSABLE{"[*]"}                              |
| 209 | m4:outputdef | m4alias=CSP_TELEFONO_EMPRESA                                                                            |
| 209 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_EMPRESA{"[*]"}                                  |
| 210 | m4:outputdef | m4alias=CSP_GRUPO_NIVEL                                                                                 |
| 210 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_GRUPO_NIVEL{"[*]"}                                       |
| 211 | m4:outputdef | m4alias=CSP_FAM_IRPF                                                                                    |
| 211 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FAM_IRPF{"[*]"}                                          |
| 212 | m4:outputdef | m4alias=CSP_TELEFONO_PERSONAL                                                                           |
| 212 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_PERSONAL{"[*]"}                                 |
| 213 | m4:outputdef | m4alias=CSP_RESPONSABLE                                                                                 |
| 213 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_RESPONSABLE{"[*]"}                                       |
| 214 | m4:outputdef | m4alias=CSP_PUESTOS                                                                                     |
| 214 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                           |
| 216 | m4:endjob    |                                                                                                         |
| 218 | m4:move      |                                                                                                         |
| 218 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                     |
| 219 | m4:move      |                                                                                                         |
| 219 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FICHA_DETALLADA{":"}CSP_FICHA_DETALLADA{"[FIRST]"}                   |
| 220 | m4:move      |                                                                                                         |
| 220 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_DATOS_PAGO_EMPLEADO{":"}CSP_DATOS_PAGO_EMPLEADO{"[FIRST]"}           |
| 221 | m4:move      |                                                                                                         |
| 221 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CUENTA_BANCARIA_EMPLEADO{":"}CSP_CUENTA_BANCARIA_EMPLEADO{"[FIRST]"} |
| 222 | m4:move      |                                                                                                         |
| 222 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CUENTA_BENEFICIARIO{":"}CSP_CUENTA_BENEFICIARIO{"[FIRST]"}           |
| 223 | m4:move      |                                                                                                         |
| 223 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_DIRECCION_EMPLEADO{":"}CSP_DIRECCION_EMPLEADO{"[FIRST]"}             |
| 224 | m4:move      |                                                                                                         |
| 224 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_MAIL_PERSONAL{":"}CSP_MAIL_PERSONAL{"[FIRST]"}                       |
| 225 | m4:move      |                                                                                                         |
| 225 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_MAIL_RESPONSABLE{":"}CSP_MAIL_RESPONSABLE{"[FIRST]"}                 |
| 226 | m4:move      |                                                                                                         |
| 226 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_TELEFONO_RESPONSABLE{":"}CSP_TELEFONO_RESPONSABLE{"[FIRST]"}         |
| 227 | m4:move      |                                                                                                         |
| 227 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_TELEFONO_EMPRESA{":"}CSP_TELEFONO_EMPRESA{"[FIRST]"}                 |
| 228 | m4:move      |                                                                                                         |
| 228 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_GRUPO_NIVEL{":"}CSP_GRUPO_NIVEL{"[FIRST]"}                           |
| 229 | m4:move      |                                                                                                         |
| 229 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FAM_IRPF{":"}CSP_FAM_IRPF{"[FIRST]"}                                 |
| 230 | m4:move      |                                                                                                         |
| 230 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_TELEFONO_PERSONAL{":"}CSP_TELEFONO_PERSONAL{"[FIRST]"}               |
| 231 | m4:move      |                                                                                                         |
| 231 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_RESPONSABLE{":"}CSP_RESPONSABLE{"[FIRST]"}                           |
| 232 | m4:move      |                                                                                                         |
| 232 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                   |

| L   | Operación        | Argumentos literales                                               |
| --- | ---------------- | ------------------------------------------------------------------ |
| 194 | setItem          | zsubsesion,zsubsesion,"","P_EMPLEADO",empleado                     |
| 255 | getCountInClient | znodoORO,zsubsesion,znodoORO                                       |
| 256 | getCountInClient | znodoCbe,zsubsesion,znodoCbe                                       |
| 257 | getCountInClient | znodoCbb,zsubsesion,znodoCbb                                       |
| 258 | getCountInClient | znodoDir,zsubsesion,znodoDir                                       |
| 259 | getCountInClient | znodoMail,zsubsesion,znodoMail                                     |
| 260 | getCountInClient | znodoMailResp,zsubsesion,znodoMailResp                             |
| 261 | getCountInClient | znodoTelef,zsubsesion,znodoTelef                                   |
| 262 | getCountInClient | znodoTelefEmp,zsubsesion,znodoTelefEmp                             |
| 263 | getCountInClient | znodoTelefResp,zsubsesion,znodoTelefResp                           |
| 264 | getCountInClient | znodoGrupNivel,zsubsesion,znodoGrupNivel                           |
| 265 | getCountInClient | znodoFamIRPF,zsubsesion,znodoFamIRPF                               |
| 266 | getCountInClient | znodoResponsable,zsubsesion,znodoResponsable                       |
| 278 | getItem          | znodoORO,zmeta4object,znodoORO,"","NOMBRECOMPLETO"                 |
| 286 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_NOMBRE_FOTO"                |
| 287 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_ID_GENDER"                  |
| 306 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_PUESTO"                       |
| 307 | getItem          | znodoORO,zmeta4object,znodoORO,"","FEC_ANTIGUEDAD"                 |
| 308 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_CENTRO_TRABAJO"               |
| 309 | getItem          | znodoORO,zmeta4object,znodoORO,"","DIR_CENTRO_TRABAJO"             |
| 310 | getItem          | znodoORO,zmeta4object,znodoORO,"","CORREO"                         |
| 314 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_PUESTO")                     |
| 318 | getItem          | znodoTelefEmp,zmeta4object,znodoTelefEmp,"","STD_PHONE"            |
| 319 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_EMPLEADO"              |
| 325 | getItem          | znodoPuestos,zmeta4object,znodoPuestos,"","CSP_FUNCIONES"          |
| 337 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC"        |
| 340 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO"                    |
| 383 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_DIRECCION"                    |
| 384 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_AREA"                         |
| 385 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_UNIDAD_RAIZ"                  |
| 387 | getItem          | znodoResponsable,zmeta4object,znodoResponsable,"","NOMBRECOMPLETO" |
| 390 | getItem          | znodoMailResp,zmeta4object,znodoMailResp,"","STD_EMAIL"            |
| 393 | getItem          | znodoTelefResp,zmeta4object,znodoTelefResp,"","STD_PHONE"          |
| 394 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_RESPONSABLE"           |
| 417 | getItem          | znodoGrupNivel,zmeta4object,znodoGrupNivel,"","SSP_NM_CATEGORIA"   |
| 419 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_SSN"                        |
| 420 | getItem          | znodoORO,zmeta4object,znodoORO,"","NUM_AFILIACION_SS"              |
| 422 | getItem          | znodoDir,zmeta4object,znodoDir,"","SCO_GB_ADDRESS"                 |
| 425 | getItem          | znodoTelef,zmeta4object,znodoTelef,"","STD_PHONE"                  |
| 427 | getItem          | znodoORO,zmeta4object,znodoORO,"","CORREO"                         |
| 430 | getItem          | znodoCbe,zmeta4object,znodoCbe,"","SCO_GB_BANK"                    |
| 433 | getItem          | znodoCbb,zmeta4object,znodoCbb,"","SCO_GB_BANK"                    |
| 435 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_DT_BIRTH"                   |
| 481 | getItem          | znodoFamIRPF,zmeta4object,znodoFamIRPF,"","NOMBRECOMPLETO"         |
| 482 | getItem          | znodoFamIRPF,zmeta4object,znodoFamIRPF,"","STD_DT_BIRTH"           |
| 483 | getItem          | znodoFamIRPF,zmeta4object,znodoFamIRPF,"","STD_N_ACT_DEP_TYPE"     |
| 510 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_ORGANIZATION"                |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos |
| --- | ------------ | ---------- |
| 25  | formatoFecha | fecha      |
| 43  | guion        | cadena     |
| 47  | OpenReport   | URL        |
| 515 | dpt          |            |
| 519 | cv           |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                      |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35  | if ((dia=='01') &amp;&amp; (mes=='01')&amp;&amp;(anio=='1800')){                                                                                                                                                                          |
| 37  | }else{                                                                                                                                                                                                                                    |
| 193 | if(empleado != null){                                                                                                                                                                                                                     |
| 271 | if (numfichas&gt;0) {                                                                                                                                                                                                                     |
| 292 | &lt;%if (!nombreFoto.equals("")){%&gt;                                                                                                                                                                                                    |
| 295 | &lt;%} else if(Sexo.equals("2")){%&gt;                                                                                                                                                                                                    |
| 298 | &lt;% }else{ %&gt;                                                                                                                                                                                                                        |
| 317 | if (numTelefEmp&gt;0){                                                                                                                                                                                                                    |
| 347 | &lt;%if (auxNDPT&gt;0){%&gt;                                                                                                                                                                                                              |
| 351 | &lt;%}else if(mostrarDocumento.equals("1")){%&gt;                                                                                                                                                                                         |
| 355 | &lt;%}else{%&gt;                                                                                                                                                                                                                          |
| 386 | if (numResponsable&gt;0){                                                                                                                                                                                                                 |
| 389 | if (numMailResp&gt;0){                                                                                                                                                                                                                    |
| 392 | if(numTelefResp&gt;0){                                                                                                                                                                                                                    |
| 416 | if(numGrupNiv&gt;0) {                                                                                                                                                                                                                     |
| 421 | if(numDirecciones&gt;0){                                                                                                                                                                                                                  |
| 424 | if(numTelefonoPer&gt;0){                                                                                                                                                                                                                  |
| 429 | if(numcuentas&gt;0) {                                                                                                                                                                                                                     |
| 432 | if(numBenef&gt;0){                                                                                                                                                                                                                        |
| 458 | &lt;% if (numFam &gt; 0) {%&gt;                                                                                                                                                                                                           |
| 503 | }else{                                                                                                                                                                                                                                    |
| 31  | expresión de cálculo/transformación: flocal = flocal.substring(flocal.indexOf("-") + 1,flocal.length);                                                                                                                                    |
| 33  | expresión de cálculo/transformación: flocal = flocal.substring(flocal.indexOf("-") + 1,flocal.length);                                                                                                                                    |
| 52  | expresión de cálculo/transformación: sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();                                                                                                                               |
| 53  | expresión de cálculo/transformación: sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();                                                                                                                            |
| 54  | expresión de cálculo/transformación: sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";                                                                                                                                           |
| 86  | expresión de cálculo/transformación: String zoutputdefQEQ = zsubsesion + "!" + zsubsesion + "[*]";                                                                                                                                        |
| 87  | expresión de cálculo/transformación: String zmoveQEQ = zsubsesion + ":" + zsubsesion + "[FIRST]";                                                                                                                                         |
| 90  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                                                                                                                          |
| 91  | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                                                                                                                             |
| 94  | expresión de cálculo/transformación: String zoutputdefCde = zsubsesion + "!" + znodoCde + "[*]";                                                                                                                                          |
| 95  | expresión de cálculo/transformación: String zmoveCde = znodoCde + ":" + znodoCde + "[FIRST]";                                                                                                                                             |
| 98  | expresión de cálculo/transformación: String zoutputdefCbe = zsubsesion + "!" + znodoCbe + "[*]";                                                                                                                                          |
| 99  | expresión de cálculo/transformación: String zmoveCbe = znodoCbe + ":" + znodoCbe + "[FIRST]";                                                                                                                                             |
| 102 | expresión de cálculo/transformación: String zoutputdefDir = zsubsesion + "!" + znodoDir + "[*]";                                                                                                                                          |
| 103 | expresión de cálculo/transformación: String zmoveDir = znodoDir + ":" + znodoDir + "[FIRST]";                                                                                                                                             |
| 106 | expresión de cálculo/transformación: String zoutputdefCbb = zsubsesion + "!" + znodoCbb + "[*]";                                                                                                                                          |
| 107 | expresión de cálculo/transformación: String zmoveCbb = znodoCbb + ":" + znodoCbb + "[FIRST]";                                                                                                                                             |
| 110 | expresión de cálculo/transformación: String zoutputdefMail = zsubsesion + "!" + znodoMail + "[*]";                                                                                                                                        |
| 111 | expresión de cálculo/transformación: String zmoveMail = znodoMail + ":" + znodoMail + "[FIRST]";                                                                                                                                          |
| 114 | expresión de cálculo/transformación: String zoutputdefMailResp = zsubsesion + "!" + znodoMailResp + "[*]";                                                                                                                                |
| 115 | expresión de cálculo/transformación: String zmoveMailResp = znodoMailResp + ":" + znodoMailResp + "[FIRST]";                                                                                                                              |
| 118 | expresión de cálculo/transformación: String zoutputdefTelef = zsubsesion + "!" + znodoTelef + "[*]";                                                                                                                                      |
| 119 | expresión de cálculo/transformación: String zmoveTelef = znodoTelef + ":" + znodoTelef + "[FIRST]";                                                                                                                                       |
| 122 | expresión de cálculo/transformación: String zoutputdefFamIRPF = zsubsesion + "!" + znodoFamIRPF + "[*]";                                                                                                                                  |
| 123 | expresión de cálculo/transformación: String zmoveFamIRPF = znodoFamIRPF + ":" + znodoFamIRPF + "[FIRST]";                                                                                                                                 |
| 126 | expresión de cálculo/transformación: String zoutputdefTelefEmp = zsubsesion + "!" + znodoTelefEmp + "[*]";                                                                                                                                |
| 127 | expresión de cálculo/transformación: String zmoveTelefEmp = znodoTelefEmp + ":" + znodoTelefEmp + "[FIRST]";                                                                                                                              |
| 130 | expresión de cálculo/transformación: String zoutputdefTelefResp = zsubsesion + "!" + znodoTelefResp + "[*]";                                                                                                                              |
| 131 | expresión de cálculo/transformación: String zmoveTelefResp = znodoTelefResp + ":" + znodoTelefResp + "[FIRST]";                                                                                                                           |
| 134 | expresión de cálculo/transformación: String zoutputdefGrupNivel = zsubsesion + "!" + znodoGrupNivel + "[*]";                                                                                                                              |
| 135 | expresión de cálculo/transformación: String zmoveGrupNivel = znodoGrupNivel + ":" + znodoGrupNivel + "[FIRST]";                                                                                                                           |
| 138 | expresión de cálculo/transformación: String zoutputdefResponsable = zsubsesion + "!" + znodoResponsable + "[*]";                                                                                                                          |
| 139 | expresión de cálculo/transformación: String zmoveResponsable = znodoResponsable + ":" + znodoResponsable + "[FIRST]";                                                                                                                     |
| 142 | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + znodoPuestos + "[*]";                                                                                                                                  |
| 143 | expresión de cálculo/transformación: String zmovePuestos = znodoPuestos + ":" + znodoPuestos + "[FIRST]";                                                                                                                                 |
| 145 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE";                                                                                                                 |
| 404 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Tfno. / Móvil de Empresa responsable &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;%=telefonoResponsable%&gt; &lt;/td&gt;&lt;/tr&gt;                          |
| 441 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Grupo / Nivel &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;script&gt; document.write(guion('&lt;%=grupoNivel%&gt;')); &lt;/script&gt; &lt;/td&gt;&lt;/tr&gt; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------- |
| 11  | /css/estilo_sse.css                                                                                                       |
| 12  | /css/style_persdata.css                                                                                                   |
| 14  | /library/jquery.js                                                                                                        |
| 15  | /libreria/funciones_sse.js                                                                                                |
| 293 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].SCO_BLOB_PHOTO       |
| 297 | /images/empleados/Avatar_female.png                                                                                       |
| 299 | /images/empleados/Avatar_male.png                                                                                         |
| 349 | javascript:dpt();                                                                                                         |
| 353 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].CSP_DOC_PUESTO_FICHA |
| 368 | mailto:&lt;%=eMail%&gt;                                                                                                   |
| 370 | javascript:cv();                                                                                                          |
| 403 | mailto:&lt;%=emailResponsable%&gt;                                                                                        |
| 446 | mailto:&lt;%=emailPersonal%&gt;                                                                                           |
| 516 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=idPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt;         |
| 520 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                             |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/sse_g1_p1_rrhh.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_rrhh.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                            |
| --- | --------------------------------------------------------------------------------------------------- |
| 9   | Quién es Quién - Datos Empleado                                                                     |
| 346 | [valor dinámico] [valor dinámico] [valor dinámico]                                                  |
| 360 | Fecha de Antigüedad:                                                                                |
| 366 | Centro de Trabajo:                                                                                  |
| 367 | Dirección del Centro de Trabajo:                                                                    |
| 368 | eMail:                                                                                              |
| 369 | Teléfono / Móvil de Empresa:                                                                        |
| 370 | Acceso datos CV:                                                                                    |
| 370 | Informe                                                                                             |
| 375 | Localización                                                                                        |
| 400 | Área / Sucursal                                                                                     |
| 401 | Nombre de la Unidad                                                                                 |
| 402 | Responsable directo                                                                                 |
| 403 | eMail Responsable                                                                                   |
| 404 | Tfno. / Móvil de Empresa responsable                                                                |
| 409 | Datos Personales                                                                                    |
| 442 | Grupo / Nivel                                                                                       |
| 443 | DNI                                                                                                 |
| 444 | Num. Afiliación a SS:                                                                               |
| 445 | Domicilio:                                                                                          |
| 446 | Teléfono Personal                                                                                   |
| 447 | eMail Personal                                                                                      |
| 448 | Cuenta Bancaria Principal                                                                           |
| 449 | Cuenta Bancaria Beneficiaria                                                                        |
| 450 | Estado Civil                                                                                        |
| 451 | Fecha de Nacimiento                                                                                 |
| 462 | Familiares                                                                                          |
| 469 | Tipo Relación                                                                                       |
| 470 | Fecha de Nacimiento                                                                                 |
| 508 | Tus datos todavía no están cargados en el sistema, por favor ponte en contacto con Recursos Humanos |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                          |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 293 | img     | src=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].SCO_BLOB_PHOTO; height=141; width=94; alt=foto_bbdd                                                       |
| 297 | img     | height=141; width=94; alt=foto_bbdd; src=/images/empleados/Avatar_female.png                                                                                                                                       |
| 299 | img     | height=141; width=94; alt=foto_bbdd; src=/images/empleados/Avatar_male.png                                                                                                                                         |
| 349 | a       | class=enlacefuncional; title=DPT; href=javascript:dpt();; target=_self                                                                                                                                             |
| 353 | a       | class=enlacefuncional; title=DPT; style=text-decoration: underline;; href=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].CSP_DOC_PUESTO_FICHA; target=_blank |
| 368 | a       | href=mailto:&lt;%=eMail%&gt;                                                                                                                                                                                       |
| 370 | a       | href=javascript:cv();; target=_self                                                                                                                                                                                |
| 403 | a       | href=mailto:&lt;%=emailResponsable%&gt;                                                                                                                                                                            |
| 447 | a       | href=mailto:&lt;%=emailPersonal%&gt;                                                                                                                                                                               |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 19  | empleado        | getParameter(request,"empleado") |

| L   | Variable               | Expresión fuente                                                     | Resolución estática parcial                                              |
| --- | ---------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 19  | empleado               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")     |
| 68  | zsubsesion             | "CSP_QUIEN_ES_QUIEN"                                                 | CSP_QUIEN_ES_QUIEN                                                       |
| 69  | zmeta4object           | "CSP_QUIEN_ES_QUIEN"                                                 | CSP_QUIEN_ES_QUIEN                                                       |
| 70  | znodoORO               | "CSP_FICHA_DETALLADA"                                                | CSP_FICHA_DETALLADA                                                      |
| 71  | znodoCde               | "CSP_DATOS_PAGO_EMPLEADO"                                            | CSP_DATOS_PAGO_EMPLEADO                                                  |
| 72  | znodoCbe               | "CSP_CUENTA_BANCARIA_EMPLEADO"                                       | CSP_CUENTA_BANCARIA_EMPLEADO                                             |
| 73  | znodoCbb               | "CSP_CUENTA_BENEFICIARIO"                                            | CSP_CUENTA_BENEFICIARIO                                                  |
| 74  | znodoDir               | "CSP_DIRECCION_EMPLEADO"                                             | CSP_DIRECCION_EMPLEADO                                                   |
| 75  | znodoMail              | "CSP_MAIL_PERSONAL"                                                  | CSP_MAIL_PERSONAL                                                        |
| 76  | znodoMailResp          | "CSP_MAIL_RESPONSABLE"                                               | CSP_MAIL_RESPONSABLE                                                     |
| 77  | znodoTelef             | "CSP_TELEFONO_PERSONAL"                                              | CSP_TELEFONO_PERSONAL                                                    |
| 78  | znodoFamIRPF           | "CSP_FAM_IRPF"                                                       | CSP_FAM_IRPF                                                             |
| 79  | znodoTelefEmp          | "CSP_TELEFONO_EMPRESA"                                               | CSP_TELEFONO_EMPRESA                                                     |
| 80  | znodoTelefResp         | "CSP_TELEFONO_RESPONSABLE"                                           | CSP_TELEFONO_RESPONSABLE                                                 |
| 81  | znodoGrupNivel         | "CSP_GRUPO_NIVEL"                                                    | CSP_GRUPO_NIVEL                                                          |
| 82  | znodoResponsable       | "CSP_RESPONSABLE"                                                    | CSP_RESPONSABLE                                                          |
| 83  | znodoPuestos           | "CSP_PUESTOS"                                                        | CSP_PUESTOS                                                              |
| 86  | zoutputdefQEQ          | zsubsesion + "!" + zsubsesion + "[*]"                                | CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                         |
| 87  | zmoveQEQ               | zsubsesion + ":" + zsubsesion + "[FIRST]"                            | CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                     |
| 90  | zoutputdefORO          | zsubsesion + "!" + znodoORO + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA_DETALLADA{"[*]"}                        |
| 91  | zmoveORO               | znodoORO + ":" + znodoORO + "[FIRST]"                                | CSP_FICHA_DETALLADA{":"}CSP_FICHA_DETALLADA{"[FIRST]"}                   |
| 94  | zoutputdefCde          | zsubsesion + "!" + znodoCde + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_DATOS_PAGO_EMPLEADO{"[*]"}                    |
| 95  | zmoveCde               | znodoCde + ":" + znodoCde + "[FIRST]"                                | CSP_DATOS_PAGO_EMPLEADO{":"}CSP_DATOS_PAGO_EMPLEADO{"[FIRST]"}           |
| 98  | zoutputdefCbe          | zsubsesion + "!" + znodoCbe + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BANCARIA_EMPLEADO{"[*]"}               |
| 99  | zmoveCbe               | znodoCbe + ":" + znodoCbe + "[FIRST]"                                | CSP_CUENTA_BANCARIA_EMPLEADO{":"}CSP_CUENTA_BANCARIA_EMPLEADO{"[FIRST]"} |
| 102 | zoutputdefDir          | zsubsesion + "!" + znodoDir + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_DIRECCION_EMPLEADO{"[*]"}                     |
| 103 | zmoveDir               | znodoDir + ":" + znodoDir + "[FIRST]"                                | CSP_DIRECCION_EMPLEADO{":"}CSP_DIRECCION_EMPLEADO{"[FIRST]"}             |
| 106 | zoutputdefCbb          | zsubsesion + "!" + znodoCbb + "[*]"                                  | CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BENEFICIARIO{"[*]"}                    |
| 107 | zmoveCbb               | znodoCbb + ":" + znodoCbb + "[FIRST]"                                | CSP_CUENTA_BENEFICIARIO{":"}CSP_CUENTA_BENEFICIARIO{"[FIRST]"}           |
| 110 | zoutputdefMail         | zsubsesion + "!" + znodoMail + "[*]"                                 | CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_PERSONAL{"[*]"}                          |
| 111 | zmoveMail              | znodoMail + ":" + znodoMail + "[FIRST]"                              | CSP_MAIL_PERSONAL{":"}CSP_MAIL_PERSONAL{"[FIRST]"}                       |
| 114 | zoutputdefMailResp     | zsubsesion + "!" + znodoMailResp + "[*]"                             | CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESPONSABLE{"[*]"}                       |
| 115 | zmoveMailResp          | znodoMailResp + ":" + znodoMailResp + "[FIRST]"                      | CSP_MAIL_RESPONSABLE{":"}CSP_MAIL_RESPONSABLE{"[FIRST]"}                 |
| 118 | zoutputdefTelef        | zsubsesion + "!" + znodoTelef + "[*]"                                | CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_PERSONAL{"[*]"}                      |
| 119 | zmoveTelef             | znodoTelef + ":" + znodoTelef + "[FIRST]"                            | CSP_TELEFONO_PERSONAL{":"}CSP_TELEFONO_PERSONAL{"[FIRST]"}               |
| 122 | zoutputdefFamIRPF      | zsubsesion + "!" + znodoFamIRPF + "[*]"                              | CSP_QUIEN_ES_QUIEN{"!"}CSP_FAM_IRPF{"[*]"}                               |
| 123 | zmoveFamIRPF           | znodoFamIRPF + ":" + znodoFamIRPF + "[FIRST]"                        | CSP_FAM_IRPF{":"}CSP_FAM_IRPF{"[FIRST]"}                                 |
| 126 | zoutputdefTelefEmp     | zsubsesion + "!" + znodoTelefEmp + "[*]"                             | CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_EMPRESA{"[*]"}                       |
| 127 | zmoveTelefEmp          | znodoTelefEmp + ":" + znodoTelefEmp + "[FIRST]"                      | CSP_TELEFONO_EMPRESA{":"}CSP_TELEFONO_EMPRESA{"[FIRST]"}                 |
| 130 | zoutputdefTelefResp    | zsubsesion + "!" + znodoTelefResp + "[*]"                            | CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_RESPONSABLE{"[*]"}                   |
| 131 | zmoveTelefResp         | znodoTelefResp + ":" + znodoTelefResp + "[FIRST]"                    | CSP_TELEFONO_RESPONSABLE{":"}CSP_TELEFONO_RESPONSABLE{"[FIRST]"}         |
| 134 | zoutputdefGrupNivel    | zsubsesion + "!" + znodoGrupNivel + "[*]"                            | CSP_QUIEN_ES_QUIEN{"!"}CSP_GRUPO_NIVEL{"[*]"}                            |
| 135 | zmoveGrupNivel         | znodoGrupNivel + ":" + znodoGrupNivel + "[FIRST]"                    | CSP_GRUPO_NIVEL{":"}CSP_GRUPO_NIVEL{"[FIRST]"}                           |
| 138 | zoutputdefResponsable  | zsubsesion + "!" + znodoResponsable + "[*]"                          | CSP_QUIEN_ES_QUIEN{"!"}CSP_RESPONSABLE{"[*]"}                            |
| 139 | zmoveResponsable       | znodoResponsable + ":" + znodoResponsable + "[FIRST]"                | CSP_RESPONSABLE{":"}CSP_RESPONSABLE{"[FIRST]"}                           |
| 142 | zoutputdefPuestos      | zsubsesion + "!" + znodoPuestos + "[*]"                              | CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                |
| 143 | zmovePuestos           | znodoPuestos + ":" + znodoPuestos + "[FIRST]"                        | CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                   |
| 145 | zmetodocarga           | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"        | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"}     |
| 152 | puesto                 | ""                                                                   |                                                                          |
| 153 | idPuesto               | ""                                                                   |                                                                          |
| 154 | antiguedad             | ""                                                                   |                                                                          |
| 155 | centroTrabajo          | ""                                                                   |                                                                          |
| 156 | direccionCentrotrabajo | ""                                                                   |                                                                          |
| 157 | eMail                  | ""                                                                   |                                                                          |
| 158 | telefonoEmpresa        | ""                                                                   |                                                                          |
| 159 | unidadDireccion        | ""                                                                   |                                                                          |
| 160 | unidadArea             | ""                                                                   |                                                                          |
| 161 | nombreUnidad           | ""                                                                   |                                                                          |
| 162 | responsable            | ""                                                                   |                                                                          |
| 163 | emailResponsable       | ""                                                                   |                                                                          |
| 164 | telefonoResponsable    | ""                                                                   |                                                                          |
| 165 | matricula              | ""                                                                   |                                                                          |
| 166 | grupoNivel             | ""                                                                   |                                                                          |
| 167 | dni                    | ""                                                                   |                                                                          |
| 168 | numeroSS               | ""                                                                   |                                                                          |
| 169 | domicilio              | ""                                                                   |                                                                          |
| 170 | telefonoPersonal       | ""                                                                   |                                                                          |
| 171 | emailPersonal          | ""                                                                   |                                                                          |
| 172 | cuentaPrincipal        | ""                                                                   |                                                                          |
| 173 | cuentaBeneficiario     | ""                                                                   |                                                                          |
| 174 | fechaNacimiento        | ""                                                                   |                                                                          |
| 175 | nombreIRPF             | ""                                                                   |                                                                          |
| 176 | fechaNacimientoIRPF    | ""                                                                   |                                                                          |
| 177 | tipoRelacionIRPF       | ""                                                                   |                                                                          |
| 178 | nombreFoto             | ""                                                                   |                                                                          |
| 180 | mostrarDocumento       | "0"                                                                  | 0                                                                        |
| 181 | mostrarNDPT            | "0"                                                                  | 0                                                                        |
| 182 | auxMatricula           | ""                                                                   |                                                                          |
| 242 | numfichas              | 0                                                                    | 0                                                                        |
| 243 | numcuentas             | 0                                                                    | 0                                                                        |
| 244 | numBenef               | 0                                                                    | 0                                                                        |
| 245 | numDirecciones         | 0                                                                    | 0                                                                        |
| 246 | numMail                | 0                                                                    | 0                                                                        |
| 247 | numMailResp            | 0                                                                    | 0                                                                        |
| 248 | numTelefonoPer         | 0                                                                    | 0                                                                        |
| 249 | numTelefEmp            | 0                                                                    | 0                                                                        |
| 250 | numTelefResp           | 0                                                                    | 0                                                                        |
| 251 | numGrupNiv             | 0                                                                    | 0                                                                        |
| 252 | numFam                 | 0                                                                    | 0                                                                        |
| 253 | numResponsable         | 0                                                                    | 0                                                                        |
| 287 | Sexo                   | q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_ID_GENDER")         | q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_ID_GENDER")             |
| 323 | auxNDPT                | 0                                                                    | 0                                                                        |
| 340 | empleado1              | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO")           | q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO")               |
| 436 | estadoCivil            | q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_N_MARITAL_STAT")    | q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_N_MARITAL_STAT")        |
| 474 | id                     | ""                                                                   |                                                                          |
| 475 | i                      | 0                                                                    | 0                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                      |
| --- | ------------ | ------------------------------------------------------------------------------------------------------- |
| 185 | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                               |
| 187 | m4:beginjob  |                                                                                                         |
| 188 | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                       |
| 198 | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE"}                           |
| 200 | m4:outputdef | m4alias=CSP_QUIEN_ES_QUIEN                                                                              |
| 200 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_QUIEN_ES_QUIEN{"[*]"}                                    |
| 201 | m4:outputdef | m4alias=CSP_FICHA_DETALLADA                                                                             |
| 201 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA_DETALLADA{"[*]"}                                   |
| 202 | m4:outputdef | m4alias=CSP_DATOS_PAGO_EMPLEADO                                                                         |
| 202 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_DATOS_PAGO_EMPLEADO{"[*]"}                               |
| 203 | m4:outputdef | m4alias=CSP_CUENTA_BANCARIA_EMPLEADO                                                                    |
| 203 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BANCARIA_EMPLEADO{"[*]"}                          |
| 204 | m4:outputdef | m4alias=CSP_CUENTA_BENEFICIARIO                                                                         |
| 204 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_CUENTA_BENEFICIARIO{"[*]"}                               |
| 205 | m4:outputdef | m4alias=CSP_DIRECCION_EMPLEADO                                                                          |
| 205 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_DIRECCION_EMPLEADO{"[*]"}                                |
| 206 | m4:outputdef | m4alias=CSP_MAIL_PERSONAL                                                                               |
| 206 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_PERSONAL{"[*]"}                                     |
| 207 | m4:outputdef | m4alias=CSP_MAIL_RESPONSABLE                                                                            |
| 207 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_MAIL_RESPONSABLE{"[*]"}                                  |
| 208 | m4:outputdef | m4alias=CSP_TELEFONO_RESPONSABLE                                                                        |
| 208 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_RESPONSABLE{"[*]"}                              |
| 209 | m4:outputdef | m4alias=CSP_TELEFONO_EMPRESA                                                                            |
| 209 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_EMPRESA{"[*]"}                                  |
| 210 | m4:outputdef | m4alias=CSP_GRUPO_NIVEL                                                                                 |
| 210 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_GRUPO_NIVEL{"[*]"}                                       |
| 211 | m4:outputdef | m4alias=CSP_FAM_IRPF                                                                                    |
| 211 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FAM_IRPF{"[*]"}                                          |
| 212 | m4:outputdef | m4alias=CSP_TELEFONO_PERSONAL                                                                           |
| 212 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_TELEFONO_PERSONAL{"[*]"}                                 |
| 213 | m4:outputdef | m4alias=CSP_RESPONSABLE                                                                                 |
| 213 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_RESPONSABLE{"[*]"}                                       |
| 214 | m4:outputdef | m4alias=CSP_PUESTOS                                                                                     |
| 214 | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_PUESTOS{"[*]"}                                           |
| 216 | m4:endjob    |                                                                                                         |
| 218 | m4:move      |                                                                                                         |
| 218 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_QUIEN_ES_QUIEN{":"}CSP_QUIEN_ES_QUIEN{"[FIRST]"}                     |
| 219 | m4:move      |                                                                                                         |
| 219 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FICHA_DETALLADA{":"}CSP_FICHA_DETALLADA{"[FIRST]"}                   |
| 220 | m4:move      |                                                                                                         |
| 220 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_DATOS_PAGO_EMPLEADO{":"}CSP_DATOS_PAGO_EMPLEADO{"[FIRST]"}           |
| 221 | m4:move      |                                                                                                         |
| 221 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CUENTA_BANCARIA_EMPLEADO{":"}CSP_CUENTA_BANCARIA_EMPLEADO{"[FIRST]"} |
| 222 | m4:move      |                                                                                                         |
| 222 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_CUENTA_BENEFICIARIO{":"}CSP_CUENTA_BENEFICIARIO{"[FIRST]"}           |
| 223 | m4:move      |                                                                                                         |
| 223 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_DIRECCION_EMPLEADO{":"}CSP_DIRECCION_EMPLEADO{"[FIRST]"}             |
| 224 | m4:move      |                                                                                                         |
| 224 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_MAIL_PERSONAL{":"}CSP_MAIL_PERSONAL{"[FIRST]"}                       |
| 225 | m4:move      |                                                                                                         |
| 225 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_MAIL_RESPONSABLE{":"}CSP_MAIL_RESPONSABLE{"[FIRST]"}                 |
| 226 | m4:move      |                                                                                                         |
| 226 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_TELEFONO_RESPONSABLE{":"}CSP_TELEFONO_RESPONSABLE{"[FIRST]"}         |
| 227 | m4:move      |                                                                                                         |
| 227 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_TELEFONO_EMPRESA{":"}CSP_TELEFONO_EMPRESA{"[FIRST]"}                 |
| 228 | m4:move      |                                                                                                         |
| 228 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_GRUPO_NIVEL{":"}CSP_GRUPO_NIVEL{"[FIRST]"}                           |
| 229 | m4:move      |                                                                                                         |
| 229 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FAM_IRPF{":"}CSP_FAM_IRPF{"[FIRST]"}                                 |
| 230 | m4:move      |                                                                                                         |
| 230 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_TELEFONO_PERSONAL{":"}CSP_TELEFONO_PERSONAL{"[FIRST]"}               |
| 231 | m4:move      |                                                                                                         |
| 231 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_RESPONSABLE{":"}CSP_RESPONSABLE{"[FIRST]"}                           |
| 232 | m4:move      |                                                                                                         |
| 232 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_PUESTOS{":"}CSP_PUESTOS{"[FIRST]"}                                   |

| L   | Operación        | Argumentos literales                                               |
| --- | ---------------- | ------------------------------------------------------------------ |
| 194 | setItem          | zsubsesion,zsubsesion,"","P_EMPLEADO",empleado                     |
| 255 | getCountInClient | znodoORO,zsubsesion,znodoORO                                       |
| 256 | getCountInClient | znodoCbe,zsubsesion,znodoCbe                                       |
| 257 | getCountInClient | znodoCbb,zsubsesion,znodoCbb                                       |
| 258 | getCountInClient | znodoDir,zsubsesion,znodoDir                                       |
| 259 | getCountInClient | znodoMail,zsubsesion,znodoMail                                     |
| 260 | getCountInClient | znodoMailResp,zsubsesion,znodoMailResp                             |
| 261 | getCountInClient | znodoTelef,zsubsesion,znodoTelef                                   |
| 262 | getCountInClient | znodoTelefEmp,zsubsesion,znodoTelefEmp                             |
| 263 | getCountInClient | znodoTelefResp,zsubsesion,znodoTelefResp                           |
| 264 | getCountInClient | znodoGrupNivel,zsubsesion,znodoGrupNivel                           |
| 265 | getCountInClient | znodoFamIRPF,zsubsesion,znodoFamIRPF                               |
| 266 | getCountInClient | znodoResponsable,zsubsesion,znodoResponsable                       |
| 278 | getItem          | znodoORO,zmeta4object,znodoORO,"","NOMBRECOMPLETO"                 |
| 286 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_NOMBRE_FOTO"                |
| 287 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_ID_GENDER"                  |
| 306 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_PUESTO"                       |
| 307 | getItem          | znodoORO,zmeta4object,znodoORO,"","FEC_ANTIGUEDAD"                 |
| 308 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_CENTRO_TRABAJO"               |
| 309 | getItem          | znodoORO,zmeta4object,znodoORO,"","DIR_CENTRO_TRABAJO"             |
| 310 | getItem          | znodoORO,zmeta4object,znodoORO,"","CORREO"                         |
| 314 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_PUESTO")                     |
| 318 | getItem          | znodoTelefEmp,zmeta4object,znodoTelefEmp,"","STD_PHONE"            |
| 319 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_EMPLEADO"              |
| 325 | getItem          | znodoPuestos,zmeta4object,znodoPuestos,"","CSP_FUNCIONES"          |
| 337 | getItem          | zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC"        |
| 340 | getItem          | znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO"                    |
| 383 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_DIRECCION"                    |
| 384 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_AREA"                         |
| 385 | getItem          | znodoORO,zmeta4object,znodoORO,"","N_UNIDAD_RAIZ"                  |
| 387 | getItem          | znodoResponsable,zmeta4object,znodoResponsable,"","NOMBRECOMPLETO" |
| 390 | getItem          | znodoMailResp,zmeta4object,znodoMailResp,"","STD_EMAIL"            |
| 393 | getItem          | znodoTelefResp,zmeta4object,znodoTelefResp,"","STD_PHONE"          |
| 394 | getItem          | znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_RESPONSABLE"           |
| 417 | getItem          | znodoGrupNivel,zmeta4object,znodoGrupNivel,"","SSP_NM_CATEGORIA"   |
| 419 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_SSN"                        |
| 420 | getItem          | znodoORO,zmeta4object,znodoORO,"","NUM_AFILIACION_SS"              |
| 422 | getItem          | znodoDir,zmeta4object,znodoDir,"","SCO_GB_ADDRESS"                 |
| 425 | getItem          | znodoTelef,zmeta4object,znodoTelef,"","STD_PHONE"                  |
| 427 | getItem          | znodoORO,zmeta4object,znodoORO,"","CORREO"                         |
| 430 | getItem          | znodoCbe,zmeta4object,znodoCbe,"","SCO_GB_BANK"                    |
| 433 | getItem          | znodoCbb,zmeta4object,znodoCbb,"","SCO_GB_BANK"                    |
| 435 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_DT_BIRTH"                   |
| 436 | getItem          | znodoORO,zmeta4object,znodoORO,"","STD_N_MARITAL_STAT"             |
| 483 | getItem          | znodoFamIRPF,zmeta4object,znodoFamIRPF,"","NOMBRECOMPLETO"         |
| 484 | getItem          | znodoFamIRPF,zmeta4object,znodoFamIRPF,"","STD_DT_BIRTH"           |
| 485 | getItem          | znodoFamIRPF,zmeta4object,znodoFamIRPF,"","STD_N_ACT_DEP_TYPE"     |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos |
| --- | ------------ | ---------- |
| 25  | formatoFecha | fecha      |
| 43  | guion        | cadena     |
| 47  | OpenReport   | URL        |
| 515 | dpt          |            |
| 519 | cv           |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                      |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35  | if ((dia=='01') &amp;&amp; (mes=='01')&amp;&amp;(anio=='1800')){                                                                                                                                                                          |
| 37  | }else{                                                                                                                                                                                                                                    |
| 193 | if(empleado != null){                                                                                                                                                                                                                     |
| 271 | if (numfichas&gt;0) {                                                                                                                                                                                                                     |
| 292 | &lt;%if (!nombreFoto.equals("")){%&gt;                                                                                                                                                                                                    |
| 295 | &lt;%} else if(Sexo.equals("2")){%&gt;                                                                                                                                                                                                    |
| 298 | &lt;% }else{ %&gt;                                                                                                                                                                                                                        |
| 317 | if (numTelefEmp&gt;0){                                                                                                                                                                                                                    |
| 347 | &lt;%if (auxNDPT&gt;0){%&gt;                                                                                                                                                                                                              |
| 351 | &lt;%}else if(mostrarDocumento.equals("1")){%&gt;                                                                                                                                                                                         |
| 355 | &lt;%}else{%&gt;                                                                                                                                                                                                                          |
| 386 | if (numResponsable&gt;0){                                                                                                                                                                                                                 |
| 389 | if (numMailResp&gt;0){                                                                                                                                                                                                                    |
| 392 | if(numTelefResp&gt;0){                                                                                                                                                                                                                    |
| 416 | if(numGrupNiv&gt;0) {                                                                                                                                                                                                                     |
| 421 | if(numDirecciones&gt;0){                                                                                                                                                                                                                  |
| 424 | if(numTelefonoPer&gt;0){                                                                                                                                                                                                                  |
| 429 | if(numcuentas&gt;0) {                                                                                                                                                                                                                     |
| 432 | if(numBenef&gt;0){                                                                                                                                                                                                                        |
| 460 | &lt;% if (numFam &gt; 0) {%&gt;                                                                                                                                                                                                           |
| 505 | }else{                                                                                                                                                                                                                                    |
| 31  | expresión de cálculo/transformación: flocal = flocal.substring(flocal.indexOf("-") + 1,flocal.length);                                                                                                                                    |
| 33  | expresión de cálculo/transformación: flocal = flocal.substring(flocal.indexOf("-") + 1,flocal.length);                                                                                                                                    |
| 52  | expresión de cálculo/transformación: sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();                                                                                                                               |
| 53  | expresión de cálculo/transformación: sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();                                                                                                                            |
| 54  | expresión de cálculo/transformación: sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";                                                                                                                                           |
| 86  | expresión de cálculo/transformación: String zoutputdefQEQ = zsubsesion + "!" + zsubsesion + "[*]";                                                                                                                                        |
| 87  | expresión de cálculo/transformación: String zmoveQEQ = zsubsesion + ":" + zsubsesion + "[FIRST]";                                                                                                                                         |
| 90  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                                                                                                                          |
| 91  | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                                                                                                                             |
| 94  | expresión de cálculo/transformación: String zoutputdefCde = zsubsesion + "!" + znodoCde + "[*]";                                                                                                                                          |
| 95  | expresión de cálculo/transformación: String zmoveCde = znodoCde + ":" + znodoCde + "[FIRST]";                                                                                                                                             |
| 98  | expresión de cálculo/transformación: String zoutputdefCbe = zsubsesion + "!" + znodoCbe + "[*]";                                                                                                                                          |
| 99  | expresión de cálculo/transformación: String zmoveCbe = znodoCbe + ":" + znodoCbe + "[FIRST]";                                                                                                                                             |
| 102 | expresión de cálculo/transformación: String zoutputdefDir = zsubsesion + "!" + znodoDir + "[*]";                                                                                                                                          |
| 103 | expresión de cálculo/transformación: String zmoveDir = znodoDir + ":" + znodoDir + "[FIRST]";                                                                                                                                             |
| 106 | expresión de cálculo/transformación: String zoutputdefCbb = zsubsesion + "!" + znodoCbb + "[*]";                                                                                                                                          |
| 107 | expresión de cálculo/transformación: String zmoveCbb = znodoCbb + ":" + znodoCbb + "[FIRST]";                                                                                                                                             |
| 110 | expresión de cálculo/transformación: String zoutputdefMail = zsubsesion + "!" + znodoMail + "[*]";                                                                                                                                        |
| 111 | expresión de cálculo/transformación: String zmoveMail = znodoMail + ":" + znodoMail + "[FIRST]";                                                                                                                                          |
| 114 | expresión de cálculo/transformación: String zoutputdefMailResp = zsubsesion + "!" + znodoMailResp + "[*]";                                                                                                                                |
| 115 | expresión de cálculo/transformación: String zmoveMailResp = znodoMailResp + ":" + znodoMailResp + "[FIRST]";                                                                                                                              |
| 118 | expresión de cálculo/transformación: String zoutputdefTelef = zsubsesion + "!" + znodoTelef + "[*]";                                                                                                                                      |
| 119 | expresión de cálculo/transformación: String zmoveTelef = znodoTelef + ":" + znodoTelef + "[FIRST]";                                                                                                                                       |
| 122 | expresión de cálculo/transformación: String zoutputdefFamIRPF = zsubsesion + "!" + znodoFamIRPF + "[*]";                                                                                                                                  |
| 123 | expresión de cálculo/transformación: String zmoveFamIRPF = znodoFamIRPF + ":" + znodoFamIRPF + "[FIRST]";                                                                                                                                 |
| 126 | expresión de cálculo/transformación: String zoutputdefTelefEmp = zsubsesion + "!" + znodoTelefEmp + "[*]";                                                                                                                                |
| 127 | expresión de cálculo/transformación: String zmoveTelefEmp = znodoTelefEmp + ":" + znodoTelefEmp + "[FIRST]";                                                                                                                              |
| 130 | expresión de cálculo/transformación: String zoutputdefTelefResp = zsubsesion + "!" + znodoTelefResp + "[*]";                                                                                                                              |
| 131 | expresión de cálculo/transformación: String zmoveTelefResp = znodoTelefResp + ":" + znodoTelefResp + "[FIRST]";                                                                                                                           |
| 134 | expresión de cálculo/transformación: String zoutputdefGrupNivel = zsubsesion + "!" + znodoGrupNivel + "[*]";                                                                                                                              |
| 135 | expresión de cálculo/transformación: String zmoveGrupNivel = znodoGrupNivel + ":" + znodoGrupNivel + "[FIRST]";                                                                                                                           |
| 138 | expresión de cálculo/transformación: String zoutputdefResponsable = zsubsesion + "!" + znodoResponsable + "[*]";                                                                                                                          |
| 139 | expresión de cálculo/transformación: String zmoveResponsable = znodoResponsable + ":" + znodoResponsable + "[FIRST]";                                                                                                                     |
| 142 | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + znodoPuestos + "[*]";                                                                                                                                  |
| 143 | expresión de cálculo/transformación: String zmovePuestos = znodoPuestos + ":" + znodoPuestos + "[FIRST]";                                                                                                                                 |
| 145 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE";                                                                                                                 |
| 404 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Tfno. / Móvil de Empresa responsable &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;%=telefonoResponsable%&gt; &lt;/td&gt;&lt;/tr&gt;                          |
| 442 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Grupo / Nivel &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;script&gt; document.write(guion('&lt;%=grupoNivel%&gt;')); &lt;/script&gt; &lt;/td&gt;&lt;/tr&gt; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------- |
| 11  | /css/estilo_sse.css                                                                                                       |
| 12  | /css/style_persdata.css                                                                                                   |
| 14  | /library/jquery.js                                                                                                        |
| 15  | /libreria/funciones_sse.js                                                                                                |
| 293 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].SCO_BLOB_PHOTO       |
| 297 | /images/empleados/Avatar_female.png                                                                                       |
| 299 | /images/empleados/Avatar_male.png                                                                                         |
| 349 | javascript:dpt();                                                                                                         |
| 353 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].CSP_DOC_PUESTO_FICHA |
| 368 | mailto:&lt;%=eMail%&gt;                                                                                                   |
| 370 | javascript:cv();                                                                                                          |
| 403 | mailto:&lt;%=emailResponsable%&gt;                                                                                        |
| 447 | mailto:&lt;%=emailPersonal%&gt;                                                                                           |
| 516 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=idPuesto%&gt;                                          |
| 520 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                        | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ----------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 14  | /library/jquery.js                                                                                                | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| COLL   | 15  | /libreria/funciones_sse.js                                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 349 | javascript:dpt();                                                                                                 | dinámica   | P06                                                                                                                                                                            |
| COLL   | 368 | mailto:&lt;%=eMail%&gt;                                                                                           | dinámica   | P06                                                                                                                                                                            |
| COLL   | 370 | javascript:cv();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| COLL   | 403 | mailto:&lt;%=emailResponsable%&gt;                                                                                | dinámica   | P06                                                                                                                                                                            |
| COLL   | 446 | mailto:&lt;%=emailPersonal%&gt;                                                                                   | dinámica   | P06                                                                                                                                                                            |
| COLL   | 516 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=idPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; | ausente    | P06                                                                                                                                                                            |
| COLL   | 520 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                     | ausente    | P06                                                                                                                                                                            |
| CYC    | 14  | /library/jquery.js                                                                                                | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                          |
| CYC    | 15  | /libreria/funciones_sse.js                                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 349 | javascript:dpt();                                                                                                 | dinámica   | P06                                                                                                                                                                            |
| CYC    | 368 | mailto:&lt;%=eMail%&gt;                                                                                           | dinámica   | P06                                                                                                                                                                            |
| CYC    | 370 | javascript:cv();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| CYC    | 403 | mailto:&lt;%=emailResponsable%&gt;                                                                                | dinámica   | P06                                                                                                                                                                            |
| CYC    | 447 | mailto:&lt;%=emailPersonal%&gt;                                                                                   | dinámica   | P06                                                                                                                                                                            |
| CYC    | 516 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=idPuesto%&gt;                                  | ausente    | P06                                                                                                                                                                            |
| CYC    | 520 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                     | ausente    | P06                                                                                                                                                                            |
| IBER   | 14  | /library/jquery.js                                                                                                | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| IBER   | 15  | /libreria/funciones_sse.js                                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 349 | javascript:dpt();                                                                                                 | dinámica   | P06                                                                                                                                                                            |
| IBER   | 368 | mailto:&lt;%=eMail%&gt;                                                                                           | dinámica   | P06                                                                                                                                                                            |
| IBER   | 370 | javascript:cv();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| IBER   | 403 | mailto:&lt;%=emailResponsable%&gt;                                                                                | dinámica   | P06                                                                                                                                                                            |
| IBER   | 446 | mailto:&lt;%=emailPersonal%&gt;                                                                                   | dinámica   | P06                                                                                                                                                                            |
| IBER   | 516 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=&lt;%=idPuesto%&gt;&amp;sociedad=&lt;%=sociedad%&gt; | ausente    | P06                                                                                                                                                                            |
| IBER   | 520 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=auxMatricula%&gt;                                     | ausente    | P06                                                                                                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p1_rrhh.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
