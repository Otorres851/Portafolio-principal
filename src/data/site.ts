export const siteData = {
  name: 'Oscar Torres',
  brand: 'Oscar Torres',
  role: 'Front-End Developer',
  location: 'Bogotá, Colombia',
  email: 'oscar4545@hotmail.com',
  phone: '+57 310 569 9752',
  intro:
    'Diseño y desarrollo experiencias web con foco en producto, interfaz, performance y claridad visual.',
  longIntro:
    'Construyo interfaces modernas con React, Next.js y TypeScript, transformando requerimientos de negocio en productos claros, escalables y visualmente sólidos.',
  social: {
    github: 'https://github.com/Otorres851',
    linkedin: 'https://www.linkedin.com/in/otorres-38a6241a2/',
    behance: 'https://www.behance.net/oscarbotello',
    twitter: 'https://twitter.com/torresoscar841',
    cv: 'https://drive.google.com/uc?export=download&id=14X-K-rdIEUsHtkazt6pgfNeT-sLfs-jI',
  },
};

export const metrics = [
  { value: '+2', label: 'Años de experiencia' },
  { value: '+12', label: 'Proyectos desarrollados' },
  { value: 'React + Vue', label: 'Stack principal' },
  { value: 'Front-End', label: 'Especialidad' },
];

export const services = [
  {
    title: 'Interfaces modernas y responsivas',
    copy: 'Construyo layouts elegantes, accesibles y visualmente sólidos, pensados para que el producto se vea mejor desde el primer scroll.',
  },
  {
    title: 'Desarrollo React y Vue',
    copy: 'Trabajo con componentes escalables, integración de APIs y estructura limpia para apps y sitios que necesitan mantenerse con facilidad.',
  },
  {
    title: 'UI enfocada en producto',
    copy: 'Traduzco objetivos de negocio en experiencia, jerarquía visual y decisiones front-end que ayudan a que el proyecto comunique mejor.',
  },
];

export const stack = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vue',
  'Tailwind CSS',
  'Vuetify',
  'Sass',
  'Bootstrap',
  'Ionic',
  'REST APIs',
  'Git',
  'MySQL',
  'PostgreSQL',
  'Illustrator',
  'Photoshop',
];

export const experience = [
  {
    company: 'Lodgerin',
    role: 'Front-End Engineer',
    period: 'Marzo 2025 — Abril 2026',
    copy: `Participé en el desarrollo de funcionalidades clave en aplicaciones web de la 
    compañia, optimizando la experiencia de usuario y contribuyendo a un 
    crecimiento del 80% en las ventas de alquiler en España y otros mercados.`,
    bullets: [
      'Desarrollo de interfaces y aplicaciones web enfocadas en producto.',
      'Integración con APIs REST y mejora de flujos de usuario.',
      'Implementación de UI responsive y mantenimiento de componentes.',
    ],
  },
  {
    company: 'Punto Químico',
    role: 'Junior Front-End / Web Designer',
    period: 'Junio 2021 — Julio 2021',
    copy: `Participé en el desarrollo principal del ecommerce de la compañía,
    construyendo interfaces modernas, optimizando la experiencia de usuario
    y contribuyendo al crecimiento de la plataforma.`,
    bullets: [
      'Desarrollo de landing pages y presencia digital.',
      'Implementación responsive y soporte visual de marca.',
      'Apoyo en estructura visual y comunicación del producto.',
    ],
  },
  {
    company: 'Escuela María M',
    role: 'Docente de Informática',
    period: 'Agosto 2018 — Noviembre 2018',
    copy: `Docente del área de Tecnología e Informática, enfocado en la enseñanza de 
    herramientas digitales, resolución de problemáticas educativas y aplicación de 
    estrategias pedagógicas en el campo tecnológico.`,
    bullets: [
      'Enseñanza de herramientas digitales y conceptos de programación.',
      'Introducción a diseño web e interfaces para estudiantes.',
    ],
  },
];

export const education = [
  {
    title: 'Licenciatura en Diseño Tecnológico',
    institution: 'UPN',
    period: '2020',
    copy: `
    Formación en diseño, tecnología y educación,
    con enfoque en desarrollo frontend,
    pensamiento visual y construcción de interfaces digitales
    escalables orientadas a producto.
    `,
  },
  {
    title: 'Tecnólogo en Mecatrónica',
    institution: 'SENA',
    period: '2007',
    copy: `
    Formación técnica orientada a automatización, 
    lógica y resolución estructurada de problemas, 
    desarrollando pensamiento analítico aplicado a la construcción de soluciones digitales 
    y procesos tecnológicos.
    `,
  },
  {
    title: 'Bachiller Académico',
    institution: 'Colegio RLB',
    period: '2005',
    copy: `
    Participación en espacios académicos y tecnológicos como Expociencia Juvenil y Expotecnología, 
    desarrollando habilidades en investigación, 
    pensamiento creativo y presentación de proyectos.
    `,
  },
];

export const projects = [
  {
    title: 'Venta de Cursos de Programación',
    category: 'Web',
    filter: 'web',
    copy: `Plataforma estática y animada para vender cursos de programación, 
    mostrando rutas de aprendizaje, beneficios, 
    módulos y páginas de detalle con una landing que transmite valor desde el primer scroll.`,
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SASS'],
    href: 'https://plataforma-de-cursos-six.vercel.app/',
    image: '/images/project-cursos.png',
  },
  {
    title: 'Ecommerce Food',
    category: 'Producto',
    filter: 'producto',
    copy: `Interfaz tipo ecommerce con secciones amplias, producto visual y recorrido comercial más claro. 
    Actualmente se esta trabajando en ella.`,
    tags: ['Vite', 'Vue 3', 'TypeScript', 'Vuetify', 'SASS', 'i18n', 'Pinia'],
    href: 'https://ecommerce-food-freshmeal.vercel.app/',
    image: '/images/project-food.png',
  },
  {
    title: 'Best Mobile App Showcase',
    category: 'Producto',
    filter: 'producto',
    copy: `Maquetación para app móvil con composición limpia, foco comercial y presentación moderna del producto.`,
    tags: ['Landing', 'UI', 'Responsive'],
    href: 'https://otorres851.github.io/Landing-Page-one/',
    image: '/images/project-bestapp.png',
  },
  {
    title: 'Landing Page React',
    category: 'Producto',
    filter: 'producto',
    copy: 'Landing orientada a conversión con componentes reutilizables, jerarquía visual y estructura clara.',
    tags: ['React', 'UI', 'Responsive'],
    href: 'https://web-app-land.surge.sh/',
    image: '/images/project-landing.png',
  },
  {
    title: 'Landing Marletti',
    category: 'Branding',
    filter: 'branding',
    copy: `Landing page enfocada en presentación visual, claridad de mensaje y comportamiento responsive.
    Actualmente se esta trabajando en ella.`,
    tags: ['HTML', 'CSS', 'Responsive'],
    href: 'https://otorres851.github.io/Page-Marletti/',
    image: '/images/project-brand.png',
  },
  {
    title: 'Pokédex Web',
    category: 'Web App',
    filter: 'web',
    copy: `Prueba desarrollada en react que consume una API para listar y visualizar Pokémon, 
    con búsqueda dinámica, filtrado y una interfaz clara enfocada en experiencia de usuario.`,
    tags: ['React', 'API', 'JavaScript', 'UI'],
    href: 'https://possible-mice.surge.sh/',
    image: '/images/project-pokedex.png',
  },
  {
    title: 'Apeperia Web',
    category: 'Mockups',
    filter: 'mockups',
    copy: 'Maquetación limpia de landing corporativa con énfasis en ritmo visual y escalabilidad.',
    tags: ['HTML', 'CSS', 'Responsive'],
    href: 'https://otorres851.github.io/Apeperia-Web/',
    image: '/images/project-apeperia.png',
  },
  {
    title: 'Mi Web Wireframe',
    category: 'Mockups',
    filter: 'mockups',
    copy: 'Composición de wireframe y mockups con foco en estructura de interfaz, narrativa visual y presentación del producto.',
    tags: ['Wireframe', 'UX', 'UI'],
    href: 'https://www.behance.net/gallery/105393503/Mi-Web-Wireframe-Mockup-%28Basico%29',
    image: '/images/project-mockups.png',
  },
  {
    title: 'Ecommerce con React',
    category: 'Web App',
    filter: 'web',
    copy: `Prueba desarrollada en React enfocada en la experiencia de compra, 
    con navegación intuitiva y una presentación moderna de productos orientada a usabilidad.`,
    tags: ['React', 'JavaScript', 'CSS'],
    href: 'https://fake-ecommerce-website.surge.sh/',
    image: '/images/project-ecommerce.png',
  },
];
