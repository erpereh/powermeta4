# Bancos, nómina, préstamos, beneficios y compensación

## Acceso y sensibilidad

El empleado consulta únicamente su información económica. Destino `/portal/empleado/retribucion`. Las piezas están en el [índice](README.md); el [manual de usuario, PDF 32](../../referencias/manuales.md#retribución-del-empleado), explica solicitudes y validación de cambios bancarios, préstamos y beneficios. La identidad propia se resuelve en servidor (P03).

## Cuenta bancaria principal y otras cuentas

Entradas [sse_g2_p1.jsp](sse_g2--sse_g2_p1.md), `sse_g2_p2.jsp` y `p2_n.jsp`; formularios `p1_mod*`, `p2_add*`, `p2_mod*`, variantes nacionales/no nacionales e IBAN. Leer `sse_payment_data_trans.jsp` y scripts bancarios enlazados. Los sufijos técnicos representan variantes del flujo, no obligan a crear formularios públicos separados.

| Apartado               | Datos y controles                                                        | Dependencias                                          |
| ---------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------- |
| Consulta principal     | Inicio, cuenta/IBAN, moneda y datos según formato                        | Último registro vigente y medio de pago               |
| Modificación principal | Fecha, IBAN u otro formato, banco/sucursal/DC/cuenta o código extranjero | Fecha efectiva depende de nómina y variante           |
| Consulta otras cuentas | Titular/beneficiario, inicio, cuenta, tipo de importe e importe          | Beneficiario y regla de pago                          |
| Alta de otra cuenta    | Inicio, beneficiario, datos bancarios, importe/porcentaje y catálogos    | Compatibilidad país/formato y reglas de pago          |
| Modificación/borrado   | Campos editables y petición pendiente                                    | Cierre/bloqueo de paga y órdenes de pago del servidor |

**Diferencia comprobada:** algunos formularios indican efectividad al día 1 del próximo mes; otros dicen que se calcula según procesos de nómina. No elegir una frase como regla única. El [manual, PDF 36](../../referencias/manuales.md#retribución-del-empleado), añade condiciones de paga abierta/bloqueada y órdenes de pago. Su estándar restringe ciertos cambios de otras cuentas al importe. Verificar edición por variante y no trasladar indiscriminadamente el formulario de alta de personas.

Reutilizar validación IBAN/CCC solo si significado y contrato coinciden. Las longitudes del manual antiguo no sustituyen la validación actual. Distinguir cancelar edición, retirar solicitud y borrar cuenta/periodo definitivo (P04).

## Recibos de salarios

Entrada [sse_g2_p4.jsp](sse_g2--sse_g2_p4.md): últimos recibos con periodo de liquidación, número de periodo, neto y retroactividad. Seguir detalle, generación, formato e impresión enlazados. No convertir los JPG de ejemplo del despliegue en recibos del usuario.

El servicio actual consulta pagas actuales por rango y moneda; rechaza retroactivas. Reutilizarlo exige restringir al empleado de la sesión y comparar campos, periodos y formato. Registrar retroactividad como capacidad pendiente concreta. Probar rango sin recibos, fechas inválidas, uno/varios periodos, documento faltante y error del servicio (P08).

## Certificados, proyecciones y paquete retributivo

`sse_g2_cert_hab.jsp` y `sse_g2_cert_hab_cyc*.jsp` cubren certificados de retenciones con distintos ejercicios y documentos históricos. `sse_g2_proyecciones.jsp`, `sse_g2_inf_proyec*.jsp`, `proyecciones/index.jsp` y `proy_ret_json.jsp` contienen proyección teórica e informes de compensación total. Versiones fechadas/backups conservan evidencia separada; confirmar cuál llama el menú y cómo obtiene cada informe.

`sse_g2_p10.jsp`, `p11.jsp` y `ssco_g2_p12.jsp` completan consultas retributivas según sus contratos. El [manual, PDF 45](../../referencias/manuales.md#retribución-del-empleado), define fijo, variable y beneficios, con situación teórica/real en jornada parcial. La proyección corporativa tiene desglose y cálculos propios: conservar fórmulas visibles y métodos; no sustituirlos por suma genérica ni tratar proyección como nómina real.

Para certificados/informes conservar ejercicio, disponibilidad, descarga/ampliación/impresión y errores. Año por defecto y lista histórica dependen de variante; no fijar los años del archivo como catálogo perpetuo.

## Préstamos

Fuentes `sse_g2_p5_p.jsp` (historial), `p5.jsp` (solicitud), `p5_sim.jsp` (simulación), `p5_desc.jsp` (detalle) y `p3_pc.jsp` (concedidos). `p5_det.jsp` tiene título de detalle de puesto: clasificar por contenido/enlaces, sin atribuirle automáticamente el contrato de préstamo.

El [manual, PDF 40](../../referencias/manuales.md#retribución-del-empleado), describe fecha/tipo → interés → capital/moneda → frecuencia de cuotas → cálculo por número o por importe de cuota. La simulación permite cambiar interés y devuelve la magnitud alternativa. Leer validaciones y llamada de cálculo de la ficha; las reglas financieras las resuelve el servicio, sin reconstrucción aproximada.

Solicitar es distinto de simular; el responsable acepta/desestima y puede existir retirada de petición (manual PDF 42). El detalle muestra interés, capital, motivo, frecuencia y amortización que devuelva el original. Probar parámetros inválidos, capital/periodo no permitido, simulación sin solicitud, error de cálculo y estados pendiente/resuelto.

## Retribución flexible y beneficios

Familias `p6` (beneficios/detalle/anexo), `p7` (selección/simulación), `p8` (solicitud/acciones), `p9` y páginas de detalle/histórico. La asignación exacta la determinan nodos y enlaces del [índice](README.md).

El [manual, PDF 42 y 45](../../referencias/manuales.md#retribución-del-empleado), distingue planes, beneficios actuales/futuros/históricos, cobertura familiar, costes empleado/empresa y documentos. La pantalla aplica flags de beneficio obligatorio/core: algunas selecciones quedan marcadas y deshabilitadas. Dependen del plan, no de una preferencia local.

Recorrido: plan/beneficio → detalle/costes → coberturas/beneficiarios → simulación → solicitud → estado → histórico/anexo. Disponibilidad, fechas y límites requieren P02/P04. No presentar simulación como beneficio contratado.

## Variantes y aceptación

Leer versiones de cada fichero; no hay equivalencia IBER=COLL demostrada para todo el dominio. Comparar consulta, formulario, controlador, devolución y documentos. Aceptar cuando acceso económico, catálogos, campos condicionales y estados reales estén reproducidos. Todas las escrituras requieren alcance aprobado; documentarlas no autoriza ejecutarlas.
