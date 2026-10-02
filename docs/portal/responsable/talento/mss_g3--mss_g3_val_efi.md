# Valoración Eficacia del Responsable

Identificador: `mss_g3/mss_g3_val_efi.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g3/espanol/mss_g3_val_efi.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_val_efi.jsp) | `8757a0d0c4070763c812e4a42defc67d7e812fc72d831070523ccb69bc58be8b` |    235 |
| CYC / español     | [m4custom/CYC/mss_g3/espanol/mss_g3_val_efi.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_val_efi.jsp)   | `8757a0d0c4070763c812e4a42defc67d7e812fc72d831070523ccb69bc58be8b` |    235 |
| IBER / español    | [m4custom/IBER/mss_g3/espanol/mss_g3_val_efi.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g3/espanol/mss_g3_val_efi.jsp) | `8757a0d0c4070763c812e4a42defc67d7e812fc72d831070523ccb69bc58be8b` |    235 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g3/espanol/mss_g3_val_efi.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_val_efi.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta            |
| --- | ----------------------------------- |
| 5   | Valoración Eficacia del Responsable |
| 99  | Detalles Curso                      |
| 102 | Curso :                             |
| 103 | [valor dinámico] ([valor dinámico]) |
| 109 | Fecha de Inicio :                   |
| 112 | Fecha de Fin :                      |
| 116 | Objetivo:                           |
| 120 | Horas Planificadas:                 |
| 124 | Horas Realizadas:                   |
| 127 | Número Asistentes Previstos:        |
| 132 | Número Asistentes:                  |
| 136 | Valoración media de los asistentes: |
| 140 | Listado de Asistentes:              |
| 144 | Valoración curso : [valor dinámico] |
| 147 | Acciones Desempeñadas :             |
| 151 | Observaciones :                     |
| 155 | Valoración Responsable :            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 94  | form    | id=envio&lt;%=i%&gt;; name=envio&lt;%=i%&gt;; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_valoracion_eficacia.jsp; method=post |
| 105 | input   | type=hidden; id=CSP_ID_DEV_SUBPRODUCT; name=CSP_ID_DEV_SUBPRODUCT; value=&lt;%=CSP_ID_DEV_SUBPRODUCT%&gt;                                    |
| 106 | input   | type=hidden; id=STD_ID_PERSON_RESP; name=STD_ID_PERSON_RESP; value=&lt;%=STD_ID_PERSON_RESP%&gt;                                             |
| 148 | input   | type=textarea; id=CSP_ACCIONES_DESEMPENADAS; name=CSP_ACCIONES_DESEMPENADAS; style=width: 450px; value=                                      |
| 152 | input   | type=textarea; id=CSP_OBSERVACIONES; name=CSP_OBSERVACIONES; style=width: 450px; value=                                                      |
| 158 | input   | type=hidden; id=CSP_ID_ANSWER_VALUE; name=CSP_ID_ANSWER_VALUE; value=                                                                        |
| 160 | select  | name=valoracion&lt;%=i%&gt;; id=valoracion&lt;%=i%&gt;; style=width: 450px                                                                   |
| 172 | option  | id=&lt;%=SCO_ID_ANSWER_VALUE%&gt;                                                                                                            |
| 179 | input   | name=btnForm&lt;%=i%&gt;; type=button; class=enterlogin; id=btnForm&lt;%=i%&gt;; style= background-color: #DC0028;                           |

```
							background-repeat: no-repeat;
							border: 1px solid #DC0028;
							border-radius: 4px;
							color: #FFFFFF;
							margin: 10px;
							max-width: 150px;
							min-height: 30px;
							min-width: 110px;; value=Enviar Valoración |
```

| 204 | input | name=btnTodos; type=button; class=enterlogin; id=btnTodos; style= background-color: #DC0028;
background-repeat: no-repeat;
border: 1px solid #DC0028;
border-radius: 4px;
color: #FFFFFF;
margin: 10px;
max-width: 300px;
min-height: 30px;
min-width: 110px;; value=Enviar Todas las Valoraciones |
| 228 | form | id=datos; name=datos; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_valoracion_eficacia.jsp; method=post |
| 229 | input | type=hidden; id=valoraciones; name=valoraciones; value= |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable                    | Expresión fuente | Resolución estática parcial |
| --- | --------------------------- | ---------------- | --------------------------- |
| 36  | i                           | 0                | 0                           |
| 37  | j                           | 0                | 0                           |
| 38  | zCountPendientes            | 0                | 0                           |
| 39  | zCountRespuestas            | 0                | 0                           |
| 53  | NumRegistrosServer          | ""               |                             |
| 54  | CSP_ASISTENTES              | ""               |                             |
| 55  | CSP_HORAS_PLANIFICADAS      | ""               |                             |
| 56  | CSP_HORAS_REALIZADAS        | ""               |                             |
| 57  | CSP_ID_DEV_SUBPRODUCT       | ""               |                             |
| 58  | CSP_LISTA_ASISTENTES        | ""               |                             |
| 59  | CSP_NM_DEV_SUBPRODUCT       | ""               |                             |
| 60  | CSP_PARTICIPANTES_PREVISTOS | ""               |                             |
| 61  | CSP_VALORA_MEDIA_ASISTENTES | ""               |                             |
| 62  | DT_START                    | ""               |                             |
| 63  | DT_END                      | ""               |                             |
| 64  | SCO_EDUCAT_OBJ              | ""               |                             |
| 65  | STD_ID_PERSON_RESP          | ""               |                             |
| 67  | SCO_NM_ANSWER_VALUE         | ""               |                             |
| 68  | SCO_ID_ANSWER_VALUE         | ""               |                             |
| 70  | NumRegistro                 | ""               |                             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                   |
| --- | ------------ | -------------------------------------------------------------------- |
| 21  | m4:startpage | m4task=CSP_MNG_VALORA_EFICA                                          |
| 22  | m4:beginjob  |                                                                      |
| 23  | m4:datadef   | m4o=CSP_MNG_VALORA_EFICA; m4name=CSP_MNG_VALORA_EFICA                |
| 24  | m4:exec      | m4method=CSP_MNG_VALORA_EFICA!CSP_MNG_VALORA_EFICA.CSP_M_CARGA_ESS   |
| 25  | m4:outputdef | m4alias=CSP_FREE_VAL_EFI_ESS                                         |
| 25  | m4:param     | name=m4name0; value=CSP_MNG_VALORA_EFICA!CSP_FREE_VAL_EFI_ESS[*]     |
| 26  | m4:outputdef | m4alias=CSP_OPCIONES_DESPLEGABLE                                     |
| 26  | m4:param     | name=m4name0; value=CSP_MNG_VALORA_EFICA!CSP_OPCIONES_DESPLEGABLE[*] |
| 27  | m4:endjob    |                                                                      |
| 232 | m4:endpage   |                                                                      |

| L   | Operación | Argumentos literales                                                                                  |
| --- | --------- | ----------------------------------------------------------------------------------------------------- |
| 44  | getCount  | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS"                                  |
| 45  | getCount  | "CSP_OPCIONES_DESPLEGABLE","CSP_MNG_VALORA_EFICA","CSP_OPCIONES_DESPLEGABLE"                          |
| 79  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_COUNT"                   |
| 80  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_ASISTENTES"              |
| 81  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_HORAS_PLANIFICADAS"      |
| 82  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_HORAS_REALIZADAS"        |
| 83  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_ID_DEV_SUBPRODUCT"       |
| 84  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_LISTA_ASISTENTES"        |
| 85  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_NM_DEV_SUBPRODUCT"       |
| 86  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_PARTICIPANTES_PREVISTOS" |
| 87  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_VALORA_MEDIA_ASISTENTES" |
| 88  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","DT_START"                    |
| 89  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","DT_END"                      |
| 90  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","SCO_EDUCAT_OBJ"              |
| 91  | getItem   | "CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","STD_ID_PERSON_RESP"          |
| 168 | getItem   | "CSP_OPCIONES_DESPLEGABLE","CSP_MNG_VALORA_EFICA","CSP_OPCIONES_DESPLEGABLE","","SCO_NM_ANSWER_VALUE" |
| 169 | getItem   | "CSP_OPCIONES_DESPLEGABLE","CSP_MNG_VALORA_EFICA","CSP_OPCIONES_DESPLEGABLE","","SCO_ID_ANSWER_VALUE" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal       |
| --- | ------------------------------------------ |
| 202 | &lt;% if (zCountPendientes&gt;1) {%&gt;    |
| 220 | &lt;% }else if (zCountPendientes==0){%&gt; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                          |
| --- | -------------------------------------------------------------------------- |
| 6   | /css/estilo_mss.css                                                        |
| 7   | /libreria/funciones_sse.js                                                 |
| 8   | /library/jquery.js                                                         |
| 9   | /libreria/functions_val_eficacia.js                                        |
| 94  | /servlet/CheckSecurity/JSP/sse_generico/actualizar_valoracion_eficacia.jsp |
| 228 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_valoracion_eficacia.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                 | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | -------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 7   | /libreria/funciones_sse.js                                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 8   | /library/jquery.js                                                         | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| COLL   | 9   | /libreria/functions_val_eficacia.js                                        | contextual | [libreria/functions_val_eficacia.js](../../transversal/dependencias/libreria--functions_val_eficacia.md)                                                                       |
| COLL   | 94  | /servlet/CheckSecurity/JSP/sse_generico/actualizar_valoracion_eficacia.jsp | ausente    | P06                                                                                                                                                                            |
| COLL   | 228 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_valoracion_eficacia.jsp | ausente    | P06                                                                                                                                                                            |
| CYC    | 7   | /libreria/funciones_sse.js                                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 8   | /library/jquery.js                                                         | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                          |
| CYC    | 9   | /libreria/functions_val_eficacia.js                                        | contextual | [libreria/functions_val_eficacia.js](../../transversal/dependencias/libreria--functions_val_eficacia.md)                                                                       |
| CYC    | 94  | /servlet/CheckSecurity/JSP/sse_generico/actualizar_valoracion_eficacia.jsp | ausente    | P06                                                                                                                                                                            |
| CYC    | 228 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_valoracion_eficacia.jsp | ausente    | P06                                                                                                                                                                            |
| IBER   | 7   | /libreria/funciones_sse.js                                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 8   | /library/jquery.js                                                         | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| IBER   | 9   | /libreria/functions_val_eficacia.js                                        | contextual | [libreria/functions_val_eficacia.js](../../transversal/dependencias/libreria--functions_val_eficacia.md)                                                                       |
| IBER   | 94  | /servlet/CheckSecurity/JSP/sse_generico/actualizar_valoracion_eficacia.jsp | ausente    | P06                                                                                                                                                                            |
| IBER   | 228 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_valoracion_eficacia.jsp | ausente    | P06                                                                                                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_val_efi.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
