# Cómo interpretar la especificación

Esta documentación se construye con la copia local `clon_portal/portal/` y los manuales del repositorio. No se ha accedido a un portal en ejecución, ejecutado sus JSP ni llamado a Meta4 para validar sus resultados. Fecha de análisis: 2026-10-02.

## Niveles de evidencia

- **Comprobado en fuente**: existe el control, campo, literal, include, condición o método indicado. Los localizadores `L` cuentan líneas físicas del archivo desde 1.
- **Documentado en manual**: comportamiento descrito para el producto estándar; puede diferir de la personalización local. Los enlaces `#page=N` usan el número de página del PDF, no el número impreso.
- **Inferencia**: agrupación funcional o propuesta de integración razonada a partir de las fuentes. No se convierte en regla de negocio confirmada.
- **Pendiente**: depende de configuración, permisos, catálogos, objetos Meta4, ejecución o fuentes ausentes. Se vincula a un identificador del [registro](../implementacion/pendientes.md).

## Qué aporta cada nivel documental

Las guías de dominio describen el recorrido, las pantallas relacionadas y los criterios de aceptación. Las fichas técnicas registran los controles y contratos de **cada ruta lógica** y sus variantes. La [matriz](../inventario/README.md) relaciona ambas capas. Leer las tres para implementar una funcionalidad; no convertir un controlador o include en una página pública independiente.

La extracción técnica lee archivos completos. Retira comentarios JSP/HTML y bloques de comentario antes de identificar etiquetas y llamadas; no ejecuta Java ni JavaScript y no es un compilador. Las tablas pueden conservar expresiones JSP, condiciones parciales o textos mezclados con código. Son evidencia que requiere interpretar el contexto, no una lista automática de permisos ni un esquema de datos definitivo. La resolución de concatenaciones de variables es parcial y se indica como tal.

Los campos sin tipo declarado, catálogo completo o regla de obligatoriedad comprobada mantienen ese dato pendiente. `maxlength` es una restricción del control original; no demuestra el tamaño de columna. Un asterisco indica presentación de obligatoriedad, que debe contrastarse con la validación. `setItem` puede preparar argumentos sin persistir datos.

## Rutas, variantes y duplicados

Una ruta lógica agrupa el cuerpo compartido y su wrapper español, cuando existen, conservando ambos archivos. También agrupa `m4custom/CYC`, `m4custom/IBER` y `m4custom/COLL` de esa misma ruta. Versiones idénticas por SHA-256 comparten una sola tabla de evidencia; versiones distintas conservan secciones separadas. Esta agrupación no afirma que wrapper y cuerpo sean equivalentes ni que una versión tenga preferencia sobre otra.

Los hashes se calculan sobre los bytes originales. La [política de fuentes](../inventario/fuentes-y-duplicados.md) explica la personalización y las limitaciones del orden de resolución. Las rutas con nombres de backup conservan ficha y estado de exposición incierta: no se borran ni se declaran inactivas solo por su nombre.

Las fichas contienen identificadores, parámetros, controles, métodos, mensajes, condiciones y dependencias suficientes para preparar una implementación aun sin distribuir la copia original. No reproducen los JSP completos, recursos binarios, datos de empleados ni credenciales. Algunas expresiones solo pueden resolverse con los objetos y metadatos del servidor; su ausencia se registra como pendiente.

## Límites de cobertura

La cobertura principal es el autoservicio clásico del empleado y del responsable en español, con sus cuerpos compartidos y las tres personalizaciones disponibles. Las demás generaciones de interfaz, herramientas de administración, SDK y áreas de experto se inventarían con sus límites concretos en [otros recursos](../inventario/otros-recursos.md). No se presupone que todos los archivos de un despliegue formen parte del menú usado por estas sociedades.

«Cobertura estática» significa que una fuente tiene ficha o una limitación trazable. No significa que el portal se haya probado, que todas las reglas del servidor estén disponibles ni que las operaciones de escritura estén aprobadas en powermeta4.
