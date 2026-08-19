/**
 * data.js
 * -----------------------------------------------------------------------
 * Todo el contenido editable de la landing vive aquí, separado del HTML.
 * Para actualizar textos, propuestas, eventos, zonas o redes: edita este
 * archivo. No hace falta tocar index.html ni main.js.
 * -----------------------------------------------------------------------
 */

const DATA = {

  candidata: {
    nombre: "Nandy Córdova",
    nombreCompleto: "Nandy Córdova Morales",
    cargo: "Alcaldesa 2026",
    partido: "Renovación Popular",
    slogan: "Nandy sabe, Nandy resuelve",
    whatsapp: "https://wa.me/51999999999", // TODO: reemplazar con el número real de campaña
    whatsappZona: "https://wa.me/51999999999", // TODO: link al grupo de WhatsApp por zona
    whatsappVoluntarios: "https://wa.me/51999999999" // TODO: link para voluntarios
  },

  proximoMitin: {
    titulo: "Próximo Mitin",
    lugar: "Plaza Principal",
    fecha: "Este sábado",
    hora: "4:00 PM",
    link: "#" // TODO: link a detalles (evento de Facebook, WhatsApp, etc.)
  },

  trayectoria: [
    {
      icono: "balanza",
      titulo: "Abogada",
      descripcion: "Especialista en Derecho Civil y Municipal.",
      fuente: "Universidad Nacional Mayor de San Marcos"
    },
    {
      icono: "birrete",
      titulo: "Maestría en Derecho",
      descripcion: "Derecho Civil y Comercial.",
      fuente: "Universidad Nacional Mayor de San Marcos"
    },
    {
      icono: "maletin",
      titulo: "Experiencia Profesional",
      descripcion: "20 años en municipalidades ocupando diversos cargos de gerencias y subgerencias.",
      fuente: ""
    },
    {
      icono: "escudo",
      titulo: "Manos Limpias",
      descripcion: "Sin antecedentes penales, judiciales ni policiales.",
      fuente: ""
    }
  ],

  valores: [
    { icono: "personas", texto: "Liderazgo con valores" },
    { icono: "foco", texto: "Capacidad de resolver" },
    { icono: "manos", texto: "Sí sabemos gobernar" }
  ],

  propuestas: [
    {
      id: "seguridad",
      icono: "escudo",
      titulo: "Seguridad",
      descripcion: "Apoyo articulado a la PNP, implementación de alarmas vecinales y cámaras de videovigilancia de alta tecnología."
    },
    {
      id: "saneamiento",
      icono: "llave",
      titulo: "Saneamiento",
      descripcion: "Ejecución del 100% del presupuesto asignado y énfasis en el saneamiento físico-legal y formalización de predios."
    },
    {
      id: "obras",
      icono: "herramientas",
      titulo: "Obras",
      descripcion: "Construcción de muros de contención, escaleras y reactivación del exitoso programa \"Manos a la Obra\"."
    },
    {
      id: "desarrollo-humano",
      icono: "familia",
      titulo: "Desarrollo Humano",
      descripcion: "Inversión integral en educación, salud y programas eficaces de prevención contra la violencia familiar."
    },
    {
      id: "parques-limpieza",
      icono: "arbol",
      titulo: "Parques y Limpieza",
      descripcion: "Recuperación activa y mantenimiento permanente de áreas verdes, losas deportivas y espacios públicos."
    }
  ],

  planGobiernoUrl: "#", // TODO: link al PDF del plan de gobierno

  zonas: [
    { id: "zona-1", nombre: "Lomas" },
    { id: "zona-2", nombre: "San Pedro" },
    { id: "zona-3", nombre: "Centro" },
    { id: "zona-4", nombre: "El Progreso" },
    { id: "zona-5", nombre: "Punchauca" }
    // TODO: completar con las zonas reales de Carabayllo cuando la campaña las defina
  ],

  agenda: [
    {
      dia: "15",
      mes: "OCT",
      estado: "proximo", // "proximo" | "realizado"
      titulo: "Gran Caminata Lomas",
      hora: "16:00 hrs",
      lugar: "Plaza Central"
    },
    {
      dia: "10",
      mes: "OCT",
      estado: "realizado",
      titulo: "Asamblea San Pedro",
      hora: "",
      lugar: "Concluido con éxito"
    }
    // TODO: actualizar cada 2 semanas con las caminatas/asambleas reales
  ],

  electoral: {
    texto: "Información oficial extraída del portal de Voto Informado del Jurado Nacional de Elecciones (JNE) y la Oficina Nacional de Procesos Electorales (ONPE).",
    linkJNE: "https://votoinformado.jne.gob.pe/", // TODO: verificar/actualizar link exacto
    linkONPE: "https://www.onpe.gob.pe/" // TODO: verificar/actualizar link exacto (consulta de local de votación)
  },

  redes: [
    { nombre: "Instagram", icono: "instagram", usuario: "@NandyCordova", url: "https://instagram.com/", color: "instagram" },
    { nombre: "Facebook", icono: "facebook", usuario: "@NandyCordova", url: "https://facebook.com/", color: "facebook" },
    { nombre: "TikTok", icono: "tiktok", usuario: "@NandyCordova", url: "https://tiktok.com/", color: "tiktok" },
    { nombre: "X", icono: "x", usuario: "@NandyCordova", url: "https://x.com/", color: "x" }
    // TODO: reemplazar por los usuarios/links reales confirmados por la campaña
  ],

  footer: {
    linea1: "Campaña Nandy Córdova Alcaldesa",
    copyright: "© 2026 Renovación Popular. Todos los derechos reservados.",
    atribucion: "Página informativa de la candidatura de Nandy Córdova Morales." // atribución JNE
  }

};
