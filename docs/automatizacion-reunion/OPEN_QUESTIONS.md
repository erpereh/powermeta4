# Preguntas y dependencias pendientes

Son límites reales de la evidencia recibida, no preguntas que deban resolverse
inventando defaults. Las decisiones propuestas ya fijadas están en [SPEC](SPEC.md).

## Prioridad y puertas de activación

| ID  | Pendiente y evidencia                                                                                                                                          | Qué se necesita / quién puede resolverlo                                                                                                                                                                                     | Impacto                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Q01 | Faltan originales externos y libro de cuadre completo. Se solicitan expresamente en 01:03:38–01:06:08 y 01:09:15–01:09:39 (E23/E25).                           | RRHH: un original por categoría, libro resuelto y, si existe, plantilla; conservar fuera de Git. Acreditar hojas, bloques, cabeceras repetidas, tipos, fórmulas, campos de sociedad/entidad y ejemplos vacíos/excepcionales. | **Bloquea cada adaptador de original no acreditado**, no el motor puro ni su UI de pendientes.                              |
| Q02 | ¿Cómo identificar una ejecución completa y comparable? E06 advierte ejecuciones de una persona. El lector actual no conserva todos los filtros de lanzamiento. | Responsable de nómina + técnico Meta4: población esperada, tipo/frecuencia, entidades, cierre y filtros recuperables. Validar `01_C` en CYC y `01` en IBER/COLL.                                                             | Bloquea selección automática definitiva; v1 exige elegir y confirmar alcance. Nunca inferir cierre por fecha.               |
| Q03 | Signos, precisión y tolerancias no se acuerdan. Flex muestra fracciones de céntimo, signos opuestos y `#N/D`; excesos positivos/negativos.                     | RRHH: validar dirección de comparación y tolerancias por métrica contra originales, incluida precisión del dato previo al redondeo.                                                                                          | Defaults propuestos 0,01 EUR/0,01 pp solo para piloto, identificados; bloquea aceptación económica definitiva.              |
| Q04 | Motivos automáticos de fijos, IRPF y turnos: no se acredita tabla histórica ni correspondencia que explique el delta.                                          | Técnico Meta4: diccionario, vigencias, tipos de incidencia, cambios de categoría/salario/jornada, altas/bajas; RRHH valida relación y excepciones.                                                                           | Bloquea causas automáticas. Comparación numérica puede funcionar con «motivo desconocido».                                  |
| Q05 | Mercer: ¿qué campos mensuales alimentan cada descuento/especie/producto en cada entidad?                                                                       | Original sin modificar y libro Flex con fórmulas. Aclarar salud empresa/empleado, exento/especie, guardería, transporte, renting, ahorro, bajas, periodos y redondeos.                                                       | Bloquea C03 por producto, sin usar importe anual ni regla universal de signo.                                               |
| Q06 | Extras: ventanas de devengo, días computables, categorías/vigencias, permisos, transición 15→12 y reglas de convenios IBER/COLL.                               | RRHH + configuración Meta4: algoritmo y casos de referencia completos/proporcionales. El vídeo solo acredita suma simple en CYC y ejemplos de excepción (E11).                                                               | Bloquea cálculo proporcional y extensión a otros convenios. No aprobar una diferencia solo por aparecer paternidad.         |
| Q07 | Teletrabajo: nombre físico del indicador 2, valor/histórico, tarifa por vigencia, cálculo de semanas/días y efectos de ausencias/altas/bajas.                  | Técnico Meta4 + fichero independiente 80/20/40 y reglas de RRHH. Mantener prueba de personas a las que falta indicador.                                                                                                      | Bloquea cálculo teórico completo C05; puede compararse un esperado explícito aprobado.                                      |
| Q08 | Comisiones: origen real, servicio o SQL, efectos del generador «Multisociedad», ventana y correspondencia exacta de campos.                                    | Técnico Meta4: seguir menú/objeto/método del escritorio y contrato publicado; acreditar que la operación propuesta es lectura y limita sociedad. Original de «Carga de Valores», detalle y desglose.                         | V1 usa fichero. **Bloquea integración directa**; ni «Solo consulta» ni el menú prueban ausencia de efectos.                 |
| Q09 | Comidas: sistema de fichajes, columna válida de ausencias, tarifa/calendario, mes de pedido frente a nómina, descargas y reparto exento/no exento.             | RRHH: originales de descuentos y recargas, formulas completas y parámetros vigentes. En tarjeta se ve `L9/12,1`; en audio 11 €/día. No son por sí solos una especificación del reparto.                                      | Bloquea valoración C09 y reparto C10. Puede validarse total/neto C10 tras acreditar su fuente.                              |
| Q10 | ¿Qué usuarios de Meta4 deben acceder a la nueva acción y exportar toda la nómina de la sociedad?                                                               | Propietario del producto: confirmar uso del mismo alcance operativo que Resultados de nómina. Si necesita restricción nueva, especificarla y aprobarla antes de implementarla.                                               | **Bloquea publicación operativa**, no autoriza crear un sistema de permisos ficticio ni usar rol del portal como sustituto. |
| Q11 | Anticipos: calendario estructurado, identificador de solicitud, cuotas dobles/irregulares, bajas y cancelaciones.                                              | RRHH: plantilla Excel de cuotas por persona/solicitud/mes e importe; contrastar con solicitudes firmadas. Aclarar si futuros PDF textuales se importarán o solo se conservarán fuera.                                        | Bloquea C12 con PDF original; v1 opera sobre calendario confirmado. No imponer cuota fija o máximo legal supuesto.          |
| Q12 | Aniversarios: entidades/convenios cubiertos, fecha de antigüedad correcta, mes de pago, base salarial y ajustes por jornada/baja.                              | RRHH + lista anual original y configuración PeopleNet. La pantalla incluye entidades ES/PT y pestaña Iberinform (E21).                                                                                                       | Bloquea extrapolación y cálculo autónomo de elegibilidad; lista aprobada sigue siendo referencia independiente.             |
| Q13 | Nombre del plan: audio PPC, hojas PPSE. ¿Aportación personal extraordinaria exacta y calendario vigente?                                                       | RRHH: original anual, conceptos de aportación personal/empresa, meses y ajustes finales.                                                                                                                                     | Siglas no bloquean motor; perfil C14 debe quedar inequívoco. No incluir remisión completa del plan.                         |
| Q14 | Inventario de «Conceptos varios» y pestañas no explicadas: Gimnasio, Fuera nómina, otra hoja de Flex, Forzar mat-pat-cat y Grupo empresa.                      | Libro original y clasificación por comparación mensual/fuente/cálculo, unidades y condiciones.                                                                                                                               | Bloquea declarar cobertura total de columnas. No crea reglas por nombre de pestaña.                                         |
| Q15 | ¿Hace falta histórico propio reabrible con ficheros y notas? En E06 se propone historial, sin política de almacenamiento.                                      | Propietario: alcance de retención, acceso, backups, borrado y custodia de PII antes de añadir persistencia.                                                                                                                  | V1 fija visita efímera + descarga Excel + historial ERP existente. No bloquea esa versión; sí una evolución persistida.     |

## Aspectos que ya tienen una decisión propuesta

- No ejecutar nuevas escrituras ERP ni correcciones automáticas. La mención
  tentativa de E19 no modifica las reglas vigentes de `AGENTS.md`.
- No enviar datos al chat ni a otro modelo en la herramienta. La autorización
  para analizar esta reunión no es autorización para usar IA con las nóminas
  futuras del producto.
- Ubicación: acción de Nóminas en Inicio, no standalone en sidebar.
- La ausencia de fuente o de contrato tiene estado propio; no se simula éxito.
- Mantener sociedad del servidor y matrículas textuales; no ampliar la lectura
  del equipo del portal para resolver el nuevo proceso.
- No implementar generación de informes ni lectura automática de correo,
  proveedor o comisiones antes de acreditar contrato y efectos.
- No especificar ahora contabilidad, seguros sociales, 111 o 190; requieren sus
  propias evidencias. Tampoco es alcance cambiar el procedimiento de ajustes.

## Paquete mínimo para cerrar las dudas

1. Informe normal actual/anterior representativos, claves de ejecución y libro
   de cuadre finalizado, con sus fórmulas; incluidos varios tramos/altas si existen.
2. Original por cada fuente externa, incluido apartado vacío y una excepción;
   para apartamentos, más de un fichero con una persona repetida legítimamente.
3. Calendarios de cuotas, tarifas y reglas vigentes con fecha/entidad, sin
   deducir reglas generales de los importes personales del vídeo.
4. Acreditación de metadatos/contratos del generador y de los históricos en VM,
   con solo metadatos y recuentos como salida técnica compartible.
5. Conformidad de RRHH para resultados esperados y del propietario para acceso
   y custodia. Las muestras reales se conservan fuera de Git; las pruebas del
   repositorio usan equivalentes sintéticos.

Los originales faltantes no impiden entregar esta documentación ni comenzar
el núcleo. Sí impiden presentar como terminada una implementación de todos
los controles o afirmar paridad completa con el procedimiento manual.
