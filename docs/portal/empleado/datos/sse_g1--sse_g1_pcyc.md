# Aplicaciones Internas

Identificador: `sse_g1/sse_g1_pcyc.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_pcyc.jsp) | `a1128f9facad4b83264612de820075285277fc3a494315775cf1dc4dc3484f36` |     69 |
| COLL / compartido | [m4custom/COLL/sse_g1/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/sse_g1_pcyc.jsp)                 | `24867822bb496dc4debc8ac651ccc8c44480cc054a9e96ee1b970d944d3866df` |     50 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_pcyc.jsp)   | `e53014ded893ecfeb836ea0c56584181b1530f4fea2a550a9dde00fec0f01621` |     66 |
| CYC / compartido  | [m4custom/CYC/sse_g1/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/sse_g1_pcyc.jsp)                   | `24867822bb496dc4debc8ac651ccc8c44480cc054a9e96ee1b970d944d3866df` |     50 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_pcyc.jsp) | `a1128f9facad4b83264612de820075285277fc3a494315775cf1dc4dc3484f36` |     69 |
| IBER / compartido | [m4custom/IBER/sse_g1/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/sse_g1_pcyc.jsp)                 | `24867822bb496dc4debc8ac651ccc8c44480cc054a9e96ee1b970d944d3866df` |     50 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_pcyc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 36  | Certificado de Haberes   |
| 37  | Curriculum Web           |
| 44  | Mi Evaluación            |
| 45  | Hol@ Kiosco              |
| 46  | Hol@ validador           |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                       |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 18  | iframe  | id=iframeUpload; name=iframeUpload; style=display:none                                                                          |
| 19  | iframe  | id=iframeTempUpload; name=iframeTempUpload; style=display:none                                                                  |
| 35  | a       | class=enlacefuncional; title=Nómina; tabindex=2; href=/servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                         |
| 35  | img     | alt=; title=; src=/iconos/espanol/noname_recibo_57_100.gif                                                                      |
| 36  | a       | class=enlacefuncional; title=Certificado de Haberes; tabindex=1; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp |
| 36  | img     | alt=; title=; src=/iconos/espanol/noname_evalua_cursos_74_100.gif                                                               |
| 37  | a       | class=enlacefuncional; title=Curriculum Web; tabindex=4; href=javascript:cv();                                                  |
| 37  | img     | alt=; title=; src=/iconos/noname_eventos_mss_99_100.gif                                                                         |
| 44  | a       | class=enlacefuncional; title=Mi Evaluación; tabindex=4; href=[host externo]/; target=_blank                                     |
| 44  | img     | alt=; title=; src=/iconos/noname_evaluar_111_125.gif                                                                            |
| 45  | a       | class=enlacefuncional; title=Hol@ Kiosco; tabindex=3; href=[host externo]/SmartHL/eTouchKiosk/logon_keypad.aspx; target=_blank  |
| 45  | img     | alt=; title=; src=/iconos/espanol/noname_resultados_evaluacion_ess_100_100.gif                                                  |
| 46  | a       | class=enlacefuncional; title=Hol@ validador; tabindex=6; href=[host externo]/SmartHL/eHL/logon/logon.aspx; target=_blank        |
| 46  | img     | alt=; title=; src=/iconos/noname_competencias_mss_82_100.gif                                                                    |

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
| 61  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 56  | cv      |            |

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                             |
| --- | ----------------------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                                           |
| 35  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             |
| 35  | /iconos/espanol/noname_recibo_57_100.gif                                      |
| 36  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     |
| 36  | /iconos/espanol/noname_evalua_cursos_74_100.gif                               |
| 37  | javascript:cv();                                                              |
| 37  | /iconos/noname_eventos_mss_99_100.gif                                         |
| 44  | [host externo]/                                                               |
| 44  | /iconos/noname_evaluar_111_125.gif                                            |
| 45  | [host externo]/SmartHL/eTouchKiosk/logon_keypad.aspx                          |
| 45  | /iconos/espanol/noname_resultados_evaluacion_ess_100_100.gif                  |
| 46  | [host externo]/SmartHL/eHL/logon/logon.aspx                                   |
| 46  | /iconos/noname_competencias_mss_82_100.gif                                    |
| 57  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; |

## Versión 2: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/sse_g1_pcyc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                    |
| --- | ------------------------------------------- |
| 8   | Aplicaciones Internas                       |
| 33  | Acceso a Aplicaciones Internas              |
| 36  | Accede a tus aplicaciones internas Buscador |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                |
| --- | ------- | -------------------------------------------------------------------------------------------------------- |
| 27  | iframe  | id=iframeUpload; name=iframeUpload; style=display:none                                                   |
| 28  | iframe  | id=iframeTempUpload; name=iframeTempUpload; style=display:none                                           |
| 35  | img     | alt=Datos personales; title=Datos personales; src=/iconos/noname_mujer_53_100.gif; width=100; height=100 |
| 39  | a       | class=enlacefuncional; title=Dirección fiscal; tabindex=1; href=[host externo]                           |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                 | Resolución estática parcial       |
| --- | ------------ | -------------------------------- | --------------------------------- |
| 21  | sPathTempMap | m4Session.getPathTempMapping()   | m4Session.getPathTempMapping()    |
| 22  | sPathTempURI | m4Session.getUserTempURI() + '/' | {m4Session.getUserTempURI()}{'/'} |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 47  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                         |
| --- | -------------------------------------------------------------------------------------------- |
| 22  | expresión de cálculo/transformación: String sPathTempURI = m4Session.getUserTempURI() + '/'; |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 16  | ../../sse_generico/espanol/menu_ess.jsp            |
| 29  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 30  | ../../sse_generico/espanol/generico_links.jsp      |
| 45  | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 9   | /css/estilo_sse.css                                |
| 10  | /libreria/funciones_sse.js                         |
| 11  | /libreria/mootools.js                              |
| 12  | /libreria/functions_persdata.js                    |
| 13  | /libreria/meta4ajax.js                             |
| 14  | /libreria/functions_validate.js                    |
| 15  | /css/style_persdata.css                            |
| 17  | /library/openwin.js                                |
| 35  | /iconos/noname_mujer_53_100.gif                    |
| 39  | [host externo]                                     |
| 16  | ../../sse_generico/espanol/menu_ess.jsp            |
| 29  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 30  | ../../sse_generico/espanol/generico_links.jsp      |
| 45  | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Versión 3: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/sse_g1_pcyc.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_pcyc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta  |
| --- | ------------------------- |
| 36  | Certificado de Haberes    |
| 38  | Mis datos Quien es Quien? |
| 42  | Curriculum Web            |
| 43  | Mi Evaluación             |
| 44  | Hol@ Kiosco               |
| 45  | Hol@ validador            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                       |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 18  | iframe  | id=iframeUpload; name=iframeUpload; style=display:none                                                                          |
| 19  | iframe  | id=iframeTempUpload; name=iframeTempUpload; style=display:none                                                                  |
| 35  | a       | class=enlacefuncional; title=Nómina; tabindex=2; href=/servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                         |
| 35  | img     | alt=; title=; src=/iconos/espanol/noname_recibo_57_100.gif                                                                      |
| 36  | a       | class=enlacefuncional; title=Certificado de Haberes; tabindex=1; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp |
| 36  | img     | alt=; title=; src=/iconos/espanol/noname_evalua_cursos_74_100.gif                                                               |
| 38  | a       | class=enlacefuncional; title=Organigrama; tabindex=7; href=[host externo]/Personae/ ; target=_blank                             |
| 38  | img     | alt=; title=; src=/iconos/espanol/noname_organizacion_ess_115_100.gif                                                           |
| 42  | a       | class=enlacefuncional; title=Curriculum Web; tabindex=4; href=javascript:cv();; target=_blank                                   |
| 42  | img     | alt=; title=; src=/iconos/noname_eventos_mss_99_100.gif                                                                         |
| 43  | a       | class=enlacefuncional; title=Mi Evaluación; tabindex=4; href=[host externo]/; target=_blank                                     |
| 43  | img     | alt=; title=; src=/iconos/noname_evaluar_111_125.gif                                                                            |
| 44  | a       | class=enlacefuncional; title=Hol@ Kiosco; tabindex=3; href=[host externo]/SmartHL/eTouchKiosk/logon_keypad.aspx; target=_blank  |
| 44  | img     | alt=; title=; src=/iconos/espanol/noname_resultados_evaluacion_ess_100_100.gif                                                  |
| 45  | a       | class=enlacefuncional; title=Hol@ validador; tabindex=6; href=[host externo]/SmartHL/eHL/logon/logon.aspx; target=_blank        |
| 45  | img     | alt=; title=; src=/iconos/noname_competencias_mss_82_100.gif                                                                    |

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
| 35  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             |
| 35  | /iconos/espanol/noname_recibo_57_100.gif                                      |
| 36  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     |
| 36  | /iconos/espanol/noname_evalua_cursos_74_100.gif                               |
| 38  | [host externo]/Personae/                                                      |
| 38  | /iconos/espanol/noname_organizacion_ess_115_100.gif                           |
| 42  | javascript:cv();                                                              |
| 42  | /iconos/noname_eventos_mss_99_100.gif                                         |
| 43  | [host externo]/                                                               |
| 43  | /iconos/noname_evaluar_111_125.gif                                            |
| 44  | [host externo]/SmartHL/eTouchKiosk/logon_keypad.aspx                          |
| 44  | /iconos/espanol/noname_resultados_evaluacion_ess_100_100.gif                  |
| 45  | [host externo]/SmartHL/eHL/logon/logon.aspx                                   |
| 45  | /iconos/noname_competencias_mss_82_100.gif                                    |
| 54  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                    | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ----------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 35  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             | contextual | [sse_g2/ssco_g2_p12.jsp](../retribucion/sse_g2--ssco_g2_p12.md); [sse_g2/ssco_g2_p12.jsp](../retribucion/sse_g2--ssco_g2_p12.md)                                                                   |
| COLL   | 36  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     | ausente    | P06                                                                                                                                                                                                |
| COLL   | 37  | javascript:cv();                                                              | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 44  | [host externo]/                                                               | externa    | destino externo                                                                                                                                                                                    |
| COLL   | 45  | [host externo]/SmartHL/eTouchKiosk/logon_keypad.aspx                          | externa    | destino externo                                                                                                                                                                                    |
| COLL   | 46  | [host externo]/SmartHL/eHL/logon/logon.aspx                                   | externa    | destino externo                                                                                                                                                                                    |
| COLL   | 57  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; | ausente    | P06                                                                                                                                                                                                |
| COLL   | 16  | ../../sse_generico/espanol/menu_ess.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 29  | ../../sse_generico/espanol/generico_menusup.jsp                               | ausente    | P06                                                                                                                                                                                                |
| COLL   | 30  | ../../sse_generico/espanol/generico_links.jsp                                 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 45  | ../../sse_generico/espanol/generico_disclaimer.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 10  | /libreria/funciones_sse.js                                                    | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/mootools.js                                                         | contextual | &#96;m4custom/COLL/libreria/mootools.js&#96;; &#96;libreria/mootools.js&#96;                                                                                                                       |
| COLL   | 12  | /libreria/functions_persdata.js                                               | contextual | [libreria/functions_persdata.js](../../transversal/dependencias/libreria--functions_persdata.md); [libreria/functions_persdata.js](../../transversal/dependencias/libreria--functions_persdata.md) |
| COLL   | 13  | /libreria/meta4ajax.js                                                        | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md); [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                                     |
| COLL   | 14  | /libreria/functions_validate.js                                               | contextual | [libreria/functions_validate.js](../../transversal/dependencias/libreria--functions_validate.md); [libreria/functions_validate.js](../../transversal/dependencias/libreria--functions_validate.md) |
| COLL   | 17  | /library/openwin.js                                                           | contextual | [library/openwin.js](../../transversal/dependencias/library--openwin.md); [library/openwin.js](../../transversal/dependencias/library--openwin.md)                                                 |
| COLL   | 39  | [host externo]                                                                | externa    | destino externo                                                                                                                                                                                    |
| COLL   | 16  | ../../sse_generico/espanol/menu_ess.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 29  | ../../sse_generico/espanol/generico_menusup.jsp                               | ausente    | P06                                                                                                                                                                                                |
| COLL   | 30  | ../../sse_generico/espanol/generico_links.jsp                                 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 45  | ../../sse_generico/espanol/generico_disclaimer.jsp                            | ausente    | P06                                                                                                                                                                                                |
| CYC    | 35  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             | contextual | [sse_g2/ssco_g2_p12.jsp](../retribucion/sse_g2--ssco_g2_p12.md); [sse_g2/ssco_g2_p12.jsp](../retribucion/sse_g2--ssco_g2_p12.md)                                                                   |
| CYC    | 36  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     | ausente    | P06                                                                                                                                                                                                |
| CYC    | 38  | [host externo]/Personae/                                                      | externa    | destino externo                                                                                                                                                                                    |
| CYC    | 42  | javascript:cv();                                                              | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 43  | [host externo]/                                                               | externa    | destino externo                                                                                                                                                                                    |
| CYC    | 44  | [host externo]/SmartHL/eTouchKiosk/logon_keypad.aspx                          | externa    | destino externo                                                                                                                                                                                    |
| CYC    | 45  | [host externo]/SmartHL/eHL/logon/logon.aspx                                   | externa    | destino externo                                                                                                                                                                                    |
| CYC    | 54  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; | ausente    | P06                                                                                                                                                                                                |
| CYC    | 16  | ../../sse_generico/espanol/menu_ess.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 29  | ../../sse_generico/espanol/generico_menusup.jsp                               | ausente    | P06                                                                                                                                                                                                |
| CYC    | 30  | ../../sse_generico/espanol/generico_links.jsp                                 | ausente    | P06                                                                                                                                                                                                |
| CYC    | 45  | ../../sse_generico/espanol/generico_disclaimer.jsp                            | ausente    | P06                                                                                                                                                                                                |
| CYC    | 10  | /libreria/funciones_sse.js                                                    | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 11  | /libreria/mootools.js                                                         | contextual | &#96;libreria/mootools.js&#96;                                                                                                                                                                     |
| CYC    | 12  | /libreria/functions_persdata.js                                               | contextual | [libreria/functions_persdata.js](../../transversal/dependencias/libreria--functions_persdata.md)                                                                                                   |
| CYC    | 13  | /libreria/meta4ajax.js                                                        | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                                                                                                                     |
| CYC    | 14  | /libreria/functions_validate.js                                               | contextual | [libreria/functions_validate.js](../../transversal/dependencias/libreria--functions_validate.md)                                                                                                   |
| CYC    | 17  | /library/openwin.js                                                           | contextual | [library/openwin.js](../../transversal/dependencias/library--openwin.md); [library/openwin.js](../../transversal/dependencias/library--openwin.md)                                                 |
| CYC    | 39  | [host externo]                                                                | externa    | destino externo                                                                                                                                                                                    |
| CYC    | 16  | ../../sse_generico/espanol/menu_ess.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 29  | ../../sse_generico/espanol/generico_menusup.jsp                               | ausente    | P06                                                                                                                                                                                                |
| CYC    | 30  | ../../sse_generico/espanol/generico_links.jsp                                 | ausente    | P06                                                                                                                                                                                                |
| CYC    | 45  | ../../sse_generico/espanol/generico_disclaimer.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 35  | /servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp                             | contextual | [sse_g2/ssco_g2_p12.jsp](../retribucion/sse_g2--ssco_g2_p12.md); [sse_g2/ssco_g2_p12.jsp](../retribucion/sse_g2--ssco_g2_p12.md)                                                                   |
| IBER   | 36  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp                     | ausente    | P06                                                                                                                                                                                                |
| IBER   | 37  | javascript:cv();                                                              | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 44  | [host externo]/                                                               | externa    | destino externo                                                                                                                                                                                    |
| IBER   | 45  | [host externo]/SmartHL/eTouchKiosk/logon_keypad.aspx                          | externa    | destino externo                                                                                                                                                                                    |
| IBER   | 46  | [host externo]/SmartHL/eHL/logon/logon.aspx                                   | externa    | destino externo                                                                                                                                                                                    |
| IBER   | 57  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=&lt;%=matriculaEnc%&gt; | ausente    | P06                                                                                                                                                                                                |
| IBER   | 16  | ../../sse_generico/espanol/menu_ess.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 29  | ../../sse_generico/espanol/generico_menusup.jsp                               | ausente    | P06                                                                                                                                                                                                |
| IBER   | 30  | ../../sse_generico/espanol/generico_links.jsp                                 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 45  | ../../sse_generico/espanol/generico_disclaimer.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 10  | /libreria/funciones_sse.js                                                    | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/mootools.js                                                         | contextual | &#96;m4custom/IBER/libreria/mootools.js&#96;; &#96;libreria/mootools.js&#96;                                                                                                                       |
| IBER   | 12  | /libreria/functions_persdata.js                                               | contextual | [libreria/functions_persdata.js](../../transversal/dependencias/libreria--functions_persdata.md); [libreria/functions_persdata.js](../../transversal/dependencias/libreria--functions_persdata.md) |
| IBER   | 13  | /libreria/meta4ajax.js                                                        | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md); [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                                     |
| IBER   | 14  | /libreria/functions_validate.js                                               | contextual | [libreria/functions_validate.js](../../transversal/dependencias/libreria--functions_validate.md); [libreria/functions_validate.js](../../transversal/dependencias/libreria--functions_validate.md) |
| IBER   | 17  | /library/openwin.js                                                           | contextual | [library/openwin.js](../../transversal/dependencias/library--openwin.md); [library/openwin.js](../../transversal/dependencias/library--openwin.md)                                                 |
| IBER   | 39  | [host externo]                                                                | externa    | destino externo                                                                                                                                                                                    |
| IBER   | 16  | ../../sse_generico/espanol/menu_ess.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 29  | ../../sse_generico/espanol/generico_menusup.jsp                               | ausente    | P06                                                                                                                                                                                                |
| IBER   | 30  | ../../sse_generico/espanol/generico_links.jsp                                 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 45  | ../../sse_generico/espanol/generico_disclaimer.jsp                            | ausente    | P06                                                                                                                                                                                                |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_pcyc.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
