function KIPage({ navigate }) {
  const workflows = [
    { icon:'⬡', title:'Lead-Qualifizierung', desc:'Eingehende Leads werden automatisch analysiert, bewertet und ins CRM eingetragen — ohne manuellen Aufwand.' },
    { icon:'◻', title:'E-Mail-Automation', desc:'Personalisierte Follow-up-Sequenzen basierend auf dem Verhalten deiner Kontakte. Vollautomatisch.' },
    { icon:'◈', title:'KI-Chatbot', desc:'24/7 Kundenkommunikation auf deiner Website — beantwortet Fragen, qualifiziert Leads, bucht Termine.' },
    { icon:'▣', title:'Datenpipelines', desc:'Daten aus allen Tools landen automatisch dort, wo du sie brauchst. Kein manuelles Copy-Paste mehr.' },
    { icon:'◉', title:'Tool-Integrationen', desc:'HubSpot, Notion, Slack, Pipedrive — wir verbinden dein Tech-Stack zu einem reibungslosen System.' },
    { icon:'⬢', title:'KI-Reporting', desc:'Automatisierte Reports und Dashboards, die dir zeigen was wichtig ist — täglich, wöchentlich, monatlich.' },
  ];

  const tools = ['n8n','Make','ChatGPT API','Claude API','Zapier','HubSpot','Notion','Slack','Pipedrive','Airtable'];

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <Reveal><p className="section-label">{ '{ KI-Automatisierung }' }</p></Reveal>
          <Reveal delay={100}><h1 className="page-h1">Dein Unternehmen<br/>arbeitet 24/7.</h1></Reveal>
          <Reveal delay={200}><p className="page-sub">Wir bauen KI-Workflows, die repetitive Aufgaben übernehmen, Fehler eliminieren und dein Wachstum skalieren — ganz ohne dein Zutun.</p></Reveal>
          <Reveal delay={300}>
            <div className="hero-ctas" style={{marginTop:'2.5rem'}}>
              <button className="btn-primary" onClick={() => navigate('contact')}>Kostenloses Erstgespräch →</button>
              <button className="btn-ghost" onClick={() => navigate('contact')}>Mehr erfahren</button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} className="page-hero-visual">
          <div className="ki-hero-visual">
            <div className="ki-node-animate">
              {['Lead\nEingang','KI\nAnalyse','CRM\nUpdate','E-Mail\nSeq.','Slack\nAlert'].map((n, i) => (
                <div key={i} className="ki-mini-node" style={{ animationDelay: `${i * 0.4}s` }}>{n}</div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Workflow grid */}
      <section className="section">
        <Reveal><p className="section-label">{ '{ Was wir automatisieren }' }</p></Reveal>
        <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>Jede Aufgabe.<br/>Einmal gebaut. Immer läuft.</h2></Reveal>
        <div className="features-grid">
          {workflows.map((w, i) => (
            <Reveal key={w.title} delay={i * 80} className="feature-card-wrap">
              <div className="feature-card">
                <div className="feature-card-top">
                  <span className="feature-num">{`{ 0${i+1} }`}</span>
                  <span className="feature-icon">{w.icon}</span>
                </div>
                <h3 className="feature-title">{w.title}</h3>
                <p className="feature-desc">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="section" style={{borderTop:'1px solid var(--border)'}}>
        <Reveal><p className="section-label">{ '{ Tools & Technologien }' }</p></Reveal>
        <Reveal delay={100}><h2 className="section-h2" style={{marginBottom:'2.5rem'}}>Wir sprechen<br/>deine Tools.</h2></Reveal>
        <div className="tools-grid">
          {tools.map((t, i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="tool-badge">{t}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="closing-cta" style={{minHeight:'50vh'}}>
        <div className="closing-glow" />
        <div className="closing-content">
          <Reveal><h2 className="closing-h" style={{fontSize:'clamp(40px,6vw,90px)'}}>Bereit für<br/>die Automatisierung?</h2></Reveal>
          <Reveal delay={150}><p className="closing-sub">30 Minuten Erstgespräch. Kostenlos. Unverbindlich.</p></Reveal>
          <Reveal delay={280}><button className="btn-primary btn-xl" onClick={() => navigate('contact')}>Jetzt anfragen →</button></Reveal>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { KIPage });
