# Secuencia de implementación propuesta

## 1. Confirmar el contrato del primer flujo

Elegir una funcionalidad concreta, sus sociedades y perfiles. Leer guía, matriz, fichas y referencias. Confirmar menú/variante, identidad y permisos; obtener contrato de servicio real para la lectura elegida. Registrar P01/P02/P03/P06/P09 que afecten al flujo. La fase documental no permite saltarse este paso.

## 2. Crear la sección y el contexto

Añadir `/portal` al layout privado y navegación existente. Reutilizar sesión y sociedad server-side, con estados de conexión/capacidad honestos. Resolver empleado propio y alcance responsable antes de ofrecer datos sensibles. Diseñar la navegación funcional común, variantes y retorno; no reproducir frames.

## 3. Implementar consultas por dominio

Orden razonable: inicio/directorio, dossier autorizado, calendario y consultas personales, recibos/certificados autorizados, formación/carrera y consultas de equipo. Es una propuesta por dependencias, no una prioridad acordada de negocio. Reutilizar servicios compatibles sin ampliar sus permisos. Cada entrega cubre su flujo completo, incluyendo vacío/error y descargas si pertenecen a él.

## 4. Resolver documentos e informes

Confirmar P08 por tipo de informe: blob, consulta, impresión, Excel o generación. Reutilizar el servicio de recibos solo para capacidades actuales compatibles y añadir soporte nuevo únicamente con contrato. No distribuir recursos de ejemplo como documentos reales.

## 5. Solicitudes y aprobaciones con alcance autorizado

Cuando se aprueben las nuevas escrituras y exista servicio soportado, implementar un flujo empleado→petición→responsable→resultado, con retirada, motivo, niveles y concurrencia. Confirmar P04 y transacciones por objeto. Continuar por datos personales, tiempo, formación y otras funciones según prioridad acordada. PeopleNet permanece sin SQL de escritura.

## 6. Procesos extensos

Evaluación, revisión salarial individual/masiva, vacantes, movimientos profesionales, delegaciones y planificación requieren subdivisión por proceso y fase. Mantener guías comunes, contratos específicos y criterios de cada transición. Las importaciones necesitan formato y errores por registro; la excepción de alta no las autoriza.

## 7. Validación por sociedad y mantenimiento

Revisar CYC/IBER/COLL en cada flujo publicado, empleado/responsable/delegado y ausencia de permiso. Actualizar evidencias, pendientes y matriz al descubrir diferencias. Conservar hashes para detectar cambios en originales; no limpiar carpetas por nombre. Actualizar README, todo y changelog con comprobaciones reales.
