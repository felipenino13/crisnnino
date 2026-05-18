import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Code2,
  LineChart,
  Palette,
  Rocket,
  Sparkles,
} from "lucide-react";

export const siteUrl = "https://www.crisnnino.com";

export const navigation = [
  { label: "Perfil", href: "#perfil" },
  { label: "Qué hago", href: "#que-hago" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const hero = {
  headline: "Diseño, automatizo y lanzo productos digitales",
  subheadline:
    "Transformo ideas en sitios web, automatizaciones y productos digitales escalables que resuelven problemas reales.",
  positioning:
    "Cristian Niño diseña, automatiza y lanza productos digitales que convierten ideas en soluciones escalables.",
};

export const profile = {
  intro:
    "Soy Cristian Niño, creador de productos digitales basado en Colombia.",
  body:
    "Combino UX/UI, desarrollo frontend, automatización e inteligencia artificial para convertir ideas en productos web, flujos operativos y herramientas que ayudan a crecer.",
  context:
    "He trabajado en educación superior, salud, marketing y desarrollo de producto, siempre con foco en claridad, conversión y ejecución.",
};

export const highlights = [
  "10+ años de experiencia digital",
  "UX/UI Design",
  "Desarrollo con Next.js",
  "Automatización con n8n",
  "Integración de IA",
  "SEO y Growth",
];

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  {
    title: "UX/UI Design",
    description:
      "Diseño experiencias digitales intuitivas, claras y enfocadas en conversión.",
    icon: Palette,
  },
  {
    title: "Desarrollo web",
    description:
      "Construyo sitios, landing pages y productos web rápidos, escalables y mantenibles.",
    icon: Code2,
  },
  {
    title: "Automatización e IA",
    description:
      "Creo flujos, agentes y sistemas que reducen trabajo manual y aceleran operaciones.",
    icon: Bot,
  },
  {
    title: "Productos digitales",
    description:
      "Transformo ideas en MVPs, herramientas internas y productos listos para validar mercado.",
    icon: Rocket,
  },
  {
    title: "SEO y Growth",
    description:
      "Optimizo visibilidad, rendimiento, conversión y puntos de crecimiento medibles.",
    icon: LineChart,
  },
];

export type Project = {
  name: string;
  description: string;
  category: string;
  status: "Idea" | "MVP" | "Beta" | "Live" | "Private";
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "Petis",
    description:
      "Producto web para gestionar mascotas, salud, vacunas, recordatorios y acompañamiento familiar.",
    category: "Producto digital",
    status: "Live",
    href: "https://petis.crisnnino.com/",
    image: "/img/petis-cover-facebook.jpg",
  },
  {
    name: "Invitaciones Digitales",
    description:
      "Crea invitaciones visuales para baby showers, cumpleaños, bodas y eventos especiales.",
    category: "Producto web",
    status: "Beta",
    href: "https://invitaciones.crisnnino.com",
    image: "/img/poster-babyshower.jpg",
  },
];

export const projectLinks = [
  "petis.crisnnino.com",
  "invitaciones.crisnnino.com",
];

export const schemaKeywords = [
  "UX/UI Designer Colombia",
  "Digital Product Creator",
  "Automation Builder",
  "AI Builder",
  "Next.js Developer",
  "n8n Automation Expert",
  "Integración de IA",
  "Desarrollo de productos digitales",
  "SEO y Growth",
];

export const decorativeSparkles = Sparkles;
