# SPEC — Cuadrar nómina

Estado: **especificación documental; funcionalidad no implementada**.
Fecha: 2026-10-26. Propuesta de acción `payroll.reconcile`,
ruta `/tools/payroll/cuadre`, módulo **Nóminas** de Inicio.

## 1. Objetivo y lectura para la implementación

Automatizar las tablas dinámicas, cruces, diferencias y preparación de la
revisión del cuadre mensual de nómina. La persona responsable elige las
ejecuciones y aporta las fuentes externas; la herramienta compara toda la
población disponible y presenta coincidencias, diferencias, ausencias de
datos y motivos acreditados o pendientes. No calcula ni corrige la nómina ERP.

Orden de lectura: [AS_IS](AS_IS.md), esta SPEC, [TO_BE](TO_BE.md),
[WORKFLOW](WORKFLOW.md), [ARCHITECTURE](ARCHITECTURE.md),
[ROADMAP](ROADMAP.md) y [OPEN_QUESTIONS](OPEN_QUESTIONS.md).

**H** designa un hecho de vídeo/código, **I** una inferencia y **P** una decisión
de diseño propuesta en esta entrega. Los identificadores E remiten a la matriz
temporal de AS_IS; C identifica controles y Q dependencias pendientes.

La especificación permite implementar el núcleo y los controles cuyo contrato
se acredite. **No permite dar por cerrados los adaptadores de originales,
devengos proporcionales o motivos automáticos todavía desconocidos.** Esos
controles deben conservar el estado pendiente hasta cumplir su puerta de
aceptación; no se rellenarán con aproximaciones silenciosas.

### Alcance

- H: cuadre de nómina con informe normal y fuentes independientes (E02–E24).
- P: consultas de ejecuciones ya guardadas, comparación determinista,
  importación de fuentes para lectura, revisión manual y exportación Excel.
- P: v1 sin IA, nuevas escrituras ERP, RPA de escritorio, lectura de correo,
  login a proveedores, publicación de ficheros ni tareas programadas.
- H: contabilidad, seguros sociales, modelos 111/190 y proceso completo de
  remisión del plan de pensiones no están explicados; quedan fuera (E25).
- P: no persistir nuevos datos personales ni resultados en SQLite en v1.
  El historial disponible es el de ejecuciones ERP; el expediente se descarga.

## 2. Actores, entradas y selección de fuentes

Usuario operativo de RRHH con sesión Meta4 válida y sociedad activa validada
por el servidor. Reutilizar el mismo modelo de acceso que Resultados de nómina;
no derivar permisos de ser responsable del portal ni inventar roles. Confirmar
con el propietario el acceso a esta nueva acción antes de habilitarla (Q10).

### Ejecuciones de nómina

- H: CYC muestra `01_C`; IBER/COLL se explican con `01` (E05).
  La correspondencia se configura en código tipado por sociedad y se contrasta
  con el catálogo real; no sustituir un identificador ausente por el otro.
- H: reutilizar `listPayrollReportRuns`, `getPayrollReportRun`,
  `PayrollReportRunKey` y la decodificación existente del BLOB. La clave contiene
  informe, instante de ejecución, fecha de paga y frecuencia; la sociedad sale
  del contexto operacional, nunca del cuerpo de la petición.
- P: el usuario selecciona una ejecución actual y una anterior ordinarias,
  con detalle de fecha de paga, frecuencia, ejecución y población. Mostrar
  tipo/filtros solo cuando se acrediten; en otro caso, indicar que no constan
  y pedir confirmación del alcance (Q02).
  Proponer la más reciente compatible, **exigir confirmación explícita** y
  permitir elegir otra. No elegir por fecha de creación global ni unir varias
  ejecuciones del mismo periodo.
- P: anterior por defecto es el mes natural anterior al elegido, incluido
  diciembre al cambiar de año. Las fechas reales se obtienen del catálogo:
  no fijar día 20/25 ni equiparar mes con identificador de paga.
- P: un informe no vacío no acredita que esté completo. Mostrar personas
  distintas, filas, diferencias de población y advertencia de filtros no
  recuperables; confirmar alcance de ambas fuentes. No inferir altas/bajas
  laborales solo por aparecer/desaparecer en el informe (E06; Q02).
- P: sin anterior se permiten controles externos del actual; los
  intermensuales quedan pendientes. Sin actual válido no se analiza.

### Fuentes externas

P: categorías independientes: Mercer, colectivo de teletrabajo, comisiones,
apartamentos/grupo empresa, ausencias/compensación de comidas, tarjetas,
excesos, calendario de anticipos, aniversarios y aportación personal al plan.
Una categoría puede incluir varios ficheros o bloques de un mismo libro.

P: admitir lectura `.xls`, `.xlsx` y `.csv` mediante las dependencias actuales;
no ejecutar Excel, macros, fórmulas, vínculos externos ni contenido activo.
V1 de anticipos usa un Excel estructurado con cuotas por mes; los PDF quedan
como evidencia externa y su importación automática para otra fase (E20).

P: cada adaptador tendrá versión, firma de cabeceras, hoja/bloque, fila de
cabecera, columnas por índice/ocurrencia, unidades, signos, fechas y reglas de
agregación. No detectar conceptos por semejanza libre del texto. Si falta
perfil o cambia la estructura, mostrar vista previa y bloquear ese adaptador
hasta validarlo contra un original (Q01). El usuario no envía SQL ni fórmulas
ejecutables. La entrega inicial de cada perfil incluye plantilla de entrada
normalizada para los campos del control, con matrículas textuales y valores
numéricos; no exigir transcripción mensual cuando el original tenga contrato.

P: registrar en memoria el hash SHA-256, categoría, periodo efectivo,
identificador lógico de fuente, hoja/bloque/fila y versión del adaptador.
Mismo hash y categoría no se suma dos veces. Documentos distintos de
apartamentos pueden aportar cuotas legítimas de una misma persona (E14).
Una nueva versión de un mismo documento sustituye a la anterior tras
confirmación; no se añade automáticamente.

P: límites iniciales, configurados en constantes y probados: 20 ficheros,
8 MiB por fichero, 32 MiB por petición, 100.000 filas por fichero y dos millones
de celdas en el conjunto. Rechazar antes de calcular si se exceden. Controlar
también la expansión descomprimida de XLSX (128 MiB total por petición).
Son límites de implementación propuestos, no necesidades expresadas en vídeo.

## 3. Motor común de comparación

### Identidad, periodo y magnitudes

- P: clave interna `(sociedad, matrícula textual, periodo, control, métrica)`.
  Conservar ceros iniciales; quitar únicamente el apóstrofo de formato de texto
  que ya interpreta el lector del informe. Nunca unir por nombre o convertir
  todas las matrículas a `Number`.
- P: un ID numérico externo que perdió ceros solo se resuelve mediante una
  correspondencia única acreditada con el catálogo de la sociedad; cualquier
  ambigüedad queda sin vincular. Conservar ID original y resuelto en evidencia.
- P: usar unión completa de personas/fuentes, no cruce por posición ni solo
  intersección. Mostrar «solo en anterior», «solo en actual» y «solo en fuente».
- P: agregar importes del mismo concepto por persona y paga, conservando filas
  de origen y periodo de alta/rol si existen. No contar subtotales de hojas
  derivadas como empleados ni deduplicar filas de nómina solo por matrícula.
- P: porcentajes no se suman. Valores repetidos idénticos pueden consolidarse;
  valores distintos entre tramos quedan «no comparable» hasta acreditar su
  selección o ponderación. No reutilizar `buildPayrollSummary` para el IRPF.
- P: `null`, vacío desconocido, columna ausente, fórmula sin resultado y error
  de Excel no son cero. Solo un cero explícito o una ausencia con semántica de
  cero acreditada en el adaptador permite una comparación numérica.
- P: mantener precisión decimal original, sumar antes de redondear y comparar
  con aritmética decimal determinista implementada con enteros escalados
  (`bigint`, convertido a string en DTO). No usar igualdad binaria de `number`.

### Diferencias y revisión

P: delta de comparación mensual = **actual − anterior**. Para fuente externa
o cálculo = **nómina − esperado**, después de aplicar la convención de signos
de esa métrica. Mostrar signo, unidad y ambos operandos. No aplicar `abs` a
los importes: solo a la magnitud usada para ordenar o comprobar tolerancia.

P: tolerancia inicial monetaria de 0,01 EUR, identificada como propuesta y
visible; porcentaje, 0,01 puntos porcentuales. Comparar a precisión conservada,
incluir igualdad en tolerancia (`abs(delta) <= tolerancia`) y mostrar la
diferencia original cuando sea menor de un céntimo. Un perfil validado puede
exigir otra precisión; cambiarla obliga a recalcular. No ocultar filas pequeñas
ni sumar tolerancias por empleado para aprobar el total. Q03 debe contrastar
estos defaults con el libro original.

P: separar dos ejes:

| Eje      | Estados                                                                         | Significado                                      |
| -------- | ------------------------------------------------------------------------------- | ------------------------------------------------ |
| Cálculo  | Coincide / Con diferencia / Falta fuente / No comparable / Error / No aplicable | Resultado determinista del control.              |
| Revisión | Pendiente / Diferencia justificada / Requiere corrección manual                 | Decisión de la persona revisora, con comentario. |

Una diferencia justificada conserva delta y estado calculado. «No aplicable»
exige una regla acreditada o declaración explícita registrada; no se asigna
automáticamente al faltar un fichero. Un error en Mercer no impide calcular
Fijos, pero impide presentar el expediente completo como cuadrado.

P: las causas se muestran como **evidencia contextual**: baja, incidencia con
vigencia, cambio salarial/categoría o anotación externa. Sin lectura histórica
y vínculo temporal verificados, usar «Motivo desconocido — pendiente de
revisión». No afirmar una causa económica por coexistencia de una IT (E04).
Las anotaciones manuales se diferencian de las evidencias del servidor.

## 4. Catálogo funcional de controles

Todos los nombres de columnas siguientes proceden de las capturas; su índice,
ocurrencia y correspondencia completa necesitan el original/perfil validado.

| ID  | Control y fuentes                      | Operación de v1 / condiciones                                                                                                                                                                                                                                       | Evidencia y dependencia                                                       |
| --- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| C01 | Fijos, actual/anterior                 | Comparar «Total conceptos fijos» por persona; altas, bajas e importes distintos conservan estado de revisión. No recalcular el salario teórico.                                                                                                                     | E03–E06; Q02/Q04.                                                             |
| C02 | IRPF, actual/anterior                  | Comparar «Porcentaje I.R.P.F.» en puntos porcentuales; destacar magnitud sin umbral de anomalía inventado. Multiplicidad de porcentajes queda no comparable.                                                                                                        | E08; Q01/Q03.                                                                 |
| C03 | Mercer/Flex                            | Contrastar mensuales del proveedor con seguro empresa, descuento médico, especie, guardería, transporte, renting y ahorro según perfiles separados. Nunca anual contra mensual ni todos los seguros contra una sola columna.                                        | E09–E10; Q01/Q05. Sin perfil validado: pendiente por producto.                |
| C04 | Pagas extras                           | En CYC comparar base + experiencia + CAI del mes con extra correspondiente para casos de devengo completo acreditado. Mostrar prorrata y casos excepcionales; sin histórico suficiente, no aprobar proporcionalidades. IBER/COLL requieren fórmula propia validada. | E11; Q06. Junio 1ª/diciembre 2ª/octubre 3ª solo como regla observada de CYC.  |
| C05 | Teletrabajo                            | Comparar «Importe abono teletrabajo» con esperado del colectivo externo en periodo devengado anterior. Mantener colectivo independiente del indicador ERP. Si fuente solo acredita pertenencia, comprobar cobertura y dejar importe pendiente de tarifa/calendario. | E12; Q07. No fijar 44,8 ni 2,24 como constantes universales.                  |
| C06 | Comisiones                             | Comparar kilometraje exento/no exento y «Cancelacion Prov (Dieta y KM) Importe» con fichero generado en ventana acordada. Carga de Valores aporta matrícula/artículo/importes; no comparar cantidad de kilómetros con dinero.                                       | E13; Q08. V1 usa fichero hasta acreditar servicio/SQL de origen.              |
| C07 | Apartamentos                           | Sumar cuotas del mes por persona en todos los bloques/archivos válidos y contrastar con «Apartamentos grupo empresa». Detectar duplicación de archivo y conservar varias estancias.                                                                                 | E14; Q01. No fraccionar de nuevo el coste total.                              |
| C08 | Turnos/festivos                        | Comparar ambos complementos entre meses, con unión de personas y revisión de cambios de adscripción.                                                                                                                                                                | E15; Q04. No inferir que toda variación es error.                             |
| C09 | Compensación comida                    | Contrastar importe del 01 con esperado de ausencias/días/tarifa del mes vencido, únicamente al acreditar regla. Sin tarifa o selección de columna de ausencias: control de cobertura/unidades, importe no comparable.                                               | E16; Q09. No restar días directamente a euros.                                |
| C10 | Tarjeta comida                         | Comparar exento + no exento con neto de carga/descarga del fichero. La validación adicional del reparto exige fórmula original y parámetros vigentes; mantenerla pendiente por separado.                                                                            | E17; Q09. Fórmula visible `L9/12,1` no acredita todos los cálculos.           |
| C11 | Excesos                                | Comparar «Exceso líquido paga anterior» con anotación independiente del periodo afectado, signo y destino.                                                                                                                                                          | E18; Q03/Q01. No reconstruir saldo anterior sobrescrito.                      |
| C12 | Anticipos                              | Sumar cuotas expresamente previstas para el mes en calendario estructurado y comparar «Anticipos a descontar»; mantener anticipo de vehículo como concepto distinto.                                                                                                | E20; Q01/Q11. Admitir cuotas no uniformes y meses sin cuota.                  |
| C13 | Aniversarios                           | Cruzar lista anual, aniversario 25/40 y mes debido con «Paga 25 años» / «Paga 40 Años»; contrastar salario base de referencia cuando esté acreditado. Detectar esperado sin pago y pago sin beneficiario.                                                           | E21; Q12. Fecha antigüedad, no nacimiento; validar entidades/convenios.       |
| C14 | Plan de pensiones, aportación personal | Contrastar «Aportación plan pensiones» con celda del mes del calendario externo; respetar marzo–diciembre y ajustes aportados.                                                                                                                                      | E22; Q13. No recalcular límite anual ni aportación de empresa.                |
| C15 | Otros conceptos mensuales              | Comparar lista tipada y validada de columnas monetarias del 01 con anterior. Incluir cada columna una sola vez y declarar cobertura.                                                                                                                                | E24; Q14. No inferir algoritmo de «Gimnasio» o «Fuera nómina» por su pestaña. |

P: C01/C02/C08/C15 son informes de cambios; C03/C05/C06/C07/C09/C10/C11/C12/C14
son contrastes independientes; C04/C13 añaden cálculo condicionado. Cada
subcomprobación informa su cobertura. Una coincidencia en el total no
compensa diferencias de signo contrario entre personas.

### Ejemplos sintéticos de aceptación

Los siguientes valores son inventados para explicar la propuesta, no datos
del vídeo ni reglas aprobadas de nómina:

| Caso | Entradas                                                                                                           | Resultado exigido                                                                                 |
| ---- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| C01  | Matrícula textual `000101`; fijo anterior 2.000,00 EUR y actual 2.050,00 EUR; sin histórico explicativo.           | Delta +50,00 EUR, «Con diferencia», revisión pendiente y motivo desconocido.                      |
| C02  | `000102`: anterior 15,00 % y actual 15,50 %.                                                                       | +0,50 pp; no +0,50 EUR ni suma de porcentajes.                                                    |
| C07  | `000103`: dos estancias con cuotas de 30,00 y 20,00 EUR; descuento ERP −50,00 EUR. Perfil acredita signo negativo. | Esperado normalizado −50,00 EUR, delta 0,00. El mismo archivo repetido no se suma otra vez.       |
| C10  | `000104`: no se aporta pedido; ERP contiene dos importes de tarjeta.                                               | «Falta fuente» para el contraste independiente; no asumir neto cero ni validarlo contra sí mismo. |

## 5. Flujo, interfaz y resultados

P: una pantalla con tres pasos: **Elegir nóminas → Aportar fuentes → Revisar
cuadre**. Cabecera «Cuadrar nómina», alcance de sociedad existente, resumen
del periodo y botón de análisis explícito. Mostrar los controles pendientes
con su dependencia; no ocultarlos tras una apariencia de éxito.

P: tabla principal por control y persona: matrícula, nombre mínimo necesario,
concepto, nómina, referencia/esperado, diferencia/unidad, estado y motivo.
Filtros por control, estado, revisión y matrícula/nombre; ordenar diferencias
por magnitud dentro de su unidad. No sumar euros y puntos porcentuales.
Detalle accesible con operandos, filas fuente, regla/versión y anotación.

P: resumen con recuentos de personas y controles completos/pendientes,
diferencias justificadas/sin revisar y fuentes requeridas. «Sin diferencias
en los controles evaluados» solo si corresponde; nunca equivale a nómina
aprobada, pagada o validada fiscalmente. La aprobación sigue siendo humana.

P: subida tardía o sustitución de una fuente recalcula los controles afectados;
cambio de nómina, tolerancia o regla invalida los resultados dependientes.
Conservar anotación solo si no cambian clave, operandos ni huellas de evidencia.
Cambiar sociedad, cerrar sesión o abandonar la pantalla elimina estado sensible;
descartar también respuestas tardías. Advertir de revisión sin exportar antes
de una navegación interna destructiva; no prometer conservación tras recarga.

P: Excel `.xlsx` con «Resumen», «Fuentes», «Controles», «Diferencias» y
«Revisión», incluyendo versión de reglas, claves y huellas de entradas,
periodos, unidades, motivos y pendientes. Solo incluir datos necesarios;
sin NIF, IBAN, direcciones, tarjetas, PDF firmados ni copias completas de
fuentes. Texto se escribe como texto, sin fórmulas ejecutables de usuario.
El Excel tiene valores ya calculados; no necesita macros ni conexiones.

## 6. Contratos técnicos propuestos

Son interfaces futuras, **no endpoints existentes**. Mantener intactos los
tipos públicos de Resultados de nómina; añadir tipos propios de conciliación.
Implementación y transporte concretos: [ARCHITECTURE](ARCHITECTURE.md).

| Tipo                    | Contenido mínimo                                                                                                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ReconciliationRequest` | Periodo `YYYY-MM`, claves actual/anterior opcional, categorías de fuentes y perfil/versiones permitidos, tolerancias y confirmación de población. No sociedad, usuario, ruta del sistema ni SQL. |
| `SourceManifest`        | Hash servidor, origen ERP/archivo, periodo efectivo, versión de perfil, hoja/bloque/filas y columnas por índice/ocurrencia.                                                                      |
| `ReconciliationValue`   | Decimal como string, unidad `EUR`/`percentage-point`/`day`/`unit`, presencia explícita y referencias a operandos.                                                                                |
| `ReconciliationFinding` | ID determinista, C01–C15/subcontrol, matrícula textual, operandos/delta, estado de cálculo, evidencias y motivo contextual separado de revisión.                                                 |
| `ReconciliationResult`  | Huella/versiones, periodo y contexto seguro, cobertura, fuentes, hallazgos y recuentos. Sin tokens ni filas personales innecesarias.                                                             |
| `ReviewAnnotation`      | ID de hallazgo + huella de evidencia, estado manual y comentario; el servidor añade actor/fecha al exportar. No permite cambiar importes ni resultado calculado.                                 |

P: sin migraciones SQLite ni nuevo store global. Las entradas se mantienen
solo en memoria durante la visita/petición. El servidor vuelve a validar sesión,
sociedad, claves, ficheros y perfiles en cada operación. Al exportar vuelve a
calcular y exige que las huellas coincidan; si cambió la fuente, responde 409
y obliga a revisar el análisis nuevo.

## 7. Aceptación

1. Ninguna petición acepta sociedad operacional del navegador ni lee otra
   sociedad. Cookie inválida: 401; sesión debug no opera con PeopleNet.
2. Mismos datos, perfiles y tolerancias producen los mismos valores y hallazgos;
   no hay llamadas al modelo, SOAP de cálculo, proveedores ni escrituras ERP.
3. Casos sintéticos incluyen orden diferente, ceros iniciales, altas/bajas de
   población, varias filas por persona, porcentajes duplicados contradictorios,
   precisión decimal, signo y ausencia de fuente. No se pierden filas.
4. Los quince controles aparecen con cobertura explícita; solo los acreditados
   se presentan como evaluados. Errores/casos desconocidos nunca se aprueban.
5. Un expediente revisado contra originales reproduce los cruces manuales y
   conserva discrepancias conocidas, incluidas excepciones, sin ajustar valores
   para que cuadren. C04 proporcional, C09 y reparto C10 no se aceptan sin Q06/Q09.
6. Excel coincide con la pantalla y no exporta datos sensibles ajenos al cuadre.
   Fuentes cambiadas invalidan la revisión y bloquean exportación obsoleta.
7. Interfaz clara/oscura, teclado y 1440/1024/768/390 px, sin overflow de página;
   tablas anchas con desplazamiento contenido y nombre accesible.
8. Objetivo técnico propuesto: caso sintético de 650 personas y fuentes dentro
   de límites en menos de 30 s en el servidor de destino; medirlo en VM antes
   de prometerlo. No es un benchmark obtenido con este análisis.

El cierre de cada fase requiere las pruebas de [ROADMAP](ROADMAP.md).
Esta entrega documental no acredita acceso real a PeopleNet ni validación
contra los libros originales que siguen pendientes.
