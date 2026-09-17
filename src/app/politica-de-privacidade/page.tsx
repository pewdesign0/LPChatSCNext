import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade — ChatSC",
  description: "Saiba como o ChatSC trata dados pessoais no site e na plataforma.",
  alternates: { canonical: "/politica-de-privacidade" },
};

const sections: LegalSection[] = [
  {
    title: "1. Compromisso com a privacidade",
    content:
      "Esta Política explica como o ChatSC trata dados pessoais no site e na plataforma. Adotamos medidas técnicas e organizacionais compatíveis com a natureza do serviço para proteger as informações sob nosso tratamento e observamos a legislação brasileira aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais (LGPD).",
  },
  {
    title: "2. Papéis no tratamento de dados",
    content:
      "Em regra, o escritório ou empresa que contrata o ChatSC decide por que e como tratar os dados de seus clientes, contatos e colaboradores inseridos na plataforma, atuando como controlador. O ChatSC atua como operador desses dados, tratando-os em nome da empresa contratante e conforme suas instruções. Para dados de cadastro, suporte, cobrança e relacionamento comercial próprios do ChatSC, podemos atuar como controlador.",
  },
  {
    title: "3. Dados que podemos tratar",
    content:
      "Podemos tratar dados de cadastro e contato de usuários e responsáveis, como nome, e-mail, telefone e dados da empresa; dados de clientes e contatos incluídos pela empresa contratante, como identificação, telefone, e-mail, informações profissionais e de relacionamento; conteúdos de conversas, mensagens, arquivos, ordens de serviço, notas e registros operacionais; além de dados técnicos de acesso, como identificadores de sessão, endereço IP, dispositivo e registros de uso necessários à segurança e ao funcionamento do serviço.",
  },
  {
    title: "4. Finalidades e bases legais",
    content:
      "Utilizamos os dados para disponibilizar e administrar a plataforma, autenticar usuários, prestar suporte, executar o contrato, processar cobranças, prevenir fraudes e incidentes, cumprir obrigações legais e aperfeiçoar a segurança e o funcionamento do serviço. Quando o ChatSC atuar como operador, o tratamento seguirá as instruções e a base legal definida pela empresa contratante.",
  },
  {
    title: "5. Compartilhamento",
    content:
      "Os dados podem ser compartilhados, na medida necessária, com provedores de infraestrutura e armazenamento, processadores de pagamento, serviços de mensageria e demais integrações habilitadas pela empresa contratante. Também podemos compartilhar dados para cumprir obrigação legal, ordem de autoridade competente ou proteger direitos, segurança e integridade do ChatSC, de usuários e de terceiros. Não comercializamos dados pessoais.",
  },
  {
    title: "6. Transferências e armazenamento",
    content:
      "Alguns fornecedores de tecnologia podem processar dados em outros países. Nesses casos, buscamos adotar salvaguardas adequadas e compatíveis com a legislação aplicável. Arquivos enviados à plataforma podem ser armazenados em infraestrutura de terceiros contratada para esse fim, com controles de acesso compatíveis com o serviço.",
  },
  {
    title: "7. Cookies e tecnologias semelhantes",
    content:
      "O site e a plataforma podem usar cookies ou tecnologias semelhantes para permitir o funcionamento, lembrar preferências, manter sessões autenticadas e reforçar a segurança. Você pode gerenciar cookies no navegador, mas a desativação de cookies essenciais pode afetar recursos da plataforma.",
  },
  {
    title: "8. Retenção e eliminação",
    content:
      "Mantemos os dados pelo tempo necessário para prestar o serviço, cumprir obrigações legais, resolver disputas e resguardar direitos. Após o encerramento da relação, os dados poderão ser eliminados ou anonimizados conforme as rotinas aplicáveis, salvo quando sua retenção for necessária ou permitida por lei. A empresa contratante deve solicitar a exclusão ou exportação de dados pelo canal de suporte, quando aplicável.",
  },
  {
    id: "direitos-dos-titulares",
    title: "9. Direitos dos titulares",
    content:
      "O titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamentos e revisão de decisões automatizadas, quando aplicável. Se seus dados foram inseridos por um escritório cliente do ChatSC, recomendamos primeiro contatar esse escritório, que é o controlador responsável pela solicitação. O ChatSC colaborará com a empresa contratante dentro de suas atribuições legais e técnicas.",
  },
  {
    title: "10. Segurança",
    content:
      "Adotamos controles de acesso, segregação de dados por empresa, autenticação, registros de operação e medidas de segurança compatíveis com os serviços oferecidos. Nenhum ambiente digital é totalmente imune a riscos; por isso, usuários e empresas contratantes também devem proteger suas credenciais e dispositivos e comunicar imediatamente qualquer suspeita de uso indevido.",
  },
  {
    title: "11. Atualizações e contato",
    content:
      "Esta Política poderá ser atualizada para refletir mudanças no serviço ou na legislação. A versão vigente será disponibilizada nesta página. Para dúvidas, solicitações sobre privacidade ou exercício de direitos, entre em contato pelo WhatsApp (62) 99335-3539.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      summary="Como o ChatSC trata dados pessoais no site e na plataforma."
      sections={sections}
      footerLinks={[
        { href: "/termos-de-uso", label: "Termos de Uso" },
        { href: "/", label: "Site" },
      ]}
    />
  );
}
