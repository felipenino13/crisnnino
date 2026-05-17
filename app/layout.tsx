import { Geist_Mono, Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crisnnino.com"),
  title: {
    default: "Cristian Niño | UX/UI Designer, Automation Builder & Digital Product Creator",
    template: "%s | Cris Nino",
  },
  description:
    "I design, automate, and launch digital products that help businesses grow and ideas become reality.",
  applicationName: "Cris Nino",
  category: "technology",
  authors: [{ name: "Cris Nino", url: "https://www.crisnnino.com" }],
  creator: "Cris Nino",
  publisher: "Cris Nino",
  keywords: [
    "Cristian Niño",
    "UX UI Designer Colombia",
    "Digital Product Creator",
    "Automation Builder",
    "Next.js Developer",
    "n8n Automation Expert",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cristian Niño | UX/UI Designer, Automation Builder & Digital Product Creator",
    description:
      "I design, automate, and launch digital products that help businesses grow and ideas become reality.",
    url: "https://www.crisnnino.com",
    siteName: "Cris Nino",
    images: ["/opengraph-image"],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Niño | Digital Product Creator",
    description:
      "UX/UI, automation, AI, web products, and scalable digital business ideas.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
