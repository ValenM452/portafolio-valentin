// Datos personales. Cambiá acá y se actualiza todo el sitio.
export const site = {
  name: 'Valentín Martínez',
  short: 'valentín.m',
  role: 'Desarrollador full-stack',
  location: 'Córdoba Capital, Argentina',
  available: true,
  availableText: 'Tomando proyectos nuevos',
  tagline: 'Construyo sitios y sistemas que hacen vender a negocios reales.',
  heroNote: 'Un sitio bien hecho no se nota: se nota cuando entran pedidos.',
  intro:
    'Diseño y programo de punta a punta: la tienda que ve el cliente, el panel donde se cargan pedidos y stock, y el servidor que lo sostiene. Trabajo con comercios y marcas que necesitan algo propio, rápido y fácil de manejar.',
  // Tu foto para la portada: poné el archivo en public/ (ej. public/yo.jpg) y escribí '/yo.jpg'.
  // Ideal: retrato vertical con fondo liso. El sitio le aplica el tono naranja solo.
  photo: '',
  // Reemplazá por tu email real (también se usa en el botón de contacto).
  email: 'valentinmartinez452@gmail.com',
  // Dejá en '' lo que no tengas.
  github: 'https://github.com/ValenM452',
  linkedin: '',
  whatsapp: '',
  cv: '', // ej: '/cv.pdf' (poné el PDF en la carpeta public/)
};

// Lo que ofrecés. Aparece numerado en la portada y como acordeón en "Servicios".
export const services = [
  {
    title: 'Tiendas online',
    short: 'E-commerce',
    text: 'Catálogo, carrito y pedidos que llegan ordenados a WhatsApp o al panel. Sin comisiones de marketplace y con stock real.',
    tags: ['Catálogo', 'Carrito', 'Stock', 'Pedidos'],
  },
  {
    title: 'Sistemas de gestión',
    short: 'Paneles y turnos',
    text: 'Turneros, paneles de ventas, carga de productos y estadísticas. Herramientas simples para que el negocio maneje su día a día.',
    tags: ['Turnos', 'Panel admin', 'Reportes'],
  },
  {
    title: 'Sitios de marca',
    short: 'Landing pages',
    text: 'Sitios institucionales y landings con identidad propia, rápidos, bien posicionados en Google y fáciles de actualizar.',
    tags: ['Diseño', 'SEO', 'Animaciones'],
  },
  {
    title: 'Integraciones con IA',
    short: 'Automatización',
    text: 'Asistentes, automatizaciones y herramientas con IA conectadas a lo que el negocio ya usa.',
    tags: ['Claude API', 'Voz', 'Automatización'],
  },
];

export const skills = [
  { group: 'Frontend', items: ['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS', 'Vite'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'SQLite', 'Drizzle ORM', 'Zod', 'APIs REST'] },
  { group: 'Producto', items: ['Paneles de gestión', 'Pedidos por WhatsApp', 'SEO técnico', 'Integración con IA'] },
  { group: 'Infra', items: ['Vercel', 'Netlify', 'Docker', 'VPS', 'Git'] },
];

export const workSteps = [
  { n: '01', title: 'Entender el negocio', text: 'Antes de diseñar, veo cómo vende hoy, qué se repite a mano y qué tiene que pasar para que el sitio pague solo.' },
  { n: '02', title: 'Diseño con contenido real', text: 'Trabajo con los textos, productos y fotos del cliente desde el primer día. Nada de lorem ipsum.' },
  { n: '03', title: 'Construir y medir', text: 'Entregas cortas, publicadas en una URL de prueba, con panel propio para que el cliente maneje su contenido.' },
  { n: '04', title: 'Publicar y acompañar', text: 'Dominio, hosting, analítica y una guía corta para que el negocio sea dueño de su sitio.' },
];
