# Estado de implementación del portal

> Generado por `npm run portal:docs` desde `src/lib/portal/registry`. No editar a mano.

Pantallas: 76. Con lector principal implementado (SOAP o SQL): 11. Con dependencia principal explícita: 65.

Implementado describe código respaldado por fuentes, no una integración viva comprobada. Las nuevas lecturas y el transporte SOAP requieren pruebas en la VM. Una pantalla conectada puede tener apartados pendientes; el inventario siguiente los separa.

## Mis datos (empleado)

| Pantalla                 | Ruta                                           | Lectura                                         | Escrituras    | Variantes       | Ficha                                                    |
| ------------------------ | ---------------------------------------------- | ----------------------------------------------- | ------------- | --------------- | -------------------------------------------------------- |
| Mi ficha                 | `/portal/empleado/datos`                       | SQL `M4ORO_EMPLEADOS`, `STD_EMAIL` (verificada) | —             | Todas           | [ficha](../empleado/datos/sse_g1--sse_g1_p1.md)          |
| Dirección fiscal         | `/portal/empleado/datos/direccion-fiscal`      | Pendiente (P02, P05)                            | 1 bloqueada   | Todas           | [ficha](../empleado/datos/sse_g1--sse_g1_p1_mod.md)      |
| Correo personal          | `/portal/empleado/datos/correo`                | SQL `STD_EMAIL` (verificada)                    | 1 bloqueada   | Todas           | [ficha](../empleado/datos/sse_g1--sse_g1_p1_mod2.md)     |
| Teléfonos                | `/portal/empleado/datos/telefonos`             | Pendiente (P02, P05)                            | 1 bloqueada   | Todas           | [ficha](../empleado/datos/sse_g1--sse_g1_p1_mod3.md)     |
| Otras direcciones        | `/portal/empleado/datos/otras-direcciones`     | Pendiente (P02, P05)                            | 1 bloqueada   | Todas           | [ficha](../empleado/datos/sse_g1--sse_g1_p1_mod4.md)     |
| Domicilio de teletrabajo | `/portal/empleado/datos/teletrabajo`           | Pendiente (P02, P05)                            | 1 bloqueada   | CYC, IBER, COLL | [ficha](../empleado/datos/sse_g1--sse_g1_p1_mod_da.md)   |
| Estado civil             | `/portal/empleado/datos/estado-civil`          | Pendiente (P02, P05)                            | 1 bloqueada   | Todas           | [ficha](../empleado/datos/sse_g1--ssco_g1_p1_mod5.md)    |
| Página web               | `/portal/empleado/datos/pagina-web`            | Pendiente (P02, P05)                            | 1 bloqueada   | Todas           | [ficha](../empleado/datos/sse_g1--ssco_g1_p1_mod6.md)    |
| Otras formas de contacto | `/portal/empleado/datos/otras-formas-contacto` | Pendiente (P02, P05)                            | 1 bloqueada   | Todas           | [ficha](../empleado/datos/sse_g1--ssco_g1_p1_mod7.md)    |
| Datos profesionales      | `/portal/empleado/datos/profesionales`         | Pendiente (P02, P05)                            | 14 bloqueadas | Todas           | [ficha](../empleado/datos/sse_g1--sse_g1_p3.md)          |
| Currículum               | `/portal/empleado/datos/cv`                    | Pendiente (P05, P08)                            | —             | CYC, IBER, COLL | [ficha](../empleado/datos/sse_g1--sse_g1_p3_cv.md)       |
| IRPF y Modelo 145        | `/portal/empleado/datos/irpf`                  | Pendiente (P02, P05)                            | 3 bloqueadas  | Todas           | [ficha](../empleado/datos/sse_g1--sssp_g1_p6_sit_mod.md) |
| Contactos de emergencia  | `/portal/empleado/datos/emergencia`            | Pendiente (P02, P05)                            | 1 bloqueada   | Todas           | [ficha](../empleado/datos/sse_g1--sse_g1_p4_mod.md)      |
| Dependientes             | `/portal/empleado/datos/dependientes`          | Pendiente (P02, P05)                            | 1 bloqueada   | Todas           | [ficha](../empleado/datos/sse_g1--sse_g1_p5_mod.md)      |
| Life events              | `/portal/empleado/datos/eventos`               | Pendiente (P01, P05)                            | —             | Todas           | [ficha](../empleado/datos/sse_g1--sse_g1_p2.md)          |
| Aplicaciones internas    | `/portal/empleado/datos/aplicaciones`          | Pendiente (P01, P07)                            | —             | CYC, IBER, COLL | [ficha](../empleado/datos/sse_g1--sse_g1_pcyc.md)        |

## Retribución (empleado)

| Pantalla                          | Ruta                                            | Lectura                                                                                                     | Escrituras   | Variantes       | Ficha                                                           |
| --------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------ | --------------- | --------------------------------------------------------------- |
| Últimos recibos de salarios       | `/portal/empleado/retribucion/nominas`          | SQL `M4SCO_HT_PAYS`, `M4SCO_AC_HR_PERIOD`, `M4CSP_AC_HR_PERIOD`, `M4SCO_ROWS`, `STD_HR_PERIOD` (verificada) | —            | Todas           | [ficha](../empleado/retribucion/sse_g2--sse_g2_p4.md)           |
| Recibos por año                   | `/portal/empleado/retribucion/recibos-por-ano`  | Pendiente (P02, P08)                                                                                        | —            | Todas           | [ficha](../empleado/retribucion/sse_g2--ssco_g2_p12.md)         |
| Cuenta bancaria principal         | `/portal/empleado/retribucion/cuenta-principal` | SQL `M4SCO_PAYMENT_DATA`, `M4SCO_PERSON_BANK` (por verificar)                                               | 1 bloqueada  | Todas           | [ficha](../empleado/retribucion/sse_g2--sse_g2_p1.md)           |
| Otras cuentas bancarias           | `/portal/empleado/retribucion/otras-cuentas`    | Pendiente (P02, P05)                                                                                        | 2 bloqueadas | Todas           | [ficha](../empleado/retribucion/sse_g2--sse_g2_p2.md)           |
| Certificados de retenciones       | `/portal/empleado/retribucion/certificados`     | Pendiente (P08)                                                                                             | —            | Todas           | [ficha](../empleado/retribucion/sse_g2--sse_g2_cert_hab_cyc.md) |
| Informes de proyecciones          | `/portal/empleado/retribucion/proyecciones`     | Pendiente (P02, P05)                                                                                        | —            | CYC, IBER, COLL | [ficha](../empleado/retribucion/sse_g2--sse_g2_inf_proyec.md)   |
| Préstamos                         | `/portal/empleado/retribucion/prestamos`        | Pendiente (P02, P05)                                                                                        | 2 bloqueadas | Todas           | [ficha](../empleado/retribucion/sse_g2--sse_g2_p5.md)           |
| Retribución flexible y beneficios | `/portal/empleado/retribucion/beneficios`       | Pendiente (P02, P05)                                                                                        | 4 bloqueadas | Todas           | [ficha](../empleado/retribucion/sse_g2--sse_g2_p7.md)           |
| Datos salariales                  | `/portal/empleado/retribucion/paquete`          | Pendiente (P02, P05)                                                                                        | —            | Todas           | [ficha](../empleado/retribucion/sse_g2--sse_g2_p10.md)          |

## Tiempo (empleado)

| Pantalla                 | Ruta                                    | Lectura              | Escrituras   | Variantes | Ficha                                                                     |
| ------------------------ | --------------------------------------- | -------------------- | ------------ | --------- | ------------------------------------------------------------------------- |
| Vacaciones               | `/portal/empleado/tiempo/vacaciones`    | Pendiente (P02, P05) | 2 bloqueadas | Todas     | [ficha](../empleado/tiempo/sse_g4--sse_g4_p2.md)                          |
| Solicitud de incidencias | `/portal/empleado/tiempo/incidencias`   | Pendiente (P02, P05) | 2 bloqueadas | Todas     | [ficha](../empleado/tiempo/sse_g4--sse_g4_gta_incidences_request_body.md) |
| Ausencias                | `/portal/empleado/tiempo/ausencias`     | Pendiente (P02, P05) | —            | Todas     | [ficha](../empleado/tiempo/sse_g4--sse_g4_p1.md)                          |
| Calendario de festivos   | `/portal/empleado/tiempo/festivos`      | Pendiente (P02, P05) | —            | Todas     | [ficha](../empleado/tiempo/sse_g4--sse_g4_p3.md)                          |
| Planificación            | `/portal/empleado/tiempo/planificacion` | Pendiente (P02, P05) | 3 bloqueadas | Todas     | [ficha](../empleado/tiempo/sse_g4--sse_g4_gta_planning_body.md)           |
| Actividad                | `/portal/empleado/tiempo/actividad`     | Pendiente (P02, P05) | 1 bloqueada  | Todas     | [ficha](../empleado/tiempo/sse_g4--sse_g4_gta_activity.md)                |
| Reloj virtual            | `/portal/empleado/tiempo/reloj`         | Pendiente (P02, P05) | 1 bloqueada  | Todas     | [ficha](../empleado/tiempo/sse_g4--sse_g4_gta_virtual_clock.md)           |

## Talento (empleado)

| Pantalla                 | Ruta                                             | Lectura              | Escrituras   | Variantes | Ficha                                                       |
| ------------------------ | ------------------------------------------------ | -------------------- | ------------ | --------- | ----------------------------------------------------------- |
| Historial de puestos     | `/portal/empleado/talento/puesto`                | Pendiente (P02, P05) | —            | Todas     | [ficha](../empleado/talento/sse_g3--sse_g3_p0.md)           |
| Catálogo de formación    | `/portal/empleado/talento/formacion`             | Pendiente (P02, P05) | 1 bloqueada  | Todas     | [ficha](../empleado/talento/sse_g3--sse_g3_p3_mod1.md)      |
| Inscripción en cursos    | `/portal/empleado/talento/solicitudes-formacion` | Pendiente (P02, P05) | 1 bloqueada  | Todas     | [ficha](../empleado/talento/sse_g3--sse_g3_p7.md)           |
| Formación realizada      | `/portal/empleado/talento/formacion-realizada`   | Pendiente (P02, P05) | —            | Todas     | [ficha](../empleado/talento/sse_g3--sse_g3_p21.md)          |
| Evaluación de cursos     | `/portal/empleado/talento/evaluacion-cursos`     | Pendiente (P02, P05) | 1 bloqueada  | Todas     | [ficha](../empleado/talento/sse_g3--sse_g3_p8_desc.md)      |
| Documentación publicada  | `/portal/empleado/talento/documentacion`         | Pendiente (P02, P08) | —            | Todas     | [ficha](../empleado/talento/sse_g3--ssco_g3_pform.md)       |
| Evaluación del desempeño | `/portal/empleado/talento/evaluacion`            | Pendiente (P02, P05) | 3 bloqueadas | Todas     | [ficha](../empleado/talento/sse_g3--ssco_evaluator_body.md) |
| Evaluadores 360          | `/portal/empleado/talento/evaluadores`           | Pendiente (P02, P05) | 2 bloqueadas | Todas     | [ficha](../empleado/talento/sse_g3--sse_g3_p4_1_mod.md)     |
| Plan de carrera          | `/portal/empleado/talento/carrera`               | Pendiente (P02, P05) | —            | Todas     | [ficha](../empleado/talento/sse_g3--sse_g3_p9.md)           |
| Movilidad interna        | `/portal/empleado/talento/movilidad`             | Pendiente (P02, P05) | 1 bloqueada  | Todas     | [ficha](../empleado/talento/sse_g3--sse_g3_p2.md)           |
| Plan de desarrollo       | `/portal/empleado/talento/desarrollo`            | Pendiente (P02, P05) | 3 bloqueadas | Todas     | [ficha](../empleado/talento/sse_g3--ssco_g3_pdev_body.md)   |
| Entrevistas              | `/portal/empleado/talento/entrevistas`           | Pendiente (P02, P05) | 1 bloqueada  | Todas     | [ficha](../empleado/talento/sse_g3--ssco_g3_p11.md)         |

## Organización (empleado)

| Pantalla             | Ruta                               | Lectura                                         | Escrituras   | Variantes | Ficha                                                            |
| -------------------- | ---------------------------------- | ----------------------------------------------- | ------------ | --------- | ---------------------------------------------------------------- |
| Quién es quién       | `/portal/organizacion`             | SQL `M4ORO_EMPLEADOS`, `STD_EMAIL` (verificada) | —            | Todas     | [ficha](../empleado/organizacion/sse_g0--ssco_g0_who_is_who.md)  |
| Organigrama          | `/portal/organizacion/organigrama` | SQL `M4ORO_EMPLEADOS` (verificada)              | —            | Todas     | [ficha](../empleado/organizacion/sse_g0--sse_g0_organigramas.md) |
| Mis contactos        | `/portal/organizacion/contactos`   | Pendiente (P02, P05)                            | 2 bloqueadas | Todas     | [ficha](../empleado/organizacion/sse_g0--sse_g0_p1.md)           |
| Cambio de contraseña | `/portal/organizacion/contrasena`  | Pendiente (P04)                                 | 1 bloqueada  | Todas     | [ficha](../empleado/organizacion/sse_g0--change_password.md)     |

## Conocimiento (empleado)

| Pantalla        | Ruta                            | Lectura              | Escrituras | Variantes | Ficha                                                    |
| --------------- | ------------------------------- | -------------------- | ---------- | --------- | -------------------------------------------------------- |
| Mi conocimiento | `/portal/empleado/conocimiento` | Pendiente (P01, P07) | —          | Todas     | [ficha](../empleado/conocimiento/sse_g5--sse_g5_menu.md) |

## Tareas (responsable)

| Pantalla   | Ruta             | Lectura                                                                    | Escrituras  | Variantes | Ficha                                                                 |
| ---------- | ---------------- | -------------------------------------------------------------------------- | ----------- | --------- | --------------------------------------------------------------------- |
| Mis tareas | `/portal/tareas` | SOAP `PGCO_ES_WS_VALIDATIONS.PGCO_VALIDATIONS` (por verificar en servidor) | 1 bloqueada | Todas     | [ficha](../transversal/navegacion/sse_generico--sgco_engine_tasks.md) |

## Alcance (responsable)

| Pantalla     | Ruta                                       | Lectura                                                            | Escrituras  | Variantes | Ficha                                                              |
| ------------ | ------------------------------------------ | ------------------------------------------------------------------ | ----------- | --------- | ------------------------------------------------------------------ |
| Población    | `/portal/responsable/alcance`              | SOAP `SNTC_AD_POPULATION.LOAD_PERSONS` (por verificar en servidor) | 1 bloqueada | Todas     | [ficha](../responsable/tareas/mss_generico--mss_set_wunit_resp.md) |
| Delegaciones | `/portal/responsable/alcance/delegaciones` | Pendiente (P02, P05)                                               | 1 bloqueada | Todas     | [ficha](../responsable/tareas/mss_generico--mss_delegation.md)     |

## Equipo (responsable)

| Pantalla                    | Ruta                                               | Lectura                                                            | Escrituras   | Variantes | Ficha                                                                 |
| --------------------------- | -------------------------------------------------- | ------------------------------------------------------------------ | ------------ | --------- | --------------------------------------------------------------------- |
| Mi equipo                   | `/portal/responsable/equipo`                       | SOAP `SNTC_AD_POPULATION.LOAD_PERSONS` (por verificar en servidor) | —            | Todas     | [ficha](../responsable/equipo/mss_g1--mss_g1_p1.md)                   |
| Ficha profesional           | `/portal/responsable/equipo/ficha`                 | Pendiente (P02, P05)                                               | —            | Todas     | [ficha](../responsable/equipo/mss_g1--smco_g1_profs_info_cabecera.md) |
| Validar datos personales    | `/portal/responsable/equipo/validar-personales`    | Pendiente (P02, P05)                                               | 9 bloqueadas | Todas     | [ficha](../responsable/equipo/mss_g1--mss_g1_p1_val.md)               |
| Validar datos profesionales | `/portal/responsable/equipo/validar-profesionales` | Pendiente (P02, P05)                                               | 7 bloqueadas | Todas     | [ficha](../responsable/equipo/mss_g1--mss_g1_p3_val.md)               |
| IRPF y documentación        | `/portal/responsable/equipo/validar-irpf`          | Pendiente (P02, P05)                                               | 2 bloqueadas | Todas     | [ficha](../responsable/equipo/mss_g1--smco_g1_p6_val.md)              |
| Currículum del empleado     | `/portal/responsable/equipo/cv`                    | Pendiente (P03, P08)                                               | —            | Todas     | [ficha](../responsable/equipo/mss_g1--mss_g1_p3_cv.md)                |
| Informes                    | `/portal/responsable/equipo/informes`              | Pendiente (P03, P08)                                               | 1 bloqueada  | Todas     | [ficha](../responsable/equipo/mss_g1--mss_g1_rp_puestos.md)           |

## Retribución (responsable)

| Pantalla                | Ruta                                           | Lectura              | Escrituras   | Variantes | Ficha                                                        |
| ----------------------- | ---------------------------------------------- | -------------------- | ------------ | --------- | ------------------------------------------------------------ |
| Datos salariales        | `/portal/responsable/retribucion/salarios`     | Pendiente (P02, P05) | —            | Todas     | [ficha](../responsable/retribucion/mss_g2--mss_g2_p1.md)     |
| Aprobaciones económicas | `/portal/responsable/retribucion/validaciones` | Pendiente (P02, P05) | 6 bloqueadas | Todas     | [ficha](../responsable/retribucion/mss_g2--mss_g2_p1_val.md) |
| Revisión salarial       | `/portal/responsable/retribucion/revision`     | Pendiente (P02, P05) | 7 bloqueadas | Todas     | [ficha](../responsable/retribucion/mss_g2--mss_g2_p0.md)     |

## Talento (responsable)

| Pantalla                | Ruta                                       | Lectura              | Escrituras   | Variantes | Ficha                                                           |
| ----------------------- | ------------------------------------------ | -------------------- | ------------ | --------- | --------------------------------------------------------------- |
| Evaluación y objetivos  | `/portal/responsable/talento/evaluacion`   | Pendiente (P02, P05) | 5 bloqueadas | Todas     | [ficha](../responsable/talento/mss_g3--mss_g3_p5.md)            |
| Formación del equipo    | `/portal/responsable/talento/formacion`    | Pendiente (P02, P05) | 3 bloqueadas | Todas     | [ficha](../responsable/talento/mss_g3--mss_g3_p6_mod1.md)       |
| Carrera y GAP           | `/portal/responsable/talento/carrera`      | Pendiente (P02, P05) | —            | Todas     | [ficha](../responsable/talento/mss_g3--mss_g3_p8.md)            |
| Vacantes y selección    | `/portal/responsable/talento/vacantes`     | Pendiente (P02, P05) | 1 bloqueada  | Todas     | [ficha](../responsable/talento/mss_g3--mss_g3_p1_wiz1.md)       |
| Entrevistas             | `/portal/responsable/talento/entrevistas`  | Pendiente (P02, P05) | 2 bloqueadas | Todas     | [ficha](../responsable/talento/mss_g3--smco_g3_p30_pet.md)      |
| Preferencias de carrera | `/portal/responsable/talento/preferencias` | Pendiente (P02, P05) | 1 bloqueada  | Todas     | [ficha](../responsable/talento/mss_g3--smco_g3_p32_val.md)      |
| Cambios profesionales   | `/portal/responsable/talento/movimientos`  | Pendiente (P02, P05) | 3 bloqueadas | Todas     | [ficha](../responsable/talento/mss_g3--smco_pm_modification.md) |
| Planes de desarrollo    | `/portal/responsable/talento/desarrollo`   | Pendiente (P02, P05) | 2 bloqueadas | Todas     | [ficha](../responsable/talento/mss_g3--smco_g3_dev_plan_emp.md) |

## Tiempo (responsable)

| Pantalla                | Ruta                                       | Lectura              | Escrituras   | Variantes | Ficha                                                               |
| ----------------------- | ------------------------------------------ | -------------------- | ------------ | --------- | ------------------------------------------------------------------- |
| Vacaciones del equipo   | `/portal/responsable/tiempo/vacaciones`    | Pendiente (P02, P05) | 2 bloqueadas | Todas     | [ficha](../responsable/tiempo/mss_g4--mss_g4_p1_val_body.md)        |
| Ausencias del equipo    | `/portal/responsable/tiempo/ausencias`     | Pendiente (P02, P05) | —            | Todas     | [ficha](../responsable/tiempo/mss_g4--mss_g4_p2_val_stat.md)        |
| Bolsas de horas y días  | `/portal/responsable/tiempo/bolsas`        | Pendiente (P02, P05) | 1 bloqueada  | Todas     | [ficha](../responsable/tiempo/mss_g4--smco_ab_manual_adjustment.md) |
| Planificación y alertas | `/portal/responsable/tiempo/planificacion` | Pendiente (P02, P05) | 4 bloqueadas | Todas     | [ficha](../responsable/tiempo/mss_g4--mss_g4_gta_timesheet.md)      |

## Inventario por apartado

| Pantalla / apartado                                        | Lector                 | Contrato                                                      | Estado                                                                | Fuente original                              |
| ---------------------------------------------------------- | ---------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------- |
| Mi ficha / Datos de pago y cuentas                         | `own-payment-accounts` | SQL `M4SCO_PAYMENT_DATA`, `M4SCO_PERSON_BANK` (por verificar) | Implementado; pendiente de prueba VM                                  | `CSP_QUIEN_ES_QUIEN!CSP_DATOS_PAGO_EMPLEADO` |
| Mi ficha / Cuenta del beneficiario                         | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `CSP_QUIEN_ES_QUIEN!CSP_CUENTA_BENEFICIARIO` |
| Mi ficha / IRPF y familia                                  | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `CSP_QUIEN_ES_QUIEN!CSP_FAM_IRPF`            |
| Mi ficha / Grupo y nivel                                   | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `CSP_QUIEN_ES_QUIEN!CSP_GRUPO_NIVEL`         |
| Mi ficha / Correos electrónicos                            | `own-emails`           | SQL `STD_EMAIL` (por verificar)                               | Implementado; pendiente de prueba VM                                  | `STD_EMAIL`                                  |
| Dirección fiscal / Dirección fiscal actual                 | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_ADDRESS!M4T_ADDRESS`                    |
| Correo personal / Correos electrónicos                     | `own-emails`           | SQL `STD_EMAIL` (por verificar)                               | Implementado; pendiente de prueba VM                                  | `STD_EMAIL`                                  |
| Teléfonos / Teléfonos                                      | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_PHONE_FAX`                              |
| Otras direcciones / Otros domicilios                       | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_ADDRESS_OTROS`                          |
| Domicilio de teletrabajo / Domicilio de teletrabajo actual | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_ADDRESS_OTROS`                          |
| Estado civil / Estado civil en la ficha actual             | `own-oro-status`       | SQL `M4ORO_EMPLEADOS` (por verificar)                         | Implementado; pendiente de prueba VM                                  | `M4ORO_EMPLEADOS`                            |
| Estado civil / Estado civil                                | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_HT_MAR_STAT`                            |
| IRPF y Modelo 145 / Situación actual                       | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_MOD_SITIRPF`                            |
| Contactos de emergencia / Contactos de emergencia          | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_HR_CONTACT`                             |
| Dependientes / Dependientes                                | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_FAMILY`                                 |
| Cuenta bancaria principal / Cuentas de cobro vigentes      | `own-payment-accounts` | SQL `M4SCO_PAYMENT_DATA`, `M4SCO_PERSON_BANK` (por verificar) | Implementado; pendiente de prueba VM                                  | `SSE_PAYMENT_DATA`                           |
| Otras cuentas bancarias / Otras cuentas bancarias          | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_OTHER_PDATA`                            |
| Informes de proyecciones / Proyección teórica de haberes   | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `CSP_RP_PROYECCIONES`                        |
| Préstamos / Consulta de préstamos                          | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_LOANS_EMP`                              |
| Préstamos / Detalle del préstamo                           | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_LOANS`                                  |
| Retribución flexible y beneficios / Mis beneficios         | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_BFT_H_EE_IN_BNFT`                       |
| Datos salariales / Datos salariales                        | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_H_SAL_DATA`                             |
| Vacaciones / Bolsa de vacaciones                           | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_HOLYDAYS!SSE_INCIDENCE`                 |
| Vacaciones / Peticiones                                    | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_HOLYDAYS!SSE_REAL_TIME_PRD`             |
| Vacaciones / Registros aceptados                           | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_HOLYDAYS!M4T_REAL_TIME_PRD`             |
| Ausencias / Ausencias laborales                            | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_REAL_TIME`                              |
| Historial de puestos / Historial de puestos                | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_JOB`                                    |
| Catálogo de formación / Descripción del curso de formación | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `CSP_SSE_TRAINING_REQUEST`                   |
| Inscripción en cursos / Solicitudes pendientes             | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `CSP_SSE_TRAINING_REQUEST`                   |
| Inscripción en cursos / Solicitudes aceptadas              | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `CSP_SSE_TRAINING_REQUEST`                   |
| Evaluación de cursos / Cursos pendientes de evaluar        | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_TRAINING_EVAL`                          |
| Evaluación del desempeño / Evaluaciones                    | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSCO_H_EVALUTE`                             |
| Plan de carrera / Plan de carrera                          | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_CAREER_PLAN`                            |
| Movilidad interna / Puestos vacantes                       | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_INT_MOVILITY`                           |
| Movilidad interna / Peticiones de movilidad                | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_INT_MOVILITY`                           |
| Plan de desarrollo / Acciones de desarrollo                | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSCO_DEV_PLAN`                              |
| Delegaciones / Mis delegaciones                            | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `MSS_DELEGATION`                             |
| Ficha profesional / Apartados del dossier                  | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SMCO_EMPLOYEE_PROFESIONAL_DATA`             |
| Validar datos personales / Peticiones                      | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_ADDRESS`                                |
| Datos salariales / Datos salariales                        | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSM_SALARY`                                 |
| Aprobaciones económicas / Cuenta bancaria principal        | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_PAYMENT_DATA`                           |
| Aprobaciones económicas / Préstamos                        | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSE_LOANS`                                  |
| Revisión salarial / Recorrido de la revisión               | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSM_SALARY_REVIEW_PROCESS`                  |
| Evaluación y objetivos / Historiales de evaluación         | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSCO_H_EVALUTE`                             |
| Vacantes y selección / Procesos de selección abiertos      | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSM_RECRUIT_PRO`                            |
| Ausencias del equipo / Ausencias                           | `dependency`           | Pendiente (P02, P05)                                          | Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05 | `SSM_ABSENCES`                               |
