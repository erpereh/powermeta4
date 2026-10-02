# _change_password

Identificador: `sse_g0/_change_password.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/_change_password.jsp](../../../../clon_portal/portal/sse_g0/espanol/_change_password.jsp) | `d260fa4cba7a44e2322204029d6be123a317259ee302eb1471dd54fc320be2c1` |     94 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/_change_password.jsp](../../../../clon_portal/portal/sse_g0/espanol/_change_password.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave  | Acceso literal                           |
| --- | ---------------- | ---------------------------------------- |
| 32  | M4_OPCODE        | getParameter(request,"M4_OPCODE")        |
| 41  | M4_ERROR_MESSAGE | getParameter(request,"M4_ERROR_MESSAGE") |

| L   | Variable              | Expresión fuente                                                                    | Resolución estática parcial                                                         |
| --- | --------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 25  | sNewRequestParameters | ""                                                                                  |                                                                                     |
| 32  | ai_sOpCode            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"M4_OPCODE")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"M4_OPCODE")               |
| 40  | sErrorMessage         | null                                                                                | null                                                                                |
| 81  | sM4RootFolder         | M4ConfigClient.getElement(M4VarConfigClient.M4_CFG_THINCLIENT_ROOT_TC)              | M4ConfigClient.getElement(M4VarConfigClient.M4_CFG_THINCLIENT_ROOT_TC)              |
| 82  | sLanguageFolder       | CheckConfig.checkFolderLanguage(new Long(iLanguageId).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(iLanguageId).intValue(), CheckConfig.THCL) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                            |
| --- | ------------------------------------------------------------------------------------------------------------------------------- |
| 33  | if ((ai_sOpCode == null) &#124;&#124; ai_sOpCode.equals(""))                                                                    |
| 44  | if ((sErrorMessage == null &#124;&#124; sErrorMessage.equals("")) &amp;&amp; (ai_sOpCode.equals("PASSWORD_EXPIRED")))           |
| 67  | if (sErrorMessage != null)                                                                                                      |
| 69  | if (sErrorMessage.equals("ERROR_EXCEPTION_GETTING_USER_SESSION"))                                                               |
| 73  | else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD"))                                                                         |
| 84  | if ((sM4RootFolder != null) &amp;&amp; !sM4RootFolder.equals(""))                                                               |
| 83  | expresión de cálculo/transformación: String sChangePasswordPage = "/sse_g0/" + sLanguageFolder + "/change_password_action.jsp"; |
| 86  | expresión de cálculo/transformación: sChangePasswordPage = "/" + sM4RootFolder + sChangePasswordPage;                           |
| 91  | expresión de cálculo/transformación: String sChangePasswordUrl = sChangePasswordPage + sNewRequestParameters;                   |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso           |
| --- | --------------------------- |
| 22  | com.meta4.jsp               |
| 83  | /change_password_action.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                  | Resolución | Ficha / candidato |
| ------ | --- | --------------------------- | ---------- | ----------------- |
| BASE   | 22  | com.meta4.jsp               | ausente    | P06               |
| BASE   | 83  | /change_password_action.jsp | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/_change_password.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
