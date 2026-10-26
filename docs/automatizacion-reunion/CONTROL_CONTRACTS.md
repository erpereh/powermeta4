# Contratos de los dieciséis controles

Este anexo concreta [SPEC](SPEC.md). S01–S10 y sus rangos están en
[SOURCES](SOURCES.md); E remite al vídeo de [AS_IS](AS_IS.md).
**H** identifica fórmula/dato observado; **P**, decisión de implementación;
las Q siguen en [OPEN_QUESTIONS](OPEN_QUESTIONS.md). No hay código de producto
implementado en esta entrega.

## Contrato común

P: la nómina procede exclusivamente de la ejecución SQL actual/anterior
confirmada. El perfil inicial CYC corresponde a las 201 columnas de Datos de
S09. Una selección de columna incluye cabecera, ocurrencia (desde 1), índice
(desde 0 en código) y firma del perfil. Las letras siguientes son referencias
al original, no autorización para aceptar cualquier fichero con esa posición.
No usar la primera coincidencia de nombre fuera de un perfil acreditado.

P: clave `(sociedad del servidor, matrícula textual, periodo, control,
métrica)`, unión completa de personas y trazabilidad a filas. Conservar ceros;
para números externos, resolver solo un alias inequívoco entre las matrículas
autorizadas del servidor. No usar nombres ni rellenar con ceros a una longitud
universal. Un ID desconocido se conserva sin vincular y bloquea cobertura
completa del control; no se elimina del resultado.

P: sumar importes dentro de su mismo concepto, persona y paga; no sumar
porcentajes, subtotales, copias ni fuentes de detalle y carga simultáneamente.
Usar decimales deterministas; delta mensual `actual-anterior`, delta externo
`nómina-esperado normalizado`. El valor absoluto solo comprueba tolerancia.
0,01 EUR/0,01 pp son tolerancias propuestas, visibles y pendientes de Q03.

P: conservar cero explícito, vacío, sin registro, error y no aplicable como
presencias diferentes. En un listado exhaustivo acreditado, la ausencia de
beneficiario permite marcar «fuera de listado» y detectar un pago inesperado;
no equivale automáticamente a ausencia de deuda o beneficio en cualquier
archivo parcial. Exigir confirmación de cobertura por categoría.

P: las fórmulas de fuentes se inspeccionan, pero no se ejecutan. Cuando se
conozca su algoritmo, recalcularlo en el motor desde las entradas primitivas
y mostrar discrepancias con la cache. Una cache sola no aprueba una fuente
derivada; una fórmula sin cache/regla no se convierte en cero. Los motivos
del libro son anotaciones de RRHH, no hechos históricos de SQL.

## C01 — Fijos

H: correo y E03–E06. `Datos!DF1`: «Total conceptos fijos».
`Fijos!F` es referencia anterior, L actual; `N2=L2-F2` y M comprueba IDs.
P: sumar DF por persona en ambas ejecuciones, presentar altas/bajas de
población y cambios. Un cambio puede ser legítimo; no modificar salarios.
La fecha del anterior debe proceder de su ejecución, no del nombre del libro.
Q02/Q04: falta validar septiembre y causas históricas. El cruce no necesita
motivos automáticos para mostrar el delta.

## C02 — IRPF

H: correo/E08. Dos cabeceras iguales: J y EV. El perfil inicial selecciona
**ocurrencia 1, J**; el contraste con el snapshot actual `IRPF!J` confirma esa
lectura usando porcentaje único, no suma. Las dos ocurrencias difieren en
algunas filas: registrarlo como diagnóstico, no sustituir una por otra.
P: por persona/ejecución, consolidar valores repetidos idénticos de la
ocurrencia seleccionada; varios porcentajes distintos quedan no comparables
hasta acreditar tramos/regla. Comparar en puntos porcentuales y conservar
ambas ocurrencias en la evidencia técnica mínima. `IRPF!L2=J2-D2` es el delta
manual. No reproducir sumas del resumen general de la plantilla.

## C03 — Flex / Mercer

H: correo/E09–E10; nueve correspondencias confirmadas contra S08 y Datos.
La columna A de S08 contiene matrícula; cabecera fila 2. En la tabla, X es
el importe mensual del proveedor y el esperado usa el signo indicado.

| Métrica            | Nómina S09/Datos                           | S08/Sheet0                    | Esperado | Fórmula de contraste en S09/Flex |
| ------------------ | ------------------------------------------ | ----------------------------- | -------- | -------------------------------- |
| Seguro empresa     | DD, Seguro Salud Empresa                   | K, Seguro Salud Cia Mensual   | +X       | F2=D2-E2                         |
| Descuento médico   | CX, Desc. Seguro Medico                    | I, Exento Mes SS              | −X       | I2=G2+H2                         |
| Especie médica     | DC, Especie seguro médico                  | J, Especie Mes SS             | −X       | L2=J2+K2                         |
| Guardería          | CV, Desc. Guarderia                        | O, Coste Mes guarderia        | −X       | O2=M2+N2                         |
| Transporte         | CY, Desc. Transporte                       | AI, Exento Mes transporte     | −X       | R2=P2+Q2                         |
| Especie transporte | DE, Especie transporte                     | AJ, Especie Mes transporte    | −X       | U2=S2+T2                         |
| Renting            | CW, Desc. Renting                          | AC, Exento Mes renting coche  | −X       | X2=V2+W2                         |
| Especie renting    | DB, Especie Renting                        | AD, Especie Mes renting coche | −X       | AA2=Y2+Z2                        |
| Seguro ahorro      | CU, Descuento mes seguro ahorro jubilación | V, Exento Mes Ahorro          | −X       | AD2=AB2+AC2                      |

P: no incorporar otros productos de AW por proximidad ni importes anuales.
Si la fuente repite una matrícula, detener esa persona/producto hasta
acreditar si corresponde sumar contratos o resolver un duplicado; no usar
el primer BUSCARV. Declarar personas fuera de la fuente y su cobertura. El
log de carga y la copia Mercer en S09 no son fuentes adicionales.
Q03/Q05: precisión y otros perfiles/entidades se validan por separado.

## C04 — Paga extra

H: correo/E11. Base AK + experiencia AL + CAI AU; prorrata BV; extras
BW/BX/BY/BZ. `P.extra!L3=G3+H3+I3`, `M3=K3-L3` para la tercera extra.
La hoja de excepciones muestra cálculos por 360 días y cambios a 12 pagas,
además de capturas de permisos. No demuestra una regla universal de descuento.
P: comparar extra completa solo con devengo completo acreditado. En otro
caso, mostrar valores y «No comparable — falta regla/histórico de devengo».
No usar fila sin fórmula como cero esperado ni aplicar la tercera extra a
cualquier mes/sociedad. Q06 mantiene proporcionalidad y convenios pendientes.

## C05 — Teletrabajo

H: correo/E12. Nómina FK; S05/80-20: A matrícula, BP esperado, BQ nómina
copiada, BR diferencia. `BO2=2.24*4`, `BP2=BO2*5`; BQ busca Hoja3.
El colectivo llega a fila 119; BP/BQ/BR solo hasta 117. Hay notas de cambios
de porcentaje/fecha y cálculos separados en 121:147.
P: tomar pertenencia del bloque principal e importe esperado solo cuando la
tarifa, días/semanas y vigencia estén confirmados. BQ/Hoja3 nunca son esperado
independiente. Las dos personas finales sin cálculo quedan pendientes, no
fuera del colectivo. Reconstruir el cálculo conocido con parámetros del mes;
no imponer cuatro días/cinco semanas ni copiar BP a todas las personas.
Q07: completar 40 %, ausencias y vigencias mediante la plantilla de excepciones.

## C06 — Kms y cancelación de provisión

H: correo/E13. S03/Carga de Valores, cabecera fila 2: A matrícula, B artículo,
G `imp_totexekm_c`, H `imp_totdeckm_c`, I `imp_totcocpro_c`.
Nómina BH exento, BI no exento, DS cancelación. `Kms!Q2=C2-M2` y
`R2=D2-N2`; el libro también muestra cancelación en E e I del origen copiado
en O, sin fórmula de contraste adicional.
P: sumar G/H/I por matrícula y artículos reconocidos, comparar por separado
con BH/BI/DS. E es cantidad; C y F no sustituyen automáticamente a G/H/I.
No añadir Detalle y Desglose a la carga ya agregada. Conservar ventana
de devengo confirmada, no deducirla exclusivamente de la fecha del archivo.
Q08: el contrato del fichero está identificado; el origen SQL/servicio del
generador y sus efectos siguen pendientes. V1 usa el fichero.

## C07 — Apartamentos

H: correo/E14. Nómina DI; bloques de S04 con matrículas A/I/P y octubre
D/L/S; noviembre E/M/T; diciembre N/U y enero V donde existen.
P: sumar cuotas del mismo año/mes de los tres bloques, varias estancias y
todos los documentos seleccionados. No sumar coste C/K/R ni diagnósticos
de filas 32:89. Si la cabecera solo contiene mes, confirmar año y cruce de
enero al siguiente ejercicio; no deducir año del intervalo junio–julio.
Mismo hash no se suma dos veces; versión del mismo documento se sustituye
tras confirmación. Un pago sin cuota y una cuota sin pago son hallazgos.
Q01/Q03: hay una diferencia con el original que debe conservarse y explicarse.

## C08 — Turnos y festivos

H: E15, hoja Turnos. Nómina BD «Complemento Trabajo a Turnos» y BC
«importe compl trabajo fest». `K2=C2-H2`, `L2=D2-I2` en el libro.
P: delta canónico actual-anterior, indicando que el libro presenta el sentido
inverso en estas columnas. Comparar ambas métricas por persona; no usar
BE «Trabajo en Festivos en Incidencias» como sustituto de BC. Q04 para causas.

## C09 — Compensación comida por nómina

H: correo/E16. Nómina BB. S06/Descuentos: A matrícula, D «Nº Ausencias»,
F otra columna de días, H ajuste Eurest noviembre e I ajuste en nómina de
octubre recibido en Eurest septiembre. El libro copia D en `Comp.comida!H`.
M usa `(9-H)*12.1` en la mayoría, `(8-H)*12.1` en otras filas y excepciones
con ausencias fijadas en la fórmula en vez de H; N es `C-M`.
P: seleccionar D para reproducir el origen del contraste, conservar F/H/I
como evidencia distinta y exigir días de derecho/tarifa/vigencia por persona
o colectivo. Las excepciones necesitan confirmación explícita con motivo.
No deducirlas del centro de trabajo, no sumar H/I sin regla y no convertir
un ajuste de Eurest de noviembre en descuento de octubre automáticamente.
Sin esos parámetros se compara cobertura/días; importe no comparable (Q09).

## C10 — Tarjeta comida, recarga y Eurest

H: correo/E17. Nómina FB exento y FC no exento. Dos fuentes de entradas:
S10 A matrícula, C carga, D ya cargado en Eurest y F descarga; S07 B
matrícula y E importe Eurest. S07 tiene una identidad inválida en B14.

H: para S10, `E=C+D`, `G=E-F`, `H=G/12.1`, `I=G/11`, `J=H-I`,
`K=J*11`, `L=G+K`. Para S07, F=E/12.1, G=E/11, H=F-G,
I=H*11, J=E+I. La parte sujeta está expresada con signo negativo en K/I.

P: reconstruir las expresiones en un perfil de periodo acreditado.
En S10, C/D son sumandos de carga y F descarga opcional; los huecos de un
sumando/descarga se interpretan como ausencia de ajuste solo en este perfil,
reproduciendo la fórmula acreditada y exigiendo al menos una carga explícita
en C o D. Error, texto inválido o ambas cargas vacías quedan no comparables.
Esta excepción de presencia no se extiende a otros controles.

P: para cada neto válido N,
esperado exento `N+((N/tarifa)-(N/base))*base`; esperado no exento es
el opuesto de esa parte firmada. Ambos suman N. **No** sustituir por
`min(N,11*días)` ni por un límite fiscal inferido: son reglas distintas.
La muestra usa tarifa 12,1 y base 11; Q09 debe confirmar su vigencia.

P: S07 representa entradas adicionales a S10 en la muestra; sus matrículas
válidas no se solapan. En futuros archivos, si una persona aparece en ambos,
pedir si S07 ya está incluido en D de S10 y detener esa persona hasta resolver
la procedencia; no sumar ni deduplicar automáticamente. Los 21 registros
de S10 con D no nulo ya lo incluyen en el neto. No volver a añadir ese D.
Conservar el registro inválido de S07 como «No comparable — identidad»,
sin unir por nombre ni declarar cobertura completa.

## C11 — Excesos

H: correo/E18. Nómina DX; S09/Excesos es resultado y comentarios, sin
registro independiente de recálculos. P: solicitar plantilla externa de
excesos, seleccionar mes de compensación y conservar signo/precisión.
Sin ella mostrar «Falta fuente», aunque el libro tenga un «OK». No inferir
la anotación perdida a partir del saldo ERP. Q01 sigue parcialmente abierta.

## C12 — Anticipos

H: correo/E20. **DT Anticipo Prorrateado Importe** y **DU Anticipos a
descontar**, subcontroles separados. DV anticipo de vehículo pertenece a C15.
La hoja Anticipos recibida solo acredita DT como resultado, no la solicitud.
P: sumar las cuotas del calendario confirmado de cada tipo/solicitud/mes.
Admitir doble cuota, meses sin cuota, bajas y cancelaciones documentadas.
No repartir total entre doce ni reutilizar automáticamente préstamos del portal.
Q11: no se recibieron cartas/calendario. La plantilla inferior es para el
cuadre; **no acredita un formato de importación válido de PeopleNet**.

## C13 — Aniversarios 25/40

H: correo/E21. Nómina BJ/BK y base AK. S01 usa entidad, matrícula y
antigüedad; en ACYC, I clasifica 25/40, con títulos y cabecera intermedia.
P: filtrar entidad acreditada del servidor, año/mes de aniversario laboral,
comparar pago esperado/pago sin beneficiario y base cuando sea aplicable.
En Iberinform la clasificación se deriva del aniversario de antigüedad,
sin inventar etiqueta ausente. No usar nacimiento ni asumir misma cuantía
para España/Portugal/IBER. Elegibilidad y proporcionalidad siguen en Q12.

## C14 — PPSE, aportación personal

H: correo/E22. Nómina DJ. S09/Fichero PPSE: A entidad, B matrícula,
M aportación personal, N límite de categoría, O:X meses marzo–diciembre;
octubre está en V. `PPSE!D2` busca M en B1:M252 y E resta esa referencia.
Hay tres personas adicionales en 261:263 y totales/notas sin matrícula.

P: perfil de la hoja embebida, incluyendo todos los registros con entidad e
identidad válida, sin incluir totales ni truncar a 252. La regla solicitada
en vídeo es comparar la **columna del mes**, no elegir M para forzar igualdad.
Mostrar como diagnóstico la discrepancia M/mes y la comparación manual
histórica. Un mes vacío queda pendiente. No recalcular límites ni asumir que
M sea un total anual. Q13 debe confirmar las cuatro diferencias de octubre
y la semántica/actualización del calendario antes de aceptar este control.

## C15 — Conceptos varios

H: correo/E24. Lista inicial cerrada por perfil:

| Columna en Conceptos varios | Campo de Datos                           | Observación                                          |
| --------------------------- | ---------------------------------------- | ---------------------------------------------------- |
| C                           | BF, Asignación Mínima por Desempeño      | Mensual                                              |
| D                           | CQ, Reajuste                             | Mensual                                              |
| E                           | DK, Cuota Grupo Empresa                  | Mensual; F es referencia duplicada, no otro concepto |
| H                           | DV, Anticipo Vehículo Importe            | Separado de C12                                      |
| I                           | FU, Ayuda pensión Importe                | Mensual                                              |
| J                           | FV, Ayuda Vivienda Desplazados Importe   | Mensual                                              |
| K                           | FX, Ayuda vehículo desplazados Importe   | Mensual                                              |
| L                           | FY, Acuerdo disponibilidad               | Mensual                                              |
| M                           | GA, Ayuda vehículo, ocurrencia 2         | La primera está en FJ; no confundirlas               |
| N                           | GB, Importe complemento firmas           | Mensual                                              |
| O                           | GI, Importe complemento datos siniestros | Mensual                                              |

P: comparar todos contra anterior, no limitar el motor al único BUSCARV del
libro (Cuota Grupo Empresa). La copia Grupo empresa no acredita por sí sola
el periodo anterior. No añadir otros conceptos por ser numéricos. Q14 queda
resuelta para este inventario, no para cualquier nuevo convenio/columna.

## C16 — Gimnasio

H: correo y S02. Nómina GJ «Cuota Gimnasio Importe»; fuente Hoja1 A
«Id Empleado», F «Pago de octubre». `S09/Gimnasio!L2=C2-J2`.
P: cruzar por matrícula y comparar cuota explícita del mes, incluidas altas
sin cobro y cobros sin fuente. Inscripción D y Clases E son contexto; no
deducir importe de «SI» ni aplicar cuota universal. Cabecera del nuevo mes
requiere periodo confirmado. Duplicado de persona/mes sin solicitud distinta
es conflicto; no sumar dos altas por defecto.

## Plantillas normalizadas propuestas para fuentes que faltan

Una fila por hecho; campos en español técnico sin datos reales en Git.
Todos los IDs son texto. Decimales en moneda/unidad explícita; meses YYYY-MM.
La sociedad operacional no es un campo editable de estas plantillas.

| Plantilla                         | Campos obligatorios                                                                                                                                                                           | Validación y resultado                                                                                                                                                   |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Excesos v1                        | `registro_id`, `matricula`, `periodo_origen`, `periodo_compensacion`, `importe_firmado`, `moneda`, `motivo`, `referencia_documental`                                                          | ID único, moneda EUR en perfil inicial, mes destino seleccionado. Repetición de registro no duplica saldo.                                                               |
| Anticipos v1                      | `solicitud_id`, `cuota_id`, `matricula`, `tipo` (`prorrateado`/`a_descontar`), `periodo_cuota`, `importe_nomina_firmado`, `moneda`, `estado` (`vigente`/`cancelada`), `referencia_documental` | Cuota única por solicitud/ID, selección de mes y solo vigentes. Importes ya firmados según concepto. No generar cuotas implícitas.                                       |
| Excepciones teletrabajo/comida v1 | `control`, `matricula`, `periodo_devengo`, `vigencia_desde`, `vigencia_hasta`, `importe_esperado_firmado`, `motivo`, `referencia_documental`                                                  | Confirmación humana explícita; prevalece sobre fórmula genérica para esa persona/mes. Dos excepciones vigentes son conflicto, nunca gana la última fila silenciosamente. |

P: las reglas de tarifa/días aprobadas son configuración tipada con vigencia;
las excepciones son entradas declaradas y visibles, no código ejecutable.
Los comentarios de revisión no pueden cambiar el importe esperado. Los
documentos firmados se conservan por el procedimiento corporativo, fuera de
Git y de SQLite; el expediente solo referencia su existencia.
