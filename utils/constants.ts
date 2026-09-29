import { Experience, Project, SocialLink } from './types';

// IMPORTANT: Replace this URL with the actual path to your uploaded image if hosting locally
// or keep this placeholder if you want to test the layout first.
export const PROFILE_IMAGE_URL = "/img/yop.webp";

export const WHATSAPP_NUMBER = "51969184844";
export const EMAIL = "fernandoolivert25@gmail.com";

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Dalambo - Firma Creativa",
    role: "Developer web",
    period: "15/01/2026 – Actualidad",
    type: "Remote",
    mode: "freelancer",
    logo: "/img/dalambo.webp", // Placeholder generated logo
    description: "Creación y optimización de plataformas web dinámicas para una organización en México, implementando arquitecturas Full Stack con Next.js.",
    tech: ["Next.js", "Nest.js", "VPS"]
  },
  {
    company: "Molokaih",
    role: "Developer web",
    period: "01/07/2025 – Actualidad",
    type: "Remote",
    mode: "parttime",
    logo: "/img/molokaih.webp", // Placeholder generated logo
    description: "Desarrollo Full Stack para una empresa canadiense, donde lanzamos una plataforma web llamda huuply.",
    tech: ["Next.js", "Nest.js", "n8n", "VPS", "ManyChat"]
  },
  {
    company: "Rangel",
    role: "Junior Developer",
    period: "10/01/2024 – 10/03/2024",
    type: "Presencial",
    mode: "fulltime",

    logo: "/img/rangel.webp", // Placeholder generated logo
    description: "Lideré el desarrollo de aplicaciones web utilizando Next.js y ShadCN UI para interfaces avanzadas. Gestioné el backend con Strapi y optimicé flujos operativos mediante automatizaciones en n8n, asegurando un control de versiones riguroso con Git y despliegues eficientes.",
    tech: ["Next.js", "Strapi", "n8n", "VPS"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "hotel-mobile-app",
    title: "App Móvil de Reservas Hoteleras",
    description: "Maqueta y prototipo de aplicación móvil para reservas de habitaciones, catálogo con calificaciones y reseñas, autenticación, validación de pagos, y tablero de reservas activas.",
    tech: ["React Native", "Android Studio", "TypeScript", "Tailwind"],
    image: "/img/projects/hotel-app/2.webp",
    images: [
      "/img/projects/hotel-app/1.webp",
      "/img/projects/hotel-app/2.webp",
      "/img/projects/hotel-app/3.webp",
      "/img/projects/hotel-app/4.webp",
      "/img/projects/hotel-app/5.webp",
      "/img/projects/hotel-app/6.webp",
      "/img/projects/hotel-app/7.webp",
      "/img/projects/hotel-app/8.webp",
      "/img/projects/hotel-app/9.webp"
    ],
    isFreelance: false,
    hasLogin: true,
    isPrivate: true,
    date: "2026-08-15"
  },
  {
    id: "siga-ventas",
    title: "Sistema de Ventas & SUNAT",
    description: "Plataforma web de ventas y facturación electrónica con integración a SUNAT para gestión de comprobantes, inventario y control de clientes.",
    tech: ["Next.js", "Nest.js", "PostgreSQL"],
    image: "/img/projects/siga/1.webp",
    images: [
      "/img/projects/siga/1.webp",
      "/img/projects/siga/2.webp",
      "/img/projects/siga/3.webp",
      "/img/projects/siga/4.webp"
    ],
    isFreelance: true,
    hasLogin: true,
    inDevelopment: true,
    isPrivate: true,
    date: "2026-07-29"
  },
  {
    id: "veracruz-hotel",
    title: "Proyecto Veracruz",
    description: "Sistema de reservas integral para hotel, diseñado para optimizar la gestión de huéspedes y disponibilidad en tiempo real.",
    tech: ["Next.js", "Nest.js", "PostgreSQL", "VPS"],
    link: "https://proyecto-veracruz.vercel.app/",
    image: "/img/projects/pelicanos/1.webp",
    images: [
      "/img/projects/pelicanos/1.webp",
      "/img/projects/pelicanos/2.webp",
      "/img/projects/pelicanos/3.webp",
      "/img/projects/pelicanos/4.webp",
      "/img/projects/pelicanos/5.webp"
    ],
    isFreelance: true,
    hasLogin: true,
    date: "2026-05-29"
  },
  {
    id: "painting-landing",
    title: "Servicios de Pintura",
    description: "Landing page comercial moderna para servicios de pintura. Incluye un panel administrativo completo para gestionar contenido.",
    tech: ["Next.js", "PostgreSQL"],
    link: "https://landing-base-rosy.vercel.app/",
    image: "/img/projects/pintura/1.webp",
    images: [
      "/img/projects/pintura/1.webp",
      "/img/projects/pintura/2.webp"
    ],
    isFreelance: true,
    hasLogin: true,
    date: "2026-02-28"
  },
];

// Mapped for SimpleIcons CDN
export const SKILLS_WITH_ICONS = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/1F2A44" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/1F2A44" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/1F2A44" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/1F2A44" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/1F2A44" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/1F2A44" },
  { name: "Strapi", icon: "https://cdn.simpleicons.org/strapi/1F2A44" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/1F2A44" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/1F2A44" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/1F2A44" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/1F2A44" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/1F2A44" },
  { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio/1F2A44" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/1F2A44" },
];

export const SKILLS = SKILLS_WITH_ICONS.map(s => s.name); // Compatibility