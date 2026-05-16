import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
    default: "Cris Nino | Desarrollo web y automatizacion",
    template: "%s | Cris Nino",
  },
  description:
    "Portafolio de Cris Nino: desarrollo web, automatizacion y experiencias digitales para proyectos que necesitan presencia clara y contacto real.",
  applicationName: "Cris Nino",
  category: "technology",
  authors: [{ name: "Cris Nino", url: "https://www.crisnnino.com" }],
  creator: "Cris Nino",
  publisher: "Cris Nino",
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
