# Cuadre de nómina: uso, instalación y validación

Entrega de implementación: 2026-10-27. Se conserva el análisis documental
previo como evidencia, sin reinterpretar sus hechos.

La herramienta `/tools/cuadre-nomina` permite crear expedientes parciales,
guardarlos y completarlos con fuentes posteriores. La sociedad procede de la
sesión; no hay escrituras ERP ni envío de datos al chat o a servicios externos.

## C04 automático — 2026-11-13

El motor 1.2.0 añade lectura automática de configuración y devengo al **crear
un expediente real o actualizar expresamente sus instantáneas**. Abrirlo,
revisarlo, guardar parámetros y exportarlo reutilizan la captura guardada: no
consultan ni actualizan PeopleNet silenciosamente. No hay migración adicional.
Los parámetros manuales anteriores se conservan para expedientes sin esta
captura; una captura automática pendiente no se acredita con esos parámetros.

La evidencia VM aportada por el usuario confirma `DMD1`, los componentes
`CSP_PRORRATEADA_PE1…PE5`, valores por defecto (0 para 1–4; NULL para 5),
asignaciones individuales y el código completo de `CSP_PRORRATEADA/R1`.
**Esto acredita el significado de los indicadores, no valida la nueva lectura
SQL ni toda la población.** Las salidas de diagnóstico 01–05 siguen pendientes.

### Reglas y alcance de la lectura

- Se reutilizan el informe, el pool y la protección SELECT existentes. Hay ocho
  lecturas agrupadas, en parejas, sin consultas de recibo por empleado.
- La captura conserva el periodo de alta de la columna `Periodo`, sin alterar
  las posiciones de las columnas. C04 agrupa por empresa/matrícula y exige un
  único periodo de alta; no suma bases de empresas diferentes.
- Se resuelven asignaciones individuales, de empresa y de convenio por cada
  día del mes. Menor número indica mayor prioridad; empates con valores
  contradictorios, prioridades inválidas y cambios efectivos de modalidad
  quedan pendientes. `1` y `1.00000000` son equivalentes; NULL no es cero.
- Otros niveles de herencia se detectan y se conservan pendientes, sin
  reproducir un motor SAV genérico. La detección es conservadora: una asignación
  de uno de esos niveles al mismo indicador puede bloquearlo aunque después
  resulte ajena a la persona. Se identifica su tabla en el motivo.
- Se verifica el código ejecutable de la versión confirmada de R1, junto con
  sus metadatos. Solo se admite **01/08/2026–31/10/2026**. Noviembre y otras
  versiones/reglas quedan pendientes; no se prolonga la vigencia por similitud.
- R1 usa `1 → S`, `0 → N`, `NULL → conservar definición`. En IBER fuerza S
  para la extra 3; para la 4 fuerza N en convenio `0041`, S en otros convenios
  acreditados. Solo actúa sobre extras que existen en su definición.
- Las correcciones se consultan a fecha de ejecución del informe (`runAt`).
  Historiales/definiciones sin corrección bitemporal modificados después de esa
  ejecución no se presentan como configuración histórica acreditada.
- Se cruzan fecha de pago, imputación actual, frecuencia, moneda principal,
  matrícula, periodo de alta y tramos con los acumulados usados por el recibo.
  Deben cubrir todo el mes sin huecos ni duplicados y coincidir con los importes
  de extras del informe guardado. Los valores aplicados de Meta4 sirven de
  contraste cuando coinciden con esas claves; no acreditan modalidad por importe.

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

1. Con el servidor detenido, ejecutar `npm run build` y arrancar `npm run start`.
   No hay nueva migración ni archivo que subir para C04.
2. Abrir el expediente de octubre de 2026 y usar **Actualizar instantáneas**,
   con las ejecuciones correctas. Guardar parámetros sin actualizar no carga la
   nueva evidencia. Si falta `Periodo` en el informe, aparecerá pendiente.
3. Reutilizar las claves de `cuadre:discover` y ejecutar:

   ```powershell
   npm run cuadre:verify -- CYC --selection ".\data\cuadre-selection.json"
   ```

   Revisar `extraPayModality.issue`, `people`, `accredited` y `pending`, y el
   resumen de C04. `accredited` cuenta configuraciones sin incidencia; no implica
   que todos sus devengos permitan aplicar una fórmula económica.

4. Contrastar con PeopleNet una extra completa, una modalidad con exactamente
   las tres extras prorrateadas, una diferencia conocida, un pago faltante y un
   caso parcial. Confirmar el mapeo de acumulados, tipo salarial/unidades,
   porcentajes, ausencias y calendario. En IBER revisar la extra 3 y la 4 con
   convenio `0041` y con otro convenio.
5. Verificar recarga/exportación sin nuevas lecturas, conservación de revisiones
   C12 y noviembre pendiente. Ante diferencias de captura, actualizar/generar
   conscientemente el informe correcto; no forzar importes o datos en SQLite.

Pruebas locales y resultados finales de esta entrega: `VALIDATION.md` y
`spec/changelog.md`. No se afirma ejecución SQL real de este lector desde el
entorno local. «14 meses» sigue siendo una etiqueta de RRHH sin correspondencia
anual acreditada: el control usa el tratamiento real de cada extra.

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
