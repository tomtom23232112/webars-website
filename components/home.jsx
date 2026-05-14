// ─── Hero ───────────────────────────────────────────────────────────────────
function HeroSection({ navigate }) {
  const [glitchDone, setGlitchDone] = React.useState(false);
  const [linesIn, setLinesIn] = React.useState(0);

  React.useEffect(() => {
    if (!document.getElementById('wa-global-layout')) {
      const g = document.createElement('style');
      g.id = 'wa-global-layout';
      g.textContent = `p.section-label{margin-bottom:1rem}`;
      document.head.appendChild(g);
    }
    const timers = [
      setTimeout(() => setLinesIn(1), 200),
      setTimeout(() => setLinesIn(2), 600),
      setTimeout(() => setLinesIn(3), 1000),
      setTimeout(() => setGlitchDone(true), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="hero">
      <div className="hero-cloud-left" />
      <div className="hero-cloud-right" />
      <div className="hero-content">
        <div className="hero-proof-strip">
          <span className="proof-live-dot" />
          <span>★ 4.9 Trustpilot</span>
          <span className="proof-sep">·</span>
          <span>Ø 2–3 Wo. Lieferzeit</span>
          <span className="proof-sep">·</span>
          <span>24h Reaktionszeit</span>
        </div>
        <h1 className="hero-h1">
          <span className={`hero-line ${linesIn >= 1 ? 'line-in' : ''}`}>Dein Unternehmen.</span>
          <span className={`hero-line hero-line-accent ${linesIn >= 2 ? 'line-in' : ''} ${!glitchDone ? 'glitch-active' : ''}`} data-text="Automatisiert.">Automatisiert.</span>
          <span className={`hero-line ${linesIn >= 3 ? 'line-in' : ''}`}>Skaliert.</span>
        </h1>
        <p className="hero-sub">Wir automatisieren wiederkehrende Aufgaben in deinem Unternehmen und bauen Websites, die wirklich Kunden bringen. Aus Wien & Frankfurt. Für den deutschsprachigen Raum.</p>
        <div className="hero-ctas" style={{justifyContent:'center',marginTop:'2.5rem'}}>
          <button className="btn-primary btn-xl hero-btn-primary" onClick={() => navigate('contact')}>Jetzt kostenlos beraten lassen →</button>
          <button className="btn-ghost btn-xl hero-btn-ghost" onClick={() => { const el=document.getElementById('ki-section'); if(el) window.scrollTo({top:el.offsetTop-80,behavior:'smooth'}); }}>Mehr erfahren</button>
        </div>
      </div>
      <div className="hero-scroll-hint" style={{position:'absolute',zIndex:2}}>scroll</div>
    </section>
  );
}

// ─── Trust Logos (CENTER) ─────────────────────────────────────────────────────────
function TrustLogoSection() {
  React.useEffect(() => {
    if (document.getElementById('wa-trust-styles')) return;
    const s = document.createElement('style');
    s.id = 'wa-trust-styles';
    s.textContent = `
      .trust-logo-section{padding:2.5rem var(--px,40px) 2rem;border-bottom:1px solid var(--border)}
      .trust-logo-label{text-align:center;font-size:11px;color:var(--muted);letter-spacing:.1em;text-transform:lowercase;margin-bottom:1.75rem}
      .trust-logo-row{display:flex;align-items:center;justify-content:center;gap:2.5rem;flex-wrap:wrap}
      .trust-logo-item{filter:grayscale(1);opacity:.32;transition:filter .3s,opacity .3s;cursor:default;padding:6px 12px;border-radius:4px}
      .trust-logo-item:hover{filter:none;opacity:1}
      .trust-logo-text{font-family:var(--font-head);font-size:15px;font-weight:800;color:var(--logo-color,#fff);white-space:nowrap;letter-spacing:.02em}
    `;
    document.head.appendChild(s);
  }, []);

  const logos = [
    { name:'Grundner GmbH',    color:'#2563eb' },
    { name:'Schmuckkultur',    color:'#d97706' },
    { name:'Dr. Derya',        color:'#059669' },
    { name:'CityEvents',       color:'#dc2626' },
    { name:'Stefanie Kosmalla',color:'#7c3aed' },
  ];

  return (
    <section className="trust-logo-section">
      <p className="trust-logo-label">Vertrauen von Unternehmen aus dem DACH-Raum</p>
      <div className="trust-logo-row">
        {logos.map(l => (
          <div key={l.name} className="trust-logo-item" style={{'--logo-color': l.color}}>
            <span className="trust-logo-text">{l.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Marquee ─────────────────────────────────────────────────────────────────
function MarqueeSection() {
  return (
    <div className="marquee-section">
      <MarqueeBand items={['KI-Automatisierung','Webdesign','SEO','GEO','Sales Funnels','E-Mail-Marketing','Brand Identity','UX/UI']} />
      <MarqueeBand items={['Wien','Frankfurt','DACH','Framer','n8n','Make','ChatGPT API','Zapier','Claude']} rtl={true} />
    </div>
  );
}

// ─── Features (LEFT) ────────────────────────────────────────────────────────────
function FeaturesSection({ navigate }) {
  const cards = [
    { num:'01', title:'KI-Automatisierung', desc:'Wir automatisieren repetitive Prozesse — von Lead-Erfassung bis Onboarding. Mit n8n, Make und ChatGPT-Integrationen.', page:'ki' },
    { num:'02', title:'Webdesign', desc:'Websites, die nicht nur gut aussehen, sondern konvertieren. Individuell auf Framer entwickelt, schnell geliefert.', page:'webdesign' },
    { num:'03', title:'SEO & GEO', desc:'Sichtbarkeit in klassischen Suchmaschinen und KI-Suchen wie ChatGPT, Perplexity & Google SGE.', page:'seo' },
  ];
  return (
    <section className="section features-section">
      <Reveal><p className="section-label">{ '{ Was wir machen }' }</p></Reveal>
      <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>Drei Hebel.<br/>Ein Ziel: Dein Wachstum.</h2></Reveal>
      <div className="features-grid">
        {cards.map((c, i) => (
          <Reveal key={c.num} delay={i * 120} className="feature-card-wrap">
            <div className="feature-card" onClick={() => navigate(c.page)} data-hover>
              <div className="feature-card-top"><span className="feature-num">{`{ ${c.num} }`}</span></div>
              <h3 className="feature-title">{c.title}</h3>
              <p className="feature-desc">{c.desc}</p>
              <span className="feature-link">Mehr erfahren →</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─── Projects (LEFT) ───────────────────────────────────────────────────────────
function ProjectsSection() {
  React.useEffect(() => {
    if (document.getElementById('wa-projects-styles')) return;
    const s = document.createElement('style');
    s.id = 'wa-projects-styles';
    s.textContent = `
      .projects-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:3rem}
      @media(max-width:640px){.projects-grid{grid-template-columns:1fr}}
      .project-card{border:1px solid var(--border);border-radius:14px;overflow:hidden;background:var(--surface);transition:border-color .35s,transform .35s}
      .project-card:hover{border-color:var(--proj-color);transform:translateY(-4px)}
      .project-thumb{height:180px;display:flex;align-items:center;justify-content:center;background:var(--proj-dim)}
      .project-thumb-wordmark{font-family:var(--font-display);font-size:clamp(22px,3vw,32px);letter-spacing:.06em;color:var(--proj-color);opacity:.6;padding:0 1.5rem;text-align:center}
      .project-body{padding:1.5rem 1.5rem 1.75rem}
      .project-name{font-family:var(--font-head);font-size:17px;font-weight:700;margin:0 0 .65rem;color:var(--text)}
      .project-tags{display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:1.25rem}
      .project-tag{font-size:11px;padding:3px 10px;border-radius:20px;border:1px solid var(--border);color:var(--muted);letter-spacing:.03em}
      .project-case-link{font-size:13px;color:var(--muted);font-weight:600;transition:color .2s}
      .project-card:hover .project-case-link{color:var(--proj-color)}
      .projects-footer{text-align:center;margin-top:3rem}
    `;
    document.head.appendChild(s);
  }, []);

  const projects = [
    { name:'Grundner GmbH',  tags:['Webdesign','Framer','SEO'],            color:'#2563eb', dim:'rgba(37,99,235,.07)'   },
    { name:'Schmuckkultur',  tags:['Webdesign','Brand Identity'],           color:'#d97706', dim:'rgba(217,119,6,.07)'   },
    { name:'Dr. Derya',      tags:['Webdesign','GEO','Framer'],             color:'#059669', dim:'rgba(5,150,105,.07)'   },
    { name:'CityEvents',     tags:['KI-Automatisierung','Webdesign','SEO'], color:'#dc2626', dim:'rgba(220,38,38,.07)'   },
  ];

  return (
    <section className="section">
      <Reveal><p className="section-label">{ '{ Ausgewählte Arbeiten }' }</p></Reveal>
      <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>2024–2026</h2></Reveal>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <div className="project-card" style={{'--proj-color': p.color, '--proj-dim': p.dim}}>
              <div className="project-thumb">
                <span className="project-thumb-wordmark">{p.name}</span>
              </div>
              <div className="project-body">
                <h3 className="project-name">{p.name}</h3>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <span className="project-case-link">Case ansehen →</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={420}>
        <div className="projects-footer">
          <button className="btn-ghost">Alle Projekte ansehen →</button>
        </div>
      </Reveal>
    </section>
  );
}

// ─── KI Section (LEFT) ───────────────────────────────────────────────────────────
function WorkflowSVG() {
  const nodes = [
    { x:20, y:40, w:120, h:48, label:'Lead Eingang', sub:'Web / CRM' },
    { x:210, y:40, w:120, h:48, label:'KI Analyse', sub:'ChatGPT API' },
    { x:400, y:40, w:120, h:48, label:'CRM Update', sub:'HubSpot' },
    { x:210, y:160, w:120, h:48, label:'E-Mail Seq.', sub:'Make / n8n' },
    { x:400, y:160, w:120, h:48, label:'Slack Alert', sub:'Webhook' },
    { x:210, y:280, w:120, h:48, label:'Reporting', sub:'Notion / Sheet' },
  ];
  const edges = [[200,64,210,64],[330,64,400,64],[270,88,270,160],[330,184,400,184],[270,208,270,280]];
  return (
    <svg viewBox="0 0 560 360" className="workflow-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor" /></marker>
      </defs>
      {edges.map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 5" markerEnd="url(#arr)" opacity="0.7" style={{animation:`dashFlow ${1.8+i*.2}s linear infinite`}} />
      ))}
      {nodes.map((n,i) => (
        <g key={i} style={{animation:`nodePulse ${2+i*.3}s ease-in-out infinite alternate`}}>
          <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="6" fill="#141414" stroke="currentColor" strokeWidth="1" filter="url(#glow)" opacity="0.9" />
          <text x={n.x+n.w/2} y={n.y+18} textAnchor="middle" fill="#fff" fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="500">{n.label}</text>
          <text x={n.x+n.w/2} y={n.y+34} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="DM Sans, sans-serif">{n.sub}</text>
        </g>
      ))}
    </svg>
  );
}

function KISection({ navigate }) {
  const features = [
    'Automatische Lead-Qualifizierung & CRM-Integration',
    'KI-gestützte E-Mail-Sequenzen & Follow-ups',
    'Chatbots & KI-Assistenten für deine Website',
    'Datenpipelines & Reporting ohne Excel-Hölle',
    'Anbindung an bestehende Tools (HubSpot, Notion, Slack)',
  ];
  return (
    <section className="section ki-section" id="ki-section">
      <div className="ki-inner">
        <div className="ki-text">
          <Reveal><p className="section-label">{ '{ KI-Automatisierung }' }</p></Reveal>
          <Reveal delay={80}><h2 className="section-h2" style={{fontSize:'clamp(40px,5vw,72px)',marginBottom:'1.5rem'}}>Schluss mit<br/>manuellem Aufwand.</h2></Reveal>
          <Reveal delay={160}><p className="body-lg" style={{color:'var(--muted)',marginBottom:'3rem'}}>Wir bauen dir KI-Workflows, die rund um die Uhr für dich arbeiten — ganz ohne deinen Input.</p></Reveal>
          <div className="ki-features">
            {features.map((f,i) => (
              <Reveal key={i} delay={200+i*80}>
                <div className="ki-feat-item"><span className="ki-check">✓</span><span>{f}</span></div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={600}>
            <button className="btn-primary" style={{marginTop:'3rem'}} onClick={() => navigate('ki')}>KI-Automatisierung anfragen →</button>
          </Reveal>
        </div>
        <Reveal delay={200} className="ki-visual"><WorkflowSVG /></Reveal>
      </div>
    </section>
  );
}

// ─── Comparison (CENTER) ─────────────────────────────────────────────────────────
function ComparisonSection() {
  React.useEffect(() => {
    if (document.getElementById('wa-comp-styles')) return;
    const s = document.createElement('style');
    s.id = 'wa-comp-styles';
    s.textContent = `
      .comp-inner{max-width:860px;margin:0 auto}
      .comp-note{text-align:center;max-width:640px;margin:2rem auto 0;font-size:14px;color:var(--muted);line-height:1.7}
    `;
    document.head.appendChild(s);
  }, []);

  const rows = [
    { label:'Reaktionszeit',        wa:'24h',         free:'variabel',  big:'1–2 Wochen' },
    { label:'Lieferzeit',           wa:'2–3 Wochen', free:'variabel',  big:'2–3 Monate' },
    { label:'KI-Automatisierung',   wa:'✓',           free:'selten',    big:'teuer extra' },
    { label:'Persönlicher Kontakt', wa:'✓',           free:'✓',         big:'✗' },
    { label:'Büro Wien & Frankfurt',wa:'✓',           free:'✗',         big:'✗' },
    { label:'Faire Preise',         wa:'✓',           free:'✓',         big:'✗' },
  ];
  return (
    <section className="section comparison-section">
      <Reveal><p className="section-label" style={{justifyContent:'center'}}>{ '{ Warum WebArs }' }</p></Reveal>
      <Reveal delay={80}><h2 className="section-h2" style={{textAlign:'center',marginBottom:'3rem'}}>Kein Roulette.<br/>Kein Offshore.</h2></Reveal>
      <Reveal delay={160}>
        <div className="comp-inner">
          <div className="comparison-table">
            <div className="comp-header">
              <div className="comp-label-col"></div>
              <div className="comp-col comp-col-wa">WebArs</div>
              <div className="comp-col">Freelancer</div>
              <div className="comp-col">Große Agentur</div>
            </div>
            {rows.map(r => (
              <div key={r.label} className="comp-row">
                <div className="comp-label-col">{r.label}</div>
                <div className="comp-col comp-col-wa comp-val-wa">{r.wa}</div>
                <div className="comp-col comp-val">{r.free}</div>
                <div className="comp-col comp-val">{r.big}</div>
              </div>
            ))}
          </div>
          <p className="comp-note">Persönlicher Ansprechpartner in Wien & Frankfurt. Kein anonymes Ticketsystem, keine Offshore-Teams — nur direkte Kommunikation und nachweisbare Ergebnisse.</p>
        </div>
      </Reveal>
    </section>
  );
}

// ─── Testimonials (LEFT) ─────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { quote:'"WebArs hat unsere Buchungsrate in 6 Wochen um 61% gesteigert. Das ist kein Marketing — das sind Zahlen."', name:'Lena Chatsakos & Jimmy Jura', role:'CityEvents', stats:[{v:'+61%',l:'Konversionsrate'},{v:'+28%',l:'Kundenbindung'}] },
  { quote:'"Die haben genau verstanden, was ich brauche. Nicht eine Website — ein System, das neue Kunden bringt."', name:'Prince Mike', role:'DJ & Sprnterrecords', stats:[] },
  { quote:'"Geliefert in 2 Wochen. Genau wie versprochen. Qualität, die man so bei kleinen Agenturen nicht erwartet."', name:'Anna Karenina', role:'E-Commerce', stats:[] },
];

function TestimonialsSection() {
  const [active, setActive] = React.useState(0);
  const t = TESTIMONIALS[active];
  return (
    <section className="section testimonials-section">
      <Reveal><p className="section-label">{ '{ Was Kunden sagen }' }</p></Reveal>
      <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>Ergebnisse,<br/>keine Versprechen.</h2></Reveal>
      <div className="testimonial-body">
        <div className="testimonial-photo">
          <svg width="100%" height="100%" style={{position:'absolute',inset:0}}>
            <defs><pattern id="tpp" patternUnits="userSpaceOnUse" width="16" height="16" patternTransform="rotate(45)"><rect width="8" height="16" fill="#111" /><rect x="8" width="8" height="16" fill="#0e0e0e" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#tpp)" />
          </svg>
          <div className="photo-label-inner">Portrait</div>
          {t.stats.length > 0 && (
            <div className="testimonial-stats">
              {t.stats.map(s => (
                <div key={s.l} className="testimonial-stat">
                  <span className="stat-val">{s.v}</span>
                  <span className="stat-lbl">{s.l}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="testimonial-content">
          <p className="testimonial-quote">{t.quote}</p>
          <p className="testimonial-name">{t.name}</p>
          <p className="testimonial-role">{t.role}</p>
          <div className="testimonial-dots">
            {TESTIMONIALS.map((_,i) => (
              <button key={i} className={`dot ${i===active?'dot-active':''}`} onClick={() => setActive(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Offer Process (CENTER) ────────────────────────────────────────────────────────
function OfferProcessSection({ navigate }) {
  React.useEffect(() => {
    if (document.getElementById('wa-offer-styles')) return;
    const s = document.createElement('style');
    s.id = 'wa-offer-styles';
    s.textContent = `
      .offer-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;max-width:900px;margin:0 auto}
      @media(max-width:640px){.offer-grid{grid-template-columns:1fr}}
      .offer-card{border:1px solid var(--border);border-radius:14px;padding:2rem 2rem 1.75rem;position:relative;background:var(--surface);transition:border-color .3s,transform .35s;overflow:hidden;text-align:center}
      .offer-card:hover{border-color:var(--accent);transform:translateY(-4px)}
      .offer-card.offer-highlight{border-color:var(--accent);background:linear-gradient(135deg,rgba(24,64,255,.07) 0%,var(--surface) 100%)}
      .offer-step-num{font-family:var(--font-display);font-size:88px;line-height:1;color:var(--accent);opacity:.12;position:absolute;bottom:-.5rem;right:1rem;pointer-events:none;user-select:none;transition:opacity .3s}
      .offer-card:hover .offer-step-num,.offer-card.offer-highlight .offer-step-num{opacity:.28}
      .offer-step-tag{display:inline-block;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:.85rem;font-family:var(--font-head);font-weight:700}
      .offer-step-title{font-family:var(--font-head);font-size:21px;font-weight:800;margin:0 0 .65rem;color:var(--text)}
      .offer-step-desc{font-size:15px;color:var(--muted);line-height:1.7;margin:0;position:relative;z-index:1}
      .offer-highlight .offer-step-tag{color:#fff;background:var(--accent);padding:2px 8px;border-radius:4px;letter-spacing:.08em}
      .offer-cta-block{text-align:center;margin-top:3rem}
      .offer-cta-note{font-size:13px;color:var(--muted);margin-top:1rem;letter-spacing:.02em}
    `;
    document.head.appendChild(s);
  }, []);

  const steps = [
    { num:'01', tag:'Schritt 1', title:'Erstgespräch', desc:'30 Minuten, kostenlos und unverbindlich. Wir lernen dein Unternehmen kennen — kein Pitch, keine Verpflichtung.', highlight:false },
    { num:'02', tag:'Schritt 2', title:'Analyse', desc:'Wir analysieren dein Potenzial, deine Mitbewerber und die optimale Strategie — bevor wir auch nur eine Zahl nennen.', highlight:false },
    { num:'03', tag:'Schritt 3', title:'Dein Angebot', desc:'Du bekommst ein maßgeschneidertes Angebot — transparent, fair, ohne versteckte Kosten. Erst hier sprechen wir über Zahlen.', highlight:true },
    { num:'04', tag:'Schritt 4', title:'Umsetzung', desc:'Sobald du grünes Licht gibst, legen wir los. Schnell, strukturiert, messbar — mit festen Meilensteinen und direktem Kontakt.', highlight:false },
  ];

  return (
    <section className="section">
      <Reveal><p className="section-label" style={{justifyContent:'center'}}>{ '{ Wie läuft es ab? }' }</p></Reveal>
      <Reveal delay={80}><h2 className="section-h2" style={{textAlign:'center',marginBottom:'1.5rem'}}>Erst das Gespräch.<br/>Dann der Preis.</h2></Reveal>
      <Reveal delay={150}>
        <p className="body-lg" style={{color:'var(--muted)',textAlign:'center',maxWidth:'540px',margin:'0 auto',marginBottom:'3rem'}}>
          Kein Fixpreis von der Stange. Jedes Projekt ist anders — deshalb bekommst du ein Angebot, das wirklich zu dir passt.
        </p>
      </Reveal>
      <div className="offer-grid">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={200 + i * 100}>
            <div className={`offer-card${step.highlight ? ' offer-highlight' : ''}`}>
              <span className="offer-step-num">{step.num}</span>
              <p className="offer-step-tag">{step.tag}</p>
              <h3 className="offer-step-title">{step.title}</h3>
              <p className="offer-step-desc">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={540}>
        <div className="offer-cta-block">
          <button className="btn-primary btn-xl" onClick={() => navigate('contact')}>Kostenloses Erstgespräch buchen →</button>
          <p className="offer-cta-note">Kostenlos · Unverbindlich · Antwort innerhalb 24h</p>
        </div>
      </Reveal>
    </section>
  );
}

// ─── FAQ (LEFT) ───────────────────────────────────────────────────────────────────
const FAQS = [
  { q:'Was ist KI-Automatisierung und brauche ich das wirklich?', a:'KI-Automatisierung bedeutet, dass wiederkehrende Aufgaben — vom Lead-Management bis zur Kundenkommunikation — von intelligenten Workflows übernommen werden. Das spart Zeit, reduziert Fehler und skaliert ohne Mehrkosten. Ja, du brauchst das.' },
  { q:'Welche KI-Tools setzt WebArs ein?', a:'Wir arbeiten mit n8n, Make (ex-Integromat), dem OpenAI/Claude API, Zapier, und bauen individuelle Integrationen für HubSpot, Notion, Slack, Pipedrive und weitere Tools.' },
  { q:'Wie lange dauert die Umsetzung?', a:'Eine Standard-Website liefern wir in 2–3 Wochen. KI-Workflows sind je nach Komplexität in 1–4 Wochen live. Wir sind schnell — kein bürokratischer Overhead.' },
  { q:'Arbeitet ihr mit kleinen Unternehmen?', a:'Ja. Unsere Zielgruppe sind ambitionierte KMUs im DACH-Raum. Groß denken, schlank umsetzen — das ist unser Ansatz.' },
  { q:'Gibt es laufende Betreuung nach dem Launch?', a:'Ja, abhängig vom Leistungsumfang. Wir bieten laufendes Monitoring, Optimierung und Support — je nach Bedarf monatlich oder projektbasiert.' },
  { q:'Was ist der Unterschied zwischen SEO und GEO?', a:'SEO optimiert für klassische Suchmaschinen wie Google. GEO (Generative Engine Optimization) sorgt dafür, dass dein Unternehmen von KI-Systemen wie ChatGPT, Perplexity und Claude empfohlen wird.' },
  { q:'Was passiert, wenn ich nicht zufrieden bin?', a:'Wir arbeiten mit transparenten Meilensteinen. Bei jedem Schritt entscheidest du, ob wir weitermachen. Nach 14 Tagen gibst du uns ehrliches Feedback — wenn es nicht passt, gehen wir auseinander, kein Drama.' },
  { q:'Bindet ihr mich an einen langfristigen Vertrag?', a:'Nein. Webdesign-Projekte sind Einmalleistungen. KI-Automatisierung und SEO laufen monatlich — du bist nie länger als einen Monat gebunden.' },
  { q:'Kann ich die Website später selbst pflegen?', a:'Ja. Wir übergeben die Website mit einer kurzen Einführung. Du kannst Texte, Bilder und Inhalte selbst ändern. Komplexere Änderungen übernehmen wir auf Wunsch.' },
];

function FAQSection() {
  const [open, setOpen] = React.useState(null);
  return (
    <section className="section faq-section">
      <Reveal><p className="section-label">{ '{ FAQ }' }</p></Reveal>
      <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>Häufige Fragen.</h2></Reveal>
      <div className="faq-list">
        {FAQS.map((f,i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={i*50}>
              <div className={`faq-item ${isOpen?'faq-open':''}`}>
                <button className="faq-q" onClick={() => setOpen(isOpen?null:i)} aria-expanded={isOpen} aria-controls={`faq-a-${i}`}>
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen?'−':'+'}</span>
                </button>
                <div id={`faq-a-${i}`} className="faq-a-wrap" style={{maxHeight:isOpen?'400px':'0',overflow:'hidden',transition:'max-height .4s ease'}}>
                  <div className="faq-a">{f.a}</div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

// ─── Closing CTA (CENTER) ─────────────────────────────────────────────────────────
function ClosingCTA({ navigate }) {
  React.useEffect(() => {
    if (document.getElementById('wa-cta-styles')) return;
    const s = document.createElement('style');
    s.id = 'wa-cta-styles';
    s.textContent = `
      .closing-cta{background:linear-gradient(180deg,#04070f 0%,#060d24 28%,var(--accent) 68%,var(--bg) 100%)!important}
      .closing-glow{background:radial-gradient(ellipse at 50% 60%,var(--accent) 0%,rgba(0,0,0,0) 65%)!important;opacity:.55;animation:glowPulse 5s ease-in-out infinite alternate}
      @keyframes glowPulse{0%{opacity:.35;transform:scale(1) translateX(-50%)}100%{opacity:.7;transform:scale(1.2) translateX(-42%)}}
      .cta-cloud-left,.cta-cloud-right{position:absolute;width:130%;height:640px;bottom:-200px;background-image:url('assets/cloud.png');background-size:contain;background-repeat:no-repeat;background-position:center top;opacity:0;pointer-events:none;z-index:1}
      .cta-cloud-left{left:-55%;animation:cloudInLeft 1.4s ease 0.3s both,cloudDriftL 11s ease-in-out 1.7s infinite}
      .cta-cloud-right{right:-55%;animation:cloudInRight 1.4s ease 0.3s both,cloudDriftR 14s ease-in-out 2.2s infinite}
      .cta-trust-row{display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;margin:1.5rem 0}
      .cta-trust-row span{font-size:14px;color:rgba(255,255,255,.75);display:flex;align-items:center;gap:.4rem}
      .cta-check{color:#4ade80;font-weight:700;font-size:16px}
      .cta-dual-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
      .cta-dual-btns a{display:inline-flex;align-items:center;text-decoration:none}
      .cta-microcopy{font-size:12px;color:rgba(255,255,255,.3);margin-top:1.75rem;letter-spacing:.03em}
    `;
    document.head.appendChild(s);
  }, []);

  return (
    <section className="closing-cta" style={{overflow:'hidden'}}>
      <div className="cta-cloud-left" />
      <div className="cta-cloud-right" />
      <div className="closing-bg"><div className="closing-glow" /></div>
      <div className="closing-content">
        <Reveal><h2 className="closing-h">Bereit, smarter<br/>zu wachsen?</h2></Reveal>
        <Reveal delay={120}><p className="closing-sub">Kostenloses Erstgespräch — 30 Minuten, kein Pitch, nur Klarheit.</p></Reveal>
        <Reveal delay={220}>
          <div className="cta-trust-row">
            <span><span className="cta-check">✓</span>Antwort innerhalb 24h</span>
            <span><span className="cta-check">✓</span>Kein Verkaufsdruck</span>
            <span><span className="cta-check">✓</span>DSGVO-konform</span>
          </div>
        </Reveal>
        <Reveal delay={320}>
          <div className="cta-dual-btns">
            <button className="btn-primary btn-xl" onClick={() => navigate('contact')}>Termin buchen →</button>
            <a href="tel:+436703061078" className="btn-ghost btn-xl">+43 670 3061078</a>
          </div>
        </Reveal>
        <Reveal delay={420}><p className="cta-microcopy">Bereits über 50 Unternehmen vertrauen WebArs · ★ 4.9/5 Trustpilot</p></Reveal>
      </div>
    </section>
  );
}

// ─── HomePage ────────────────────────────────────────────────────────────────
function HomePage({ navigate }) {
  return (
    <main>
      <HeroSection navigate={navigate} />
      <TrustLogoSection />
      <MarqueeSection />
      <FeaturesSection navigate={navigate} />
      <ProjectsSection />
      <KISection navigate={navigate} />
      <ComparisonSection />
      <TestimonialsSection />
      <OfferProcessSection navigate={navigate} />
      <FAQSection />
      <ClosingCTA navigate={navigate} />
    </main>
  );
}

Object.assign(window, { HomePage });
