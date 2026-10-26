# Validación de fuentes y criterios de aceptación

Estado: análisis documental y comprobaciones locales, **no implementación
ni validación operativa en PeopleNet**. Los originales no se han guardado
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
