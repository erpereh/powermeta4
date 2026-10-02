# mss_g2_p7_help

Identificador: `mss_g2/mss_g2_p7_help.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p7_help.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p7_help.jsp) | `3fb71620113826280c58842b12e6189575a85385926549a8c165175b59761317` |    477 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p7_help.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p7_help.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                           |
| --- | -------------------------------------------------- |
| 86  | [valor dinámico] [valor dinámico] [valor dinámico] |
| 123 | [valor dinámico] [valor dinámico] [valor dinámico] |
| 127 | [valor dinámico] [valor dinámico]                  |
| 223 | [valor dinámico] [valor dinámico]                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 88  | img     | src=/iconos/icono_revision_individual_32_16.gif; width=36; height=16                                                                                                               |
| 92  | img     | src=/iconos/icono_revision_colectiva_32_16.gif; width=36; height=16                                                                                                                |
| 103 | img     | src=/iconos/advertencia_rojo.gif                                                                                                                                                   |
| 127 | img     | src=/iconos/advertencia_rojo.gif                                                                                                                                                   |
| 129 | img     | src=/iconos/ic_lis_36_36_2.gif; width=36; height=36                                                                                                                                |
| 133 | img     | src=/iconos/icono_siguiente_36_36.gif; width=36; height=36                                                                                                                         |
| 174 | img     | src=/iconos/ic_lis_36_36_2.gif; width=36; height=36                                                                                                                                |
| 178 | img     | src=/iconos/icono_siguiente_36_36.gif; width=36; height=36                                                                                                                         |
| 182 | img     | src=/iconos/user_2_next_32.gif; width=36; height=36                                                                                                                                |
| 186 | img     | src=/iconos/group_next_32.gif; width=36; height=36                                                                                                                                 |
| 305 | img     | src=/iconos/ic_lis_36_36_2.gif; width=36; height=36                                                                                                                                |
| 309 | img     | src=/iconos/icono_anterior_36_36.gif; width=36; height=36                                                                                                                          |
| 313 | img     | src=/iconos/icono_siguiente_36_36.gif; width=36; height=36                                                                                                                         |
| 317 | img     | src=/iconos/eliminar_usu.gif; width=36; height=36                                                                                                                                  |
| 321 | img     | src=/iconos/icono_actualizar_mss_36_36.gif; width=36; height=36                                                                                                                    |
| 352 | img     | src=/iconos/ic_lis_36_36_2.gif; width=36; height=36                                                                                                                                |
| 356 | img     | src=/iconos/icono_siguiente_36_36.gif; width=36; height=36                                                                                                                         |
| 414 | img     | src=/iconos/icono_crear_mss_36_36.gif; width=36; height=36                                                                                                                         |
| 427 | img     | src=/iconos/advertencia_rojo.gif                                                                                                                                                   |
| 451 | img     | src=/iconos/icono_hacia_excel_32_16.gif; width=36; height=16                                                                                                                       |
| 455 | img     | src=/iconos/icono_desde_excel_32_16.gif; width=36; height=16                                                                                                                       |
| 459 | img     | src=/iconos/ic_lis_36_36_2.gif; width=36; height=36                                                                                                                                |
| 472 | a       | href=javascript:window.close(); title=Cerrar                                                                                                                                       |
| 472 | img     | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal              |
| --- | --------------- | --------------------------- |
| 16  | COD             | getParameter(request,"COD") |

| L   | Variable | Expresión fuente                                                | Resolución estática parcial                                     |
| --- | -------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| 16  | help_cod | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"COD") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"COD") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal   |
| --- | -------------------------------------- |
| 28  | &lt;% if(help_cod.equals("1")) { %&gt; |
| 33  | if(help_cod.equals("2")) { %&gt;       |
| 38  | if(help_cod.equals("3")) { %&gt;       |
| 42  | if(help_cod.equals("4")) { %&gt;       |
| 46  | if(help_cod.equals("5")) { %&gt;       |
| 50  | if(help_cod.equals("6")) { %&gt;       |
| 55  | if(help_cod.equals("7")) { %&gt;       |
| 60  | if(help_cod.equals("8")) { %&gt;       |
| 78  | &lt;% if(help_cod.equals("1")) { %&gt; |
| 97  | if(help_cod.equals("2")) { %&gt;       |
| 140 | if(help_cod.equals("3")) { %&gt;       |
| 191 | if(help_cod.equals("4")) { %&gt;       |
| 325 | if(help_cod.equals("5")) { %&gt;       |
| 360 | if(help_cod.equals("6")) { %&gt;       |
| 396 | if(help_cod.equals("7")) { %&gt;       |
| 421 | if(help_cod.equals("8")) { %&gt;       |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 8   | ../../mss_generico/mss_cr_trans.jsp |

| L   | Destino / recurso                           |
| --- | ------------------------------------------- |
| 7   | /libreria/funciones_sse.js                  |
| 10  | /css/estilo_mss.css                         |
| 88  | /iconos/icono_revision_individual_32_16.gif |
| 92  | /iconos/icono_revision_colectiva_32_16.gif  |
| 103 | /iconos/advertencia_rojo.gif                |
| 127 | /iconos/advertencia_rojo.gif                |
| 129 | /iconos/ic_lis_36_36_2.gif                  |
| 133 | /iconos/icono_siguiente_36_36.gif           |
| 174 | /iconos/ic_lis_36_36_2.gif                  |
| 178 | /iconos/icono_siguiente_36_36.gif           |
| 182 | /iconos/user_2_next_32.gif                  |
| 186 | /iconos/group_next_32.gif                   |
| 305 | /iconos/ic_lis_36_36_2.gif                  |
| 309 | /iconos/icono_anterior_36_36.gif            |
| 313 | /iconos/icono_siguiente_36_36.gif           |
| 317 | /iconos/eliminar_usu.gif                    |
| 321 | /iconos/icono_actualizar_mss_36_36.gif      |
| 352 | /iconos/ic_lis_36_36_2.gif                  |
| 356 | /iconos/icono_siguiente_36_36.gif           |
| 414 | /iconos/icono_crear_mss_36_36.gif           |
| 427 | /iconos/advertencia_rojo.gif                |
| 451 | /iconos/icono_hacia_excel_32_16.gif         |
| 455 | /iconos/icono_desde_excel_32_16.gif         |
| 459 | /iconos/ic_lis_36_36_2.gif                  |
| 472 | javascript:window.close()                   |
| 472 | /iconos/entrar_blanco.gif                   |
| 8   | ../../mss_generico/mss_cr_trans.jsp         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                          | Resolución | Ficha / candidato                                                                      |
| ------ | --- | ----------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |
| BASE   | 7   | /libreria/funciones_sse.js          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 472 | javascript:window.close()           | dinámica   | P06                                                                                    |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p7_help.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
