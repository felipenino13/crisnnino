import Script from "next/script";
import { ContactSection } from "./ContactSection";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { WhatIDoSection } from "./WhatIDoSection";
import { WhoIAmSection } from "./WhoIAmSection";
import { projects, schemaKeywords, siteUrl } from "./content";

const projectItems = projects.map((project, index) => {
  const isAbsoluteUrl = project.href.startsWith("http");
  const projectUrl = isAbsoluteUrl ? project.href : `${siteUrl}/${project.href}`;

  return {
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.name,
      description: project.description,
      url: projectUrl,
      image: `${siteUrl}${project.image}`,
      keywords: [project.category, project.status],
      creativeWorkStatus: project.status,
    },
  };
});

export function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Cristian Niño",
        alternateName: "Cris Niño",
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        jobTitle: "UX/UI Designer, Automation Builder y Digital Product Creator",
        description:
          "Diseña, automatiza y lanza productos digitales que convierten ideas en soluciones escalables.",
        knowsAbout: schemaKeywords,
      },
      {
        "@type": "WebSite",
        name: "Cristian Niño",
        url: siteUrl,
        description:
          "Hub personal de productos digitales, automatizaciones e ideas de negocio escalables.",
      },
      {
        "@type": "CollectionPage",
        name: "Proyectos y productos digitales de Cristian Niño",
        url: `${siteUrl}/#proyectos`,
        description:
          "Vitrina de productos, experimentos y herramientas digitales construidas por Cristian Niño.",
        about: {
          "@type": "Person",
          name: "Cristian Niño",
        },
        mainEntity: {
          "@type": "ItemList",
          name: "Ecosistema de proyectos y subdominios",
          itemListElement: projectItems,
        },
      },
      {
        "@type": "Organization",
        name: "Cris Niño",
        url: siteUrl,
        founder: {
          "@type": "Person",
          name: "Cristian Niño",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="overflow-hidden bg-[#05060f] text-cyan-50">
        <HeroSection />
        <WhoIAmSection />
        <WhatIDoSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
