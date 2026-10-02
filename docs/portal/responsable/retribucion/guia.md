# Salarios, presupuesto y revisión salarial

## Consulta salarial y presupuesto

Destino `/portal/responsable/retribucion`. [mss_g2_p1.jsp](mss_g2--mss_g2_p1.md) muestra datos salariales; otras piezas del [índice](README.md) ofrecen análisis y validación. El [manual, PDF 80](../../referencias/manuales.md#datos-y-retribución-del-responsable), distingue fijo, variable, jornada, horas, beneficios y total, con valores teóricos/reales para jornada parcial.

El [manual, PDF 81](../../referencias/manuales.md#datos-y-retribución-del-responsable), describe filtro por UO, fecha inicial hoy y opción incluir hijos para analizar presupuesto. El resultado compara presupuesto y vigencia con fijo, variable, beneficios, coste empresa y coste total. Define porcentaje utilizado como coste total/presupuesto × 100 y prorrateo temporal de costes. No extrapolar esa fórmula al resto de páginas: confirmar nodos y método de análisis local, tratamiento de presupuesto cero y permisos.

## Aprobaciones económicas

Fuentes `mss_g2_p1_val.jsp`, `p2_val.jsp`, `p5_val.jsp`, `p7_val.jsp`, `p8_val.jsp`, `p9_val.jsp` y detalles/ayudas relacionados. Cubren, según contratos, cuentas, préstamos, beneficios y otras peticiones. El [manual, PDF 82 y 85](../../referencias/manuales.md#datos-y-retribución-del-responsable), distingue IBAN/otro formato y motivo obligatorio al desestimar un beneficio.

Usar el patrón de [validación del equipo](../equipo/guia.md#validaciones-personales-y-profesionales), con campos específicos de cada objeto. Datos económicos del solicitante, propuesta, impacto y motivo deben conservarse. Verificar que aprobar no evade bloqueo de nómina, cobertura o límites del plan.

## Compensación y revisión salarial: flujo extenso

La familia `mss_g2_p0`–`p6` incluye unidades responsables, empleados, planes, propuesta, selección, comentarios, avisos, historial, aprobación, exportación/importación y delegación de revisión. Las fichas separan pantallas y controladores. El [manual, PDF 86 y 90](../../referencias/manuales.md#datos-y-retribución-del-responsable), describe revisión individual/masiva y cambio de responsable de revisión por UO; son operaciones distintas de delegación general.

| Paso                       | Piezas y contratos identificables                                                                          | Comportamiento que debe preservarse                                                   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Unidades y responsable     | `p0`, `p0_wu*`; `CR_WORK_UNITS_FOR_MANAGER`, `CR_SHOW_WORK_UNIT_DATA`                                      | Solo UO de revisión autorizadas; detalle y delegación propia                          |
| Empleados a revisar        | `p2`, `p2_me`, `p2_p`; `CR_SET_EMPLOYEES_FOR_REVIEW`                                                       | Filtros, selección individual/múltiple, continuar                                     |
| Planes y datos de revisión | `p3`, `p3_p`; `CR_SET_SAL_PLAN_FOR_REVIEW`, `CR_SET_EMPLOYEE_PERFORMANCE`                                  | Selección de plan y valoración/datos base                                             |
| Propuesta y observaciones  | `p3_comment*`, `p3_sal`, `p3_grade`, `p3_mensaje`, `p3_pending`                                            | Metodología, historial, comentarios y avisos especiales                               |
| Edición/resultado          | `p4`, `p4_p`, `p4_rset`, `p4_salto`                                                                        | Aplicación de propuesta y acciones de reinicio/selección según permisos               |
| Revisión masiva            | `p3_me`, `p3_mi`, `p4_mi`; `CR_MSR_EXPORT`, `CR_MSR_IMPORT`, `CR_MSR_IMP_BASE_PLAN`, `CR_MSR_IMP_EMPLOYEE` | Exportación Excel e importación con validaciones; no confundir con importador de alta |
| Aprobación y seguimiento   | `p5`, `p5_p`, `p6`, `p6_comment`; `CR_SET_EMPLOYEES_FOR_APPROVAL`, `CR_LOAD_SALARY_REVIEW_PETITION`        | Separar propuesta y aprobación, filtro, estado y comentarios                          |
| Delegación propia          | `p0_wu_p`, `p0_wu_mail*`; `CR_SET_RESP_SALARY_DELEGATE`, `CR_SEND_DELEGATE_MAIL`                           | Alcance de revisión y efectos del servidor; P04                                       |

Los métodos completos, instancias, parámetros y nodos figuran en las fichas. La tabla organiza el recorrido por función, no demuestra un orden universal para cualquier plan. La fórmula de incremento, presupuesto, máximos, salario base y reparto pueden depender de metodología y configuración; no inventar un simulador genérico.

## Aceptación

Probar sin revisiones, varios empleados/planes, filtro, selección y retorno, propuesta fuera de límites, aviso, reinicio, presupuesto cero, importación inválida, propuesta pendiente y aprobación concurrente. La revisión masiva necesita contrato de plantilla/validación y manejo de errores por registro. Datos salariales, delegaciones y cualquier escritura requieren P02/P03/P04; no usar `SELECT` de sociedad como permiso suficiente.
