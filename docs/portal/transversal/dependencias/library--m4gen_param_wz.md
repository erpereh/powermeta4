# m4gen_param_wz

Identificador: `library/m4gen_param_wz.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [library/m4gen_param_wz.js](../../../../clon_portal/portal/library/m4gen_param_wz.js) | `a5716e01e69c68d0e5f7497e6482545bc744d6060aa8009c900a704369174764` |    115 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [library/m4gen_param_wz.js](../../../../clon_portal/portal/library/m4gen_param_wz.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 74  | "+msg+"                  |
| 79  | "+msg+"                  |
| 80  | "+msg2+"                 |
| 83  | "+msg+"                  |
| 87  | "+msg+"                  |
| 88  | "+msg2+"                 |
| 93  | "+msg+"                  |
| 94  | "+msg2+"                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función               | Argumentos                            |
| --- | --------------------- | ------------------------------------- |
| 10  | m4wzins               | i                                     |
| 20  | m4wzsave              | i                                     |
| 25  | m4wzins_term          | i                                     |
| 38  | m4wzins_term_one_step |                                       |
| 48  | m4generate_merge_word | vData,vTemplate,vurlData,vurlTemplate |
| 99  | m4wzins_dyn           | i                                     |
| 110 | m4after_filter        |                                       |

| L   | Condición / acción / mensaje literal                                                                 |
| --- | ---------------------------------------------------------------------------------------------------- |
| 15  | if (vval == 1){                                                                                      |
| 31  | if (vval == 1){                                                                                      |
| 42  | if (vval == 1){                                                                                      |
| 76  | if (wdApp == null) {                                                                                 |
| 81  | }else if (openword == null) {                                                                        |
| 84  | }else if (openwordtemp == null){                                                                     |
| 90  | }else {                                                                                              |
| 104 | if (vval == 1){                                                                                      |
| 13  | expresión de cálculo/transformación: document.forms.NombreFormulario.action = opath + obuttslnk[i] ; |
| 29  | expresión de cálculo/transformación: document.forms.NombreFormulario.action = opath + obuttslnk[i] ; |
| 57  | expresión de cálculo/transformación: filename2= strTemp + "/"+ vTemplate;                            |
| 102 | expresión de cálculo/transformación: document.forms.NombreFormulario.action = opath + obuttslnk[i] ; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 32  | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_p_wz_exec.jsp |
| 43  | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_p_wz_exec.jsp |
| 113 | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_p_wz_exec.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                |
| ------ | --- | --------------------------------------------------------- | ---------- | ---------------------------------------------------------------- |
| BASE   | 32  | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_p_wz_exec.jsp | contextual | [shco_g0/shco_gen_p_wz_exec.jsp](shco_g0--shco_gen_p_wz_exec.md) |
| BASE   | 43  | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_p_wz_exec.jsp | contextual | [shco_g0/shco_gen_p_wz_exec.jsp](shco_g0--shco_gen_p_wz_exec.md) |
| BASE   | 113 | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_p_wz_exec.jsp | contextual | [shco_g0/shco_gen_p_wz_exec.jsp](shco_g0--shco_gen_p_wz_exec.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `library/m4gen_param_wz.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
