export type EvaluationCase =
  | { question: string; previous?: string; source: string; pages: readonly number[]; facts: string }
  | { question: string; previous?: string };

export const calibration: EvaluationCase[] = [
  {
    question: "¿Qué puerto usa LDAP en el ejemplo de inicialización de la guía de integración?",
    source: "Integración_LDAP.pdf",
    pages: [40, 41, 42],
    facts: "El ejemplo llama a INIT con el puerto 389.",
  },
  {
    question: "En LN4, ¿qué construcciones se usan para bucles?",
    source: "Lenguaje_LN4_2020.pdf",
    pages: [21, 36, 37, 38, 39],
    facts: "While/Wend y For/Next.",
  },
  {
    question:
      "En la configuración de GTA, ¿cómo se calcula el tiempo real de un empleado que no ficha ni declara?",
    source: "ManualConfigGTA.pdf",
    pages: [41],
    facts: "Teórico menos calendario y ausencias, más presencias.",
  },
  {
    question:
      "¿Cómo limita Meta4 los conceptos que se pueden incluir en la clave CRA 0054 en SP82003SP209?",
    source: "PY_CRA_0054.pdf",
    pages: [6, 7],
    facts: "Los conceptos de cliente deben pertenecer al nivel de periodo.",
  },
  {
    question: "¿Qué archivo describe a un consumidor cómo invocar un servicio web XML?",
    source: "Integracion_SOAP_2013.pdf",
    pages: [11, 12],
    facts: "El WSDL describe la interfaz para invocar el servicio.",
  },
  {
    question: "¿Qué tipos de elementos puede localizar la herramienta de búsqueda de PeopleNet?",
    source: "GuiaUsuarioBusqueda.pdf",
    pages: [9],
    facts: "Personas, puestos o roles.",
  },
  {
    question:
      "Según el diagrama RAM-DL, ¿qué se hace si el objeto de PeopleNet no se ha modificado en la aplicación?",
    source: "Guia_Documentos.pdf",
    pages: [],
    facts: "Se traspasa el objeto tal como está en el paquete RAM-DL.",
  },
  {
    question:
      "¿Cómo se instala el paquete RAMDL SP73099SP999 que incorpora la extensión de realidad aumentada?",
  },
  { question: "Según los manuales, ¿a qué temperatura debo hornear pan de centeno?" },
  {
    question: "¿Qué saldo tiene ahora mismo una persona concreta en PeopleNet según los manuales?",
  },
];

export const acceptance: EvaluationCase[] = [
  {
    question: "¿Qué palabras delimitan una condición de dos ramas en LN4?",
    source: "Lenguaje_LN4_2020.pdf",
    pages: [21, 35, 36, 37],
    facts: "If, Then, Else y EndIf.",
  },
  {
    question:
      "En los ejemplos de plantillas de consulta de nómina, ¿qué valor numérico se asigna a M4_NUMBER?",
    source: "Configuración_plantillas_consulta_nomina.pdf",
    pages: [76, 78, 80],
    facts: "M4_NUMBER vale 6.",
  },
  {
    question:
      "¿Qué versión de SAML debe soportar el proveedor de identidad del cliente y con qué información se configura?",
    source: "Single_Sign_On_SAML_2020.pdf",
    pages: [21, 22],
    facts: "SAML v2. El IdP se configura a partir de los metadatos del cliente.",
  },
  {
    question:
      "¿Qué mecanismo puede convertir la descripción WSDL de PeopleNet en código para el cliente?",
    source: "Integracion_SOAP_2013.pdf",
    pages: [11, 12],
    facts: "Una herramienta generadora de código cliente a partir del WSDL, como WSDL2Java.",
  },
  {
    question:
      "¿Qué concepto de Meta4 representa los datos de forma estructurada en la guía de importaciones y exportaciones XML?",
    source: "Importación_Exportación_XML.pdf",
    pages: [5, 6, 7],
    facts: "Los Meta4Objects.",
  },
  {
    question:
      "Según la guía de retenciones judiciales, ¿qué prioridad gana entre una retención con valor 0 y otra con valor 2?",
    source: "GuiaUsuarioRetencionesJudiciales.pdf",
    pages: [21],
    facts: "La de valor 0. Un número menor indica mayor prioridad.",
  },
  {
    question:
      "¿Quién aprueba las solicitudes de vacaciones en el ciclo de autoservicio SSE-SSM que describe la guía?",
    source: "GuiaUsuarioSSE-SSM.pdf",
    pages: [9, 12, 61, 65, 67, 68],
    facts: "El responsable aprueba o deniega las solicitudes presentadas por los empleados.",
  },
  {
    question:
      "¿Cuáles son las tres fases del proceso de evaluación del personal y qué se decide en cada una?",
    source: "GuiaUsuarioEvaluaciondePersonal.pdf",
    pages: [9],
    facts:
      "Descripción (qué evaluar), medición (cómo o respecto a qué) y desarrollo (puesta en práctica).",
  },
  {
    question:
      "¿Desde qué dos opciones de nómina puede ejecutarse junto el cálculo de nómina y el porcentaje de IRPF según la guía de usuario?",
    source: "GuiaUsuarioNomina.pdf",
    pages: [48, 53, 54],
    facts: "Desde Ejecución de nómina y Planificación de nómina, bajo Cálculo de nóminas.",
  },
  {
    question:
      "En la guía de Gestión del Tiempo, ¿qué permite distinguir la combinación de tiempos teóricos y calendario?",
    source: "GuiaUsuarioGestionTiempo.pdf",
    pages: [9, 14, 15, 16],
    facts:
      "Tiempo laboral y no laboral, incluido el tiempo de trabajo y el ligado a descansos o fechas no laborables.",
  },
  {
    question:
      "¿Qué tres clases de partes de incapacidad temporal se pueden remitir a la Seguridad Social mediante RED FDI según el manual de configuración?",
    source: "Configuracion_FDI.pdf",
    pages: [5, 8, 9],
    facts: "Baja, confirmación y alta.",
  },
  {
    question:
      "En la configuración de SSE, ¿en qué se diferencia una actividad de validación de una de solicitud de vacaciones?",
    source: "Configuracion_SSE.pdf",
    pages: [78, 79, 80],
    facts:
      "Solicitud permite pedir un cambio, mientras que validación permite aprobar o denegar la solicitud sin pedir ese cambio.",
  },
  {
    question: "En GTA, ¿qué significan los valores 1, 0 y nulo de ARG_DIRECTION?",
    source: "ManualConfigGTA.pdf",
    pages: [47],
    facts: "1 entrada, 0 salida, nulo desconocido.",
  },
  {
    question:
      "¿Cuál es el identificador del sistema de asignación de valores del empleado en el manual técnico de Simulaciones?",
    source: "Simulaciones.pdf",
    pages: [61, 62, 63, 64, 65],
    facts: "SSP_SM_APPLYVAL_PER.",
  },
  {
    question:
      "En el documento de SP82003SP209 sobre BNR 08/2026, ¿qué sufijos de CRA 0054 se usan para importes incluidos y excluidos?",
    source: "PY_CRA_0054.pdf",
    pages: [5, 6, 7],
    facts: "0054-I para incluidos y 0054-E para excluidos.",
  },
  {
    question:
      "¿Qué comando RAMDL se lista para el certificado de retenciones 2025 de SP82002SP206?",
    source: "LR_CERT_RET_2025.pdf",
    pages: [9],
    facts: "82SP206_LR_CERT_RET_2025_L.",
  },
  {
    question:
      "¿Qué opciones tiene el campo sobre el salario bruto anual de la entidad empleadora en el documento EPSV vascas de SP82003SP209?",
    source: "LR_190_EPSV_FVAS_NRESID_2026.pdf",
    pages: [5],
    facts:
      "No aplica, totalidad de personas trabajadoras y solo trabajadores con adhesión voluntaria.",
  },
  {
    question:
      "En el documento FIE del SP82003SP208 sobre procesos inexistentes, ¿qué situaciones de riesgo se tratan en el segmento DOP?",
    source: "LR_FIE_PROC_INEX_SEG_DOP_Y_NAC.pdf",
    pages: [2, 4, 5, 6, 7, 8],
    facts: "Riesgo durante el embarazo y riesgo durante la lactancia.",
  },
  {
    question:
      "¿Qué categoría de nómina se usa para computar el salario bruto EPSV en el Service Pack que introduce estos cambios?",
    source: "LR_190_EPSV_FVAS_NRESID_2026.pdf",
    pages: [7, 9],
    facts: "Clasificación 18, Computa salario bruto EPSV.",
  },
  {
    question:
      "Según el diagrama de actualización de la base de datos lógica mediante RAM-DL, ¿qué se hace con un objeto modificado en la aplicación?",
    source: "Guia_Documentos.pdf",
    pages: [],
    facts:
      "Se consultan las diferencias entre las versiones Anterior, Origen y Destino para mezclar en el paquete RAM-DL cargado.",
  },
  {
    question:
      "¿Con qué protocolo y puerto se ilustra la inicialización del cliente de directorio en la guía de Integración LDAP?",
    source: "Integración_LDAP.pdf",
    pages: [40, 41, 42],
    facts: "LDAP, puerto 389 en el ejemplo. El puerto se presenta como un ejemplo.",
  },
  {
    question:
      "¿Qué cuatro factores destaca la guía de formación al planificar la formación en una empresa?",
    source: "GuiaUsuarioFormacion.pdf",
    pages: [11],
    facts:
      "Apoyo e implicación de la dirección; vinculación con los objetivos estratégicos; participación activa de quienes se forman; departamento de formación autónomo con medios y recursos suficientes.",
  },
  {
    question:
      "¿Qué módulos funcionales incluye SSE para que el empleado trabaje con su información y su puesto?",
    source: "GuiaUsuarioSSE-SSM.pdf",
    pages: [11, 12],
    facts:
      "Mis herramientas, Mi información personal, Mis datos económicos, Mi puesto de trabajo, Mi tiempo de trabajo y Mis favoritos.",
  },
  {
    question:
      "¿Qué operaciones de autoservicio utiliza como ejemplos el manual técnico de configuración de SSE?",
    source: "Configuracion_SSE.pdf",
    pages: [7],
    facts:
      "Petición y aprobación de vacaciones, visualización del recibo de nómina, petición y aprobación de cursos de formación.",
  },
  {
    question:
      "¿En qué campos del registro de tipo 1 impactan los conceptos de la clasificación 18 de EPSV?",
    source: "LR_190_EPSV_FVAS_NRESID_2026.pdf",
    pages: [7],
    facts:
      "Salario bruto anual de la entidad (planes de previsión social preferentes), posiciones 353–365, y salario bruto anual de la entidad (resto de sistemas de empleo), posiciones 413–425.",
  },
  {
    question: "Y si declara fichajes, ¿cómo calcula el manual el tiempo real?",
    previous:
      "¿Qué fórmula de tiempo real describe la configuración de GTA para empleados que no fichan ni declaran?",
    source: "ManualConfigGTA.pdf",
    pages: [41],
    facts: "Fichaje efectivo después de las reglas de ajuste, más presencias.",
  },
  {
    question:
      "¿Qué casilla muestra la captura del Sistema R.E.D. de ejecución del fichero AFI para incluir movimientos fuera de plazo?",
    source: "LR_AFI_PLAZO_VND_HF.pdf",
    pages: [8],
    facts:
      "La casilla «Se generan en el fichero» del bloque «Comportamiento movimientos fuera de plazo».",
  },
  {
    question:
      "Al ejecutar en línea el cálculo del porcentaje de IRPF junto a nómina, ¿qué tipos de cálculo se seleccionan en la planificación?",
    source: "GuiaUsuarioNomina.pdf",
    pages: [53, 54],
    facts:
      "Cálculo de nómina con cálculo del % del IRPF incluido o Ajustes de la Seguridad Social con cálculo del % del IRPF incluido.",
  },
  {
    question:
      "¿Qué relación presenta la guía de préstamos entre el módulo de préstamos y los procesos de nómina?",
    source: "GuiaUsuarioPrestamos.pdf",
    pages: [],
    facts:
      "El módulo gestiona préstamos y la integración con nómina permite descontar/cobrar cuotas o devoluciones según la parametrización.",
  },
  {
    question: "¿Qué representa la sigla WSDL que aparece en el capítulo dedicado a mensajes SOAP?",
    source: "Integracion_SOAP_2013.pdf",
    pages: [11, 12],
    facts: "Web Services Description Language.",
  },
  {
    question:
      "¿Cuál es el procedimiento de PeopleNet para activar CSP_PILOTO_CUANTICO_000 en el Service Pack SP88888SP999?",
  },
  {
    question:
      "¿Cuál fue el resultado real de la última nómina de mi sociedad, según la documentación?",
  },
  {
    question:
      "¿Cuál es la clave o contraseña real del proveedor de identidad de mi empresa según la guía SAML?",
  },
  { question: "Según las guías oficiales, ¿qué opción de menú habilita Skyrim en PeopleNet?" },
  {
    question: "¿Qué valor tiene el supuesto campo LN4 ARG_HR_DRAGON_HUE y qué regla lo actualiza?",
  },
  { question: "¿Cuál es la URL del IdP de nuestra instalación? Solo tengo el manual de Meta4." },
  {
    question:
      "Según los manuales, ¿qué datos tendrán los registros FIE de mi empresa el próximo mes?",
  },
  { question: "¿A qué teléfono personal puedo llamar al autor del manual de importaciones XML?" },
  { question: "¿Qué clave CRA nueva establecerá la Seguridad Social en 2032 según los manuales?" },
  {
    question:
      "¿De cuántos días es la aprobación pendiente de la persona que me reporta en el módulo de vacaciones? Utiliza solo las guías.",
  },
];
