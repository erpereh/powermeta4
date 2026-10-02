# shco_gen_p_wz_error

Identificador: `shco_g0/shco_gen_p_wz_error.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_p_wz_error.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_p_wz_error.jsp) | `4ab581f439b80b05117b27fa74427e067f919d9608ea9db9864389785b6acc59` |     63 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_p_wz_error.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_p_wz_error.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                 |
| --- | ---------------------------------------- |
| 47  | " /&gt; " /&gt; " /&gt; [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                      |
| --- | ------- | -------------------------------------------------------------------------------------------------------------- |
| 34  | form    | action= ; method=post; name=NombreFormulario2; id=NombreFormulario2                                            |
| 48  | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                        |
| 51  | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                        |
| 54  | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                        |
| 61  | input   | id=Back; name=back; tabindex=1; type=button; class=boton; onclick=history.back();; value=&lt;%=sLabelBack%&gt; |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 13  | zDynFilter      | getParameter("zDynFilter") |

| L   | Variable   | Expresión fuente                   | Resolución estática parcial        |
| --- | ---------- | ---------------------------------- | ---------------------------------- |
| 10  | zerror2    | ""                                 |                                    |
| 11  | zshco_TEXT | ""                                 |                                    |
| 12  | sLabelBack | ""                                 |                                    |
| 13  | zDynFilter | request.getParameter("zDynFilter") | request.getParameter("zDynFilter") |
| 38  | zLitErr    | ""                                 |                                    |
| 39  | zTipErr    | ""                                 |                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación | Argumentos literales                                |
| --- | --------- | --------------------------------------------------- |
| 17  | getItem   | znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG2" |
| 18  | getItem   | znodocom,zm4object,znodocom,"","SHCO_TEXT"          |
| 28  | setItem   | zm4object, znodocom, "0", "SHCO_ACTIVE_DEBUG2", "0" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                        |
| --- | --------------------------------------------------------------------------- |
| 14  | if (zDynFilter == null &#124;&#124; zDynFilter.equals("")){zDynFilter="0";} |
| 21  | if (zerror2.equals("1")) {                                                  |
| 42  | if (stE.hasMoreTokens()==true){zTipErr=stE.nextToken();}                    |
| 43  | if (stE.hasMoreTokens()==true){zLitErr=stE.nextToken();}                    |
| 46  | &lt;%if (zTipErr.equals("-1")){%&gt;                                        |
| 49  | &lt;%}else if (zTipErr.equals("1")){%&gt;                                   |
| 52  | &lt;%}else{%&gt;                                                            |
| 63  | &lt;%}else{%&gt;                                                            |

### Includes, navegación y dependencias

| L   | Include                    |
| --- | -------------------------- |
| 48  | ../files_gif/ic_err.jsp    |
| 51  | ../files_gif/ic_warnig.jsp |
| 54  | ../files_gif/ic_info.jsp   |

| L   | Destino / recurso          |
| --- | -------------------------- |
| 34  |                            |
| 48  | ../files_gif/ic_err.jsp    |
| 51  | ../files_gif/ic_warnig.jsp |
| 54  | ../files_gif/ic_info.jsp   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                 | Resolución | Ficha / candidato                                  |
| ------ | --- | -------------------------- | ---------- | -------------------------------------------------- |
| BASE   | 48  | ../files_gif/ic_err.jsp    | física     | [files_gif/ic_err.jsp](files_gif--ic_err.md)       |
| BASE   | 51  | ../files_gif/ic_warnig.jsp | física     | [files_gif/ic_warnig.jsp](files_gif--ic_warnig.md) |
| BASE   | 54  | ../files_gif/ic_info.jsp   | física     | [files_gif/ic_info.jsp](files_gif--ic_info.md)     |
| BASE   | 48  | ../files_gif/ic_err.jsp    | física     | [files_gif/ic_err.jsp](files_gif--ic_err.md)       |
| BASE   | 51  | ../files_gif/ic_warnig.jsp | física     | [files_gif/ic_warnig.jsp](files_gif--ic_warnig.md) |
| BASE   | 54  | ../files_gif/ic_info.jsp   | física     | [files_gif/ic_info.jsp](files_gif--ic_info.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_p_wz_error.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
