# Contador de personas del alta (M4CSP_BLOCK_SEQ)

## Qué pasa

Meta4 da a cada persona nueva el ID `contador + 1` de `M4CSP_BLOCK_SEQ`
(sociedad, `SCO_ID_PROCESS = 'STD_PERSON'`; becarios BEC/BEC1 en
`STD_PERSON_BEC` con prefijo `BC`), regla `SCO_BLOCK_SEQ.SCO_GET_SEQUENCE`.
Meta4 no comprueba que ese ID esté libre: si ya existe, el alta se graba como un
periodo nuevo de esa persona y sobrescribe sus datos personales.

En PRE (2026-11-23) el contador de CYC está en **1814** y ya existen **1815** y
**1817**: las altas del 2026-11-19 y del 2026-11-23 acabaron todas en la persona
1815 (periodos 2 a 8).

## Por qué retrocede

Personalización «09/07/2019 FADRAO» en `SRCO_PA_HIRE.SRCO_SAVE_HIRE` (versión
SRSP): si el alta falla y el ID no tiene registros (`CSP_CONTROL_ID_EXIST_NE`),
resta 1 a `CSP_ANULAR_BLOCK_SEQ.SCO_SEQUENCE`. Supone que el ID fallido es el
último repartido; en importaciones de varias personas o con altas seguidas que
fallan, deja el contador por debajo de IDs ya usados.

## El contador no sube tras un alta correcta

Prueba en PRE del 2026-11-23, una importación por persona:

| Tarea | Contador antes | Persona creada | Contador después | Traza |
|---|---|---|---|---|
| 110003 | 1818 | 1819 | 1818 | 1 fila, 0 errores, «terminado correctamente» |
| 110004 | 1819 | 1820 | 1819 | 1 fila, 0 errores, «terminado correctamente» |

`SCO_GET_SEQUENCE` (versión 2025-03) suma 1 en `CYC_BLOCK_SEQ` y hace
`Persist_Tree` con commit, pero el valor guardado no cambia. Lo más probable es
que la resta FADRAO de `SRCO_SAVE_HIRE` se ejecute también en las altas que sí
crean la persona: `bResult` no es `M4_SUCCESS` dentro de la importación y
`CSP_CONTROL_ID_EXIST_NE` no ve todavía la persona (misma transacción), así que
resta el 1 que acababa de sumar. Encaja con que el contador no suba nunca y con
que, cuando un alta falla antes de sumar, retroceda. Para confirmarlo, el
administrador puede lanzar una importación con traza LN4 de
`SRCO_SAVE_HIRE` y mirar si entra en ese `If`.

## Qué hace powermeta4

La regla `SRCO_BLOCK_BEFORE_PERSIST_CO` solo usa el contador si
`SRCO_ARG_ID_PERSON` llega vacío; si viene relleno, Meta4 crea la persona con
ese ID. powermeta4 escribe en la columna G («ID PERSONA») de cada fichero el
primer ID libre a partir de `contador + 1` (sin persona en `STD_PERSON` y sin
dar ya en el mismo lote; «BC» en becarios, 4 dígitos en COLL), comprueba tras
la importación que la persona existe con ese ID y para el resto si no. Al
terminar avisa si el contador ha quedado por debajo del último ID dado: hay
que subirlo a mano para que un alta hecha en Meta4 no choque. Solo lee
PeopleNet (SELECT).

## Consulta de comprobación (solo lectura)

Para cada sociedad, el contador y los IDs ya ocupados en los 1.000 siguientes.
`OCUPADOS_SIG_1000` debe ser 0; si no, el contador debe subirse al menos a
`MAX_OCUPADO_CERCA`.

```sql
WITH ids AS (
  SELECT DISTINCT h.ID_ORGANIZATION, 'STD_PERSON' AS PROCESO,
         TRY_CAST(RTRIM(LTRIM(h.STD_ID_HR)) AS bigint) AS N
  FROM STD_HR_PERIOD h
  WHERE TRY_CAST(RTRIM(LTRIM(h.STD_ID_HR)) AS bigint) IS NOT NULL
  UNION
  SELECT DISTINCT h.ID_ORGANIZATION, 'STD_PERSON_BEC',
         TRY_CAST(SUBSTRING(RTRIM(LTRIM(h.STD_ID_HR)), 3, 20) AS bigint)
  FROM STD_HR_PERIOD h
  WHERE h.STD_ID_HR LIKE 'BC%'
    AND TRY_CAST(SUBSTRING(RTRIM(LTRIM(h.STD_ID_HR)), 3, 20) AS bigint) IS NOT NULL
)
SELECT s.ID_ORGANIZATION, s.SCO_ID_PROCESS, s.SCO_SEQUENCE AS CONTADOR,
  (SELECT COUNT(*) FROM ids i
    WHERE i.ID_ORGANIZATION = s.ID_ORGANIZATION AND i.PROCESO = s.SCO_ID_PROCESS
      AND i.N > s.SCO_SEQUENCE AND i.N <= s.SCO_SEQUENCE + 1000) AS OCUPADOS_SIG_1000,
  (SELECT MAX(i.N) FROM ids i
    WHERE i.ID_ORGANIZATION = s.ID_ORGANIZATION AND i.PROCESO = s.SCO_ID_PROCESS
      AND i.N > s.SCO_SEQUENCE AND i.N <= s.SCO_SEQUENCE + 1000) AS MAX_OCUPADO_CERCA
FROM M4CSP_BLOCK_SEQ s
WHERE s.SCO_ID_PROCESS IN ('STD_PERSON', 'STD_PERSON_BEC')
  AND s.ID_ORGANIZATION IN ('CYC', 'IBER', 'COLL')
ORDER BY s.ID_ORGANIZATION, s.SCO_ID_PROCESS;
```

Resultado en PRE el 2026-11-23:

| Sociedad | Proceso | Contador | Ocupados (siguientes 1.000) | Máximo ocupado |
|---|---|---|---|---|
| CYC | STD_PERSON | 1814 | 2 (1815, 1817) | 1817 |
| CYC | STD_PERSON_BEC | 202 | 0 | — |
| IBER | STD_PERSON | 10493 | 0 | — |
| IBER | STD_PERSON_BEC | 9 | 0 | — |
| COLL | STD_PERSON | 27 | 0 | — |

## Pendiente en Meta4 (administrador)

1. Confirmar con traza por qué el contador no sube tras un alta correcta (ver
   arriba) y corregir la resta de `SRCO_SAVE_HIRE` (SRSP): que solo reste si el
   alta no ha creado la persona y el contador sigue valiendo el ID fallido, o
   quitarla.
2. Mientras tanto, tras cada alta desde powermeta4, subir el contador al último
   ID dado (powermeta4 lo indica al terminar).
3. Limpiar las personas 1815 (periodos 2 a 8) y 1818 (periodos 2 y 3) de PRE.
