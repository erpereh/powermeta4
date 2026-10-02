# Quién es Quién - Datos Empleado

Identificador: `sse_g0/ssco_g0_who_is_who_empl.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/sse_g0/ssco_g0_who_is_who_empl.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/ssco_g0_who_is_who_empl.jsp) | `5becfd4f09884393c4ab85c5a435e26d759cf930013e6822f513e599d13746ef` |    234 |
| CYC / compartido  | [m4custom/CYC/sse_g0/ssco_g0_who_is_who_empl.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/ssco_g0_who_is_who_empl.jsp)   | `5becfd4f09884393c4ab85c5a435e26d759cf930013e6822f513e599d13746ef` |    234 |
| IBER / compartido | [m4custom/IBER/sse_g0/ssco_g0_who_is_who_empl.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g0/ssco_g0_who_is_who_empl.jsp) | `5becfd4f09884393c4ab85c5a435e26d759cf930013e6822f513e599d13746ef` |    234 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_g0/ssco_g0_who_is_who_empl.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/ssco_g0_who_is_who_empl.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                  |
| --- | ----------------------------------------- |
| 9   | Quién es Quién - Datos Empleado           |
| 77  | 1105apellido_1 1105apellido_2, 1105nombre |
| 109 | Responsable de Aplicaciones Internas      |
| 112 | Fecha de Antigüedad:                      |
| 113 | 14/02/2008                                |
| 116 | Centro de Trabajo:                        |
| 117 | Madrid                                    |
| 120 | Dirección del Centro de Trabajo:          |
| 121 | Paseo de la Castellana, 4                 |
| 124 | eMail:                                    |
| 125 | [correo omitido]                          |
| 132 | 999999999                                 |
| 143 | Informe                                   |
| 161 | Dirección:                                |
| 162 | Dirección de Tecnología                   |
| 165 | Área / Sucursal:                          |
| 166 | Desarrollo                                |
| 169 | Nombre de la Unidad:                      |
| 170 | Aplicaciones Internas                     |
| 207 | eMail Responsable:                        |
| 208 | [correo omitido]                          |
| 215 | 999999999                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                                                                                                                                                                      |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 76  | img     | alt=; src=/Personae/portals/std/images/portal/ctlc.gif                                                                                                                                                                                                                                                                                                                                         |
| 78  | img     | alt=; src=/Personae/portals/std/images/portal/ctrc.gif                                                                                                                                                                                                                                                                                                                                         |
| 92  | img     | width=0; height=3; alt=; border=0; src=/Personae/t.gif                                                                                                                                                                                                                                                                                                                                         |
| 101 | img     | src=/Personae/servlet/binaryProcessing?action=download&amp;contextID=683813058&amp;application=Personae&amp;view=bQuienEsQuien&amp;resource=M4ORO_EMPLEADOS&amp;realAttribute=foto_bbdd&amp;contentType=image%2Fjpeg&amp;multiValuedPos=0&amp;dn=id_empleado%3D1105%2Cid_unidad_raiz%3D5_APLICINT&amp;default=%2FPersonae%2Fimages%2Fphotos%2Fdefault.jpg; height=141; width=94; alt=foto_bbdd |
| 109 | a       | href=/Personae/shared/jsp/requestRedirector.jsp?application=Personae&amp;view=bQuienEsQuien&amp;resource=M4ORO_PUESTOS&amp;contextID=683813058&amp;action=read&amp;request=%28n_puesto%3DResponsable+de+Aplicaciones+Internas%29                                                                                                                                                               |
| 125 | a       | href=mailto:[correo omitido]                                                                                                                                                                                                                                                                                                                                                                   |
| 143 | a       | href=; onclick=aLink0OpenWindow();return false;                                                                                                                                                                                                                                                                                                                                                |
| 189 | a       | href=/Personae/forms/M4ORO_EMPLEADOS/entry/read.jsp?resource=M4ORO_EMPLEADOS&amp;view=bQuienEsQuien&amp;application=Personae&amp;dn=id_empleado%3D0981%2Cid_unidad_raiz%3D4_DTECNO                                                                                                                                                                                                             |
| 208 | a       | href=mailto:[correo omitido]                                                                                                                                                                                                                                                                                                                                                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 17  | empleado        | getParameter(request,"empleado") |

| L   | Variable         | Expresión fuente                                                        | Resolución estática parcial                                                               |
| --- | ---------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 17  | empleado         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                      |
| 24  | zsubsesion       | "CSP_QUIEN_ES_QUIEN"                                                    | CSP_QUIEN_ES_QUIEN                                                                        |
| 25  | zmeta4object     | "CSP_QUIEN_ES_QUIEN"                                                    | CSP_QUIEN_ES_QUIEN                                                                        |
| 26  | znodoORO         | "CSP_ORO"                                                               | CSP_ORO                                                                                   |
| 28  | zoutputdefORO    | zsubsesion + "!" + znodoORO + "[*]"                                     | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[*]"}                                                     |
| 29  | zmoveORO         | znodoORO + ":" + znodoORO + "[FIRST]"                                   | CSP_ORO{":"}CSP_ORO{"[FIRST]"}                                                            |
| 30  | ziteratorORO     | znodoORO + ":" + zsubsesion + "!" + znodoORO                            | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO                                                |
| 31  | zlecturaORO      | zsubsesion + "!" + znodoORO                                             | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO                                                            |
| 32  | zraizORO         | zsubsesion + "!" + znodoORO + "."                                       | CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"."}                                                       |
| 34  | zmetodocarga     | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"                   | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"}                              |
| 36  | zcomunORO        | znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "." | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}                       |
| 39  | zNommbreCompleto | zcomunORO + "NOMBRE_COMPLETO"                                           | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}    |
| 40  | zNomCentTrabajo  | zcomunORO + "N_CENTRO_TRABAJO"                                          | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}   |
| 41  | zDirCentTrabajo  | zcomunORO + "DIR_CENTRO_TRABAJO"                                        | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"} |
| 42  | zNomDireccion    | zcomunORO + "N_DIRECCION"                                               | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}        |
| 43  | zNomPuesto       | zcomunORO + "N_PUESTO"                                                  | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}           |
| 44  | zIdCentroTrab    | zcomunORO + "ID_CENTRO_TRABAJO"                                         | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}  |
| 45  | zFotoEmpleado    | zcomunORO + "SCO_BLOB_PHOTO"                                            | CSP_ORO{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[&amp;VAR.m4lix]"}{"."}{"SCO_BLOB_PHOTO"}     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                    |
| --- | ------------ | --------------------------------------------------------------------- |
| 49  | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                             |
| 51  | m4:beginjob  |                                                                       |
| 52  | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                     |
| 61  | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"} |
| 63  | m4:outputdef | m4alias=CSP_ORO                                                       |
| 63  | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_ORO{"[*]"}             |
| 65  | m4:endjob    |                                                                       |
| 67  | m4:move      |                                                                       |
| 67  | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_ORO{":"}CSP_ORO{"[FIRST]"}         |

| L   | Operación | Argumentos literales                           |
| --- | --------- | ---------------------------------------------- |
| 58  | setItem   | zsubsesion,zsubsesion,"","P_EMPLEADO",empleado |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función          | Argumentos |
| --- | ---------------- | ---------- |
| 143 | aLink0OpenWindow |            |

| L   | Condición / acción / mensaje literal                                                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 57  | if(empleado != null){                                                                                                                                                    |
| 28  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                                                         |
| 29  | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                                                            |
| 30  | expresión de cálculo/transformación: String ziteratorORO = znodoORO + ":" + zsubsesion + "!" + znodoORO;                                                                 |
| 31  | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + znodoORO;                                                                                   |
| 32  | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + znodoORO + ".";                                                                                |
| 34  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO";                                                        |
| 36  | expresión de cálculo/transformación: String zcomunORO = znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + ".";                                         |
| 39  | expresión de cálculo/transformación: String zNommbreCompleto = zcomunORO + "NOMBRE_COMPLETO";                                                                            |
| 40  | expresión de cálculo/transformación: String zNomCentTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                                                            |
| 41  | expresión de cálculo/transformación: String zDirCentTrabajo = zcomunORO + "DIR_CENTRO_TRABAJO";                                                                          |
| 42  | expresión de cálculo/transformación: String zNomDireccion = zcomunORO + "N_DIRECCION";                                                                                   |
| 43  | expresión de cálculo/transformación: String zNomPuesto = zcomunORO + "N_PUESTO";                                                                                         |
| 44  | expresión de cálculo/transformación: String zIdCentroTrab = zcomunORO + "ID_CENTRO_TRABAJO";                                                                             |
| 45  | expresión de cálculo/transformación: String zFotoEmpleado = zcomunORO + "SCO_BLOB_PHOTO";                                                                                |
| 131 | expresión de cálculo/transformación: &lt;td width="35%" class="FormLabel"&gt;&lt;span class="FormLabel"&gt;Teléfono / Móvil de Empresa:&lt;/span&gt;&lt;/td&gt;          |
| 165 | expresión de cálculo/transformación: &lt;td width="35%" class="FormLabel"&gt;&lt;span class="FormLabel"&gt;Área / Sucursal:&lt;/span&gt;&lt;/td&gt;                      |
| 214 | expresión de cálculo/transformación: &lt;td width="35%" class="FormLabel"&gt;&lt;span class="FormLabel"&gt;Tfno. / Móvil de Empresa responsable:&lt;/span&gt;&lt;/td&gt; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                                                                                                                                                                                                                                                                     |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | /css/estilo_sse.css                                                                                                                                                                                                                                                                                                                                   |
| 12  | /css/style_persdata.css                                                                                                                                                                                                                                                                                                                               |
| 13  | /library/jquery.js                                                                                                                                                                                                                                                                                                                                    |
| 76  | /Personae/portals/std/images/portal/ctlc.gif                                                                                                                                                                                                                                                                                                          |
| 78  | /Personae/portals/std/images/portal/ctrc.gif                                                                                                                                                                                                                                                                                                          |
| 92  | /Personae/t.gif                                                                                                                                                                                                                                                                                                                                       |
| 101 | /Personae/servlet/binaryProcessing?action=download&amp;contextID=683813058&amp;application=Personae&amp;view=bQuienEsQuien&amp;resource=M4ORO_EMPLEADOS&amp;realAttribute=foto_bbdd&amp;contentType=image%2Fjpeg&amp;multiValuedPos=0&amp;dn=id_empleado%3D1105%2Cid_unidad_raiz%3D5_APLICINT&amp;default=%2FPersonae%2Fimages%2Fphotos%2Fdefault.jpg |
| 109 | /Personae/shared/jsp/requestRedirector.jsp?application=Personae&amp;view=bQuienEsQuien&amp;resource=M4ORO_PUESTOS&amp;contextID=683813058&amp;action=read&amp;request=%28n_puesto%3DResponsable+de+Aplicaciones+Internas%29                                                                                                                           |
| 125 | mailto:[correo omitido]                                                                                                                                                                                                                                                                                                                               |
| 189 | /Personae/forms/M4ORO_EMPLEADOS/entry/read.jsp?resource=M4ORO_EMPLEADOS&amp;view=bQuienEsQuien&amp;application=Personae&amp;dn=id_empleado%3D0981%2Cid_unidad_raiz%3D4_DTECNO                                                                                                                                                                         |
| 208 | mailto:[correo omitido]                                                                                                                                                                                                                                                                                                                               |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                                                                                                                                  | Resolución | Ficha / candidato                                                      |
| ------ | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------- |
| COLL   | 13  | /library/jquery.js                                                                                                                                                                                                          | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96; |
| COLL   | 109 | /Personae/shared/jsp/requestRedirector.jsp?application=Personae&amp;view=bQuienEsQuien&amp;resource=M4ORO_PUESTOS&amp;contextID=683813058&amp;action=read&amp;request=%28n_puesto%3DResponsable+de+Aplicaciones+Internas%29 | ausente    | P06                                                                    |
| COLL   | 189 | /Personae/forms/M4ORO_EMPLEADOS/entry/read.jsp?resource=M4ORO_EMPLEADOS&amp;view=bQuienEsQuien&amp;application=Personae&amp;dn=id_empleado%3D0981%2Cid_unidad_raiz%3D4_DTECNO                                               | ausente    | P06                                                                    |
| CYC    | 13  | /library/jquery.js                                                                                                                                                                                                          | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;  |
| CYC    | 109 | /Personae/shared/jsp/requestRedirector.jsp?application=Personae&amp;view=bQuienEsQuien&amp;resource=M4ORO_PUESTOS&amp;contextID=683813058&amp;action=read&amp;request=%28n_puesto%3DResponsable+de+Aplicaciones+Internas%29 | ausente    | P06                                                                    |
| CYC    | 189 | /Personae/forms/M4ORO_EMPLEADOS/entry/read.jsp?resource=M4ORO_EMPLEADOS&amp;view=bQuienEsQuien&amp;application=Personae&amp;dn=id_empleado%3D0981%2Cid_unidad_raiz%3D4_DTECNO                                               | ausente    | P06                                                                    |
| IBER   | 13  | /library/jquery.js                                                                                                                                                                                                          | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96; |
| IBER   | 109 | /Personae/shared/jsp/requestRedirector.jsp?application=Personae&amp;view=bQuienEsQuien&amp;resource=M4ORO_PUESTOS&amp;contextID=683813058&amp;action=read&amp;request=%28n_puesto%3DResponsable+de+Aplicaciones+Internas%29 | ausente    | P06                                                                    |
| IBER   | 189 | /Personae/forms/M4ORO_EMPLEADOS/entry/read.jsp?resource=M4ORO_EMPLEADOS&amp;view=bQuienEsQuien&amp;application=Personae&amp;dn=id_empleado%3D0981%2Cid_unidad_raiz%3D4_DTECNO                                               | ausente    | P06                                                                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_g0_who_is_who_empl.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
