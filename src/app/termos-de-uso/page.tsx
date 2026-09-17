import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termos de Uso — ChatSC",
  description: "Condições para uso do site e da plataforma ChatSC.",
  alternates: { canonical: "/termos-de-uso" },
};

const sections: LegalSection[] = [
  {
    title: "1. Aceitação e escopo",
    content:
      "Estes Termos regulam o acesso ao site, ao aplicativo ChatSC e aos serviços relacionados. Ao criar uma conta, contratar um plano ou utilizar a plataforma, o usuário declara que leu e concorda com estes Termos e que possui poderes para representar a empresa cadastrada.",
  },
  {
    title: "2. O serviço",
    content:
      "O ChatSC é uma plataforma voltada à organização do atendimento e do relacionamento de escritórios contábeis com seus clientes. Seus recursos podem incluir cadastro de clientes e contatos, conversas, ordens de serviço, jornadas, indicadores, mensagens, listas de transmissão, arquivos, integrações e funcionalidades de apoio à operação.",
  },
  {
    title: "3. Conta, acesso e segurança",
    content:
      "A empresa contratante deve fornecer informações corretas, manter seus dados atualizados e proteger as credenciais de acesso de seus usuários. Cada usuário é responsável pelas ações realizadas com sua conta. O ChatSC poderá restringir acessos que indiquem uso indevido, risco à segurança ou descumprimento destes Termos.",
  },
  {
    title: "4. Responsabilidades da empresa contratante",
    content:
      "A empresa contratante é responsável pelos dados que insere ou importa, pela definição de perfis de acesso e pela obtenção de base legal e autorizações necessárias para tratar dados de seus clientes, contatos e colaboradores. Também é responsável pelo conteúdo, frequência e destinatários das comunicações enviadas por meio da plataforma, inclusive pela observância das regras aplicáveis aos canais integrados, como o WhatsApp.",
  },
  {
    title: "5. Uso permitido e restrições",
    content:
      "A plataforma deve ser utilizada de forma lícita, ética e compatível com sua finalidade. É vedado usá-la para spam, fraude, assédio, envio de conteúdo ilícito, violação de direitos de terceiros, tentativa de acesso não autorizado, engenharia reversa, sobrecarga de sistemas ou qualquer atividade que prejudique o ChatSC, outros clientes ou os provedores integrados.",
  },
  {
    title: "6. Planos, cobrança e suspensão",
    content:
      "Os preços, recursos, limites e condições de cada plano são apresentados no momento da contratação. Pagamentos e assinaturas podem ser processados por parceiro especializado. Em caso de inadimplência, falha de pagamento ou cancelamento, o acesso poderá ser limitado ou suspenso conforme as condições informadas na contratação e a legislação aplicável.",
  },
  {
    title: "7. Integrações de terceiros",
    content:
      "Alguns recursos dependem de serviços de terceiros, como provedores de mensageria, pagamentos, armazenamento de arquivos e sistemas integrados pela empresa contratante. A disponibilidade e as regras desses serviços também dependem de seus próprios termos e políticas. O ChatSC não controla alterações, indisponibilidades ou decisões desses terceiros.",
  },
  {
    title: "8. Dados e confidencialidade",
    content:
      "Cada parte deve tratar como confidenciais as informações não públicas a que tiver acesso em razão da relação comercial. O tratamento de dados pessoais é detalhado na Política de Privacidade. A empresa contratante mantém a titularidade e a responsabilidade pelos dados de sua operação inseridos na plataforma, observados os limites técnicos e legais aplicáveis.",
  },
  {
    title: "9. Propriedade intelectual",
    content:
      "A marca ChatSC, a plataforma, seu código, interfaces, materiais e demais elementos protegidos pertencem ao ChatSC ou a seus licenciantes. A contratação concede apenas uma licença limitada, não exclusiva, intransferível e revogável para uso do serviço durante a vigência da relação contratual.",
  },
  {
    title: "10. Disponibilidade e limitações",
    content:
      "Buscamos manter a plataforma segura e disponível, mas podem ocorrer manutenções, atualizações, falhas de conexão ou eventos fora de nosso controle. Na extensão permitida pela lei, o ChatSC não garante operação ininterrupta nem resultados comerciais específicos decorrentes do uso da plataforma.",
  },
  {
    title: "11. Alterações e encerramento",
    content:
      "Estes Termos podem ser atualizados para refletir melhorias no serviço, mudanças operacionais ou exigências legais. A versão vigente será publicada nesta página. O uso continuado após a publicação representa concordância com a atualização. O usuário ou a empresa contratante pode solicitar orientações sobre cancelamento pelos canais de atendimento.",
  },
  {
    title: "12. Contato e legislação aplicável",
    content:
      "Dúvidas sobre estes Termos podem ser enviadas pelo WhatsApp (62) 99335-3539. Estes Termos são regidos pelas leis brasileiras. Eventuais controvérsias serão tratadas conforme a legislação aplicável e o foro competente.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      summary="Condições para uso do site e da plataforma ChatSC."
      sections={sections}
      afterSections={
        <p>
          Consulte também a <a href="/politica-de-privacidade"><strong>Política de Privacidade</strong></a>.
        </p>
      }
      footerLinks={[
        { href: "/politica-de-privacidade", label: "Privacidade" },
        { href: "/", label: "Site" },
      ]}
    />
  );
}
