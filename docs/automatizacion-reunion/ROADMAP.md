# Roadmap de implementación y validación

Esta entrega analiza y diseña. Las fases de producto siguientes están
**pendientes**; no se han implementado rutas, adaptadores ni controles.
Los criterios funcionales están en [SPEC](SPEC.md); las puertas Q en
[OPEN_QUESTIONS](OPEN_QUESTIONS.md).

## Fase 0 — Evidencia y especificación: completada con límites explícitos

- Leídas las fuentes obligatorias y los lectores, contratos, componentes,
  registro y pruebas relacionados con nómina, sesión, contexto y SQL.
- Vídeo identificado por SHA-256, metadatos y versiones en el manifiesto
  privado. Audio íntegro transcrito localmente en 15 segmentos con solape.
- Revisadas 848 capturas periódicas, 169 cambios y 46 capturas exactas,
  incluidos el inicio y final. Referencias E01–E26 en [AS_IS](AS_IS.md).
- Siete documentos versionables sin datos personales del vídeo. Originales,
  transcripciones, modelos, scripts y notas en `/revision_video/`, excluido
  de Git. Entorno Python aislado fuera del proyecto.
- No se abrió una conexión a PeopleNet, ejecutó una operación ERP ni envió
  el material a servicios externos de análisis. Las descargas fueron de
  herramientas/modelos; la inferencia de transcripción fue local.

El OCR automático no se utilizó: la lectura visual directa permitió comprobar
los campos y fórmulas citados. Muestreo y detección cubren toda la duración,
pero no equivalen a revisar individualmente cada fotograma ni a recuperar
las fórmulas completas de los libros ausentes.

## Fase 1 — Contratos y corpus de referencia

1. Recibir originales y libro resuelto de Q01, guardarlos fuera de Git y
   confeccionar equivalentes sintéticos que mantengan estructura y errores.
2. Validar claves/población Q02, signos/precisión Q03 y acceso Q10.
3. Acreditar por control cabeceras, ocurrencias, hojas, periodos, unidades,
   entidad y agregación. Documentar ejemplos esperados y excepciones.
4. Para candidatos a SQL/SOAP, inspeccionar primero diccionario y contrato en
   VM: solo metadatos/recuentos, sin valores personales ni nuevas escrituras.

Salida: perfiles tipados y casos de referencia aprobados por RRHH. Cada
control se habilita por contrato; no esperar que la aprobación de un perfil
valide automáticamente los demás. El núcleo puede desarrollarse mientras
se reciben fuentes, pero un adaptador desconocido debe seguir pendiente.

## Fase 2 — Núcleo puro y selección de informes

Implementar tipos propios, decimales, identidad, unión completa, evidencias,
estados e invalidación. Reutilizar lectores de ejecuciones y BLOB sin alterar
su contrato ni la exportación actual. Comenzar con C01, C02 y C08; C15 solo
para columnas expresamente inventariadas. Q04 no bloquea el delta, sí los
motivos automáticos.

Salida: pruebas unitarias sintéticas y contraste de resultados contra libro
manual; ningún porcentaje sumado, fila perdida o ausencia convertida en cero.
No registrar una acción navegable hasta disponer de una pantalla operativa.

## Fase 3 — Fuentes independientes y cálculos condicionados

Entregar progresivamente C03/C05/C06/C07/C09/C10/C11/C12/C13/C14 y C04,
con vista previa, límites y errores aislados. Priorizar los perfiles recibidos
y de mayor volumen; no hay evidencia para fijar un orden económico universal.

- Q05: Mercer por producto y mensualidad.
- Q06/Q12: extras y aniversarios con casos de vigencia/proporcionalidad;
  no extrapolar CYC a otros convenios.
- Q07/Q09: colectivo, tarifas, calendarios, ausencias y reparto de tarjeta.
- Q08: comisiones mediante fichero; integración directa solo tras acreditar
  origen, efectos y filtro de sociedad.
- Q11/Q13: calendarios explícitos de cuotas y aportación personal.

Salida por perfil: esquema validado, casos correctos e incorrectos, resultado
de paridad manual y pendientes visibles. No importar automáticamente PDF
escaneados ni generar correcciones ERP en esta versión.

## Fase 4 — Interfaz, transporte y expediente

Crear pantalla y handlers propuestos en [ARCHITECTURE](ARCHITECTURE.md),
con sesión/contexto del servidor, validación de origen, límites propios e
invalidación por sociedad. Reutilizar `@/components/system` y shell existente.
Exportar valores y revisión en memoria; volver a leer y recalcular antes de
descargar. No añadir persistencia SQLite ni estado sensible a stores globales.

Salida: flujo completo elegir → aportar → revisar → exportar, sin simular
fuentes o controles ausentes. Registrar `payroll.reconcile` en el módulo de
Nóminas cuando sea utilizable y haya autorización de acceso Q10.

## Fase 5 — Piloto en VM y aceptación operativa

Contrastar al menos dos periodos consecutivos y un cambio de año con RRHH,
usando ejecuciones identificadas y originales. Incluir una ejecución parcial
para demostrar que no se selecciona como nómina completa silenciosamente.
Medir población, cobertura, diferencias conocidas, falsos positivos y tiempo
de revisión; conservar resultado humano de cada discrepancia de referencia.

Medir memoria, tamaño y duración del caso de 650 personas propuesto, con
fuentes dentro de límites. El objetivo de 30 s requiere medición real;
no es una garantía ni un resultado de esta entrega. Revisar límites si el
piloto exige cola/temporales, sin incorporarlos implícitamente.

Salida: acta de aceptación por control y reglas/entidades realmente cubiertas.
Lo no acreditado continúa pendiente aunque el resto del expediente coincida.

## Matriz mínima de pruebas futuras

| Área                  | Casos y resultado exigido                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Identidad y población | Orden distinto, ceros iniciales, apóstrofo, varias filas, homónimos, solo actual/anterior/fuente y ID ambiguo. Unión completa sin unir por nombre.                             |
| Números               | Coma decimal, fracciones de céntimo, cuatro decimales, signos opuestos, límite de tolerancia y suma antes de redondear. Porcentajes duplicados iguales/distintos sin suma.     |
| Presencia             | Cero explícito, vacío, columna ausente, fórmula sin cache, `#N/D`, perfil desconocido y fuente ilegible. Ninguno se convierte en coincidencia falsa.                           |
| Periodos              | Diciembre/enero, cuota sin pago, mes vencido, ventana 16–15, varias pagas y parcialidad de población. Periodo efectivo visible.                                                |
| C01/C02/C08/C15       | Delta mensual, porcentaje en pp, turnos/festivos separados, conceptos tipados y motivo desconocido cuando falte prueba.                                                        |
| C03                   | Mensual frente a anual, salud empresa/empleado, especie/exento, signo por producto y múltiples bloques. No cruzar magnitudes diferentes.                                       |
| C04/C13               | Extra completa y proporcional, cambio 15→12, permisos, entidad/convenio y antigüedad distinta de alta. Sin contrato: no comparable.                                            |
| C05/C06               | Persona sin indicador ERP, colectivo independiente, tarifa por vigencia; kilómetros frente a euros y ventana de comisión.                                                      |
| C07                   | Misma persona en dos estancias válidas; mismo fichero duplicado; versión sustituida. Sumar cuotas válidas una sola vez.                                                        |
| C09/C10               | Ausencias sin tarifa, descargas, neto y reparto sin fórmula validada. Separar cobertura de validación económica.                                                               |
| C11/C12/C14           | Exceso positivo/negativo, origen perdido, cuota doble/irregular, meses sin cuota y aportación final distinta.                                                                  |
| Seguridad             | 401 sin sesión, contexto debug sin acceso ERP, otra sociedad, fichero con entidad ajena, SQL/rutas enviados por cliente y petición de origen ajeno. Rechazo sin exponer datos. |
| Archivos              | Tipo falso, cifrado/corrupto, límites, expansión ZIP, macro/vínculo/fórmula activa y error de una categoría. Sin ejecutar contenido ni bloquear otros controles válidos.       |
| Concurrencia          | Cambiar sociedad durante lectura/exportación, respuesta tardía, logout, fuente modificada y reintento. Vaciar/descartar y 409 cuando corresponda.                              |
| Revisión y Excel      | Justificación conserva delta, anotación invalidada por evidencia, exportación recalculada, texto seguro y mismos valores/cobertura que pantalla.                               |
| UI y regresión        | Teclado, foco, claro/oscuro y cuatro anchos; sin overflow de página. Resultados de nómina, alta, portal, chat, sesión, workspace y backups conservan contrato.                 |

Usar pruebas unitarias del motor para combinaciones y pruebas de integración
de los límites de servidor. E2E solo para los flujos y fronteras que requieren
navegador. Datos sintéticos en Git; las comparaciones reales permanecen en
el entorno autorizado y no se imprimen en logs de pruebas.

## Comprobaciones de esta entrega documental

- Suite completa ejecutada con `npm test -- --maxWorkers=2`: **191 archivos,
  1.097 pruebas correctas y 2 omitidas**. No se añadieron pruebas de producto
  porque no se implementó funcionalidad.
- `npm run lint`: ejecutado; siete avisos anteriores de oxlint y formato
  pendiente del repositorio. La comprobación inicial señaló 631 archivos.
- `npm run typecheck`: ejecutado; falla por tres referencias obsoletas de
  `.next/dev/types/validator.ts` a rutas eliminadas del Registro Retributivo.
- `npm run build`: compilación correcta, posterior fallo de TypeScript por
  esas mismas referencias generadas. No se modificó código para ocultarlo.
- Exclusión, enlaces, formato de los documentos nuevos y diff: se registran
  con su resultado final en `spec/changelog.md`.

Estas comprobaciones verifican el checkout y la documentación. No acreditan
una integración real con PeopleNet ni el cumplimiento de las pruebas futuras.
