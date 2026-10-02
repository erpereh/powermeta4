# smco_pag

Identificador: `mss_generico/smco_pag.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave            | Texto           | Ámbito | Diccionario                                                                                  |
| ---------------- | --------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.ssco_odata | Ver otros datos | COLL   | [translations/ess_mss_gen_es.properties:L195](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_odata | Ver otros datos | CYC    | [translations/ess_mss_gen_es.properties:L195](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_odata | Ver otros datos | IBER   | [translations/ess_mss_gen_es.properties:L195](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_odata | Ver otros datos | BASE   | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/mss_generico/smco_pag.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/smco_pag.jsp) | `e10aa2ce480149b3d30f3176f41c5ff5d5ef5a8443120f78300d51e823946282` |     45 |
| IBER / compartido | [m4custom/IBER/mss_generico/smco_pag.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/smco_pag.jsp) | `e10aa2ce480149b3d30f3176f41c5ff5d5ef5a8443120f78300d51e823946282` |     45 |
| BASE / compartido | [mss_generico/smco_pag.jsp](../../../../clon_portal/portal/mss_generico/smco_pag.jsp)                             | `e10aa2ce480149b3d30f3176f41c5ff5d5ef5a8443120f78300d51e823946282` |     45 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/smco_pag.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/smco_pag.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta            |
| --- | ----------------------------------- |
| 30  | [valor dinámico] - [valor dinámico] |
| 35  | [valor dinámico] - [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                            |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 36  | a       | href=javascript:m4valor('oculto','zinicios',&lt;%=ziniciointervalo%&gt;,'set');m4submit('oculto');; title=JSP_EXPR_Tran.getProperty( |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable         | Expresión fuente                              | Resolución estática parcial                    |
| --- | ---------------- | --------------------------------------------- | ---------------------------------------------- |
| 4   | zintervalo       | zcount/zventana                               | zcount/zventana                                |
| 5   | zresto           | zcount%zventana                               | zcount%zventana                                |
| 6   | zcontador        | 0                                             | 0                                              |
| 7   | zsalto           | 0                                             | 0                                              |
| 14  | ziniciointervalo | String.valueOf(1 + zcontador*zventana)        | {String.valueOf(1}{zcontador*zventana)}        |
| 15  | zfinintervalo2   | zcontador*zventana + zventana                 | {zcontador*zventana}{zventana}                 |
| 16  | zfinintervalo    | String.valueOf(zcontador*zventana + zventana) | {String.valueOf(zcontador*zventana}{zventana)} |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                       |
| --- | ---------------------------------------------------------------------------------------------------------- |
| 8   | if (zresto &gt; 0) {zintervalo = zintervalo + 1;}                                                          |
| 17  | if (zfinintervalo2 &gt; zcount) {                                                                          |
| 22  | if(zsalto == zvuelta){                                                                                     |
| 28  | if (zinicios.equals(ziniciointervalo) == true){                                                            |
| 33  | else{                                                                                                      |
| 14  | expresión de cálculo/transformación: String ziniciointervalo = String.valueOf(1 + zcontador*zventana);     |
| 15  | expresión de cálculo/transformación: int zfinintervalo2 = zcontador*zventana + zventana;                   |
| 16  | expresión de cálculo/transformación: String zfinintervalo = String.valueOf(zcontador*zventana + zventana); |
| 18  | expresión de cálculo/transformación: zfinintervalo = String.valueOf(zcontador*zventana + zresto);          |
| 41  | expresión de cálculo/transformación: zsalto = zsalto + 1;                                                  |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso   |
| --- | ------------------- |
| 36  | javascript:m4valor( |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia          | Resolución | Ficha / candidato |
| ------ | --- | ------------------- | ---------- | ----------------- |
| COLL   | 36  | javascript:m4valor( | dinámica   | P06               |
| IBER   | 36  | javascript:m4valor( | dinámica   | P06               |
| BASE   | 36  | javascript:m4valor( | dinámica   | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/smco_pag.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
