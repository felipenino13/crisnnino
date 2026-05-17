import type { LucideIcon } from "lucide-react";
import {
  ChartColumn,
  Code2,
  Globe,
  Layers3,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

export const siteUrl = "https://www.crisnnino.com";

export const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Laboratorio", href: "#laboratorio" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: IconCard[] = [
  {
    title: "Landing pages y sitios web",
    description:
      "Diseno y desarrollo experiencias claras, rapidas y orientadas a conversion para marcas, servicios y campanas.",
    icon: Globe,
  },
  {
    title: "UX/UI, CRO y optimizacion",
    description:
      "Ordeno la propuesta de valor, la jerarquia visual y los puntos de contacto para que el sitio convierta mejor.",
    icon: ChartColumn,
  },
  {
    title: "Automatizacion y growth ops",
    description:
      "Conecto formularios, n8n, analitica y flujos operativos para reducir friccion y activar seguimiento real.",
    icon: Workflow,
  },
  {
    title: "Frontend y experiencias a medida",
    description:
      "Construyo interfaces con Next.js, React, Tailwind y logica personalizada para productos, micrositios y experimentos.",
    icon: Code2,
  },
];

export const projects = [
  {
    title: "Baby Shower interactivo",
    href: "/babyshower",
    label: "Micrositio interactivo",
    image: "/img/poster-babyshower.jpg",
    imageAlt:
      "Poster del proyecto Baby Shower interactivo usado como experiencia web publicada.",
    description:
      "Experiencia inmersiva con video, confirmacion de asistencia, logica dinamica y automatizacion conectada por webhook.",
    outcome:
      "Integra narrativa visual, formulario y automatizacion en una sola experiencia.",
  },
  {
    title: "Portafolio profesional",
    href: "#hero",
    label: "Caso propio",
    image: "/img/hero-portfolio-visual.png",
    imageAlt:
      "Visual del portafolio con interfaces, analitica y automatizacion web.",
    description:
      "Sistema de presentacion personal orientado a reclutadores, clientes y colaboraciones, con foco en claridad y conversion.",
    outcome:
      "Resume perfil, servicios, stack y forma de trabajo sin obligar a navegar de mas.",
  },
  {
    title: "Automatizacion de leads y contacto",
    href: "#contacto",
    label: "Stack operativo",
    image: "/img/automation-leads-visual.png",
    imageAlt:
      "Visual de flujos automatizados para formularios, leads, analitica y seguimiento.",
    description:
      "Flujos con formularios, webhooks, n8n y herramientas de analitica para activar seguimiento sin procesos manuales.",
    outcome:
      "Convierte formularios y eventos del sitio en acciones medibles para negocio o equipo.",
  },
];

export const labItems: IconCard[] = [
  {
    title: "Micrositios y campanas especiales",
    description:
      "Piezas con narrativa, interaccion y ritmo visual para lanzamientos, eventos o momentos de marca.",
    icon: Sparkles,
  },
  {
    title: "Prototipos funcionales",
    description:
      "Ideas validadas rapido con frontend real antes de invertir en implementaciones mas costosas.",
    icon: Layers3,
  },
  {
    title: "SEO, analitica y growth loops",
    description:
      "Experimentos para medir comportamiento, detectar cuellos de botella y mejorar conversion.",
    icon: Search,
  },
];

export const stack = [
  "UX/UI design",
  "Landing pages",
  "CRO y analitica",
  "SEO tecnico",
  "Next.js y React",
  "Tailwind CSS",
  "WordPress",
  "n8n",
  "PostgreSQL",
  "GA4 y Tag Manager",
];

export const trustSignals = [
  "Experiencia en proyectos para educacion, salud y captacion de leads.",
  "Trabajo entre estrategia, diseno, frontend y automatizacion sin perder foco comercial.",
  "Capacidad para resolver desde una landing puntual hasta un flujo completo de contacto.",
];

export const processSteps = [
  "Alineo objetivo, audiencia y accion principal para que la pagina tenga un foco claro desde el inicio.",
  "Defino estructura, copy y jerarquia visual para comunicar valor con rapidez y sin ruido innecesario.",
  "Construyo la interfaz, conecto formularios, eventos y automatizaciones, y dejo la experiencia lista para usarse.",
  "Mido, itero y optimizo conversion, SEO tecnico y puntos de contacto segun el contexto del negocio.",
];

export const faqs = [
  {
    question: "Que tipo de proyectos encajan mejor contigo?",
    answer:
      "Landing pages, sitios de presentacion, redisenos orientados a conversion, flujos con formularios y automatizaciones, y colaboraciones frontend con equipos de producto o marketing.",
  },
  {
    question: "Trabajas solo o te integras con equipos?",
    answer:
      "Las dos. Puedo desarrollar una solucion puntual de punta a punta o integrarme con diseno, marketing y desarrollo para ejecutar una parte del proceso.",
  },
  {
    question: "Puedes ayudar aunque el proyecto ya exista?",
    answer:
      "Si. Tambien trabajo sobre sitios ya publicados para mejorar estructura, copy, conversion, SEO tecnico, accesibilidad o componentes frontend.",
  },
  {
    question: "Como prefieres empezar una colaboracion?",
    answer:
      "Con una conversacion corta para entender objetivo, contexto, stack y urgencia. Desde ahi propongo alcance, prioridad y siguiente paso realista.",
  },
];
