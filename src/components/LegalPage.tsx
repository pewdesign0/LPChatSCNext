import Box from "@mui/material/Box";
import Link from "next/link";
import type { ReactNode } from "react";

export type LegalSection = {
  title: string;
  content: ReactNode;
  id?: string;
};

type LegalPageProps = {
  title: string;
  summary: string;
  sections: LegalSection[];
  afterSections?: ReactNode;
  footerLinks: Array<{ href: string; label: string }>;
};

export function LegalPage({
  title,
  summary,
  sections,
  afterSections,
  footerLinks,
}: LegalPageProps) {
  return (
    <Box className="legal-page">
      <Box component="nav" className="navbar scrolled" aria-label="Navegação principal">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="ChatSC — Voltar para o início">
            <img
              src="/images/logo_horizontal_dark_web.png"
              width="450"
              height="105"
              alt="ChatSC"
              className="logo-dark"
            />
          </Link>
          <Link href="/" className="legal-back">
            ← Voltar para o site
          </Link>
        </div>
      </Box>

      <Box component="header" className="legal-header">
        <div className="container">
          <span className="section-tag">Legal</span>
          <h1>{title}</h1>
          <p>{summary}</p>
          <p>Última atualização: 30 de julho de 2026</p>
        </div>
      </Box>

      <Box component="main" className="legal-content">
        {sections.map((section) => (
          <section id={section.id} key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
        {afterSections}
      </Box>

      <Box component="footer" className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p>© 2026 ChatSC — Todos os direitos reservados.</p>
            <div className="footer-bottom-links">
              {footerLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
