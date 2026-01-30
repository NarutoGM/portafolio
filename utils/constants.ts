import { Experience, Project, SocialLink } from './types';

// IMPORTANT: Replace this URL with the actual path to your uploaded image if hosting locally
// or keep this placeholder if you want to test the layout first.
export const PROFILE_IMAGE_URL = "/img/yo.jpg";

export const WHATSAPP_NUMBER = "51969184844";
export const EMAIL = "fernandoolivert25@gmail.com";

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Dalambo - Firma Creativa",
    role: "Full Stack Developer",
    period: "15/01/2026 – Actualidad",
    type: "Remote",
    mode: "freelancer",
    logo: "/img/dalambo.jpg", // Placeholder generated logo
    description: "Creación y optimización de plataformas web dinámicas para una organización en México, implementando arquitecturas Full Stack con Next.js.",
    tech: ["Next.js", "Express", "Easypanel"]
  },
  {
    company: "Molokaih",
    role: "Full Stack Developer",
    period: "01/07/2025 – Actualidad",
    type: "Remote",
    mode: "parttime",
    logo: "/img/molokaih.webp", // Placeholder generated logo
    description: "Desarrollo Full Stack para una empresa Canadiense, enfocado en la creación de interfaces web dinámicas con Next.js y la implementación de automatizaciones complejas mediante n8n. Integro soluciones como ManyChat para conectar chatbots con diversas redes sociales, trabajando de manera colaborativa en entornos productivos con despliegues continuos.",
    tech: ["Next.js", "n8n", "Express", "Easypanel", "ManyChat"]
  },
  {
    company: "Rangel",
    role: "Junior Developer",
    period: "10/01/2024 – 10/03/2024",
    type: "Presencial",
    mode: "fulltime",

    logo: "/img/rangel.jpg", // Placeholder generated logo
    description: "Lideré el desarrollo de aplicaciones web utilizando Next.js y ShadCN UI para interfaces avanzadas. Gestioné el backend con Strapi y optimicé flujos operativos mediante automatizaciones en n8n, asegurando un control de versiones riguroso con Git y despliegues eficientes.",
    tech: ["Next.js", "Strapi", "n8n", "Easypanel", "ShadCN UI"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "painting-landing",
    title: "Servicios de Pintura",
    description: "Landing page comercial moderna para servicios de pintura. Incluye un panel administrativo completo para gestionar contenido.",
    tech: ["React", "Tailwind", "Vercel", "Admin Panel"],
    link: "https://landing-base-rosy.vercel.app/",
    image: "/img/projects/image.png",
    isFreelance: true,
    hasLogin: true
  }
];

// Mapped for SimpleIcons CDN
export const SKILLS_WITH_ICONS = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/1F2A44" },
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
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/1F2A44" },
];

export const SKILLS = SKILLS_WITH_ICONS.map(s => s.name); // Compatibility