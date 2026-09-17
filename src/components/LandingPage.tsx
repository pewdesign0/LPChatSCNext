import Script from "next/script";

export function LandingPage() {
  return (
    <>


  
  <nav className="navbar" id="navbar" role="navigation" aria-label="Navegação principal">
    <div className="nav-inner">

      
      <a href="#" className="nav-logo" aria-label="ChatSC — Ir para o início">
        <img src="/images/logo_horizontal_light_web.png" width="450" height="105" alt="ChatSC Logo" className="logo-light" id="nav-logo-light" />
        <img src="/images/logo_horizontal_dark_web.png" width="450" height="105" alt="ChatSC Logo" className="logo-dark" id="nav-logo-dark" />
      </a>

      
      <ul className="nav-links" role="list">
        <li><a href="#produto">Produto</a></li>
        <li><a href="#recursos">Recursos</a></li>
        <li><a href="#integracoes">Integrações</a></li>
        <li><a href="#precos">Preços</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      
      <div className="nav-cta">
        <a href="#como-funciona" className="btn btn-secondary btn-sm" id="nav-demo-link">Ver como funciona</a>
        <a href="https://api.whatsapp.com/send/?phone=5562993353539&amp;text=Ol%C3%A1%21+Quero+solicitar+uma+demonstra%C3%A7%C3%A3o+do+ChatSC." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" id="nav-cta-btn">
          <span>Agendar demonstração</span>
        </a>
      </div>

      
      <button className="nav-mobile-toggle" id="mobile-toggle" aria-label="Abrir menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  
  <div className="mobile-menu" id="mobile-menu" role="dialog" aria-label="Menu mobile">
    <a href="#produto" className="mobile-nav-link">Produto</a>
    <a href="#recursos" className="mobile-nav-link">Recursos</a>
    <a href="#integracoes" className="mobile-nav-link">Integrações</a>
    <a href="#precos" className="mobile-nav-link">Preços</a>
    <a href="#faq" className="mobile-nav-link">FAQ</a>
    <a href="#como-funciona" className="btn btn-secondary mobile-menu-secondary">Ver como funciona</a>
    <a href="https://api.whatsapp.com/send/?phone=5562993353539&amp;text=Ol%C3%A1%21+Quero+solicitar+uma+demonstra%C3%A7%C3%A3o+do+ChatSC." target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="mobile-cta-btn">
      <span>Agendar demonstração</span>
    </a>
  </div>


  
  <section className="hero" id="inicio" aria-label="Seção principal">
    <div className="hero-bg"></div>
    <div className="bg-orb bg-orb-1" aria-hidden="true"></div>
    <div className="bg-orb bg-orb-2" aria-hidden="true"></div>

    <div className="container">
      <div className="hero-content">

        
        <div className="hero-text">
          <div className="hero-badge reveal">
            <span className="hero-badge-dot" aria-hidden="true"></span>
            Plataforma de atendimento para escritórios contábeis
          </div>

          <h1 className="hero-title reveal reveal-delay-1">
            Transforme o WhatsApp do seu escritório em uma
            <span className="gradient-text"> operação organizada</span>
          </h1>

          <p className="hero-subtitle reveal reveal-delay-2">
            Centralize conversas, distribua atendimentos, organize demandas e acompanhe
            a execução do que cada cliente solicita — tudo conectado à rotina contábil.
          </p>

          <div className="hero-actions reveal reveal-delay-3">
            <a href="https://api.whatsapp.com/send/?phone=5562993353539&amp;text=Ol%C3%A1%21+Quero+solicitar+uma+demonstra%C3%A7%C3%A3o+do+ChatSC." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" id="hero-cta-primary">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>Agendar demonstração</span>
            </a>
            <a href="#como-funciona" className="btn btn-secondary btn-lg" id="hero-cta-secondary">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Ver como funciona</span>
            </a>
          </div>

          <div className="hero-badges reveal reveal-delay-4">
            <span className="hero-tag">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              Múltiplos usuários
            </span>
            <span className="hero-tag">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              Gestão por departamentos
            </span>
            <span className="hero-tag">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              API Oficial WhatsApp
            </span>
            <span className="hero-tag">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              Feito para contabilidade
            </span>
          </div>
        </div>

        
        <div className="hero-visual reveal reveal-right reveal-delay-2">
          <div className="hero-mockup-wrapper">

            
            <div className="float-card float-card-1" aria-hidden="true">
              <div className="float-card-icon">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="float-card-text">
                <span className="float-card-label">Demandas resolvidas</span>
                <span className="float-card-value">+320 este mês</span>
              </div>
            </div>

            
            <img
              src="/images/hero_notebook.jpg"
              width="900"
              height="1600"
              alt="Notebook exibindo a plataforma ChatSC"
              className="hero-mockup"
              id="hero-mockup-img"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />

            
            <div className="float-card float-card-2" aria-hidden="true">
              <div className="float-card-icon" style={{ background: "linear-gradient(135deg, #D95FBA, #6542E8)" }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <div className="float-card-text">
                <span className="float-card-label">Satisfação CSAT</span>
                <span className="float-card-value">98% positivo</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>


  
  <div className="trust-bar" aria-label="Integrações e parceiros">
    <div className="container">
      <div className="trust-bar-inner">
        <span className="trust-label">Integrado com</span>
        <div className="trust-divider" aria-hidden="true"></div>
        <div className="trust-logos">

          <div className="trust-logo-item">
            <div className="trust-logo-icon" style={{ background: "rgba(37,211,102,0.10)", color: "#25D366", fontSize: "1.1rem", borderColor: "rgba(37,211,102,0.20)" }}>
              ✓
            </div>
            <span>API Oficial do WhatsApp</span>
          </div>

          <div className="trust-logo-item">
            <div className="trust-logo-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="#8A6FF0"/>
                <rect x="14" y="3" width="7" height="7" rx="1" fill="#8A6FF0"/>
                <rect x="3" y="14" width="7" height="7" rx="1" fill="#8A6FF0"/>
                <rect x="14" y="14" width="7" height="7" rx="1" fill="#D95FBA"/>
              </svg>
            </div>
            <span>Acessórias</span>
          </div>

          <div className="trust-logo-item">
            <div className="trust-logo-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#00C6FF" strokeWidth="2"/>
                <path d="M8 12l3 3 5-5" stroke="#00C6FF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span>G-Click</span>
          </div>

        </div>
      </div>
    </div>
  </div>


  
  <section className="section problem-section" id="produto" aria-label="O problema que resolvemos">
    <div className="container">

      <div className="problem-grid">

        <div className="problem-text">
          <span className="section-tag">O desafio</span>
          <h2 className="section-heading reveal">
            Quando tudo acontece no WhatsApp, controlar a operação
            <span className="gradient-text"> vira um desafio</span>
          </h2>
          <p className="lead reveal reveal-delay-1">
            Solicitações se misturam, o histórico fica preso em pessoas, os responsáveis
            não estão claros e a gestão perde visibilidade.
          </p>

          <div className="problem-items">
            <div className="problem-item reveal reveal-delay-1">
              <div className="problem-item-icon" aria-hidden="true">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div className="problem-item-text">
                <strong>Conversas divididas entre celulares e pessoas</strong>
                <span>Perda de contexto e baixa rastreabilidade</span>
              </div>
            </div>
            <div className="problem-item reveal reveal-delay-2">
              <div className="problem-item-icon" aria-hidden="true">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="problem-item-text">
                <strong>Solicitações importantes escondidas no WhatsApp</strong>
                <span>Esquecimentos e retrabalho</span>
              </div>
            </div>
            <div className="problem-item reveal reveal-delay-3">
              <div className="problem-item-icon" aria-hidden="true">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                </svg>
              </div>
              <div className="problem-item-text">
                <strong>Responsáveis e departamentos pouco claros</strong>
                <span>Atrasos e encaminhamentos informais</span>
              </div>
            </div>
            <div className="problem-item reveal reveal-delay-4">
              <div className="problem-item-icon" aria-hidden="true">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div className="problem-item-text">
                <strong>Gestão sem dados operacionais</strong>
                <span>Dificuldade de melhorar atendimento e equipe</span>
              </div>
            </div>
          </div>
        </div>

        <div className="problem-solution reveal reveal-right">
          <div className="problem-solution-img-wrapper">
            <img src="/images/platform_dashboard_real.png" width="1917" height="1115" alt="Visão real do Dashboard ChatSC com dados demonstrativos" className="problem-solution-img" loading="lazy" decoding="async" />
          </div>
          <p className="problem-solution-label">A resposta do ChatSC</p>
          <h3>
            O ChatSC organiza cada conversa e conecta o atendimento
            ao trabalho que <span className="gradient-text">precisa ser executado</span>
          </h3>
          <p>
            Uma plataforma construída para a realidade dos escritórios contábeis:
            do primeiro contato pelo WhatsApp até a execução interna, com
            responsáveis, prazos e indicadores em uma única operação.
          </p>
          <a href="https://api.whatsapp.com/send/?phone=5562993353539&amp;text=Ol%C3%A1%21+Quero+solicitar+uma+demonstra%C3%A7%C3%A3o+do+ChatSC." target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: "1.25rem" }} id="problem-cta">
            <span>Conhecer a plataforma</span>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

      </div>
    </div>
  </section>


  
  <section className="section how-section" id="como-funciona" aria-label="Como o ChatSC funciona">
    <div className="container">
      <div className="how-intro">
        <span className="section-tag">Como funciona</span>
        <h2 className="reveal">Da mensagem do cliente à <span className="gradient-text">execução interna</span></h2>
        <p className="reveal reveal-delay-1">
          Um fluxo contínuo que conecta atendimento, organização e operação —
          sem perder o contexto do cliente em nenhuma etapa.
        </p>
      </div>

      
      <div className="how-visual-banner reveal reveal-delay-1">
        <img src="/images/platform_atendimento_real.png" width="1917" height="1115" alt="Fluxo real de atendimento no ChatSC com dados demonstrativos" className="workflow-img" loading="lazy" decoding="async" />
        <div className="workflow-caption">
          <span className="workflow-dot"></span> Fluxo automatizado de ponta a ponta
        </div>
      </div>

      <div className="how-steps">
        <div className="how-step how-step-1 reveal reveal-delay-1">
          <div className="how-step-header">
            <div className="how-step-number">1</div>
            <span className="how-step-pill">Etapa 01</span>
          </div>
          <h3>Cliente entra em contato</h3>
          <p>O cliente envia uma mensagem pelo WhatsApp e a conversa chega automaticamente ao ChatSC.</p>
        </div>

        <div className="how-step how-step-2 reveal reveal-delay-2">
          <div className="how-step-header">
            <div className="how-step-number">2</div>
            <span className="how-step-pill">Etapa 02</span>
          </div>
          <h3>Atendimento identificado e organizado</h3>
          <p>O ChatSC centraliza a mensagem, identifica o cliente e organiza o atendimento na fila.</p>
        </div>

        <div className="how-step how-step-3 reveal reveal-delay-3">
          <div className="how-step-header">
            <div className="how-step-number">3</div>
            <span className="how-step-pill">Etapa 03</span>
          </div>
          <h3>Direcionado à equipe responsável</h3>
          <p>A conversa é distribuída para o usuário ou departamento correto com regras de roteamento.</p>
        </div>

        <div className="how-step how-step-4 reveal reveal-delay-4">
          <div className="how-step-header">
            <div className="how-step-number">4</div>
            <span className="how-step-pill">Etapa 04</span>
          </div>
          <h3>Solicitação registrada como demanda</h3>
          <p>A solicitação vira uma demanda, tarefa ou ordem de serviço com responsável, prazo e status.</p>
        </div>

        <div className="how-step how-step-5 reveal reveal-delay-5">
          <div className="how-step-header">
            <div className="how-step-number">5</div>
            <span className="how-step-pill">Etapa 05</span>
          </div>
          <h3>Escritório acompanha responsáveis</h3>
          <p>Prazos, estados e responsáveis são monitorados em tempo real pela equipe e pela gestão.</p>
        </div>

        <div className="how-step how-step-6 reveal reveal-delay-5">
          <div className="how-step-header">
            <div className="how-step-number highlight">6</div>
            <span className="how-step-pill highlight">Etapa 06</span>
          </div>
          <h3>Gestão analisa satisfação e desempenho</h3>
          <p>Indicadores de CSAT, SLA, tempo de resposta e desempenho da equipe disponíveis no dashboard.</p>
        </div>
      </div>
    </div>
  </section>


  
  <section className="section screenshots-section" id="plataforma" aria-label="Conheça a plataforma ChatSC por dentro">
    <div className="container">

      <div className="screenshots-header">
        <span className="section-tag">Por dentro da plataforma</span>
        <h2 className="section-heading reveal">
          Veja como funciona
          <span className="gradient-text"> na prática</span>
        </h2>
        <p className="reveal reveal-delay-1">
          Interface real do ChatSC — organizada, intuitiva e feita para a rotina do escritório contábil.
        </p>
      </div>

      
      <div className="screenshots-tabs reveal reveal-delay-2" role="tablist" aria-label="Telas do sistema">
        <button className="screen-tab active" data-tab="dashboard" role="tab" aria-selected="true" id="btn-tab-dashboard">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h8v9H3zM13 3h8v5h-8zM13 12h8v9h-8zM3 16h8v5H3z"/></svg>
          Dashboard
        </button>
        <button className="screen-tab" data-tab="atendimentos" role="tab" aria-selected="false" id="btn-tab-atendimentos">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          Atendimentos
        </button>
        <button className="screen-tab" data-tab="demandas" role="tab" aria-selected="false" id="btn-tab-demandas">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
          Demandas
        </button>
        <button className="screen-tab" data-tab="indicadores" role="tab" aria-selected="false" id="btn-tab-indicadores">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19V9m5 10V5m5 14v-7m5 7V3"/></svg>
          Indicadores
        </button>
      </div>

      
      <div className="screenshots-panels">

        <div className="screen-panel active" id="tab-dashboard">
          <div className="screen-panel-inner">
            <div className="screen-panel-img-wrapper">
              <div className="screen-panel-browser-bar" aria-hidden="true">
                <span className="browser-dot"></span><span className="browser-dot"></span><span className="browser-dot"></span>
                <span className="browser-url">chatsc.com.br/dashboard</span>
              </div>
              <img src="/images/platform_dashboard_real.png" width="1917" height="1115" alt="Dashboard real do ChatSC com dados demonstrativos" className="screen-panel-img" loading="lazy" decoding="async" />
            </div>
            <div className="screen-panel-info">
              <div className="screen-panel-icon"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h8v9H3zM13 3h8v5h-8zM13 12h8v9h-8zM3 16h8v5H3z"/></svg></div>
              <h3>Dashboard com visão completa</h3>
              <p>Acompanhe em tempo real: filas de atendimento, CSAT, SLA, demandas por usuário e desempenho de toda a equipe.</p>
              <ul className="screen-panel-list">
                <li><svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg> Atendimentos passivos e ativos</li>
                <li><svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg> CSAT e índice de satisfação</li>
                <li><svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg> Demandas por usuário e equipe</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="screen-panel" id="tab-atendimentos">
          <div className="screen-panel-inner">
            <div className="screen-panel-img-wrapper">
              <div className="screen-panel-browser-bar" aria-hidden="true">
                <span className="browser-dot"></span><span className="browser-dot"></span><span className="browser-dot"></span>
                <span className="browser-url">chatsc.com.br/atendimento</span>
              </div>
              <img src="/images/platform_atendimento_real.png" width="1917" height="1115" alt="Central real de atendimentos do ChatSC com dados demonstrativos" className="screen-panel-img" loading="lazy" decoding="async" />
            </div>
            <div className="screen-panel-info">
              <div className="screen-panel-icon"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></div>
              <h3>Central de atendimento unificada</h3>
              <p>Todas as conversas do WhatsApp num só lugar, organizadas por status, com identificação automática do cliente.</p>
              <ul className="screen-panel-list">
                <li><svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg> Fila com status em tempo real</li>
                <li><svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg> Filtros por grupo e não lidas</li>
                <li><svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg> Tags e classificações automáticas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="screen-panel" id="tab-demandas">
          <div className="screen-panel-inner">
            <div className="screen-panel-img-wrapper">
              <div className="screen-panel-browser-bar" aria-hidden="true">
                <span className="browser-dot"></span><span className="browser-dot"></span><span className="browser-dot"></span>
                <span className="browser-url">chatsc.com.br/dashboard/demandas</span>
              </div>
              <img src="/images/platform_demandas_real.png" width="1917" height="1115" alt="Indicadores reais de demandas no ChatSC com dados demonstrativos" className="screen-panel-img" loading="lazy" decoding="async" />
            </div>
            <div className="screen-panel-info">
              <div className="screen-panel-icon"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
              <h3>Demandas acompanhadas de ponta a ponta</h3>
              <p>Visualize volume, cobertura, valores e evolução das demandas para orientar a operação do escritório.</p>
              <ul className="screen-panel-list">
                <li><svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg> Ocorrências e cobertura</li>
                <li><svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg> Serviços extras e valores</li>
                <li><svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg> Evolução por período</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="screen-panel" id="tab-indicadores">
          <div className="screen-panel-inner">
            <div className="screen-panel-img-wrapper">
              <div className="screen-panel-browser-bar" aria-hidden="true">
                <span className="browser-dot"></span><span className="browser-dot"></span><span className="browser-dot"></span>
                <span className="browser-url">chatsc.com.br/indicadores</span>
              </div>
              <img src="/images/platform_indicadores_real.png" width="1917" height="1115" alt="Indicadores reais do ChatSC com dados demonstrativos" className="screen-panel-img" loading="lazy" decoding="async" />
            </div>
            <div className="screen-panel-info">
              <div className="screen-panel-icon"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19V9m5 10V5m5 14v-7m5 7V3"/></svg></div>
              <h3>Indicadores para decisões melhores</h3>
              <p>Acompanhe perfil da carteira, churn, ticket médio e segmentos em uma visão gerencial.</p>
              <ul className="screen-panel-list">
                <li><svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg> Porte e regime tributário</li>
                <li><svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg> Churn e ticket médio</li>
                <li><svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg> Segmentação da carteira</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  
  <section className="section features-section light-section" id="recursos" aria-label="Recursos e funcionalidades">
    <div className="container">
      <div className="features-header">
        <span className="section-tag">Funcionalidades</span>
        <h2 className="section-heading reveal">
          Tudo que seu escritório precisa
          <span className="gradient-text"> em uma plataforma</span>
        </h2>
        <p className="reveal reveal-delay-1">
          Cada recurso foi desenvolvido pensando na rotina real dos escritórios contábeis.
        </p>
      </div>

      <div className="features-grid">

        <article className="feature-card reveal reveal-delay-1">
          <div className="feature-icon" aria-hidden="true">
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <h3>Atendimento organizado</h3>
          <p>Reúna conversas, histórico e equipe em uma operação compartilhada. Múltiplos usuários, filas e estados de atendimento.</p>
        </article>

        <article className="feature-card reveal reveal-delay-2">
          <div className="feature-icon" aria-hidden="true" style={{ background: "linear-gradient(135deg, #D95FBA, #8A4FD4)" }}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3>Clientes e relacionamento</h3>
          <p>Mantenha informações, contatos, demandas, tags e jornadas em uma visão conectada de cada cliente.</p>
        </article>

        <article className="feature-card reveal reveal-delay-3">
          <div className="feature-icon" aria-hidden="true" style={{ background: "linear-gradient(135deg, #00C6FF, #4A2FC4)" }}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
          </div>
          <h3>Execução acompanhável</h3>
          <p>Transforme solicitações em tarefas e ordens de serviço com responsáveis, prazos e estados claros.</p>
        </article>

        <article className="feature-card reveal reveal-delay-1">
          <div className="feature-icon" aria-hidden="true" style={{ background: "linear-gradient(135deg, #31216E, #6542E8)" }}>
            <svg width="28" height="28" fill="none" viewBox="0 0 32 32">
              <path d="M9 15v-5a5 5 0 0110 0v13a5 5 0 0010 0v-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="23" r="6" fill="#31216E" stroke="white" strokeWidth="2.5"/>
              <circle cx="9" cy="21.5" r="2.5" stroke="white" strokeWidth="2.25"/>
              <path d="M4.7 27.5c.85-2.2 2.35-3.3 4.3-3.3s3.45 1.1 4.3 3.3" stroke="white" strokeWidth="2.25" strokeLinecap="round"/>
              <path fill="white" fillRule="evenodd" d="M27 2a5 5 0 00-5 5c0 3.75 5 9 5 9s5-5.25 5-9a5 5 0 00-5-5zm0 3a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3>Jornadas de relacionamento</h3>
          <p>Acompanhe clientes em onboarding, implantação e processos recorrentes com etapas ordenadas e indicadores de atraso.</p>
        </article>

        <article className="feature-card reveal reveal-delay-2">
          <div className="feature-icon" aria-hidden="true" style={{ background: "linear-gradient(135deg, #6542E8, #D95FBA)" }}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
            </svg>
          </div>
          <h3>Comunicação planejada</h3>
          <p>Organize listas de transmissão, mensagens agendadas, campanhas e comunicações automáticas com controle de envio.</p>
        </article>

        <article className="feature-card reveal reveal-delay-3">
          <div className="feature-icon" aria-hidden="true" style={{ background: "linear-gradient(135deg, #D95FBA, #00C6FF)" }}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <h3>Gestão orientada por dados</h3>
          <p>Acompanhe agilidade, SLA, satisfação (CSAT), demandas e desempenho da equipe em um dashboard completo.</p>
        </article>

      </div>
    </div>
  </section>


  
  <section className="section api-section" id="api-oficial" aria-label="API Oficial WhatsApp">
    <div className="container">
      <div className="api-inner">

        <div className="api-visual reveal reveal-left">
          <div className="api-card-visual">
            <div className="api-logo-row">
              <div className="api-logo-item">
                <div className="api-logo-box whatsapp" aria-hidden="true">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 5.5h4M11 18.5h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>WhatsApp Business</span>
              </div>
              <div className="api-connector" aria-hidden="true">+</div>
              <div className="api-logo-item">
                <div className="api-logo-box coex" aria-hidden="true">
                  <img src="/images/favicon_web.png" width="128" height="130" alt="" loading="lazy" decoding="async" />
                </div>
                <span>ChatSC</span>
              </div>
            </div>
            <p className="api-description">
              Com a modalidade <strong>Coex</strong>, seu número permanece ativo no app
              enquanto toda a equipe atende pelo ChatSC simultaneamente.
            </p>

            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#25D366", flexShrink: "0" }}></span>
                Número ativo no celular e na plataforma
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6542E8", flexShrink: "0" }}></span>
                Comunicação mais rápida e estável
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D95FBA", flexShrink: "0" }}></span>
                Mais segurança e previsibilidade
              </div>
            </div>
          </div>
        </div>

        <div className="api-content reveal reveal-right">
          <span className="section-tag">API Oficial</span>
          <h2>Atendimento profissional sem abandonar o <span className="gradient-text">WhatsApp Business</span></h2>
          <p>
            Com a modalidade oficial Coex, o mesmo número continua ativo no
            WhatsApp Business enquanto a equipe atende pelo ChatSC, com uma conexão
            mais rápida, estável e segura, seguindo as regras oficiais da Meta.
          </p>
          <div className="api-features">
            <div className="api-feature-item">
              <div className="check" aria-hidden="true">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              Integração oficial com a API da Meta
            </div>
            <div className="api-feature-item">
              <div className="check" aria-hidden="true">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              Mais rapidez na entrega e no recebimento
            </div>
            <div className="api-feature-item">
              <div className="check" aria-hidden="true">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              Mais estabilidade e segurança operacional
            </div>
            <div className="api-feature-item">
              <div className="check" aria-hidden="true">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              Templates e campanhas dentro das regras do canal
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  
  <section className="section integrations-section" id="integracoes" aria-label="Integrações">
    <div className="container">
      <div className="integrations-header">
        <span className="section-tag">Integrações</span>
        <h2 className="section-heading reveal">
          Atendimento e operação contábil
          <span className="gradient-text"> no mesmo contexto</span>
        </h2>
        <p className="reveal reveal-delay-1">
          Consulte informações dos sistemas utilizados pelo escritório sem interromper
          o atendimento ou perder o contexto do cliente.
        </p>
      </div>

      <div className="integrations-grid">

        <article className="integration-card reveal reveal-delay-1">
          <div className="integration-logo whatsapp" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <h3>WhatsApp Oficial</h3>
          <p>API Oficial com modalidade Coex — atenda pelo ChatSC mantendo o WhatsApp Business ativo no celular.</p>
          <span className="integration-badge official">API Oficial Meta</span>
        </article>

        <article className="integration-card reveal reveal-delay-2">
          <div className="integration-logo acessorias" aria-hidden="true">
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" opacity="0.8"/>
              <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" opacity="0.5"/>
              <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" opacity="0.5"/>
              <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" opacity="0.9"/>
            </svg>
          </div>
          <h3>Acessórias</h3>
          <p>Importe clientes, consulte processos, solicitações e entregas sem sair do contexto do atendimento.</p>
          <span className="integration-badge native">Integração nativa</span>
        </article>

        <article className="integration-card reveal reveal-delay-3">
          <div className="integration-logo gclick" aria-hidden="true">
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12l3 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>G-Click</h3>
          <p>Vincule cadastros, busque clientes e consulte tarefas e informações operacionais durante o atendimento.</p>
          <span className="integration-badge native">Integração nativa</span>
        </article>

      </div>
    </div>
  </section>


  
  <section className="section benefits-section light-section" aria-label="Benefícios do ChatSC">
    <div className="container">
      <div className="benefits-header">
        <span className="section-tag">Benefícios</span>
        <h2 className="section-heading reveal">
          Mais visibilidade. Mais contexto.
          <span className="gradient-text"> Mais continuidade.</span>
        </h2>
        <p className="lead reveal reveal-delay-1">
          Mais visibilidade para a gestão. Mais contexto para quem atende.
          Mais continuidade para quem executa.
        </p>
      </div>

      <div className="benefits-grid">
        <div className="benefit-card benefit-card-1 reveal reveal-delay-1">
          <div className="benefit-number">01</div>
          <div className="benefit-label">Visibilidade para a gestão</div>
          <p className="benefit-desc">
            Acompanhe filas, SLA, satisfação, demandas e desempenho da equipe em tempo real.
          </p>
        </div>
        <div className="benefit-card benefit-card-2 reveal reveal-delay-2">
          <div className="benefit-number">02</div>
          <div className="benefit-label">Contexto para quem atende</div>
          <p className="benefit-desc">
            O atendente acessa histórico, demandas, jornadas e integrações sem perder o fio da conversa.
          </p>
        </div>
        <div className="benefit-card benefit-card-3 reveal reveal-delay-3">
          <div className="benefit-number">03</div>
          <div className="benefit-label">Continuidade na execução</div>
          <p className="benefit-desc">
            Da mensagem à ordem de serviço: cada solicitação tem responsável, prazo e estado rastreável.
          </p>
        </div>
      </div>
    </div>
  </section>


  
  <section className="section testimonials-section light-section" aria-label="Depoimentos">
    <div className="container">
      <div className="testimonials-header">
        <span className="section-tag">Depoimentos</span>
        <h2 className="section-heading reveal">O que dizem os escritórios que já usam</h2>
        <p className="reveal reveal-delay-1">Resultados reais de quem transformou o atendimento com o ChatSC.</p>
      </div>

      <div className="testimonials-grid">

        <blockquote className="testimonial-card reveal reveal-delay-1">
          <div className="testimonial-stars" aria-label="5 estrelas">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p className="testimonial-quote" aria-hidden="true">&quot;</p>
          <p className="testimonial-text">
            Antes perdíamos solicitações no WhatsApp toda semana. Com o ChatSC, cada demanda tem um responsável e um prazo. A equipe trabalha muito mais organizada.
          </p>
          <footer className="testimonial-author">
            <img src="/images/avatar_ricardo_web.jpg" width="160" height="160" alt="Ricardo Mendes" className="testimonial-avatar-img" loading="lazy" decoding="async" />
            <div>
              <div className="testimonial-name">Ricardo Mendes</div>
              <div className="testimonial-role">Sócio — Escritório Mendes Contabilidade</div>
            </div>
          </footer>
        </blockquote>

        <blockquote className="testimonial-card reveal reveal-delay-2">
          <div className="testimonial-stars" aria-label="5 estrelas">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p className="testimonial-quote" aria-hidden="true">&quot;</p>
          <p className="testimonial-text">
            A integração com o Acessórias mudou nosso atendimento. Consigo ver o que o cliente precisa sem sair da conversa. Muito mais agilidade no dia a dia.
          </p>
          <footer className="testimonial-author">
            <img src="/images/avatar_ana_web.jpg" width="160" height="160" alt="Ana Silva" className="testimonial-avatar-img" loading="lazy" decoding="async" />
            <div>
              <div className="testimonial-name">Ana Silva</div>
              <div className="testimonial-role">Gestora de Atendimento — Escritório Silva &amp; Associados</div>
            </div>
          </footer>
        </blockquote>

        <blockquote className="testimonial-card reveal reveal-delay-3">
          <div className="testimonial-stars" aria-label="5 estrelas">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p className="testimonial-quote" aria-hidden="true">&quot;</p>
          <p className="testimonial-text">
            O dashboard de indicadores me deu uma visão que nunca tive antes. Agora sei exatamente onde a equipe está com dificuldade e consigo agir rápido.
          </p>
          <footer className="testimonial-author">
            <img src="/images/avatar_carlos_web.jpg" width="160" height="160" alt="Carlos Ferreira" className="testimonial-avatar-img" loading="lazy" decoding="async" />
            <div>
              <div className="testimonial-name">Carlos Ferreira</div>
              <div className="testimonial-role">Proprietário — CF Contábil</div>
            </div>
          </footer>
        </blockquote>

      </div>
    </div>
  </section>


  
  <section className="section pricing-section" id="precos" aria-label="Planos e preços">
    <div className="container">
      <div className="pricing-header">
        <span className="section-tag">Planos</span>
        <h2 className="section-heading reveal">
          Escolha o plano ideal
          <span className="gradient-text"> para o seu escritório</span>
        </h2>
        <p className="reveal reveal-delay-1">Sem taxas ocultas. Comece agora e escale conforme crescer.</p>
      </div>

      <div className="pricing-carousel-controls" aria-label="Navegação dos planos">
        <button type="button" className="pricing-carousel-btn" id="pricing-prev" aria-label="Ver plano anterior">←</button>
        <span className="pricing-carousel-status" aria-live="polite"><strong id="pricing-current">1</strong> de 4</span>
        <button type="button" className="pricing-carousel-btn" id="pricing-next" aria-label="Ver próximo plano">→</button>
      </div>

      <div className="pricing-grid" id="pricing-carousel">
        <article className="pricing-card reveal reveal-delay-1" id="plan-starter">
          <div className="pricing-card-top">
            <div className="pricing-badge starter-badge">Starter</div>
            <p className="pricing-desc">Para operações enxutas começarem bem.</p>
            <div className="pricing-price"><span className="pricing-currency">R$</span><span className="pricing-value" data-target="197">197</span><span className="pricing-period">/mês</span></div>
          </div>
          <ul className="pricing-features">
            <li className="pricing-users"><span className="pf-check">✓</span> <strong>Até 5 usuários</strong></li>
            <li><span className="pf-check">✓</span> 1 número WhatsApp</li>
            <li><span className="pf-check">✓</span> Organização de clientes e demandas</li>
            <li><span className="pf-check">✓</span> Jornada do cliente</li>
            <li><span className="pf-check">✓</span> Relatórios e indicadores</li>
            <li><span className="pf-check">✓</span> Ordens de serviço</li>
          </ul>
          <a href="https://api.whatsapp.com/send/?phone=5562993353539&amp;text=Ol%C3%A1%21+Quero+solicitar+uma+demonstra%C3%A7%C3%A3o+do+ChatSC." target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-pricing" id="btn-starter"><span>Começar agora</span></a>
        </article>

        <article className="pricing-card reveal reveal-delay-2" id="plan-essencial">
          <div className="pricing-card-top">
            <div className="pricing-badge essencial-badge">Essencial</div>
            <p className="pricing-desc">Perfeito para empresas iniciantes.</p>
            <div className="pricing-price"><span className="pricing-currency">R$</span><span className="pricing-value" data-target="297">297</span><span className="pricing-period">/mês</span></div>
          </div>
          <ul className="pricing-features">
            <li className="pricing-users"><span className="pf-check">✓</span> <strong>De 6 a 10 usuários</strong></li>
            <li><span className="pf-check">✓</span> 1 número WhatsApp</li>
            <li><span className="pf-check">✓</span> Organização de clientes e demandas</li>
            <li><span className="pf-check">✓</span> Jornada do cliente</li>
            <li><span className="pf-check">✓</span> Relatórios e indicadores</li>
            <li><span className="pf-check">✓</span> Ordens de serviço</li>
          </ul>
          <a href="https://api.whatsapp.com/send/?phone=5562993353539&amp;text=Ol%C3%A1%21+Quero+solicitar+uma+demonstra%C3%A7%C3%A3o+do+ChatSC." target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-pricing" id="btn-essencial"><span>Começar agora</span></a>
        </article>

        <article className="pricing-card pricing-card-pro reveal reveal-delay-3" id="plan-profissional">
          <div className="pricing-popular-badge">Mais popular</div>
          <div className="pricing-card-top">
            <div className="pricing-badge pro-badge">Profissional</div>
            <p className="pricing-desc">Ideal para empresas em crescimento.</p>
            <div className="pricing-price"><span className="pricing-currency">R$</span><span className="pricing-value" data-target="397">397</span><span className="pricing-period">/mês</span></div>
          </div>
          <ul className="pricing-features">
            <li className="pricing-users"><span className="pf-check pro">✓</span> <strong>Até 20 usuários</strong></li>
            <li><span className="pf-check pro">✓</span> 1 número WhatsApp</li>
            <li><span className="pf-check pro">✓</span> Organização de clientes e demandas</li>
            <li><span className="pf-check pro">✓</span> Jornada do cliente</li>
            <li><span className="pf-check pro">✓</span> Relatórios e indicadores</li>
            <li><span className="pf-check pro">✓</span> Ordens de serviço</li>
          </ul>
          <a href="https://api.whatsapp.com/send/?phone=5562993353539&amp;text=Ol%C3%A1%21+Quero+solicitar+uma+demonstra%C3%A7%C3%A3o+do+ChatSC." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-pricing" id="btn-profissional"><span>Começar agora</span></a>
        </article>

        <article className="pricing-card reveal reveal-delay-4" id="plan-premium">
          <div className="pricing-card-top">
            <div className="pricing-badge unlimited-badge">Premium</div>
            <p className="pricing-desc">Para empresas com operações avançadas.</p>
            <div className="pricing-price"><span className="pricing-currency">R$</span><span className="pricing-value" data-target="497">497</span><span className="pricing-period">/mês</span></div>
          </div>
          <ul className="pricing-features">
            <li className="pricing-users"><span className="pf-check">✓</span> <strong>Até 30 usuários</strong></li>
            <li><span className="pf-check">✓</span> 1 número WhatsApp</li>
            <li><span className="pf-check">✓</span> Organização de clientes e demandas</li>
            <li><span className="pf-check">✓</span> Jornada do cliente</li>
            <li><span className="pf-check">✓</span> Relatórios e indicadores</li>
            <li><span className="pf-check">✓</span> Ordens de serviço</li>
          </ul>
          <a href="https://api.whatsapp.com/send/?phone=5562993353539&amp;text=Ol%C3%A1%21+Quero+solicitar+uma+demonstra%C3%A7%C3%A3o+do+ChatSC." target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-pricing" id="btn-premium"><span>Começar agora</span></a>
        </article>
      </div>

      <p className="pricing-note reveal">
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        Sem fidelidade. Cancele quando quiser. Suporte incluso em todos os planos.
      </p>
    </div>
  </section>


  
  <section className="section faq-section" id="faq" aria-label="Perguntas frequentes">
    <div className="container">
      <div className="faq-inner">

        <div className="faq-sidebar">
          <span className="section-tag">FAQ</span>
          <h2 className="reveal">Perguntas <span className="gradient-text">frequentes</span></h2>
          <p className="reveal reveal-delay-1">
            Tire suas principais dúvidas sobre o ChatSC antes de agendar sua demonstração.
          </p>
          <a href="https://api.whatsapp.com/send/?phone=5562993353539&amp;text=Ol%C3%A1%21+Quero+solicitar+uma+demonstra%C3%A7%C3%A3o+do+ChatSC." target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="faq-cta" style={{ marginTop: "1rem" }}>
            <span>Falar com a equipe</span>
          </a>
        </div>

        <div className="faq-list" role="list">

          <div className="faq-item" role="listitem">
            <button className="faq-question" aria-expanded="false" id="faq-q1" aria-controls="faq-a1">
              O ChatSC substitui o WhatsApp?
              <svg className="faq-chevron" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div className="faq-answer" id="faq-a1" role="region" aria-labelledby="faq-q1">
              <div className="faq-answer-inner">
                Não. O ChatSC usa o WhatsApp como canal de comunicação, organizando e centralizando as conversas na plataforma. Você continua usando o WhatsApp, mas com muito mais controle e organização.
              </div>
            </div>
          </div>

          <div className="faq-item" role="listitem">
            <button className="faq-question" aria-expanded="false" id="faq-q2" aria-controls="faq-a2">
              Preciso trocar de número?
              <svg className="faq-chevron" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div className="faq-answer" id="faq-a2" role="region" aria-labelledby="faq-q2">
              <div className="faq-answer-inner">
                Não é necessário. Você conecta o número existente do escritório ao ChatSC. Com a modalidade Coex, o mesmo número permanece ativo no WhatsApp Business.
              </div>
            </div>
          </div>

          <div className="faq-item" role="listitem">
            <button className="faq-question" aria-expanded="false" id="faq-q3" aria-controls="faq-a3">
              Posso continuar usando o WhatsApp Business?
              <svg className="faq-chevron" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div className="faq-answer" id="faq-a3" role="region" aria-labelledby="faq-q3">
              <div className="faq-answer-inner">
                Sim! Com a modalidade oficial Coex, o mesmo número pode permanecer ativo no aplicativo WhatsApp Business enquanto toda a equipe realiza atendimentos pelo ChatSC.
              </div>
            </div>
          </div>

          <div className="faq-item" role="listitem">
            <button className="faq-question" aria-expanded="false" id="faq-q4" aria-controls="faq-a4">
              Quantas pessoas podem atender simultaneamente?
              <svg className="faq-chevron" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div className="faq-answer" id="faq-a4" role="region" aria-labelledby="faq-q4">
              <div className="faq-answer-inner">
                O ChatSC suporta múltiplos usuários simultâneos. A plataforma distribui conversas entre atendentes e departamentos conforme as regras configuradas pelo seu escritório.
              </div>
            </div>
          </div>

          <div className="faq-item" role="listitem">
            <button className="faq-question" aria-expanded="false" id="faq-q5" aria-controls="faq-a5">
              Como funcionam demandas, jornadas e ordens de serviço?
              <svg className="faq-chevron" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div className="faq-answer" id="faq-a5" role="region" aria-labelledby="faq-q5">
              <div className="faq-answer-inner">
                Durante o atendimento, a equipe pode registrar o motivo da solicitação como uma <strong>demanda</strong>. A partir dela, cria-se uma tarefa ou <strong>ordem de serviço</strong> com responsável, prazo e estado. As <strong>jornadas</strong> permitem acompanhar clientes em processos recorrentes, como onboarding ou acompanhamento periódico.
              </div>
            </div>
          </div>

          <div className="faq-item" role="listitem">
            <button className="faq-question" aria-expanded="false" id="faq-q6" aria-controls="faq-a6">
              Quais sistemas possuem integração?
              <svg className="faq-chevron" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div className="faq-answer" id="faq-a6" role="region" aria-labelledby="faq-q6">
              <div className="faq-answer-inner">
                O ChatSC possui integração nativa com <strong>Acessórias</strong> (importação de clientes, consulta de processos e entregas) e <strong>G-Click</strong> (cadastros, tarefas e informações operacionais). Ambas são acessadas dentro do contexto da conversa.
              </div>
            </div>
          </div>

          <div className="faq-item" role="listitem">
            <button className="faq-question" aria-expanded="false" id="faq-q7" aria-controls="faq-a7">
              Como funcionam campanhas e listas de transmissão?
              <svg className="faq-chevron" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div className="faq-answer" id="faq-a7" role="region" aria-labelledby="faq-q7">
              <div className="faq-answer-inner">
                O ChatSC permite planejar comunicações segmentadas e acompanhar os envios de acordo com as regras do canal utilizado. Você pode criar listas de transmissão, agendar mensagens, configurar recorrência e acompanhar cada lote enviado.
              </div>
            </div>
          </div>

          <div className="faq-item" role="listitem">
            <button className="faq-question" aria-expanded="false" id="faq-q8" aria-controls="faq-a8">
              Como os dados dos clientes são protegidos?
              <svg className="faq-chevron" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div className="faq-answer" id="faq-a8" role="region" aria-labelledby="faq-q8">
              <div className="faq-answer-inner">
                O ChatSC é desenvolvido seguindo boas práticas de segurança. Os dados são armazenados de forma estruturada e o sistema mantém um histórico auditável das operações realizadas.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>


  
  <section className="section cta-section" id="cta" aria-label="Agende sua demonstração">
    <canvas id="rocket-canvas" className="rocket-canvas" aria-hidden="true"></canvas>

    <div className="container">
      <div className="cta-inner">
        <div className="cta-orb-1" aria-hidden="true"></div>
        <div className="cta-orb-2" aria-hidden="true"></div>

        <div className="cta-tag">
          <span className="section-tag">Comece agora</span>
        </div>

        <h2 className="reveal">
          Organize o atendimento.<br/>
          <span className="gradient-text">Encante seus clientes.</span>
        </h2>

        <p className="reveal reveal-delay-1">
          Agende uma demonstração gratuita e veja como o ChatSC pode transformar
          a operação do seu escritório contábil.
        </p>

        <div className="cta-actions reveal reveal-delay-2">
          <a href="https://api.whatsapp.com/send/?phone=5562993353539&amp;text=Ol%C3%A1%21+Quero+solicitar+uma+demonstra%C3%A7%C3%A3o+do+ChatSC."
             target="_blank"
             rel="noopener noreferrer"
             className="btn btn-primary btn-lg"
             id="final-cta-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Agendar demonstração</span>
          </a>
          <a href="#como-funciona" className="btn btn-secondary btn-lg" id="final-secondary-btn">
            <span>Ver como funciona</span>
          </a>
        </div>
      </div>
    </div>
  </section>


  
  <footer className="footer" aria-label="Rodapé">
    <div className="container">
      <div className="footer-top">

        <div className="footer-brand">
          <a href="#" aria-label="ChatSC — Ir para o início">
            <img src="/images/logo_horizontal_light_web.png" width="450" height="105" alt="ChatSC Logo" className="footer-logo-img" loading="lazy" decoding="async" />
          </a>
          <p>
            Tecnologia para organizar, acompanhar e encantar.<br/>
            Plataforma de atendimento e sucesso do cliente para escritórios contábeis.
          </p>
          <div className="footer-social" aria-label="Redes sociais">
            <a href="https://www.instagram.com/sucessochatsc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram do ChatSC">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@Sucessodocliente-l9y" target="_blank" rel="noopener noreferrer" aria-label="YouTube do ChatSC">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Produto</h4>
          <ul>
            <li><a href="#recursos">Funcionalidades</a></li>
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#integracoes">Integrações</a></li>
            <li><a href="#produto">O problema que resolvemos</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#inicio">Sobre o ChatSC</a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=5562993353539&amp;text=Ol%C3%A1%21+Quero+solicitar+uma+demonstra%C3%A7%C3%A3o+do+ChatSC." target="_blank" rel="noopener noreferrer">Contato</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
            <li><a href="/termos-de-uso">Termos de Uso</a></li>
            <li><a href="/politica-de-privacidade#direitos-dos-titulares">LGPD</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ChatSC — Todos os direitos reservados.</p>
        <div className="footer-bottom-links">
          <a href="/politica-de-privacidade">Privacidade</a>
          <a href="/termos-de-uso">Termos</a>
          <a href="/politica-de-privacidade#direitos-dos-titulares">LGPD</a>
        </div>
      </div>
    </div>
  </footer>

  
  <a href="https://api.whatsapp.com/send/?phone=5562993353539&amp;text=Ol%C3%A1%21+Quero+solicitar+uma+demonstra%C3%A7%C3%A3o+do+ChatSC."
     target="_blank"
     rel="noopener noreferrer"
     className="whatsapp-float-btn"
     aria-label="Falar pelo WhatsApp"
     id="whatsapp-float-link">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>

  

      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
