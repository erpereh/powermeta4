# Contraste de fuentes del portal

> Generado por `npm run portal:docs`. Inventario estático de fuentes y contratos; no equivale a una prueba en la VM.

Se contrastan todas las pantallas registradas con su ficha y la presencia de JSP BASE, CYC, IBER y COLL. La búsqueda textual de ítems señala dónde falta correspondencia; los JSP no contienen por sí solos tablas ni reglas SQL suficientes. No se activan servicios por semejanza de nombres.

| Pantalla                                   | Ficha    | Fuentes BASE / CYC / IBER / COLL | Apartados implementados / pendientes | Ítems pendientes de correspondencia con JSP       |
| ------------------------------------------ | -------- | -------------------------------- | ------------------------------------ | ------------------------------------------------- |
| `inicio`                                   | presente | 10 / 10 / 11 / 11                | 0 / 0                                | —                                                 |
| `tareas`                                   | presente | 17 / 9 / 13 / 13                 | 0 / 0                                | —                                                 |
| `organizacion.quien-es-quien`              | presente | 11 / 8 / 8 / 8                   | 0 / 0                                | —                                                 |
| `organizacion.organigrama`                 | presente | 10 / 6 / 6 / 6                   | 0 / 0                                | —                                                 |
| `organizacion.contactos`                   | presente | 13 / 0 / 0 / 0                   | 0 / 0                                | —                                                 |
| `organizacion.contrasena`                  | presente | 16 / 0 / 0 / 0                   | 0 / 0                                | —                                                 |
| `responsable.inicio`                       | presente | 13 / 0 / 13 / 13                 | 0 / 0                                | —                                                 |
| `empleado.datos.ficha`                     | presente | 8 / 9 / 9 / 9                    | 2 / 3                                | SCO_DT_START, SCO_OR_HR_PERIOD, STD_ID_LOCAT_TYPE |
| `empleado.datos.direccion-fiscal`          | presente | 4 / 5 / 5 / 5                    | 0 / 1                                | —                                                 |
| `empleado.datos.correo`                    | presente | 4 / 4 / 4 / 4                    | 1 / 0                                | STD_DT_START, STD_DT_END, STD_ID_LOCAT_TYPE       |
| `empleado.datos.telefonos`                 | presente | 4 / 4 / 4 / 4                    | 0 / 1                                | —                                                 |
| `empleado.datos.otras-direcciones`         | presente | 4 / 4 / 4 / 4                    | 0 / 1                                | —                                                 |
| `empleado.datos.teletrabajo`               | presente | 0 / 1 / 1 / 1                    | 0 / 1                                | —                                                 |
| `empleado.datos.estado-civil`              | presente | 9 / 9 / 9 / 9                    | 1 / 1                                | ID_ESTADO_CIVIL                                   |
| `empleado.datos.pagina-web`                | presente | 9 / 9 / 9 / 9                    | 0 / 0                                | —                                                 |
| `empleado.datos.otras-formas-contacto`     | presente | 5 / 5 / 5 / 5                    | 0 / 0                                | —                                                 |
| `empleado.datos.profesionales`             | presente | 36 / 36 / 36 / 36                | 0 / 0                                | —                                                 |
| `empleado.datos.cv`                        | presente | 0 / 1 / 1 / 1                    | 0 / 0                                | —                                                 |
| `empleado.datos.irpf`                      | presente | 32 / 32 / 32 / 32                | 0 / 1                                | —                                                 |
| `empleado.datos.emergencia`                | presente | 8 / 8 / 8 / 8                    | 0 / 1                                | —                                                 |
| `empleado.datos.dependientes`              | presente | 9 / 9 / 9 / 9                    | 0 / 1                                | —                                                 |
| `empleado.datos.eventos`                   | presente | 4 / 4 / 4 / 4                    | 0 / 0                                | —                                                 |
| `empleado.datos.aplicaciones`              | presente | 0 / 5 / 5 / 5                    | 0 / 0                                | —                                                 |
| `empleado.retribucion.nominas`             | presente | 16 / 0 / 16 / 16                 | 0 / 0                                | —                                                 |
| `empleado.retribucion.recibos-pdf`         | presente | 5 / 3 / 5 / 5                    | 0 / 0                                | —                                                 |
| `empleado.retribucion.cuenta-principal`    | presente | 13 / 2 / 13 / 13                 | 1 / 0                                | SCO_DT_END, SCO_OR_HR_PERIOD                      |
| `empleado.retribucion.otras-cuentas`       | presente | 20 / 0 / 20 / 20                 | 0 / 1                                | —                                                 |
| `empleado.retribucion.certificados`        | presente | 4 / 2 / 6 / 6                    | 0 / 0                                | —                                                 |
| `empleado.retribucion.proyecciones`        | presente | 0 / 6 / 4 / 4                    | 0 / 1                                | —                                                 |
| `empleado.retribucion.prestamos`           | presente | 20 / 0 / 20 / 20                 | 0 / 2                                | —                                                 |
| `empleado.retribucion.beneficios`          | presente | 48 / 0 / 48 / 48                 | 0 / 1                                | —                                                 |
| `empleado.retribucion.paquete`             | presente | 4 / 0 / 4 / 4                    | 0 / 1                                | —                                                 |
| `empleado.tiempo.vacaciones`               | presente | 12 / 12 / 12 / 12                | 0 / 3                                | —                                                 |
| `empleado.tiempo.incidencias`              | presente | 5 / 5 / 5 / 5                    | 0 / 0                                | —                                                 |
| `empleado.tiempo.ausencias`                | presente | 4 / 4 / 4 / 4                    | 0 / 1                                | —                                                 |
| `empleado.tiempo.festivos`                 | presente | 4 / 5 / 4 / 4                    | 0 / 0                                | —                                                 |
| `empleado.tiempo.planificacion`            | presente | 36 / 36 / 36 / 36                | 0 / 0                                | —                                                 |
| `empleado.tiempo.actividad`                | presente | 4 / 4 / 4 / 4                    | 0 / 0                                | —                                                 |
| `empleado.tiempo.reloj`                    | presente | 8 / 8 / 8 / 8                    | 0 / 0                                | —                                                 |
| `empleado.talento.puesto`                  | presente | 12 / 1 / 5 / 5                   | 0 / 1                                | —                                                 |
| `empleado.talento.formacion`               | presente | 32 / 4 / 4 / 4                   | 0 / 1                                | —                                                 |
| `empleado.talento.solicitudes-formacion`   | presente | 4 / 1 / 1 / 1                    | 0 / 2                                | —                                                 |
| `empleado.talento.formacion-realizada`     | presente | 4 / 3 / 2 / 2                    | 0 / 0                                | —                                                 |
| `empleado.talento.evaluacion-cursos`       | presente | 12 / 2 / 2 / 2                   | 0 / 1                                | —                                                 |
| `empleado.talento.documentacion`           | presente | 1 / 1 / 1 / 1                    | 0 / 0                                | —                                                 |
| `empleado.talento.evaluacion`              | presente | 42 / 0 / 0 / 0                   | 0 / 1                                | —                                                 |
| `empleado.talento.evaluadores`             | presente | 20 / 0 / 0 / 0                   | 0 / 0                                | —                                                 |
| `empleado.talento.carrera`                 | presente | 8 / 0 / 0 / 0                    | 0 / 1                                | —                                                 |
| `empleado.talento.movilidad`               | presente | 12 / 0 / 0 / 0                   | 0 / 2                                | —                                                 |
| `empleado.talento.desarrollo`              | presente | 19 / 0 / 0 / 0                   | 0 / 1                                | —                                                 |
| `empleado.talento.entrevistas`             | presente | 12 / 0 / 0 / 0                   | 0 / 0                                | —                                                 |
| `empleado.conocimiento`                    | presente | 4 / 0 / 0 / 0                    | 0 / 0                                | —                                                 |
| `responsable.alcance.poblacion`            | presente | 25 / 1 / 25 / 25                 | 0 / 0                                | —                                                 |
| `responsable.alcance.delegaciones`         | presente | 9 / 0 / 9 / 9                    | 0 / 1                                | —                                                 |
| `responsable.equipo.listado`               | presente | 8 / 4 / 8 / 8                    | 0 / 0                                | —                                                 |
| `responsable.equipo.ficha`                 | presente | 43 / 39 / 39 / 39                | 0 / 1                                | —                                                 |
| `responsable.equipo.validar-personales`    | presente | 44 / 44 / 44 / 44                | 0 / 1                                | —                                                 |
| `responsable.equipo.validar-profesionales` | presente | 28 / 28 / 28 / 28                | 0 / 0                                | —                                                 |
| `responsable.equipo.validar-irpf`          | presente | 12 / 12 / 12 / 12                | 0 / 0                                | —                                                 |
| `responsable.equipo.cv`                    | presente | 4 / 4 / 5 / 5                    | 0 / 0                                | —                                                 |
| `responsable.equipo.informes`              | presente | 0 / 5 / 5 / 5                    | 0 / 0                                | —                                                 |
| `responsable.retribucion.salarios`         | presente | 8 / 0 / 0 / 0                    | 0 / 1                                | —                                                 |
| `responsable.retribucion.validaciones`     | presente | 32 / 0 / 0 / 0                   | 0 / 2                                | —                                                 |
| `responsable.retribucion.revision`         | presente | 60 / 0 / 0 / 0                   | 0 / 1                                | —                                                 |
| `responsable.talento.evaluacion`           | presente | 65 / 0 / 0 / 0                   | 0 / 1                                | —                                                 |
| `responsable.talento.formacion`            | presente | 53 / 9 / 8 / 8                   | 0 / 0                                | —                                                 |
| `responsable.talento.carrera`              | presente | 16 / 0 / 0 / 0                   | 0 / 0                                | —                                                 |
| `responsable.talento.vacantes`             | presente | 44 / 0 / 0 / 0                   | 0 / 1                                | —                                                 |
| `responsable.talento.entrevistas`          | presente | 28 / 0 / 0 / 0                   | 0 / 0                                | —                                                 |
| `responsable.talento.preferencias`         | presente | 8 / 0 / 0 / 0                    | 0 / 0                                | —                                                 |
| `responsable.talento.movimientos`          | presente | 35 / 0 / 0 / 0                   | 0 / 0                                | —                                                 |
| `responsable.talento.desarrollo`           | presente | 24 / 0 / 0 / 0                   | 0 / 0                                | —                                                 |
| `responsable.tiempo.vacaciones`            | presente | 17 / 0 / 0 / 0                   | 0 / 0                                | —                                                 |
| `responsable.tiempo.ausencias`             | presente | 12 / 0 / 0 / 0                   | 0 / 1                                | —                                                 |
| `responsable.tiempo.bolsas`                | presente | 10 / 0 / 0 / 0                   | 0 / 0                                | —                                                 |
| `responsable.tiempo.planificacion`         | presente | 24 / 0 / 0 / 0                   | 0 / 0                                | —                                                 |

Los campos SQL reutilizados pueden no aparecer en el JSP con su nombre físico. Deben contrastarse con la consulta implementada y el diccionario en la VM. Los apartados de beneficiario, familia IRPF, grupo/nivel, direcciones, teléfonos y los demás dominios pendientes no tienen filtros y correspondencia de tablas suficientes en esta copia. `portal:discover` reúne metadatos para completarlos.
