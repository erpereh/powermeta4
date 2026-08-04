# powermeta4 — estado de tareas

## Corrección de workspaces locales y herramientas ERP — 2026-08-04

- [x] Convertir `CompanyId` en un identificador dinámico y persistir la lista
      de empresas junto con el workspace activo.
- [x] Mantener las tres empresas iniciales, crear empresas locales con
      workspace vacío y activar automáticamente la nueva empresa.
- [x] Implementar eliminación de empresas, selección de reemplazo y bloqueo
      de la última empresa.
- [x] Subir el store a la migración v3, conservar chats, favoritos, modelos y
      actividad, y eliminar únicamente `users` heredado de v2.
- [x] Unificar logo, nombre de producto y empresa activa en una única cabecera
      con selector, submenús, diálogo de creación y confirmación de borrado.
- [x] Separar el enlace de Herramientas del control de expansión, con estados
      accesibles y apertura automática al entrar en un módulo.
- [x] Reutilizar `ModuleWorkspace` para los cinco módulos y eliminar el CRUD
      local de Usuarios, su validación, componentes y pruebas específicas.
- [x] Mantener las rutas antiguas de Usuarios como redirecciones a su catálogo
      común, sin renderizar formularios, tablas ni detalles.
- [x] Marcar las cuatro acciones de Usuarios como externas y no implementadas,
      con ruta `/tools/users`, prompts e iconos centralizados.
- [x] Mostrar `Disponible próximamente` sin navegación ni actividad persistida
      para acciones futuras y conservar recomendaciones ERP sin envío.
- [x] Añadir pruebas de empresas dinámicas, aislamiento, persistencia y
      migración v2→v3, además de las pruebas existentes de chat y registro.
- [x] Actualizar README, DESIGN y AGENTS para reflejar el alcance local real.

## Pendientes reales

- [ ] Sustituir el adaptador simulado por AI SDK y un proveedor real.
- [ ] Añadir backend, persistencia remota y autenticación de producción.
- [ ] Incorporar permisos reales, invitaciones y administración completa de
      empresas.
- [ ] Implementar las operaciones ERP de empresas, usuarios, nóminas,
      informes y procesos mediante una integración externa.
- [ ] Añadir subida real de adjuntos y pruebas E2E en un entorno desplegado.
