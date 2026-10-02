# shco_gen_calendar

Identificador: `shco_g0/shco_gen_calendar.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                   | Texto              | Ámbito | Diccionario                                                                                 |
| ----------------------- | ------------------ | ------ | ------------------------------------------------------------------------------------------- |
| Button.CalNextMonth     | Ir al próximo mes  | BASE   | [translations/shco_g0_es.properties:L16](../../referencias/literales/shco_g0_es.md)         |
| Button.CalNextYear      | Ir al próximo año  | BASE   | [translations/shco_g0_es.properties:L17](../../referencias/literales/shco_g0_es.md)         |
| Button.CalPreviousMonth | Ir al mes anterior | BASE   | [translations/shco_g0_es.properties:L18](../../referencias/literales/shco_g0_es.md)         |
| Button.CalPreviousYear  | Ir al año anterior | BASE   | [translations/shco_g0_es.properties:L19](../../referencias/literales/shco_g0_es.md)         |
| Button.Ok               | Aceptar            | COLL   | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok               | Aceptar            | CYC    | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok               | Aceptar            | IBER   | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok               | Aceptar            | BASE   | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok               | Aceptar            | BASE   | [translations/shco_g0_es.properties:L28](../../referencias/literales/shco_g0_es.md)         |
| Literal.CalToday        | Hoy                | BASE   | [translations/shco_g0_es.properties:L68](../../referencias/literales/shco_g0_es.md)         |
| Literal.CalWithoutDate  | Sin fecha          | BASE   | [translations/shco_g0_es.properties:L73](../../referencias/literales/shco_g0_es.md)         |
| Literal.CalenTitle      | Calendario         | BASE   | [translations/shco_g0_es.properties:L74](../../referencias/literales/shco_g0_es.md)         |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_calendar.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_calendar.jsp) | `9cc979a69ddc6679cb3640aed598d7fa7f9535f04468da262f5e6b5a902bb317` |     86 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_calendar.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_calendar.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                |
| --- | ------- | ------------------------------------------------------------------------ |
| 31  | form    | id=miform; name=miform; action=                                          |
| 31  | input   | type=hidden; id=fecha; name=fecha                                        |
| 77  | a       | tabindex=&lt;%=(zCalTab++)%&gt;; href=javascript:changeYear('menos');    |
| 77  | img     | alt=JSP_EXPR_Tran_shco_g0.getProperty(; file=../files_gif/ic_ret_beg.jsp |
| 78  | a       | tabindex=&lt;%=(zCalTab++)%&gt;; href=javascript:newCalendar('menos');   |
| 78  | img     | alt=JSP_EXPR_Tran_shco_g0.getProperty(; file=../files_gif/ic_ret.jsp     |
| 79  | a       | tabindex=&lt;%=(zCalTab++)%&gt;; href=javascript:adios(false);           |
| 79  | img     | file=../files_gif/ic_ace.jsp                                             |
| 80  | a       | tabindex=&lt;%=(zCalTab++)%&gt;; href=javascript:newCalendar('mas');     |
| 80  | img     | alt=JSP_EXPR_Tran_shco_g0.getProperty(; file=../files_gif/ic_ava.jsp     |
| 81  | a       | tabindex=&lt;%=(zCalTab++)%&gt;; href=javascript:changeYear('mas');      |
| 81  | img     | alt=JSP_EXPR_Tran_shco_g0.getProperty(; file=../files_gif/ic_ava_end.jsp |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable | Expresión fuente | Resolución estática parcial |
| --- | -------- | ---------------- | --------------------------- |
| 28  | zCalTab  | 1                | 1                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal |
| --- | ------------------------------------ |
| 13  | if (Tran_shco_g0 == null){           |
| 17  | if (Tran_shco_g0.isEmpty()){         |

### Includes, navegación y dependencias

| L   | Include                           |
| --- | --------------------------------- |
| 9   | shco_gen_taglib.jsp               |
| 9   | shco_gen_bag.jsp                  |
| 9   | shco_gen_css.jsp                  |
| 9   | shco_gen_js.jsp                   |
| 23  | ../shco_g0/shco_gen_cal_param.jsp |
| 77  | ../files_gif/ic_ret_beg.jsp       |
| 78  | ../files_gif/ic_ret.jsp           |
| 79  | ../files_gif/ic_ace.jsp           |
| 80  | ../files_gif/ic_ava.jsp           |
| 81  | ../files_gif/ic_ava_end.jsp       |

| L   | Destino / recurso                 |
| --- | --------------------------------- |
| 11  | /library/m4calendar.js            |
| 77  | javascript:changeYear(            |
| 78  | javascript:newCalendar(           |
| 79  | javascript:adios(false);          |
| 80  | javascript:newCalendar(           |
| 81  | javascript:changeYear(            |
| 9   | shco_gen_taglib.jsp               |
| 9   | shco_gen_bag.jsp                  |
| 9   | shco_gen_css.jsp                  |
| 9   | shco_gen_js.jsp                   |
| 23  | ../shco_g0/shco_gen_cal_param.jsp |
| 77  | ../files_gif/ic_ret_beg.jsp       |
| 78  | ../files_gif/ic_ret.jsp           |
| 79  | ../files_gif/ic_ace.jsp           |
| 80  | ../files_gif/ic_ava.jsp           |
| 81  | ../files_gif/ic_ava_end.jsp       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                        | Resolución | Ficha / candidato                                                |
| ------ | --- | --------------------------------- | ---------- | ---------------------------------------------------------------- |
| BASE   | 9   | shco_gen_taglib.jsp               | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)       |
| BASE   | 9   | shco_gen_bag.jsp                  | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)             |
| BASE   | 9   | shco_gen_css.jsp                  | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)             |
| BASE   | 9   | shco_gen_js.jsp                   | física     | [shco_g0/shco_gen_js.jsp](shco_g0--shco_gen_js.md)               |
| BASE   | 23  | ../shco_g0/shco_gen_cal_param.jsp | física     | [shco_g0/shco_gen_cal_param.jsp](shco_g0--shco_gen_cal_param.md) |
| BASE   | 77  | ../files_gif/ic_ret_beg.jsp       | física     | [files_gif/ic_ret_beg.jsp](files_gif--ic_ret_beg.md)             |
| BASE   | 78  | ../files_gif/ic_ret.jsp           | física     | [files_gif/ic_ret.jsp](files_gif--ic_ret.md)                     |
| BASE   | 79  | ../files_gif/ic_ace.jsp           | física     | [files_gif/ic_ace.jsp](files_gif--ic_ace.md)                     |
| BASE   | 80  | ../files_gif/ic_ava.jsp           | física     | [files_gif/ic_ava.jsp](files_gif--ic_ava.md)                     |
| BASE   | 81  | ../files_gif/ic_ava_end.jsp       | física     | [files_gif/ic_ava_end.jsp](files_gif--ic_ava_end.md)             |
| BASE   | 11  | /library/m4calendar.js            | contextual | [library/m4calendar.js](library--m4calendar.md)                  |
| BASE   | 77  | javascript:changeYear(            | dinámica   | P06                                                              |
| BASE   | 78  | javascript:newCalendar(           | dinámica   | P06                                                              |
| BASE   | 79  | javascript:adios(false);          | dinámica   | P06                                                              |
| BASE   | 80  | javascript:newCalendar(           | dinámica   | P06                                                              |
| BASE   | 81  | javascript:changeYear(            | dinámica   | P06                                                              |
| BASE   | 9   | shco_gen_taglib.jsp               | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)       |
| BASE   | 9   | shco_gen_bag.jsp                  | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)             |
| BASE   | 9   | shco_gen_css.jsp                  | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)             |
| BASE   | 9   | shco_gen_js.jsp                   | física     | [shco_g0/shco_gen_js.jsp](shco_g0--shco_gen_js.md)               |
| BASE   | 23  | ../shco_g0/shco_gen_cal_param.jsp | física     | [shco_g0/shco_gen_cal_param.jsp](shco_g0--shco_gen_cal_param.md) |
| BASE   | 77  | ../files_gif/ic_ret_beg.jsp       | física     | [files_gif/ic_ret_beg.jsp](files_gif--ic_ret_beg.md)             |
| BASE   | 78  | ../files_gif/ic_ret.jsp           | física     | [files_gif/ic_ret.jsp](files_gif--ic_ret.md)                     |
| BASE   | 79  | ../files_gif/ic_ace.jsp           | física     | [files_gif/ic_ace.jsp](files_gif--ic_ace.md)                     |
| BASE   | 80  | ../files_gif/ic_ava.jsp           | física     | [files_gif/ic_ava.jsp](files_gif--ic_ava.md)                     |
| BASE   | 81  | ../files_gif/ic_ava_end.jsp       | física     | [files_gif/ic_ava_end.jsp](files_gif--ic_ava_end.md)             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_calendar.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
