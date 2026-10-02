# Inscripción en cursos

Identificador: `sse_g3/sse_g3_p7.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Solo en BASE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------ | --------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | espanol   | contenido diferente | m4:datadef:CSP_SSE_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_ACT_TYPE"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"} | m4:datadef:SSE_TRAINING_REQUEST; m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_ACT_TYPE"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"} |
| CYC    | espanol   | contenido diferente | m4:datadef:CSP_SSE_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_ACT_TYPE"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"} | m4:datadef:SSE_TRAINING_REQUEST; m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_ACT_TYPE"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"} |
| IBER   | espanol   | contenido diferente | m4:datadef:CSP_SSE_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_ACT_TYPE"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"} | m4:datadef:SSE_TRAINING_REQUEST; m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_ACT_TYPE"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; m4:item:M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"} |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g3/espanol/sse_g3_p7.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p7.jsp) | `7bda088a415af11fcd74b21066af75e3737b5ae96aa67fe0c18c237f19c13961` |    285 |
| CYC / español     | [m4custom/CYC/sse_g3/espanol/sse_g3_p7.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p7.jsp)   | `7bda088a415af11fcd74b21066af75e3737b5ae96aa67fe0c18c237f19c13961` |    285 |
| IBER / español    | [m4custom/IBER/sse_g3/espanol/sse_g3_p7.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g3/espanol/sse_g3_p7.jsp) | `7bda088a415af11fcd74b21066af75e3737b5ae96aa67fe0c18c237f19c13961` |    285 |
| BASE / español    | [sse_g3/espanol/sse_g3_p7.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p7.jsp)                             | `d74c5a6a8ab271e8238fe8f1f9cd24460b3c320a10952458cd36d4bff8ec0fed` |    281 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g3/espanol/sse_g3_p7.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p7.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------- |
| 7   | Inscripción en cursos                                                                                       |
| 139 | Inscripción en cursos                                                                                       |
| 142 | Consulta las solicitudes de formación pendientes de ser aprobadas y las ya aceptadas. Catálogo de formación |
| 160 | Curso                                                                                                       |
| 160 | Tipo                                                                                                        |
| 160 | Programado                                                                                                  |
| 188 | ','[valor dinámico]');" title="Detalle del curso"&gt;                                                       |
| 193 | No                                                                                                          |
| 195 | Si ( ');" title="Detalle del curso"&gt; )                                                                   |
| 198 | ');"&gt;                                                                                                    |
| 207 | Curso                                                                                                       |
| 208 | Tipo                                                                                                        |
| 209 | Programado                                                                                                  |
| 234 | ','[valor dinámico]');" title="Detalle del curso"&gt;                                                       |
| 240 | No                                                                                                          |
| 242 | Si ( ');" title="Detalle del curso"&gt; )                                                                   |
| 253 | Curso                                                                                                       |
| 254 | Tipo                                                                                                        |
| 255 | Sesión                                                                                                      |
| 256 | Inicio                                                                                                      |
| 257 | Fin                                                                                                         |
| 268 | ');" title="Detalle del curso"&gt;                                                                          |
| 270 | ');" title="Detalle del curso"&gt;                                                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                 |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 141 | img     | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; height=100; alt=Inscripción de cursos                                                     |
| 142 | a       | class=enlacefuncional; title=Catálogo de formación; tabindex=1; href=sse_g3_p3.jsp?estado=31                                                              |
| 145 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc3.jsp?estado=31; method=post; name=Formulario2; id=Formulario2                                     |
| 146 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                                                                     |
| 147 | input   | type=hidden; id=zdescription; name=zdescription                                                                                                           |
| 149 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc2.jsp?estado=31; method=post; name=Formulario3; id=Formulario3                                     |
| 150 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                                                                     |
| 153 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=Formulario; id=Formulario                                       |
| 154 | input   | type=hidden; id=TAG; name=TAG; value=CSP_SSE_TRAINING_REQUEST                                                                                             |
| 155 | input   | type=hidden; id=ACC; name=ACC; value=BORRAR                                                                                                               |
| 156 | input   | type=hidden; id=NOD; name=NOD; value=SSE_TRAINING_REQUEST                                                                                                 |
| 157 | input   | type=hidden; id=REC; name=REC                                                                                                                             |
| 188 | a       | href=javascript:verdesc('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                   |
| 195 | a       | href=javascript:verdesc2('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                  |
| 198 | a       | title=Eliminar la petición; href=javascript:borrar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                        |
| 198 | img     | src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 234 | a       | href=javascript:verdesc('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                   |
| 242 | a       | href=javascript:verdesc2('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                  |
| 268 | a       | href=javascript:verdesc('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                   |
| 270 | a       | href=javascript:verdesc2('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                  |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 27  | estado          | getParameter(request,"estado")      |
| 28  | zinicios        | getParameter(request,"zinicios")    |
| 29  | zproducto       | getParameter(request,"zproducto")   |
| 30  | znmproducto     | getParameter(request,"znmproducto") |

| L   | Variable                | Expresión fuente                                                                | Resolución estática parcial                                                                                                                                 |
| --- | ----------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27  | estado                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                          |
| 28  | zinicios                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                        |
| 29  | zproducto               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")                                                                                       |
| 30  | znmproducto             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")                                                                                     |
| 44  | zsubsesion              | "CSP_SSE_TRAINING_REQUEST"                                                      | CSP_SSE_TRAINING_REQUEST                                                                                                                                    |
| 45  | zMeta4Object            | "CSP_SSE_TRAINING_REQUEST"                                                      | CSP_SSE_TRAINING_REQUEST                                                                                                                                    |
| 46  | znodo                   | "SSE_TRAINING_REQUEST"                                                          | SSE_TRAINING_REQUEST                                                                                                                                        |
| 47  | znodo1                  | "M4T_SOLICITUDES_ACEPTADAS"                                                     | M4T_SOLICITUDES_ACEPTADAS                                                                                                                                   |
| 48  | znodo2                  | "M4T_ENROLLMENT_REQUEST"                                                        | M4T_ENROLLMENT_REQUEST                                                                                                                                      |
| 49  | ztipocarga              | "SSE"                                                                           | SSE                                                                                                                                                         |
| 50  | zventanas               | "50"                                                                            | 50                                                                                                                                                          |
| 51  | zregistroinicial        | Integer.valueOf(zinicios).intValue()                                            | Integer.valueOf(zinicios).intValue()                                                                                                                        |
| 53  | zventana                | Integer.valueOf(zventanas).intValue()                                           | Integer.valueOf(zventanas).intValue()                                                                                                                       |
| 54  | zregistrofinal          | zregistroinicial + zventana - 1                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                          |
| 55  | zoutputdef              | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"  | CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}      |
| 56  | zmove                   | znodo + "[" + zregistroinicial + "]"                                            | SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                          |
| 57  | zlectura                | zsubsesion + "!" + znodo                                                        | CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST                                                                                                           |
| 58  | zraiz                   | zsubsesion + "!" + znodo + "."                                                  | CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"."}                                                                                                      |
| 59  | zcomun                  | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."               | SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 60  | zoutputdef1             | zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 61  | zmove1                  | znodo1 + "[" + zregistroinicial + "]"                                           | M4T_SOLICITUDES_ACEPTADAS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                     |
| 62  | zlectura1               | zsubsesion + "!" + znodo1                                                       | CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS                                                                                                      |
| 63  | zraiz1                  | zsubsesion + "!" + znodo1 + "."                                                 | CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"."}                                                                                                 |
| 64  | zcomun1                 | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."             | M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}                                               |
| 65  | zoutputdef2             | zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}    |
| 66  | zmove2                  | znodo2 + "[" + zregistroinicial + "]"                                           | M4T_ENROLLMENT_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                        |
| 67  | zlectura2               | zsubsesion + "!" + znodo2                                                       | CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST                                                                                                         |
| 68  | zraiz2                  | zsubsesion + "!" + znodo2 + "."                                                 | CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"."}                                                                                                    |
| 69  | zcomun2                 | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."             | M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 70  | zmetodocarga            | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                  | CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                                                    |
| 71  | zidtrtb                 | zcomun + "SCO_ID_TRTBREQ"                                                       | SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                       |
| 72  | zestado                 | zcomun + "ID_ESTADO_REG"                                                        | SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"ID_ESTADO_REG"}                                        |
| 73  | ztipo                   | zcomun + "SCO_ID_TYPE"                                                          | SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                          |
| 74  | zSCO_NM_DEV_PRO_TYPE    | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                  | SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                                  |
| 75  | zSCO_NM_DEV_SUBPRODUCT0 | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                                | SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                |
| 76  | zordinal                | zcomun + "ORDINAL"                                                              | SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                              |
| 77  | znombre                 | zcomun + "SCO_NM_TRAINING"                                                      | SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"}                                      |
| 78  | zdescription            | ""                                                                              |                                                                                                                                                             |
| 79  | zSCO_DESCRIPTION        | zcomun + "SCO_DESCRIPTION"                                                      | SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DESCRIPTION"}                                      |
| 81  | zidtrtb1                | zcomun1 + "SCO_ID_TRTBREQ"                                                      | M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                             |
| 82  | zSCO_ID_TYPE            | zcomun1 + "SCO_ID_TYPE"                                                         | M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                |
| 83  | zSCO_NM_DEV_SUBACTION1  | zcomun1 + "SCO_NM_DEV_SUBACTION"                                                | M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                       |
| 84  | zSCO_NM_DEV_SUBPRODUCT1 | zcomun1 + "SCO_NM_DEV_SUBPRODUCT"                                               | M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                      |
| 85  | zSCO_NM_DEV_PRO_TYPE1   | zcomun1 + "SCO_NM_DEV_PRO_TYPE"                                                 | M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                        |
| 86  | zSCO_DESCRIPTION1       | zcomun1 + "SCO_DESCRIPTION"                                                     | M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DESCRIPTION"}                            |
| 88  | zidtrtb2                | zcomun2 + "SCO_ID_TRTBREQ"                                                      | M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                   |
| 89  | zSCO_NM_DEV_SUBACTION   | zcomun2 + "SCO_NM_DEV_SUBACTION"                                                | M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                             |
| 90  | zSCO_NM_DEV_ACT_TYPE    | zcomun2 + "SCO_NM_DEV_ACT_TYPE"                                                 | M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_ACT_TYPE"}                              |
| 92  | zinicio                 | zcomun2 + "DT_START"                                                            | M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                         |
| 93  | zfin                    | zcomun2 + "DT_END"                                                              | M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}                                           |
| 97  | zptipo                  | zcomun2 + "SCO_NM_PRODUCT_TYPE"                                                 | M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}                              |
| 98  | zSCO_NM_DEV_SUBPRODUCT  | zcomun2 + "SCO_NM_DEV_SUBPRODUCT"                                               | M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                            |
| 99  | zpos                    | ""                                                                              |                                                                                                                                                             |
| 121 | zcount                  | 0                                                                               | 0                                                                                                                                                           |
| 121 | zcounti                 | 0                                                                               | 0                                                                                                                                                           |
| 122 | zcount1                 | 0                                                                               | 0                                                                                                                                                           |
| 122 | zcount1i                | 0                                                                               | 0                                                                                                                                                           |
| 123 | zcount2                 | 0                                                                               | 0                                                                                                                                                           |
| 123 | zcount2i                | 0                                                                               | 0                                                                                                                                                           |
| 133 | zcountv                 | String.valueOf(zcounti)                                                         | String.valueOf(zcounti)                                                                                                                                     |
| 134 | zcount1v                | String.valueOf(zcount1i)                                                        | String.valueOf(zcount1i)                                                                                                                                    |
| 135 | zcount2v                | String.valueOf(zcount2i)                                                        | String.valueOf(zcount2i)                                                                                                                                    |
| 136 | zcounttot               | zcount + zcount1 + zcount2                                                      | 000                                                                                                                                                         |
| 163 | zregistroinicials       | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                                            |
| 164 | zregistrofinals         | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                                              |
| 165 | zposicions              | "0"                                                                             | 0                                                                                                                                                           |
| 165 | zcontrol                | 0                                                                               | 0                                                                                                                                                           |
| 165 | zposicion               | 0                                                                               | 0                                                                                                                                                           |
| 176 | zid                     | ""                                                                              |                                                                                                                                                             |
| 177 | zd                      | ""                                                                              |                                                                                                                                                             |
| 212 | zregistroinicials       | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                                            |
| 213 | zregistrofinals         | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                                              |
| 214 | zposicions              | "0"                                                                             | 0                                                                                                                                                           |
| 214 | zcontrol                | 0                                                                               | 0                                                                                                                                                           |
| 214 | zposicion               | 0                                                                               | 0                                                                                                                                                           |
| 222 | zid1                    | ""                                                                              |                                                                                                                                                             |
| 223 | zd1                     | ""                                                                              |                                                                                                                                                             |
| 260 | zregistroinicials       | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                                            |
| 261 | zregistrofinals         | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                                              |
| 262 | zposicions              | "0"                                                                             | 0                                                                                                                                                           |
| 262 | zcontrol                | 0                                                                               | 0                                                                                                                                                           |
| 262 | zposicion               | 0                                                                               | 0                                                                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                              |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 101 | m4:startpage | m4task=CSP_SSE_TRAINING_REQUEST                                                                                                                                                 |
| 101 | m4:beginjob  |                                                                                                                                                                                 |
| 102 | m4:datadef   | m4o=CSP_SSE_TRAINING_REQUEST; m4name=CSP_SSE_TRAINING_REQUEST                                                                                                                   |
| 111 | m4:exec      | m4method=CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                                                               |
| 111 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                                      |
| 112 | m4:outputdef | m4alias=SSE_TRAINING_REQUEST                                                                                                                                                    |
| 112 | m4:param     | name=m4name0; value=CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}      |
| 113 | m4:outputdef | m4alias=M4T_SOLICITUDES_ACEPTADAS                                                                                                                                               |
| 113 | m4:param     | name=m4name0; value=CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 114 | m4:outputdef | m4alias=M4T_ENROLLMENT_REQUEST                                                                                                                                                  |
| 114 | m4:param     | name=m4name0; value=CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}    |
| 115 | m4:endjob    |                                                                                                                                                                                 |
| 116 | m4:move      |                                                                                                                                                                                 |
| 116 | m4:param     | name=CSP_SSE_TRAINING_REQUEST; value=SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                         |
| 117 | m4:move      |                                                                                                                                                                                 |
| 117 | m4:param     | name=CSP_SSE_TRAINING_REQUEST; value=M4T_SOLICITUDES_ACEPTADAS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 118 | m4:move      |                                                                                                                                                                                 |
| 118 | m4:param     | name=CSP_SSE_TRAINING_REQUEST; value=M4T_ENROLLMENT_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                       |
| 167 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                                                            |
| 170 | m4:item      | m4varname=ztipoaux; m4name=SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                   |
| 188 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                              |
| 191 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                |
| 195 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"}; htmlsafe=true                                    |
| 215 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount1v).intValue()-1).toString()                                                                                                           |
| 217 | m4:item      | m4varname=zType; m4name=M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                            |
| 234 | m4:item      | m4name=M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                    |
| 236 | m4:item      | m4name=M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                      |
| 242 | m4:item      | m4name=M4T_SOLICITUDES_ACEPTADAS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                     |
| 263 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount2v).intValue()-1).toString()                                                                                                           |
| 268 | m4:item      | m4name=M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                          |
| 269 | m4:item      | m4name=M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_ACT_TYPE"}; htmlsafe=true                            |
| 270 | m4:item      | m4name=M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                           |
| 271 | m4:item      | m4name=M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true                                       |
| 272 | m4:item      | m4name=M4T_ENROLLMENT_REQUEST{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; htmlsafe=true                                         |
| 282 | m4:endpage   |                                                                                                                                                                                 |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 106 | setItem          | zsubsesion,zsubsesion,"","NIVEL","0"             |
| 126 | getCount         | znodo,zsubsesion,znodo                           |
| 127 | getCountInClient | znodo,zsubsesion,znodo                           |
| 128 | getCount         | znodo1,zsubsesion,znodo1                         |
| 129 | getCountInClient | znodo1,zsubsesion,znodo1                         |
| 130 | getCount         | znodo2,zsubsesion,znodo2                         |
| 131 | getCountInClient | znodo2,zsubsesion,znodo2                         |
| 180 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_DEV_PRODUCT"   |
| 181 | getItem          | znodo,zsubsesion,znodo,"","SCO_DESCRIPTION"      |
| 226 | getItem          | znodo1,zsubsesion,znodo1,"","SCO_ID_DEV_PRODUCT" |
| 227 | getItem          | znodo1,zsubsesion,znodo1,"","SCO_DESCRIPTION"    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función  | Argumentos      |
| --- | -------- | --------------- |
| 13  | borrar   | reg             |
| 17  | verdesc  | id,zdescription |
| 22  | verdesc2 | id              |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 32  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                         |
| 34  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                     |
| 36  | if ((zproducto==null)&#124;&#124;(zproducto.equals(""))){                                                                                   |
| 152 | &lt;% if (zcount &gt; 0) {%&gt;                                                                                                             |
| 168 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}      |
| 184 | if (zid.equals("99")) {zdescription = zd;}                                                                                                  |
| 185 | else {zdescription = "";}                                                                                                                   |
| 192 | &lt;%if (ztipoaux.equals("11")){%&gt;                                                                                                       |
| 194 | &lt;%}else{%&gt;                                                                                                                            |
| 203 | &lt;%}if (zcount1 &gt; 0) {%&gt;                                                                                                            |
| 216 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 230 | if (zid1.equals("99")) {zdescription = zd1;}                                                                                                |
| 231 | else {zdescription = "";}                                                                                                                   |
| 239 | &lt;%if (zType.equals("11")){%&gt;                                                                                                          |
| 241 | &lt;%}else{%&gt;                                                                                                                            |
| 247 | &lt;%}if (zcount2 &gt; 0) {                                                                                                                 |
| 264 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 277 | &lt;%}if (zcounttot == 0) {%&gt;                                                                                                            |
| 52  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 54  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 55  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 56  | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                   |
| 57  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                            |
| 58  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                         |
| 59  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                     |
| 60  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]";  |
| 61  | expresión de cálculo/transformación: String zmove1 = znodo1 + "[" + zregistroinicial + "]";                                                 |
| 62  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                          |
| 63  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                       |
| 64  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                  |
| 65  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]";  |
| 66  | expresión de cálculo/transformación: String zmove2 = znodo2 + "[" + zregistroinicial + "]";                                                 |
| 67  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                                          |
| 68  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                       |
| 69  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                  |
| 70  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                                  |
| 71  | expresión de cálculo/transformación: String zidtrtb = zcomun + "SCO_ID_TRTBREQ";                                                            |
| 72  | expresión de cálculo/transformación: String zestado = zcomun + "ID_ESTADO_REG";                                                             |
| 73  | expresión de cálculo/transformación: String ztipo = zcomun + "SCO_ID_TYPE";                                                                 |
| 74  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zcomun + "SCO_NM_DEV_PRO_TYPE";                                          |
| 75  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT0 = zcomun + "SCO_NM_DEV_SUBPRODUCT";                                     |
| 76  | expresión de cálculo/transformación: String zordinal = zcomun + "ORDINAL";                                                                  |
| 77  | expresión de cálculo/transformación: String znombre = zcomun + "SCO_NM_TRAINING";                                                           |
| 79  | expresión de cálculo/transformación: String zSCO_DESCRIPTION = zcomun + "SCO_DESCRIPTION";                                                  |
| 81  | expresión de cálculo/transformación: String zidtrtb1 = zcomun1 + "SCO_ID_TRTBREQ";                                                          |
| 82  | expresión de cálculo/transformación: String zSCO_ID_TYPE = zcomun1 + "SCO_ID_TYPE";                                                         |
| 83  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBACTION1 = zcomun1 + "SCO_NM_DEV_SUBACTION";                                      |
| 84  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT1 = zcomun1 + "SCO_NM_DEV_SUBPRODUCT";                                    |
| 85  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE1 = zcomun1 + "SCO_NM_DEV_PRO_TYPE";                                        |
| 86  | expresión de cálculo/transformación: String zSCO_DESCRIPTION1 = zcomun1 + "SCO_DESCRIPTION";                                                |
| 88  | expresión de cálculo/transformación: String zidtrtb2 = zcomun2 + "SCO_ID_TRTBREQ";                                                          |
| 89  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBACTION = zcomun2 + "SCO_NM_DEV_SUBACTION";                                       |
| 90  | expresión de cálculo/transformación: String zSCO_NM_DEV_ACT_TYPE = zcomun2 + "SCO_NM_DEV_ACT_TYPE";                                         |
| 92  | expresión de cálculo/transformación: String zinicio = zcomun2 + "DT_START";                                                                 |
| 93  | expresión de cálculo/transformación: String zfin = zcomun2 + "DT_END";                                                                      |
| 97  | expresión de cálculo/transformación: String zptipo = zcomun2 + "SCO_NM_PRODUCT_TYPE";                                                       |
| 98  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zcomun2 + "SCO_NM_DEV_SUBPRODUCT";                                     |
| 136 | expresión de cálculo/transformación: int zcounttot = zcount + zcount1 + zcount2;                                                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 41  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 42  | ../../sse_generico/espanol/generico_links.jsp      |
| 280 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 11  | /libreria/clase_val_entradas.js                                 |
| 141 | /iconos/noname_incripciones_formacion_99_100.gif                |
| 142 | sse_g3_p3.jsp?estado=31                                         |
| 145 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc3.jsp?estado=31 |
| 149 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc2.jsp?estado=31 |
| 153 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 188 | javascript:verdesc(                                             |
| 195 | javascript:verdesc2(                                            |
| 198 | javascript:borrar(                                              |
| 198 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 234 | javascript:verdesc(                                             |
| 242 | javascript:verdesc2(                                            |
| 268 | javascript:verdesc(                                             |
| 270 | javascript:verdesc2(                                            |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 41  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 42  | ../../sse_generico/espanol/generico_links.jsp                   |
| 280 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p7.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p7.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------- |
| 7   | Inscripción en cursos                                                                                       |
| 135 | Inscripción en cursos                                                                                       |
| 138 | Consulta las solicitudes de formación pendientes de ser aprobadas y las ya aceptadas. Catálogo de formación |
| 156 | Curso                                                                                                       |
| 156 | Tipo                                                                                                        |
| 156 | Programado                                                                                                  |
| 184 | ','[valor dinámico]');" title="Detalle del curso"&gt;                                                       |
| 189 | No                                                                                                          |
| 191 | Si ( ');" title="Detalle del curso"&gt; )                                                                   |
| 194 | ');"&gt;                                                                                                    |
| 203 | Curso                                                                                                       |
| 204 | Tipo                                                                                                        |
| 205 | Programado                                                                                                  |
| 230 | ','[valor dinámico]');" title="Detalle del curso"&gt;                                                       |
| 236 | No                                                                                                          |
| 238 | Si ( ');" title="Detalle del curso"&gt; )                                                                   |
| 249 | Curso                                                                                                       |
| 250 | Tipo                                                                                                        |
| 251 | Sesión                                                                                                      |
| 252 | Inicio                                                                                                      |
| 253 | Fin                                                                                                         |
| 264 | ');" title="Detalle del curso"&gt;                                                                          |
| 266 | ');" title="Detalle del curso"&gt;                                                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                 |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 137 | img     | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; height=100; alt=Inscripción de cursos                                                     |
| 138 | a       | class=enlacefuncional; title=Catálogo de formación; tabindex=1; href=sse_g3_p3.jsp?estado=31                                                              |
| 141 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc3.jsp?estado=31; method=post; name=Formulario2; id=Formulario2                                     |
| 142 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                                                                     |
| 143 | input   | type=hidden; id=zdescription; name=zdescription                                                                                                           |
| 145 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc2.jsp?estado=31; method=post; name=Formulario3; id=Formulario3                                     |
| 146 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                                                                     |
| 149 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=Formulario; id=Formulario                                       |
| 150 | input   | type=hidden; id=TAG; name=TAG; value=SSE_TRAINING_REQUEST                                                                                                 |
| 151 | input   | type=hidden; id=ACC; name=ACC; value=BORRAR                                                                                                               |
| 152 | input   | type=hidden; id=NOD; name=NOD; value=SSE_TRAINING_REQUEST                                                                                                 |
| 153 | input   | type=hidden; id=REC; name=REC                                                                                                                             |
| 184 | a       | href=javascript:verdesc('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                   |
| 191 | a       | href=javascript:verdesc2('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                  |
| 194 | a       | title=Eliminar la petición; href=javascript:borrar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                        |
| 194 | img     | src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 230 | a       | href=javascript:verdesc('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                   |
| 238 | a       | href=javascript:verdesc2('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                  |
| 264 | a       | href=javascript:verdesc('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                   |
| 266 | a       | href=javascript:verdesc2('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                  |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 27  | estado          | getParameter(request,"estado")      |
| 28  | zinicios        | getParameter(request,"zinicios")    |
| 29  | zproducto       | getParameter(request,"zproducto")   |
| 30  | znmproducto     | getParameter(request,"znmproducto") |

| L   | Variable                | Expresión fuente                                                                | Resolución estática parcial                                                                                                                             |
| --- | ----------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27  | estado                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                      |
| 28  | zinicios                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                    |
| 29  | zproducto               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")                                                                                   |
| 30  | znmproducto             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")                                                                                 |
| 44  | zsubsesion              | "SSE_TRAINING_REQUEST"                                                          | SSE_TRAINING_REQUEST                                                                                                                                    |
| 45  | zMeta4Object            | "SSE_TRAINING_REQUEST"                                                          | SSE_TRAINING_REQUEST                                                                                                                                    |
| 46  | znodo                   | "SSE_TRAINING_REQUEST"                                                          | SSE_TRAINING_REQUEST                                                                                                                                    |
| 47  | znodo1                  | "M4T_SOLICITUDES_ACEPTADAS"                                                     | M4T_SOLICITUDES_ACEPTADAS                                                                                                                               |
| 48  | znodo2                  | "M4T_ENROLLMENT_REQUEST"                                                        | M4T_ENROLLMENT_REQUEST                                                                                                                                  |
| 49  | ztipocarga              | "SSE"                                                                           | SSE                                                                                                                                                     |
| 50  | zventanas               | "50"                                                                            | 50                                                                                                                                                      |
| 51  | zregistroinicial        | Integer.valueOf(zinicios).intValue()                                            | Integer.valueOf(zinicios).intValue()                                                                                                                    |
| 53  | zventana                | Integer.valueOf(zventanas).intValue()                                           | Integer.valueOf(zventanas).intValue()                                                                                                                   |
| 54  | zregistrofinal          | zregistroinicial + zventana - 1                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                      |
| 55  | zoutputdef              | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"  | SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}      |
| 56  | zmove                   | znodo + "[" + zregistroinicial + "]"                                            | SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                      |
| 57  | zlectura                | zsubsesion + "!" + znodo                                                        | SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST                                                                                                           |
| 58  | zraiz                   | zsubsesion + "!" + znodo + "."                                                  | SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"."}                                                                                                      |
| 59  | zcomun                  | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."               | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 60  | zoutputdef1             | zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 61  | zmove1                  | znodo1 + "[" + zregistroinicial + "]"                                           | M4T_SOLICITUDES_ACEPTADAS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                 |
| 62  | zlectura1               | zsubsesion + "!" + znodo1                                                       | SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS                                                                                                      |
| 63  | zraiz1                  | zsubsesion + "!" + znodo1 + "."                                                 | SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"."}                                                                                                 |
| 64  | zcomun1                 | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."             | M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}                                               |
| 65  | zoutputdef2             | zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}    |
| 66  | zmove2                  | znodo2 + "[" + zregistroinicial + "]"                                           | M4T_ENROLLMENT_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                    |
| 67  | zlectura2               | zsubsesion + "!" + znodo2                                                       | SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST                                                                                                         |
| 68  | zraiz2                  | zsubsesion + "!" + znodo2 + "."                                                 | SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"."}                                                                                                    |
| 69  | zcomun2                 | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."             | M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 70  | zmetodocarga            | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                  | CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                                                    |
| 71  | zidtrtb                 | zcomun + "SCO_ID_TRTBREQ"                                                       | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                       |
| 72  | zestado                 | zcomun + "ID_ESTADO_REG"                                                        | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"ID_ESTADO_REG"}                                        |
| 73  | ztipo                   | zcomun + "SCO_ID_TYPE"                                                          | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                          |
| 74  | zSCO_NM_DEV_PRO_TYPE    | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                  | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                                  |
| 75  | zSCO_NM_DEV_SUBPRODUCT0 | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                                | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                |
| 76  | zordinal                | zcomun + "ORDINAL"                                                              | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                              |
| 77  | znombre                 | zcomun + "SCO_NM_TRAINING"                                                      | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"}                                      |
| 78  | zdescription            | ""                                                                              |                                                                                                                                                         |
| 79  | zSCO_DESCRIPTION        | zcomun + "SCO_DESCRIPTION"                                                      | SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DESCRIPTION"}                                      |
| 81  | zidtrtb1                | zcomun1 + "SCO_ID_TRTBREQ"                                                      | M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                             |
| 82  | zSCO_ID_TYPE            | zcomun1 + "SCO_ID_TYPE"                                                         | M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                |
| 83  | zSCO_NM_DEV_SUBACTION1  | zcomun1 + "SCO_NM_DEV_SUBACTION"                                                | M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                       |
| 84  | zSCO_NM_DEV_SUBPRODUCT1 | zcomun1 + "SCO_NM_DEV_SUBPRODUCT"                                               | M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                      |
| 85  | zSCO_NM_DEV_PRO_TYPE1   | zcomun1 + "SCO_NM_DEV_PRO_TYPE"                                                 | M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                        |
| 86  | zSCO_DESCRIPTION1       | zcomun1 + "SCO_DESCRIPTION"                                                     | M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DESCRIPTION"}                            |
| 88  | zidtrtb2                | zcomun2 + "SCO_ID_TRTBREQ"                                                      | M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                   |
| 89  | zSCO_NM_DEV_SUBACTION   | zcomun2 + "SCO_NM_DEV_SUBACTION"                                                | M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}                             |
| 90  | zSCO_NM_DEV_ACT_TYPE    | zcomun2 + "SCO_NM_DEV_ACT_TYPE"                                                 | M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_ACT_TYPE"}                              |
| 91  | zinicio                 | zcomun2 + "SCO_DATE_1"                                                          | M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}                                       |
| 92  | zfin                    | zcomun2 + "SCO_DATE"                                                            | M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}                                         |
| 93  | zptipo                  | zcomun2 + "SCO_NM_PRODUCT_TYPE"                                                 | M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}                              |
| 94  | zSCO_NM_DEV_SUBPRODUCT  | zcomun2 + "SCO_NM_DEV_SUBPRODUCT"                                               | M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                            |
| 95  | zpos                    | ""                                                                              |                                                                                                                                                         |
| 117 | zcount                  | 0                                                                               | 0                                                                                                                                                       |
| 117 | zcounti                 | 0                                                                               | 0                                                                                                                                                       |
| 118 | zcount1                 | 0                                                                               | 0                                                                                                                                                       |
| 118 | zcount1i                | 0                                                                               | 0                                                                                                                                                       |
| 119 | zcount2                 | 0                                                                               | 0                                                                                                                                                       |
| 119 | zcount2i                | 0                                                                               | 0                                                                                                                                                       |
| 129 | zcountv                 | String.valueOf(zcounti)                                                         | String.valueOf(zcounti)                                                                                                                                 |
| 130 | zcount1v                | String.valueOf(zcount1i)                                                        | String.valueOf(zcount1i)                                                                                                                                |
| 131 | zcount2v                | String.valueOf(zcount2i)                                                        | String.valueOf(zcount2i)                                                                                                                                |
| 132 | zcounttot               | zcount + zcount1 + zcount2                                                      | 000                                                                                                                                                     |
| 159 | zregistroinicials       | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                                        |
| 160 | zregistrofinals         | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                                          |
| 161 | zposicions              | "0"                                                                             | 0                                                                                                                                                       |
| 161 | zcontrol                | 0                                                                               | 0                                                                                                                                                       |
| 161 | zposicion               | 0                                                                               | 0                                                                                                                                                       |
| 172 | zid                     | ""                                                                              |                                                                                                                                                         |
| 173 | zd                      | ""                                                                              |                                                                                                                                                         |
| 208 | zregistroinicials       | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                                        |
| 209 | zregistrofinals         | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                                          |
| 210 | zposicions              | "0"                                                                             | 0                                                                                                                                                       |
| 210 | zcontrol                | 0                                                                               | 0                                                                                                                                                       |
| 210 | zposicion               | 0                                                                               | 0                                                                                                                                                       |
| 218 | zid1                    | ""                                                                              |                                                                                                                                                         |
| 219 | zd1                     | ""                                                                              |                                                                                                                                                         |
| 256 | zregistroinicials       | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                                        |
| 257 | zregistrofinals         | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                                          |
| 258 | zposicions              | "0"                                                                             | 0                                                                                                                                                       |
| 258 | zcontrol                | 0                                                                               | 0                                                                                                                                                       |
| 258 | zposicion               | 0                                                                               | 0                                                                                                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                          |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 97  | m4:startpage | m4task=SSE_TRAINING_REQUEST                                                                                                                                                 |
| 97  | m4:beginjob  |                                                                                                                                                                             |
| 98  | m4:datadef   | m4o=SSE_TRAINING_REQUEST; m4name=SSE_TRAINING_REQUEST                                                                                                                       |
| 107 | m4:exec      | m4method=CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                                                               |
| 107 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                                  |
| 108 | m4:outputdef | m4alias=SSE_TRAINING_REQUEST                                                                                                                                                |
| 108 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}      |
| 109 | m4:outputdef | m4alias=M4T_SOLICITUDES_ACEPTADAS                                                                                                                                           |
| 109 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 110 | m4:outputdef | m4alias=M4T_ENROLLMENT_REQUEST                                                                                                                                              |
| 110 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}    |
| 111 | m4:endjob    |                                                                                                                                                                             |
| 112 | m4:move      |                                                                                                                                                                             |
| 112 | m4:param     | name=SSE_TRAINING_REQUEST; value=SSE_TRAINING_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                         |
| 113 | m4:move      |                                                                                                                                                                             |
| 113 | m4:param     | name=SSE_TRAINING_REQUEST; value=M4T_SOLICITUDES_ACEPTADAS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 114 | m4:move      |                                                                                                                                                                             |
| 114 | m4:param     | name=SSE_TRAINING_REQUEST; value=M4T_ENROLLMENT_REQUEST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                       |
| 163 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                                                        |
| 166 | m4:item      | m4varname=ztipoaux; m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                   |
| 184 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                              |
| 187 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                |
| 191 | m4:item      | m4name=SSE_TRAINING_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}SSE_TRAINING_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING"}; htmlsafe=true                                    |
| 211 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount1v).intValue()-1).toString()                                                                                                       |
| 213 | m4:item      | m4varname=zType; m4name=M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                            |
| 230 | m4:item      | m4name=M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                    |
| 232 | m4:item      | m4name=M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                      |
| 238 | m4:item      | m4name=M4T_SOLICITUDES_ACEPTADAS{":"}SSE_TRAINING_REQUEST{"!"}M4T_SOLICITUDES_ACEPTADAS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                     |
| 259 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount2v).intValue()-1).toString()                                                                                                       |
| 264 | m4:item      | m4name=M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                          |
| 265 | m4:item      | m4name=M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_ACT_TYPE"}; htmlsafe=true                            |
| 266 | m4:item      | m4name=M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBACTION"}; htmlsafe=true                           |
| 267 | m4:item      | m4name=M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE_1"}; htmlsafe=true                                     |
| 268 | m4:item      | m4name=M4T_ENROLLMENT_REQUEST{":"}SSE_TRAINING_REQUEST{"!"}M4T_ENROLLMENT_REQUEST{"[&amp;VAR.m4lix]"}{"."}{"SCO_DATE"}; htmlsafe=true                                       |
| 278 | m4:endpage   |                                                                                                                                                                             |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 102 | setItem          | zsubsesion,zsubsesion,"","NIVEL","0"             |
| 122 | getCount         | znodo,zsubsesion,znodo                           |
| 123 | getCountInClient | znodo,zsubsesion,znodo                           |
| 124 | getCount         | znodo1,zsubsesion,znodo1                         |
| 125 | getCountInClient | znodo1,zsubsesion,znodo1                         |
| 126 | getCount         | znodo2,zsubsesion,znodo2                         |
| 127 | getCountInClient | znodo2,zsubsesion,znodo2                         |
| 176 | getItem          | znodo,zsubsesion,znodo,"","SCO_ID_DEV_PRODUCT"   |
| 177 | getItem          | znodo,zsubsesion,znodo,"","SCO_DESCRIPTION"      |
| 222 | getItem          | znodo1,zsubsesion,znodo1,"","SCO_ID_DEV_PRODUCT" |
| 223 | getItem          | znodo1,zsubsesion,znodo1,"","SCO_DESCRIPTION"    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función  | Argumentos      |
| --- | -------- | --------------- |
| 13  | borrar   | reg             |
| 17  | verdesc  | id,zdescription |
| 22  | verdesc2 | id              |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 32  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                         |
| 34  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                     |
| 36  | if ((zproducto==null)&#124;&#124;(zproducto.equals(""))){                                                                                   |
| 148 | &lt;% if (zcount &gt; 0) {%&gt;                                                                                                             |
| 164 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}      |
| 180 | if (zid.equals("99")) {zdescription = zd;}                                                                                                  |
| 181 | else {zdescription = "";}                                                                                                                   |
| 188 | &lt;%if (ztipoaux.equals("11")){%&gt;                                                                                                       |
| 190 | &lt;%}else{%&gt;                                                                                                                            |
| 199 | &lt;%}if (zcount1 &gt; 0) {%&gt;                                                                                                            |
| 212 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 226 | if (zid1.equals("99")) {zdescription = zd1;}                                                                                                |
| 227 | else {zdescription = "";}                                                                                                                   |
| 235 | &lt;%if (zType.equals("11")){%&gt;                                                                                                          |
| 237 | &lt;%}else{%&gt;                                                                                                                            |
| 243 | &lt;%}if (zcount2 &gt; 0) {                                                                                                                 |
| 260 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 273 | &lt;%}if (zcounttot == 0) {%&gt;                                                                                                            |
| 52  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 54  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 55  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 56  | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                   |
| 57  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                            |
| 58  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                         |
| 59  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                     |
| 60  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]";  |
| 61  | expresión de cálculo/transformación: String zmove1 = znodo1 + "[" + zregistroinicial + "]";                                                 |
| 62  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                          |
| 63  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                       |
| 64  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                  |
| 65  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]";  |
| 66  | expresión de cálculo/transformación: String zmove2 = znodo2 + "[" + zregistroinicial + "]";                                                 |
| 67  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                                          |
| 68  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                       |
| 69  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                  |
| 70  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                                  |
| 71  | expresión de cálculo/transformación: String zidtrtb = zcomun + "SCO_ID_TRTBREQ";                                                            |
| 72  | expresión de cálculo/transformación: String zestado = zcomun + "ID_ESTADO_REG";                                                             |
| 73  | expresión de cálculo/transformación: String ztipo = zcomun + "SCO_ID_TYPE";                                                                 |
| 74  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE = zcomun + "SCO_NM_DEV_PRO_TYPE";                                          |
| 75  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT0 = zcomun + "SCO_NM_DEV_SUBPRODUCT";                                     |
| 76  | expresión de cálculo/transformación: String zordinal = zcomun + "ORDINAL";                                                                  |
| 77  | expresión de cálculo/transformación: String znombre = zcomun + "SCO_NM_TRAINING";                                                           |
| 79  | expresión de cálculo/transformación: String zSCO_DESCRIPTION = zcomun + "SCO_DESCRIPTION";                                                  |
| 81  | expresión de cálculo/transformación: String zidtrtb1 = zcomun1 + "SCO_ID_TRTBREQ";                                                          |
| 82  | expresión de cálculo/transformación: String zSCO_ID_TYPE = zcomun1 + "SCO_ID_TYPE";                                                         |
| 83  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBACTION1 = zcomun1 + "SCO_NM_DEV_SUBACTION";                                      |
| 84  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT1 = zcomun1 + "SCO_NM_DEV_SUBPRODUCT";                                    |
| 85  | expresión de cálculo/transformación: String zSCO_NM_DEV_PRO_TYPE1 = zcomun1 + "SCO_NM_DEV_PRO_TYPE";                                        |
| 86  | expresión de cálculo/transformación: String zSCO_DESCRIPTION1 = zcomun1 + "SCO_DESCRIPTION";                                                |
| 88  | expresión de cálculo/transformación: String zidtrtb2 = zcomun2 + "SCO_ID_TRTBREQ";                                                          |
| 89  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBACTION = zcomun2 + "SCO_NM_DEV_SUBACTION";                                       |
| 90  | expresión de cálculo/transformación: String zSCO_NM_DEV_ACT_TYPE = zcomun2 + "SCO_NM_DEV_ACT_TYPE";                                         |
| 91  | expresión de cálculo/transformación: String zinicio = zcomun2 + "SCO_DATE_1";                                                               |
| 92  | expresión de cálculo/transformación: String zfin = zcomun2 + "SCO_DATE";                                                                    |
| 93  | expresión de cálculo/transformación: String zptipo = zcomun2 + "SCO_NM_PRODUCT_TYPE";                                                       |
| 94  | expresión de cálculo/transformación: String zSCO_NM_DEV_SUBPRODUCT = zcomun2 + "SCO_NM_DEV_SUBPRODUCT";                                     |
| 132 | expresión de cálculo/transformación: int zcounttot = zcount + zcount1 + zcount2;                                                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 41  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 42  | ../../sse_generico/espanol/generico_links.jsp      |
| 276 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 11  | /libreria/clase_val_entradas.js                                 |
| 137 | /iconos/noname_incripciones_formacion_99_100.gif                |
| 138 | sse_g3_p3.jsp?estado=31                                         |
| 141 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc3.jsp?estado=31 |
| 145 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc2.jsp?estado=31 |
| 149 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 184 | javascript:verdesc(                                             |
| 191 | javascript:verdesc2(                                            |
| 194 | javascript:borrar(                                              |
| 194 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 230 | javascript:verdesc(                                             |
| 238 | javascript:verdesc2(                                            |
| 264 | javascript:verdesc(                                             |
| 266 | javascript:verdesc2(                                            |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 41  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 42  | ../../sse_generico/espanol/generico_links.jsp                   |
| 276 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 41  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 42  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 280 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 142 | sse_g3_p3.jsp?estado=31                                         | física     | [sse_g3/sse_g3_p3.jsp](sse_g3--sse_g3_p3.md)                                                                                                                                                       |
| COLL   | 145 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc3.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 149 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc2.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 153 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 188 | javascript:verdesc(                                             | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 195 | javascript:verdesc2(                                            | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 198 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 234 | javascript:verdesc(                                             | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 242 | javascript:verdesc2(                                            | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 268 | javascript:verdesc(                                             | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 270 | javascript:verdesc2(                                            | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 41  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 42  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 280 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 41  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 42  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 280 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 11  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 142 | sse_g3_p3.jsp?estado=31                                         | física     | [sse_g3/sse_g3_p3.jsp](sse_g3--sse_g3_p3.md)                                                                                                                                                       |
| CYC    | 145 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc3.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| CYC    | 149 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc2.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| CYC    | 153 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 188 | javascript:verdesc(                                             | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 195 | javascript:verdesc2(                                            | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 198 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 234 | javascript:verdesc(                                             | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 242 | javascript:verdesc2(                                            | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 268 | javascript:verdesc(                                             | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 270 | javascript:verdesc2(                                            | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 41  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 42  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 280 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 41  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 42  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 280 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 142 | sse_g3_p3.jsp?estado=31                                         | física     | [sse_g3/sse_g3_p3.jsp](sse_g3--sse_g3_p3.md)                                                                                                                                                       |
| IBER   | 145 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc3.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 149 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc2.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 153 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 188 | javascript:verdesc(                                             | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 195 | javascript:verdesc2(                                            | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 198 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 234 | javascript:verdesc(                                             | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 242 | javascript:verdesc2(                                            | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 268 | javascript:verdesc(                                             | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 270 | javascript:verdesc2(                                            | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 41  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 42  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 280 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 41  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 42  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 276 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 11  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 138 | sse_g3_p3.jsp?estado=31                                         | física     | [sse_g3/sse_g3_p3.jsp](sse_g3--sse_g3_p3.md)                                                                                                                                                       |
| BASE   | 141 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc3.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 145 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc2.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 149 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 184 | javascript:verdesc(                                             | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 191 | javascript:verdesc2(                                            | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 194 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 230 | javascript:verdesc(                                             | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 238 | javascript:verdesc2(                                            | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 264 | javascript:verdesc(                                             | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 266 | javascript:verdesc2(                                            | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 41  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 42  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 276 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p7.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
