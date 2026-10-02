# Gráficos

Identificador: `mss_g3/prueba_cuerpo.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/prueba_cuerpo.jsp](../../../../clon_portal/portal/mss_g3/espanol/prueba_cuerpo.jsp) | `35d1de8fed0358e54b14fed131dd248f797dee398a4fc88db4b77fa56eb4f0cb` |    111 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/prueba_cuerpo.jsp](../../../../clon_portal/portal/mss_g3/espanol/prueba_cuerpo.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta  |
| --- | ------------------------- |
| 7   | Gráficos                  |
| 54  | Gráfico                   |
| 57  | Gráfico. Dirección fiscal |
| 100 | $M4ITEM0$                 |
| 101 | $M4ITEM1$                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                        |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| 56  | img     | alt=Gráfico; title=Gráfico; src=/iconos/noname_mujer_53_100.gif; width=53; height=100                            |
| 60  | a       | class=enlacefuncional; title=Gráfico; tabindex=1; href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 13  | estado          | getParameter(request,"estado")   |
| 14  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable     | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 13  | estado       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 14  | zinicios     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") |
| 32  | zsubsesion   | "SSM_H_KNC_LVL"                                                      | SSM_H_KNC_LVL                                                        |
| 33  | zmeta4object | "SSM_H_KNC_LVL"                                                      | SSM_H_KNC_LVL                                                        |
| 34  | znodo        | "SSM_H_KNC_LVL"                                                      | SSM_H_KNC_LVL                                                        |
| 35  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                     | SSM_H_KNC_LVL{"!"}SSM_H_KNC_LVL{"[*]"}                               |
| 36  | zmove        | znodo + ":" + znodo + "[FIRST]"                                      | SSM_H_KNC_LVL{":"}SSM_H_KNC_LVL{"[FIRST]"}                           |
| 37  | zmetodocarga | "CARGA:" + zsubsesion + "!SSM_H_KNC_LVL.CARGA"                       | CARGA:{}SSM_H_KNC_LVL{"!SSM_H_KNC_LVL.CARGA"}                        |
| 38  | ziterator    | znodo + ":" + zsubsesion + "!" + znodo                               | SSM_H_KNC_LVL{":"}SSM_H_KNC_LVL{"!"}SSM_H_KNC_LVL                    |
| 85  | zcount       | 0                                                                    | 0                                                                    |
| 86  | zcounti      | 0                                                                    | 0                                                                    |
| 92  | zcountv      | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                   |
| --- | ------------ | -------------------------------------------------------------------- |
| 41  | m4:startpage | m4task=SSM_H_KNC_LVL                                                 |
| 41  | m4:beginjob  |                                                                      |
| 42  | m4:datadef   | m4o=SSM_H_KNC_LVL; m4name=SSM_H_KNC_LVL                              |
| 43  | m4:exec      | m4method=CARGA:{}SSM_H_KNC_LVL{"!SSM_H_KNC_LVL.CARGA"}               |
| 45  | m4:outputdef | m4alias=SSM_H_KNC_LVL                                                |
| 45  | m4:param     | name=m4name0; value=SSM_H_KNC_LVL{"!"}SSM_H_KNC_LVL{"[*]"}           |
| 52  | m4:endjob    |                                                                      |
| 82  | m4:move      |                                                                      |
| 82  | m4:param     | name=SSM_H_KNC_LVL; value=SSM_H_KNC_LVL{":"}SSM_H_KNC_LVL{"[FIRST]"} |
| 96  | m4:iterator  | m4node=SSM_H_KNC_LVL{":"}SSM_H_KNC_LVL{"!"}SSM_H_KNC_LVL; m4rows=*   |
| 97  | m4:param     | name=m4item0; value=SCO_PERCENT                                      |
| 98  | m4:param     | name=m4item1; value=SCO_DT_START                                     |
| 108 | m4:endpage   |                                                                      |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 89  | getCount         | znodo,zsubsesion,znodo |
| 90  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función  | Argumentos |
| --- | -------- | ---------- |
| 26  | Eliminar | RecNumber  |

| L   | Condición / acción / mensaje literal                                                                       |
| --- | ---------------------------------------------------------------------------------------------------------- |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                            |
| 16  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                    |
| 35  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                 |
| 36  | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[FIRST]";                        |
| 37  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_H_KNC_LVL.CARGA"; |
| 38  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 20  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 21  | ../../sse_generico/espanol/generico_links.jsp         |
| 106 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                       |
| 9   | /libreria/funciones_sse_val1.js                           |
| 10  | /libreria/funciones_sse.js                                |
| 56  | /iconos/noname_mujer_53_100.gif                           |
| 60  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31 |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                   |
| 20  | ../../mss_generico/espanol/mssgenerico_menusup.jsp        |
| 21  | ../../sse_generico/espanol/generico_links.jsp             |
| 27  | DeleteCurrency.jsp?RecNumber=                             |
| 106 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                |
| ------ | --- | --------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                   | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 20  | ../../mss_generico/espanol/mssgenerico_menusup.jsp        | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 21  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 106 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp     | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 9   | /libreria/funciones_sse_val1.js                           | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md) |
| BASE   | 10  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 60  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31 | ausente    | P06                                                                                              |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                   | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 20  | ../../mss_generico/espanol/mssgenerico_menusup.jsp        | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 21  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 27  | DeleteCurrency.jsp?RecNumber=                             | ausente    | P06                                                                                              |
| BASE   | 106 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp     | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/prueba_cuerpo.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
