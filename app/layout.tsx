import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cariri Code",
  description:
    "Na Cariri Code, somos especialistas em transformar suas ideias em marcas poderosas e experiências digitais impactantes.",
  openGraph: {
    title: "Cariri Code Studio - Transformando a vida de empresas",
    description:
      "Cariri Code Studio transformando ideias em marcas impactantes com serviços de criação de,ajudando empresas a crescer no ambiente digital.",
    type: "website",
    locale: "pt_BR",
    // images: [
    //   {
    //     url: "https://i.ibb.co/CVhSDJW/cariri.jpg", //colocar aqui a logo do Cariri Studio tem quer hospedada
    //     width: 1200,
    //     height: 630,
    //     alt: "cariri Studio - Transformamos a vida de empresas",
    //   },
    // ],
  },
  keywords: [
    "design",
    "development",
    "web development",
    "studio",
    "branding",
    "UI/UX",
    "marketing",
    "SEO",
    "Criação de site",
    "E-commerce",
    "Loja Digital",
    "Site",
    "WebSite",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        {/* Meta Tags */}
        <meta
          name="author"
          content="Cariri Code Studio -Development Studio"
        />
        <meta
          name="copyright"
          content="© 2025 Cariri Code Studio & Development Studio"
        />
        <meta
          name="description"
          content="Carirri Code Studio transforma ideias em marcas impactantes com serviços de criação de logotipos, marketing digital e desenvolvimento de sites, ajudando empresas a crescer no ambiente digital."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="Wvz4f2fpr7DyWaqO4QyRvw5HhI5VkCmJoNffcLhY9t4"
        />
        <meta
          name="keywords"
          content="design, desenvolvimento, web, estúdio, branding, UI/UX, marketing, SEO , criaçaõ de sites, E-commerce"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Carirri Code Studio - Transformando a vida de empresas"
        />
        <meta
          property="og:description"
          content="Carirri Code Studio transforma ideias em marcas impactantes com serviços de criação de logotipos, identidade visual e desenvolvimento de sites, ajudando empresas a crescer no ambiente digital."
        />
        <meta property="og:locale" content="pt_BR" />
        <link
          rel="icon"
          href="./caririlogo.png"
          type="image/svg+xml"
        />
        <title>Cariri Code </title>
      </head>
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
