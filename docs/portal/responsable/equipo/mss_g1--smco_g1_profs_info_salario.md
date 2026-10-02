# smco_g1_profs_info_salario

Identificador: `mss_g1/smco_g1_profs_info_salario.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave           | Texto                           | Ámbito | Diccionario                                                                                   |
| --------------- | ------------------------------- | ------ | --------------------------------------------------------------------------------------------- |
| prof_cv.Label20 | Historial Salarial del Empleado | BASE   | [translations/smco_prof_cv_es.properties:L28](../../referencias/literales/smco_prof_cv_es.md) |
| prof_cv.Title8  | Ocultar información             | BASE   | [translations/smco_prof_cv_es.properties:L56](../../referencias/literales/smco_prof_cv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/smco_g1_profs_info_salario.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/smco_g1_profs_info_salario.jsp) | `9b7ded6c4f86301a03fb986fe2e28d97ab23237b02952a1581557202b57a55f4` |     14 |
| COLL / compartido | [m4custom/COLL/mss_g1/smco_g1_profs_info_salario.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/smco_g1_profs_info_salario.jsp)                 | `15243001dcdf5761713a4c35768099e8db55529cf7f266be175593b5dc212010` |     14 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/smco_g1_profs_info_salario.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/smco_g1_profs_info_salario.jsp)   | `9b7ded6c4f86301a03fb986fe2e28d97ab23237b02952a1581557202b57a55f4` |     14 |
| CYC / compartido  | [m4custom/CYC/mss_g1/smco_g1_profs_info_salario.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/smco_g1_profs_info_salario.jsp)                   | `15243001dcdf5761713a4c35768099e8db55529cf7f266be175593b5dc212010` |     14 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/smco_g1_profs_info_salario.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/smco_g1_profs_info_salario.jsp) | `9b7ded6c4f86301a03fb986fe2e28d97ab23237b02952a1581557202b57a55f4` |     14 |
| IBER / compartido | [m4custom/IBER/mss_g1/smco_g1_profs_info_salario.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/smco_g1_profs_info_salario.jsp)                 | `15243001dcdf5761713a4c35768099e8db55529cf7f266be175593b5dc212010` |     14 |
| BASE / español    | [mss_g1/espanol/smco_g1_profs_info_salario.jsp](../../../../clon_portal/portal/mss_g1/espanol/smco_g1_profs_info_salario.jsp)                             | `9b7ded6c4f86301a03fb986fe2e28d97ab23237b02952a1581557202b57a55f4` |     14 |
| BASE / compartido | [mss_g1/smco_g1_profs_info_salario.jsp](../../../../clon_portal/portal/mss_g1/smco_g1_profs_info_salario.jsp)                                             | `15243001dcdf5761713a4c35768099e8db55529cf7f266be175593b5dc212010` |     14 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/smco_g1_profs_info_salario.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/smco_g1_profs_info_salario.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                 |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| 10  | a       | style=cursor:hand; onclick=javascript:uncheck('SMCO_SALARY_DATA');; title=&lt;%=ProfCv.getProperty("prof_cv.Title8")%&gt; |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                                                                | Resolución estática parcial                                                                                       |
| --- | ------------ | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 5   | ijsLang      | zsessionmanager_bag.getLanguageID()                                             | zsessionmanager_bag.getLanguageID()                                                                               |
| 6   | zLangFolder  | CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL)                                   |
| 7   | page_to_send | "../../sse_g2/" + zLangFolder + "/sse_g2_p10.jsp"                               | ../../sse_g2/{}CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL){"/sse_g2_p10.jsp"} |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | &lt;div class="invisible2" id="SMCO_SALARY_DATA" name="SMCO_SALARY_DATA" style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};"&gt; |
| 7   | expresión de cálculo/transformación: String page_to_send = "../../sse_g2/" + zLangFolder + "/sse_g2_p10.jsp";                                                                                                                                                                                                                                                 |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 1   | ../../mss_g1/smco_prof_cv_trans.jsp |
| 12  | &lt;%=page_to_send%&gt;             |

| L   | Destino / recurso                   |
| --- | ----------------------------------- |
| 1   | ../../mss_g1/smco_prof_cv_trans.jsp |
| 7   | /sse_g2_p10.jsp                     |

## Versión 2: COLL compartida, CYC compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/smco_g1_profs_info_salario.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/smco_g1_profs_info_salario.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                           |
| --- | ------- | --------------------------------------------------------------------------------------------------- |
| 10  | a       | href=javascript:uncheck('SMCO_SALARY_DATA');; title=&lt;%=ProfCv.getProperty("prof_cv.Title8")%&gt; |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                                                                | Resolución estática parcial                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 5   | ijsLang      | zsessionmanager_bag.getLanguageID()                                             | zsessionmanager_bag.getLanguageID()                                                                          |
| 6   | zLangFolder  | CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL)                              |
| 7   | page_to_send | "/sse_g2/" + zLangFolder + "/sse_g2_p10.jsp"                                    | /sse_g2/{}CheckConfig.checkFolderLanguage(new Long(ijsLang).intValue(), CheckConfig.THCL){"/sse_g2_p10.jsp"} |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | &lt;div class="invisible2" id="SMCO_SALARY_DATA" name="SMCO_SALARY_DATA" style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};"&gt; |
| 7   | expresión de cálculo/transformación: String page_to_send = "/sse_g2/" + zLangFolder + "/sse_g2_p10.jsp";                                                                                                                                                                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                          |
| --- | -------------------------------- |
| 1   | ../mss_g1/smco_prof_cv_trans.jsp |
| 12  | &lt;%=page_to_send%&gt;          |

| L   | Destino / recurso                |
| --- | -------------------------------- |
| 10  | javascript:uncheck(              |
| 1   | ../mss_g1/smco_prof_cv_trans.jsp |
| 7   | /sse_g2_p10.jsp                  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                          | Resolución | Ficha / candidato                                              |
| ------ | --- | ----------------------------------- | ---------- | -------------------------------------------------------------- |
| COLL   | 1   | ../../mss_g1/smco_prof_cv_trans.jsp | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| COLL   | 12  | &lt;%=page_to_send%&gt;             | dinámica   | P06                                                            |
| COLL   | 1   | ../../mss_g1/smco_prof_cv_trans.jsp | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| COLL   | 7   | /sse_g2_p10.jsp                     | ausente    | P06                                                            |
| COLL   | 1   | ../mss_g1/smco_prof_cv_trans.jsp    | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| COLL   | 12  | &lt;%=page_to_send%&gt;             | dinámica   | P06                                                            |
| COLL   | 10  | javascript:uncheck(                 | dinámica   | P06                                                            |
| COLL   | 1   | ../mss_g1/smco_prof_cv_trans.jsp    | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| COLL   | 7   | /sse_g2_p10.jsp                     | ausente    | P06                                                            |
| CYC    | 1   | ../../mss_g1/smco_prof_cv_trans.jsp | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| CYC    | 12  | &lt;%=page_to_send%&gt;             | dinámica   | P06                                                            |
| CYC    | 1   | ../../mss_g1/smco_prof_cv_trans.jsp | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| CYC    | 7   | /sse_g2_p10.jsp                     | ausente    | P06                                                            |
| CYC    | 1   | ../mss_g1/smco_prof_cv_trans.jsp    | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| CYC    | 12  | &lt;%=page_to_send%&gt;             | dinámica   | P06                                                            |
| CYC    | 10  | javascript:uncheck(                 | dinámica   | P06                                                            |
| CYC    | 1   | ../mss_g1/smco_prof_cv_trans.jsp    | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| CYC    | 7   | /sse_g2_p10.jsp                     | ausente    | P06                                                            |
| IBER   | 1   | ../../mss_g1/smco_prof_cv_trans.jsp | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| IBER   | 12  | &lt;%=page_to_send%&gt;             | dinámica   | P06                                                            |
| IBER   | 1   | ../../mss_g1/smco_prof_cv_trans.jsp | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| IBER   | 7   | /sse_g2_p10.jsp                     | ausente    | P06                                                            |
| IBER   | 1   | ../mss_g1/smco_prof_cv_trans.jsp    | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| IBER   | 12  | &lt;%=page_to_send%&gt;             | dinámica   | P06                                                            |
| IBER   | 10  | javascript:uncheck(                 | dinámica   | P06                                                            |
| IBER   | 1   | ../mss_g1/smco_prof_cv_trans.jsp    | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| IBER   | 7   | /sse_g2_p10.jsp                     | ausente    | P06                                                            |
| BASE   | 1   | ../../mss_g1/smco_prof_cv_trans.jsp | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| BASE   | 12  | &lt;%=page_to_send%&gt;             | dinámica   | P06                                                            |
| BASE   | 1   | ../../mss_g1/smco_prof_cv_trans.jsp | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| BASE   | 7   | /sse_g2_p10.jsp                     | ausente    | P06                                                            |
| BASE   | 1   | ../mss_g1/smco_prof_cv_trans.jsp    | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| BASE   | 12  | &lt;%=page_to_send%&gt;             | dinámica   | P06                                                            |
| BASE   | 10  | javascript:uncheck(                 | dinámica   | P06                                                            |
| BASE   | 1   | ../mss_g1/smco_prof_cv_trans.jsp    | física     | [mss_g1/smco_prof_cv_trans.jsp](mss_g1--smco_prof_cv_trans.md) |
| BASE   | 7   | /sse_g2_p10.jsp                     | ausente    | P06                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/smco_g1_profs_info_salario.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
