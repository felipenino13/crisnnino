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
  { label: "Who I Am", href: "#who-i-am" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: "Designing, Automating, and Launching Digital Products",
  subheadline:
    "I turn ideas into websites, automations, and scalable digital products that solve real problems.",
  positioning:
    "Cristian Nino is a UX/UI Designer, Automation Builder, and Digital Product Creator who transforms ideas into scalable digital products.",
};

export const whoIAm = {
  intro:
    "I'm Cristian Nino, a UX/UI Designer, Automation Builder, and Digital Product Creator based in Colombia.",
  body:
    "I combine design, code, automation, and artificial intelligence to create digital products that help businesses grow and ideas become reality.",
  context:
    "My work spans higher education, healthcare, marketing, and product development.",
};

export const highlights = [
  "10+ years of digital experience",
  "UX/UI Design",
  "Next.js Development",
  "Automation with n8n",
  "AI Integration",
  "SEO and Growth",
];

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  {
    title: "UX/UI Design",
    description: "Designing intuitive and conversion-focused digital experiences.",
    icon: Palette,
  },
  {
    title: "Web Development",
    description: "Building fast, scalable websites and landing pages.",
    icon: Code2,
  },
  {
    title: "Automation & AI",
    description: "Creating workflows and AI agents that reduce manual work.",
    icon: Bot,
  },
  {
    title: "Digital Product Development",
    description: "Transforming ideas into MVPs and scalable products.",
    icon: Rocket,
  },
  {
    title: "SEO & Growth",
    description: "Optimizing visibility, conversions, and performance.",
    icon: LineChart,
  },
];

export const projects = [
  {
    name: "Family Pets",
    description: "A platform to manage pet health, vaccines, and reminders.",
    category: "Digital Product",
    status: "Concept",
    href: "https://pets.crisnnino.com",
    image: "/img/digital-product-creator-visual.png",
  },
  {
    name: "Digital Invitations",
    description:
      "Create beautiful invitations for baby showers, birthdays, and weddings.",
    category: "Web Product",
    status: "Concept",
    href: "https://invitaciones.crisnnino.com",
    image: "/img/poster-babyshower.jpg",
  },
  {
    name: "Landing Engine",
    description: "Generate high-converting landing pages at scale.",
    category: "Growth Tool",
    status: "In Development",
    href: "#contact",
    image: "/img/automation-leads-visual.png",
  },
  {
    name: "Automation Lab",
    description: "AI agents and automated workflows for business operations.",
    category: "Automation",
    status: "Active",
    href: "https://automation.crisnnino.com",
    image: "/img/lab-experiments-visual.png",
  },
  {
    name: "Health Dashboard",
    description: "Personal and family health tracking and insights.",
    category: "Private Product",
    status: "Private",
    href: "#contact",
    image: "/img/process-workflow-visual.png",
  },
  {
    name: "Design System Tools",
    description: "Reusable UI components and templates.",
    category: "Design Systems",
    status: "Active",
    href: "#contact",
    image: "/img/hero-portfolio-visual.png",
  },
];

export const projectLinks = [
  "pets.crisnnino.com",
  "invitaciones.crisnnino.com",
  "automation.crisnnino.com",
  "landing.crisnnino.com",
];

export const schemaKeywords = [
  "UX/UI Designer Colombia",
  "Digital Product Creator",
  "Automation Builder",
  "Next.js Developer",
  "n8n Automation Expert",
  "AI Integration",
  "Product Development",
  "SEO and Growth",
];

export const decorativeSparkles = Sparkles;
