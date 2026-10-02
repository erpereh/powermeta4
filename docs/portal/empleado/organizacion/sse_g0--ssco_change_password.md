# Cambio de contraseña

Identificador: `sse_g0/ssco_change_password.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_change_password.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_change_password.jsp) | `056a3737c25dc7a0dcc1676f73a25e8b4849ef6ba939cb511e53875fa6816daa` |     50 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_change_password.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_change_password.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 29  | Cambio de contraseña     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 34  | estado          | getParameter(request,"estado")   |
| 35  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | -------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 34  | estado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 35  | zinicios | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") |
| 45  | zUrlPage | "/sse_g0/ssco_change_password.jsp"                                   | /sse_g0/ssco_change_password.jsp                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                    |
| --- | ----------------------------------------------------------------------- |
| 36  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}         |
| 37  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";} |

### Includes, navegación y dependencias

| L   | Include                                         |
| --- | ----------------------------------------------- |
| 31  | ../../sse_generico/espanol/menu_ess.jsp         |
| 42  | ../../sse_generico/espanol/generico_menusup.jsp |
| 43  | ../../sse_generico/espanol/generico_links.jsp   |
| 46  | /tctools/_change_password_include.jsp           |

| L   | Destino / recurso                               |
| --- | ----------------------------------------------- |
| 30  | /css/estilo_sse.css                             |
| 32  | /libreria/funciones_sse.js                      |
| 31  | ../../sse_generico/espanol/menu_ess.jsp         |
| 42  | ../../sse_generico/espanol/generico_menusup.jsp |
| 43  | ../../sse_generico/espanol/generico_links.jsp   |
| 45  | /sse_g0/ssco_change_password.jsp                |
| 46  | /tctools/_change_password_include.jsp           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                      | Resolución | Ficha / candidato                                                                                          |
| ------ | --- | ----------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| BASE   | 31  | ../../sse_generico/espanol/menu_ess.jsp         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                        |
| BASE   | 42  | ../../sse_generico/espanol/generico_menusup.jsp | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)        |
| BASE   | 43  | ../../sse_generico/espanol/generico_links.jsp   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)            |
| BASE   | 46  | /tctools/_change_password_include.jsp           | contextual | [tctools/_change_password_include.jsp](../../transversal/componentes/tctools--_change_password_include.md) |
| BASE   | 32  | /libreria/funciones_sse.js                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| BASE   | 31  | ../../sse_generico/espanol/menu_ess.jsp         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                        |
| BASE   | 42  | ../../sse_generico/espanol/generico_menusup.jsp | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)        |
| BASE   | 43  | ../../sse_generico/espanol/generico_links.jsp   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)            |
| BASE   | 45  | /sse_g0/ssco_change_password.jsp                | ausente    | P06                                                                                                        |
| BASE   | 46  | /tctools/_change_password_include.jsp           | contextual | [tctools/_change_password_include.jsp](../../transversal/componentes/tctools--_change_password_include.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_change_password.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
