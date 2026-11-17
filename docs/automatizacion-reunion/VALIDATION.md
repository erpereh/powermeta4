# Validación de fuentes y criterios de aceptación

## C04 con precio medio — 2026-11-17 (motor 1.3.1)

Aplicación (acceso rápido, CYC, `M4PRENOMINA`): octubre 04/11 C04 453/1/204 (antes
425/41/203) y 504/1/153 con unidades aceptadas; 16/10: 451/0/229 y 502/0/178.
Septiembre, agosto, IBER y COLL sin cambios (`cuadre:verify`). Recarga con la misma
huella, exportación 200, sin errores JS. Los expedientes quedan sin aceptar unidades.

## C05/C11 desde PeopleNet — 2026-11-17 (motor 1.3.0)

Acceso rápido JORGE.SALVADOR, CYC, `M4PRENOMINA`, diez Excel subidos (copias).
Octubre 04/11: C05 553/3/4 y C11 560/0/0; 16/10: C05 556/1/2 y C11 559/0/0. Antes:
C05 143/1/416 y C11 sin fuente. `cuadre:verify`: CYC septiembre y agosto, IBER
octubre y COLL septiembre (cifras en
[IMPLEMENTATION](IMPLEMENTATION.md#c05-y-c11-desde-peoplenet-análisis-de-los-diez-excel--2026-11-17-motor-130)).
Recarga con la misma huella, exportación 200, sin errores JS.

## C04/C13 en la aplicación — 2026-11-17

Acceso rápido JORGE.SALVADOR, CYC, `M4PRENOMINA`. Septiembre: C04 136/0/100,
C13 1108/0/0. Octubre: C04 425/41/203 (3.ª extra 288 coinciden, 36 diferencias;
prorrata 137), C13 1118/0/2. Agosto (`cuadre:verify`): prorrata 138. Detalle en
[IMPLEMENTATION](IMPLEMENTATION.md#c04-y-c13-operativos-con-datos-reales--2026-11-17-motor-124).

## Validación real en M4PRENOMINA — 2026-11-16

Ejecutado en la VM con motor 1.2.4, `WPNETDESAPRE / M4PRENOMINA` (`.env.local`),
solo SELECT parametrizadas. Formato: coinciden/diferencias/pendientes. Sin
matrículas, nombres ni importes.

**Excel de prueba identificado.** `informes nomina/Normal_Inf 0001_20261091154.xls`
(y su copia `…_2026109110.xls`) = COLL, informe `01`, nómina de septiembre
(pago 25/09/2026), ejecución `2026-10-06T10:49:34`. Contraste por persona:
total devengos, líquido, fijos y salario base 13/13 iguales; frente a la
ejecución de agosto 0/13 (devengos). Cabeceras y 20 filas idénticas; las
diferencias por posición son orden de tramos. Los diez originales externos
no están en la VM.

| Sociedad · mes · actual / anterior                   | C01        | C02        | C08         | C15          | C04                                    |
| ---------------------------------------------------- | ---------- | ---------- | ----------- | ------------ | -------------------------------------- |
| CYC 2026-10 · 16/10 11:39 / 28/10 (sept.)            | 521/32/7   | 188/365/7  | 1102/4/14   | 6071/12/77   | 0/0/2795 (recalculado 05/11)           |
| CYC 2026-10 · 04/11 17:22 / 28/10                    | 519/34/8   | 187/366/8  | 1102/4/16   | 6070/13/88   | 0/0/2800 (recalculado 05/11)           |
| CYC 2026-09 · 28/10 09:11 / 14/09 (ago.)             | 521/28/9   | 178/371/9  | 1096/2/18   | 6033/6/99    | 0/0/2770 (indicadores del 27/10)       |
| CYC 2026-08 · 14/09 09:45 / 06/08 (jul.)             | 526/25/7   | 93/458/7   | 1102/0/14   | 6058/3/77    | 0/0/2765 (indicadores del 27/10)       |
| COLL 2026-09 · 06/10 10:49 (Excel) / 11/09 (ago.)    | 12/1/0     | 0/13/0     | 0/0/26 col. | 13/0/130 col.| 0/0/65 (indicadores del 27/10)         |
| IBER 2026-10 · 05/11 09:44 / 23/09 «Normal»          | 57/13/3    | 25/45/3    | 0/0/146 col.| 70/0/733 col.| 0/0/360 (recalculado 05/11)            |
| IBER 2026-10 · 05/11 / 30/09 «Normal + Retroactiva»  | pendiente  | pendiente  | pendiente   | pendiente    | — tipo de paga distinto: no se compara |

- C01/C02/C08/C15: recálculo independiente (suma por persona sin el motor):
  560/560 hallazgos iguales en cada métrica de CYC octubre. Las diferencias de
  C02 son mayoritariamente < 1 pp (346 de 365 en CYC octubre, primera fila): variaciones reales
  de porcentaje, revisables con la tolerancia de 0,01 pp (Q03), no errores.
  «col.» = columna ausente en el informe de 152/159 columnas de COLL/IBER.
- C04: regla `r1-aug-oct-2026` reconocida en las tres sociedades con vigencias
  reales (R1 2026-08-01/2026-10-31, prioridad 3, orden 100; regla de definición
  1800/4000). Ninguna persona acreditada: ver causas en
  [IMPLEMENTATION](IMPLEMENTATION.md#qué-sigue-pendiente). Antes de la guarda de
  1.2.4, septiembre acreditaba 541 configuraciones y la prorrata coincidía en 138
  personas: la fórmula cuadra, pero no queda acreditada la modalidad.
- C13: con la corrección de fecha, las 559 «antigüedad inválida» de CYC octubre
  pasan a «Falta fuente»; 10 aniversarios de 25 años en enero–octubre, 3 con
  pago = salario base del informe.
- C03, C05–C07, C09–C12, C14, C16: «Falta fuente» (sin originales en la VM).

**Aplicación (Chrome sin interfaz, sesión Meta4 real, CYC):** catálogo, creación
de septiembre (28/10 frente a 14/09), recarga sin SQL (misma huella y captura),
revisiones C01 y C12, comentario obligatorio, revisión obsoleta (409),
parámetros, actualización de instantáneas con revisiones vigentes, rechazo de
anterior no inmediato (422) y de ejecución de otro mes (422), exportación de
23 hojas de siete columnas (409 si la revisión es obsoleta), pestaña Datos con
origen y sin overflow a 1440/390 px ni errores JavaScript. Informe COLL como
fuente: «No se reconoce la categoría». Plantillas de anticipos y excesos con
**datos simulados**: comprobación, aplicación, copia idéntica sin nueva revisión,
C11/C12 con una coincidencia y una diferencia, revisión C12 invalidada por nueva
evidencia y restaurada al retirar las fuentes. Esto no valida C11/C12 operativamente.

Comprobaciones locales: ver `spec/changelog.md` (2026-11-16, Cuadre validado
contra M4PRENOMINA). Typecheck, build y `git diff --check` correctos.

## Vigencia real leída en la VM — 2026-11-16

El diagnóstico del propio proyecto en la VM confirma motor 1.2.2, comportamiento
histórico instalado, lectura de RULE_ORDER y código coincidente. Devuelve R1
desde 1800-01-01 hasta 4000-01-01, prioridad 2, orden 100, condición 0 y TI
CSP_HRPERIOD_CALC. El rechazo se reproduce localmente y desaparece al cambiar
solo el fin por el literal esperado anteriormente: queda aislada la causa.
Los 35 CR y 35 LF de SQL descartan el supuesto de saltos exclusivamente CR.

La regresión conserva los valores exactos de los metadatos de esa salida y
personas/importes sintéticos. Cubre el reconocimiento y ambas fórmulas con fin
4000, otra fecha final que cubre el mes, fechas inválidas o con cobertura parcial,
campos de rechazo concretos, reglas activas superpuestas y comportamientos IBER
según código. Incluye lectura, creación/actualización, recarga, exportación de
siete columnas, mensajes del campo rechazado y revisiones C12.

Comprobaciones locales ejecutadas: 211 pruebas dirigidas en cinco archivos;
suite completa con 1.523 pruebas pasadas y dos omitidas en 218 archivos
(480,62 s); `npm run typecheck` y `npm run build` correctos, con 44 páginas.
`npm run lint` no pasa por el formato pendiente en los mismos 619 archivos
previos y conserva siete avisos existentes. El formato acotado a 39 archivos
de Cuadre/documentación es correcto. `git diff --check` sin errores y estado
revisado en `davidev`, sin ramas nuevas, commits ni push.

La regla y la causa del rechazo están acreditadas por la evidencia VM aportada.
La lectura completa de configuración, devengo e importes del motor 1.2.3 sigue
requiriendo contraste en la VM. Pasos actualizados en [IMPLEMENTATION](IMPLEMENTATION.md),
manteniendo `npm run dev` para acceso rápido/debug y el acceso Meta4 para datos reales.

## R1 histórica de julio — 2026-11-16

El usuario aporta la consulta real con `CSP_PRORRATEADA_REV` y R1 vigente
01/01/1800–31/07/2026, prioridad 2, orden 100, condición 0 y código completo.
Confirma el tratamiento de los cinco indicadores sin excepciones de IBER.
Se incorpora esa versión y se mantiene por separado agosto–octubre de 2026.

Las pruebas sintéticas cubren ambas fórmulas con R1 histórica, 0/1/decimales/NULL,
los cinco órdenes en CYC/IBER/COLL, convenios 0041/otros y la frontera julio–agosto.
También cubren convivencia con la regla autogenerada, prioridades de regla y
asignaciones separadas, código/metadatos alterados, versiones desconocidas,
parciales, SQL agrupado, fallos aislados con procedencia conservada, actualización
expresa, recarga de capturas anteriores, exportación y revisiones C12.

Comprobaciones ejecutadas: 190 pruebas dirigidas correctas en cinco archivos;
`npm test` con 218 archivos correctos, 1.502 pruebas superadas y dos omisiones
preexistentes (1.504 total, 447,50 s). `npm run typecheck` y `npm run build`
correctos (44 páginas), formato dirigido de 39 archivos y `git diff --check`
sin errores. `npm run lint` conserva siete avisos y formato pendiente en los
mismos 619 archivos anteriores; no se reformatea el repositorio.

La evidencia aportada acredita la regla histórica. Las pruebas locales no
sustituyen el contraste SQL del lector corregido ni la comprobación de cobertura,
devengo e importes de trabajadores reales. Pasos VM en [IMPLEMENTATION](IMPLEMENTATION.md).

## Corrección del bloqueo de julio — 2026-11-16

La captura de la VM aportada por el usuario muestra que C04 se detenía por la
vigencia agosto–octubre de R1, antes de consultar la configuración de julio.
No demuestra que la configuración o los importes de julio estén acreditados.

Las pruebas sintéticas cubren la regla conocida que conserva la definición,
ambas fórmulas en julio, meses anteriores y posteriores, exclusión de indicadores
y excepciones de R1 fuera de su vigencia, reglas desconocidas/ausentes, duplicados,
cambios de regla, parciales y datos incompletos. También comprueban cuatro lecturas
agrupadas frente a ocho con R1, fallos SQL aislados a C04, creación/actualización,
recarga, exportación de siete columnas y conservación de revisiones C12.

Comprobaciones ejecutadas: `npm run typecheck` correcto; `npm test` con 218
archivos correctos, 1.476 pruebas superadas y las dos omisiones preexistentes
(1.478 total, 460,15 s); `npm run build` correcto, 44 páginas. Formato dirigido
correcto y `git diff --check` sin errores. `npm run lint` mantiene siete avisos
y formato pendiente en los mismos 619 archivos anteriores; sin reformateo general.

Las comprobaciones reales de julio se detallan en [IMPLEMENTATION](IMPLEMENTATION.md).
Esta corrección local no acredita todavía la ejecución SQL ni la paridad económica
del recorrido nuevo en la VM.

## Ampliación C04 — 2026-11-13

Evidencia SQL aportada por el usuario: correspondencia DMD1 de los cinco
indicadores, valores por defecto, recuentos de asignaciones individuales y
código completo de R1 con vigencia 01/08/2026–31/10/2026. Confirma la
interpretación 0/N, 1/S, NULL conserva definición y las ramas IBER; no prueba
por sí sola cobertura, devengo o importe esperado de cada persona.

El lector automático y su resolución se verifican localmente con fixtures
sintéticos: ambas fórmulas sin parámetros manuales, prioridad, NULL, vigencias,
versiones distintas, IBER/0041, tramos, monedas, ausencias, duplicados, porcentajes,
tres/cuatro extras, matrículas repetidas en empresas distintas y coherencia
de importes. Se comprueban SELECT parametrizadas y agrupadas, aislamiento de
fallos, creación/actualización explícita, recarga sin SQL, revisiones estables
ante reordenación de filas y exportación sin pendientes artificiales.

No se ha ejecutado este nuevo lector contra PeopleNet desde el entorno local.
La [guía de instalación y validación](IMPLEMENTATION.md) indica cómo refrescar
expedientes anteriores y ejecutar el verificador en la VM. Los resultados
finales de pruebas y comprobaciones se registran en `spec/changelog.md`.

Resultados ejecutados: `npm test` termina con 218 archivos correctos,
1.447 pruebas superadas y dos omisiones preexistentes. La comprobación final
del módulo, servidor, UI y repositorio de expedientes pasa sus 205 pruebas en
13 archivos. `npm run typecheck` y `npm run build` pasan (44 páginas). Formato
correcto en los 41 archivos comprobados; `git diff --check` sin errores.
`npm run lint` conserva siete avisos y formato pendiente en 619 archivos
preexistentes; no se reformatea el repositorio.

## Validación anterior — 2026-11-12

Corrección local 2026-11-12: las pruebas sintéticas cubren periodos consecutivos
y denominaciones, ambas fórmulas C04 con su acreditación, y C13 por empresa y
matrícula con fechas, pagos ausentes y cobertura parcial/exhaustiva. Incluyen
huellas anteriores exactas de C12 y de los controles ajenos al cambio,
recarga de expedientes, servidor, formulario y exportación de siete columnas.
La fórmula de prorrata no implica una modalidad SQL acreditada: sus pruebas
positivas usan evidencia sintética explícita. Los pasos operativos pendientes
están en «Validación real en la VM» de [IMPLEMENTATION](IMPLEMENTATION.md).

Ejecuciones de esta entrega: `npm test` termina con 216 archivos correctos,
1.388 pruebas superadas y dos omisiones preexistentes. Después de los últimos
casos límite se ejecutan las 148 pruebas del módulo, servidor y UI en once archivos,
todas correctas. Typecheck y build (44 páginas) pasan. El formato de los 37 archivos
comprobados del módulo/scripts y `git diff --check` pasan. El lint global conserva
siete avisos y formato pendiente en 619 archivos anteriores; no se reformatea
el repositorio. No se han ejecutado los comandos SQL de la VM.

Estado de esta evidencia: análisis documental y comprobaciones locales;
la implementación posterior y sus pruebas están en [IMPLEMENTATION](IMPLEMENTATION.md)
y `spec/changelog.md`. **No acredita validación operativa en PeopleNet**. Los originales no se han guardado
desde Excel ni recalculado. Datos, resultados y logs privados permanecen
excluidos; este documento publica recuentos y ejemplos sintéticos.

## Qué se comprobó

- Inventario de diez archivos, 39 hojas, fórmulas, resultados guardados,
  filtros/ocultación, notas, nombres definidos, bloques y cabeceras.
- Contraste nativo de cuatro pivots de S09: origen, rango y agregación;
  captura visual de 42 vistas/rangos, incluidas excepciones y filas finales.
- Lectura estática con SheetJS y comprobaciones independientes desde tablas
  originales. Las identidades se resolvieron localmente mediante alias
  únicos del conjunto autorizado de referencia; no se perdió un ID inválido.
- Tolerancia de análisis de 0,01 EUR para los recuentos inferiores. Es un
  criterio técnico de contraste, no aceptación del cliente de la tolerancia.
- Se conservaron discrepancias y ausencias. No se alteraron importes ni se
  eligió una columna alternativa solo para conseguir coincidencias.

Las primeras exploraciones por posición o sumando porcentajes se descartaron;
los recuentos siguientes proceden del contraste por clave, porcentaje único
y límites acreditados. Comparar una tabla derivada con el mismo resultado
solo prueba procedencia, no independencia del control.

## Resultados observados por control

| Control | Contraste y resultado                                                                                                                                                                              | Qué demuestra / qué falta                                                                                                                             |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| C01     | Datos frente al lado actual de Fijos: 551 de 552 identidades comunes coinciden; Datos2 y Datos3: 552 de 552.                                                                                       | El libro incluye versiones diferentes. No atribuir esa diferencia a septiembre ni al motor.                                                           |
| C02     | Porcentaje único de J contra snapshot actual: 551/552 con Datos, 552/552 con Datos2/3. J y EV no coinciden en dos filas de Datos.                                                                  | Acredita ocurrencia 1 y que no debe sumarse el porcentaje. Falta ejecución anterior independiente.                                                    |
| C03     | Nueve correspondencias de S08 contra Datos: 484 identidades comunes por métrica, todas dentro de 0,01 EUR.                                                                                         | Confirma columnas y signos para esta muestra; existen fracciones de céntimo. No acredita otros productos/entidades ni convierte ausentes en cero.     |
| C04     | En 395 filas con fórmula de extra, 389 deltas se reproducen desde componentes/extra agregados de Datos2; seis difieren.                                                                            | El libro no es un oráculo uniforme: se debe resolver versión, agrupación y excepciones antes de afirmar paridad completa.                             |
| C05     | 118 miembros del bloque principal de S05; 116 con esperado y dos sin cálculo. Entre los 116, 115 coinciden con Datos.                                                                              | Detectar la diferencia y las dos ausencias de esperado. No aprobar por pertenencia ni propagar la fórmula hasta toda fila con ID.                     |
| C06     | S03/Carga de Valores: 24 identidades y tres métricas; todas coinciden con BH/BI/DS de Datos.                                                                                                       | Confirma importes y cancelación sin sumar el detalle otra vez; no acredita integración directa del generador.                                         |
| C07     | 59 estancias válidas de S04, 58 personas; una tiene dos estancias. 57 personas coinciden con DI y una difiere.                                                                                     | Conservar ambas estancias y la discrepancia. La lista auxiliar inferior no es otra carga.                                                             |
| C08     | Dos complementos y dos snapshots, con fórmulas cuyo sentido es anterior menos actual.                                                                                                              | Algoritmo mensual claro; falta el informe bruto anterior para un contraste independiente completo.                                                    |
| C09     | La tabla derivada de comida coincide con BB para 190/193 personas con Datos y 193/193 con Datos2/3. Las fórmulas usan distintas bases de días y excepciones.                                       | Procedencia acreditada; no valida el importe externo hasta confirmar días, tarifas y excepciones.                                                     |
| C10     | Desde cargas/descargas primitivas S10 y S07: 336 identidades vinculables, 335 coincidencias en cada métrica exenta/no exenta; una difiere. Un registro adicional de S07 no tiene matrícula válida. | No ocultar discrepancia ni registro inválido. El snapshot de Tarjeta comida sí coincide con Datos: eso solo prueba coherencia interna del snapshot.   |
| C11     | La hoja Excesos reproduce DX para 17 identidades vinculadas.                                                                                                                                       | No es contraste independiente; falta el registro externo de recálculos.                                                                               |
| C12     | El snapshot Anticipos coincide con DT en 9/10 personas usando Datos y 10/10 usando Datos2/3.                                                                                                       | Falta calendario/carta independiente y validación del segundo concepto DU.                                                                            |
| C13     | Una persona ACYC_ES con aniversario de octubre en S01 tiene pago y coincide con la base de referencia.                                                                                             | Caso observado; no acredita el conjunto de convenios ni proporcionalidades.                                                                           |
| C14     | M hasta 252 coincide con DJ en 251 identidades; la columna V de octubre tiene 243 referencias numéricas vinculables y cuatro diferencias.                                                          | El contraste mensual no se sustituye por M para ocultar diferencias. Deben resolverse calendario, meses vacíos y registros fuera del rango histórico. |
| C15     | Once conceptos identificados. El libro solo calcula un contraste para la cuota y tiene errores de búsqueda en ese contraste.                                                                       | No se ha demostrado comparación independiente de los once contra septiembre.                                                                          |
| C16     | Las 42 cuotas de S02 coinciden con GJ.                                                                                                                                                             | Confirma fuente, columna F y signo de esta versión; no fija una cuota universal.                                                                      |

Estos recuentos no declaran una nómina aprobada. Las diferencias permanecen
en los resultados privados con referencias de filas, sin importar datos a
SQLite ni consultar SQL Server/SOAP. Las comprobaciones locales usan números
de la fuente para contrastar, sin constituir el motor decimal de producción.

## Incidencias del libro que deben convertirse en pruebas

| ID  | Evidencia                                                                                         | Comportamiento futuro exigido                                                                     |
| --- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| V01 | Datos tiene pivots desde 583; Datos2 desde 584 y Datos3 desde 593.                                | No importar hasta UsedRange ni concatenar copias.                                                 |
| V02 | Fijos M: 12 `#VALUE!`; IRPF K: 11.                                                                | Cruzar por identidad, sin restar matrículas ni depender de orden.                                 |
| V03 | Flex: 1368 errores derivados de 76 búsquedas fallidas repetidas en nueve parejas.                 | Agrupar el motivo de ausencia sin multiplicar empleados ni tratar errores como cero.              |
| V04 | PPSE D/E: 618 `#N/A`; búsqueda termina en 252.                                                    | Incluir registros adicionales y detectar ausencia de fuente/mes, no copiar primer BUSCARV.        |
| V05 | Fichero PPSE AD: dos errores; totales/notas y tres registros válidos finales tras separación.     | No sumar totales ni truncar personas por una fila en blanco.                                      |
| V06 | S04/C61 contiene `#REF!` en diagnóstico de matrículas.                                            | Avisar de diagnóstico roto sin invalidar automáticamente cuotas originales sanas.                 |
| V07 | S07/B14 es texto personal en la columna de matrícula.                                             | Mantener fila sin vincular; no buscar por nombre.                                                 |
| V08 | S05 tiene miembros sin BP, notas de vigencia y filas de casos tras el bloque.                     | Diferenciar colectivo, esperado y anotaciones; no deducir la población por existencia de fórmula. |
| V09 | Comp.comida M contiene fórmula general, días distintos y números de ausencias fijados.            | Exigir parámetros/excepciones acreditados; comentarios no modifican cálculos.                     |
| V10 | Conceptos varios F/G tiene 32 errores de búsqueda; «Ayuda vehículo» se repite en Datos.           | Seleccionar ocurrencia acreditada, comparar once conceptos y declarar ausencia del anterior.      |
| V11 | Nombres definidos `_FilterDatabase` y `_xlnm.Criteria` con `#REF!`; muchos filtros/filas ocultas. | No usar visibilidad ni nombres dañados como límites de datos.                                     |

Los errores son hechos de los archivos recibidos. No se han reparado ni se
propone importarlos como excepciones correctas de nómina.

## Casos sintéticos mínimos para implementar

**Todos los IDs e importes de esta tabla son inventados**, independientes de
los originales. El resultado esperado incluye cobertura y revisión humana.

| Control | Caso sintético                                                                           | Resultado esperado                                                                                                         |
| ------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| C01     | `000101`: anterior 2000 EUR, actual 2050; orden distinto.                                | +50 EUR y motivo pendiente; preservar ceros y la persona.                                                                  |
| C02     | Mismo empleado en dos filas al 15 % y anterior 14 %.                                     | +1 pp, no 30 %; dos porcentajes distintos en una ejecución: no comparable.                                                 |
| C03     | Proveedor médico 120 EUR, descuento nómina −120.                                         | Esperado −120, delta 0; importe anual no entra en el cruce.                                                                |
| C04     | Base 1800 + experiencia 100 + CAI 50; extra 1950 con devengo completo acreditado.        | Delta 0. Con permiso/transición sin contrato, no comparable.                                                               |
| C05     | Dos miembros con esperado confirmado, otro sin importe y uno con alta sin indicador ERP. | Comparar dos; pendiente del tercero y detectar ausencia de pago del cuarto según su esperado.                              |
| C06     | Dos líneas de carga de una persona: exento 60+40; detalle repite ambas.                  | Esperado 100, no 200; cantidad en kilómetros no se usa como euros.                                                         |
| C07     | Dos estancias con cuotas 20 y 35 en octubre y un total de coste de 300.                  | Esperado 55; copia del mismo archivo no duplica. Enero siguiente conserva año correcto.                                    |
| C08     | Turno anterior 25 y actual 30; festivo anterior 10 y actual 0.                           | +5 y −10, dos métricas independientes.                                                                                     |
| C09     | Derecho confirmado 10 días, ausencia 2 y tarifa de prueba 5 EUR/día.                     | 40 EUR. Con tarifa ausente no se presenta importe comparable.                                                              |
| C10     | Neto de prueba 100, tarifa 10 y base 8.                                                  | Fórmula acreditada da exento 80 y sujeto 20; no usar min por días. Solape sin procedencia e ID inválido quedan pendientes. |
| C11     | Dos recálculos firmados +20 y −5 destinados al mismo mes.                                | Esperado +15; registro duplicado no vuelve a sumarse. Sin fuente, falta fuente.                                            |
| C12     | Cuota prorrateada 100 en octubre y 200 en diciembre; otra solicitud a descontar 30.      | Octubre: DT 100 y DU 30. No dividir por doce ni mezclar conceptos.                                                         |
| C13     | Beneficiario de 25 años en octubre, otro en noviembre y otro de entidad ajena.           | Evaluar octubre autorizado; no anticipar noviembre ni usar nacimiento.                                                     |
| C14     | M=100 y octubre=80 para una persona; nómina=100.                                         | Diferencia mensual +20; mostrar incoherencia M/mes sin sustituir esperado.                                                 |
| C15     | Ayuda vehículo 1=20 y ocurrencia 2=35, anterior de ocurrencia 2=30.                      | +5 para la métrica acreditada; no +10 ni doble conteo de cuota.                                                            |
| C16     | Fuente mensual declara 15 EUR y «Clases=SI»; nómina 15.                                  | Coincide por cuota explícita, sin convertir SI en una tarifa fija.                                                         |

Añadir pruebas transversales de fuente vacía frente a cero, matrícula numérica
con alias único/ambiguo, duplicados, cambio de ejercicio, precisión y signos,
archivo modificado durante exportación, límites/ZIP, origen ajeno, sesión
debug y cambio de sociedad durante una petición. Pantalla y Excel deben
mostrar las mismas cifras y pendientes. No añadir PII a fixtures o logs.

## Cierre documental y operativo

Los perfiles de columnas y las incidencias anteriores ya están documentados.
Las Q resueltas/parciales se actualizan sin borrar la evidencia histórica del
vídeo. No se declara paridad completa mientras falten versiones SQL elegidas,
el anterior, fuentes de excesos/anticipos y reglas condicionadas.
Los resultados de lint, typecheck, suite, build y revisión Git de esta entrega
se registran con sus resultados reales en `spec/changelog.md`.
