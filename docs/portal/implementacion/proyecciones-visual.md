# Informe de proyecciones: vista de compensación total

## Presentación

`/portal/empleado/aplicaciones/proyecciones` conserva la navegación y la ruta
anterior de Retribución. La vista `projections` se selecciona desde el registro.
Muestra ejercicio, identidad propia, categoría, centro y fecha de cálculo;
resumen, dos anillos beUI, todos los bloques y comparativa en euros. Cada
gráfica conserva una leyenda de importes; el histórico tiene también tabla.
Pagas y revisiones mantienen su orden. Retribución fija reúne salario convenio,
complementos de compañía, complemento funcional y total en una única tabla
con subtítulos internos. Después aparecen variable, base, Seguridad Social
y manutención. Capitales, primas y ayudas comparten una fila compacta a la
izquierda; PPSE y aportación definida ocupan filas independientes. Flexible,
Navidad y comparativa cierran el informe. Los bloques opcionales conservan
el orden de `processTable` del original.

Desde 1280 px se retira el límite de ancho únicamente de estas rutas, con
márgenes de 8 px y columnas proporcionales: ninguna tabla necesita scroll.
Se conserva el estado de la sidebar. Las cabeceras no muestran badges de
Real/Proyectada; conservan la clasificación en texto accesible y estilos.
Las matrices indican euros en la cabecera y conservan dos decimales; con más
de 15 pagas omiten el separador de miles en las celdas mensuales. Los lectores
de pantalla reciben siempre el importe con moneda. En tablet/móvil hay scroll
contenido con concepto y subtítulos visibles y foco de teclado.

Fuentes funcionales: `sse_g2/proyecciones/index.jsp`, `script.js`,
`printGrafDoughnut.js`, `printGrafBar.js` y `sse_g2_inf_proyec.jsp` de la copia
original. El PDF aportado sirve como referencia visual; no se versionan sus
datos personales. La descarga sigue usando el PDF que guarda PeopleNet.

## Lecturas y reglas

- `PROJECTION_SQL`, en el registro, declara cabeceras y conceptos actuales
  (`M4CSP_DATOS_PROYECCION`, `M4CSP_EXTRAC_PROYECCION`) e históricos
  (`M4CSP_DATOS_PROYECCION_CONS`, `M4CSP_EXTRAC_PROYECCION_CONS`). Las columnas
  proceden de los nodos documentados en `lecturas-sql.md`; solo `SELECT`.
- `PAGA01`–`PAGA20` son etiquetas en la cabecera e importes en la extracción.
  `PAGA_TOT` no es el total salarial. El año histórico procede de `ANIO`; el
  actual, de los años contenidos en las etiquetas de sus pagas. Sin año
  identificable no se construye un informe ni se usa el año del ordenador.
- `CSP_REAL` separa las pagas reales de las proyectadas. Un contador ausente
  o inválido se anuncia, sin clasificar artificialmente los importes.
- Sociedad y matrícula salen de `PortalContext`, con identidad coherente.
  `year` solo selecciona ejercicios disponibles de esa persona; el periodo
  de alta se toma de la cabecera. Las consultas de conceptos usan ese periodo
  y, en histórico, el año. Periodos igualmente recientes ambiguos se rechazan.
- Los conceptos adicionales se conservan dentro del contrato de grupo/subgrupo
  anclado por los conceptos literales del original, con ausencias y signos.
  Pares sin ancla o ambiguos no generan tablas arbitrarias; G/SG y Retenciones
  no aparecen como bloques automáticos. Salud y Manutención se conservan para
  los gráficos, sin añadirlos a primas ni flexible. Las primas suman los
  conceptos seleccionados, excluyendo salud, Navidad y vehículo, como el
  script original. Totales derivados con una cifra desconocida siguen ausentes.
  El total fijo debe existir en la extracción: no se
  inventa sumando un subconjunto de conceptos. Variable cero usa la base y
  evaluación informadas como objetivo, según el gráfico original.
- El PPSE conserva la regla original de limitar la extraordinaria anual a
  la ordinaria. Las aportaciones desconocidas permanecen desconocidas.
- Retribución anual y objetivo de compensación, y la serie de hasta cinco
  años, reutilizan la lectura quinquenal verificada **solo para la matrícula
  propia**. No se envía la ficha administrativa al cliente, únicamente sus
  cifras. Se conservan los distintos importes de haberes y compensación.
- Las valoraciones de beneficios siguen las referencias del gráfico original
  (incluidos seguro de salud anualizado y aportaciones). La antigua constante
  de 100 euros de ayuda de consumo se elimina: solo se usa un importe informado.
- La tabla de aportación definida conserva `TOTAL` (último año/acumulado);
  su valoración gráfica lee la última paga real. No se sustituye un acumulado
  de la tabla por la cifra usada en el anillo.
- Las lecturas se resuelven independientemente. Un histórico, documento o
  lectura económica fallido no borra el desglose actual disponible. Sin un
  desglose se conservan selector y descarga original cuando existe.

No se ejecutan `CARGA`, cálculos, escrituras ERP ni llamadas desde el chat.
No se añaden tablas SQLite ni datos económicos al store del workspace.

## Desarrollo y comprobación

La muestra exige `isDebugAuthEnabled()`, una sesión autenticada debug y un
contexto debug. Se carga en servidor mediante importación condicional.
`scenario=partial|empty|many-pays` y `year` permiten revisar estados; dichos parámetros
no activan muestras con sesión Meta4, flag apagado o en producción.
Persona, importes y ejercicios de la muestra son ficticios y no se persisten.

Pruebas de reglas, fuentes, aislamiento, ejercicios, periodos, ausencias,
puerta de debug, escalas y subtítulos de la tabla compartida. Suite completa:
930 correctas y 2 omitidas; 48 dirigidas finales correctas. Revisión de 24
combinaciones de escritorio (1280/1440/1920 px, claro/oscuro, sidebar abierta
o colapsada y 15/20 pagas): sin scroll de tablas ni cifras partidas. Doce
casos de tablet/móvil (1024/768/390 px, ambos temas y 15/20 pagas) con scroll
contenido, teclado y concepto fijo; parcial/vacío y recarga de ejercicio.
Sin desbordamiento de página ni errores de aplicación; al reiniciar dev
se observaron los avisos temporales de desconexión de HMR.

**Pendiente en la VM:** verificar presencia de tablas/columnas actuales e
históricas, etiquetas de conceptos y periodos; contrastar cifras y reglas de
valoración con el informe original de cada variante, especialmente el vínculo
entre el ejercicio de proyección y los datos quinquenales. Confirmar años
archivados fuera del rango económico disponible y descargas con sesión real.
Este equipo no tiene `PEOPLENET_DB_*`; no se afirma paridad con datos reales.
