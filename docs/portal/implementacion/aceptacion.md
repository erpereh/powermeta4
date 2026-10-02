# Criterios de aceptación

## Documentación entregada

- Cada fuente funcional seleccionada tiene una ficha con ruta, variante, hash, localizadores, controles, entradas, contratos, reglas visibles y dependencias; las piezas compartidas y auxiliares se enlazan.
- Cada dominio cuenta con índice y guía de recorrido. Las matrices relacionan fuentes, versiones y cobertura. Las otras generaciones/ámbitos tienen límites concretos P07.
- Los enlaces documentales y fuentes locales existen en el workspace; los manuales usan páginas físicas de PDF. Las referencias al servidor se identifican como pendientes.
- Ninguna afirmación de permiso, estado o escritura se da por comprobada únicamente por la existencia de un botón. No se copian credenciales ni documentos/personas reales.

## Para una funcionalidad futura

| Área          | Comprobación necesaria                                                                                    |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| Acceso        | Sesión ausente/expirada, perfil no operativo, sociedad y empleado derivados en servidor                   |
| Autorización  | Empleado propio, responsable/delegado dentro de periodo, intento fuera de alcance y cambio de sociedad    |
| Pantalla      | Todos los apartados, controles, ayudas y documentos de la variante aplicable; diferencias justificadas    |
| Datos         | Tipos reales, catálogos/fechas de vigencia, iniciales, solo lectura, obligatoriedad y dependencias        |
| Validación    | Regla cliente/servidor, errores por campo, campos condicionales, rangos y registro inexistente            |
| Flujo         | Entrar, filtrar, seleccionar, detalle, editar, cancelar, enviar, volver y recargar según función          |
| Estados       | Carga, vacío, fallo, pendiente, siguiente nivel, aceptación/rechazo, retirada y archivo cuando existan    |
| Operaciones   | Contrato aprobado, respuesta por registro, idempotencia/concurrencia cuando proceda; sin SQL de escritura |
| Documentos    | Autorización, formato/MIME, nombre, tamaño, ausencia y fallo de generación                                |
| Accesibilidad | Teclado, foco, nombres/estados, ayudas/errores asociados; navegación y expansión separadas                |
| Adaptación    | Escritorio/tablet/móvil sin overflow; leyendas comprensibles sin depender solo de color                   |
| Privacidad    | Sin secretos ni datos del portal en chat, almacenamiento del navegador o registros de diagnóstico         |

Los casos anteriores son criterios para implementación y verificación, no resultados ejecutados durante este análisis. Registrar qué se prueba con fixtures, qué contra servicio autorizado y qué sigue pendiente. No crear tests que solo repitan una tabla de extracción; probar contratos y recorridos significativos.

Las comprobaciones obligatorias del repositorio son lint, typecheck, test, build, diff check y status. Un fallo de formato preexistente se informa por separado de cualquier fallo introducido.
