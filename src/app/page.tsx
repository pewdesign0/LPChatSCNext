import { LandingPage } from "@/components/LandingPage";

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "SoftwareApplication",
  name: "ChatSC",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Plataforma de atendimento, relacionamento e operação para escritórios contábeis, integrada ao WhatsApp.",
  url: "https://chatsc.com.br",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingPage />
    </>
  );
}
