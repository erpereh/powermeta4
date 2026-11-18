# Cuadre de nómina: uso, instalación y validación

Entrega de implementación: 2026-10-27. Se conserva el análisis documental
previo como evidencia, sin reinterpretar sus hechos.

La herramienta `/tools/cuadre-nomina` permite crear expedientes parciales,
guardarlos y completarlos con fuentes posteriores. La sociedad procede de la
sesión; no hay escrituras ERP ni envío de datos al chat o a servicios externos.

## C04: extras de junio y diciembre, IBER y COLL — 2026-11-18 (motor 1.4.0)

Investigación en `M4PRENOMINA` (solo SELECT) con las ejecuciones de junio de 2026
y diciembre de 2025 de las tres sociedades:

- **Precio medio del semestre.** Las extras 1.ª y 2.ª usan `RULE111` de
  `CSP_HRPERIOD_CALC` (desde 2018, sin cambios en 2025–2026): unidades × media de
  `SSP_P_PAGA_EX_n` de los meses cerrados del devengo (junio: enero–mayo;
  diciembre: julio–noviembre; paga ordinaria, revisiones incluidas) y del mes
  actual a `SSP_TOTAL_P_PAGAS`, **sin proyección**. Contraste con extras completas:
  CYC junio 349/351, CYC diciembre 347/347, IBER 57/57 y 57/57, COLL 10/10 y 11/11.
- **Composición del precio.** `SSP_TOTAL_P_PAGAS` suma los conceptos con indicador
  `CSP_IPE_* = 1` (valores por centro de trabajo, `M4SCO_WC_VALUES`, sin cambios
  desde 2014), más la base y la antigüedad estándar. Con columnas del informe:
  CYC = Salario Base + Complemento Experiencia + CAI; **IBER y COLL = Salario Base +
  Antigüedad** (la columna «Plus Convenio» no computa en ningún mes). Se exige
  que los indicadores sean los verificados y que el precio de Meta4 sea igual a la
  suma del informe; si no, la persona queda pendiente (mes incompleto o concepto
  sin columna).
- **Cambio a prorrateada dentro del semestre.** Meta4 no guarda unidades (0) y abona
  aparte días previos / 180 × media de los meses anteriores al cambio, sin redondear
  la fracción. Cuadra 5/5 en diciembre y 1/4 en junio; los otros tres tienen días
  descontados (uno con incapacidad temporal) y quedan pendientes, nunca como
  diferencia.
- **Importe fijado a 0.** Además del precio (`SSP_P_PAGA_EX_n`), una asignación
  individual del propio importe (`SSP_PAGA_EXTRA_n = 0`, IBER desde 2024) anula la
  regla: el esperado es 0 (5 personas en IBER junio).
- **Baja en el mes.** `RULE111` devuelve 0 si `SSP_ES_BAJA` y la extra se abona en el
  finiquito (`SSP_FINIQ_PAGA_n`): pendiente (fin del periodo de `STD_HR_PERIOD`).
- **Regularización al cierre del devengo.** En diciembre, Meta4 recalcula la 3.ª
  extra de quien no la cobra ese mes (importes negativos de 24–62 días):
  pendiente con su motivo, ya no «Con diferencia» (14 en CYC diciembre).
- **Unidades aceptadas.** Con «Acepto las unidades de devengo de Meta4», una extra
  parcial solo se acredita si el importe es unidades × precio medio. Las 5 altas
  de febrero de junio de 2026 no lo cumplen y quedan pendientes.

| C04 (coinciden/diferencias/pendientes) | Motor 1.3.1 | Motor 1.4.0 | 1.4.0 con unidades aceptadas |
| -------------------------------------- | ----------- | ----------- | ---------------------------- |
| CYC junio 2026                         | 445/22/215  | 458/4/220   | 478/4/200                    |
| CYC diciembre 2025                     | 428/29/293  | 441/1/308   | 467/1/282                    |
| IBER junio 2026                        | 1/0/155     | 45/0/107    | 46/0/106                     |
| IBER diciembre 2025                    | 0/0/194     | 40/0/154    | 43/0/151                     |
| COLL junio 2026                        | 0/0/13      | 10/0/3      | 12/0/1                       |
| COLL diciembre 2025                    | 0/0/17      | 10/0/7      | 11/0/6                       |
| CYC octubre 2026 (04/11)               | 453/1/204   | 453/1/204   | 504/1/153                    |

CYC septiembre y agosto, y COLL septiembre, no cambian. IBER octubre pasa de 86 a
90 hallazgos porque una persona tiene el historial modificado en PeopleNet después
del cálculo (dato nuevo, no del motor). Diferencias reales que quedan:

- en CYC junio, una revisión salarial de enero–mayo pagada en junio que Meta4 no
  aplicó a la media, y una extra pagada al 50 % sin configuración que lo explique;
- en junio y diciembre, las 3 prorratas de la fórmula base × 3 / 12, que ya existían.

Las extras 4.ª y 5.ª de IBER (septiembre/octubre, porcentajes 50/150 %) siguen con
la fórmula base y los porcentajes ≠ 100 % pendientes.

## C04: precio medio de la 3.ª extra, precio fijado a 0 y cambios de modalidad — 2026-11-17 (motor 1.3.1)

Investigación en `M4PRENOMINA` (solo SELECT) de las tres cuestiones abiertas de C04
en CYC octubre (ejecución 04/11):

- **Precio medio del año** (20 personas al 82–99 % de la fórmula). La regla
  `SCO_HRPERIOD_CALC2.SSP_PAGA_EXTRA_3` `RULE111` vigente desde 01/10/2026 paga
  *unidades × precio medio del devengo*: suma de `SSP_P_PAGA_EX_3` de los meses
  cerrados de la paga ordinaria (`SCO_ID_PAY_TYPE = '1'`, revisiones incluidas) +
  el mes actual a `SSP_TOTAL_P_PAGAS` + los meses restantes proyectados con él,
  dividido entre los meses. `SSP_TOTAL_P_PAGAS` es exactamente Salario Base +
  Complemento Experiencia + CAI (la fórmula de Calculos.txt). Contraste: 394 de
  395 terceras extras pagadas cuadran al céntimo. Quien tuvo subidas en el año
  cobra la media, no el precio actual: no era un error.
- **Precio fijado a 0** (11 personas con salario base de 13.790–44.351 € y 3.ª
  extra 0). Tienen asignado individualmente `SSP_P_PAGA_EX_1/2/3/5 = 0` en
  `M4SCO_PERIO_VALUES` (desde 2017, 2020 o 2025): nunca cobran extras separadas.
  El esperado es 0.
- **Cambio a prorrateada dentro del año** (5 personas con extra parcial y
  modalidad prorrateada). Su `CSP_PRORRATEADA_PE3 = 1` empieza en marzo, mayo o
  junio de 2026: los meses previos se pagan aparte. Unidades = días del año
  comercial antes del cambio / 360 (0,1667, 0,3333, 0,4167). Si la fila empieza
  en el mes de alta no hay parte previa (4 altas de 2026).
- **Unidades parciales**: `SSP_U_PAGA_EX_3` (regla de ~20.000 caracteres) descuenta
  maternidad, paternidad y maternidad parcial día a día; no se reproduce con los
  totales mensuales. Las 50 extras parciales de octubre son exactamente
  unidades × precio medio. Nuevo parámetro **«Acepto las unidades de devengo de
  Meta4 en extras parciales»** (desactivado por defecto; exige «Confirmo reglas»):
  solo con él se acreditan.

Implementación: tras la resolución de C04 se leen las reglas de
`SSP_PAGA_EXTRA_3` (huella verificada), la ventana de devengo de la 3.ª extra de
todos los convenios (debe ser enero–diciembre del año), los precios de los meses
cerrados y las asignaciones `SSP_P_PAGA_EX_n` / `CSP_PRORRATEADA_PE3`. Asignaciones
escritas después del cálculo dejan el precio sin acreditar. Si la regla o la
ventana no coinciden (meses anteriores a 10/2026, IBER, COLL), se mantiene la
fórmula anterior. Un fallo de esta lectura no afecta al resto de C04.

| C04 CYC octubre                 | 04/11 vs 28/10 | 16/10 vs 14/10 |
| ------------------------------- | -------------- | -------------- |
| Motor 1.3.0                     | 425/41/203     | 424/39/228     |
| Motor 1.3.1                     | 453/1/204      | 451/0/229      |
| 1.3.1 con unidades aceptadas    | 504/1/153      | 502/0/178      |

Queda 1 diferencia (parte no prorrateada de una persona que cambió de modalidad:
Meta4 aplica un precio medio distinto) y los pendientes de configuración que ya
existían: convenio, empresa o tipo de salario incompletos en el mes (12 personas),
convenios sin definición de extras (7), tramos sin mes completo (19), historial
modificado después del cálculo (3) e informe distinto del acumulado (3).

## C05 y C11 desde PeopleNet; análisis de los diez Excel — 2026-11-17 (motor 1.3.0)

Análisis completo de los diez originales (hojas, fórmulas y referencias) y del
libro de RRHH `Normal_Inf 0001_C_202610161141 cuadres.xls` (24 hojas). Solo
SELECT en `M4PRENOMINA`; originales intactos (mismo MD5).

### De dónde sale cada dato en el libro de RRHH

| Hoja del libro           | Fórmula / origen                                              | Control |
| ------------------------ | ------------------------------------------------------------- | ------- |
| Fijos, IRPF              | mes actual − mes anterior (dos copias del informe)            | C01/C02 |
| Flex ← Mercer            | `BUSCARV` al fichero FPS; suma de signos                       | C03     |
| P.extra                  | `L = G+H+I` (base + experiencia + CAI), `M = K − L`            | C04     |
| Teletrabajo              | solo listado; nota `M50 = 2,24×2`, `M51 = M50×5` (22,40 €)     | C05     |
| (Colectivo) 80-20        | `BO = 2,24×4`, `BP = BO×5` (44,80 €), `BQ` = nómina (Hoja3)    | C05     |
| Kms                      | resta con la carga de comisiones                               | C06     |
| Apartamentos, Gimnasio   | resta con el Excel del mes                                     | C07/C16 |
| Turnos                   | mes actual − anterior                                          | C08     |
| Comp.comida              | `(9 − ausencias) × 12,1`                                       | C09     |
| Tarjeta comida           | recarga + Eurest con base 11 y tarifa 12,1                     | C10     |
| Excesos                  | sin fórmulas: listado de la columna del propio informe        | C11     |
| Anticipos                | sin fórmulas: listado del informe                              | C12     |
| 25-40                    | listado de beneficiarios sin fórmulas                          | C13     |
| PPSE ← Fichero PPSE      | `BUSCARV` a la aportación del mes                              | C14     |
| Conceptos varios         | cuota grupo empresa con `BUSCARV`; resto, mes anterior         | C15     |

Las columnas BQ/Hoja3, la hoja Teletrabajo y la hoja Excesos son copias de la
propia nómina: no son fuente independiente.

### C05 — regla real de Meta4

`CSP_HRPERIOD_CALC.CSP_I_ABONO_TELETRABAJO` (`_RULE_U_P`, versión desde
01/09/2026; la anterior, 2022-06 a 2026-08, no tiene el ×2):

- indicador `CSP_IND_ABONO_TELETRABAJO` 1 → 0; paga distinta del día 25 → 0;
- alta en el mes (`SSP_ES_ALTA`) → 0; baja todo el mes anterior
  (maternidad + paternidad + enfermedad + accidente = días del mes) → 0;
- indicador 2 (colectivo 80/20) → precio × 2; indicador 0 → precio.

El precio `CSP_P_ABONO_TELETRABAJO` es un valor mensual por entidad legal
(`M4SCO_LE_VALUES`: octubre 22,40 = 2,24 × 2 días × 5 semanas; noviembre 17,92)
y el indicador es individual (`M4SCO_PERIO_VALUES`: 118 personas con 2 y 11 con 1
en CYC octubre). Es exactamente la regla del libro: 2 días/semana para todos y 4
para el colectivo 80-20.

Implementación: al crear o actualizar instantáneas se lee la regla (se compara
por tokens con las dos versiones verificadas), el acumulado del mes, el del mes
anterior, los valores por defecto, las asignaciones y cualquier herencia no
reproducida. Queda pendiente, nunca coincidente:

- regla distinta, herencia en otros niveles o varios tramos en el mes;
- **configuración escrita después del cálculo o de la ejecución**: se usa la
  fecha real de escritura (`DT_LAST_UPDATE`, no solo `DT_COR_START`), incluidas
  asignaciones individuales que empiezan el día siguiente al mes. En agosto los
  indicadores 80/20 se escribieron el 16/09 con fecha de corrección 01/09: sin
  esto, 116 personas aparecían como error;
- importe del informe distinto del acumulado leído;
- persona en el colectivo 80-20 del Excel sin indicador 2, o al revés.

El Excel del colectivo pasa a ser contraste (118 coinciden, 0 conflictos en
octubre) y los parámetros tarifa/días dejan de usarse con captura.

### C11 — exceso de la paga anterior

La columna «Exceso líquido paga anterior» es `SCO_EXC_PREV_PAYMENT` (17/17
importes y 542 ceros iguales). Regla estándar (`SCO_HRPERIOD_CALC2`): líquido
negativo de la paga anterior + pagos (`M4SCO_PAYMENT`) − órdenes de pago
(`M4SCO_PAYMEN_ORDER`) entre la paga anterior y la actual; la regla CYC de 2018
sustituye el resultado si hay paga de ajustes el día 05. Las reglas se
verifican con una huella de sus códigos. Pendiente: paga de ajustes, varios
registros de la paga anterior, movimientos escritos después del cálculo y
órdenes sin ningún pago registrado (29 personas en CYC, fuera del informe).
Cuando pagos ≠ órdenes, el motivo indica que la paga anterior se recalculó
después de pagarse (único origen observado; 21 de 25 casos Meta4 lo compensa).

### C04 — devengo parcial

Las unidades `SSP_U_PAGA_EX_n` son la fracción devengada en año comercial de 360
días. Con fecha de alta anterior a 2026 hay 338 personas con unidades 1 y 71
que no (ausencias que descuenta el convenio: `SSP_DESC_MAT`, `SSP_DESC_PAT` y
`SSP_DESC_MPAR` = Y). El motivo de cada pendiente indica ahora si el importe es
fórmula × unidades de Meta4 (37 de 50 en octubre); sigue pendiente porque las
unidades son resultado de la nómina.

### Resultados (coinciden / diferencias / pendientes), CYC octubre en la aplicación

| C   | 04/11 vs 28/10 | 16/10 vs 14/10 | Antes (1.2.5) |
| --- | -------------- | -------------- | ------------- |
| C05 | 553/3/4        | 556/1/2        | 143/1/416     |
| C11 | 560/0/0        | 559/0/0        | 0/0/560       |

Otros meses (`cuadre:verify`): CYC septiembre C05 543/3/8 y C11 554/0/0; CYC
agosto C05 432/3/118 (configuración reescrita) y C11 553/0/0; IBER octubre
C05 70/1/1 y C11 72/0/0; COLL septiembre C05 12/0/1 y C11 9/4/0.

## Fuentes de octubre cargadas y C01–C16 en la aplicación — 2026-11-17 (motor 1.2.5)

Los diez originales de `fuentes_cuadres_cierre_de_nómina` (nómina de octubre de
2026) se subieron desde la aplicación (copias; originales sin modificar, mismo
MD5) a dos expedientes CYC: «Cuadre octubre 2026 · ejecución 16/10» (ejecución
del libro `Normal_Inf 0001_C_202610161141`, anterior 14/10) y «Cuadre octubre
2026» (04/11, anterior 28/10). Los diez se reconocen y aplican sin errores.

Parámetros del periodo tomados de las fórmulas del libro de octubre (visibles y
editables en Parámetros): teletrabajo 2,24 €/día × 20 días (`2,24×4×5`), comida
12,10 € × (9 − ausencias), tarjeta tarifa 12,1 y base 11; reglas y aniversarios
confirmados.

Cambios de motor:

- Fuentes parciales (C03, C05–C10, C14, C16; C12 excluido): una persona que no
  figura en la fuente y tiene **cero explícito en nómina** coincide («sin importe
  que contrastar»), como en el libro de RRHH, que solo revisa a los listados. Si
  tiene **pago** sin registro queda pendiente con «Pago en nómina sin registro en
  la fuente parcial; revisar».
- C13 con la regla confirmada aplica Calculos.txt también con listado; el listado
  solo contrasta la antigüedad y el motivo indica si la persona figura en él.

Resultados (coinciden / diferencias / pendientes), ejecución 04/11:

| C   | Resultado        | Pendientes y diferencias                                                       |
| --- | ---------------- | ------------------------------------------------------------------------------ |
| C03 | 5031/2/7         | 7 pagos sin registro en FPS                                                    |
| C05 | 143/1/416        | 416 cobran teletrabajo y no están en el colectivo de tecnología (otra fuente)  |
| C06 | 1680/0/0         | —                                                                              |
| C07 | 559/1/0          | 1 diferencia conocida del original                                             |
| C09 | 547/8/5          | 8 con `(8−H)` o excepciones del libro; 5 pagos sin registro                    |
| C10 | 1116/2/4         | 2 diferencias conocidas; identidad inválida de Eurest                          |
| C14 | 548/4/11         | 4 diferencias de octubre (Q13); 8 sin valor en la columna del mes              |
| C16 | 560/0/0          | —                                                                              |

C11 y C12 siguen sin fuente: no hay registro de excesos ni cartas/calendario de
anticipos entre los diez originales (las hojas del libro son resultados).

## C04 y C13 operativos con datos reales — 2026-11-17 (motor 1.2.4)

Sustituye a las conclusiones de C04/C13 de la sección siguiente.

- **Prorrata «12»**: la columna «Paga Extra Prorrateada» del informe es
  `M4SCO_AC_HR_PERIOD.SSP_P_EXT_PRORRAT` (560/560 personas en octubre), no
  `CSP_TOT_PAGA_EXTRA` (165/560: en junio/octubre suma también la extra separada).
  El lector usa ahora `SSP_P_EXT_PRORRAT`.
- **Modalidad**: sale de la configuración. En CYC hay asignaciones individuales
  `CSP_PRORRATEADA_PE1–PE3 = 1` para 143 personas: las mismas 143 a las que Meta4
  calcula cada mes la extra prorrateada; las demás usan el valor por defecto 0 y
  cobran la 1.ª extra en junio (391) y la 3.ª en octubre (395). Las columnas
  `CSP_PRORRATEADA_PE*` del acumulado valen 0 para todos y no se usan.
- **Configuración posterior al cálculo**: historiales y definiciones siguen
  pendientes. Valores por defecto y asignaciones posteriores (el diccionario se
  tocó el 27–28/10) solo se aceptan si la prorrata calculada por Meta4 lo
  corrobora: modalidad prorrateada ⇔ `SSP_P_EXT_PRORRAT ≠ 0`. Si no cuadra o
  falta, la persona queda pendiente. El importe nunca decide la modalidad.
- **Coherencia informe/acumulado**: ya no se exige que el acumulado sea anterior a
  la ejecución; se exige que los importes de extras del informe y del acumulado
  coincidan (comprobación existente). Así octubre es evaluable aunque se recalculó
  el 05/11.
- **C13 (Calculos.txt)**: con «Confirmo reglas» y la casilla de aniversarios
  marcadas, sin listado de beneficiarios: en el mes en que la antigüedad de nómina
  cumple 25/40 años el esperado es el salario base; si no cumple, 0. Con listado se
  mantiene el contraste anterior. Sin confirmación sigue «Falta fuente».

Resultados en la aplicación (acceso rápido JORGE.SALVADOR, CYC, `M4PRENOMINA`):

| Expediente                     | C04                                                                 | C13              |
| ------------------------------ | ------------------------------------------------------------------- | ---------------- |
| Septiembre 2026 (28/10 vs 14/09) | prorrata 136 coinciden; 100 pendientes con motivo                  | 1108/0/0         |
| Octubre 2026 (04/11 vs 28/10)  | 3.ª extra 288 coinciden, 36 diferencias; prorrata 137; 203 pendientes | 1118/0/2         |
| Agosto 2026 (`cuadre:verify`)  | prorrata 138 coinciden                                             | —                |

Las 36 diferencias de octubre: 11 sin pago de la 3.ª extra, 5 pagos sin esperado
y 20 entre el 83 y el 99 % (posible devengo de parte del año): revisables. Los 50
con devengo parcial o porcentaje distinto del 100 % y los 19 con unidades
incompletas quedan pendientes (regla proporcional no definida en Calculos.txt).

## Validación real en la VM y conexiones — 2026-11-16 (motor 1.2.4)

Primera ejecución completa contra `M4PRENOMINA` desde la VM, con acceso Meta4
real (acceso rápido) y `npm run dev`. Solo SELECT parametrizadas; ninguna
escritura en PeopleNet, SOAP ni originales. Recuentos sin datos personales en
[VALIDATION](VALIDATION.md#validación-real-en-m4prenomina--2026-11-16).

### Conexiones corregidas

- **SQLite local**: la base de la VM tenía aplicadas `011_meta4_catalogs` y
  `012_meta4_catalog_scopes`, de dos commits sin rama (`eb99e441`, `20b36312`).
  `npm run setup` abortaba («migración desconocida o modificada») y la tabla del
  Cuadre no existía: toda operación devolvía el 503 genérico. Con copia previa en
  `data/backups/pre-cuadre-schema-repair-20261116/`, se retiraron las cinco tablas
  `meta4_catalog*` **vacías** y sus dos registros; `setup` aplica la 011 real.
  Otra instalación con el mismo síntoma: comprobar `schema_migrations` antes de
  repetirlo; no aplicar si esas tablas contienen filas.
- **Base PeopleNet**: `.env.local` (prioridad en Next y en los scripts) apunta a
  `M4PRENOMINA`; `.env` conserva `M4PRE` con otras credenciales. El pool se
  guardaba en `globalThis` sin clave: un `next dev` ya arrancado seguía leyendo la
  base anterior tras cambiar `.env.local`. Ahora se reconstruye si cambia la
  configuración efectiva (huella sin secretos) y se reconecta si estaba cerrado.
- **Origen de la captura**: cada instantánea guarda servidor/base leídos
  (`origin`, opcional). Actual y anterior de bases distintas no se comparan;
  la pestaña Datos y la hoja Expediente muestran «Base PeopleNet». Las capturas
  anteriores sin origen siguen abriendo («No registrada»).
- **Meta4/SOAP**: el WSDL de Login responde (HTTP 200, ~3,4 s) solo con la CA del
  sistema; sin ella falla con `SELF_SIGNED_CERT_IN_CHAIN`. `dev`, `start` y
  `cuadre:*` ya usan `NODE_OPTIONS=--use-system-ca`: no arrancar `next` directamente.
  Acceso rápido y sesión verificados (cookie opaca, 2 s).
- **Hora de ejecución en Excel**: `CSP_DT_RUN` es hora local sin zona; el Excel la
  convertía otra vez a Madrid (+1/+2 h). Ahora usa el mismo formato que la UI y
  Resultados de nómina (`Normal_Inf …_202610161141` = ejecución 11:39:57).
- Tiempos medidos: catálogo 0,4 s (4.301 ejecuciones CYC), lectura de un informe
  ≤ 21 s (límite 30 s), creación de expediente 6,2 s, actualización 5,2 s.

### Correcciones de controles con datos reales

- **C13**: PeopleNet devuelve la antigüedad como `AAAA-MM-DD 00:00:00`; el
  parser solo aceptaba `AAAA-MM-DD`, así que todas las personas quedaban con
  «antigüedad ausente o inválida». Se acepta medianoche; otra hora sigue sin
  acreditar. Sin listado, quien cumple 25/40 según la nómina lo indica el motivo
  (sigue «Falta fuente»; la nómina no sustituye al listado de beneficiarios).
- **C02**: el aviso de ocurrencias comparaba texto (`15.00` frente a `15.0000`) y
  marcaba todas las filas; ahora compara valores. CYC octubre: 2 filas reales.
- **C04**: (1) un acumulado reescrito después de la ejecución del informe se
  explica con su fecha («Acumulado recalculado … elige una ejecución posterior»)
  en lugar de «sin acumulado coherente»; lectura agrupada adicional sin importes.
  (2) La configuración (historiales, definiciones, valores por defecto de
  `M4RCH_ITEMS` y asignaciones) debe ser **anterior al cálculo del acumulado**
  de cada persona, no solo a la ejecución del informe: Meta4 no guarda la versión
  previa de esas filas. Una fecha posterior o ausente deja C04 pendiente con
  ambas fechas. Antes, septiembre de CYC acreditaba 138 prorratas con indicadores
  creados el 27–28/10, después del cálculo del 05/10: era una acreditación sin
  evidencia de que esa configuración produjera el pago.
- C12 no cambia (código, cálculo ni huellas); su revisión se conserva al guardar
  parámetros y actualizar instantáneas, y solo se invalida cuando cambian sus fuentes.

### Contraste con «Calculos.txt»

- **C04 «14 meses»** (base + experiencia + CAI) y **«12»** (base × 3 / 12) son las
  dos fórmulas ya implementadas. PeopleNet no tiene una modalidad llamada
  «14 meses»: CYC define tres extras al 100 % (junio, diciembre y octubre) con
  `SSP_PRORRATEADA` nulo, que resuelve R1 por indicadores; COLL solo junio y
  diciembre (la prorrata de tres extras nunca aplica); IBER quince convenios con
  terceras/cuartas extras al 50/100/150 %. No se asocia «14 meses» a 12 + 2 ni a
  ninguna combinación sin confirmación de RRHH.
- **C13** «salario base … solo cuando toque en 25–40 años»: implementado como
  esperado = salario base con listado y confirmación de base. En CYC enero–octubre
  de 2026 hay 10 aniversarios de 25 años según la antigüedad de nómina y todos
  cobran; ninguna persona cobra sin cumplir. El pago es igual al «Salario Base»
  del informe en 3 casos; en 6 la relación es 1,883 y en otro 2,174 (y 0,04 con
  jornada del 70 %). La base aplicable no se deduce de esos importes: al
  confirmarla, esos casos aparecerán como diferencias revisables.
- **C01/C02/C08/C15** contra el mes inmediatamente anterior: ya era así. Con
  datos reales el motor coincide al 100 % con un recálculo independiente.
- **Anticipos**: sin cambios en C12, como se pidió.

### Qué sigue pendiente

- C04 no puede acreditarse con los datos actuales de `M4PRENOMINA`: los
  indicadores PE1–PE5 se modificaron el 27–28/10 y el último acumulado de
  octubre (CYC, IBER y COLL) se recalculó el 05/11 19:00–19:02, después de todas
  las ejecuciones del informe. Hace falta una ejecución del informe de octubre
  generada en PeopleNet **después de ese cálculo** (o la nómina de noviembre).
  Esa generación es una operación de PeopleNet; esta herramienta no la lanza.
- `M4SCO_APPLY_PERIOD` no tiene filas de `CSP_PRORRATEADA_PE*` desde junio:
  Meta4 no registra haber aplicado esos indicadores en ningún cálculo.
- Los diez originales externos no están en esta VM (solo dos copias del informe
  COLL de septiembre): C03, C05–C07, C09–C11, C13 (listado), C14 y C16 siguen
  «Falta fuente» con datos reales. La importación se probó con plantillas simuladas.
- La interfaz no tiene selector de sociedad desde `db40ebca`: con el usuario de
  acceso rápido (CYC e IBER) solo se abre CYC; COLL no está en su perfil. IBER y
  COLL se verificaron con `cuadre:verify`, que usa el mismo lector.

## C04 automático — 2026-11-13

El motor 1.2.3 (corrección 2026-11-16) lee la configuración y el devengo al **crear
un expediente real o actualizar expresamente sus instantáneas**. Abrirlo,
revisarlo, guardar parámetros y exportarlo reutilizan la captura guardada: no
consultan ni actualizan PeopleNet silenciosamente. No hay migración adicional.
Los parámetros manuales anteriores se conservan para expedientes sin esta
captura; una captura automática pendiente no se acredita con esos parámetros.

La evidencia VM aportada por el usuario confirma `DMD1`, los componentes
`CSP_PRORRATEADA_PE1…PE5`, valores por defecto (0 para 1–4; NULL para 5),
asignaciones individuales y el código completo de dos versiones de `CSP_PRORRATEADA/R1`:
el comportamiento histórico de cinco indicadores y el que incluye excepciones
IBER, observado inicialmente en agosto–octubre de 2026. El diagnóstico posterior
del proyecto en la VM devuelve el código histórico coincidente con vigencia
1800–4000, prioridad 2, orden 100 y condición 0. Las fechas de aquellas primeras
extracciones no son límites globales de la aplicación.
**Esto acredita el significado de los indicadores, no valida la nueva lectura
SQL ni toda la población.** Las salidas de diagnóstico 01–05 siguen pendientes.

### Reglas y alcance de la lectura

- Se reutilizan el informe, el pool y la protección SELECT existentes. Primero
  se consulta la regla vigente: cuatro lecturas agrupadas si conserva la definición,
  ocho con R1. Máximo dos simultáneas, sin consultas de recibo por empleado.
- La captura conserva el periodo de alta de la columna `Periodo`, sin alterar
  las posiciones de las columnas. C04 agrupa por empresa/matrícula y exige un
  único periodo de alta; no suma bases de empresas diferentes.
- Con R1 se resuelven asignaciones individuales, de empresa y de convenio por cada
  día del mes. Menor número indica mayor prioridad; empates con valores
  contradictorios, prioridades inválidas y cambios efectivos de modalidad
  quedan pendientes. `1` y `1.00000000` son equivalentes; NULL no es cero.
- Con R1, otros niveles de herencia se detectan y se conservan pendientes, sin
  reproducir un motor SAV genérico. La detección es conservadora: una asignación
  de uno de esos niveles al mismo indicador puede bloquearlo aunque después
  resulte ajena a la persona. Se identifica su tabla en el motivo.
- No hay bloqueo por mes. Si la única regla vigente es la conocida
  `CSP_PRORRATEADA_REV` con `Return(CSP_HRPERIOD_CALC.CSP_PRORRATEADA)`, se
  conserva `SSP_PRORRATEADA` de la definición vigente de cada extra del convenio.
  No se leen ni aplican indicadores o excepciones de R1 en ese recorrido.
- R1 se reconoce por su código ejecutable y sus metadatos contrastados:
  comportamiento histórico de prioridad 2 y orden 100, o comportamiento con
  excepciones IBER de prioridad 3 y orden 100. Ambos tienen condición 0 y TI
  `CSP_HRPERIOD_CALC`. Las fechas reales leídas deben ser válidas y cubrir todo
  el mes seleccionado; no tienen que coincidir literalmente con otra captura.
  El caso acreditado `1800-01-01` a `4000-01-01` cubre julio de 2026 y conserva
  ese fin real en la evidencia. No se modifica PeopleNet para ajustar las fechas.
  La regla autogenerada que conserva la definición tiene prioridad 3 y orden NULL;
  puede coexistir con cualquiera de las dos. La prioridad de la regla es distinta
  de la prioridad de las asignaciones; no modifica cómo se resuelven estas últimas.
  Reglas ausentes, desconocidas, duplicadas o con cambios dentro del mes quedan
  pendientes con motivo concreto; ausencia de R1 por sí sola no acredita nada.
- Ambas versiones de R1 usan `1 → S`, `0 → N`, `NULL → conservar definición`.
  La histórica aplica los cinco indicadores también en IBER, sin excepciones.
  Solo el código que incorpora excepciones fuerza S en IBER para la extra 3; para la 4
  fuerza N en convenio `0041`, S en otros convenios acreditados. Cada versión
  solo actúa sobre extras que existen en su definición.
- Las correcciones se consultan a fecha de ejecución del informe (`runAt`).
  Historiales/definiciones sin corrección bitemporal modificados después de esa
  ejecución no se presentan como configuración histórica acreditada.
- Se cruzan fecha de pago, imputación actual, frecuencia, moneda principal,
  matrícula, periodo de alta y tramos con los acumulados usados por el recibo.
  Deben cubrir todo el mes sin huecos ni duplicados y coincidir con los importes
  de extras del informe guardado. Los valores aplicados de Meta4 sirven de
  contraste cuando coinciden con esas claves; no acreditan modalidad por importe.
- El JSON añade solo `extraPayAutomatic.rule`, opcional para capturas anteriores:
  modo `definition` o `R1`, identificadores, vigencias y hash del código reconocido.
  La ampliación 1.2.2 añade propiedades opcionales `variant` y prioridad/orden
  de cada versión. El verificador muestra esa evidencia, incluso si falla una
  lectura posterior. La procedencia del hallazgo recoge la versión utilizada,
  sin guardar código LN4. Las capturas anteriores conservan su compatibilidad.
- Los identificadores `r1-through-july-2026` y `r1-aug-oct-2026` se conservan
  por compatibilidad: identifican los contenidos contrastados, no restringen su
  calendario. Las fechas de `rule.versions` proceden de PeopleNet. Un rechazo
  identifica vigencia, código, prioridad, orden, condición, TI o identificador;
  no agrupa todo como «código o metadatos sin acreditar».

### Fórmulas y pendientes

La extra separada que vence en la paga seleccionada se compara con **base +
experiencia + CAI** cuando el salario es mensual (tipo 1), las unidades fijas
del mes y las de esa extra suman 1, el porcentaje es 100 % y no hay ausencias,
huelga, IT u horas de ausencia acreditadas en el mes. Los componentes y los
indicadores de ausencia vacíos no se sustituyen por cero.

La prorrata se compara con **base × 3 / 12** únicamente con las tres extras
definidas 1/2/3, todas prorrateadas al 100 %, y mes completo acreditado. Una
cuarta extra, incluso separada, deja esta fórmula pendiente. Los tipos diarios
u horarios, porcentajes distintos, parciales, transiciones y otras combinaciones
mantienen pendiente su regla económica; no se reconstruyen descuentos por 360 días.
El cuadre actual exige EUR; otras monedas quedan pendientes.

Se omiten las filas con cero explícito y ausencia de obligación acreditada.
Un pago no nulo en esas condiciones se conserva como diferencia revisable.
Una celda vacía o modalidad desconocida sigue pendiente. El Excel mantiene las
siete columnas y no introduce celdas pendientes cuando no hay extras que contrastar.
C12 y las huellas de todos los controles ajenos a C04 se conservan.

### Validación de esta ampliación en la VM

1. Con los cambios copiados a la VM y el servidor detenido, arrancar con
   `npm run dev` para conservar acceso rápido y debug. Para datos reales usar
   acceso Meta4 (incluido el rápido), no la muestra debug. `npm run build` sigue
   siendo una comprobación local; `npm run start` es producción y oculta esos
   accesos. No hay nueva migración ni archivo externo que subir para C04.
2. Abrir el expediente del mes disponible (por ejemplo julio) y usar
   **Actualizar instantáneas**, con las ejecuciones correctas. Guardar parámetros sin actualizar no carga la
   nueva evidencia. Si falta `Periodo` en el informe, aparecerá pendiente.
3. El verificador de consola es opcional y no actualiza el expediente. Necesita
   un selector técnico JSON; ese archivo no es una fuente de nómina ni se crea
   automáticamente. La aplicación utiliza la selección ya guardada.
   Para usar la consola, reutilizar las claves de julio de `cuadre:discover`. Si hace falta obtenerlas,
   ejecutar `npm run cuadre:discover -- CYC --period 2026-07` (cambiar el año si
   corresponde). Guardar en `data/cuadre-selection.json` el objeto `selectionFormat`,
   eligiendo expresamente la `currentKey` de la ejecución correcta con datos;
   la primera salida no acredita por sí sola que sea la adecuada. Ejecutar:

   ```powershell
   npm run cuadre:verify -- CYC --selection ".\data\cuadre-selection.json"
   ```

   Revisar `engineVersion` (`1.2.4`), `target` (servidor/base leídos), `extraPayModality.issue`, `rule`, `people`,
   `accredited` y `pending`, y el resumen de C04. `accredited` cuenta configuraciones sin incidencia; no implica
   que todos sus devengos permitan aplicar una fórmula económica.

   Para la R1 histórica de julio aportada por el usuario, `rule.mode` debe ser
   `R1`, `rule.variant` debe ser `r1-through-july-2026` y su entrada en
   `rule.versions` debe mostrar las fechas reales: en el diagnóstico recibido,
   inicio `1800-01-01`, fin `4000-01-01`, prioridad `2` y orden `100`.
   Debe desaparecer «Código o metadatos de la regla de prorrateo R1 sin acreditar
   para 2026-07». Si solo está activa la regla que conserva la definición, el modo
   seguirá siendo `definition`. Cuando el código coincida con el de excepciones
   IBER, la variante será `r1-aug-oct-2026`, con las vigencias reales de esa
   lectura. Una regla reconocida no acredita por sí sola el devengo.
   La selección puede conservar `previousKey: null` para probar solo C04; los
   controles mensuales necesitan el mes anterior y seguirán pendientes sin él.

4. Contrastar con PeopleNet una extra completa, una modalidad con exactamente
   las tres extras prorrateadas, una diferencia conocida, un pago faltante y un
   caso parcial. Confirmar el mapeo de acumulados, tipo salarial/unidades,
   porcentajes, ausencias y calendario. En IBER comprobar que julio respeta los
   cinco indicadores y que las excepciones de extras 3/4 solo se aplican con el
   código que las incorpora. No acreditar modalidad por coincidencia del importe.
5. Verificar recarga/exportación sin nuevas lecturas, conservación de revisiones
   C12 y el comportamiento según la regla vigente en otros meses. Ante diferencias
   de captura, actualizar/generar
   conscientemente el informe correcto; no forzar importes o datos en SQLite.

Pruebas locales y resultados finales de esta entrega: `VALIDATION.md` y
`spec/changelog.md`. No se afirma ejecución SQL real de este lector desde el
entorno local. «14 meses» sigue siendo una etiqueta de RRHH sin correspondencia
anual acreditada: el control usa el tratamiento real de cada extra.

Las capturas de julio recibidas el 2026-11-16 muestran primero el bloqueo por
mes y después el rechazo de la R1 histórica. El diagnóstico del propio proyecto
confirma `codeMatches: true` y fin `4000-01-01`, distinto del primer ejemplo
SQL terminado en julio: la comparación literal causaba el rechazo. Los 35 CR y
35 LF de la fuente descartan el supuesto de saltos exclusivamente CR en esa VM.
Estas evidencias no prueban todavía la cobertura de configuración, el devengo
ni la paridad económica de los casos reales con el lector 1.2.3 corregido.

## Correcciones de cálculo — 2026-11-12 (histórico)

El motor 1.1.0 limita C01/C02/C08/C15 al mes inmediatamente anterior. La
compatibilidad usa códigos de informe y frecuencia, y el tipo de paga del
informe normalizado; no compara nombres descriptivos ni mezcla `CSP_TIPO_PAGA`
con el nombre del tipo del calendario. Diferencias económicas siguen siendo
hallazgos revisables, sin diagnóstico automático de error.

C04 conserva base + experiencia + CAI para devengo completo acreditado.
Incorpora «Paga Extra Prorrateada» y la fórmula base × 3 / 12, condicionada a
evidencia individual de modalidad y vigencia completa. **Los lectores actuales
no acreditan esa modalidad: en datos reales queda pendiente.** La fórmula está
implementada y probada con evidencia sintética. No se han añadido lecturas SQL
especulativas, consultas por empleado, campos manuales ni nuevas importaciones.

La investigación reutiliza `payroll-reports`, `payroll-receipt` y su mapper.
`CSP_TOT_PAGA_EXTRA` corresponde al concepto cobrado del recibo;
`SSP_PRORRATA` es cotización. El diccionario local permite localizar
`M4SSP_H_CONVENIOS`, `M4SSP_CONV_PAG_EXT` y `M4SSP_DEF_PAG_EXT`, pero no acredita
la resolución individual ni las excepciones y vigencias. `SSP_NUM_PAGAS` es
virtual y no constituye un número anual de pagas comprobado. No se deducen
modalidades de importes, calendario, frecuencia ni de la anotación «14 meses».

C13 separa bases, pagos, beneficiarios, alias e identificadores por empresa y
matrícula. La antigüedad de nómina se conserva junto a las filas, sin desplazar
las columnas de evidencia de los demás controles. El listado anual v2 retiene
su antigüedad laboral y todos los meses; no importa nacimiento. Exige coincidencia
de fechas y confirmación de elegibilidad/base. Cero explícito permite detectar
pago faltante; ausencia de dato no lo sustituye. Pago sin beneficiario queda
pendiente con cobertura parcial; con cobertura exhaustiva acreditada se marca
diferencia revisable, sin declarar automáticamente que sea indebido.

Los expedientes antiguos se recalculan en memoria al abrirlos, sin leer SQL,
guardar SQLite ni refrescar instantáneas. Para guardar el nuevo cálculo y poder
exportarlo, usar «Guardar parámetros y recalcular». Las revisiones de los
controles no modificados mantienen sus huellas; C12 no cambia. No hay migración SQL.
Para recuperar antigüedad ausente, actualizar expresamente las instantáneas.
Volver a comprobar e incorporar el listado anual v1 propone una sustitución
por v2 incluso si el fichero tiene el mismo hash; no es una migración silenciosa.
La carga automática sigue declarando fuente parcial (`complete: false`).
La confirmación de reglas/base no declara por sí sola cobertura exhaustiva;
esa declaración pertenece al contrato de importación existente (`complete`).

### Validación real en la VM

Esta entrega se valida localmente; no se ha ejecutado SQL real en la VM.
Con el servidor detenido, compilar la nueva versión con `npm run build` y
arrancar con `npm run start`. No hace falta una migración adicional para estas
correcciones. Usar la configuración PeopleNet ya existente, sin compartirla.

Para la referencia documental de octubre de 2026:

```powershell
npm run cuadre:discover -- CYC --period 2026-10
npm run cuadre:discover -- CYC --period 2026-09
```

Copiar las claves reales elegidas a `data/cuadre-selection.json`, con dos
propiedades `currentKey` y `previousKey`. Cada clave conserva exactamente
`reportId`, `runAt`, `accruedOn` y `payFrequency` de la salida; no inventar códigos
ni usar las copias Datos2/3 como mes anterior. Ejecutar:

```powershell
npm run cuadre:verify -- CYC --selection ".\data\cuadre-selection.json"
```

El verificador reutiliza el lector SQL existente y solo imprime recuentos,
diagnósticos y la advertencia de modalidad pendiente. No importa el listado
de aniversarios ni confirma reglas económicas de C04/C13. Si no hay un anterior
compatible, los controles mensuales deben quedar pendientes. Para otro mes o
sociedad, repetir con sus periodos y claves reales, sin cambiar el contexto de
sociedad de una persona desde el navegador.
Con selección válida se espera `monthlyComparison.comparable: true`; revisar
`reason` si es `false`. `cuadre:discover` muestra por separado `payKind` del
informe y `payTypeName`/`payFrequencyName` del calendario, sin equipararlos.

Comprobaciones en la aplicación y PeopleNet:

1. Confirmar población/filtros y conceptos de ambas ejecuciones. Diferencias
   descriptivas con los mismos códigos no bloquean; agosto no sirve como anterior
   de octubre. Sin anterior, las otras categorías siguen disponibles.
2. Contrastar una extra completa acreditada contra base + experiencia + CAI de
   esa empresa, matrícula y periodo, incluida una diferencia conocida.
3. Para la modalidad prorrateada, identificar en Meta4 la asignación histórica
   individual, sus posibles excepciones y la semántica de los indicadores de
   `M4SSP_DEF_PAG_EXT`, con su convenio y vigencias. Confirmar expresamente 12 pagos
   y tres extras, y resolver «14 meses». El histórico de importes y el calendario
   solo corroboran; no acreditan esa configuración. Hasta disponer del contrato
   técnico verificable y conectarlo al lector, comprobar que la aplicación
   conserva «Modalidad pendiente», incluso si el importe coincide con base / 4.
4. Actualizar la instantánea e incorporar el listado anual v2. Contrastar un
   aniversario de 25 años y otro de 40 con empresa, matrícula y antigüedad; revisar
   cero explícito, pago vacío y pago sin beneficiario. Con carga automática parcial,
   este último queda pendiente. El contraste exhaustivo requiere una fuente con
   cobertura explícitamente acreditada en el contrato existente; no basta marcar
   la casilla de elegibilidad/base ni debe forzarse editando SQLite.
5. Si una matrícula existe en dos empresas de la sociedad, comprobar que aparecen
   dos hallazgos C13 con bases/pagos independientes y la empresa en el motivo,
   también en Excel. Confirmar que C12 conserva datos y revisiones.

Un aniversario del 29 de febrero en un año no bisiesto queda pendiente de
confirmar su mes de pago; no se elige automáticamente febrero ni marzo.

Conservar como resultado de validación solo sociedad, periodos, claves técnicas,
recuentos y reglas confirmadas o pendientes; no compartir importes personales,
matrículas, credenciales ni logs SQL sin sanear.

## Instalar y abrir

En la instalación donde se ejecuta powermeta4, con el servidor detenido:

```powershell
git pull
npm ci
npm run setup
npm run build
npm run start
```

`setup` aplica la migración 011 sobre SQLite. No modifica PeopleNet ni los
datos anteriores. La versión de esquema pasa a 11: la política existente
exige que los backups restaurados tengan esa misma versión. Exporta una copia
antes de actualizar y conserva la instalación compatible si necesitas restaurar
una copia de esquema anterior; no edites su manifest para forzar compatibilidad.

Abre **Herramientas → Cuadre de nómina**. Para trabajar en local sin conectividad,
activa el modo debug documentado en README y ejecuta `npm run dev`. La muestra
solo está disponible con sesión debug válida, en desarrollo y con el flag
habilitado; producción nunca la habilita.

## Trabajar por entregas

1. Crea un expediente, elige el informe y después su ejecución actual. El
   selector permite buscar entre sus ejecuciones de todos los periodos; las
   vacías aparecen deshabilitadas. El mes se deriva de la fecha de acumulación
   de la ejecución elegida y no se introduce manualmente. La anterior es
   opcional: se propone la más reciente del mes natural anterior con igual
   informe, frecuencia y tipo de paga conocido. Pulsar «Crear expediente y
   analizar» confirma la selección y su alcance, sin una casilla adicional.
2. Consulta los resultados mensuales sin esperar a los Excel. Los controles
   externos aparecen pendientes hasta incorporar sus fuentes.
3. En **Fuentes**, selecciona o arrastra todos los Excel/CSV y pulsa **Comprobar**.
   La categoría se detecta por hojas y cabeceras. Se muestran los errores, los
   archivos nuevos y los nombres de las fuentes que se sustituirían, sin guardar
   cambios. **Aplicar** incorpora únicamente los válidos comprobados; los errores
   y conflictos quedan pendientes. Puedes quitar o cambiar archivos, pero debes
   comprobar de nuevo antes de aplicar. Puedes reintentar solo un fallido cuando
   la comprobación sigue vigente. Los originales pueden estar renombrados.
4. Añade fuentes más adelante o abre el expediente después de reiniciar.
   Los originales no se conservan: se guardan las entradas normalizadas,
   referencias y huellas necesarias para reproducir el resultado.
5. Confirma parámetros/vigencias del periodo y excepciones documentadas.
   Los valores de octubre no se precargan como reglas universales.
6. Abre un hallazgo para revisar operandos, referencias y comentarios. La
   revisión manual nunca cambia el delta. Nuevas evidencias invalidan las
   revisiones afectadas. Desde **Revisión → Editar revisión** puedes cambiar
   la decisión y el comentario guardados. Las decisiones «Diferencia justificada»
   y «Requiere corrección manual» necesitan comentario. Cancelar descarta el
   borrador. Una revisión invalidada abre el resultado actual como Pendiente,
   con el comentario anterior editable y un aviso para revisarla de nuevo.
   Un hallazgo que ya no existe se identifica como «Hallazgo anterior» y no se
   puede editar. Ante un conflicto, el formulario conserva el borrador y permite
   volver a cargar el expediente antes de guardar.
7. «Actualizar desde PeopleNet» abre el mismo selector; «Actualizar instantáneas»
   confirma las ejecuciones y relee sus datos, sin una casilla adicional.
   Abrir, añadir fuentes o exportar no actualiza silenciosamente las nóminas.
8. Exporta el libro con Resumen, Expediente, Fuentes, Datos actual/anterior,
   Entradas externas, C01–C16 y Revisión. Los pendientes se conservan; no hay aprobación automática
   del cierre ni reproducción de fórmulas rotas.

Un archivo idéntico ya incorporado se omite. Uno diferente sustituye las fuentes
anteriores de su categoría solo al aplicar. Si hay varios válidos de esa categoría
en el lote, se señala el conflicto: quita los sobrantes y comprueba de nuevo para
elegir uno. Las demás categorías válidas sí se pueden aplicar. Los límites se
comprueban también sobre el expediente resultante del lote completo; si se superan,
Aplicar queda bloqueado hasta reducir la selección y volver a comprobar.
Las nuevas fuentes son parciales: una persona ausente queda pendiente, sin asumir
importe cero. Las fuentes existentes conservan su estado hasta sustituirlas.

El mes de nómina procede del expediente. Se validan los periodos declarados y las
columnas mensuales del documento: el gimnasio de octubre o las cuotas de octubre
no se aplican a julio. El error muestra los meses disponibles. Comida, recarga y
Eurest distinguen el devengo del mes anterior de la nómina; por ejemplo, septiembre
de 2026 corresponde a la nómina de octubre. Cuando no hay un periodo acreditado,
se usa el contexto del expediente y no se inventa un devengo confirmado. Las
fechas de creación o las fechas de reserva de apartamentos no se toman por meses
de nómina. El libro Normal se reconoce únicamente como fuente PPSE.

Los problemas de sesión, contexto, revisión o conexión detienen la cola sin
deshacer los éxitos. Mientras permanezcas en la pantalla, la lista queda disponible
para volver a cargar el expediente y continuar. Los archivos seleccionados no
se guardan en el navegador ni se recuperan después de cerrar o recargar la página.
Después de recuperar un fallo o cambiar la revisión del expediente hay que
comprobar los pendientes antes de aplicar. Las aplicaciones encadenan revisiones;
las sustituciones que reducen celdas se guardan primero para respetar también los
límites durante el lote. Comprobar no cambia revisión, fecha, resultados ni notas.

Fuentes incorporadas muestra archivo, categoría, mes, devengo disponible y registros,
con un icono para retirar y su confirmación. No muestra Perfil, Cobertura ni Huella.
El acceso a Expedientes es un icono y el subtítulo conserva solo el mes y la revisión.
En la lista de expedientes, el icono de papelera abre la confirmación de borrado.

Las hojas C01–C16 contienen siete columnas: Matrícula, Persona, Concepto,
Actual, Anterior / esperado, Diferencia y Motivo / pendiente. Las diferencias
superiores a la tolerancia se marcan en naranja suave; las filas sin fuente o
no comparables, en gris; las coincidencias no llevan relleno especial. No se
exportan las columnas Unidad, Resultado ni Evidencias en estas hojas. En IRPF,
las cabeceras indican porcentajes (%) y diferencia en puntos porcentuales (pp).
Las filas se ordenan por resultado: Con diferencia, Falta fuente, No comparable
y Coincide, conservando su orden dentro de cada grupo. Justificar una diferencia
no cambia su posición ni su color calculado.

Todo el libro usa anchuras adaptadas al contenido, con un máximo de 80 caracteres
y columnas amplias de personas, conceptos y motivos. Los nombres, conceptos e
importes se mantienen en una línea; los comentarios largos permiten varias líneas
sin recortar su contenido. Los motivos automáticos se abrevian solo en la descarga
(por ejemplo, «Fuera del listado»), conservando las causas relevantes y los textos
de excepciones y referencias documentales escritos por el usuario.

Las 23 hojas omiten hashes, huellas, perfiles y versiones internas. Los campos,
categorías y parámetros tienen etiquetas legibles; cada parámetro aparece una vez.
Las fechas son legibles en horario de Madrid. Revisión identifica matrícula,
persona, control y concepto; los hallazgos antiguos no exponen su ID interno.
Se conservan las referencias de hoja/fila, documento, solicitud o cuota, los ceros
iniciales y la precisión decimal completa. Los cálculos y las evidencias del
expediente permanecen intactos en la aplicación.

### Qué archivo importar

Los diez originales locales de `fuentes_cuadres_cierre_de_nómina` se utilizan
sin modificarlos. La categoría de la tabla se detecta automáticamente; no hay
que elegirla. Un archivo de septiembre puede corresponder a la nómina de octubre.
Los originales de Gimnasio, Apartamentos y Comida se leen para octubre y se
rechazan con una explicación en un expediente de julio.

| Archivo                                           | Categoría en Fuentes            | Qué comprobar                                                                                   |
| ------------------------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| `25 40 Aniversario 2026.xlsx`                     | Aniversarios 25/40              | Entidad, antigüedad, elegibilidad y base del periodo.                                           |
| `Altas Gimnasio 2026.xlsx`                        | Gimnasio                        | Columna de pago mensual y cobertura del listado.                                                |
| `CYC_COMISION_SERVICIOS_20261015_162723.xlsx`     | Comisiones / kilómetros         | Se lee Carga de Valores; confirmar devengo y ventana. No sumar Detalle/Desglose.                |
| `Cobro nomnas 13 junio-18 julio.xlsx`             | Apartamentos                    | Se leen cuotas del mes de Bonos disfrute; confirmar año y cobertura de los bloques.             |
| `Colectivo afectado tecnología teletrabajo.xlsx`  | Colectivo teletrabajo           | Confirma tarifa, días y excepciones del periodo; el colectivo no acredita esos parámetros.      |
| `Descuento comida septiembre nómina octubre.xlsx` | Ausencias / compensación comida | Confirmar días de derecho, tarifa y excepciones; no duplicar las dos hojas.                     |
| `Eurest nómina septiembre.xlsx`                   | Eurest                          | Tiene una matrícula inválida que debe corregirse en el original; no se vincula por nombre.      |
| `FPS_Crédito_y_Caución_2026-10.xlsx`              | Flex / Mercer                   | Se leen las nueve métricas mensuales; confirmar cobertura y devengo.                            |
| `Normal_Inf 0001_C_202610161141 cuadres.xls`      | PPSE (hoja embebida)            | Se lee Fichero PPSE para el mes elegido; criterio y calendario siguen pendientes de validación. |
| `Recarga comida ACYC septiembre.xlsx`             | Recarga tarjeta comida          | Combinar con Eurest y confirmar tarifa/base y cobertura; los solapes quedan pendientes.         |

El libro Normal no sustituye las ejecuciones actual/anterior seleccionadas en
PeopleNet. Sus hojas Datos, Datos2 y Datos3 son de octubre de 2026 y no acreditan
un mes anterior; sus copias de fuentes tampoco deben cargarse como documentos
independientes. Siguen faltando el registro independiente de excesos y las
cartas/calendario de anticipos; pueden prepararse con las plantillas de esas
categorías. La ejecución anterior debe seleccionarse del catálogo de PeopleNet.

La lista permite eliminar expedientes con confirmación. Se conservan hasta
eliminación explícita; los backups anteriores mantienen sus datos. El acceso
sigue el contexto operacional de Resultados de nómina, sin roles nuevos.
La instalación y sus copias deben custodiarse como datos de nómina.

### Si no aparecen ejecuciones

El diálogo distingue carga en curso, error de conexión, catálogo vacío e
informe sin resultados utilizables. «Actualizar catálogo», situado a la derecha
del nombre del expediente y adaptado al ancho disponible, vuelve a consultar.
Si falla la carga, ese botón pasa a «Reintentar catálogo». Durante la carga o
una operación queda deshabilitado. No hace falta cerrar el diálogo para ver
el error. El acceso a Resultados de nómina se realiza desde Inicio.

Si solo hay ejecuciones antiguas, pueden seleccionarse con su mes real; no se
convierten en nóminas del año actual. Para un periodo que no existe, hay que
generar el informe en PeopleNet o comprobar que se está utilizando el entorno
correcto y actualizar el catálogo. No hay generación automática en esta herramienta.

Al actualizar un expediente, su periodo se conserva. Elegir una ejecución de
otro mes muestra una explicación y bloquea la actualización: para ese otro mes
se crea un expediente nuevo. Cambiar los selectores o actualizar el catálogo
no modifica las instantáneas guardadas: solo se sustituyen al pulsar
«Actualizar instantáneas» con una selección válida.

## Contratos implementados

Las rutas usan Node.js, sesión y contexto validados en servidor, comprobación
de origen y respuestas `no-store`:

| Interfaz                             | Operación                                                                                                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `GET /api/payroll/reconciliation`    | Lista resumida; `?id=` abre expediente; `?catalog=1` consulta ejecuciones.                                                                                                                                         |
| `POST /api/payroll/reconciliation`   | Crea expediente desde claves ERP confirmadas, o muestra debug autorizada.                                                                                                                                          |
| `PATCH /api/payroll/reconciliation`  | Parámetros, revisión, actualización explícita de instantáneas, retirada de fuente o nombre.                                                                                                                        |
| `DELETE /api/payroll/reconciliation` | Elimina por ID y revisión esperada dentro del contexto actual.                                                                                                                                                     |
| `POST .../preview`                   | Multipart `file` y `metadata`: modo automático con ID/revisión/auto; devuelve categoría, operación prevista, registros, nombres a sustituir, huella, celdas y diagnósticos. Mantiene el preview manual. No guarda. |
| `POST .../analyze`                   | Invocado por Aplicar: revalida, incorpora/sustituye u omite una fuente y recalcula con revisión encadenada. Conserva el contrato manual anterior.                                                                  |
| `POST .../export`                    | ID y revisión; recalcula desde fuentes guardadas y descarga Excel.                                                                                                                                                 |

Las mutaciones usan revisión optimista. Un `409` exige volver a abrir el
expediente: no se sobreescribe trabajo concurrente ni se exporta una revisión
obsoleta. La cola conserva los archivos para recargar el expediente y reintentarlos.
El servidor no acepta resultados, sociedad, SQL ni rutas del cliente.
El identificador interno de empresa en cabecera solo permite detectar cambios
de contexto, nunca autoriza otra sociedad.

Límites: 16 MiB/archivo, 32 MiB/petición, veinte fuentes, 100.000 filas por
libro, dos millones de celdas del conjunto y 128 MiB de expansión XLSX por
petición. El selector admite múltiples archivos sin un máximo artificial de uno;
la cola envía una petición por archivo. El total del lote no se concentra en una
única petición. La modalidad automática mantiene una fuente activa por categoría.
Solo preview/analyze/export se excluyen del clonado del proxy; mantienen
autenticación y lectura de cuerpo limitada en su handler.

La modalidad automática recibe multipart `file` y `metadata` con
`{ id, revision, auto: true }`; categoría y periodo salen del servidor. Devuelve
el expediente actualizado y `category`, `filename`, `records`, `replacedFiles`
y `status` (`incorporado`, `sustituido` o `ya_incorporado`). La copia idéntica no
incrementa la revisión. Los errores de archivo pueden incluir la categoría
detectada. La siguiente petición usa la revisión de la respuesta anterior.
`Source.filename` es opcional y se conserva en el JSON existente: los expedientes
antiguos siguen abriendo y no necesitan una nueva migración SQL.

El motor suma importes antes de comparar y consolida porcentajes idénticos,
sin sumarlos. Usa enteros escalados a 24 decimales; divisiones truncadas a esa
precisión. Las fuentes con precisión no representable no se convierten en cero.
Los DTO y las celdas de valores exactos usan strings decimales. La tolerancia
de 0,01 EUR/pp es editable y sigue siendo un valor de piloto.

## Qué queda condicionado

- C01/C02/C08/C15 necesitan el mes inmediatamente anterior compatible; la ausencia de una persona
  no se interpreta como baja laboral ni como cero.
- C03/C06/C07/C10/C14/C16 tienen perfiles contrastados con los originales.
  Se conservan sus diferencias conocidas, la identidad inválida de Eurest y
  los registros finales de PPSE. Q13 mantiene pendiente la aceptación económica
  del calendario; una coincidencia numérica no lo valida por sí sola.
- C04 exige devengo completo declarado para una paga concreta o excepción
  acreditada. La fórmula de prorrata está implementada, pero su acreditación
  automática en SQL sigue pendiente; la proporcionalidad no se inventa.
- C05/C09 necesitan tarifa, días y vigencia confirmados; los casos particulares
  usan la plantilla de excepciones, no comentarios que cambien importes.
- C11/C12 admiten las plantillas normalizadas descargables. Faltan los
  registros independientes del cliente para validar su uso operativo.
- C13 agrupa importes y cruza empresa/matrícula y antigüedad, mes/año.
  Requiere confirmar elegibilidad/base; ausencia y cobertura parcial no generan ceros.
- Solapes de recarga/Eurest o duplicados no acreditados quedan no comparables.
  El perfil de apartamentos delimita los bloques recibidos; si crecen fuera
  del contrato se debe validar una nueva versión.

Las causas históricas automáticas y cualquier formato de carga/escritura en
PeopleNet permanecen fuera de esta implementación. Los originales solo se
utilizan en pruebas locales; nunca se añaden a Git ni al runtime público.

## Scripts para ejecutar en tu entorno

Usan `PEOPLENET_DB_*` de `.env.local` o del entorno. Solo ejecutan las SELECT
de los lectores existentes y cierran el pool. No necesitan usuario/contraseña
en argumentos ni generan archivos automáticamente.

Primero obtén los metadatos de octubre y septiembre:

```powershell
npm run cuadre:discover -- CYC --period 2026-10
npm run cuadre:discover -- CYC --period 2026-09
```

Puedes pasarme ambos JSON de salida: incluyen claves de ejecución, cabeceras,
ocurrencias y recuentos; excluyen filas personales, importes y comentarios.
Permiten validar Q02 y la compatibilidad del informe elegido. Cambia CYC por
IBER/COLL únicamente en el entorno autorizado para esa sociedad.

Crea un selector local, por ejemplo `data/cuadre-selection.json`, copiando las
claves reales de las ejecuciones deseadas. Este ejemplo es sintético:

```json
{
  "currentKey": {
    "reportId": "01_C",
    "runAt": "2026-10-16T10:00:00.000Z",
    "accruedOn": "2026-10-25",
    "payFrequency": "001"
  },
  "previousKey": null
}
```

Sustituye `previousKey: null` por la clave de septiembre si está disponible:

```powershell
npm run cuadre:verify -- CYC --selection "data/cuadre-selection.json"
```

Devuélveme ese JSON de recuentos por control. No demuestra las reglas pendientes
de RRHH ni pide compartir datos personales. Si falla la conexión, no envíes
credenciales, logs SQL ni `.env.local`; basta el código de error saneado y la
etapa que estabas comprobando.

La verificación sin base de datos utiliza únicamente los originales locales:

```powershell
npm run cuadre:verify-local -- "docs/automatizacion-reunion/fuentes_cuadres_cierre_de_nómina"
```

No modifica archivos, no usa Excel COM y no imprime identidades/importes.
Usa Datos como referencia de octubre; no considera Datos2/Datos3 un septiembre
auténtico. Las pruebas sintéticas sí cubren meses distintos y el cambio de año.

## Validación ejecutada y pendiente

Actualización 2026-11-05 del formulario: diecisiete pruebas dirigidas correctas;
typecheck y build correctos. Prueba aislada en Chrome con el formulario/Modal
reales, Inter y catálogo ficticio: crear/actualizar sin casilla, carga, error y
reintento, a 1440/1024/768/390 px sin overflow ni excepciones JavaScript. No valida
persistencia ni conexión corporativa. La suite general pasa 1.192 pruebas y
omite dos; falla una integración Excel COM de fórmulas de moneda del alta por
timeout de 180 s. El pase sin ese archivo termina con 200 archivos correctos,
1.183 pruebas correctas y 2 omitidas. Lint global mantiene siete avisos y 618 archivos con formato
previo pendiente; los archivos de código modificados y esta guía pasan los
controles dirigidos. Diff y estado Git revisados.

Actualización 2026-11-03: carga múltiple automática, typecheck y build correctos.
Suite completa de 201 archivos, 1.175 pruebas correctas y dos omitidas. Tras el
ajuste móvil, pase dirigido final de seis archivos con 49 pruebas correctas.
Los diez originales se reconocen renombrados, se leen para octubre y conservan
los recuentos, diferencias y hashes. Gimnasio, Apartamentos y Comida rechazan
el expediente de julio con la explicación del periodo. Setup ejecutado en una
base aislada para las comprobaciones de depuración.

En navegador con sesión debug se comprobó un lote de cinco archivos: tres
incorporados y dos errores independientes (corrupto y desconocido). Copias
idénticas sin duplicado ni incremento de revisión, sustitución automática,
reapertura con nombres persistidos, lote de julio con archivos incompatibles y
otro incorporado, 503 simulado y continuación conservando la cola. Iconos y
confirmación de retirada comprobados. Fuentes se revisó a 1440/1024/768/390 px,
sin overflow horizontal de página ni errores JavaScript; la zona de carga se
ajustó para que sus textos se lean completos en móvil.

En la entrega anterior, con sesión debug se comprobó creación, revisión, edición
desde Revisión, cancelación, guardado y reapertura después de recargar,
invalidación por cambio de evidencia y bloqueo de hallazgos antiguos. El modal
se comprobó a 1440/1024/768/390 px, con nombres largos, sin overflow horizontal
de página ni errores JavaScript. Se descargó el Excel real de 23 hojas con
fuentes ficticias y precisión decimal completa.

En esa entrega, Excel nativo abrió la descarga en solo lectura: nombres y conceptos sin ajuste,
fila de 20 puntos y motivo «Fuera del listado»; un comentario de 915 caracteres
se ajustó a una fila de 180 puntos. El archivo mantuvo sus bytes después de
cerrarlo. Los originales corporativos no se modificaron.

Lint global ejecutado: siete avisos previos y formato pendiente en 618 archivos.
Lint/formato dirigido correcto en el código modificado y esta guía; el registro
está en `spec/changelog.md`. El benchmark, la conexión y la aceptación operativa
en PeopleNet requieren ejecutar los scripts anteriores en tu entorno.
