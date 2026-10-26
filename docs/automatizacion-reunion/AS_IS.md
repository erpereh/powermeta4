# Proceso actual: cuadre mensual de nómina

Fecha del análisis: 2026-10-26. Fuente: `revision_video/reunion.mp4`,
duración **01:10:40.333**. Los tiempos de este documento empiezan en el
primer fotograma del fichero, no en el contador de la reunión de Teams.

## Cómo leer la evidencia

- **H-A**: explicación audible, contrastada mediante transcripción local.
- **H-V**: operación, campo o fórmula legible en pantalla.
- **I**: inferencia que necesita confirmación; no constituye una regla aprobada.
- **P**: propuesta para la herramienta; se desarrolla en [TO_BE](TO_BE.md).

Se transcribió todo el audio en 15 segmentos, se revisaron 848 capturas
periódicas, 169 capturas de cambios y 46 capturas exactas ampliadas. Las
capturas periódicas orientan la navegación; los hitos importantes se
contrastaron con capturas a tiempo exacto. No se inspeccionaron los 127.210
fotogramas individualmente. No se ejecutó OCR automático: rótulos y fórmulas
se leyeron directamente en los fotogramas ampliados.

La grabación permite reconstruir la operación, pero no recuperar un libro
Excel completo ni todas sus fórmulas. No se han recibido los ficheros originales
que se solicitan al final de la reunión. Una explicación del operador no
equivale a una regla fiscal o de convenio validada.

## Contexto, actores y aplicaciones

RRHH introduce incidencias durante el mes y revisa los resultados antes del
cierre/pago. PeopleNet calcula la nómina; un libro Excel añade tablas dinámicas,
búsquedas por matrícula, diferencias y anotaciones. Se usan el explorador de
Windows, carpetas compartidas, correo/plataformas de proveedores y Acrobat
para solicitudes de anticipos. Teams solo contiene la demostración.

Fuentes independientes: Mercer, colectivo de teletrabajo, comisiones de
servicio, comité/grupo de empresa, ausencias para comidas, pedido/recarga de
tarjetas, anotaciones de excesos, solicitudes de anticipos, lista anual de
aniversarios y calendario de aportaciones personales al plan de pensiones.

El trabajo ocupa, según la explicación, uno o dos días. Se revisan todos los
empleados en los controles descritos salvo pagas extras, donde se reconoce
muestreo manual (45:25–46:01). No hay una medición independiente del tiempo.

## Recorrido y matriz de evidencias

| ID  | Tiempo                | Qué se explica y qué se observa                                                                                                                                                                                                                                                                        | Resultado / límite                                                                                                     |
| --- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| E01 | 00:00–00:49           | Se mencionan contabilidad y PPC; a 00:42 se escoge empezar por el cuadre de nómina.                                                                                                                                                                                                                    | H-A. Otros procesos no quedan especificados.                                                                           |
| E02 | 00:55–01:54           | Se abre la carpeta y un libro de nómina. Se introducen incidencias mensuales, se acumula y calcula con IRPF, y se obtiene el informe 01. Excel contiene todos los conceptos y hojas añadidas para los cuadres.                                                                                         | H-A/H-V. Generar el informe y calcular nómina son pasos diferentes.                                                    |
| E03 | 01:54–04:34           | Hoja «Fijos»: tablas dinámicas con matrícula, nombre, alta/baja, categoría y total fijo de octubre frente a septiembre. A 04:05 se ve `=A5-I5`: M controla identidad; N contiene diferencia de importes; O contiene comentarios.                                                                       | H-A/H-V. El control por posición de fila es frágil; los comentarios los escribe la operadora.                          |
| E04 | 04:44–06:37           | Se buscan motivos de las diferencias: finiquito, IT, maternidad/paternidad y finalización de permisos, incremento, categoría o reducción de jornada. Lo desconocido debe quedar amarillo y pendiente para revisión humana.                                                                             | H-A. Un motivo plausible no acredita que explique el importe.                                                          |
| E05 | 06:43–08:18           | PeopleNet → Nómina → Informes de Nómina → Generación de resultados. Catálogo visible a 08:05: `01_C`, «Informe Normal CYC», y `01`, «Informe Normal». Se explica que IBER/COLL usan 01.                                                                                                                | H-A/H-V. CYC está confirmado visualmente; validar catálogo y contrato de IBER/COLL en su contexto.                     |
| E06 | 08:28–10:59           | El anterior se recupera del Excel guardado en red. Se discute usar la última ejecución, con advertencia de ejecuciones parciales. El formulario permite fechas inicio/fin, imputación/pago, normal/retroactivas/ambas, moneda y filtros por empresa/centro/unidad/empleados.                           | H-A/H-V. «Última» no garantiza población completa.                                                                     |
| E07 | 11:00–16:49           | Discusión de recálculos, cierre de seguros y pagas de ajuste. Se muestra el selector de tipo de paga. Se plantea probar otro procedimiento en enero de 2027.                                                                                                                                           | H-A/H-V. Debate e intención futura; no autorización para recalcular ni cambiar el procedimiento.                       |
| E08 | 17:33–19:25           | Hoja «IRPF»: compara **porcentaje** de IRPF entre meses; filtra variaciones grandes y escribe motivo. A 19:18 se ven J porcentaje, K control de identidad, L diferencia y M comentario.                                                                                                                | H-A/H-V. No se establece un umbral; la unidad es puntos porcentuales.                                                  |
| E09 | 19:41–20:26           | Mercer entrega fichero por correo y plataforma. PeopleNet → Tablas de valor → Importación CSV. A 20:15 se ven paga, fechas, ruta, cabecera y prioridad.                                                                                                                                                | H-A/H-V. La carga ERP es un prerrequisito del proceso; no se ejecuta en la demostración.                               |
| E10 | 20:53–24:01           | Se copia Mercer a su hoja y se cruza con la tabla dinámica «Flex». Cabeceras mensuales y anuales distintas; comparación de seguro empresa, descuento médico y especie. Se abre un log de importación. Se propone subir el fichero a la nueva herramienta.                                              | H-A/H-V. El log de carga no demuestra el cuadre. Hay signos opuestos, fracciones de céntimo y `#N/D`.                  |
| E11 | 24:15–28:41           | «P.extra»: suma salario base + experiencia + complemento de adaptación individualizado; fórmula visible a 26:00 `=G3+H3+I3`. Compara con extra del mismo mes; también revisa prorrata.                                                                                                                 | H-A/H-V. Transiciones 15→12 pagas, categoría y permisos afectan al devengo; fórmula proporcional completa no mostrada. |
| E12 | 28:51–35:05           | «Teletrabajo»: 80 % frente a 40 %, pago a mes vencido y fichero «Colectivo afectado tecnología teletrabajo». Se explica nuevo indicador 2 en valores del periodo. Se mantienen Excel y BUSCARV para detectar pagos o indicadores omitidos.                                                             | H-A/H-V. A 34:30 se ve búsqueda exacta por matrícula. La fuente externa tiene una función de control independiente.    |
| E13 | 35:20–39:04           | PeopleNet → Tablas de valor → Generar Fichero de Comisión de Servicios. Ejemplo del 16 de septiembre al 15 de octubre, «Solo consulta», ruta de salida. Excel tiene «Carga de Valores», «Detalle Comisiones» y «Desglose Comisiones». Compara kilometraje exento/no exento y cancelación de provisión. | H-A/H-V. Se advierte expresamente que podría llamar a un servicio externo y no leer solo SQL; contrato sin acreditar.  |
| E14 | 39:07–43:26           | «Apartamentos»: comité envía varios archivos por correo, con matrícula, coste y cuotas por mes. Una persona puede tener varias estancias y aparecer en más de un archivo. Se carga la cuota del mes y se compara con el 01.                                                                            | H-A/H-V. Se suma la cuota pertinente, no el coste entero. Los duplicados por persona pueden ser legítimos.             |
| E15 | 43:32–44:14           | «Turnos»: comparación mensual de complemento de turnos y trabajo en festivos; altas/bajas del colectivo deben explicarse.                                                                                                                                                                              | H-A/H-V. No se presenta un recálculo teórico de turnos.                                                                |
| E16 | 44:22–48:20           | «Comp.comida»: compensación por nómina a mes vencido. Fichero de compañera desde sistema de fichajes, con ausencias y motivos; carga masiva de días antes de acumular. Se cruza con el importe pagado.                                                                                                 | H-A/H-V. El nombre del sistema no se reconoce con seguridad. Días e importe son magnitudes distintas.                  |
| E17 | 48:28–50:24           | «Tarjeta comida»: fichero de pedido/recarga para portal de Pluxee y columnas del 01 de importe exento/no exento. En la hoja hay carga, descarga y neto. A 50:20 se ve `=L9/12,1`, unidades y concepto 710430.                                                                                          | H-A/H-V. Fórmula visible no basta para acreditar todo el reparto fiscal ni su vigencia.                                |
| E18 | 51:44–52:44           | «Excesos»: anotaciones de recálculos posteriores al pago, persona, importe y motivo a compensar después. Columna original «Exceso líquido paga anterior»; positivos y negativos.                                                                                                                       | H-A/H-V. El original previo puede perderse al recalcular; no reconstruirlo por suposición.                             |
| E19 | 52:48–55:25           | Se describe «Cuadrar nómina»: aportar fuentes, contrastar con 01 y revisar diferencias/motivos. Se menciona tentativamente corregir en automático.                                                                                                                                                     | H-A. La corrección queda en «ya veremos»; no es autorización de escritura.                                             |
| E20 | 55:28–01:00:24        | «Anticipos»: solicitudes firmadas, PDF escaneado y textual; descuento ya informado por periodo. Se propone Excel estructurado o PDF textual. A 56:15 se ven cuotas dobles en meses de extras; a 01:00:15, cuotas solo en meses concretos.                                                              | H-A/H-V. No hay cuota uniforme ni división automática del total por doce.                                              |
| E21 | 01:00:28–01:02:24     | «25-40»: lista anual de beneficiarios, empresa y antigüedad; se compara pago de 25/40 años con salario base. PeopleNet lo calcula automáticamente.                                                                                                                                                     | H-A/H-V. Lista visual incluye entidades ES/PT. No confundir antigüedad con nacimiento o fecha de alta.                 |
| E22 | 01:02:28–01:03:34     | Fichero de aportaciones personales extraordinarias, preparado en febrero, columnas marzo–diciembre. Compara la columna del mes con «Aportación plan pensiones» del 01. Libro rotulado «Fichero PPSE»/«PPSE»; audio dice PPC.                                                                           | H-A/H-V. Conservar calendario aportado, incluido diciembre distinto; aclarar siglas.                                   |
| E23 | 01:03:38–01:06:08     | Se solicitan los originales externos sin alterar estructura/cabeceras, y el libro de cuadre terminado.                                                                                                                                                                                                 | H-A. Esos adjuntos no acompañan al vídeo disponible.                                                                   |
| E24 | 01:06:24–01:07:02     | «Conceptos varios»: comparar con mes anterior las columnas pertinentes; las de carga externa, con su fuente. Se ven cuota grupo empresa, anticipo vehículo y ayudas/complementos.                                                                                                                      | H-A/H-V. No comparar indiscriminadamente columnas de texto, fechas, porcentajes e importes.                            |
| E25 | 01:07:14–01:09:56     | Quedan para otras reuniones seguros sociales, 111, 190 y contabilidad. A 01:08:40 se confirma empezar por nómina. Se reiteran los adjuntos pendientes y se despiden.                                                                                                                                   | H-A. Estos otros procesos quedan fuera de la especificación.                                                           |
| E26 | 01:10:00–01:10:40.333 | Termina la compartición; Teams/chat y conversación residual sin operación nueva de nómina.                                                                                                                                                                                                             | H-A/H-V. Incluido en cobertura, sin requisitos adicionales.                                                            |

## Campos y operaciones leídos en pantalla

Este inventario conserva etiquetas funcionales y fórmulas visibles, sin
matrículas, nombres, importes personales ni rutas corporativas. No sustituye
el esquema completo de los originales ni acredita índices estables.

| Pantalla / fuente              | Campos o fórmula observados                                                                                                                                                                 | Uso y límite                                                                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fijos, 04:05                   | Matrícula/nombre a ambos lados; `=A5-I5`; diferencia y comentario.                                                                                                                          | La resta de matrículas comprueba alineación en ese libro; el nuevo cruce se hará por clave.                                                                |
| IRPF, 19:18                    | «Porcentaje I.R.P.F.», control de identidad, delta y motivo.                                                                                                                                | Porcentaje, no importe retenido.                                                                                                                           |
| Mercer, 21:20–22:15            | «Nº EMPL», «ALTA SIST.», «BAJA SIST.», «BOLSA FLEX»; coste/exento/especie totales y mensuales de seguro de salud; «Seguro Salud Cia Mensual».                                               | Cabecera de varios niveles. Seleccionar mensual y producto, no la primera columna que contenga «salud».                                                    |
| Flex, 22:15–23:15              | «Seguro Salud Empresa», «Desc. Seguro Médico», especie y productos de guardería/transporte/renting/ahorro.                                                                                  | Descuento negativo frente a referencia positiva; hay fracciones de céntimo y errores de búsqueda. Correspondencias completas pendientes.                   |
| P.extra, 26:00                 | Salario base, «Complemento Experiencia Importe», «Complemento Adaptación Individualizado»; `=G3+H3+I3`.                                                                                     | Suma simple visible para el caso explicado; no acredita la fórmula proporcional.                                                                           |
| Teletrabajo, 33:20–34:30       | «Importe abono teletrabajo»; búsqueda exacta por matrícula al colectivo; comparación de las columnas BP/BQ.                                                                                 | Mantener diferencia entre pertenencia, porcentaje y dinero; la explicación menciona indicador 2 sin campo físico.                                          |
| Comisiones, 36:00–38:20        | Hojas «Carga de Valores», «Detalle Comisiones», «Desglose Comisiones». En carga: `id_emp_f`, `id_articulo`, importe, retención, cantidad y varias columnas de totales de dieta/kilometraje. | Hay que leer el original para fijar ortografía/índice y si cada campo representa unidades o euros; no convertir una etiqueta vista en nombre de tabla SQL. |
| Apartamentos, 40:20–43:20      | Matrícula, coste total, columnas de cuotas por mes y varios bloques; «Apartamentos grupo empresa» en el informe.                                                                            | Seleccionar cuota del periodo y sumar estancias legítimas de todos los archivos.                                                                           |
| Comida por nómina, 46:30–48:00 | «Nº Ausencias»/«Motivo» y otro bloque «Días descuento SEPTIEMBRE»/motivo; «Compensacion Comida».                                                                                            | La columna de ausencia efectiva y su valoración requieren original y regla.                                                                                |
| Tarjeta, 49:10–50:20           | «CARGA», descarga de septiembre y neto; «Importe Tarjeta Exento», «Importe Tarjeta No Exento»; `=L9/12,1`, concepto 710430.                                                                 | Se observa una división de unidades; no se recupera de ella toda la distribución de las columnas derivadas.                                                |
| Excesos, 52:20                 | «Exceso líquido paga anterior», importes con signo y hasta cuatro decimales.                                                                                                                | Nota externa conserva el motivo del recálculo y el periodo de destino.                                                                                     |
| Anticipos, 56:15 y 01:00:15    | Solicitud firmada, calendario de cuotas dobles/irregulares; «Anticipos a descontar» y anticipo de vehículo distinto.                                                                        | Importe total no basta para deducir cuota mensual.                                                                                                         |
| 25-40, 01:00:40–01:01:05       | «Paga 25 años», «Paga 40 Años», SB; lista con empresa, matrícula, nacimiento y antigüedad.                                                                                                  | Nacimiento aparece en la fuente, pero no es la fecha para el aniversario laboral ni debe importarse sin necesidad.                                         |
| Plan, 01:03:25                 | Aportación personal, límite por categoría, columnas marzo–diciembre y ajustes.                                                                                                              | Se compara el calendario aportado; no se inventa cálculo del límite.                                                                                       |

## Reglas y excepciones que sí se desprenden de la reunión

1. La matrícula es la clave del cruce; el nombre sirve como comprobación humana.
   La propia hoja añade un control para evitar comparar personas distintas.
2. Hay tres familias de control: comparación intermensual, contraste con fuente
   independiente y comprobación de un cálculo. No comparten necesariamente signo,
   periodo, agregación o unidad.
3. Teletrabajo y compensación de comidas tienen desfase temporal. Comisiones
   usan una ventana 16–15 en el ejemplo. Las cuotas de apartamentos, anticipos
   y plan de pensiones dependen del calendario de la fuente.
4. Los colectivos pueden entrar/salir; comparar solo intersecciones ocultaría
   omisiones. Las tablas muestran errores de búsqueda, no ceros acreditados.
5. En CYC se mencionan tres extras: junio primera, diciembre segunda y octubre
   tercera. IBER depende del convenio; no se puede trasladar la fórmula sin
   verificarla. Las transiciones de estructura y los permisos exigen más datos.
6. Un importe diferente puede ser correcto. La operadora lo justifica mediante
   conocimiento de incidencias; la automatización necesitará evidencia adicional
   o revisión humana, sin fabricar una explicación.

## Límites visuales y discrepancias conservadas

- El audio confunde letras de columnas; la imagen resuelve M/N/O en Fijos y
  K/L/M en IRPF. El software futuro no debe depender de esas letras.
- La captura de Flex muestra importes mensuales con muchos decimales, descuentos
  negativos, importes externos positivos y diferencias de redondeo. No se ha
  acordado una tolerancia ni una regla universal de valor absoluto.
- En el libro se ven pestañas «Fuera nómina», otra hoja de Flex, «Forzar mat-pat-cat»,
  «Gimnasio» y «Grupo empresa». Su presencia no acredita un algoritmo adicional;
  deben revisarse en el libro original antes de definir controles específicos.
- El generador de comisiones se denomina «Multisociedad». Esto no autoriza a
  ampliar el alcance de powermeta4 más allá de su sociedad activa.
- Las referencias a 11 €/día, 12,1 en una fórmula, 2,24 de teletrabajo, seis meses
  de apartamentos o un año de anticipo describen la reunión. No son parámetros
  normativos universales ni se han validado contra convenio o configuración.

## Cobertura y conservación local

Los segmentos S01–S14 cubren intervalos consecutivos de cinco minutos;
S15 cubre 01:10:00–01:10:40.333. Las transcripciones tienen diez segundos de
solape y una versión consolidada asignada por el punto medio de cada frase.
Los silencios se procesan con detección de voz; no se ha hecho diarización ni
se atribuyen frases a personas por inferencia de voz.

Herramientas locales: FFmpeg 9.0, Python 3.14.6, faster-whisper 1.2.1,
CTranslate2 4.8.4 y modelo `large-v3-turbo` en CUDA `int8_float16`. Se probó
primero un minuto; después se transcribió toda la grabación. La detección de
cambios usó `select='gt(scene,0.08)'`; las capturas periódicas, `fps=1/5`.
La lectura a resolución original se concentró en operaciones y fórmulas.

`revision_video/analysis/manifest.json` conserva huella, parámetros, estados y
referencias; `review.md` recoge el análisis por segmento; `scene-index.json`
conserva los tiempos de los 169 cambios. Todo ese material queda excluido de
Git. Solo se versiona esta reconstrucción anonimizada. Las evidencias E01–E26
son la referencia común para [SPEC](SPEC.md), [TO_BE](TO_BE.md) y
[preguntas pendientes](OPEN_QUESTIONS.md).
