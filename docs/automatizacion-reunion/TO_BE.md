# Proceso propuesto: revisar el cuadre sin copiar y pegar

Todo este documento describe **propuestas (P)**. Las evidencias del proceso
actual están en [AS_IS](AS_IS.md); el contrato funcional es [SPEC](SPEC.md).

## Experiencia operativa

1. **Abrir «Cuadrar nómina» desde Inicio → Nóminas.** La sesión y sociedad son
   las actuales de powermeta4. La pantalla no añade un selector de sociedad ERP
   independiente ni utiliza la identidad del portal para conceder acceso.
2. **Elegir periodo y ejecuciones.** Mostrar las ejecuciones normales
   disponibles del actual y anterior, con paga, frecuencia, fecha de ejecución,
   filas y personas. Ofrecer candidatos recientes y exigir confirmar su
   población. Si el informe todavía no existe, pedir generarlo por el proceso
   habitual en PeopleNet: esta versión no lo ejecuta.
3. **Aportar fuentes originales por categoría.** El usuario selecciona los
   archivos de Mercer, colectivo, cuotas, etc. La vista previa explica periodo,
   hoja/bloque, filas y conceptos reconocidos. No exige copiar una hoja a otra
   ni usar un nombre de fichero exacto. Un formato no reconocido queda pendiente
   de validar el adaptador, sin adivinar columnas.
4. **Analizar.** El servidor valida las entradas, vuelve a leer las ejecuciones
   y cruza matrículas. Compara lo disponible y muestra cada dependencia
   ausente. Las fuentes subidas para el análisis no se importan en Meta4.
5. **Revisar las excepciones.** La persona consulta operandos, fuentes y regla,
   marca una diferencia como justificada o como corrección manual necesaria y
   anota el motivo. «Desconocido» sigue pendiente; una justificación no borra
   la diferencia ni altera la nómina.
6. **Corregir por el procedimiento autorizado, si corresponde.** Fuera de la
   herramienta, RRHH realiza la corrección ERP y obtiene un resultado nuevo.
   Elegir esa nueva ejecución invalida los cuadres afectados; se analizan y
   revisan otra vez. No hay botón que escriba ni recalcule en PeopleNet.
7. **Descargar el expediente Excel.** Contiene resultados, cobertura,
   referencias y revisión. Si la fuente cambió desde el análisis, bloquear
   la exportación obsoleta y pedir revisar la nueva comparación.

El resultado puede estar **parcialmente evaluado**. Fijos e IRPF no esperan
al fichero Mercer; un control sin fuente no se interpreta como coincidente.

## Qué se automatiza y qué conserva intervención humana

| Parte                      | Automatización propuesta                                                                    | Intervención que permanece                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Selección de nóminas       | Consultar historial, presentar candidatos y validar claves/contexto.                        | Confirmar que las ejecuciones contienen la población y alcance deseados.                |
| Tablas dinámicas y BUSCARV | Agregar importes por persona, cruzar por clave y generar diferencias sin depender de filas. | Resolver identificadores ambiguos o fuentes incompletas.                                |
| Conceptos mensuales        | Comparar Fijos, porcentaje IRPF, Turnos y lista validada de Otros.                          | Juzgar si el cambio es correcto y aportar causa cuando no está acreditada.              |
| Ficheros externos          | Leer perfiles validados, seleccionar periodo y contrastar conceptos.                        | Descargar/obtener originales y aportarlos; confirmar su periodo y cobertura.            |
| Cálculos acreditados       | Aplicar fórmulas expresamente validadas y conservar operandos.                              | Validar devengos, tarifas, excepciones y políticas antes de habilitar cada regla.       |
| Motivos                    | Adjuntar evidencia histórica cuando exista contrato y correspondencia temporal.             | Confirmar relación causal y decidir la actuación.                                       |
| Expediente                 | Exportar el resultado calculado, sus pendientes y notas.                                    | Custodiarlo según el procedimiento corporativo; v1 no crea archivo histórico adicional. |

## Estrategia de integración por fuente

| Fuente                         | Alternativa preferida                                                                  | Decisión para la primera versión                                                                                                                    |
| ------------------------------ | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Informe normal actual/anterior | SELECT de resultados guardados, sin exportar/abrir Excel.                              | Reutilizar lector existente de Resultados de nómina. No generar el informe mediante un servicio inventado.                                          |
| Incidencias y cambios          | SELECT históricas agrupadas, parametrizadas por sociedad y ventana.                    | No activar motivos automáticos hasta validar tablas, vigencias y semántica. Las lecturas del portal solo orientan el descubrimiento.                |
| Mercer                         | Fichero original independiente del resultado de su carga ERP.                          | Subida manual. No comparar únicamente tabla de valor cargada contra nómina: no detectaría una carga errónea que afectase a ambas.                   |
| Teletrabajo                    | Fichero del colectivo frente a importe pagado; indicador ERP como evidencia adicional. | Conservar fuente independiente para detectar personas sin indicador. Cálculo del esperado condicionado a tarifa/calendario acreditados.             |
| Comisiones de servicio         | Consultar el origen real del generador, si se demuestra lectura y contrato.            | Aportar Excel generado. Investigar SQL/servicio en fase posterior; no pulsar «Generar» ni asumir que «Solo consulta» garantiza ausencia de efectos. |
| Apartamentos y otras cuotas    | Originales del comité, todos los bloques/estancias y cuota del mes.                    | Subida múltiple con control de duplicación por documento, no por persona.                                                                           |
| Comidas por nómina             | Fichero independiente de ausencias y regla validada de valoración.                     | Subida manual; no sustituirlo por GTA o un sistema de fichajes supuesto.                                                                            |
| Tarjetas de comida             | Pedido/recarga y descargas/correcciones del proveedor.                                 | Contrastar neto y conceptos ERP; reparto exento/no exento pendiente de fórmula vigente.                                                             |
| Excesos                        | Registro externo de recálculos y saldo esperado del mes destino.                       | Fuente estructurada. Si no conserva el original, señalarlo y no inferir diferencias históricas.                                                     |
| Anticipos                      | Calendario explícito de cuotas por solicitud y mes.                                    | Excel estructurado; PDF textual/OCR local como mejora posterior con validación humana.                                                              |
| Aniversarios                   | Lista anual de beneficiarios y referencia salarial acreditada.                         | Subida anual, filtrado por periodo/entidad. Antigüedad ERP solo como evidencia adicional validada.                                                  |
| Aportación personal al plan    | Calendario externo mensual autorizado.                                                 | Leer la celda del mes, sin repartir de nuevo el total anual ni copiar límites de proyecciones.                                                      |

## Datos, independencia y reproducibilidad

El expediente se basa en dos tipos de evidencia: el resultado calculado de
PeopleNet y una referencia independiente. Leer lo ya importado como única
referencia externa puede comprobar consistencia interna, pero no verificar
que se cargó el fichero correcto. La interfaz diferencia ambos alcances.

Cada hallazgo conserva referencias a las filas y columnas que participaron.
Los importes originales, los normalizados, la operación y la diferencia son
consultables. Los cambios de orden de filas no afectan al cruce. Varias
personas con diferencias opuestas no se compensan para dar un total aprobado.

Las cuotas se seleccionan por año/mes, no solo por el texto «octubre».
Teletrabajo y compensación de comida muestran **mes pagado** y **mes
devengado**; comisiones muestran su ventana. Los periodos sin cuota no se
inventan por interpolación. Las estructuras con varias empresas requieren
un filtro de entidad acreditado dentro de la sociedad autorizada.

## Estados y cambios de fuentes

- Sin ejecución actual: explicar la dependencia y bloquear Analizar.
- Sin anterior: mantener pendientes los controles mensuales; permitir los demás.
- Sin fichero: «Falta fuente», con la categoría y periodo requeridos.
- Sin contrato de regla: «No comparable», con el pendiente concreto de
  [OPEN_QUESTIONS](OPEN_QUESTIONS.md), incluso si los importes parecen próximos.
- Error de una fuente: conservar las demás comparaciones y destacar cobertura parcial.
- Fuente nueva o modificada: recalcular dependencias e invalidar revisiones cuyo
  identificador, operandos o evidencia hayan cambiado.
- Cambio de sociedad/logout: vaciar datos y descartar respuestas en curso.
- Recarga: v1 vuelve a la selección; no prometer recuperación de ficheros/notas.

No se declara «todo cuadrado» si hay controles pendientes, errores, fuentes
sin vincular o diferencias sin revisar. Incluso un expediente completo es
una ayuda de control, no la aprobación automática del cierre de nómina.

## Ahorro esperado y límites de la propuesta

Se eliminan la creación repetitiva de tablas dinámicas, copiar/pegar columnas,
BUSCARV, diferencias por filas y búsqueda de errores de alineación. Se amplía
la cobertura de comparación a toda la población presente en cada contrato
validado, conservando los casos complejos como pendientes visibles.

No se ha medido un ahorro real ni se promete un porcentaje. El piloto debe
medir tiempo desde que están disponibles las fuentes hasta terminar la
revisión, excepciones detectadas y falsos motivos. No se necesita un modelo
de lenguaje en la herramienta: los cálculos y el cruce son deterministas.
