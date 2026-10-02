# Certificado

Identificador: `sse_g3/sse_g3_p21_certificado.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/sse_g3/espanol/sse_g3_p21_certificado.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p21_certificado.jsp) | `a41de5332b0907b0ba5528014d4c9d9d93086a85a5ed674163d85afd874ccd5c` |     57 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g3/espanol/sse_g3_p21_certificado.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p21_certificado.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 10  | Certificado              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------- |
| 50  | iframe  | id=Local; scrolling=yes; frameborder=0; vspace=0; hspace=0; width=100%; height=800 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 18  | zIdPerson       | getBagEntries("zIdPerson") |
| 19  | tr              | getParameter(request,"tr") |

| L   | Variable      | Expresión fuente                                                  | Resolución estática parcial                                     |
| --- | ------------- | ----------------------------------------------------------------- | --------------------------------------------------------------- |
| 18  | idEmpleado    | zsesionDA.getBagEntries("zIdPerson")                              | zsesionDA.getBagEntries("zIdPerson")                            |
| 19  | idSesion      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tr")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tr")  |
| 20  | zmetodocarga  | "CSP_MNG_DIPLOMAS_PORTAL!CSP_NODO_RAIZ_PORTAL.CSP_ASIGNA_VALORES" | CSP_MNG_DIPLOMAS_PORTAL!CSP_NODO_RAIZ_PORTAL.CSP_ASIGNA_VALORES |
| 21  | zoutputdef    | "CSP_MNG_DIPLOMAS_PORTAL!CSP_SESION_PORTAL[0]"                    | CSP_MNG_DIPLOMAS_PORTAL!CSP_SESION_PORTAL[0]                    |
| 22  | stSysSentence | "CSP_MNG_DIPLOMAS_PORTAL                                          | {"CSP_MNG_DIPLOMAS_PORTAL}                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag              | Contrato declarado                                                                    |
| --- | ---------------- | ------------------------------------------------------------------------------------- |
| 26  | m4:startpage     | m4task=CSP_MNG_DIPLOMAS_PORTAL                                                        |
| 27  | m4:beginjob      |                                                                                       |
| 28  | m4:datadef       | m4o=CSP_MNG_DIPLOMAS_PORTAL; m4name=CSP_MNG_DIPLOMAS_PORTAL                           |
| 30  | m4:exec          | m4method=CSP_MNG_DIPLOMAS_PORTAL!CSP_NODO_RAIZ_PORTAL.CSP_ASIGNA_VALORES              |
| 31  | m4:param         | name=ARG_SESION; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tr") |
| 32  | m4:param         | name=ARG_PERSONA; value=zsesionDA.getBagEntries("zIdPerson")                          |
| 33  | m4:param         | name=ARG_SOCIEDAD; value=CYC                                                          |
| 35  | m4:outputdef     | m4alias=CSP_SESION_PORTAL                                                             |
| 35  | m4:param         | name=m4name0; value=CSP_MNG_DIPLOMAS_PORTAL!CSP_SESION_PORTAL[0]                      |
| 36  | m4:endjob        |                                                                                       |
| 41  | m4:executereport | idreport=CSP_CERTIFICADO_FORMACION; syssentence=xxxx; outputtype=PDF; otherparams=#   |
| 55  | m4:endpage       |                                                                                       |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 39  | frame   | iframeOBj  |

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso       |
| --- | ----------------------- |
| 12  | /css/estilo_sse.css     |
| 13  | /css/style_persdata.css |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p21_certificado.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
