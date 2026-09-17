import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ThemeRegistry } from "@/components/ThemeRegistry";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chatsc.com.br"),
  title: "ChatSC — Plataforma de Atendimento para Escritórios Contábeis",
  description:
    "Transforme o WhatsApp do seu escritório em uma operação organizada. Centralize conversas, distribua atendimentos, organize demandas e acompanhe cada cliente — conectado à rotina contábil.",
  keywords: [
    "atendimento contábil",
    "WhatsApp para contabilidade",
    "CRM contábil",
    "gestão de clientes",
    "escritório de contabilidade",
    "ChatSC",
    "API oficial WhatsApp",
    "Acessórias",
    "G-Click",
  ],
  authors: [{ name: "ChatSC" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ChatSC — Plataforma de Atendimento para Escritórios Contábeis",
    description:
      "Transforme o WhatsApp do seu escritório em uma operação organizada. Atendimento, demandas, jornadas e ordens de serviço — tudo em uma plataforma feita para contabilidade.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "ChatSC",
  },
  icons: {
    icon: "/images/favicon_web.png",
    apple: "/images/favicon_web.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta httpEquiv="content-language" content="pt-BR" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@700;800;900&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
