import type { EvaluationCase } from "./kb-evaluation-cases";

const documentCase = (
  question: string,
  source: string,
  pages: number[],
  facts: string,
  previous?: string,
): EvaluationCase => ({ question, source, pages, facts, previous });

export const fullHoldout: EvaluationCase[] = [
  documentCase(
    "¿Qué sistema de amortización trae de serie PeopleNet en el módulo de Préstamos?",
    "ConfiguracionPrestamos.pdf",
    [5, 7],
    "El sistema francés de cuota fija.",
  ),
  documentCase(
    "Al configurar otro sistema de amortización, ¿dónde se añaden los controles generales de validez?",
    "ConfiguracionPrestamos.pdf",
    [7, 8],
    "Método SCO_DATA_VALIDATE (Validación de datos), distinguiendo los controles del nuevo sistema de los del sistema francés.",
  ),
  documentCase(
    "En Beneficios, ¿es obligatorio generar una cartera desde un plan de inscripciones para asignar un beneficio?",
    "GuiaUsuarioBeneficios.pdf",
    [10, 11],
    "La cartera normalmente nace del plan de inscripciones, pero la aplicación también permite asignaciones directas.",
  ),
  documentCase(
    "¿En qué momento entran los criterios de elegibilidad al configurar planes de beneficios?",
    "GuiaUsuarioBeneficios.pdf",
    [10, 11],
    "Después de definir los planes se agrupan y se les asocian los criterios que deben cumplir los empleados.",
  ),
  documentCase(
    "Según la guía de riesgos laborales, ¿qué alcance tiene la evaluación inicial de riesgos?",
    "GuiaUsuarioRiesgosLaborales.pdf",
    [11, 12],
    "Todos y cada uno de los puestos de prevención y espacios de trabajo de la empresa, según las condiciones y la posible sensibilidad del trabajador.",
  ),
  documentCase(
    "¿Qué plantea la guía de Prevención de riesgos laborales una vez identificados los riesgos, además de eliminarlos o reducirlos?",
    "GuiaUsuarioRiesgosLaborales.pdf",
    [12],
    "Controlar periódicamente las condiciones, la organización y métodos de trabajo, y la salud de los trabajadores.",
  ),
  documentCase(
    "¿Con qué etapa empieza el ciclo de formación y de dónde salen sus necesidades?",
    "GuiaUsuarioFormacion.pdf",
    [11, 12],
    "Detección de necesidades vinculadas a las tareas de los puestos y a los planes de carrera.",
  ),
  documentCase(
    "Una vez definido el catálogo de formación, ¿qué hace la organización con los planes de formación?",
    "GuiaUsuarioFormacion.pdf",
    [12, 13],
    "Aplica planes durante un periodo determinado. Los planes son integrales y permanentes con periodicidad fijada por la organización.",
  ),
  documentCase(
    "En el diagrama de Organización de PeopleNet, ¿puede convivir más de una unidad organizativa y más de un equipo de trabajo por sociedad?",
    "GuiaUsuarioOrganizacion.pdf",
    [11, 12],
    "Sí. El esquema indica relaciones de uno a muchos para unidades organizativas y equipos dentro de una sociedad.",
  ),
  documentCase(
    "¿Qué tipos de análisis o informes aparecen en el ciclo de Compensación salarial para apoyar las decisiones?",
    "GuiaUsuarioCompensacionSalarial.pdf",
    [11, 12],
    "Estructuras salariales, informes de mercado, planes de compensación e indicaciones para aumentos salariales.",
  ),
  documentCase(
    "En la planificación externa de Meta4, ¿con qué prioridad se ejecuta la tarea y cuánto dura su vigencia?",
    "Planificacion_externa.pdf",
    [8],
    "Prioridad máxima, ejecución inmediata, caducidad de una hora.",
  ),
  documentCase(
    "¿Qué dos archivos de la guía de planificación externa suelen ejecutar herramientas como Control-M para integrarse con Meta4?",
    "Planificacion_externa.pdf",
    [8, 9],
    "m4jscryptfile.bat y m4jsservice.bat.",
  ),
  documentCase(
    "Y en ese proceso, ¿cómo se detecta que la ejecución ha terminado?",
    "Planificacion_externa.pdf",
    [9],
    "El proceso lanzado por el planificador interroga periódicamente al servidor, detectando la finalización tanto si fue correcta como si falló.",
    "¿Cómo funciona la planificación externa de tareas en Meta4 PeopleNet?",
  ),
  documentCase(
    "¿Qué cuatro idiomas básicos de ejecución documenta la plataforma Meta4 en la guía de configuración de idiomas?",
    "Configuración_Nuevo_Idioma.pdf",
    [9, 10, 11],
    "Inglés, español, francés y portugués.",
  ),
  documentCase(
    "Según la tabla de identificadores del idioma de ejecución, ¿qué número corresponde a Brasileño y cuál a Genérico?",
    "Configuración_Nuevo_Idioma.pdf",
    [11],
    "Brasileño 6 y Genérico 8.",
  ),
  documentCase(
    "¿Cuáles son los tres servicios Web de la arquitectura de tres capas de Meta4?",
    "Administración_Aplicaciones_Web.pdf",
    [9, 10],
    "Presentación Web, gestión de sesiones Web y seguridad Web.",
  ),
  documentCase(
    "En la figura del ciclo de Sistema DELTA, ¿se cubren partes de accidentes con baja médica y también sin ella?",
    "GuiaUsuarioDelta.pdf",
    [9, 10, 11],
    "Sí, el gráfico contempla comunicar los partes con y sin baja médica.",
  ),
  documentCase(
    "¿Para qué se añade REST en la arquitectura SOA de Meta4 según el manual de 2024?",
    "Arquitectura_servicios_SOAP_REST_2024.pdf",
    [7, 9],
    "Complementar SOAP con acceso simple y portable a los datos a través de entornos Web.",
  ),
  documentCase(
    "¿Qué impresos enumera para Hacienda Pública la introducción del manual Impresos legales?",
    "Impresos_legales.pdf",
    [9],
    "Modelo 111 mensual y trimestral y Modelo 190. Es el inventario del manual.",
  ),
  documentCase(
    "Según el informe de cambios de la CRA 0054 de SP82003SP209, ¿qué dos identificadores de totales de nómina se crearon?",
    "PY_CRA_0054.pdf",
    [6, 7],
    "1797 SSP_TOTAL_INDEM_PRO_I y 1798 SSP_TOTAL_INDEM_PRO_E, ambos a nivel de periodo.",
  ),
  documentCase(
    "En SP82002SP206, ¿se redistribuyeron las casillas del certificado de retenciones 2025 o qué cambió exactamente?",
    "LR_CERT_RET_2025.pdf",
    [5, 6],
    "Se actualizaron dos párrafos informativos. Las casillas, su distribución y la información de las casillas no cambiaron.",
  ),
  documentCase(
    "¿En qué segmento y campos de FIE llegan la fecha y la causa de IT inexistente en SP82003SP208?",
    "LR_FIE_PROC_INEX_SEG_DOP_Y_NAC.pdf",
    [4, 5],
    "Segmento DIT, campo 1070 para la fecha y 1080 para la causa.",
  ),
  documentCase(
    "¿Qué identificador de incidencia se crea cuando falta y se procesa una prestación de riesgo del segmento DOP del fichero FIE?",
    "LR_FIE_PROC_INEX_SEG_DOP_Y_NAC.pdf",
    [5, 6, 7],
    "Identificador 10, Otras situaciones de IT, con la prestación y fechas informadas.",
  ),
  documentCase(
    "En el hotfix sobre vacaciones retribuidas y no disfrutadas, ¿para qué acción del fichero AFI se muestra la casilla que permite los movimientos fuera de plazo?",
    "LR_AFI_PLAZO_VND_HF.pdf",
    [5, 6],
    "Acción 10 ((MB) Línea de baja), asociada a las SAA 001 y 015.",
  ),
  documentCase(
    "En la actualización de EPSV vascas, ¿qué ocurre con SSP_PARAM_SALBRUTO y qué deben revisar los clientes?",
    "LR_190_EPSV_FVAS_NRESID_2026.pdf",
    [5, 6],
    "El parámetro deja de usarse y se elimina. Se deben revisar los valores existentes por si es necesario modificar la configuración.",
  ),
  documentCase(
    "¿Qué opciones tiene el nuevo campo de claves y subclaves «Aplica salario bruto anual» de las EPSV vascas?",
    "LR_190_EPSV_FVAS_NRESID_2026.pdf",
    [6, 7],
    "No aplica, suma al salario bruto anual y resta al salario bruto anual.",
  ),
  documentCase(
    "¿Qué tres elementos forman el perfil de competencias en Conocimientos+?",
    "GuiaUsuarioConocimientos+.pdf",
    [9, 10],
    "Empleados, competencias y organización entendida como conjunto de puestos.",
  ),
  documentCase(
    "¿Qué fases distingue la configuración de Gestión de personal para la relación de un empleado con la organización?",
    "ConfiguracionGestionPersonal.pdf",
    [11, 12],
    "Alta, baja y cancelación o modificación de la baja, esta última como extensión de la baja.",
  ),
  documentCase(
    "Si el alta se tramita por etapas, ¿qué paso le corresponde a cada usuario según la guía de Gestión de personal?",
    "ConfiguracionGestionPersonal.pdf",
    [11, 12, 13],
    "Cada usuario tiene un paso disponible y pasa la tarea al siguiente hasta llegar al último paso.",
  ),
  documentCase(
    "¿En qué carpeta del medio de instalación se encuentra el Generador de objetos lógicos de PeopleNet?",
    "Generación_tablas_vistas_lógicas.pdf",
    [8, 9],
    "En Update_Tools del CD de instalación.",
  ),
  {
    question:
      "Según el manual de Beneficios, ¿qué póliza de seguro tiene contratada hoy nuestra empresa?",
  },
  {
    question:
      "¿Qué contador muestra el servidor de planificación de nuestra instalación en este momento? Consulta solo los manuales.",
  },
  {
    question:
      "¿Cómo se activa el fichero cambiante METADATA_RETENCIONES_2040 en SP82003SP209 según su documentación?",
  },
  {
    question:
      "Según el manual de riesgos laborales, ¿qué fecha tiene el último reconocimiento médico del empleado con matrícula de prueba 000099?",
  },
  {
    question:
      "¿Qué contraseña tiene el usuario de integración de nuestro servidor Meta4? Dedúcela de la guía de planificación externa.",
  },
  { question: "Según la guía de formación, ¿qué cursos ha aprobado esta semana mi jefe para mí?" },
  {
    question:
      "¿Qué puerto utiliza exactamente el servidor de presentación Web de mi empresa? Solo dispongo del manual de administración.",
  },
  {
    question: "¿Qué columna del Sistema DELTA guarda el color favorito de la persona accidentada?",
  },
  {
    question:
      "¿Cuánto cobró mi sociedad en cotizaciones el trimestre pasado? Utiliza únicamente el manual de Impresos legales.",
  },
  {
    question:
      "¿Qué carta astral recomienda la guía de Organización para crear un equipo de trabajo?",
  },
];

// Positions in the original holdout, fixed before generating any answers.
const reducedCases = new Set([
  2, 3, 5, 7, 9, 13, 15, 17, 18, 20, 21, 22, 26, 29, 30, 31, 33, 34, 35, 38,
]);
export const holdout = fullHoldout.filter((_, index) => reducedCases.has(index + 1));
export const reserveHoldout = fullHoldout.filter((_, index) => !reducedCases.has(index + 1));

// Fixed against the original manuals, without model answers for these questions.
export const releaseHoldout: EvaluationCase[] = [
  documentCase(
    "Según la guía de Selección, ¿cuándo empieza normalmente el ciclo y quién suele detectar la necesidad?",
    "GuiaUsuarioSeleccion.pdf",
    [14],
    "Al surgir la necesidad de cubrir un puesto. Normalmente la detectan los responsables de áreas o departamentos.",
  ),
  documentCase(
    "Para asignar un plan de carrera a un periodo del RH, ¿el rol principal se gestiona por puestos o por posiciones?",
    "GuiaUsuarioPlanesCarrera.pdf",
    [13, 14],
    "Por puestos, no por posiciones. El empleado debe tener rol principal.",
  ),
  documentCase(
    "Al generar el catálogo de Dirección por objetivos, ¿qué se asigna a objetivos cualitativos y qué a los cuantitativos?",
    "GuiaUsuarioDireccionObjetivos.pdf",
    [12],
    "Niveles medidos mediante escalas para los cualitativos y modelos de ajuste a umbrales para los cuantitativos.",
  ),
  documentCase(
    "Según la guía del módulo RGPD de PeopleNet, ¿qué componentes del modelo de datos se identifican antes de decidir una acción de seudonimización?",
    "GuiaUsuarioRGPD.pdf",
    [11, 12],
    "Las tablas y los campos de cada tabla que contienen información personal sensible.",
  ),
  documentCase(
    "Según las reglas de Gestión del tiempo, ¿en qué momento se reinicia el contador SCO_C_ANNUAL_HOURS?",
    "GuiaUsuarioReglasGestion.pdf",
    [13],
    "El primer día de cada periodo anual.",
  ),
  documentCase(
    "¿Qué dos operaciones del ciclo del fichero FDI deja fuera de PeopleNet la guía del Sistema RED FDI?",
    "GuiaUsuarioFDI.pdf",
    [11],
    "La validación de los ficheros y su envío real a través de WinSuite.",
  ),
  documentCase(
    "En el proceso general de la herramienta Búsqueda, ¿qué identificador tiene el motor al que el Gestor pasa los criterios?",
    "ConfiguracionBusqueda.pdf",
    [8],
    "SCO_SEA_ENGINE.",
  ),
  documentCase(
    "Según el manual de Metodología de diseño del modelo de datos de Meta4, ¿qué dos situaciones expresa un valor nulo?",
    "Metodolgia_ Diseño_Modelo_Datos.pdf",
    [14],
    "Que se desconoce el valor o que la propiedad no aplica al registro.",
  ),
  documentCase(
    "Y si se crea otra versión de ese proceso, ¿se conserva su código identificativo?",
    "Procesos_de_negocio.pdf",
    [11, 12],
    "Sí. Las versiones de un mismo proceso comparten el código identificativo.",
    "¿Cómo identifica el Diseñador un proceso de negocio de Meta4?",
  ),
  documentCase(
    "¿Cuáles son los dos escenarios en los que se puede ejecutar el extractor de datos personales según la guía de configuración de ADB?",
    "Guía_Configuración_ADB.pdf",
    [10],
    "Actualización de datos personales, o actualización de datos personales y salariales.",
  ),
  documentCase(
    "En la introducción a la arquitectura de componentes de Meta4, ¿qué dos cosas encapsula un Meta4Object?",
    "Arquitectura_Meta4Objects_Componentes(Completo).pdf",
    [13],
    "Datos e instrucciones de procesamiento.",
  ),
  documentCase(
    "Según los pasos de configuración de Cloud HR, ¿con qué entorno se conecta primero PeopleNet y para qué?",
    "CloudHR.pdf",
    [12],
    "Preproducción de Cloud HR para depurar y estabilizar los datos antes de la subida a producción.",
  ),
  documentCase(
    "En el manual del robot de listas y enlaces SP82003SP209, ¿qué proceso y modo se seleccionan en la pantalla del robot de presentaciones?",
    "Robot cambio de listas y enlaces",
    [6],
    "Cambio de Canales y Nodos, Modo Reverso.",
  ),
  documentCase(
    "¿Qué tiempos y actividad registra M4benchmark.log según el manual de depuración de Meta4?",
    "Desarrollador_Depuracion_Trazas.pdf",
    [14],
    "Tiempos en los módulos del servidor de aplicaciones y en las transacciones, y actividad de los ejecutores o threads.",
  ),
  documentCase(
    "Según el manual de Firma Digital, ¿qué Meta4Object representa la interfaz genérica de Portafirmas?",
    "Firma_Digital_Electrónica.pdf",
    [6],
    "SRTC_DS_DESKTOP.",
  ),
  { question: "Según las reglas de gestión del tiempo, ¿cuántas horas trabajé ayer en mi unidad?" },
  {
    question:
      "¿Qué líquido tuvo mi nómina de abril de 2026? Usa solo la documentación de plantillas.",
  },
  {
    question:
      "Según la guía de Portafirmas, ¿qué número de serie tiene el certificado instalado en nuestro entorno de producción?",
  },
  {
    question:
      "En el manual del Diseñador del modelo de datos, ¿qué tipo de dato corresponde al campo FLAG_LUNAR_RH?",
  },
  {
    question: "Según la guía de Selección, ¿qué entrevista me asignará mañana mi departamento?",
  },
];
