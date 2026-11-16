# Inventario y lectura de las fuentes de cuadre

Entrega documental ampliada el 2026-10-26. **H**: observado en archivos;
**P**: contrato propuesto; **Q**: confirmación pendiente. El correo aportado
por el usuario fija el alcance funcional; no se ha leído su buzón.

Los diez originales están en la carpeta privada
`fuentes_cuadres_cierre_de_nómina/`, excluida de Git. No modificar, recalcular,
normalizar ni publicar esos archivos. Las rutas siguientes son nombres de
referencia locales, no descargas incluidas en el repositorio.

## Inventario reproducible

S identifica archivo; `S09/Flex!I2` identifica una celda. La huella completa y
los metadatos por hoja se conservan en el manifiesto privado de
`revision_video/excel-analysis/`. El prefijo SHA-256 permite localizar allí
la versión exacta sin versionar sus datos.

| ID  | Archivo                                           | Bytes    | SHA-256, prefijo    | Hojas                                                                  |
| --- | ------------------------------------------------- | -------- | ------------------- | ---------------------------------------------------------------------- |
| S01 | `25 40 Aniversario 2026.xlsx`                     | 13540    | `a1f0b19257585be93` | ACYC; Iberinform                                                       |
| S02 | `Altas Gimnasio 2026.xlsx`                        | 12744    | `1910ca83fa5d6d49`  | Hoja1                                                                  |
| S03 | `CYC_COMISION_SERVICIOS_20261015_162723.xlsx`     | 29921    | `4a7f011ab0ffee20`  | Carga de Valores; Detalle Comisiones; Desglose Comisiones; Hoja1 vacía |
| S04 | `Cobro nomnas 13 junio-18 julio.xlsx`             | 18843    | `4b6fc15a82626783`  | Bonos disfrute                                                         |
| S05 | `Colectivo afectado tecnología teletrabajo.xlsx`  | 1375753  | `2eefe2b7c3315022`  | 80-20; Hoja3                                                           |
| S06 | `Descuento comida septiembre nómina octubre.xlsx` | 426130   | `75b01d0b34ec413c`  | Descuentos; Hoja2                                                      |
| S07 | `Eurest nómina septiembre.xlsx`                   | 38451    | `0d2c2f4bb34080ad`  | Hoja1                                                                  |
| S08 | `FPS_Crédito_y_Caución_2026-10.xlsx`              | 107066   | `a396ae03da75297d`  | Sheet0                                                                 |
| S09 | `Normal_Inf 0001_C_202610161141 cuadres.xls`      | 12203008 | `08c6022d505b885c`  | 24 hojas, detalle inferior                                             |
| S10 | `Recarga comida ACYC septiembre.xlsx`             | 46908    | `b3cee4c258dc0491`  | Hoja1                                                                  |

Se inspeccionaron **39 hojas**, una vacía. SheetJS 0.18.5 y Node.js permiten
leer BIFF `.xls` y OOXML sin ejecutar fórmulas. Se contrastaron tablas
dinámicas y vistas con Excel 16.0 en una instancia propia: `ReadOnly=true`,
cálculo manual, eventos/macros deshabilitados, `UpdateLinks=0`; cierre sin
guardar. No se refrescaron pivots ni se llamó a `Calculate`.

Se revisaron 36 vistas nativas iniciales y seis rangos adicionales, renderizados
localmente con Poppler. Respetan filtros/filas ocultas guardados; por eso el
análisis de datos lee también las filas que la vista no muestra. No se
considera una celda oculta como inexistente. Los estilos y notas orientan la
revisión, pero su color no acredita por sí solo una regla de negocio.

## Zonas de S09: datos, versiones y resultados derivados

| Hoja               | Zona y función observadas                                               | Tratamiento                                                                                                 |
| ------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Datos              | Tabla fuente `A1:GS580`; pivot añadido `A583:T1144`.                    | La tabla fuente tiene 579 filas y 559 identidades. No leer hasta `UsedRange` como si todo fueran registros. |
| informe            | Pivot `A5:GM585`, fuente `Datos!R1C1:R580C201`.                         | Presentación, no nueva fuente independiente.                                                                |
| Datos2             | Fuente `A1:GS580`; cálculos auxiliares posteriores; pivot `A584:B1145`. | Copia con cambios; no concatenarla con Datos.                                                               |
| Datos3             | Fuente `A1:GS581`; cálculos posteriores; pivot `A593:C1154`.            | 580 filas y 559 identidades; no es automáticamente otro mes.                                                |
| Fijos              | `A1:F560` y `I1:P561`; identidad M, delta N, notas O/P.                 | Snapshots mensuales; N es `L-F`, actual menos anterior según el procedimiento.                              |
| IRPF               | `A1:D560` y `F1:M560`; K identidad, L delta.                            | Snapshot de porcentajes; no importarlos como filas de nómina.                                               |
| Mercer             | Copia de S08, `A1:AW486`.                                               | No contar ambas copias como dos fuentes.                                                                    |
| Flex               | `A1:AD561`; nueve parejas de conceptos y referencias.                   | Derivado de nómina y Mercer; fórmulas acreditan correspondencias.                                           |
| Forzar mat-pat-cat | `A4:Q571`; cálculos puntuales y capturas de incidencias.                | Evidencia contextual y excepciones, no un algoritmo general ni una carga masiva.                            |
| P.extra            | `A1:M560`; `L=G+H+I`, `M=K-L` en las filas con fórmula.                 | Cálculo simple condicionado; no extrapolar a devengo proporcional.                                          |
| Teletrabajo        | `A1:M561`, nómina agregada y cálculos puntuales.                        | El esperado independiente procede de S05, no de esta tabla.                                                 |
| Kms                | `A1:R25`, informe y copia de Carga de Valores.                          | Carga de Valores es la referencia; detalle/desglose no se añaden otra vez.                                  |
| Apartamentos       | `A1:AD59`; tabla de nómina, consolidado y bloques copiados.             | Importar S04, no sumar sus copias y su consolidado.                                                         |
| Turnos             | `A1:M7`, dos snapshots y anotaciones.                                   | Comparación mensual, no recálculo teórico.                                                                  |
| Comp.comida        | `A1:N194`; M esperado y N delta.                                        | Hay excepciones por fila; ver contrato C09.                                                                 |
| Tarjeta comida     | `A1:T338`; nómina, carga/descarga, reparto y deltas.                    | Combina S10 y S07; conservar entradas no vinculadas.                                                        |
| Excesos            | `A1:D40`, nómina y notas de revisión.                                   | No contiene el registro externo de recálculos que explica el vídeo.                                         |
| Anticipos          | `A1:C12`, tabla agregada de prorrateado.                                | No sustituye cartas ni calendario independiente de cuotas.                                                  |
| 25-40              | `A1:O16`, nómina, SB y copia de beneficiarios.                          | Usar S01 completo, no solo esta copia parcial.                                                              |
| Fichero PPSE       | `A1:AD263`, tabla, totales, notas y registros finales.                  | Es la fuente PPSE recibida, embebida; no hay otro archivo independiente de PPSE.                            |
| PPSE               | `A1:E561`; busca en M hasta fila 252.                                   | La búsqueda no usa el mes ni incluye todos los registros: no copiarla ciegamente.                           |
| Gimnasio           | `A1:L44`, informe y copia de S02.                                       | Cruce por matrícula; cuotas de F de S02, no inferidas de «SI».                                              |
| Conceptos varios   | `A1:O561`, once conceptos y un contraste de cuota.                      | Inventario concreto en C15; columnas E/F no son dos conceptos distintos.                                    |
| Grupo empresa      | `A1:C555`, snapshot de cuota.                                           | Evidencia de comparación, sin mes autónomo acreditado.                                                      |

Las tres tablas Datos contienen fecha de pago de octubre de 2026. Sus
diferencias y pivots son hechos; no prueban una secuencia de ejecución ni
identifican septiembre. En funcionamiento se leerá la ejecución SQL elegida,
sin importar S09 como sustituto de las nóminas actual/anterior.

## Perfiles externos y límites de los bloques

- S01: ACYC tiene cabecera B3:I3, grupos de 40 y 25 separados por una nueva
  cabecera; Iberinform usa B2:G2. Antigüedad es H en ACYC y G en Iberinform.
  Filtrar entidad autorizada y periodo, excluyendo títulos/cabeceras.
- S02: A1:F1; datos 2:43, clave A y pago mensual F. G/H no forman parte
  del contrato del importe. Cambios de mes requieren reconocer la cabecera.
- S03: cabecera en fila 2; carga A3:I26, detalle A3:I67 y desglose A3:AU67.
  Desglose contiene datos bancarios que no son necesarios para el cuadre.
- S04: cabecera fila 2; bloques A3:E25, I3:N25 y P3:V15. Las comparaciones
  de matrículas en filas 32:89 son diagnósticos, no nuevas cuotas.
- S05: cabecera fila 1; colectivo A2:BL119, importes BO:BR hasta fila 117.
  Las dos últimas personas del colectivo carecen de esperado calculado.
  Filas 121:147 contienen casos/notas; no añadirlas como personas del listado.
  Hoja3 es una copia de resultados ERP, no esperado independiente.
- S06: Descuentos tiene cabecera A1:K1, personas 2:194; Hoja2 incluye título,
  periodo en A2 y cabecera A4:E4. No sumar ambos listados como ausencias nuevas.
- S07: cabecera A1:J1 y 13 registros 2:14. B14 contiene texto personal en
  vez de matrícula; queda sin vincular hasta corrección confirmada. No unirlo
  por nombre ni descartarlo como si fuera un total.
- S08: grupos en fila 1, cabeceras en fila 2 y datos A3:AW486. Preservar
  matrícula textual y distinguir totales de importes mensuales.
- S10: cabecera A1:L1 y datos 2:325. Leer carga C, Eurest D y descarga F;
  reconstruir cálculos acreditados sin ejecutar fórmulas del archivo.

Los límites anteriores identifican esta versión, no un número máximo perpetuo
de empleados. Un adaptador debe reconocer bloques/cabeceras y finales, incluir
filas ocultas y detectar crecimiento/cambios; nunca truncar a la última fila
de una fórmula histórica.

## Ausencias documentales que permanecen

No se ha recibido un informe bruto autónomo de septiembre, el registro
independiente de excesos ni las cartas/calendario de anticipos. Tampoco se
recibió PPSE como libro aparte, aunque su hoja sí permite definir un perfil.
La selección de ejecuciones SQL sigue requiriendo contraste en VM. Las dudas
de tarifas, vigencias y acceso se clasifican en [OPEN_QUESTIONS](OPEN_QUESTIONS.md).
