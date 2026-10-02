# mobile_version

Identificador: `mobile/mobile_version.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/mobile_version.jsp](../../../../clon_portal/portal/mobile/mobile_version.jsp) | `5b8600b1a89c0c64305edb34711409abb0c14476b95ff9ae85dfd0b02ea9491b` |    115 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/mobile_version.jsp](../../../../clon_portal/portal/mobile/mobile_version.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable         | Expresión fuente                                                | Resolución estática parcial                                     |
| --- | ---------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| 34  | slang            | String.valueOf(M4WebLanguages.getLanguageFromCookie(request))   | String.valueOf(M4WebLanguages.getLanguageFromCookie(request))   |
| 35  | json             | getMobileVersion(slang)                                         | getMobileVersion(slang)                                         |
| 45  | iReturn          | -1                                                              | -1                                                              |
| 46  | json             | ""                                                              |                                                                 |
| 53  | sM4Obj           | "SAV_PARAMS"                                                    | SAV_PARAMS                                                      |
| 54  | sNode            | "SAV_PARAMS"                                                    | SAV_PARAMS                                                      |
| 55  | sMethod          | "RET_VALUE"                                                     | RET_VALUE                                                       |
| 56  | sFinalReturnNode | "FINAL_RETURN"                                                  | FINAL_RETURN                                                    |
| 61  | preserve         | false                                                           | false                                                           |
| 62  | find             | false                                                           | false                                                           |
| 78  | value            | ""                                                              |                                                                 |
| 80  | iCountRoot       | m.getCountInClient(sNode, sM4Obj, sNode)                        | m.getCountInClient(sNode, sM4Obj, sNode)                        |
| 81  | iCount           | m.getCountInClient(sFinalReturnNode , sM4Obj, sFinalReturnNode) | m.getCountInClient(sFinalReturnNode , sM4Obj, sFinalReturnNode) |
| 84  | i                | 0                                                               | 0                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación        | Argumentos literales                                                         |
| --- | ---------------- | ---------------------------------------------------------------------------- |
| 80  | getCountInClient | sNode, sM4Obj, sNode                                                         |
| 81  | getCountInClient | sFinalReturnNode , sM4Obj, sFinalReturnNode                                  |
| 86  | getItem          | sFinalReturnNode , sM4Obj, sFinalReturnNode , String.valueOf(i), "ID_KEY"    |
| 87  | getItem          | sFinalReturnNode , sM4Obj, sFinalReturnNode , String.valueOf(i), "APP_VALUE" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                          |
| --- | --------------------------------------------------------------------------------------------- |
| 82  | if (iCount &gt; 0)                                                                            |
| 88  | if (!key.equals("FIREBASE_SERVER_KEY") &amp;&amp; !key.equals("NOTIFICATION_CERT_PASS_IOS") ) |
| 102 | if (m4session != null)                                                                        |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso |
| --- | ----------------- |
| 44  | com.meta4.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia    | Resolución | Ficha / candidato |
| ------ | --- | ------------- | ---------- | ----------------- |
| BASE   | 44  | com.meta4.jsp | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mobile/mobile_version.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
