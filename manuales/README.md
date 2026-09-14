# Biblioteca oficial de manuales PeopleNet/Meta4

## Resultado de la revisión

Se revisaron los **204 archivos** que había en `manuales/` en el commit
`66c0a0875df2f5b6980bbb59ed7f7a34742cdd40`. La biblioteca queda reducida a
**74 PDF oficiales**:

| Área                       | PDF conservados | Contenido                                                |
| -------------------------- | --------------: | -------------------------------------------------------- |
| `oficiales/configuracion/` |              14 | Configuración funcional y técnica del producto.          |
| `oficiales/usuario/`       |              23 | Guías de uso por módulo.                                 |
| `oficiales/tecnologia/`    |              37 | Administración, arquitectura, conectividad y desarrollo. |

Se eliminaron **130 archivos**: 68 PDF duplicados, sustituidos u obsoletos y
62 archivos auxiliares que no aportaban conocimiento indexable (`Thumbs.db`,
ZIP, HTML, CSS e imágenes) o que eran apuntes internos no oficiales (`.doc`).

## Criterios aplicados

Se conserva un documento cuando cumple estos criterios:

- es una publicación oficial de Meta4 o Cegid;
- contiene conocimiento funcional o técnico útil para PeopleNet;
- no existe una edición más reciente equivalente en la colección;
- no es una copia exacta de otro PDF conservado;
- puede incorporarse a la base de conocimiento como documento independiente.

El nombre del usuario que generó el PDF (`janaep`, `raquels`, etc.) no se ha
tratado como autoría particular: son cuentas de generación editorial. La
decisión se basa en el contenido, portada, copyright y estructura del manual.

## Inventario conservado

### Configuración (14)

- Autoservicio: `Configuracion_SSE.pdf`.
- Beneficios: `ConfiguracionPrestamos.pdf`, `Configuracion_Beneficios.pdf`.
- Herramientas: `ConfiguracionBusqueda.pdf`.
- Integraciones: `CloudHR.pdf`.
- Nómina: `ConfiguracionGestionTiempo.pdf`, `Elementos_de_Nómina.pdf`,
  `GestionNomina.pdf`, `Impresos_legales.pdf`, `ManualConfigGTA.pdf`,
  `Simulaciones.pdf`.
- Personal: `ConfiguracionGestionPersonal.pdf`.
- Seguridad Social: `Configuracion_FDI.pdf`.
- Seguridad: `Configuración_Seguridad.pdf`.

### Usuario (23)

- Administración de personal: `GuiaUsuarioAdministracionPersonal.pdf`,
  `GuiaUsuarioRGPD.pdf`, `GuiaUsuarioRetencionesJudiciales.pdf`.
- Autoservicio: `GuiaUsuarioSSE-SSM.pdf`.
- Beneficios: `GuiaUsuarioBeneficios.pdf`, `GuiaUsuarioPrestamos.pdf`.
- Compensación: `GuiaUsuarioCompensacionSalarial.pdf`.
- Conocimientos: `GuiaUsuarioConocimientos+.pdf`.
- Fundamentos: `GuiaUsuarioNavegacion_PN8.pdf`, `Guia_funcional.pdf`.
- Herramientas: `GuiaUsuarioBusqueda.pdf`.
- Nómina y tiempo: `GuiaUsuarioGestionTiempo.pdf`, `GuiaUsuarioNomina.pdf`,
  `GuiaUsuarioReglasGestion.pdf`.
- Organización: `GuiaUsuarioOrganizacion.pdf`.
- Recursos humanos: `GuiaUsuarioDireccionObjetivos.pdf`,
  `GuiaUsuarioEvaluaciondePersonal.pdf`, `GuiaUsuarioFormacion.pdf`,
  `GuiaUsuarioPlanesCarrera.pdf`, `GuiaUsuarioRiesgosLaborales.pdf`,
  `GuiaUsuarioSeleccion.pdf`.
- Seguridad Social: `GuiaUsuarioDelta.pdf`, `GuiaUsuarioFDI.pdf`.

### Tecnología (37)

- Administración: `Administración_Aplicaciones_Web.pdf`,
  `Administración_Servidor_Aplicaciones.pdf`,
  `Administrador_Depuracion_Trazas.pdf`, `Configuracion cliente Meta4.pdf`,
  `Configuración_Motor_Informes.pdf`, `Configuración_Nuevo_Idioma.pdf`,
  `Guia_Paquetes_RAMDL.pdf`, `Guia_instalacion_tecnologia_8.2_SP0.pdf`.
- Arquitectura: `Arquitectura_Meta4Objects_Componentes(Completo).pdf`,
  `Procesos_de_negocio.pdf`.
- Conectividad: `Arquitectura_servicios_SOAP_REST_2024.pdf`,
  `Conector_generico_integración.pdf`,
  `Generación_tablas_vistas_lógicas.pdf`,
  `Importación_Exportación_XML.pdf`, `Integracion_SOAP_2013.pdf`,
  `Integración_LDAP.pdf`, `Integración_Microsoft_Office.pdf`,
  `Integración_correo_electronico.pdf`, `Planificacion_externa.pdf`,
  `Single_Sign_On_SAML_2020.pdf`, `Single_Sign_On_Windows.pdf`.
- Desarrollo: `Anexo I - Caso práctico sencillo para añadir nuevos datos de
empleados.pdf`, `Anexo II - Desarrollo de analíticas para ADB.pdf`,
  `Anexo_A_Dev_Framework.pdf`, `Anexo_B_Dev_Framework.pdf`,
  `Anexo_C_Dev_Framework.pdf`,
  `Anexo_D_Importación_Exportación_Excel.pdf`,
  `Configuración_plantillas_consulta_nomina.pdf`,
  `Desarrollador_Depuracion_Trazas.pdf`,
  `Desarrollo_funcional_cliente_HTML.pdf`, `Development_Framework.pdf`,
  `Firma_Digital_Electrónica.pdf`, `Guía_Configuración_ADB.pdf`,
  `HTML_Development_Framework.pdf`, `Lenguaje_LN4_2020.pdf`,
  `Metodolgia_ Diseño_Modelo_Datos.pdf`.
- Herramientas: `Consulta.pdf`.

`Arquitectura_servicios_SOAP_REST_2024.pdf` era un escaneo oficial sin capa de
texto. Se ha aplicado OCR en español sin alterar visualmente sus páginas para
que la ingesta pueda indexar su contenido.

## Material descartado

| Decisión                            | Archivos afectados                                                                                             | Motivo                                                                                                                                                                          |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Eliminar paquete duplicado          | `Documentation SPA.7.1.011_8.1.000 PN/`                                                                        | Contenía copias exactas de 31 PDF ya presentes, más la antigua presentación HTML y sus recursos. Solo se tomó de aquí una copia cuando era la elegida para el inventario final. |
| Sustituir guías de usuario antiguas | Ediciones de `Manuals/Product/End_User/` que también estaban en el paquete de 2026                             | Se conserva la edición más reciente de beneficios, compensación, Delta/FDI, autoservicio, conocimientos, RR. HH., organización, nómina, administración y búsqueda.              |
| Sustituir instalación antigua       | `Guia_Instalacion.pdf`, `docs instalacion tecnológica/Guia_instalacion.pdf` y `Notas Version Service Pack.pdf` | Se conserva `Guia_instalacion_tecnologia_8.2_SP0.pdf`.                                                                                                                          |
| Sustituir navegación PN7            | `GuiaUsuarioNavegacion_PN7.pdf`                                                                                | Se conserva la guía PN8.                                                                                                                                                        |
| Sustituir LN4 antiguo               | Las dos copias antiguas de `Lenguaje_LN4.pdf`                                                                  | Se conserva `Lenguaje_LN4_2020.pdf`.                                                                                                                                            |
| Sustituir SSO Web antiguo           | `Single_Sign_On_Web.pdf`                                                                                       | Se conserva la guía SAML SSO de 2020; se mantiene aparte SSO Windows porque describe otro mecanismo.                                                                            |
| Sustituir impresos legales          | `Manuals/.../Payroll/ImpresosLegales.pdf`                                                                      | Se conserva la edición del paquete de soporte de 2026.                                                                                                                          |
| Eliminar copia mal nombrada         | `1013_0001_10122022_01014000_Carta programa retributívo nuevas incorporaciones.pdf`                            | Era una copia binaria exacta de `ConfiguracionGestionPersonal.pdf`; el nombre no describía el contenido.                                                                        |
| Eliminar tecnología obsoleta        | `Integracion_eMind.pdf`, `M4API.pdf`, `Migracion_nomina.pdf`, `Configuración_Unicode.pdf`                      | Integraciones o procedimientos históricos no adecuados como referencia vigente.                                                                                                 |
| Eliminar ayuda antigua              | `Guia_Actualizacion_Ayuda_windows.pdf`, `Guia_actualizacion_edición_ayudaenlínea_ThinClient.pdf`               | Procedimientos de distribución de ayuda local/ThinClient obsoletos.                                                                                                             |
| Eliminar duplicado antiguo          | `Manuals/Planificacion_externa.pdf`                                                                            | Se conserva la edición oficial más reciente de conectividad.                                                                                                                    |
| Eliminar apuntes no oficiales       | `CHULETA_SERVIDORES.DOC`, `INSTALACIÓN PORTAL DEL EMPLEADO.doc`, `Instalación Rich Web versión 8.doc`          | Chuletas internas con rutas, ejemplos de servidores y versiones antiguas de Java/Tomcat; no son publicaciones oficiales.                                                        |
| Eliminar envoltorios                | 27 `Thumbs.db`, 4 ZIP y 28 HTML/CSS/imágenes                                                                   | Metadatos, paquetes y recursos de presentación; no son manuales y duplicaban el contenido de los PDF.                                                                           |

## Mantenimiento

Los nuevos manuales deben colocarse dentro de `oficiales/` en la categoría
correspondiente. `npm run kb:ingest` recorre sus subcarpetas de forma recursiva.
Antes de añadir una nueva edición, debe comprobarse si sustituye a otra y
eliminarse la versión anterior para no introducir respuestas contradictorias.
