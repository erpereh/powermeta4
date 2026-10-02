# sse_g1_pcyc

Identificador: `sse_generico/sse_g1_pcyc.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sse_g1_pcyc.jsp) | `f5edd21b38379a332aa60a08e6dca49d081ec77648b9780847fb65a248a0eeae` |    112 |
| COLL / compartido | [m4custom/COLL/sse_generico/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sse_g1_pcyc.jsp)                 | `d04ec61a7c9e83d9ea528bfc4714eb79b029aabd4515f0ae01f465003e39d5ad` |     66 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sse_g1_pcyc.jsp)   | `99e79fde5b933c3edc2882a72ea235e4919d747558d2a0034c33c9880bf775bd` |    111 |
| CYC / compartido  | [m4custom/CYC/sse_generico/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/sse_g1_pcyc.jsp)                   | `d04ec61a7c9e83d9ea528bfc4714eb79b029aabd4515f0ae01f465003e39d5ad` |     66 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/sse_g1_pcyc.jsp) | `f5edd21b38379a332aa60a08e6dca49d081ec77648b9780847fb65a248a0eeae` |    112 |
| IBER / compartido | [m4custom/IBER/sse_generico/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/sse_g1_pcyc.jsp)                 | `d04ec61a7c9e83d9ea528bfc4714eb79b029aabd4515f0ae01f465003e39d5ad` |     66 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sse_g1_pcyc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta      |
| --- | ----------------------------- |
| 67  | Certificado de Haberes        |
| 68  | Informe de Compensación Total |
| 69  | Organigrama                   |
| 73  | Curriculum Web                |
| 74  | Mi Evaluación                 |
| 76  | Hol@ Kiosco                   |
| 80  | CyC e-learning                |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                           |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 49  | iframe  | id=iframeUpload; name=iframeUpload; style=display:none                                                                              |
| 50  | iframe  | id=iframeTempUpload; name=iframeTempUpload; style=display:none                                                                      |
| 66  | a       | class=enlacefuncional; title=Nómina; tabindex=2; href=/servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             |
| 66  | img     | alt=; title=; src=/iconos/espanol/noname_recibo_57_100.gif                                                                          |
| 67  | a       | class=enlacefuncional; title=Certificado de Haberes; tabindex=1; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp     |
| 67  | img     | alt=; title=; src=/iconos/espanol/noname_evalua_cursos_74_100.gif                                                                   |
| 68  | a       | class=enlacefuncional; title=Informe de proyecciones; tabindex=1; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_proyecciones.jsp    |
| 68  | img     | alt=; title=; src=/iconos/espanol/noname_recibos_57_100.gif                                                                         |
| 69  | a       | class=enlacefuncional; title=Organigrama; tabindex=4; href=/servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigramas.jsp                |
| 69  | img     | alt=; title=; src=/iconos/espanol/noname_organizacion_ess_115_100.gif                                                               |
| 73  | a       | class=enlacefuncional; title=Curriculum Web; tabindex=3; href=javascript:cv();                                                      |
| 73  | img     | alt=; title=; src=/iconos/noname_eventos_mss_99_100.gif                                                                             |
| 74  | a       | class=enlacefuncional; title=Mi Evaluación; tabindex=6; href=[host externo]/rrhhh/login; target=_blank                              |
| 74  | img     | alt=; title=; src=/iconos/noname_evaluar_111_125.gif                                                                                |
| 76  | a       | class=enlacefuncional; title=Hol@ Kiosco; tabindex=4; href=[host externo]/Digitek/EvalosEmpleados/Account/Login.aspx; target=_blank |
| 76  | img     | alt=; title=; src=/iconos/espanol/noname_resultados_evaluacion_ess_100_100.gif                                                      |
| 80  | a       | class=enlacefuncional; title=CYC-learning; tabindex=5; href=[host externo]/CREDITOYCAUCION/; target=_blank                          |
| 80  | img     | alt=; title=; src=/iconos/noname_hombre_conocimiento_66_100.gif                                                                     |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 33  | zIdPerson       | getBagEntries("zIdPerson") |

| L   | Variable     | Expresión fuente                                                                                    | Resolución estática parcial                                                                         |
| --- | ------------ | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 33  | matricula    | zsesionDA.getBagEntries("zIdPerson")                                                                | zsesionDA.getBagEntries("zIdPerson")                                                                |
| 34  | matriculaEnc | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", matricula) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", matricula) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 104 | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 99  | cv      |            |

| L   | Condición / acción / mensaje literal                      |
| --- | --------------------------------------------------------- |
| 20  | if (event===undefined) event= window.event;               |
| 22  | if(target.tagName=="a" &#124;&#124; target.tagName=="A"){ |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                             |
| --- | ----------------------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                                           |
| 66  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             |
| 66  | /iconos/espanol/noname_recibo_57_100.gif                                      |
| 67  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     |
| 67  | /iconos/espanol/noname_evalua_cursos_74_100.gif                               |
| 68  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_proyecciones.jsp                     |
| 68  | /iconos/espanol/noname_recibos_57_100.gif                                     |
| 69  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigramas.jsp                     |
| 69  | /iconos/espanol/noname_organizacion_ess_115_100.gif                           |
| 73  | javascript:cv();                                                              |
| 73  | /iconos/noname_eventos_mss_99_100.gif                                         |
| 74  | [host externo]/rrhhh/login                                                    |
| 74  | /iconos/noname_evaluar_111_125.gif                                            |
| 76  | [host externo]/Digitek/EvalosEmpleados/Account/Login.aspx                     |
| 76  | /iconos/espanol/noname_resultados_evaluacion_ess_100_100.gif                  |
| 80  | [host externo]/CREDITOYCAUCION/                                               |
| 80  | /iconos/noname_hombre_conocimiento_66_100.gif                                 |
| 100 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; |

## Versión 2: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sse_g1_pcyc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 36  | Nomina                   |
| 37  | Hol@ Kiosco              |
| 38  | Curriculum Web           |
| 42  | Mi Evaluación            |
| 44  | Organigrama              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                       |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 18  | iframe  | id=iframeUpload; name=iframeUpload; style=display:none                                                                          |
| 19  | iframe  | id=iframeTempUpload; name=iframeTempUpload; style=display:none                                                                  |
| 35  | a       | class=enlacefuncional; title=Certificado de Haberes; tabindex=1; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp |
| 35  | img     | alt=; title=; src=/iconos/espanol/noname_evalua_cursos_74_100.gif                                                               |
| 36  | a       | class=enlacefuncional; title=Nómina; tabindex=2; href=/servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                         |
| 36  | img     | alt=; title=; src=/iconos/espanol/noname_recibo_57_100.gif                                                                      |
| 37  | a       | class=enlacefuncional; title=Hol@ Kiosco; tabindex=3; href=[host externo]/SmartHL/eTouchKiosk/logon_keypad.aspx; target=_blank  |
| 37  | img     | alt=; title=; src=/iconos/espanol/noname_resultados_evaluacion_ess_100_100.gif                                                  |
| 38  | a       | class=enlacefuncional; title=Curriculum Web; tabindex=4; href=[host externo]/CurriculumVitaeWeb/login.jsp; target=_blank        |
| 38  | img     | alt=; title=; src=/iconos/noname_eventos_mss_99_100.gif                                                                         |
| 42  | a       | class=enlacefuncional; title=Mi Evaluación; tabindex=4; href=[host externo]/; target=_blank                                     |
| 42  | img     | alt=; title=; src=/iconos/noname_evaluar_111_125.gif                                                                            |
| 44  | a       | class=enlacefuncional; title=Organigrama; tabindex=7; href=[host externo]/Personae/ ; target=_blank                             |
| 44  | img     | alt=; title=; src=/iconos/espanol/noname_organizacion_ess_115_100.gif                                                           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 15  | zIdPerson       | getBagEntries("zIdPerson") |

| L   | Variable     | Expresión fuente                                                                                    | Resolución estática parcial                                                                         |
| --- | ------------ | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 15  | matricula    | zsesionDA.getBagEntries("zIdPerson")                                                                | zsesionDA.getBagEntries("zIdPerson")                                                                |
| 16  | matriculaEnc | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", matricula) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", matricula) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 58  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 53  | cv      |            |

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                             |
| --- | ----------------------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                                           |
| 35  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     |
| 35  | /iconos/espanol/noname_evalua_cursos_74_100.gif                               |
| 36  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             |
| 36  | /iconos/espanol/noname_recibo_57_100.gif                                      |
| 37  | [host externo]/SmartHL/eTouchKiosk/logon_keypad.aspx                          |
| 37  | /iconos/espanol/noname_resultados_evaluacion_ess_100_100.gif                  |
| 38  | [host externo]/CurriculumVitaeWeb/login.jsp                                   |
| 38  | /iconos/noname_eventos_mss_99_100.gif                                         |
| 42  | [host externo]/                                                               |
| 42  | /iconos/noname_evaluar_111_125.gif                                            |
| 44  | [host externo]/Personae/                                                      |
| 44  | /iconos/espanol/noname_organizacion_ess_115_100.gif                           |
| 54  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; |

## Versión 3: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_generico/espanol/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sse_g1_pcyc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta      |
| --- | ----------------------------- |
| 67  | Certificado de Haberes.       |
| 68  | Informe de Compensación Total |
| 69  | Organigrama                   |
| 72  | Curriculum Web                |
| 73  | Mi Evaluación                 |
| 76  | Hol@ Kiosco                   |
| 79  | CyC e-learning                |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                           |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 49  | iframe  | id=iframeUpload; name=iframeUpload; style=display:none                                                                              |
| 50  | iframe  | id=iframeTempUpload; name=iframeTempUpload; style=display:none                                                                      |
| 66  | a       | class=enlacefuncional; title=Nómina; tabindex=1; href=/servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             |
| 66  | img     | alt=; title=; src=/iconos/espanol/noname_recibo_57_100.gif                                                                          |
| 67  | a       | class=enlacefuncional; title=Certificado de Haberes; tabindex=2; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp     |
| 67  | img     | alt=; title=; src=/iconos/espanol/noname_evalua_cursos_74_100.gif                                                                   |
| 68  | a       | class=enlacefuncional; title=Informe de proyecciones; tabindex=3; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_proyecciones.jsp    |
| 68  | img     | alt=; title=; src=/iconos/espanol/noname_recibos_57_100.gif                                                                         |
| 69  | a       | class=enlacefuncional; title=Organigrama; tabindex=4; href=/servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigramas.jsp                |
| 69  | img     | alt=; title=; src=/iconos/espanol/noname_organizacion_ess_115_100.gif                                                               |
| 72  | a       | class=enlacefuncional; title=Curriculum Web; tabindex=3; href=javascript:cv();                                                      |
| 72  | img     | alt=; title=; src=/iconos/noname_eventos_mss_99_100.gif                                                                             |
| 73  | a       | class=enlacefuncional; title=Mi Evaluación; tabindex=6; href=[host externo]/rrhhh/login; target=_blank                              |
| 73  | img     | alt=; title=; src=/iconos/noname_evaluar_111_125.gif                                                                                |
| 76  | a       | class=enlacefuncional; title=Hol@ Kiosco; tabindex=4; href=[host externo]/Digitek/EvalosEmpleados/Account/Login.aspx; target=_blank |
| 76  | img     | alt=; title=; src=/iconos/espanol/noname_resultados_evaluacion_ess_100_100.gif                                                      |
| 79  | a       | class=enlacefuncional; title=CyC e-learning; tabindex=5; href=[host externo]/CREDITOYCAUCION/; target=_blank                        |
| 79  | img     | alt=; title=; src=/iconos/noname_hombre_conocimiento_66_100.gif                                                                     |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 32  | zIdPerson       | getBagEntries("zIdPerson") |

| L   | Variable     | Expresión fuente                                                                                    | Resolución estática parcial                                                                         |
| --- | ------------ | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 32  | matricula    | zsesionDA.getBagEntries("zIdPerson")                                                                | zsesionDA.getBagEntries("zIdPerson")                                                                |
| 33  | matriculaEnc | matricula                                                                                           | zsesionDA.getBagEntries("zIdPerson")                                                                |
| 34  | matriculaEnc | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", matricula) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", matricula) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 103 | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 98  | cv      |            |

| L   | Condición / acción / mensaje literal                      |
| --- | --------------------------------------------------------- |
| 20  | if (event===undefined) event= window.event;               |
| 22  | if(target.tagName=="a" &#124;&#124; target.tagName=="A"){ |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                             |
| --- | ----------------------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                                           |
| 66  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             |
| 66  | /iconos/espanol/noname_recibo_57_100.gif                                      |
| 67  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     |
| 67  | /iconos/espanol/noname_evalua_cursos_74_100.gif                               |
| 68  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_proyecciones.jsp                     |
| 68  | /iconos/espanol/noname_recibos_57_100.gif                                     |
| 69  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigramas.jsp                     |
| 69  | /iconos/espanol/noname_organizacion_ess_115_100.gif                           |
| 72  | javascript:cv();                                                              |
| 72  | /iconos/noname_eventos_mss_99_100.gif                                         |
| 73  | [host externo]/rrhhh/login                                                    |
| 73  | /iconos/noname_evaluar_111_125.gif                                            |
| 76  | [host externo]/Digitek/EvalosEmpleados/Account/Login.aspx                     |
| 76  | /iconos/espanol/noname_resultados_evaluacion_ess_100_100.gif                  |
| 79  | [host externo]/CREDITOYCAUCION/                                               |
| 79  | /iconos/noname_hombre_conocimiento_66_100.gif                                 |
| 99  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                    | Resolución | Ficha / candidato                                                                                                                                        |
| ------ | --- | ----------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 66  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             | contextual | [sse_g2/ssco_g2_p12.jsp](../../empleado/retribucion/sse_g2--ssco_g2_p12.md); [sse_g2/ssco_g2_p12.jsp](../../empleado/retribucion/sse_g2--ssco_g2_p12.md) |
| COLL   | 67  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     | ausente    | P06                                                                                                                                                      |
| COLL   | 68  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_proyecciones.jsp                     | ausente    | P06                                                                                                                                                      |
| COLL   | 69  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigramas.jsp                     | contextual | [sse_g0/sse_g0_organigramas.jsp](../../empleado/organizacion/sse_g0--sse_g0_organigramas.md)                                                             |
| COLL   | 73  | javascript:cv();                                                              | dinámica   | P06                                                                                                                                                      |
| COLL   | 74  | [host externo]/rrhhh/login                                                    | externa    | destino externo                                                                                                                                          |
| COLL   | 76  | [host externo]/Digitek/EvalosEmpleados/Account/Login.aspx                     | externa    | destino externo                                                                                                                                          |
| COLL   | 80  | [host externo]/CREDITOYCAUCION/                                               | externa    | destino externo                                                                                                                                          |
| COLL   | 100 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; | ausente    | P06                                                                                                                                                      |
| COLL   | 35  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     | ausente    | P06                                                                                                                                                      |
| COLL   | 36  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             | contextual | [sse_g2/ssco_g2_p12.jsp](../../empleado/retribucion/sse_g2--ssco_g2_p12.md); [sse_g2/ssco_g2_p12.jsp](../../empleado/retribucion/sse_g2--ssco_g2_p12.md) |
| COLL   | 37  | [host externo]/SmartHL/eTouchKiosk/logon_keypad.aspx                          | externa    | destino externo                                                                                                                                          |
| COLL   | 38  | [host externo]/CurriculumVitaeWeb/login.jsp                                   | externa    | destino externo                                                                                                                                          |
| COLL   | 42  | [host externo]/                                                               | externa    | destino externo                                                                                                                                          |
| COLL   | 44  | [host externo]/Personae/                                                      | externa    | destino externo                                                                                                                                          |
| COLL   | 54  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; | ausente    | P06                                                                                                                                                      |
| CYC    | 66  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             | contextual | [sse_g2/ssco_g2_p12.jsp](../../empleado/retribucion/sse_g2--ssco_g2_p12.md); [sse_g2/ssco_g2_p12.jsp](../../empleado/retribucion/sse_g2--ssco_g2_p12.md) |
| CYC    | 67  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     | ausente    | P06                                                                                                                                                      |
| CYC    | 68  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_proyecciones.jsp                     | ausente    | P06                                                                                                                                                      |
| CYC    | 69  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigramas.jsp                     | contextual | [sse_g0/sse_g0_organigramas.jsp](../../empleado/organizacion/sse_g0--sse_g0_organigramas.md)                                                             |
| CYC    | 72  | javascript:cv();                                                              | dinámica   | P06                                                                                                                                                      |
| CYC    | 73  | [host externo]/rrhhh/login                                                    | externa    | destino externo                                                                                                                                          |
| CYC    | 76  | [host externo]/Digitek/EvalosEmpleados/Account/Login.aspx                     | externa    | destino externo                                                                                                                                          |
| CYC    | 79  | [host externo]/CREDITOYCAUCION/                                               | externa    | destino externo                                                                                                                                          |
| CYC    | 99  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; | ausente    | P06                                                                                                                                                      |
| CYC    | 35  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     | ausente    | P06                                                                                                                                                      |
| CYC    | 36  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             | contextual | [sse_g2/ssco_g2_p12.jsp](../../empleado/retribucion/sse_g2--ssco_g2_p12.md); [sse_g2/ssco_g2_p12.jsp](../../empleado/retribucion/sse_g2--ssco_g2_p12.md) |
| CYC    | 37  | [host externo]/SmartHL/eTouchKiosk/logon_keypad.aspx                          | externa    | destino externo                                                                                                                                          |
| CYC    | 38  | [host externo]/CurriculumVitaeWeb/login.jsp                                   | externa    | destino externo                                                                                                                                          |
| CYC    | 42  | [host externo]/                                                               | externa    | destino externo                                                                                                                                          |
| CYC    | 44  | [host externo]/Personae/                                                      | externa    | destino externo                                                                                                                                          |
| CYC    | 54  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; | ausente    | P06                                                                                                                                                      |
| IBER   | 66  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             | contextual | [sse_g2/ssco_g2_p12.jsp](../../empleado/retribucion/sse_g2--ssco_g2_p12.md); [sse_g2/ssco_g2_p12.jsp](../../empleado/retribucion/sse_g2--ssco_g2_p12.md) |
| IBER   | 67  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     | ausente    | P06                                                                                                                                                      |
| IBER   | 68  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_proyecciones.jsp                     | ausente    | P06                                                                                                                                                      |
| IBER   | 69  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigramas.jsp                     | contextual | [sse_g0/sse_g0_organigramas.jsp](../../empleado/organizacion/sse_g0--sse_g0_organigramas.md)                                                             |
| IBER   | 73  | javascript:cv();                                                              | dinámica   | P06                                                                                                                                                      |
| IBER   | 74  | [host externo]/rrhhh/login                                                    | externa    | destino externo                                                                                                                                          |
| IBER   | 76  | [host externo]/Digitek/EvalosEmpleados/Account/Login.aspx                     | externa    | destino externo                                                                                                                                          |
| IBER   | 80  | [host externo]/CREDITOYCAUCION/                                               | externa    | destino externo                                                                                                                                          |
| IBER   | 100 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; | ausente    | P06                                                                                                                                                      |
| IBER   | 35  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     | ausente    | P06                                                                                                                                                      |
| IBER   | 36  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             | contextual | [sse_g2/ssco_g2_p12.jsp](../../empleado/retribucion/sse_g2--ssco_g2_p12.md); [sse_g2/ssco_g2_p12.jsp](../../empleado/retribucion/sse_g2--ssco_g2_p12.md) |
| IBER   | 37  | [host externo]/SmartHL/eTouchKiosk/logon_keypad.aspx                          | externa    | destino externo                                                                                                                                          |
| IBER   | 38  | [host externo]/CurriculumVitaeWeb/login.jsp                                   | externa    | destino externo                                                                                                                                          |
| IBER   | 42  | [host externo]/                                                               | externa    | destino externo                                                                                                                                          |
| IBER   | 44  | [host externo]/Personae/                                                      | externa    | destino externo                                                                                                                                          |
| IBER   | 54  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; | ausente    | P06                                                                                                                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sse_g1_pcyc.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
