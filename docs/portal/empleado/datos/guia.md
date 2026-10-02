# Información personal, profesional y documentos

## Alcance y estados comunes

El empleado consulta sus datos y prepara solicitudes de modificación. El [manual de usuario, PDF 19](../../referencias/manuales.md#datos-del-empleado) distingue datos personales, profesionales, IRPF, contactos de emergencia y dependientes; las solicitudes pueden pasar por aceptación/cancelación y varios responsables. No todos los cambios aplican inmediatamente al dato definitivo. Las pantallas locales, formularios y controladores están en el [índice](README.md).

Destino: `/portal/empleado/datos`, con subapartados personales, profesionales, IRPF, emergencia, dependientes y documentos. La UI debe diferenciar dato actual y petición pendiente; las escrituras dependen de P04.

## Datos personales y dossier CYC

Entrada principal: [sse_g1_p1.jsp](sse_g1--sse_g1_p1.md). Sus variantes incluyen un dossier corporativo con fotografía, antigüedad, centro y dirección de trabajo, correo y teléfonos, datos profesionales y enlaces internos. **Comprobado en CYC:** usa `CSP_QUIEN_ES_QUIEN` y nodos asociados a ficha detallada, organización, cuentas, beneficiario, direcciones, correos, responsable, IRPF/dependientes y puesto. La ficha recoge los campos exactos; el dossier estándar y las personalizaciones no se mezclan.

El documento de funciones del puesto depende de registros en `CSP_FUNCIONES` y del valor de `CSP_MOSTRAR_DOC`; la rama de visualización utiliza el blob `CSP_DOC_PUESTO_FICHA`, y otra muestra el texto del puesto. No generar un documento cuando el original solo muestra un nombre. Fotografía y documento son recursos con permiso propio (P08).

Los formularios de modificación se alcanzan desde apartados y enlaces del dossier. El manual describe además modificación/borrado de fotografía, pero su disponibilidad local debe confirmarse. Las versiones `min`, `min_org`, `rrhh`, `dpt` y CV tienen propósito y entradas propios; conservar su contexto y no publicarlas todas como páginas de autoservicio.

| Flujo                      | Piezas originales                           | Campos/grupos y comportamiento visible                                                                  |
| -------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Dirección fiscal           | `sse_g1_p1_mod.jsp`                         | Vía, número, bloque, piso, escalera, puerta, CP y localización; obligatoriedad y catálogos dependientes |
| Correo personal            | `sse_g1_p1_mod2.jsp`                        | Correo actual/nuevo y lugar; reglas originales y servidor                                               |
| Teléfonos                  | `sse_g1_p1_mod3.jsp`                        | Número, tipo, tipo de línea y lugar; prefijos/longitud en ficha                                         |
| Otras direcciones          | `sse_g1_p1_mod4.jsp`                        | Tipo de dirección, vía, número y datos de localización; catálogo encadenado                             |
| Otros cambios personales   | `p1_mod5`, `p1_mod6`, `ssco_g1_p1_mod5/6/7` | Etiquetas parcialmente resueltas por metadatos; no atribuir significado solo al ordinal del fichero     |
| Domicilio de teletrabajo   | `sse_g1_p1_mod_da.jsp`                      | Dirección y localización; capacidad personalizada, verificar exposición                                 |
| Código postal/localización | `cod_postal.jsp` y dependencias             | Recurso auxiliar; no nueva página pública                                                               |
| Eventos vitales            | `sse_g1_p2.jsp`                             | Orientación/asistente con texto de ejemplo; uso real P01/P05                                            |

Los tipos se obtienen de controles y metadatos: texto, selector, fecha, flags. La ficha conserva identificador, longitud, valor inicial, eventos, campos ocultos y reglas. No asumir que un selector de provincia puede cambiar la sociedad operativa ni que todos los campos del alta son editables aquí.

## Datos profesionales y currículo

Entrada: [sse_g1_p3.jsp](sse_g1--sse_g1_p3.md). El [manual, PDF 22](../../referencias/manuales.md#datos-del-empleado) distingue titulación, idiomas, experiencia, certificados/licencias, otros cursos, asociaciones e información complementaria. Hay formularios `sse_g1_p3_mod*` y `ssco_g1_p3_mod*`, páginas de comentario/obligaciones y CV.

Cada registro tiene sus catálogos, fechas, nivel, entidad y descripción según tipo. Algunos controles de descripción limitan a 1.000 caracteres; otros tienen límites propios. La variante de idiomas contiene una fecha TOEIC. Mantener esos detalles en la variante aplicable. El estándar permite eliminar ciertos registros validados o pendientes; confirmar qué permite el método local antes de activarlo.

Recorrido: consulta de registros → nuevo/detalle → edición con catálogos → validación → envío → petición → eventual retirada/borrado. Entidades académicas, tipos, niveles y reglas temporales se verifican con el servidor. El CV puede ser un informe y requiere P08.

## IRPF y Modelo 145

Fuentes: `ssco_g1_p6.jsp`, `ssco_g1_p6_mod*.jsp`, `ssco_g1_p6_mod_send.jsp`, `sssp_g1_p6_sit*`, `sssp_g1_p6_hist.jsp`, `sssp_g1_p6_mod145.jsp` y `sssp_g1_p6_actualizar.jsp`. El [índice](README.md) conserva sus variantes.

El [manual, PDF 24](../../referencias/manuales.md#datos-del-empleado), describe consulta/modificación de situación fiscal, historial e impresión del Modelo 145 para IRPF nacional. La pantalla incluye estado, datos familiares/descendientes y cuantías; sus catálogos y combinaciones no se reconstruyen solo desde nombres de campos.

Distinguir cambio solicitado, documento que se debe aportar y acuse de recibo. El estándar manager, PDF 80, describe estados 01/02/03 de entrega de documentación y fechas condicionadas; no tratarlos como autorización fiscal automática ni extrapolarlos a todo el dominio. No calcular un porcentaje fiscal nuevo desde la UI sin contrato real.

## Emergencia y dependientes

Emergencia: `sse_g1_p4.jsp` y `p4_mod.jsp`. El [manual, PDF 29](../../referencias/manuales.md#datos-del-empleado), enumera nombre, teléfono, prefijos y prioridad; permite borrar solicitudes pendientes. Dependientes: `sse_g1_p5.jsp` y `p5_mod.jsp`, con nombre, nacimiento, periodo y tipo. El estándar no deja modificar nombre/nacimiento de un dependiente existente y advierte sobre homónimos. Confirmar esas restricciones en el método local.

Dependientes e información familiar fiscal son apartados diferentes. No copiar automáticamente un cambio entre ellos ni mantener personas ERP como cuentas autenticadas nuevas de powermeta4.

## Documentos y enlaces corporativos

Seguir piezas genéricas, includes y nodos de cada variante para distinguir documentos internos de formularios fiscales. El manual PDF 29 introduce documentos vinculados a funcionalidades; no hay contrato universal de upload aprobado. Tipo/tamaño/permisos y vinculación requieren P08.

`sse_g1_pcyc.jsp` agrupa accesos corporativos a certificado, currículo, evaluación y otros sistemas; otra copia contiene enlaces con aspecto de ejemplo. Exposición y servicios externos requieren P01/P07. No convertir una URL externa o de prueba en una función local con resultado simulado.

## Adaptación y aceptación

Reutilizar componentes de formulario y dossier, errores por campo y conservación de borrador. Probar dato actual ausente, catálogo vacío, selección dependiente invalidada, registro pendiente, fecha/correo/teléfono inválidos, cancelación de edición, envío fallido y retorno al listado. Comparar cada formulario con su validador compartido y controlador.

Aceptar por flujo cuando campos de la variante, reglas visibles y estados reales estén reproducidos, el servidor derive empleado/sociedad y la petición no se presente como cambio efectivo antes de su resolución. P01–P06/P08 se cierran por flujo, no por todo `sse_g1`.
