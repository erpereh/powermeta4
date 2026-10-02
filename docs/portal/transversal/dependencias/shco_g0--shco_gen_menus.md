# shco_gen_menus

Identificador: `shco_g0/shco_gen_menus.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_menus.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_menus.jsp) | `c624d4c49aa4362a5851e103aedd15d9a0fc5b3c718cf9e2f3cec29483a0a252` |     46 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_menus.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_menus.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal            |
| --- | --------------- | ------------------------- |
| 21  | lang            | getBagEntries("lang")     |
| 23  | SHCO_CSS        | getBagEntries("SHCO_CSS") |

| L   | Variable          | Expresión fuente                          | Resolución estática parcial               |
| --- | ----------------- | ----------------------------------------- | ----------------------------------------- |
| 18  | zbarbot           | "1111"                                    | 1111                                      |
| 19  | zTranslationsPath | "/translations/"                          | /translations/                            |
| 21  | zlanguser         | zsesion.getBagEntries("lang")             | zsesion.getBagEntries("lang")             |
| 23  | zcssuser          | zsesion.getBagEntries("SHCO_CSS")         | zsesion.getBagEntries("SHCO_CSS")         |
| 26  | zusertempuri      | zsessionmanager.getUserTempURI()          | zsessionmanager.getUserTempURI()          |
| 28  | zcarril           | (String)request.getAttribute("TRACK")     | (String)request.getAttribute("TRACK")     |
| 31  | znivelmenu        | (String)request.getAttribute("MENULEVEL") | (String)request.getAttribute("MENULEVEL") |
| 33  | zNavrc            | (String)request.getAttribute("NAV_RC")    | (String)request.getAttribute("NAV_RC")    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                          |
| --- | ----------------------------------------------------------------------------- |
| 22  | if ((zlanguser==null)&#124;&#124;(zlanguser.equals(""))){zlanguser = "en";}   |
| 24  | if ((zcssuser==null)&#124;&#124;(zcssuser.equals(""))){zcssuser = "1";}       |
| 29  | if ((zcarril==null)&#124;&#124;(zcarril.equals(""))){zcarril = "";}           |
| 32  | if ((znivelmenu==null)&#124;&#124;(znivelmenu.equals(""))){znivelmenu = "1";} |
| 34  | if ((zNavrc==null)&#124;&#124;(zNavrc.equals(""))){zNavrc ="0";}              |
| 40  | &lt;%if (!(zusertempuri.equals(""))){                                         |
| 41  | if (request.getAttribute("menus_Loaded")== null){                             |

### Includes, navegación y dependencias

| L   | Include              |
| --- | -------------------- |
| 45  | shco_gen_topmenu.jsp |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 39  | /library/m4menu.js                                         |
| 43  | &lt;%=zusertempuri%&gt;/shco_menu_&lt;%=znivelmenu%&gt;.js |
| 38  | shco_gen_css.jsp                                           |
| 45  | shco_gen_topmenu.jsp                                       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                 | Resolución | Ficha / candidato                                            |
| ------ | --- | ---------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| BASE   | 45  | shco_gen_topmenu.jsp                                       | física     | [shco_g0/shco_gen_topmenu.jsp](shco_g0--shco_gen_topmenu.md) |
| BASE   | 39  | /library/m4menu.js                                         | contextual | [library/m4menu.js](library--m4menu.md)                      |
| BASE   | 43  | &lt;%=zusertempuri%&gt;/shco_menu_&lt;%=znivelmenu%&gt;.js | dinámica   | P06                                                          |
| BASE   | 38  | shco_gen_css.jsp                                           | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)         |
| BASE   | 45  | shco_gen_topmenu.jsp                                       | física     | [shco_g0/shco_gen_topmenu.jsp](shco_g0--shco_gen_topmenu.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_menus.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
