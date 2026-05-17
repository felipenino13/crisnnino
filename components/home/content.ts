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
    "Cristian Niño es UX/UI Designer, Automation Builder y Digital Product Creator. Conecta diseño, código, IA y automatización para lanzar soluciones digitales con impacto.",
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

export const projects = [
  {
    name: "Petis",
    description:
      "Producto web para gestionar mascotas, salud, vacunas, recordatorios y acompañamiento familiar.",
    category: "Producto digital",
    status: "Live",
    href: "https://petis.crisnnino.com/",
    image: "/img/digital-product-creator-visual.png",
  },
  {
    name: "Invitaciones Digitales",
    description:
      "Crea invitaciones visuales para baby showers, cumpleaños, bodas y eventos especiales.",
    category: "Producto web",
    status: "Concepto",
    href: "https://invitaciones.crisnnino.com",
    image: "/img/poster-babyshower.jpg",
  },
  {
    name: "Landing Engine",
    description:
      "Sistema para generar landing pages de alta conversión a escala.",
    category: "Growth tool",
    status: "En desarrollo",
    href: "#contacto",
    image: "/img/automation-leads-visual.png",
  },
  {
    name: "Automation Lab",
    description:
      "Agentes de IA y flujos automatizados para operaciones, marketing y seguimiento comercial.",
    category: "Automatización",
    status: "Activo",
    href: "https://automation.crisnnino.com",
    image: "/img/lab-experiments-visual.png",
  },
  {
    name: "Health Dashboard",
    description:
      "Dashboard privado para seguimiento de salud personal y familiar con datos accionables.",
    category: "Producto privado",
    status: "Privado",
    href: "#contacto",
    image: "/img/process-workflow-visual.png",
  },
  {
    name: "Design System Tools",
    description:
      "Componentes, patrones y plantillas reutilizables para acelerar productos digitales.",
    category: "Design systems",
    status: "Activo",
    href: "#contacto",
    image: "/img/hero-portfolio-visual.png",
  },
];

export const projectLinks = [
  "petis.crisnnino.com",
  "invitaciones.crisnnino.com",
  "automation.crisnnino.com",
  "landing.crisnnino.com",
];

export const schemaKeywords = [
  "UX/UI Designer Colombia",
  "Creador de productos digitales",
  "Automation Builder",
  "Next.js Developer",
  "Experto en automatización n8n",
  "Integración de IA",
  "Desarrollo de productos digitales",
  "SEO y Growth",
];

export const decorativeSparkles = Sparkles;
